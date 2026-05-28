---
title: "ChemiCLI"
description: "A command-line interface for querying periodic table elements and chemical series properties."
pubDate: 2026-05-28
image: "/images/chemicli.jpg"
tags: ["Rust", "CLI", "Chemistry", "Data Query"]
status: "in-progress"
---

## Overview

ChemiCLI is a command-line utility designed for developers and science enthusiasts who need offline access to data from the periodic table of elements. It parses structural chemical data locally to provide instant property lookups directly from the terminal. The project serves as both a practical utility and an exercise in building reliable, command-based data retrieval tools in Rust.

## Motivation

This project was built to eliminate the dependency on web browsers or active internet connections for basic chemical references. I wanted to create a lightweight, low-latency alternative to heavy web interfaces like PTable, while sharpening skills in structural data parsing and command-line interface design in the systems domain.

## Features

- Retrieves specific atomic properties—including atomic number, weight, energy levels, electronegativity, group, and period—via atomic symbols.
- Displays historical discovery context, filtering for specific element discoverers and dates.
- Isolates metal series lookups with dedicated subcommands for Alkali, Alkaline Earth, Lanthanoids, Actinoids, Transition, and Post-transition metals.
- Provides flags to extract structural counts or lists of all members within a given chemical series.
- Operates entirely offline using a local, bundled JSON dataset.

## Implementation Notes

The application minimizes external runtime dependencies by relying on a local JSON data asset (`data/periodic_table.json`) sourced from PTable. This design choice optimizes execution speed but introduces a known limitation: some values compromise exact IUPAC precision for simplified representation (such as representing Hydrogen's atomic weight range strictly as `1.008`). 

## Roadmap

- Implement the `metalloids` command for querying semi-metal groups.
- Implement the `nonmetals` command to complete remaining non-metal series lookups.
- Add support for structured, multi-element property comparisons.
- Align the underlying JSON data source with the latest IUPAC scientific precision standards.
