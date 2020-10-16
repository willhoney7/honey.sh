---
title: Why Prettier
description:
tags: Prettier, JavaScript, ESLint, Formatting
date: '2019-02-19'
---

<div style="padding: 20px 20px; background-color: rgba(0,0,0,0.05); border-radius: 5px; margin-top: 10px; font-size: smaller; color: gray;">ℹ️&nbsp;&nbsp;&nbsp;This post was <a href="https://dev.to/tibfib/why-prettier-18mj" target="_blank" rel="noreferrer noopener">first published on dev.to</a>.</div>

At my previous job, I was the lead frontend developer at a small startup. I was also the only frontend developer. As such, I could do basically whatever I wanted. I heard about Prettier through twitter and decided to try it. I immediately loved it and added it as a [pre-commit hook](https://prettier.io/docs/en/precommit.html). I stopped caring about formatting my code. I just typed it out, pressed save, and like magic, prettier would make it look _good enough_.

Eventually I left that job to try out a bigger team at a bigger company. I was hired on as a senior frontend developer–with two others already on the team. I immediately suggested adopting prettier to my coworkers and was met with a lot of resistance. The complaints:

1. I just don't like the way it looks.
2. It uses way too much vertical space.

I disagreed with both of those complaints, but wanting to be a good new coworker, I eventually lessened the pressure; only bringing it up in side comments ("Yeah, I really like how [typescript hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero) takes care of the imports and sorting for me. That's one thing I really like about Prettier too–how it automates a lot of stuff I don't need to do manually").

As I became more familiar with the codebase I started creating more and more pull requests for the tasks in our JIRA board (don't get me started there). I was a little nervous to see how my code would be received–after all I had mostly worked as a solo frontend dev for the majority of my career. I was crestfallen to see that my first few PRs were filled with comments and "needs work" stamps. It made me feel really bad. Like, am I not a good programmer?

**95% of the comments were about formatting issues.** "We put an extra line here." "We prefer to put a comma here." "We do it this way." My first few pull requests, when I needed the most validation, were ripped to shreds because we didn't use Prettier.

As [Dan Abramov](https://twitter.com/dan_abramov/status/1086216675828137984) tweeted,

> We need something to obsess about. We learn mechanical rules and to feel good about following them. Much easier than fixing bugs! We impose them on new team members — here’s how WE do things, you forgot a SPACE here and SEMICOLON.

> This is madness. Break the cycle. Use Prettier.

Gradually I learned their coding styles and the style comments lessened. Now, five months after I started, the team has agreed to use Prettier. It just kind of... happened. I brought it up in earnest this week and I think my coworkers were more open to it after I had been working with them for a while. The frontend team lead decided to do some investigation and in the end was willing to give it a try.

We spent much of the day arguing about the Prettier settings (initially they wanted 180 character columns!) but eventually came to a consensus. We all have Prettier in our respective editors with our `.prettierrc` in the repo. I have a good feeling this'll be one of the last times we argue about code style.
