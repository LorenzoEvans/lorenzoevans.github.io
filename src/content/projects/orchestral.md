---
title: "Orchestral"
description: "A small Rust Docker orchestrator with a scheduling daemon, HTTP API, CLI, and a k9s-style terminal UI."
pubDate: 2026-09-02
image: "/images/cloud-computing.jpg"
tags: ["Rust", "Docker", "Orchestration", "TUI"]
status: "in-progress"
---

## Overview

[Orchestral](https://github.com/LorenzoEvans/orchestral) is a Docker container orchestrator written in Rust. It has four parts: a daemon, an HTTP API, a CLI, and a terminal UI in the style of k9s or lazydocker. The daemon schedules containerized tasks on local resource capacity. The HTTP API controls the daemon. The terminal UI shows the work in real time.

Phase 1 covers one node and the local Docker daemon only. This scope lets the project get the task lifecycle, the scheduler, and the persistence model right before it adds multi-node coordination.

## Motivation

Large orchestrators such as Kubernetes solve problems that most local and small-scale workflows do not have — multi-node clusters, distributed consensus, pluggable networking.

Orchestral tests a different question: what does a minimal, correct, single-node orchestrator look like? The project builds four parts from first principles: a task lifecycle state machine, a scheduler with explicit resource accounting, a runtime layer over Docker, and a live event stream. It does this without the operational weight of a full cluster manager.

Building it also gives practice with real distributed-systems problems at a small scale — crash-consistent persistence, reconciliation after a restart, push-based state sync. At this scale, each problem stays small enough to reason about fully.

## Features

- A manager daemon owns task and node state.
- The manager makes scheduling decisions based on tracked CPU, memory, and disk capacity.
- The manager runs containers on the local Docker daemon through the `bollard` library.
- The daemon provides an HTTP API, built with `axum`, for task actions: run, list, inspect, stop, cancel, remove.
- The API also provides a `GET /events` endpoint. This endpoint uses Server-Sent Events. It sends one snapshot, then live updates. The client does not need to poll.
- The project includes a CLI and an interactive terminal UI (TUI).
- The CLI supports these commands: run, list, inspect, stop, cancel, remove, nodes.
- The TUI uses `ratatui` and `crossterm`.
- The CLI and the TUI share one API client, built with `reqwest`. This keeps the logic for talking to the daemon in one place.
- The TUI updates its state through one pure function, `apply_push_event`.
- A `tokio::select!` loop merges three inputs: terminal input, the SSE reconnect task, and a redraw tick.
- The TUI shows a task list, a node panel, and an event log, in the style of k9s.
- The TUI asks for confirmation before it stops, cancels, or removes a task.
- The daemon saves task and node state to an embedded `sled` database on every change.
- A daemon restart does not lose task history.
- On startup, the daemon checks each restored task against Docker's real state. It uses four rules:
  1. If the task's container still runs, the daemon marks the task `Running` and rebuilds its resource reservation.
  2. If the task's container is gone, the daemon marks the task `Failed`.
  3. If the task never finished scheduling, the daemon marks it `Failed` as interrupted.
  4. If the task was never scheduled, the daemon returns it to the pending queue.

## Implementation Notes

The project models the task lifecycle as an explicit state machine:

`Pending -> Scheduled -> Starting -> Running -> Stopping -> Stopped`

Two states branch off this main path. `Cancelled` can follow `Pending` or `Scheduled`. `Failed` can follow `Starting` or `Running`. This one state machine is the source of truth. The manager's transition logic and the TUI's rendering both follow it.

The project separates the manager, the worker, and the daemon into distinct parts:

- `manager` owns task and node state and makes scheduling decisions. On every state change, `manager` sends a `PushEvent` over a `broadcast` channel. A `PushEvent` can be an upsert, a removal, or a full snapshot.
- `worker` and `docker_runtime` run container specs on Docker.
- `daemon` builds the HTTP API and the SSE stream on top of the same `broadcast` channel.

`store` is the persistence layer below these parts. `manager` writes to the `sled` database at each point where task state already changes. `daemon` loads saved state and reconciles it with Docker on startup.

The CLI and the TUI share one `api_client`. This keeps the HTTP logic for talking to the daemon in one place. As the API grows, this shared client keeps the CLI and the TUI consistent with each other.

The project has 37 automated tests. None of these tests need Docker.

The `docker_runtime` and `worker` code paths need a real container runtime, so they have no automated tests yet. To test this code, run the daemon and submit real tasks by hand.

## Roadmap

- Add multi-node scheduling. This will extend the scheduler and the node model beyond one local Docker host.
- Add authentication to the HTTP API.
- Add automated tests for the `docker_runtime` and `worker` path. This will likely use a Docker-in-Docker setup or a mocked runtime.
- Expand the task spec to include volumes and networks. Enforce resource limits beyond scheduling-time accounting.
