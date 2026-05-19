---
title: "Soundry"
description: "A parser for the SFZ file format."
image: "/images/energy.jpg"
pubDate: 2024-03-15
tags: ["Rust", "parser", "Audio programming"]
---

# Soundry
            
Soundry is an exercise in exploration: it's a parser for the SFZ
file format, written in Rust that intends to be capable of handling
both SFZ versions. As well, it intends to implement the full set of
opcodes for various headers, and ideally, parse SFZ files
programmatically depending on the tools that would use the parser.

For example, Meadlowlark is a Rust based DAW, for which someone
could use Soundry to develop a synthesizer plugin that provides
instruments, synths, and the like.
          
Soundry is still in development, though it currently supports most of
the opcodes that I'm aware of. That being said, given the lack of
formal specification for the SFZ format (what does exist of one is
community driven), and variation in what SFZ opcode and header various
players and DAWs support, I may be (read: likely am) missing some.

Currently Soundry can parse Control and Region headers: 
I chose to handle those first because the remaining SFZ headers are either very
simple or niche, such as Effect (which only has 2-4 opcodes), and Midi
(which is specific to the ARIA engine), or wrappers around other
headers, such as Group, which wraps Region headers, or Global and
Master, which wrap Group and Region Headers (as well providing opcode
definitions that take precedence, by way of the pseudo-hierarchical
nature of the format).
