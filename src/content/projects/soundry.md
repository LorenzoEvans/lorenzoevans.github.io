---
title: "Soundry"
description: "An experimental SFZ file format parser written in Rust, built to handle both SFZ versions with full opcode coverage."
pubDate: 2024-03-15
image: "/images/energy.jpg"
tags: ["Rust", "Parser", "Audio Programming"]
status: "in-progress"
---

## Overview

[Soundry](https://github.com/arcnemesys/soundry) is an experimental parser for the SFZ file format, written in Rust. Designed to handle both SFZ v1 and v2, it aims to implement the full opcode set across all standard headers and to expose a programmatic API flexible enough to support a wide range of audio tooling — from synthesizer plugins to sample library loaders. The project draws inspiration from the broader Rust audio ecosystem, including projects like Meadowlark, Rodio, and Glicol, and is built with an eye toward integration with Rust-native DAWs and plugin frameworks.

## Motivation

SFZ is a widely used but loosely specified file format. What formal documentation exists is largely community-driven, and support varies considerably across players and DAWs. Soundry emerged from a desire to build a principled, correct-by-construction parser for this format in Rust — one that doesn't just tokenize SFZ files, but validates opcode values against the specification using refinement types. The project is as much an exercise in understanding the SFZ ecosystem as it is in building practical tooling for it.

## Features

- Parses SFZ files using the `nom` crate for fast, composable, and accurate parsing of both SFZ v1 and v2 structures.
- Employs the `refinement` crate to enforce that all opcode values fall within specification-defined ranges at the type level, catching invalid configurations before they reach playback.
- Supports both SFZ versions with the flexibility to handle whatever header and opcode subsets a given player or DAW exposes.
- Currently implements full parsing for `<control>` and `<region>` headers — the most foundational and complex parts of the format.
- Exposes a clean public API that downstream tools, plugins, or DAW integrations can consume to build SFZ-powered instruments programmatically.

## Implementation Notes

Soundry's parser is built around `nom`'s combinator model, which keeps parsing logic modular and testable. Each header and opcode maps to its own parsing function, composing upward into a full document parser.

The choice to prioritize `<control>` and `<region>` headers was deliberate: they carry the bulk of SFZ's complexity and real-world usage. Remaining headers — such as `<effect>` (2–4 opcodes), `<midi>` (ARIA-engine-specific), and wrapper headers like `<group>`, `<global>`, and `<master>` — are structurally simpler or can be understood as hierarchical compositions of region-level logic. Implementing the hard parts first keeps the most important code well-exercised while the remaining surface area is filled in.

Value correctness is handled at parse time via `refinement` types, meaning invalid opcode values are rejected structurally rather than through scattered runtime checks. This keeps downstream consumers free from defensive validation logic.

## Roadmap

- Complete v2 opcode coverage across Sample Playback, Voice Lifecycle, MIDI Conditions, Internal Conditions, Triggers, Amplifier, EQ, Filter, Pitch, LFO, Curves, Effects, Loading, and Wavetable Oscillator headers.
- Deduplicate EG and LFO opcode variants to be defined once and reused across headers.
- Add Cakewalk-specific opcode support.
- Resolve edge cases in dynamic label syntax (e.g. `label_cc$RELEASE=Release ($RELEASE)`).
- Harden refinement type coverage across all implemented opcodes.
