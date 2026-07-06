/* ============================================================
   PyBe — levels.js
   Level grid with 3D tilt effect
   ============================================================ */

const TOTAL_LEVELS = 100;

function getCardState(levelId, progress) {
    if (progress.completed.includes(levelId)) return 'completed';
    if (levelId <= progress.currentLevel) return 'unlocked';
    return 'locked';
}

function buildGrid() {
    const grid = document.getElementById("levelGrid");
    if (!grid) {
        console.error("levelGrid not found in DOM");
        return;
    }

    const progress = window.PyBe.getProgress();
    console.log("Progress loaded:", progress);

    grid.innerHTML = "";

    for (let i = 1; i <= TOTAL_LEVELS; i++) {
        const state = getCardState(i, progress);

        const card = document.createElement("div");
        card.className = `level-card ${state}`;
        if (state === 'unlocked' && i === progress.currentLevel) {
            card.classList.add("current");
        }
        card.textContent = i;
        card.dataset.level = i;

        // Click handler
        card.addEventListener("click", () => handleCardClick(i, state));

        // 3D tilt on mouse move (only for unlocked/completed)
        if (state !== 'locked') {
            card.addEventListener("mousemove", (e) => tiltCard(e, card));
            card.addEventListener("mouseleave", () => resetTilt(card));
        }

        grid.appendChild(card);
    }

    updateProgressUI(progress);
}

function handleCardClick(levelId, state) {
    if (state === 'locked') return;
    window.location.href = `level.html?id=${levelId}`;
}

function tiltCard(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform =
        `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
}

function resetTilt(card) {
    card.style.transform = "perspective(600px) rotateX(0) rotateY(0) scale(1)";
}

function updateProgressUI(progress) {
    const completed = progress.completed.length;
    const pct = Math.round((completed / TOTAL_LEVELS) * 100);

    const textEl = document.getElementById("progressText");
    const pctEl  = document.getElementById("progressPercent");
    const fillEl = document.getElementById("progressFill");

    if (textEl) textEl.textContent = `${completed} / ${TOTAL_LEVELS} Cleared`;
    if (pctEl)  pctEl.textContent  = `${pct}%`;
    if (fillEl) fillEl.style.width = `${pct}%`;
}

// Build grid explicitly on pages that need it (call buildGrid() manually)
// window.addEventListener("DOMContentLoaded", buildGrid);