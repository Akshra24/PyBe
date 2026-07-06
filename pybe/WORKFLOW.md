# PyBe — Complete Workflow

## 🎯 What is PyBe?

**PyBe** is a gamified, story-driven Python learning platform where anyone — even someone with zero coding background — can learn Python by playing through **100 adventure levels**, Doraemon style.

Think of it like a video game… but instead of shooting enemies, you're writing Python code. Each level teaches one concept, and you unlock the next only after completing the current one. No skips. No overwhelming theory. Just clear tasks, instant feedback, and a cute robot cat cheering you on.

---

## 👤 Who is it for?

- Total beginners — never written a line of code
- Non-CS backgrounds — designers, artists, managers, students of any field
- Young learners — anyone who responds better to visual, game-like experiences than textbooks
- The idea is: **if Doraemon can learn it, so can you**

---

## 🗺️ The Complete User Journey

### Step 1 — Landing Screen (First Impression)

User opens the website. What they see:

- A full-screen **sky-blue animated background** with floating clouds
- **Doraemon bounces in** from the left side of the screen with a happy animation
- A **speech bubble appears** from Doraemon with a typewriter text effect:
  > *"Hey there, future Python wizard! I'm Doraemon. Ready to learn Python the fun way?"*
- Below that, a friendly headline fades in:
  > *"100 Levels. Zero Boring Lectures. One Cute Robot Cat."*
- A glowing **"Start My Adventure 🚀"** button pulses in the center
- Background has floating **gadget icons** (Anywhere Door, Time Cloth, Bamboo Copter) floating around like decorations

**What happens when they click the button?**
→ Smooth transition animation → lands on the **Level Select page**

---

### Step 2 — Level Select Screen (The Map)

User sees a **10×10 grid of 100 level cards** — like a game map.

At the top:
- **PyBe logo** on the left (Doraemon-themed)
- **Progress tracker** on the right: *"✅ 0 / 100 Levels Cleared"*

Each level card looks like a **3D game tile** and has three possible states:

| State | Look | Behavior |
|-------|------|----------|
| 🔒 Locked | Grayed out, padlock icon | Cannot click — shakes if clicked |
| 🔓 Unlocked | Blue glowing border, level number | Clickable — goes to that level |
| ✅ Completed | Green tick badge, level number | Clickable — can replay |

**3D Card Hover Effect:** When the mouse moves over an unlocked card, the card tilts in 3D (perspective shift) and lifts slightly — like picking up a real card from a table.

At the bottom: A **3D progress bar** showing how far along the user is.

---

### Step 3 — Playing a Level (The Core Gameplay)

When a user clicks an unlocked level, they enter the **level screen** for that level. Each level has:

1. **Header:** Level number + title (e.g., *"Level 1 — Hello, Python!"*)
2. **Concept explanation:** A short, plain-English description of what they'll learn (e.g., *"In Python, `print()` is how you show text on the screen — like Doraemon's Anywhere Door!"*)
3. **The Task:** A clear, one-line instruction (e.g., *"Print 'Hello, Doraemon!'"*)
4. **Code Editor Area:** A clean, styled code box with syntax highlighting where they type their answer
5. **"Run Code ▶" button:** Runs the Python code (simulated)
6. **Output Panel:** Shows what the code would output
7. **"Submit ✅" button:** Checks if the answer is correct
8. **Hint Button 💡:** Clicking it shows Doraemon popping out with a hint from his pocket

**When the user submits a CORRECT answer:**
- Confetti explosion animation 🎉
- Doraemon jumps with a happy reaction
- "🎉 Level Complete!" modal appears
- The next level automatically unlocks
- Progress saves to browser storage
- User is taken back to the level map with the new level glowing

**When the user submits a WRONG answer:**
- The code editor shakes
- Doraemon gives an encouraging message: *"Oops! That's not quite right — try again, you'll get it!"*
- A hint is suggested
- No penalty — they can try unlimited times

---

### Step 4 — Progress & Persistence

Everything is saved automatically in the browser (localStorage):
- Which levels are completed
- Which level is currently unlocked
- Last played date

So when the user comes back the next day, they continue right where they left off.

A **Reset Progress** option is hidden in settings in case someone wants to start over.

---

## 🔄 Full Workflow Diagram

```
[USER OPENS WEBSITE]
        ↓
[LANDING PAGE]
 Doraemon bounces in + typewriter welcome
        ↓
[Click "Start My Adventure 🚀"]
        ↓
[LEVEL SELECT — 100 Level Grid]
 Progress: 0/100 | Level 1 🔓 | 2-100 🔒
        ↓
[Click Level 1]
        ↓
[LEVEL SCREEN]
 Task + Code Editor + Run + Submit
        ↓
  [Correct?]
   ↙     ↘
  YES      NO
  ↓        ↓
[Confetti] [Shake + Hint + Try Again]
  ↓
[Unlock Level 2]
  ↓
[Back to Level Select]
 2 ✅ | 3 🔓 | 4-100 🔒
  ↓
[Continue until Level 100]
  ↓
[🎉 "COURSE COMPLETE!" celebration screen]
```

