---
title: "Envelope"
description: "A terminal user interface for viewing and managing environment variables and system PATH components."
pubDate: 2026-05-28
image: "/images/linux.jpg"
tags: ["Rust", "TUI", "File Systems", "Linux", "Operating Systems"]
status: "in-progress"
---

## Overview

[Envelope](https://github.com/LorenzoEvans/envelope) is a terminal user interface (TUI) utility built to inspect and manage shell environment variables and system PATH components within a unified, split-pane view. The tool abstracts the typical terminal command noise into an interactive layout, allowing users to quickly assess local system contexts. It was developed primarily as an educational exploration into immediate-mode interface patterns and terminal/shell interaction behaviors.

## Motivation

The project was sparked by a desire to look behind the opaque mystique of terminal shells and understand exactly how environment configurations propagate. The I built it to gain hands-on experience with the Ratatui ecosystem and to deeply study the architectural differences of the immediate-mode GUI pattern compared to traditional retained-mode application structures.

## Features

- Displays a vertically split interface separating system environment variables from PATH components.
- Inspects and views active environment variable keys alongside their corresponding string values.
- Facilitates basic interactive updates to loaded environment values within the active session.
- Breaks down the system PATH variable into an organized, readable list of distinct directory components.

## Implementation Notes

Envelope leverages the Ratatui library to handle immediate-mode rendering cycles directly within the terminal buffer. Because immediate-mode rendering continuously redraws the UI from scratch every frame, the architecture demands efficient data handling of local environment strings to prevent performance degradation on modest systems.

## Roadmap

- Implement fuzzy search functionality to filter specific environment variable names and values.
- Add features to create and export entirely new environment variables on the fly.
- complete native support for writing and persistently saving modifications directly to `.bashrc` (in-progress).
- Add systems-level integration to write persistent configurations to `/etc/environment` for system-wide variables.
