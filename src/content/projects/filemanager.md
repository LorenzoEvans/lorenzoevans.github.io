---
title: "Filemanager"
description: "A command-line utility for safe, predictable file and directory manipulation."
pubDate: 2026-05-28
image: "/images/filemanager.jpg"
tags: ["Rust", "CLI", "File Systems", "Operating Systems"]
status: "stable"
---

## Overview

Filemanager is a lightweight command-line interface utility designed to handle fundamental file system operations without the overhead of graphical environments. Built using Rust, it provides a predictable, zero-boilerplate alternative for common administrative operations like copying, moving, renaming, and auditing files. The tool serves as a practical asset for headless environments and automated scripts that require low-level system interaction.

## Motivation

The project was developed as a hands-on exercise to move past high-level abstractions and gain an intimate understanding of file system behaviors, lower-level operations, and command-line architecture. The primary goal was to build a system utility that focuses entirely on predictable outcomes, error resilience, and explicit terminal feedback rather than relying on standard, opaque shell built-ins.

## Features

- Renames files and directories safely within the file system.
- Creates new files, with optional routing directly into specified directory structures.
- Deletes files and entire directories recursively.
- Moves files using an automatic fallback mechanism for cross-device or cross-partition operations.
- Copies files directly, or dynamically searches for a target file within a specified source directory.
- Extracts detailed file metadata, exposing information like specific file formats, kinds, and raw sizes.
- Generates new directory paths, with built-in support for nested, recursive directory creation.

## Implementation Notes

The utility is structured around strict error propagation to eliminate runtime panics and ensure clean CLI feedback loop termination. It leverages `clap` (v4) for command-line argument structural parsing. Directory traversals are handled via the `walkdir` crate for memory efficiency, while file format and media type precision are derived directly from binary signatures using the `file-format` library.

## Roadmap

- Implement interactive confirmation prompts for destructive execution paths (such as recursive deletions).
- Add support for bulk or pattern-based batch renaming and file copying.
- Introduce dry-run execution flags to simulate complex file mutations before committing changes to disk.
