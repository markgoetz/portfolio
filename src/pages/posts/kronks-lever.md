---
title: Kronk's Lever
lede: Why do we even have that lever?
published: 2026-09-20
layout: "../../layouts/BlogPage.astro"
---

We've been spending a lot of time thinking about what a technology can do (positive tone indicator). However, I think it's good engineering practice to also think about what a technology can do (negative tone indicator).

In other words, how easy is it to screw up and how bad is it if you do?

In common parlance, you might hear this as Murphy's Law, Sod's Law, or Finagle's Law. But I'd like to suggest an alternative: [Kronk's Lever](https://www.youtube.com/watch?v=ZaWu0YPmDJo).

In case you can't see the video, it's a segment from the Disney movie The Emperor's New Groove, and it goes something like this:

> Yzma: "Pull the lever, Kronk!"
> _Kronk pulls a lever, dropping Yzma into a pit_
> Yzma: "Wrong lever!"
> _Yzma appears a bit with an alligator holding on to her_
> Yzma: "Why do we even **have** that lever?"

It doesn't matter what good, productive, powerful thing a tool allows you to do; if it has an easily pushed lever that drops you into the alligator pit, _it's not a good tool_.

Some good examples of this, in computer programs and otherwise, might look like:

- It's easy to do the right thing. The most probable next steps are clearly highlighted and obvious; other possible steps are available, but less obvious. You've probably heard the phrase "Primary Call To Action", and that's what you can think about here.
- Destructive operations are clearly separated, and styled and designed differently. Think about the archetypal Big Red Button. You're picturing something that looks and feels so much different from the smaller, non-red buttons that don't self-destruct your base.
- Even better, there's a [forcing function](https://en.wikipedia.org/wiki/Poka-yoke) that physically prevents errors from happening.

When it comes down to it, complete and total foolproofing is impossible. It's not even that people are infinitely stupid; all human beings get busy, distracted, stressed, or overwhelmed. That inevitably leads to mistakes. It's our job to make sure that when mistakes happen, it still turns out okay.

Anyway, if you're making a thing with a lever, ask yourself: "Why do we even have that lever?"
