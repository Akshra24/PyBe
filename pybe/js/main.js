/* ============================================================
   PyBe — main.js
   Landing page animations
   ============================================================ */

// ---- Typewriter Effect ----
const typewriterMessages = [
    "Hey there, future Python wizard! I'm Doraemon. Ready to learn Python the fun way?",
];

let charIndex = 0;
const typewriterEl = document.getElementById("typewriterText");

function typeWriter() {
    if (!typewriterEl) return;

    const msg = typewriterMessages[0];

    if (charIndex < msg.length) {
        typewriterEl.innerHTML = msg.substring(0, charIndex + 1) + '<span class="cursor"></span>';
        charIndex++;
        setTimeout(typeWriter, 45);
    } else {
        // Remove cursor after typing done
        typewriterEl.innerHTML = msg;
    }
}

// ---- Trigger animations on load ----
window.addEventListener("DOMContentLoaded", () => {
    const doraemon     = document.getElementById("doraemon");
    const speechBubble = document.getElementById("speechBubble");
    const heroText     = document.getElementById("heroText");
    const ctaBtn       = document.getElementById("ctaBtn");
    const gadgets      = document.querySelectorAll(".gadget");

    // 1. Doraemon bounces in
    setTimeout(() => {
        doraemon?.classList.add("bounce-in");
    }, 200);

    // 2. After bounce, switch to idle float
    setTimeout(() => {
        doraemon?.classList.remove("bounce-in");
        doraemon?.classList.add("idle");
        // Show speech bubble
        speechBubble?.classList.add("pop-in");
        // Start typewriter after bubble pops
        setTimeout(typeWriter, 1600);
    }, 1400);

    // 3. Hero text fades up
    setTimeout(() => {
        heroText?.classList.add("fade-up");
    }, 2000);

    // 4. CTA button fades up
    setTimeout(() => {
        ctaBtn?.classList.add("fade-up");
    }, 2400);

    // 5. Gadgets float in
    gadgets.forEach(g => g.classList.add("fade-up"));
});