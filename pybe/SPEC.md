# PyBe — Project Specification

## 1. Concept & Vision

**PyBe** is a gamified, scenario-driven Python learning prototype designed for absolute beginners — no CS background needed. Each of the **100 levels** presents a real-world scenario (a problem or situation) that the learner solves by writing Python code. Styled around **Doraemon**, progress is sequential — complete level N to unlock level N+1. No login, all progress in localStorage.

**Tagline:** *"Learn Python the Doraemon Way — No Magic Required!"*

---

## 2. Design Language

### Aesthetic Direction
Doraemon-inspired, soft, rounded, and playful. Cartoon-world depth with layered 3D shadows. Approachable, colorful, game-like.

### Color Palette
| Role        | Color     | Hex       |
|-------------|-----------|-----------|
| Primary     | Doraemon Blue | `#00AEEF` |
| Secondary   | White     | `#FFFFFF` |
| Accent      | Doraemon Red | `#E53935` |
| Highlight   | Gadget Yellow | `#FFC107` |
| Background  | Sky Blue  | `#E8F6FF` |
| Card BG     | Soft White | `#FAFEFF` |
| Text Dark   | Navy      | `#1A2A3A` |
| Text Light  | Gray      | `#6B7B8A` |
| Success     | Green     | `#4CAF50` |
| Locked      | Muted Gray | `#B0BEC5` |

### Typography
- **Headings:** `Nunito` (700, 800) — rounded, friendly
- **Body:** `Quicksand` (400, 500, 600) — clean, modern
- **Monospace (code):** `Fira Code` — Python code display

### Motion Philosophy
- Landing: Typewriter text reveal, Doraemon bounce-in, floating clouds
- Level cards: 3D tilt on hover (mouse-tracking perspective)
- Buttons: 3D press-down effect
- Level complete: Confetti burst
- Wrong answer: Shake animation
- All transitions: 300–500ms ease-out

---

## 3. Pages

### `index.html` — Landing
- Full-screen sky background with animated floating clouds
- Doraemon character (CSS/SVG) bounces in from left
- Speech bubble with typewriter welcome message
- Headline + subtext fade in
- CTA: "Start My Adventure 🚀" (3D button, navigates to home.html)

### `home.html` — Level Select (The Map)
- Navbar: PyBe logo (left), progress counter (right)
- 10×10 responsive grid of 100 level cards
- Each card: number, 3D tilt on hover, 3 states
  - 🔒 Locked: grayscale, padlock icon
  - 🔓 Unlocked: blue glow
  - ✅ Completed: green tick
- 3D progress bar at bottom

### `level.html` — Gameplay
- Back button to return to map
- Level number + scenario title
- Scenario description (the story/problem)
- Doraemon hint bubble
- Code editor (styled textarea, Fira Code)
- Output console panel
- Run Code ▶ button
- Submit ✅ button
- Hint 💡 button (Doraemon gives clue)

---

## 4. Scenario-Driven Levels (Chapter 1 — Levels 1–10)

Each level presents a real-world scenario. The learner writes Python to solve it.

**Level structure:**
```js
{
  id: 1,
  title: "The Anywhere Door",
  scenario: "Doraemon just used the Anywhere Door to travel to Paris! Write a program that prints 'I made it to Paris!' so Nobita knows he arrived safely.",
  hint: "Use print() — it's like Doraemon's Anywhere Door for text!",
  solution: "print('I made it to Paris!')",
  concept: "Your first Python command"
}
```

**Levels 1–10 (First Steps):**
1. The Anywhere Door — `print()` — print a message
2. Gadget Checklist — `print()` with multiple lines
3. Doraemon's Note — comments in code
4. Nobita's Homework — string basics
5. The Calculator — arithmetic operators
6. Shizuka's Bath Temperature — float numbers
7. Giant's Lunch Order — order of operations
8. The Secret Code — understanding errors (spot the bug)
9. Doraemon's Inventory — variables
10. The Final Test — review of Chapter 1

---

## 5. Component States

### Level Card
- **Locked:** `filter: grayscale(100%)`, padlock icon, `cursor: not-allowed`
- **Unlocked:** Blue border glow (`box-shadow`), level number in blue, `cursor: pointer`, 3D tilt on hover
- **Completed:** Green border, green checkmark badge top-right

### Button (Primary)
- Default: Blue `#00AEEF`, bold white text, deep 3D shadow
- Hover: Lift up 2px, deeper shadow
- Active: Press down 3px, flat shadow
- Disabled: Gray `#B0BEC5`, no shadow

### Code Editor
- Dark background `#1e2a34`, green text for Python
- Fira Code monospace
- Line numbers on left

### Console Output
- Black background `#0d1117`, cyan text
- Simulates Python output

---

## 6. Technical Approach

### Stack
- Pure HTML5 + CSS3 + Vanilla JS
- No build step, no frameworks
- Google Fonts + Font Awesome via CDN

### Architecture
```
pybe/
├── index.html
├── home.html
├── level.html
├── css/
│   └── style.css
├── js/
│   ├── main.js         (landing animations)
│   ├── levels.js       (grid + 3D tilt + progress)
│   ├── level.js        (gameplay logic)
│   ├── progress.js     (localStorage)
│   ├── confetti.js     (celebration)
│   └── levels_data.js  (level objects)
└── SPEC.md
```

### Progress (localStorage)
```js
{
  currentLevel: 3,       // highest unlocked
  completed: [1, 2],     // cleared levels
  lastPlayed: "2026-06-29"
}
```

---

## 7. Responsive Breakpoints

| Device | Grid Columns |
|--------|-------------|
| Desktop (>1024px) | 10 |
| Tablet (768–1024px) | 5 |
| Mobile (<768px) | 3 |

---

## 8. Phases

- **Phase 1:** SPEC + WORKFLOW ✅
- **Phase 2:** Landing page (index.html + CSS + main.js) ← BUILDING NOW
- **Phase 3:** Level select (home.html + levels.js + style.css)
- **Phase 4:** Level gameplay (level.html + level.js + levels_data.js)
- **Phase 5:** Progress persistence (progress.js)
- **Phase 6:** Confetti (confetti.js)
- **Phase 7:** Full content — all 10 chapters (100 levels)