---

## 🧩 System Architecture

### Pages
| Page | Purpose |
|------|---------|
| `index.html` | Landing — animated welcome |
| `home.html` | Level select grid |
| `level.html` | Individual level gameplay |

### Data Flow
```
User Action → JavaScript → localStorage (progress)
                         → DOM Update (UI state change)
```

### Level Data Structure (JS)
Each level is an object:
```js
{
  id: 1,
  title: "Hello, Python!",
  concept: "The print() function",
  task: "Print 'Hello, Doraemon!'",
  hint: "Use print('Hello, Doraemon!')",
  solution: "print('Hello, Doraemon!')"
}
```

### Progress Structure (localStorage)
```js
{
  currentLevel: 3,        // highest unlocked
  completed: [1, 2],      // cleared levels
  lastPlayed: "2026-06-29"
}
```

---

## 🎨 Visual & Animation Overview

| Element | Animation |
|---------|-----------|
| Doraemon on landing | Slides in from left + bounce |
| Welcome text | Typewriter effect (character by character) |
| CTA button | 3D press effect on click |
| Background clouds | Slow floating drift |
| Level cards (locked) | Grayscale + padlock |
| Level cards (unlocked) | Blue glow pulse |
| Level cards (hover) | 3D perspective tilt following mouse |
| Correct answer | Confetti explosion |
| Wrong answer | Shake animation |
| Doraemon hint | Pops up with speech bubble |

---

## 🔢 100 Levels — Curriculum Outline

| Chapters | Levels | Focus |
|----------|--------|-------|
| Chapter 1 — First Steps | 1–10 | print(), comments, basic syntax |
| Chapter 2 — Variables | 11–20 | var names, data types, assignment |
| Chapter 3 — User Input | 21–30 | input(), type conversion |
| Chapter 4 — Conditions | 31–40 | if, else, elif |
| Chapter 5 — Loops | 41–50 | for, while, range |
| Chapter 6 — Functions | 51–60 | def, return, parameters |
| Chapter 7 — Lists | 61–70 | list operations, indexing |
| Chapter 8 — Dictionaries | 71–80 | dict, key-value |
| Chapter 9 — File Handling | 81–90 | open, read, write |
| Chapter 10 — Projects | 91–100 | Mini projects combining everything |

---

## 👥 Doraemon Character — Role in the App

| Scenario | Doraemon's Action |
|----------|-----------------|
| Landing page | Welcomes the user, explains the app |
| Hint button click | Pops out of pocket with hint |
| Wrong answer | Encourages and motivates |
| Level complete | Jumps with joy + celebration |
| Course complete | Big congratulatory message |

Doraemon is not just decorative — he's the **guide, motivator, and emotional hook** of the entire experience.

---

## 📋 Development Phases

### Phase 1 — Foundation ✅ (SPEC + WORKFLOW)
- Design system (colors, fonts, spacing)
- All page layouts
- Component definitions
- Workflow documented

### Phase 2 — Landing Page (Current)
- Animated Doraemon entrance
- Typewriter text effect
- Floating clouds background
- CTA button with 3D effect

### Phase 3 — Level Select
- 100-card CSS Grid
- 3D card tilt on hover
- Locked/Unlocked/Completed states
- Progress bar

### Phase 4 — Level Gameplay
- Level screen UI
- Code editor with syntax highlighting
- Run + Submit logic
- Hint system
- Confetti on success

### Phase 5 — Progress System
- localStorage integration
- Auto-save on every completion
- Progress restoration on reload

### Phase 6 — Full Content
- All 100 level objects with tasks, hints, solutions

### Phase 7 — Polish & Mobile
- Responsive grid (desktop → tablet → mobile)
- Sound effects (optional)
- Share progress (optional)

---

## 📁 Final Project Structure

```
pybe/
├── index.html          ← Landing page
├── home.html           ← Level select
├── level.html          ← Level gameplay
├── css/
│   └── style.css       ← All styles (animated, 3D)
├── js/
│   ├── main.js         ← Landing page logic
│   ├── levels.js       ← Level grid + 3D effects
│   ├── level.js        ← Level gameplay logic
│   ├── progress.js     ← localStorage manager
│   ├── confetti.js     ← Confetti animation
│   └── levels_data.js  ← 100 level objects
└── WORKFLOW.md         ← This document
```

---

**That's the full picture.** Every feature, every animation, every page flow — all mapped out. Ready to start building Phase 2? 🔨