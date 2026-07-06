# PyBe — Project Status

> **What is PyBe?** A gamified, story-driven Python learning platform where anyone — even someone with zero coding background — learns Python by playing through 100 adventure levels, Doraemon style.

**Tagline:** *Learn Python the Doraemon Way — No Magic Required!*

---

## 📁 Project Structure

```
pybe/
├── index.html          ← Landing page
├── home.html           ← Level select (10×10 grid)
├── level.html          ← Level gameplay (4-section stepper)
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── progress.js     ← localStorage manager
│   ├── levels_data.js  ← 20 levels (1–20)
│   ├── levels.js       ← Grid builder + 3D tilt
│   └── confetti.js     ← Confetti animation
├── SPEC.md             ← Design & feature spec
├── WORKFLOW.md         ← Full workflow document
└── PROJECT.md          ← This file
```

---

## ✅ COMPLETED FEATURES

### Landing Page (`index.html`)
- [x] Sky-blue animated background with floating clouds
- [x] Doraemon SVG bounces in from left
- [x] Typewriter speech bubble with welcome message
- [x] Glowing "Start My Adventure 🚀" CTA button
- [x] Floating gadget icons (door, helicopter, flashlight)

### Level Select (`home.html`)
- [x] 10×10 CSS grid of 100 level cards
- [x] Card states: locked (grey + number), unlocked (blue glow), completed (green + checkmark)
- [x] 3D card tilt on hover (mouse-tracking perspective + lift)
- [x] Locked cards shake on click
- [x] Current level pulses with blue glow
- [x] 🔥 Streak counter in navbar (consecutive day tracking)
- [x] 🌅 Day/Night cycling sky background (morning/day/evening/night based on time)
  - Morning: warm orange/pink sunrise gradient
  - Day: bright sky blue
  - Evening: purple/orange sunset gradient + glow
  - Night: deep navy + 60 twinkling stars + crescent moon
- [x] ☁️ Clouds adapt color to time of day
- [x] 🐱 Doraemon corner mascot with context-aware speech bubbles (10 different messages based on progress)
- [x] ✨ Hover tooltip on level cards showing level title + concept
- [x] 🌟 Confetti animation on load for returning players
- [x] Star rating on completed cards
- [x] Navbar with PyBe logo + progress counter
- [x] Bottom progress bar showing overall journey %
- [x] Floating gadget decorations (door, helicopter, flashlight)
- [x] Level click → navigates to `level.html?id=X`

### Level Gameplay (`level.html`)
- [x] 4-section stepper: `📖 Description → ❓ Q&A → 🧠 Test → 💻 Coding`
- [x] Stepper progress indicator (clickable, completed steps highlighted)
- [x] Back/Next navigation between sections
- [x] Finish button on last section
- [x] **Description section** — rich formatted content with headings, callouts, code examples, lists, grids
  - MCQ (radio buttons with A/B/C/D options)
  - Fill-in-the-blanks (text input)
  - True/False (toggle buttons)
  - Short Answer (textarea, 1–3 sentences)
- [x] **Test submission** — scores all questions, marks correct/incorrect, shows pass/fail (60% to pass)
- [x] **Test retry** — can retry on fail
- [x] **Coding section** — code editor, Run button, Submit button, Hint button
- [x] Confetti burst on level completion
- [x] Success modal with next level navigation
- [x] Back button to return to level map

### Progress System (`progress.js`)
- [x] localStorage persistence
- [x] `currentLevel` tracker
- [x] `completed` array
- [x] `streak` tracking (consecutive days)
- [x] `lastPlayed` date
- [x] `PyBe.getProgress()`, `PyBe.completeLevel()`, `PyBe.saveProgress()`, `PyBe.resetProgress()`

### Levels Data (`levels_data.js`)
- [x] **Level 1** — What is Programming? *(NO coding section)*
  - Full theory description about what programming is, why humans write programs, real problems it solves
  - 13 test questions (6 MCQ + 4 fill-in-blanks + 5 T/F + 3 short answer)
  - 5 Q&A pairs
