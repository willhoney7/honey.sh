---

title: 'Finally figuring out window management on macOS'
date: '2026-08-22'
tags:
  - dev

---

I've been using macOS for 20(?) years and I've gone through a ton of different variations of setups for window management. I think I've *finally* found the ideal setup for me.

My current monitor is a 32" 4K which is very nice, but also quite large!

# Requirements

- ability to easily split vertically and horizontally, at least halves, but ideally thirds as well.
- ability to easily full-screen, and also do a centered, ~80% fill. Since my monitor is large, sometimes a true full-screen is just too big and makes certain apps feel too spread out.
- one-handed keyboard shortcuts that I can actually remember. Must be left handed so the shortcuts work while I'm using a mouse.

# The Key(s)

```
┌────────────┐ ┌╌╌╌╌╌╌╌┐ ┌───────┐ ┌───────┐
│            │ ╎       ╎ │       │ │       │
│    TAB     │ ╎   Q   ╎ │   W   │ │   E   │
└────────────┘ └╌╌╌╌╌╌╌┘ └───────┘ └───────┘
┌────────────┐ ┌───────┐ ┌───────┐ ┌───────┐
│  CAPS LOCK │ │       │ │       │ │       │
│   (Hyper)  │ │   A   │ │   S   │ │   D   │
└────────────┘ └───────┘ └───────┘ └───────┘
```

I finally figured out that **Hyper + WASD** is the perfect fit. As someone who has played his fair share of pc games, WASD for directions is very intuitive, and very easy to use while also pressing on the hyper key (caps lock).

> **Hyper** means setting your CAPS LOCK key to actually input CMD+CTRL+FN+ALT. You can set it up with [Raycast](https://www.raycast.com/), [Hyper Key](https://hyperkey.app/), or [Karabiner Elements](https://karabiner-elements.pqrs.org/).

# The Setup

So, here's my setup. I set it all up with [Better Touch Tool](https://folivora.ai/), but you could set up 90% of it with [Raycast](https://www.raycast.com/) or another app.

Better Touch Tool has a cool option to use one keyboard shortcut to *cycle through* multiple actions. I have it set to reset the cycle after a couple seconds.

So, I have:

- HYPER+A → Resize to left 1/2. 
  - Sequential presses do variations: resize to left 1/3, then to left 2/3, then to middle 1/3.
- HYPER+D → Resize to right 1/2.
  - Sequential presses do variations: resize to right 1/3, then to right 2/3, then to middle 1/3.
- HYPER+W → Resize to top 1/2.
  - Sequential presses do variations: resize to top 1/3, then to top 2/3, then to middle 1/3.
- HYPER+S → Resize to bottom 1/2.
  - Sequential presses do variations: resize to bottom 1/3, then to bottom 2/3, then to middle 1/3.
- HYPER+E → Resize to full screen.
  - Sequential presses do variations: resize to ~80% centered.

For multi-monitor support, I've added:

- HYPER+TAB → Move to other monitor and full-screen. (From there I can run whatever other command to resize accordingly.)

# Bonus

I use [Tangrid](https://tangrid.app/) for the following:

- Dock preview, when there's multiple windows open. (I hate that by default clicking on an app opens ALL of its windows).
- CMD+TAB to cycle *windows* not *apps*. 
- CMD+` for a better looking "cycle windows within this app".