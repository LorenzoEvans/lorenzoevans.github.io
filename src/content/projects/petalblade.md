---
title: "Petalblade"
description: " A TUI application for streaming MusicForProgramming mixes."
image: "/images/energy.jpg"
pubDate: 2024-03-15
tags: ["Rust", "TUI", "File-Systems", "Audio Programming"]
---

Petalblade is a hands-on dive into combining network streaming with terminal developed in Rust as a TUI client for musicforprogramming.net's curated mixes, it enables users to discover, queue, and stream ambient tracks tailored for productive programming flows. This project stems from my broader explorations in audio software, aiming here to explore real-time data and terminal based audio software.

In its current form, Petalblade is a work-in-progress that parses the sites RSS-like feeds to populate a navigable list of episodes, complete with previews of track info and direct streaming initiation. While it handles the essentials of HTTP requests and audio decoding, variations in browser-based versus API access mean it is probably not as efficient as it could be.

At present, Petalblade manages session queuing and basic playback: starting with these allowed me to experiment with concurrency for non-blocking streams, using Rust's async features to avoid UI freezes. Looking ahead, I'm considering additions such as persisting user favorites via a simple config file, and perhaps the ability to stream audio from local files on disk.