- [x] **Level 2** — How Code Works *(NO coding section)*
- [x] **Level 3** — Beginner Doubts *(NO coding section)*
- [x] **Level 4** — Introduction to Python (has coding section)
- [x] **Level 5** — Installing Python *(NO Q&A, test, or coding sections)*
- [x] **Level 6** — Running Python (has all 4 sections)
- [x] **Level 7** — Writing first program -> print() (has all 4 sections)
- [x] **Level 8** — Comments and why comments matter (has all 4 sections)
- [x] **Level 9** — Variables introduction (has all 4 sections)
- [x] **Level 10** — Rules for naming variables (has all 4 sections)
- [x] **Level 11** — Data types (int, float, str, bool) (has all 4 sections)
- [x] **Level 12** — Type conversion / type casting (has all 4 sections)
- [x] **Level 13** — Taking input with input() (has all 4 sections)
- [x] **Level 14** — Output formatting (has all 4 sections)
- [x] **Level 15** — Keywords in Python (has all 4 sections)
- [x] **Level 16** — Arithmetic operators (has all 4 sections)
- [x] **Level 17** — Assignment operators (has all 4 sections)
- [x] **Level 18** — Comparison operators (has all 4 sections)
- [x] **Level 19** — Logical operators (has all 4 sections)
- [x] **Level 20** — Membership operators (has all 4 sections)
- [x] **Level 21** — Identity operators (has all 4 sections)
- [x] **Level 22** — Operator precedence (has all 4 sections)
- [x] **Level 23** — Practice questions on operators (has all 4 sections)
- [x] **Level 24** — Real life logic building (has all 4 sections)
- [x] **Level 25** — Beginner coding challenge (has all 4 sections)
- [x] **Level 26** — Why decisions in programming (has 3 sections: description, qna, test)
- [x] **Level 27** — if statement (has all 4 sections)
- [x] **Level 28** — if-else (has all 4 sections)
- [x] **Level 29** — elif (has all 4 sections)
- [x] **Level 30** — Nested conditions (has all 4 sections)
- [x] **Level 31** — Multiple conditions (has all 4 sections)
- [x] **Level 32** — Short-hand if (has all 4 sections)
- [x] **Level 33** — Ternary operator (has all 4 sections)
- [x] **Level 34** — Decision based coding problems (has all 4 sections)
- [x] **Level 35** — Logic challenge (has all 4 sections)
- [x] **Level 36** — Why loops exist (has all 4 sections)
- [x] **Level 37** — for loop (has all 4 sections)
- [x] **Level 38** — while loop (has all 4 sections)
- [x] **Level 39** — range() (has all 4 sections)
- [x] **Level 40** — Nested loops (has all 4 sections)
- [x] **Level 41** — break (has all 4 sections)
- [x] **Level 42** — continue (has all 4 sections)
- [x] **Level 43** — pass (has all 4 sections)
- [x] **Level 44** — Pattern printing (has all 4 sections)
- [x] **Level 45** — Loop coding challenge (has all 4 sections)
- [x] **Level 46** — Introduction to strings (has all 4 sections)
- [x] **Level 47** — Indexing (has all 4 sections)
- [x] **Level 48** — Slicing (has all 4 sections)
- [x] **Level 49** — String methods (upper/lower) (has all 4 sections)
- [x] **Level 50** — replace() (has all 4 sections)
- [x] **Level 51** — find() (has all 4 sections)
- [x] **Level 52** — split() (has all 4 sections)
- [x] **Level 53** — join() (has all 4 sections)
- [x] **Level 54** — Escape characters (has all 4 sections)
- [x] **Level 55** — f-Strings (has all 4 sections)
- [x] **Level 56** — Lists (has all 4 sections)
- [x] **Level 57** — List methods (has all 4 sections)
- [x] **Level 58** — List comprehension (has all 4 sections)
- [x] **Level 59** — Tuples (has all 4 sections)
- [x] **Level 60** — Sets (has all 4 sections)
- [x] **Level 61** — Dictionary (has all 4 sections)
- [x] **Level 62** — Nested dictionary (has all 4 sections)
- [x] **Level 63** — len(), max(), min() (has all 4 sections)
- [x] **Level 64** — Sorting (has all 4 sections)
- [x] **Level 65** — Collection coding challenge (has all 4 sections)
- [x] **Level 66** — Why functions (has all 4 sections)
- [x] **Level 67** — Creating functions (has all 4 sections)
- [x] **Level 68** — Parameters (has all 4 sections)
- [x] **Level 69** — Return statement (has all 4 sections)
- [x] **Level 70** — Default arguments (has all 4 sections)
- [x] **Level 71** — Keyword arguments (has all 4 sections)
- [x] **Level 72** — *args (has all 4 sections)
- [x] **Level 73** — **kwargs (has all 4 sections)
- [x] **Level 74** — Variable scope (global) (has all 4 sections)
- [x] **Level 75** — Recursion (has all 4 sections)
- [x] **Levels 76–100** — Files, OOP, regex, async, etc. (All 100 levels are completed and fully configured!)

