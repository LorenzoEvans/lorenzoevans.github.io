---
title: "Petalblade"
description: "A terminal user interface for discovering and streaming ambient music mixes from musicforprogramming.net."
pubDate: 2024-03-15
image: "/images/audio-processing.jpg"
tags: ["Rust", "TUI", "Audio Programming", "Async"]
status: "in-progress"
---

## Overview

[Petalblade](https://github.com/LorenzoEvans/petalblade) is a terminal user interface (TUI) client developed in Rust to browse and stream ambient music mixes from musicforprogramming.net. Designed specifically for developers seeking audio environments optimized for concentration, the application fetches episode data dynamically and decodes audio directly within the terminal buffer. This project stems from a broader exploration into audio software, aiming to merge real-time network streaming with lightweight, terminal-based audio pipelines.

## Motivation

The project was sparked by an interest in combining network streaming with terminal interfaces while eliminating the overhead or latency of traditional browser-based players. The goal was to build a hands-on, low-latency desktop companion that interacts directly with web feeds. Additionally, it provided a practical sandbox to experiment with concurrent, non-blocking audio pipelines, using asynchronous paradigms to keep the visual terminal interface responsive during heavy background network caching and data decoding.

## Features

- Parses remote RSS feeds from musicforprogramming.net to dynamically build, populate, and display up-to-date track indexes.
- Provides an interactive, multi-pane layout to cycle focus seamlessly among the main navigation menu, episode listing, documentation texts, and credit sidebars.
- Manages audio stream lifecycle actions via direct keyboard shortcuts, allowing users to play, pause, resume, or entirely stop mix tracks.
- Incorporates real-time audio volume scaling directly through key modifiers (`+` / `-`).
- Displays structural metadata dynamically, updating an integrated status bar with track titles, durations, release dates, and active player configurations.

## Implementation Notes

Petalblade isolates interface operations from heavy network and playback tasks to ensure application stability. The terminal interface leverages `ratatui` alongside `crossterm` for immediate-mode rendering, capturing keyboard inputs via a dedicated event polling thread. 

The core audio pipeline offloads playback tasks to a background thread driving `rodio` sinks. When an episode is selected, `reqwest` pulls audio data asynchronously as a continuous byte stream. A sliding buffer accumulating 1024 x 512 bytes feeds compressed chunks into an active `Cursor` decoder. This decoded stream converts floating-point samples sequentially into the playback engine without stalling the primary TUI loop. While functional, variations between raw API audio streaming and native browser caching mean processing efficiency remains a primary optimization target.

## Roadmap

- Persist user session settings, favorites, and catalog highlights locally using a simple configuration file format.
- Extend the playback architecture to support streaming audio files discovered directly on local disks.
- Implement full text-filtering workflows within the interface's built-in search bar widget.
- Refine background chunk caching and memory footprint strategies to improve decoding efficiency relative to native web audio players.
