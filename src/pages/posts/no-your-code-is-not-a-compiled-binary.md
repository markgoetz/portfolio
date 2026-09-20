---
lede: My least favorite type of analogy
published: 2026-09-19
title: No, Your Code is not a Compiled Binary
layout: "../../layouts/BlogPage.astro"
---

I'm sure you've heard this one before.

> Now that LLMs produce code, just think of your code as a compiled binary! You wouldn't hand-write assembly these days, would you?

This is one of my least favorite types of analogies. It passes a first glance, and in a sentence or two it sounds really compelling. And it's only when you dig deeper that you start to see the issues.

## What compiled binaries actually look like

When I made [Swifty Beams](https://nerdatwork.itch.io/swifty-beams), a homebrew game for the original Game Boy, I used a tool called [GBDK 2020](https://gbdk.org/). I was not going to learn machine code for the Sharp LR35902 (not even asssembly code) in the Year of our Lord 2024. Also I didn't want to dig into the data format and hardware registers that the Game Boy uses for graphics and sound. So I wrote the code in C, made the art in [LibreSprite](https://libresprite.github.io/), used [hUGETracker](https://superdisk.github.io/hUGETracker/) to put together the music, and then used GBDK to turn it into something the Game Boy can actually run.

You know what the difference is? GBDK is **fully deterministic**.

That made me very comfortable using GBDK for everything. I had complete faith that my instructions would be followed to the letter. There was absolutely no risk of hallucinations.

I regularly deleted the compiled binary and rebuilt it from scratch. I didn't even commit it to the repository.

## But Mark, compilers have bugs too!

Yeah, no.

Sure, compilers have bugs and inefficiencies just like every computer program, but you know what those bugs are? Say it with me: **fully deterministic**.

That means that they can be discovered, researched, documented, worked around, and finally resolved. Definitively. I saw bugs get definitively resolved as GBDK went from version to version.

There was even a really interesting discussion in the GBDK Discord about introducing a new, faster division algorithm. Thanks to well-documented behavior and extensive tests, each edge case could be verified, and even timed against the existing algorithm to make sure it was faster.

This doesn't work when LLMs make your code. You can add to the harness, update the prompt, maybe even tune the model, but you're essentially just hoping for the best at that point. Issues will sneak in, and [hallucinations have been shown to be mathematical certainties](https://www.computerworld.com/article/4059383/openai-admits-ai-hallucinations-are-mathematically-inevitable-not-just-engineering-flaws.html), by OpenAI's own admission.

## Also

While I'm here, let me dunk on this analogy a little bit more.

- GBDK did not free me from the hardware constraints. While it's true that the Game Boy is far, _far_ less powerful than computers of today, computers today are not limitless. CPU speed and download size can be a concern, especially on less powerful mobile devices.
- My code was written in code, not in English. I want to write about this in the future, but I find code to be more efficient and precise than English.
- Coding keeps me responsible for what ships. If I were to use an LLM for something, and it produces something buggy or even just overengineered, and I just ship it because it's a compiled binary, my name is still on the commit.
- I _can_ write assembly if I want to! Maybe you have a case where you absolutely need to make something performant, or maybe you need access to low-level functionality (such as the audio driver I used). Go ahead and write inline assembly!
- Going off the above, I once even looked directly at the compiled binary to confirm an issue with my build process. And my eyes didn't even catch fire!

So yeah, please don't use this analogy as a catchall. LLMs are different from true compilers, and they come with different issues.
