---
title: "Envelope"
description: "Envelope is a TUI for viewing and updating the environment variables, and viewing PATH variable components."
image: "/images/energy.jpg"
pubDate: 2024-03-15
tags: ["Rust", "TUI", "File-Systems", "Linux", "Operating Systems"]
---

# Envelope
Envelope is a very simple application, that allows for viewing and updating the environment variables, and viewing the components of the path variable on your system. The main driver behind the development of Envelope was to further my understanding of:

- <a href="https://ratatui.rs/">Ratatui</a>, a library for building TUIs, that underlies <i>more than a few</i> <a href="https://github.com/ratatui-org/awesome-ratatui?tab=readme-ov-file#-apps"><i>exceptional applications.</i></a>
       

- Terminals/shells, which have an air of opaqueness and mystique around
          them, yet are essential to the craft of programming.
        </li>
        <li class="mb2">
          Immediate mode, an API pattern for GUI development that differs
          meaningfully from the Retained mode pattern, which is much more
          commonly used/experienced.
        </li>
<p class="f5 lh-copy mt0-ns w-100">
          Currently, I'm exploring ways to make Envelope a bit more, well, <i
            >useful</i
          >, and am considering implementing some, perhaps all of the following
          features:
        </p>
          
- Searching for specific environment variable names and values.
          
- Creating new environment variables and exporting them.

- Editing/writing to .bashrc to set environment variables for future
          shell sessions.

- Editing/writing to /etc/environment to set environment variables
          system-wide.
      </div>
    </article>