---

## 🚧 IN PROGRESS

### Level Gameplay (`level.html`)
- [ ] **CSS for all level sections** — styles for section-stepper, description content, Q&A accordion, test question cards, coding area still need to be appended to `style.css`

### Levels Data (`levels_data.js`)
- [x] All 100 levels successfully implemented!

---

## 📋 QUEUED / NOT STARTED

### Levels Content (Chapter 1: First Steps — Levels 1–10) ✅
| # | Title | Status |
|---|-------|--------|
| 1 | What is Programming? | ✅ Done |
| 2 | How Code Works | ✅ Done |
| 3 | Beginner Doubts | ✅ Done |
| 4 | Introduction to Python + Why Python + History of Guido van Rossum | ✅ Done |
| 5 | Installing Python + Setup from Python Official Website | ✅ Done |
| 6 | Running Python (IDLE, terminal, editor) | ✅ Done |
| 7 | Writing first program → print() | ✅ Done |
| 8 | Comments and why comments matter | ✅ Done |
| 9 | Variables introduction | ✅ Done |
| 10 | Rules for naming variables | ✅ Done |

### Chapters 2–10 (Levels 11–100)
| Chapter | Levels | Topic |
|---------|--------|-------|
| 1 — First Steps | 1–10 | `print()`, comments, strings, math, errors |
| 2 — Variables | 11–20 | var names, data types, assignment |
| 3 — User Input | 21–30 | `input()`, type conversion |
| 4 — Conditions | 31–40 | `if`, `else`, `elif` |
| 5 — Loops | 41–50 | `for`, `while`, `range` |
| 6 — Functions | 51–60 | `def`, `return`, parameters |
| 7 — Lists | 61–70 | list operations, indexing |
| 8 — Dictionaries | 71–80 | dict, key-value |
| 9 — File Handling | 81–90 | `open`, `read`, `write` |
| 10 — Projects | 91–100 | Mini projects combining everything |

---

## 🛠️ Technical Notes

### Level Data Structure
```js
{
  id: 1,
  title: "What is Programming?",
  concept: "Understanding the foundation of all software",
  sections: ["description", "qna", "test"], // no "coding" for level 1

  // Section 1: Description (rich HTML)
  description: {
    heading: "...",
    subheading: "...",
    body: "<p>...</p><pre>...</pre>..."
  },

  // Section 2: Q&A (collapsible accordion)
  qna: [{ q: "...", a: "..." }, ...],

  // Section 3: Test (all question types)
  test: {
    intro: "...",
    questions: [
      { type: "mcq",   question: "...", options: [...], answer: 0 },
      { type: "fill",  question: "...", answer: "..." },
      { type: "tf",    question: "...", answer: "true/false" },
      { type: "short", question: "...", sampleAnswer: "..." }
    ]
  },

  // Section 4: Coding (only for levels with sections.includes("coding"))
  scenario: "...",
  hint: "...",
  solution: "...",
  starterCode: "...",
  wrongHint: "..."
}
```

### Day/Night Cycle
- Detects current hour via `new Date().getHours()`
- Applies `time-morning`, `time-day`, `time-evening`, or `time-night` class to `<body>`
- All sky transitions are CSS-only, 3s ease-in-out

### Streak Logic
- `streak = 1` on first activity
- `streak +1` if played on consecutive day
- Reset to `1` if gap > 1 day
- Shown in navbar as "🔥 X day streak"

---

## 📌 Current Priority

**Next immediate task:** Append all `level.html` section CSS to `style.css` + add levels 4–20 to `levels_data.js`

After that: Add levels 4–10, test full flow in browser, then levels 11–20.

---

_Last updated: 2026-07-02_