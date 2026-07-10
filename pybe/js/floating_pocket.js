/* ============================================================
   PyBe — floating_pocket.js
   Self-contained Floating 4D Pocket & Inventory System
   ============================================================ */

(function () {
    // Prevent double loading
    if (window.PyBeFloatingPocketLoaded) return;
    window.PyBeFloatingPocketLoaded = true;

    const GADGETS = [
        { id: 10,  name: "Bamboo Copter",  icon: "🚁", desc: "Flies over code obstacles. Unlocks stepper shortcuts. (Fires cloud fly-by sweep!)", maxUses: 999, cooldown: 3, milestone: 0 },
        { id: 20,  name: "Time Cloth", icon: "⏳", desc: "Wraps mistakes to reverse time! Retry one incorrect test question or code submission per level, restoring lost marks and explaining the mistake. (Once per level)", maxUses: 999, cooldown: 3, milestone: 0 },
        { id: 30,  name: "Anywhere Door",   icon: "🚪", desc: "Teleports across space. Enables fast chapter map jumps. (Flashes pink warp portal!)", maxUses: 999, cooldown: 3, milestone: 0 },
        { id: 40,  name: "Search Light",  icon: "🔦", desc: "Shines a light on coding bugs! Identifies the error type (syntax, runtime, or logical) and highlights the line containing the error in your editor. (Once per activation)", maxUses: 999, cooldown: 3, milestone: 0 },
        { id: 50,  name: "Memory Bread",   icon: "🍞", desc: "Eat to memorize. Unlocks Python data structure reference sheets. (Spawns glowing memory slices!)", maxUses: 999, cooldown: 3, milestone: 0 },
        { id: 25,  name: "Translation Jelly", icon: "🍮", desc: "Instantly translates lessons into simple English, Hindi, Hinglish, or beginner explanations with analogies and breakdowns. (Unlocks after Level 10)", maxUses: 999, cooldown: 3, milestone: 10 },
        { id: 60,  name: "Small Light",    icon: "🔦", desc: "Shrinks code complexity. Highlights redundant loop lines. (Shrinks page layout size!)", maxUses: 999, cooldown: 3, milestone: 20 },
        { id: 65,  name: "Lucky Star",       icon: "⭐", desc: "Restores one lost daily streak every seven days! Automatically updates your active streak. (Once per 7 days)", maxUses: 999, cooldown: 3, milestone: 30 },
        { id: 70,  name: "Big Light",      icon: "🔍", desc: "Inspects large variables. Shows detailed trace logs. (Expands page layout size!)", maxUses: 999, cooldown: 3, milestone: 40 },
        { id: 75,  name: "Time TV",        icon: "📺", desc: "Launches the temporal dashboard! View previous level attempts, coding submissions, accuracy rates, and topic strengths. (Unlocks after Level 50)", maxUses: 999, cooldown: 3, milestone: 50 },
        { id: 80,  name: "Computer Pencil", icon: "✏️", desc: "Writes clean code. Unlocks automated completions. (Paints glowing lines across screen!)", maxUses: 999, cooldown: 3, milestone: 60 },
        { id: 85,  name: "Energy Capsule",   icon: "💊", desc: "Provides one extra coding submission during a coding round without incrementing attempts or reducing efficiency scores. (Once per coding round)", maxUses: 999, cooldown: 3, milestone: 70 },
        { id: 90,  name: "Gourmet Tablecloth", icon: "🍽️", desc: "Boosts coding focus. Unlocks alternative visual retro themes. (Spawns falling sweets!)", maxUses: 999, cooldown: 3, milestone: 80 },
        { id: 100, name: "Super Python Glove", icon: "🥊", desc: "Smashes any bug in sight. Certified Python wizard badge! (Triggers screen punch bug strike!)", maxUses: 999, cooldown: 3, milestone: 90 }
    ];

    // ===== POCKET STATE persistence =====
    const STATE_KEY = "pybe_pocket_state_v1";
    let pocketState = { uses: {}, cooldowns: {} };

    function loadPocketState() {
        try {
            const data = localStorage.getItem(STATE_KEY);
            if (data) {
                pocketState = JSON.parse(data);
            }
        } catch (e) {
            console.warn("Could not load pocket state", e);
        }
        
        // Ensure all gadgets are initialized in state
        GADGETS.forEach(g => {
            if (pocketState.uses[g.id] === undefined || g.maxUses === 999) {
                pocketState.uses[g.id] = g.maxUses;
            }
            if (pocketState.cooldowns[g.id] === undefined) {
                pocketState.cooldowns[g.id] = 0;
            }
        });
    }

    function savePocketState() {
        try {
            localStorage.setItem(STATE_KEY, JSON.stringify(pocketState));
        } catch (e) {
            console.warn("Could not save pocket state", e);
        }
    }

    // ===== AUDIO SYNTHESIZER ENGINE =====
    function playPocketSynth(type) {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const now = ctx.currentTime;

            if (type === 'copter') {
                // Rotor buzz sound
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(80, now);
                osc.frequency.linearRampToValueAtTime(350, now + 0.8);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 1.2);
            } else if (type === 'jelly') {
                // Shimmering chord sound
                [261.63, 329.63, 392.00, 523.25].forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + i * 0.08);
                    gain.gain.setValueAtTime(0.1, now + i * 0.08);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.6);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.08);
                    osc.stop(now + i * 0.08 + 0.7);
                });
            } else if (type === 'door') {
                // Warp portal swell
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(150, now);
                osc.frequency.exponentialRampToValueAtTime(880, now + 0.5);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.6);
            } else if (type === 'furoshiki') {
                // Tick tock sweep
                const notes = [600, 400, 600, 400, 800, 100];
                notes.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + i * 0.15);
                    gain.gain.setValueAtTime(0.12, now + i * 0.15);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.1);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.15);
                    osc.stop(now + i * 0.15 + 0.12);
                });
            } else if (type === 'flashlight') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, now);
                osc.frequency.setValueAtTime(1200, now + 0.05);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(now + 0.12);
            } else if (type === 'star') {
                const notes = [523.25, 659.25, 783.99, 1046.50, 1567.98, 2093.00];
                notes.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + i * 0.08);
                    gain.gain.setValueAtTime(0.12, now + i * 0.08);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.3);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.08);
                    osc.stop(now + i * 0.08 + 0.3);
                });
            } else if (type === 'capsule') {
                const notes = [440, 554, 659, 880];
                notes.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + i * 0.05);
                    gain.gain.setValueAtTime(0.1, now + i * 0.05);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.15);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.05);
                    osc.stop(now + i * 0.05 + 0.18);
                });
            } else if (type === 'bread') {
                // Twinkling chime
                const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
                notes.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + i * 0.05);
                    gain.gain.setValueAtTime(0.1, now + i * 0.05);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.3);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.05);
                    osc.stop(now + i * 0.05 + 0.35);
                });
            } else if (type === 'light') {
                // Laser chirp
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(900, now);
                osc.frequency.exponentialRampToValueAtTime(200, now + 0.3);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.35);
            } else if (type === 'light_big') {
                // Laser grow
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(200, now);
                osc.frequency.exponentialRampToValueAtTime(1000, now + 0.35);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.4);
            } else if (type === 'pencil') {
                // Scribble scratch noise
                const bufferSize = ctx.sampleRate * 0.4;
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
                const noise = ctx.createBufferSource();
                noise.buffer = buffer;
                
                const filter = ctx.createBiquadFilter();
                filter.type = 'bandpass';
                filter.frequency.value = 1000;
                
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.38);
                
                noise.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);
                noise.start(now);
                noise.stop(now + 0.4);
            } else if (type === 'tablecloth') {
                // Fanfare sweep
                const notes = [392.00, 523.25, 659.25, 783.99, 1046.50, 1318.51, 1046.50, 1318.51];
                notes.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + i * 0.07);
                    gain.gain.setValueAtTime(0.15, now + i * 0.07);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.07 + 0.15);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.07);
                    osc.stop(now + i * 0.07 + 0.18);
                });
            } else if (type === 'glove') {
                // Punch boom explosion
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(150, now);
                osc.frequency.exponentialRampToValueAtTime(30, now + 0.8);
                
                gain.gain.setValueAtTime(0.3, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.9);
            } else if (type === 'click') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(500, now);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.09);
            } else if (type === 'error') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(130, now);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.22);
            }
        } catch (e) {
            console.warn("Synth failure", e);
        }
    }

    // ===== DYNAMIC STYLES INJECTION =====
    const cssStyles = `
        /* Floating Button */
        .fp-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 65px;
            height: 65px;
            background: linear-gradient(135deg, #00AEEF 0%, #0077b6 100%);
            border-radius: 50%;
            border: 3px solid #FFFFFF;
            box-shadow: 0 8px 24px rgba(0, 174, 239, 0.4), 0 0 0 0 rgba(0, 174, 239, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 9999999;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            animation: fpPulse 2s infinite;
        }

        .fp-btn:hover {
            transform: scale(1.1) rotate(15deg);
            box-shadow: 0 12px 30px rgba(0, 174, 239, 0.6);
        }

        .fp-btn:active {
            transform: scale(0.95);
        }

        .fp-btn-pocket {
            width: 36px;
            height: 28px;
            border: 2px solid #fff;
            border-bottom-left-radius: 18px;
            border-bottom-right-radius: 18px;
            position: relative;
            background: rgba(255,255,255,0.15);
            box-shadow: inset 0 2px 5px rgba(255,255,255,0.4);
        }

        .fp-btn-bell {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 14px;
            height: 14px;
            background: #FFC107;
            border-radius: 50%;
            border: 1.5px solid #fff;
        }

        @keyframes fpPulse {
            0% { box-shadow: 0 8px 24px rgba(0, 174, 239, 0.4), 0 0 0 0 rgba(0, 174, 239, 0.5); }
            70% { box-shadow: 0 8px 24px rgba(0, 174, 239, 0.4), 0 0 0 15px rgba(0, 174, 239, 0); }
            100% { box-shadow: 0 8px 24px rgba(0, 174, 239, 0.4), 0 0 0 0 rgba(0, 174, 239, 0); }
        }

        /* Inventory Modal */
        .fp-modal {
            position: fixed;
            inset: 0;
            background: rgba(5, 12, 24, 0.85);
            z-index: 10000000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 20px;
            font-family: 'Quicksand', sans-serif;
        }

        .fp-modal.visible {
            opacity: 1;
            pointer-events: all;
        }

        .fp-content {
            background: rgba(13, 27, 42, 0.95);
            border: 2px solid rgba(0, 174, 239, 0.35);
            border-radius: 32px;
            max-width: 750px;
            width: 100%;
            padding: 32px;
            box-shadow: 0 25px 60px rgba(0,0,0,0.7), 0 0 45px rgba(0, 174, 239, 0.2);
            color: #fff;
            position: relative;
            transform: scale(0.85);
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .fp-modal.visible .fp-content {
            transform: scale(1);
        }

        .fp-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 14px;
        }

        .fp-title {
            font-family: 'Nunito', sans-serif;
            font-size: 24px;
            font-weight: 900;
            color: #00AEEF;
            display: flex;
            align-items: center;
            gap: 12px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .fp-close {
            background: none;
            border: none;
            color: #b0bec5;
            font-size: 24px;
            cursor: pointer;
            transition: color 0.2s, transform 0.2s;
        }

        .fp-close:hover {
            color: #ff5f57;
            transform: scale(1.15);
        }

        .fp-body-layout {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 24px;
        }

        @media (max-width: 680px) {
            .fp-body-layout {
                grid-template-columns: 1fr;
            }
        }

        .fp-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }

        @media (max-width: 480px) {
            .fp-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .fp-slot {
            aspect-ratio: 1/1;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.03);
            border: 2px dashed rgba(255, 255, 255, 0.12);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            padding: 8px;
        }

        .fp-slot.locked {
            filter: grayscale(1);
            opacity: 0.45;
        }

        .fp-slot.locked:hover {
            border-color: rgba(255, 255, 255, 0.3);
            animation: fpSlotShake 0.4s ease;
        }

        .fp-slot.unlocked {
            background: rgba(0, 174, 239, 0.05);
            border: 2px solid rgba(0, 174, 239, 0.45);
            box-shadow: 0 4px 15px rgba(0, 174, 239, 0.1);
        }

        .fp-slot.unlocked:hover {
            transform: translateY(-4px);
            background: rgba(0, 174, 239, 0.12);
            border-color: #00E5FF;
            box-shadow: 0 6px 18px rgba(0, 174, 239, 0.25);
        }

        .fp-slot.selected {
            border-color: #FFC107 !important;
            box-shadow: 0 0 15px rgba(255, 193, 7, 0.35) !important;
        }

        .fp-slot-icon {
            font-size: 28px;
            margin-bottom: 4px;
        }

        .fp-slot-name {
            font-size: 9px;
            font-weight: 800;
            text-align: center;
            color: #cfd8dc;
            font-family: 'Nunito', sans-serif;
            line-height: 1.1;
        }

        /* Detail Area */
        .fp-detail-panel {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            justify-content: flex-start;
        }

        .fp-detail-header {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .fp-detail-large-icon {
            width: 70px;
            height: 70px;
            background: rgba(255, 255, 255, 0.06);
            border: 2px solid rgba(255,255,255,0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 38px;
        }

        .fp-detail-title-block {
            display: flex;
            flex-direction: column;
        }

        .fp-detail-name {
            font-family: 'Nunito', sans-serif;
            font-size: 20px;
            font-weight: 850;
            color: #FFC107;
        }

        .fp-detail-status {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .fp-detail-status.locked { color: #ff5f57; }
        .fp-detail-status.unlocked { color: #00ffcc; }

        .fp-detail-desc {
            font-size: 13.5px;
            line-height: 1.5;
            color: #eceff1;
        }

        .fp-detail-stats {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            font-size: 12px;
            border-top: 1px solid rgba(255,255,255,0.08);
            padding-top: 12px;
        }

        .fp-stat-box {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .fp-stat-lbl {
            font-size: 10px;
            color: #b0bec5;
            text-transform: uppercase;
        }

        .fp-stat-val {
            font-weight: 800;
            font-size: 14px;
            color: #fff;
        }

        .fp-activate-btn {
            background: #4CAF50;
            color: #fff;
            border: none;
            padding: 12px 24px;
            border-radius: 50px;
            font-family: 'Nunito', sans-serif;
            font-size: 16px;
            font-weight: 800;
            cursor: pointer;
            box-shadow: 0 4px 0 #2e7d32, 0 8px 16px rgba(76, 175, 80, 0.25);
            transition: all 0.15s;
            text-align: center;
        }

        .fp-activate-btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 6px 0 #2e7d32, 0 10px 20px rgba(76, 175, 80, 0.35);
        }

        .fp-activate-btn:active:not(:disabled) {
            transform: translateY(2px);
            box-shadow: 0 2px 0 #2e7d32;
        }

        .fp-activate-btn:disabled {
            background: #555 !important;
            box-shadow: none !important;
            cursor: not-allowed;
            color: #aaa;
        }

        @keyframes fpSlotShake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-4px) rotate(-1.5deg); }
            40% { transform: translateX(4px) rotate(1.5deg); }
            60% { transform: translateX(-2px) rotate(-0.5deg); }
            80% { transform: translateX(2px) rotate(0.5deg); }
        }

        /* Screen Visual Overlay Animations */
        .fp-screen-fx {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 99999999;
            display: none;
            background: transparent;
        }

        /* Copter cloud effect */
        .fp-cloud-fx {
            position: absolute;
            background: rgba(255,255,255,0.7);
            border-radius: 50px;
            animation: fpCloudFall 1.8s linear forwards;
        }

        @keyframes fpCloudFall {
            0% { transform: translateY(-150px) scale(0.5); opacity: 0; }
            20% { opacity: 0.8; }
            80% { opacity: 0.8; }
            100% { transform: translateY(110vh) scale(1.5); opacity: 0; }
        }

        /* Jelly Matrix falls */
        .fp-jelly-column {
            position: absolute;
            color: #00ffcc;
            font-family: 'Fira Code', monospace;
            font-size: 14px;
            font-weight: 700;
            line-height: 1;
            white-space: nowrap;
            writing-mode: vertical-rl;
            animation: fpMatrixFall 2.2s linear forwards;
            opacity: 0;
        }

        @keyframes fpMatrixFall {
            0% { transform: translateY(-300px); opacity: 0; }
            20% { opacity: 0.9; }
            80% { opacity: 0.9; }
            100% { transform: translateY(110vh); opacity: 0; }
        }

        /* Anywhere Door */
        .fp-door-fx {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.1);
            width: 250px;
            height: 400px;
            border: 12px solid #e91e63;
            border-radius: 8px;
            background: #ff80ab;
            box-shadow: 0 0 50px rgba(233,30,99,0.8);
            opacity: 0;
            z-index: 100000;
            transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .fp-door-fx.active {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }

        .fp-door-fx-inner {
            width: 100%;
            height: 100%;
            background: #fff;
            transform-origin: left center;
            transition: transform 0.6s 0.8s ease-in-out;
            border-left: 2px solid rgba(0,0,0,0.1);
        }

        .fp-door-fx.active.open .fp-door-fx-inner {
            transform: rotateY(-110deg);
        }

        /* Time Furoshiki rewind filter */
        .fp-rewind-filter {
            position: fixed;
            inset: 0;
            background: transparent;
            z-index: 99999990;
            pointer-events: none;
            backdrop-filter: grayscale(1) invert(0.15) contrast(1.1);
            -webkit-backdrop-filter: grayscale(1) invert(0.15) contrast(1.1);
            opacity: 0;
            transition: opacity 0.8s ease;
        }

        /* Sweets gourmet tablecloth */
        .fp-sweet {
            position: absolute;
            font-size: 32px;
            animation: fpSweetFall 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            opacity: 0;
        }

        @keyframes fpSweetFall {
            0% { transform: translateY(-50px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }

        /* Translation Jelly fall column */
        .fp-jelly-column {
            position: absolute;
            top: -200px;
            color: #ffb300;
            text-shadow: 0 0 10px rgba(255, 179, 0, 0.8);
            font-family: 'Fira Code', monospace;
            font-weight: bold;
            font-size: 15px;
            line-height: 1.2;
            pointer-events: none;
            opacity: 0;
            animation: fpJellyFall 1.8s linear forwards;
        }

        @keyframes fpJellyFall {
            0% { transform: translateY(0); opacity: 0; }
            15% { opacity: 0.95; }
            85% { opacity: 0.95; }
            100% { transform: translateY(120vh); opacity: 0; }
        }

        /* Punch graphic glove */
        .fp-punch-fx {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(4);
            font-size: 150px;
            opacity: 0;
            transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            z-index: 100005;
        }

        .fp-punch-fx.strike {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }

        .fp-bug-strike {
            position: absolute;
            font-size: 40px;
            transition: all 0.5s ease-out;
        }

        /* Memory Bread Learning Popup */
        .mb-popup-overlay {
            position: fixed;
            inset: 0;
            background: rgba(5, 12, 24, 0.75);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100000001;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
        }

        .mb-popup-overlay.visible {
            opacity: 1;
            pointer-events: all;
        }

        .mb-card {
            background: #faf8f5;
            border: 5px solid #8d6e63;
            border-radius: 45px 45px 30px 30px;
            box-shadow: 0 25px 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(141, 110, 99, 0.15);
            width: 600px;
            max-width: 92%;
            max-height: 82vh;
            padding: 35px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            transform: scale(0.8) translateY(30px);
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            color: #3e2723;
            font-family: 'Quicksand', sans-serif;
            overflow: hidden;
        }

        .mb-popup-overlay.visible .mb-card {
            transform: scale(1) translateY(0);
        }

        /* Top crust double arches */
        .mb-card::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 10%;
            width: 80%;
            height: 40px;
            background: #faf8f5;
            border-top: 5px solid #8d6e63;
            border-radius: 50%;
            z-index: -1;
        }

        .mb-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px dashed rgba(141, 110, 99, 0.25);
            padding-bottom: 12px;
        }

        .mb-header-title {
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: 'Nunito', sans-serif;
            font-size: 22px;
            font-weight: 900;
            color: #5d4037;
        }

        .mb-header-sub {
            font-size: 11px;
            text-transform: uppercase;
            font-weight: 700;
            color: #8d6e63;
            letter-spacing: 0.5px;
            margin-top: 2px;
        }

        .mb-close-btn {
            background: none;
            border: none;
            color: #8d6e63;
            font-size: 22px;
            cursor: pointer;
            transition: color 0.2s, transform 0.2s;
        }

        .mb-close-btn:hover {
            color: #d84315;
            transform: scale(1.15);
        }

        .mb-tabs {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            padding-bottom: 4px;
            scrollbar-width: none;
        }

        .mb-tabs::-webkit-scrollbar {
            display: none;
        }

        .mb-tab-btn {
            background: rgba(141, 110, 99, 0.08);
            border: 1px solid rgba(141, 110, 99, 0.15);
            color: #5d4037;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 13px;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .mb-tab-btn:hover {
            background: rgba(141, 110, 99, 0.15);
        }

        .mb-tab-btn.active {
            background: #8d6e63;
            color: #fff;
            border-color: #8d6e63;
            box-shadow: 0 4px 10px rgba(141, 110, 99, 0.3);
        }

        .mb-content-body {
            flex-grow: 1;
            overflow-y: auto;
            max-height: 48vh;
            padding-right: 6px;
        }

        .mb-content-pane {
            display: none;
            animation: mbPaneFade 0.3s ease-out;
        }

        .mb-content-pane.active {
            display: block;
        }

        @keyframes mbPaneFade {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Learning content items formatting */
        .mb-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .mb-item {
            position: relative;
            padding-left: 28px;
            font-size: 14.5px;
            line-height: 1.5;
            color: #4e342e;
        }

        .mb-item::before {
            content: '📌';
            position: absolute;
            left: 0;
            top: 2px;
            font-size: 14px;
        }

        .mb-item.mistake::before {
            content: '❌';
        }

        .mb-code-block {
            background: #f5ebe6;
            border: 2px solid #d7ccc8;
            color: #3e2723;
            padding: 16px;
            border-radius: 14px;
            font-family: 'Fira Code', monospace;
            font-size: 13px;
            overflow-x: auto;
            white-space: pre;
            line-height: 1.5;
            box-shadow: inset 0 2px 5px rgba(0,0,0,0.03);
        }

        .mb-qa-card {
            background: rgba(141, 110, 99, 0.04);
            border: 1px solid rgba(141, 110, 99, 0.12);
            border-radius: 16px;
            padding: 14px 16px;
            margin-bottom: 12px;
        }

        .mb-qa-q {
            font-weight: 800;
            font-size: 14.5px;
            color: #5d4037;
            margin-bottom: 6px;
            display: flex;
            gap: 8px;
        }

        .mb-qa-q-badge {
            background: #8d6e63;
            color: #fff;
            border-radius: 4px;
            padding: 0 4px;
            font-size: 11px;
            display: inline-flex;
            align-items: center;
        }

        .mb-qa-a {
            font-size: 13.5px;
            line-height: 1.5;
            color: #4e342e;
            padding-left: 26px;
        }

        /* Time TV Retro-Futuristic Styles */
        .ttv-overlay {
            position: fixed;
            inset: 0;
            background: rgba(10, 8, 22, 0.9);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100000005;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }

        .ttv-overlay.visible {
            opacity: 1;
            pointer-events: all;
        }

        .ttv-card {
            background: #2b1f1d;
            border: 12px solid #5d4037;
            border-radius: 40px;
            box-shadow: 0 40px 90px rgba(0, 0, 0, 0.6), inset 0 0 50px rgba(0, 0, 0, 0.8);
            width: 850px;
            max-width: 95%;
            max-height: 90vh;
            padding: 30px;
            display: flex;
            flex-direction: column;
            position: relative;
            transform: scale(0.8) translateY(50px);
            transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            font-family: 'Quicksand', sans-serif;
            color: #fff;
            overflow: hidden;
        }

        .ttv-overlay.visible .ttv-card {
            transform: scale(1) translateY(0);
        }

        .ttv-screen {
            background: #111e18;
            border: 16px solid #424242;
            border-radius: 30px;
            box-shadow: inset 0 0 35px rgba(0,255,100,0.25), 0 0 20px rgba(0,0,0,0.5);
            padding: 25px;
            flex-grow: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
            position: relative;
        }

        .ttv-screen::after {
            content: " ";
            display: block;
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 10;
            background-size: 100% 4px, 6px 100%;
            pointer-events: none;
            opacity: 0.85;
        }

        .ttv-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px dashed rgba(0, 255, 100, 0.3);
            padding-bottom: 12px;
        }

        .ttv-title {
            font-size: 24px;
            font-weight: 900;
            color: #00ff66;
            text-shadow: 0 0 10px rgba(0, 255, 100, 0.5);
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .ttv-close {
            background: none;
            border: none;
            color: #00ff66;
            font-size: 26px;
            cursor: pointer;
            transition: transform 0.2s;
        }

        .ttv-close:hover {
            transform: scale(1.2);
            text-shadow: 0 0 15px rgba(0, 255, 100, 0.8);
        }

        .ttv-cabinet-detail {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            padding: 0 10px;
        }

        .ttv-knobs {
            display: flex;
            gap: 15px;
        }

        .ttv-knob {
            width: 32px;
            height: 32px;
            background: #4e342e;
            border: 3px solid #3e2723;
            border-radius: 50%;
            position: relative;
            cursor: pointer;
            transition: transform 0.2s;
        }

        .ttv-knob:hover {
            transform: rotate(30deg);
        }

        .ttv-knob::before {
            content: '';
            position: absolute;
            width: 4px;
            height: 12px;
            background: #00ff66;
            top: 2px;
            left: 11px;
        }

        .ttv-speaker-grille {
            width: 120px;
            height: 12px;
            background: repeating-linear-gradient(90deg, #3e2723, #3e2723 4px, #2b1f1d 4px, #2b1f1d 8px);
            border-radius: 6px;
        }

        .ttv-grid {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 20px;
        }

        .ttv-panel {
            background: rgba(0, 40, 10, 0.3);
            border: 1px solid rgba(0, 255, 100, 0.2);
            border-radius: 20px;
            padding: 18px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .ttv-panel-title {
            font-size: 16px;
            font-weight: 800;
            color: #00ff66;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .ttv-radial-wrap {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .ttv-stats-card {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .ttv-stat-val {
            font-size: 26px;
            font-weight: 900;
            color: #00ff66;
            text-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
        }

        .ttv-sw-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .ttv-sw-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(255,255,255,0.05);
            border-radius: 10px;
            padding: 8px 12px;
            font-size: 13.5px;
        }

        .ttv-sw-item.strong { border-left: 4px solid #4caf50; }
        .ttv-sw-item.weak { border-left: 4px solid #ef5350; }

        .ttv-table-wrap {
            max-height: 180px;
            overflow-y: auto;
            border: 1px solid rgba(0, 255, 100, 0.15);
            border-radius: 12px;
        }

        .ttv-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }

        .ttv-table th, .ttv-table td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid rgba(0, 255, 100, 0.1);
        }

        .ttv-table th {
            background: rgba(0, 255, 100, 0.1);
            color: #00ff66;
            font-weight: 800;
        }

        .ttv-table tr:hover {
            background: rgba(0, 255, 100, 0.04);
        }

        .ttv-code-badge {
            background: rgba(0, 255, 100, 0.2);
            color: #00ff66;
            border: 1px solid #00ff66;
            border-radius: 4px;
            padding: 2px 6px;
            font-size: 11px;
            cursor: pointer;
            font-family: monospace;
        }

        /* Bamboo Copter Flowchart Modal */
        .bc-popup-overlay {
            position: fixed;
            inset: 0;
            background: rgba(26, 42, 58, 0.85);
            backdrop-filter: blur(8px);
            z-index: 999999999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .bc-popup-overlay.visible {
            opacity: 1;
            pointer-events: auto;
        }

        .bc-card {
            background: #E8F6FF;
            border: 4px solid #00AEEF;
            border-radius: 28px;
            width: 90%;
            max-width: 600px;
            max-height: 85vh;
            overflow-y: auto;
            padding: 30px;
            box-shadow: 0 20px 50px rgba(0, 174, 239, 0.3);
            transform: scale(1.15);
            transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            scrollbar-width: thin;
            scrollbar-color: #00AEEF transparent;
        }

        .bc-popup-overlay.visible .bc-card {
            transform: scale(1);
        }

        .bc-close-btn {
            position: absolute;
            top: 15px;
            right: 20px;
            background: transparent;
            border: none;
            font-size: 32px;
            font-weight: 800;
            color: #00AEEF;
            cursor: pointer;
            line-height: 1;
            transition: transform 0.2s ease, color 0.2s ease;
        }

        .bc-close-btn:hover {
            transform: rotate(90deg) scale(1.1);
            color: #0077b6;
        }

        .bc-header {
            text-align: center;
            margin-bottom: 24px;
            border-bottom: 2px dashed rgba(0, 174, 239, 0.2);
            padding-bottom: 15px;
        }

        .bc-header-title {
            font-family: 'Nunito', sans-serif;
            font-size: 22px;
            font-weight: 900;
            color: #00AEEF;
            text-shadow: 0 2px 4px rgba(0, 174, 239, 0.1);
            margin-bottom: 4px;
        }

        .bc-header-subtitle {
            font-family: 'Quicksand', sans-serif;
            font-size: 14px;
            font-style: italic;
            font-weight: 600;
            color: #5b745f;
        }

        .bc-flow-body {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 0;
            gap: 2px;
        }

        .bc-node {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 14px 20px;
            border-radius: 18px;
            font-family: 'Quicksand', sans-serif;
            font-size: 14.5px;
            font-weight: 700;
            box-shadow: 0 4px 12px rgba(0,0,0,0.06);
            margin: 4px 0;
            max-width: 100%;
            text-align: left;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .bc-node:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }

        .bc-node strong {
            color: inherit;
            font-weight: 800;
        }

        .bc-node-icon {
            font-size: 18px;
        }

        .bc-node-lbl {
            line-height: 1.4;
        }

        /* Node Types */
        .bc-start {
            background: #E8F5E9;
            border: 2.5px solid #4CAF50;
            color: #2E7D32;
        }

        .bc-end {
            background: #FFEBEE;
            border: 2.5px solid #FF5252;
            color: #C62828;
        }

        .bc-input {
            background: #E3F2FD;
            border: 2.5px solid #2196F3;
            color: #0D47A1;
        }

        .bc-store {
            background: #FFFFFF;
            border: 2.5px solid #90CAF9;
            color: #1565C0;
        }

        .bc-decision {
            background: #FFFDE7;
            border: 2.5px solid #FBC02D;
            color: #F57F17;
        }

        .bc-loop {
            background: #F3E5F5;
            border: 2.5px solid #AB47BC;
            color: #4A148C;
        }

        .bc-output {
            background: #FFF3E0;
            border: 2.5px solid #FF9800;
            color: #E65100;
        }

        .bc-action {
            background: #ECEFF1;
            border: 2.5px solid #78909C;
            color: #37474F;
        }

        .bc-empty {
            background: #F5F5F5;
            border: 2.5px solid #BDBDBD;
            color: #616161;
            border-style: dotted;
        }

        .bc-arrow {
            font-size: 18px;
            color: #00AEEF;
            margin: 2px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: bcArrowBlink 1.5s infinite alternate;
        }

        @keyframes bcArrowBlink {
            0% { opacity: 0.6; transform: translateY(-2px); }
            100% { opacity: 1; transform: translateY(2px); }
        }

        /* Decision Branching layout */
        .bc-branches-container {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            width: 100%;
            margin: 10px 0;
        }

        .bc-branch {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(255,255,255,0.4);
            border-radius: 18px;
            padding: 10px;
            border: 2px dashed rgba(0, 174, 239, 0.25);
        }

        .bc-branch-label {
            font-family: 'Nunito', sans-serif;
            font-size: 11px;
            font-weight: 800;
            margin-bottom: 10px;
            padding: 4px 10px;
            border-radius: 20px;
        }

        .bc-branch-yes .bc-branch-label {
            background: #E8F5E9;
            color: #2E7D32;
        }

        .bc-branch-no .bc-branch-label {
            background: #FFEBEE;
            color: #C62828;
        }

        .bc-branch-flow {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .bc-merge-dot {
            width: 10px;
            height: 10px;
            background: #00AEEF;
            border-radius: 50%;
            margin: 8px 0;
            box-shadow: 0 0 8px rgba(0, 174, 239, 0.5);
        }

        /* Loop Container */
        .bc-loop-container {
            border-left: 3px solid #AB47BC;
            margin: 8px 0 8px 15px;
            padding-left: 15px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            align-self: stretch;
        }

        .bc-loop-body {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .bc-loop-arrow-back {
            font-family: 'Quicksand', sans-serif;
            font-size: 11px;
            font-weight: 800;
            color: #AB47BC;
            margin-top: 8px;
            align-self: flex-start;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        /* Zoom-out effect on level/home content */
        .level-wrapper, .home-wrapper {
            transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), filter 0.8s ease, opacity 0.8s ease;
        }

        .level-wrapper.zoomed-out, .home-wrapper.zoomed-out {
            transform: scale(0.9);
            filter: blur(3px);
            opacity: 0.65;
            pointer-events: none;
        }
    `;

    // ===== DOM CREATION & STYLES INJECTION =====
    function injectDOMElements() {
        // 1. Inject Styles
        const style = document.createElement('style');
        style.innerHTML = cssStyles;
        document.head.appendChild(style);

        // 2. Create Floating Pocket Button
        const btn = document.createElement('div');
        btn.className = 'fp-btn';
        btn.id = 'floatingPocketBtn';
        btn.innerHTML = `
            <div class="fp-btn-pocket">
                <div class="fp-btn-bell"></div>
            </div>
        `;
        document.body.appendChild(btn);

        // 3. Create Modal Structure
        const modal = document.createElement('div');
        modal.className = 'fp-modal';
        modal.id = 'floatingPocketModal';
        modal.innerHTML = `
            <div class="fp-content">
                <div class="fp-header">
                    <div class="fp-title">
                        <svg width="24" height="24" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" style="margin-right:8px;">
                            <ellipse cx="100" cy="155" rx="65" ry="60" fill="#00AEEF"/>
                            <ellipse cx="100" cy="165" rx="40" ry="40" fill="#FFFFFF"/>
                            <path d="M 68 158 A 32 32 0 0 0 132 158 Z" fill="#FFFFFF" stroke="#1A2A3A" stroke-width="2.5"/>
                            <circle cx="100" cy="80" r="10" fill="#FFC107"/>
                        </svg>
                        4D Pocket Inventory
                    </div>
                    <button class="fp-close" id="floatingPocketCloseBtn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="fp-body-layout">
                    <div class="fp-grid" id="floatingPocketGrid">
                        <!-- Populated by JS -->
                    </div>
                    <div class="fp-detail-panel" id="floatingPocketDetail">
                        <!-- Populated by JS -->
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // 4. Create Visual Effects Canvas Overlay
        const screenFx = document.createElement('div');
        screenFx.className = 'fp-screen-fx';
        screenFx.id = 'floatingPocketScreenFx';
        document.body.appendChild(screenFx);

        // 5. Create Time Furoshiki filter
        const rewindFilter = document.createElement('div');
        rewindFilter.className = 'fp-rewind-filter';
        rewindFilter.id = 'floatingPocketRewindFilter';
        document.body.appendChild(rewindFilter);

        // 6. Create Memory Bread learning popup
        const mbPopup = document.createElement('div');
        mbPopup.className = 'mb-popup-overlay';
        mbPopup.id = 'memoryBreadPopup';
        mbPopup.innerHTML = `
            <div class="mb-card" id="memoryBreadCard">
                <!-- Built dynamically by showMemoryBreadPopup() -->
            </div>
        `;
        document.body.appendChild(mbPopup);

        // 7. Create Time TV dashboard popup
        const ttvPopup = document.createElement('div');
        ttvPopup.className = 'ttv-overlay';
        ttvPopup.id = 'timeTvPopup';
        ttvPopup.innerHTML = `
            <div class="ttv-card" id="timeTvCard">
                <!-- Built dynamically by showTimeTvDashboard() -->
            </div>
        `;
        document.body.appendChild(ttvPopup);

        // 8. Create Bamboo Copter flowchart popup
        const bcPopup = document.createElement('div');
        bcPopup.className = 'bc-popup-overlay';
        bcPopup.id = 'bambooCopterPopup';
        bcPopup.innerHTML = `
            <div class="bc-card" id="bambooCopterCard">
                <!-- Built dynamically by showBambooCopterPopup() -->
            </div>
        `;
        document.body.appendChild(bcPopup);
    }

    // ===== STATE & COOLDOWNS CONTROLLER =====
    let activeInterval = null;

    function startCooldownTimer() {
        if (activeInterval) clearInterval(activeInterval);
        activeInterval = setInterval(() => {
            let changes = false;
            const now = Date.now();
            
            GADGETS.forEach(g => {
                const cdTime = pocketState.cooldowns[g.id] || 0;
                if (cdTime > 0 && cdTime <= now) {
                    pocketState.cooldowns[g.id] = 0;
                    changes = true;
                }
            });

            if (changes) {
                savePocketState();
            }
            
            // If modal is open, rebuild the detail panel to update timer text
            const modal = document.getElementById('floatingPocketModal');
            if (modal && modal.classList.contains('visible')) {
                updateDetailPanelDisplay();
            }
        }, 1000);
    }

    // ===== MAIN INVENTORY BUILDER =====
    let selectedGadgetId = 10; // Default selection

    function rebuildInventoryGrid() {
        const grid = document.getElementById('floatingPocketGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        // Load actual level progress array to know what gadgets are unlocked
        let currentCompleted = 0;
        try {
            const rawProgress = localStorage.getItem("pybe_progress_v1");
            if (rawProgress) {
                const progressObj = JSON.parse(rawProgress);
                currentCompleted = (progressObj.completed && progressObj.completed.length) || 0;
            }
        } catch(e) {}

        GADGETS.forEach(g => {
            const slot = document.createElement('div');
            slot.className = 'fp-slot';
            
            const isUnlocked = currentCompleted >= g.milestone;
            
            if (isUnlocked) {
                slot.classList.add('unlocked');
                slot.innerHTML = `
                    <div class="fp-slot-icon">${g.icon}</div>
                    <div class="fp-slot-name">${g.name}</div>
                `;
                slot.onclick = () => {
                    playPocketSynth('click');
                    selectedGadgetId = g.id;
                    rebuildInventoryGrid(); // redraw to set selected border
                };
            } else {
                slot.classList.add('locked');
                slot.innerHTML = `
                    <div class="fp-slot-icon" style="position:relative; opacity: 0.6;">
                        ${g.icon}
                        <i class="fas fa-lock" style="position:absolute; bottom:-4px; right:-4px; font-size:12px; color:#ef5350; background:#111; border-radius:50%; padding:2px; box-shadow:0 0 5px rgba(0,0,0,0.5);"></i>
                    </div>
                    <div class="fp-slot-name" style="opacity:0.6;">${g.name}</div>
                    <div style="font-size: 10px; color: #ef5350; font-weight: 700; margin-top: 2px;">Lvl ${g.milestone}</div>
                `;
                slot.onclick = () => {
                    playPocketSynth('error');
                    selectedGadgetId = g.id;
                    rebuildInventoryGrid(); // redraw to set selected border
                };
            }

            if (g.id === selectedGadgetId) {
                slot.classList.add('selected');
            }

            grid.appendChild(slot);
        });

        updateDetailPanelDisplay();
    }

    function updateDetailPanelDisplay() {
        const detail = document.getElementById('floatingPocketDetail');
        if (!detail) return;

        const gadget = GADGETS.find(g => g.id === selectedGadgetId);
        if (!gadget) return;

        // Load actual level progress array to know what gadgets are unlocked
        let currentCompleted = 0;
        try {
            const rawProgress = localStorage.getItem("pybe_progress_v1");
            if (rawProgress) {
                const progressObj = JSON.parse(rawProgress);
                currentCompleted = (progressObj.completed && progressObj.completed.length) || 0;
            }
        } catch(e) {}

        const isUnlocked = currentCompleted >= gadget.milestone;
        const usesLeft = pocketState.uses[gadget.id];
        const cdTimestamp = pocketState.cooldowns[gadget.id] || 0;
        const now = Date.now();
        const isOnCooldown = cdTimestamp > now;
        const cdSecondsLeft = isOnCooldown ? Math.ceil((cdTimestamp - now) / 1000) : 0;
        const hasUses = usesLeft > 0;

        let statusHTML = '';
        let btnDisabled = true;
        let btnText = 'Activate';

        if (!isUnlocked) {
            statusHTML = `<span class="fp-detail-status locked"><i class="fas fa-lock"></i> Locked</span>`;
            btnText = 'Locked';
            btnDisabled = true;
        } else if (isOnCooldown) {
            statusHTML = `<span class="fp-detail-status locked"><i class="fas fa-history"></i> Cooldown</span>`;
            btnText = `Cooldown (${cdSecondsLeft}s)`;
            btnDisabled = true;
        } else if (!hasUses) {
            statusHTML = `<span class="fp-detail-status locked"><i class="fas fa-ban"></i> Out of Uses</span>`;
            btnText = 'No Uses Left';
            btnDisabled = true;
        } else {
            statusHTML = `<span class="fp-detail-status unlocked"><i class="fas fa-check-circle"></i> Ready</span>`;
            btnText = 'Activate';
            btnDisabled = false;
        }

        const usesDisplay = gadget.maxUses === 999 ? "∞" : `${usesLeft} / ${gadget.maxUses}`;

        detail.innerHTML = `
            <div class="fp-detail-header">
                <div class="fp-detail-large-icon" style="position:relative;">
                    ${gadget.icon}
                    ${isUnlocked ? '' : '<i class="fas fa-lock" style="position:absolute; bottom:0; right:0; font-size:16px; color:#ef5350; background:#1e1e1e; border-radius:50%; padding:4px;"></i>'}
                </div>
                <div class="fp-detail-title-block">
                    <div class="fp-detail-name">${gadget.name}</div>
                    ${statusHTML}
                </div>
            </div>
            <div class="fp-detail-desc">
                ${isUnlocked ? gadget.desc : `🔒 <strong>This gadget is locked!</strong> Complete and clear up to <strong>Level ${gadget.milestone}</strong> to unlock the ${gadget.name} and add it to your active 4D pocket inventory.`}
            </div>
            <div class="fp-detail-stats">
                <div class="fp-stat-box">
                    <div class="fp-stat-lbl">Remaining Uses</div>
                    <div class="fp-stat-val">${isUnlocked ? usesDisplay : "—"}</div>
                </div>
                <div class="fp-stat-box">
                    <div class="fp-stat-lbl">Cooldown</div>
                    <div class="fp-stat-val">${gadget.cooldown}s</div>
                </div>
            </div>
            <button class="fp-activate-btn" id="fpActivateBtn" ${btnDisabled ? "disabled" : ""}>
                ${btnText}
            </button>
        `;

        if (!btnDisabled) {
            document.getElementById('fpActivateBtn').onclick = () => {
                triggerGadgetActivation(gadget);
            };
        }
    }

    // ===== GADGET ACTIVATION & SCREEN FX ENGINE =====
    function triggerGadgetActivation(gadget) {
        // 1. Close Modal
        closePocketModal();

        // 2. Play Audio Sound
        let synthType = 'click';
        if (gadget.id === 10) synthType = 'copter';
        else if (gadget.id === 20) synthType = 'jelly';
        else if (gadget.id === 30) synthType = 'door';
        else if (gadget.id === 40) synthType = 'flashlight';
        else if (gadget.id === 50) synthType = 'bread';
        else if (gadget.id === 25) synthType = 'bread';
        else if (gadget.id === 60) synthType = 'light';
        else if (gadget.id === 65) synthType = 'star';
        else if (gadget.id === 70) synthType = 'light_big';
        else if (gadget.id === 75) synthType = 'furoshiki';
        else if (gadget.id === 80) synthType = 'pencil';
        else if (gadget.id === 90) synthType = 'tablecloth';
        else if (gadget.id === 100) synthType = 'glove';
        playPocketSynth(synthType);

        // 3. Update state (decrement use and set cooldown)
        if (gadget.maxUses !== 999) {
            pocketState.uses[gadget.id]--;
        }
        pocketState.cooldowns[gadget.id] = Date.now() + (gadget.cooldown * 1000);
        savePocketState();

        // 4. Trigger screen visual effect
        runScreenEffect(gadget.id);
    }

    function runScreenEffect(gadgetId) {
        const overlay = document.getElementById('floatingPocketScreenFx');
        if (!overlay) return;

        overlay.innerHTML = '';
        overlay.style.display = 'block';

        if (gadgetId === 10) {
            // Bamboo Copter: clouds flying down
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const cloud = document.createElement('div');
                    cloud.className = 'fp-cloud-fx';
                    cloud.style.left = Math.random() * 90 + '%';
                    cloud.style.width = (Math.random() * 120 + 80) + 'px';
                    cloud.style.height = (Math.random() * 40 + 30) + 'px';
                    cloud.style.opacity = Math.random() * 0.4 + 0.5;
                    cloud.style.animationDuration = (Math.random() * 1 + 1.2) + 's';
                    overlay.appendChild(cloud);
                    setTimeout(() => cloud.remove(), 2000);
                }, i * 150);
            }
            setTimeout(() => { 
                overlay.style.display = 'none'; 
                showBambooCopterPopup();
            }, 1800);

        } else if (gadgetId === 20) {
            // Time Cloth: pink-red time warp filter
            const filter = document.getElementById('floatingPocketRewindFilter');
            if (filter) {
                filter.style.background = 'rgba(233, 30, 99, 0.25)'; // Pink-red cloth glow
                filter.style.transition = 'opacity 0.4s';
                filter.style.opacity = '1';
                playPocketSynth('jelly');
                setTimeout(() => {
                    filter.style.opacity = '0';
                    overlay.style.display = 'none';
                    overlay.innerHTML = '';
                    
                    const isLevelPage = window.location.pathname.includes('level.html');
                    if (isLevelPage && window.activateTimeCloth) {
                        const res = window.activateTimeCloth();
                        if (res && !res.success) {
                            showPocketToast(res.reason);
                            // Refund use
                            if (pocketState.uses[20] < 1) pocketState.uses[20]++;
                            savePocketState();
                            rebuildInventoryGrid();
                        }
                    } else {
                        showPocketToast("Open a level and activate Time Cloth to rewind a mistake! ⏳");
                        if (pocketState.uses[20] < 1) pocketState.uses[20]++;
                        savePocketState();
                        rebuildInventoryGrid();
                    }
                }, 1200);
            } else {
                overlay.style.display = 'none';
            }

        } else if (gadgetId === 30) {
            // Anywhere Door: slide-in pink doors opening
            const door = document.createElement('div');
            door.className = 'fp-door-fx';
            door.innerHTML = `<div class="fp-door-fx-inner"></div>`;
            overlay.appendChild(door);

            setTimeout(() => { door.classList.add('active'); }, 50);
            setTimeout(() => { door.classList.add('open'); }, 950);
            setTimeout(() => {
                door.classList.remove('open');
                setTimeout(() => {
                    door.classList.remove('active');
                    setTimeout(() => {
                        overlay.style.display = 'none';
                        overlay.innerHTML = '';
                    }, 500);
                }, 800);
            }, 2500);

        } else if (gadgetId === 40) {
            // Search Light: spotlight sweep effect
            const filter = document.getElementById('floatingPocketRewindFilter');
            if (filter) {
                filter.style.background = 'rgba(255, 235, 59, 0.15)'; // Yellow tint
                filter.style.transition = 'opacity 0.3s';
                filter.style.opacity = '1';
                playPocketSynth('flashlight');
                setTimeout(() => {
                    filter.style.opacity = '0';
                    overlay.style.display = 'none';
                    overlay.innerHTML = '';
                    
                    const isLevelPage = window.location.pathname.includes('level.html');
                    if (isLevelPage && window.activateSearchLight) {
                        const res = window.activateSearchLight();
                        if (res && !res.success) {
                            showPocketToast(res.reason);
                            if (pocketState.uses[40] < 3) pocketState.uses[40]++;
                            savePocketState();
                            rebuildInventoryGrid();
                        } else {
                            if (window.unlockAchievement) window.unlockAchievement('bug_hunter');
                        }
                    } else {
                        showPocketToast("Open a level and activate Search Light to scan your editor! 🔦");
                        if (pocketState.uses[40] < 3) pocketState.uses[40]++;
                        savePocketState();
                        rebuildInventoryGrid();
                    }
                }, 1000);
            } else {
                overlay.style.display = 'none';
            }

        } else if (gadgetId === 25) {
            // Translation Jelly: matrix falls
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const col = document.createElement('div');
                    col.className = 'fp-jelly-column';
                    col.style.left = Math.random() * 98 + '%';
                    let text = '';
                    const chars = 'TranslateJelly翻訳जेलीHinglish';
                    for (let j = 0; j < 12; j++) {
                        text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
                    }
                    col.innerHTML = text;
                    col.style.animationDuration = (Math.random() * 1.0 + 1.2) + 's';
                    overlay.appendChild(col);
                    setTimeout(() => col.remove(), 2000);
                }, i * 60);
            }

            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.innerHTML = '';
                
                const isLevelPage = window.location.pathname.includes('level.html');
                if (isLevelPage && window.activateTranslationJelly) {
                    const res = window.activateTranslationJelly();
                    if (res && !res.success) {
                        showPocketToast(res.reason);
                        if (pocketState.uses[25] < 5) pocketState.uses[25]++;
                        savePocketState();
                        rebuildInventoryGrid();
                    } else {
                        if (window.unlockAchievement) window.unlockAchievement('polyglot');
                    }
                } else {
                    showPocketToast("Open a level and activate Translation Jelly to translate the lesson! 🍮");
                    if (pocketState.uses[25] < 5) pocketState.uses[25]++;
                    savePocketState();
                    rebuildInventoryGrid();
                }
            }, 1800);

        } else if (gadgetId === 50) {
            // Memory Bread: float in holographic bread slices
            for (let i = 0; i < 4; i++) {
                setTimeout(() => {
                    const bread = document.createElement('div');
                    bread.className = 'fp-sweet';
                    bread.innerHTML = '🍞';
                    bread.style.left = (Math.random() * 80 + 10) + '%';
                    bread.style.top = (Math.random() * 40 + 20) + '%';
                    bread.style.animation = 'iconPop 1.5s alternate infinite ease-in-out';
                    bread.style.fontSize = '80px';
                    bread.style.opacity = '0';
                    bread.style.transition = 'opacity 0.5s';
                    overlay.appendChild(bread);
                    setTimeout(() => { bread.style.opacity = '0.85'; }, 50);
                    setTimeout(() => {
                        bread.style.opacity = '0';
                        setTimeout(() => bread.remove(), 600);
                    }, 1500);
                }, i * 200);
            }

            const isLevelPage = window.location.pathname.includes('level.html');
            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.innerHTML = '';
                
                if (isLevelPage && window.levels) {
                    const params = new URLSearchParams(window.location.search);
                    const levelId = parseInt(params.get('id')) || 1;
                    const levelObj = window.levels[levelId - 1];
                    if (levelObj) {
                        showMemoryBreadPopup(levelObj);
                    }
                } else {
                    showPocketToast("Enter any Python level and activate Memory Bread to memorize its syntax! 🍞");
                }
            }, 1800);

        } else if (gadgetId === 60) {
            // Small Light: shrinks page font sizes temporarily
            document.body.style.transition = 'transform 0.8s ease-in-out';
            document.body.style.transformOrigin = 'center top';
            document.body.style.transform = 'scale(0.88)';
            
            // Inject a quick flash overlay
            const flash = document.createElement('div');
            flash.style.cssText = 'position:fixed; inset:0; background:rgba(0, 255, 128, 0.45); z-index:99999999; pointer-events:none; opacity:1; transition:opacity 0.6s;';
            document.body.appendChild(flash);
            setTimeout(() => { flash.style.opacity = '0'; setTimeout(() => flash.remove(), 600); }, 200);

            setTimeout(() => {
                document.body.style.transform = '';
                overlay.style.display = 'none';
            }, 6000);

        } else if (gadgetId === 65) {
            // Lucky Star: Sparkles visual chime and restores streak
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const star = document.createElement('div');
                    star.className = 'fp-sweet';
                    star.innerHTML = '⭐';
                    star.style.left = (Math.random() * 95) + '%';
                    star.style.top = '100vh';
                    star.style.fontSize = (Math.random() * 20 + 20) + 'px';
                    star.style.position = 'absolute';
                    star.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    star.style.textShadow = '0 0 10px #ffeb3b';
                    overlay.appendChild(star);
                    
                    setTimeout(() => {
                        star.style.transform = `translateY(-110vh) rotate(${Math.random() * 720}deg)`;
                        star.style.opacity = '0';
                    }, 50);
                    
                    setTimeout(() => star.remove(), 1600);
                }, i * 80);
            }

            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.innerHTML = '';
                
                try {
                    const progressKey = 'pybe_progress';
                    const progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
                    
                    const prevStreak = progress.prevStreak || 0;
                    if (prevStreak > progress.streak) {
                        const restoredVal = prevStreak;
                        progress.streak = restoredVal;
                        progress.prevStreak = 0;
                        localStorage.setItem(progressKey, JSON.stringify(progress));
                        
                        const navStreak = document.getElementById('navStreak');
                        const navStreakText = document.getElementById('navStreakText');
                        if (navStreak && navStreakText) {
                            navStreak.style.display = 'flex';
                            navStreakText.textContent = `${restoredVal} day streak`;
                        }
                        
                        showPocketToast(`✨ Lucky Star Restored Streak to ${restoredVal} Days! 🔥`);
                        launchConfetti();
                    } else {
                        progress.streak = (progress.streak || 0) + 1;
                        localStorage.setItem(progressKey, JSON.stringify(progress));
                        
                        const navStreak = document.getElementById('navStreak');
                        const navStreakText = document.getElementById('navStreakText');
                        if (navStreak && navStreakText) {
                            navStreak.style.display = 'flex';
                            navStreakText.textContent = `${progress.streak} day streak`;
                        }
                        
                        showPocketToast(`✨ Streak Boosted by 1 Day! Current Streak: ${progress.streak} Days! ⭐`);
                        launchConfetti();
                    }
                } catch(e) {
                    console.error("Error restoring streak", e);
                    showPocketToast("✨ Lucky Star activated!");
                }
            }, 2000);

        } else if (gadgetId === 70) {
            // Big Light: enlarges page font sizes temporarily
            document.body.style.transition = 'transform 0.8s ease-in-out';
            document.body.style.transformOrigin = 'center top';
            document.body.style.transform = 'scale(1.08)';
            
            // Inject a quick flash overlay
            const flash = document.createElement('div');
            flash.style.cssText = 'position:fixed; inset:0; background:rgba(255, 64, 64, 0.45); z-index:99999999; pointer-events:none; opacity:1; transition:opacity 0.6s;';
            document.body.appendChild(flash);
            setTimeout(() => { flash.style.opacity = '0'; setTimeout(() => flash.remove(), 600); }, 200);

            setTimeout(() => {
                document.body.style.transform = '';
                overlay.style.display = 'none';
            }, 6000);

        } else if (gadgetId === 75) {
            // Time TV: TV screen scan filter
            const flash = document.createElement('div');
            flash.style.cssText = 'position:fixed; inset:0; background:rgba(0, 255, 100, 0.3); z-index:99999999; pointer-events:none; opacity:1; transition:opacity 0.5s;';
            document.body.appendChild(flash);
            setTimeout(() => { flash.style.opacity = '0'; setTimeout(() => flash.remove(), 500); }, 150);

            setTimeout(() => {
                overlay.style.display = 'none';
                if (window.activateTimeTv) {
                    window.activateTimeTv();
                    if (window.unlockAchievement) window.unlockAchievement('historian');
                } else {
                    showPocketToast("Open Time TV in the Floating Pocket! 📺");
                }
            }, 500);

        } else if (gadgetId === 80) {
            // Computer Pencil: draw glowing canvas lines
            const canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.cssText = 'position:absolute; inset:0; z-index:10000; pointer-events:none;';
            overlay.appendChild(canvas);

            const ctx = canvas.getContext('2d');
            ctx.strokeStyle = '#00AEEF';
            ctx.lineWidth = 4;
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#00E5FF';

            let progress = 0;
            const points = [
                {x: 100, y: 150},
                {x: window.innerWidth - 150, y: 250},
                {x: 200, y: window.innerHeight - 200},
                {x: window.innerWidth - 200, y: window.innerHeight - 150}
            ];

            function draw() {
                if (progress >= 1) return;
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) {
                    const prev = points[i-1];
                    const curr = points[i];
                    if (progress * (points.length - 1) >= i) {
                        ctx.lineTo(curr.x, curr.y);
                    } else if (progress * (points.length - 1) > i - 1) {
                        const subProg = (progress * (points.length - 1)) - (i - 1);
                        ctx.lineTo(prev.x + (curr.x - prev.x) * subProg, prev.y + (curr.y - prev.y) * subProg);
                    }
                }
                ctx.stroke();
                progress += 0.015;
                requestAnimationFrame(draw);
            }
            draw();

            setTimeout(() => {
                canvas.style.transition = 'opacity 0.6s';
                canvas.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    overlay.innerHTML = '';
                }, 600);
            }, 3000);

        } else if (gadgetId === 85) {
            // Energy Capsule: capsule splash particles
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const cap = document.createElement('div');
                    cap.className = 'fp-sweet';
                    cap.innerHTML = '💊';
                    cap.style.left = (Math.random() * 95) + '%';
                    cap.style.top = '100vh';
                    cap.style.fontSize = '30px';
                    cap.style.position = 'absolute';
                    cap.style.transition = 'all 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    overlay.appendChild(cap);
                    
                    setTimeout(() => {
                        cap.style.transform = `translateY(-110vh) scale(0.6) rotate(${Math.random() * 360}deg)`;
                        cap.style.opacity = '0';
                    }, 50);
                    
                    setTimeout(() => cap.remove(), 1500);
                }, i * 70);
            }

            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.innerHTML = '';
                
                const isLevelPage = window.location.pathname.includes('level.html');
                const codingSection = document.getElementById('codeEditor');
                
                if (isLevelPage && codingSection && window.activateEnergyCapsule) {
                    const res = window.activateEnergyCapsule();
                    if (res && !res.success) {
                        showPocketToast(res.reason);
                        if (pocketState.uses[85] < 3) pocketState.uses[85]++;
                        savePocketState();
                        rebuildInventoryGrid();
                    }
                } else {
                    showPocketToast("Enter a coding round to consume the Energy Capsule! 💊");
                    if (pocketState.uses[85] < 3) pocketState.uses[85]++;
                    savePocketState();
                    rebuildInventoryGrid();
                }
            }, 1600);

        } else if (gadgetId === 90) {
            // Gourmet Tablecloth: falling sweets emojis
            const sweetsList = ['🍰', '🍩', '🍪', '🍬', '🍦', '🥞', '🍕', '🍇', '🧁'];
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const sweet = document.createElement('div');
                    sweet.className = 'fp-sweet';
                    sweet.innerHTML = sweetsList[Math.floor(Math.random() * sweetsList.length)];
                    sweet.style.left = Math.random() * 95 + '%';
                    sweet.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
                    overlay.appendChild(sweet);
                    setTimeout(() => sweet.remove(), 3200);
                }, i * 120);
            }
            setTimeout(() => { overlay.style.display = 'none'; }, 4000);

        } else if (gadgetId === 100) {
            // Super Glove: bug punch!
            // Spawn 5 cartoon bug emojis on the screen
            const bugList = ['🐛', '🐜', '🕷️', '🦗', '🦟'];
            const activeBugs = [];
            for (let i = 0; i < 6; i++) {
                const bug = document.createElement('div');
                bug.className = 'fp-bug-strike';
                bug.innerHTML = bugList[Math.floor(Math.random() * bugList.length)];
                bug.style.left = (Math.random() * 70 + 15) + '%';
                bug.style.top = (Math.random() * 50 + 20) + '%';
                bug.style.fontSize = '40px';
                overlay.appendChild(bug);
                activeBugs.push(bug);
            }

            // Punch glove strikes!
            setTimeout(() => {
                const punch = document.createElement('div');
                punch.className = 'fp-punch-fx';
                punch.innerHTML = '🥊';
                overlay.appendChild(punch);

                setTimeout(() => { punch.classList.add('strike'); }, 50);

                // Screen shake and bug squash
                setTimeout(() => {
                    document.body.style.animation = 'cardShake 0.4s ease';
                    activeBugs.forEach(b => {
                        b.style.transform = 'scale(0.1) rotate(180deg)';
                        b.style.opacity = '0';
                        setTimeout(() => b.remove(), 500);
                    });
                }, 300);

                setTimeout(() => {
                    document.body.style.animation = '';
                    punch.style.transition = 'opacity 0.5s';
                    punch.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                        overlay.innerHTML = '';
                    }, 500);
                }, 1500);
            }, 800);
        }
    }

    // ===== MEMORY BREAD LEARNING ENGINE =====
    function showPocketToast(msg) {
        const existing = document.getElementById('fp-toast');
        if (existing) existing.remove();
        const toast = document.createElement('div');
        toast.id = 'fp-toast';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #8d6e63;
            color: white;
            padding: 12px 28px;
            border-radius: 50px;
            font-family: 'Nunito', sans-serif;
            font-size: 14.5px;
            font-weight: 700;
            z-index: 100000005;
            box-shadow: 0 4px 16px rgba(141,110,99,0.4);
            animation: toastIn 0.3s ease, toastOut 0.3s ease 2.7s forwards;
        `;
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function generateMemoryBreadContent(level) {
        if (!level) return null;
        
        const title = level.title || "Unknown Topic";
        const concept = level.concept || "General Python Logic";
        
        let revisionNotes = [
            `Study the core topic: "${title}".`,
            `Master the concepts described in: ${concept}.`,
            `Complete the Q&A section and review errors to consolidate learning.`
        ];
        
        let syntax = `# Sample syntax for ${title}\nprint("Mastering Python step by step!")`;
        
        let interviewQs = [
            { q: `What is the core idea of ${title}?`, a: `It covers: ${concept}.` },
            { q: `How do you write correct code for this level?`, a: `Ensure there are no SyntaxErrors and verify variable names.` }
        ];
        
        let commonMistakes = [
            `Forgetting Python is case-sensitive (e.g. print vs Print).`,
            `Breaking string quotes delimiters.`
        ];

        // Level-specific details
        if (level.id === 1) {
            revisionNotes = [
                "Programming is about giving computers step-by-step instructions to follow.",
                "Python is designed for high readability, simple syntax, and rapid testing.",
                "Syntax refers to the exact grammar rules. Breaking syntax stops execution immediately with a SyntaxError."
            ];
            syntax = `# Valid print statements in Python 3\nprint("Hello, Doraemon!")\nprint('Python is fun')\n\n# Make sure matching quotes (double or single) are balanced!`;
            interviewQs = [
                { q: "Why is Python recommended for absolute beginners?", a: "Because it reads almost like plain English. It removes boilerplate overhead, allowing you to focus on logic first." },
                { q: "What is the difference between code and a program?", a: "Code is a single command or block of instructions. A program is a complete, runnable set of code designed to achieve a task." }
            ];
            commonMistakes = [
                `Writing print without parentheses: print "Hello" (invalid in Python 3).`,
                `Mismatched quotes: print('Hello").`,
                `Case sensitivity errors: Print("Hello") with capital 'P'.`
            ];
        } else if (level.id === 2) {
            revisionNotes = [
                "Python is interpreted: code is read, translated, and run one line at a time.",
                "Compilation translates source code all at once into machine binary before run; interpretation translates at runtime.",
                "Python compiler converts source to bytecode; the Python Virtual Machine (PVM) interprets bytecode."
            ];
            syntax = `# Code is interpreted line by line\nname = "Nobita"\nprint("Current player:", name)\n# If name wasn't defined, it triggers a NameError at runtime.`;
            interviewQs = [
                { q: "What is the role of the Python Virtual Machine (PVM)?", a: "The PVM is the runtime interpreter that executes the platform-independent compiled bytecode instructions." },
                { q: "Why is an interpreted language slower than a compiled one?", a: "Because the compiled language executes raw machine code directly on the CPU, while interpreted code has runtime translation overhead." }
            ];
            commonMistakes = [
                `Assuming errors are caught before runtime. Python runs lines up until the error, then terminates.`,
                `Forgetting that Python bytecode is cross-platform; the same PVM interpreter runs it on Windows, Mac, or Linux.`
            ];
        } else if (level.id === 3) {
            revisionNotes = [
                "A SyntaxError happens during grammar check. A NameError or TypeError happens at runtime.",
                "A Logic Error means your code executes cleanly but yields the incorrect output. They are the hardest to debug.",
                "Web application architecture separates the Frontend (visual layout) from the Backend (servers/databases)."
            ];
            syntax = `# TypeError: cannot add string to integer\n# print("Level: " + 3) # Fails!\n\n# Correct syntax:\nprint("Level: " + str(3)) # Output: Level: 3`;
            interviewQs = [
                { q: "What is a Logic Error and why won't Python show an error message?", a: "It is an error in program flow/design. Since the syntax and data types are valid, the compiler has no reason to crash. It just does the wrong math/logic." },
                { q: "What languages are used for frontend vs backend web development?", a: "Frontend: HTML, CSS, JavaScript. Backend: Python (Django/Flask), Node.js, Java, Go." }
            ];
            commonMistakes = [
                `Attempting to merge strings and numbers using '+' without casting/converting first.`,
                `Expecting Python's compiler to spot logic issues (like writing '*' instead of '+').`
            ];
        } else if (level.id === 4) {
            revisionNotes = [
                "Python was created by Guido van Rossum in 1991 at CERN in Amsterdam.",
                "The name comes from Monty Python's Flying Circus (Guido's favorite comedy show).",
                "Guido was BDFL (Benevolent Dictator for Life) for 27 years. The Python Steering Council now governs development."
            ];
            syntax = `# The Zen of Python principles:\nimport this\n\n# Readability counts.\n# Simple is better than complex.`;
            interviewQs = [
                { q: "What is the BDFL in open-source language development?", a: "Benevolent Dictator For Life, the final decision-maker for design disputes. Guido held this title for Python until 2018." },
                { q: "Why was Python 2 retired in 2020?", a: "To consolidate development into Python 3, which handles unicode strings better and resolved initial design inconsistencies." }
            ];
            commonMistakes = [
                `Confusing the language naming origin with the snake reptile.`,
                `Continuing to write deprecated Python 2 rules in Python 3 code.`
            ];
        } else {
            if (level.qna && level.qna.length > 0) {
                interviewQs = level.qna.slice(0, 3).map(item => ({ q: item.q, a: item.a }));
            }
            if (level.concept) {
                revisionNotes = [
                    `Master level topic: "${title}".`,
                    `Focus concept: ${concept}.`,
                    `Identify core Q&As, handle arguments, and avoid logic errors.`
                ];
            }
        }

        return { title, revisionNotes, syntax, interviewQs, commonMistakes };
    }

    function showMemoryBreadPopup(level) {
        const data = generateMemoryBreadContent(level);
        if (!data) return;

        const card = document.getElementById('memoryBreadCard');
        const overlay = document.getElementById('memoryBreadPopup');
        if (!card || !overlay) return;

        // Render Tabs and content pane shells
        card.innerHTML = `
            <div class="mb-header">
                <div class="mb-header-title-block">
                    <div class="mb-header-title">🍞 Memory Bread Memorizer</div>
                    <div class="mb-header-sub">Level ${level.id} — ${data.title}</div>
                </div>
                <button class="mb-close-btn" id="mbCloseBtn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="mb-tabs">
                <button class="mb-tab-btn active" data-tab="notes">
                    <i class="fas fa-book-open"></i> Notes
                </button>
                <button class="mb-tab-btn" data-tab="syntax">
                    <i class="fas fa-code"></i> Syntax
                </button>
                <button class="mb-tab-btn" data-tab="interview">
                    <i class="fas fa-comments"></i> Interview Qs
                </button>
                <button class="mb-tab-btn" data-tab="mistakes">
                    <i class="fas fa-exclamation-triangle"></i> Mistakes
                </button>
            </div>

            <div class="mb-content-body">
                <!-- Notes Tab -->
                <div class="mb-content-pane active" id="mbPane-notes">
                    <ul class="mb-list">
                        ${data.revisionNotes.map(n => `<li class="mb-item">${n}</li>`).join('')}
                    </ul>
                </div>

                <!-- Syntax Tab -->
                <div class="mb-content-pane" id="mbPane-syntax">
                    <pre class="mb-code-block">${data.syntax}</pre>
                </div>

                <!-- Interview Tab -->
                <div class="mb-content-pane" id="mbPane-interview">
                    ${data.interviewQs.map(q => `
                        <div class="mb-qa-card">
                            <div class="mb-qa-q"><span class="mb-qa-q-badge">Q</span> ${q.q}</div>
                            <div class="mb-qa-a">${q.a}</div>
                        </div>
                    `).join('')}
                </div>

                <!-- Mistakes Tab -->
                <div class="mb-content-pane" id="mbPane-mistakes">
                    <ul class="mb-list">
                        ${data.commonMistakes.map(m => `<li class="mb-item mistake">${m}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        // Bind tab button click events
        const tabBtns = card.querySelectorAll('.mb-tab-btn');
        const tabPanes = card.querySelectorAll('.mb-content-pane');

        tabBtns.forEach(btn => {
            btn.onclick = () => {
                playPocketSynth('click');
                const targetTab = btn.getAttribute('data-tab');

                // Toggle buttons active class
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Toggle panes active class
                tabPanes.forEach(pane => pane.classList.remove('active'));
                card.querySelector(`#mbPane-${targetTab}`).classList.add('active');
            };
        });

        // Bind close button
        document.getElementById('mbCloseBtn').onclick = closeMemoryBreadPopup;

        // Display overlay
        overlay.classList.add('visible');

        // Close when clicking outside of card
        overlay.onclick = (e) => {
            if (e.target === overlay) closeMemoryBreadPopup();
        };
    }

    function closeMemoryBreadPopup() {
        playPocketSynth('click');
        const overlay = document.getElementById('memoryBreadPopup');
        if (overlay) {
            overlay.classList.remove('visible');
        }
    }

    // ===== TIME TV TEMPORAL DASHBOARD CONTROLLER =====
    function getHistoricalAttempts() {
        let history = localStorage.getItem('pybe_time_tv_history');
        if (history) {
            try {
                return JSON.parse(history);
            } catch (e) {}
        }
        
        const seed = [
            {
                levelId: 1,
                title: "What is Programming?",
                attemptsCount: 2,
                accuracy: 75,
                incorrectAnswers: ["Variables are always integers", "A compiled program translates line-by-line"],
                codeSubmission: `print("I love Python!")`,
                strengths: ["Syntax Basics", "Print Statements"],
                weaknesses: ["Compiler vs Interpreter"]
            },
            {
                levelId: 2,
                title: "Python Interpreter",
                attemptsCount: 1,
                accuracy: 100,
                incorrectAnswers: [],
                codeSubmission: `jelly = "Translation Jelly"\nprint(type(jelly))`,
                strengths: ["Runtime Engines", "Interpretation Rules"],
                weaknesses: []
            },
            {
                levelId: 3,
                title: "Error Handling & Frontend Basics",
                attemptsCount: 3,
                accuracy: 66,
                incorrectAnswers: ["SyntaxError is raised during math operations", "Javascript runs on the server side"],
                codeSubmission: `string_value = str(100)\nprint(string_value)`,
                strengths: ["Type Casting"],
                weaknesses: ["Error Categorizations"]
            },
            {
                levelId: 4,
                title: "Declaring Variables",
                attemptsCount: 1,
                accuracy: 100,
                incorrectAnswers: [],
                codeSubmission: `dorayaki_count = 5\nprint(dorayaki_count)`,
                strengths: ["Variable Assignment"],
                weaknesses: []
            },
            {
                levelId: 10,
                title: "Variables Naming Rules",
                attemptsCount: 2,
                accuracy: 80,
                incorrectAnswers: ["my-variable = 10 is correct", "Keywords can be used as variables"],
                codeSubmission: `user_age_limit = 18\nprint(user_age_limit)`,
                strengths: ["PEP 8 Conventions", "snake_case styling"],
                weaknesses: ["Reserved Keyword constraints"]
            }
        ];
        
        localStorage.setItem('pybe_time_tv_history', JSON.stringify(seed));
        return seed;
    }

    function showTimeTvDashboard() {
        const overlay = document.getElementById('timeTvPopup');
        const card = document.getElementById('timeTvCard');
        if (!overlay || !card) return;

        const history = getHistoricalAttempts();
        
        let totalAccuracy = 0;
        let count = 0;
        let strengths = {};
        let weaknesses = {};

        history.forEach(h => {
            totalAccuracy += h.accuracy;
            count++;
            
            h.strengths.forEach(s => { strengths[s] = (strengths[s] || 0) + 1; });
            h.weaknesses.forEach(w => { weaknesses[w] = (weaknesses[w] || 0) + 1; });
        });

        const avgAccuracy = count > 0 ? Math.round(totalAccuracy / count) : 0;
        
        let streakCount = 1;
        try {
            const progress = JSON.parse(localStorage.getItem('pybe_progress') || '{}');
            streakCount = progress.streak || 1;
        } catch(e) {}

        const plotData = history.slice(-8);
        let pathD = "M 50,170";
        let pointsHtml = "";
        plotData.forEach((h, idx) => {
            const x = 50 + (idx * 50);
            const y = 170 - (h.accuracy * 1.5); 
            if (idx === 0) pathD = `M ${x},${y}`;
            else pathD += ` L ${x},${y}`;
            pointsHtml += `
                <circle cx="${x}" cy="${y}" r="6" fill="#00ff66" style="cursor:pointer; filter: drop-shadow(0 0 3px #00ff66);">
                    <title>${h.title}: ${h.accuracy}% Accuracy</title>
                </circle>
            `;
        });

        card.innerHTML = `
            <div class="ttv-screen">
                <div class="ttv-header">
                    <div class="ttv-title">📺 Time TV Temporal Dashboard</div>
                    <button class="ttv-close" id="ttvCloseBtn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="ttv-grid">
                    <div style="display:flex; flex-direction:column; gap:16px;">
                        <div class="ttv-panel">
                            <div class="ttv-panel-title">📈 Learning Progress Graph</div>
                            <svg viewBox="0 0 450 180" style="width:100%; height:130px; overflow:visible;">
                                <line x1="50" y1="20" x2="400" y2="20" stroke="rgba(0, 255, 100, 0.15)" stroke-dasharray="4"/>
                                <line x1="50" y1="95" x2="400" y2="95" stroke="rgba(0, 255, 100, 0.15)" stroke-dasharray="4"/>
                                <line x1="50" y1="170" x2="400" y2="170" stroke="rgba(0, 255, 100, 0.3)" stroke-width="2"/>
                                
                                <text x="10" y="25" fill="#00ff66" font-size="10">100%</text>
                                <text x="15" y="100" fill="#00ff66" font-size="10">50%</text>
                                <text x="20" y="175" fill="#00ff66" font-size="10">0%</text>

                                ${plotData.length > 0 ? `<path d="${pathD}" fill="none" stroke="#00ff66" stroke-width="3" stroke-linecap="round" style="filter: drop-shadow(0 0 4px rgba(0,255,100,0.5));"/>` : ''}
                                ${pointsHtml}
                            </svg>
                        </div>

                        <div class="ttv-panel">
                            <div class="ttv-panel-title">📊 Topic-Wise SWOT Analysis</div>
                            <div class="ttv-grid" style="grid-template-columns: 1fr 1fr; gap:10px;">
                                <div>
                                    <div style="font-size:12px; font-weight:800; color:#4caf50; margin-bottom:6px;">💪 Strengths</div>
                                    <div class="ttv-sw-list">
                                        ${Object.keys(strengths).length > 0 
                                            ? Object.keys(strengths).map(s => `<div class="ttv-sw-item strong">${s}</div>`).join('')
                                            : `<div style="font-size:12px; color:#aaa;">Clear levels to identify strengths!</div>`
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div style="font-size:12px; font-weight:800; color:#ef5350; margin-bottom:6px;">⚠️ Weaknesses</div>
                                    <div class="ttv-sw-list">
                                        ${Object.keys(weaknesses).length > 0 
                                            ? Object.keys(weaknesses).map(w => `<div class="ttv-sw-item weak">${w}</div>`).join('')
                                            : `<div style="font-size:12px; color:#aaa;">No current weaknesses found!</div>`
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:16px;">
                        <div class="ttv-panel" style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                            <div class="ttv-radial-wrap">
                                <svg width="70" height="70" viewBox="0 0 36 36">
                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#223" stroke-width="3.5" />
                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#00ff66" stroke-width="3.5" stroke-dasharray="${avgAccuracy}, 100" style="filter: drop-shadow(0 0 2px rgba(0,255,100,0.5));" />
                                </svg>
                                <div class="ttv-stats-card">
                                    <span style="font-size:11px; text-transform:uppercase; color:#00ff66; opacity:0.8;">Accuracy</span>
                                    <span class="ttv-stat-val">${avgAccuracy}%</span>
                                </div>
                            </div>
                            <div class="ttv-radial-wrap">
                                <div style="font-size:36px;">🔥</div>
                                <div class="ttv-stats-card">
                                    <span style="font-size:11px; text-transform:uppercase; color:#00ff66; opacity:0.8;">Active Streak</span>
                                    <span class="ttv-stat-val">${streakCount} Days</span>
                                </div>
                            </div>
                        </div>

                        <div class="ttv-panel" style="flex-grow:1; display:flex; flex-direction:column;">
                            <div class="ttv-panel-title">📜 History Log & Attempts</div>
                            <div class="ttv-table-wrap">
                                <table class="ttv-table">
                                    <thead>
                                        <tr>
                                            <th>Level</th>
                                            <th>Title</th>
                                            <th>Score</th>
                                            <th>Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${history.map(h => `
                                            <tr>
                                                <td>#${h.levelId}</td>
                                                <td><strong>${h.title}</strong></td>
                                                <td style="color:${h.accuracy >= 60 ? '#00ff66' : '#ef5350'}">${h.accuracy}%</td>
                                                <td>
                                                    ${h.codeSubmission 
                                                        ? `<span class="ttv-code-badge" onclick="window.showTtvCode('${h.title}', \`${h.codeSubmission.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\n/g, '\\n')}\`)">View Code</span>` 
                                                        : '<span style="color:#666;">N/A</span>'
                                                    }
                                                </td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ttv-cabinet-detail">
                <div class="ttv-knobs">
                    <div class="ttv-knob" onclick="window.playPocketSynth('click')"></div>
                    <div class="ttv-knob" onclick="window.playPocketSynth('click')"></div>
                </div>
                <div style="font-size:12px; font-weight:800; color:#5d4037;">TV-MODEL: T-1000</div>
                <div class="ttv-speaker-grille"></div>
            </div>
        `;

        document.getElementById('ttvCloseBtn').onclick = () => {
            overlay.classList.remove('visible');
        };

        overlay.classList.add('visible');
        overlay.onclick = (e) => {
            if (e.target === overlay) overlay.classList.remove('visible');
        };
    }

    window.activateTimeTv = function() {
        showTimeTvDashboard();
        return { success: true };
    };

    window.showTtvCode = function(levelTitle, codeText) {
        const codeConsole = document.createElement('div');
        codeConsole.style.cssText = `
            position: absolute;
            inset: 40px 40px;
            background: #1e1e1e;
            border: 4px solid #00ff66;
            border-radius: 20px;
            padding: 20px;
            z-index: 100000006;
            color: #d4d4d4;
            font-family: 'Fira Code', monospace;
            font-size: 13px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            box-shadow: 0 0 30px rgba(0, 255, 100, 0.4);
        `;
        
        codeConsole.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(0, 255, 100, 0.3); padding-bottom:10px;">
                <strong style="color:#00ff66;">📺 Time TV Playback — ${levelTitle}</strong>
                <button style="background:none; border:none; color:#00ff66; font-size:20px; cursor:pointer;" onclick="this.parentElement.parentElement.remove();">×</button>
            </div>
            <pre style="flex-grow:1; overflow:auto; margin:0; padding:10px; background:#111; border-radius:10px; line-height:1.5; white-space:pre-wrap;">${codeText}</pre>
        `;
        const screen = document.querySelector('.ttv-screen');
        if (screen) screen.appendChild(codeConsole);
    };

    // ===== BAMBOO COPTER FLOWCHART PARSER, TRANSLATOR & RENDERER =====
    function parsePython(code) {
        if (!code || code.trim().length === 0) {
            return [];
        }
        
        const lines = code.split('\n')
            .map(l => ({ original: l, text: l.trim(), indent: l.length - l.trimStart().length }))
            .filter(l => l.text.length > 0 && !l.text.startsWith('#'));

        let index = 0;
        
        function parseBlock(currentIndent) {
            const statements = [];
            while (index < lines.length) {
                const line = lines[index];
                if (line.indent < currentIndent) {
                    break;
                }
                
                if (line.text.startsWith('if ') || line.text.startsWith('if(')) {
                    let cond = line.text;
                    if (cond.endsWith(':')) cond = cond.slice(0, -1);
                    cond = cond.substring(2).trim();
                    
                    index++;
                    const thenBlock = parseBlock(line.indent + 1);
                    let elseBlock = null;
                    
                    if (index < lines.length) {
                        const nextLine = lines[index];
                        if (nextLine.indent === line.indent) {
                            if (nextLine.text.startsWith('else:') || nextLine.text.startsWith('else :')) {
                                index++;
                                elseBlock = parseBlock(nextLine.indent + 1);
                            } else if (nextLine.text.startsWith('elif ')) {
                                elseBlock = parseBlock(nextLine.indent);
                            }
                        }
                    }
                    statements.push({
                        type: 'if',
                        condition: cond,
                        then: thenBlock,
                        else: elseBlock
                    });
                } else if (line.text.startsWith('for ') || line.text.startsWith('for(')) {
                    let loopInfo = line.text;
                    if (loopInfo.endsWith(':')) loopInfo = loopInfo.slice(0, -1);
                    loopInfo = loopInfo.substring(3).trim();
                    
                    index++;
                    const body = parseBlock(line.indent + 1);
                    statements.push({
                        type: 'for',
                        loop: loopInfo,
                        body: body
                    });
                } else if (line.text.startsWith('while ') || line.text.startsWith('while(')) {
                    let cond = line.text;
                    if (cond.endsWith(':')) cond = cond.slice(0, -1);
                    cond = cond.substring(5).trim();
                    
                    index++;
                    const body = parseBlock(line.indent + 1);
                    statements.push({
                        type: 'while',
                        condition: cond,
                        body: body
                    });
                } else if (line.text.startsWith('def ')) {
                    let funcInfo = line.text;
                    if (funcInfo.endsWith(':')) funcInfo = funcInfo.slice(0, -1);
                    funcInfo = funcInfo.substring(3).trim();
                    
                    index++;
                    const body = parseBlock(line.indent + 1);
                    statements.push({
                        type: 'def',
                        func: funcInfo,
                        body: body
                    });
                } else {
                    statements.push({
                        type: 'simple',
                        text: line.text
                    });
                    index++;
                }
            }
            return statements;
        }
        
        return parseBlock(0);
    }

    function toEnglish(text) {
        let clean = text.trim();
        if (clean === '[]') return 'an empty list';
        if (clean === '{}') return 'an empty dictionary';
        
        if ((clean.startsWith('"') && clean.endsWith('"')) || (clean.startsWith("'") && clean.endsWith("'"))) {
            return clean.slice(1, -1);
        }
        
        const listCompRegex = /^\[(.*)\s+for\s+(\w+)\s+in\s+(.*)\]$/;
        if (listCompRegex.test(clean)) {
            const m = clean.match(listCompRegex);
            const expr = toEnglish(m[1]);
            const varName = m[2];
            const iterable = toEnglish(m[3]);
            return `list of <strong>${expr}</strong> for each <strong>${varName}</strong> in <strong>${iterable}</strong>`;
        }

        clean = clean.replace(/range\s*\(\s*(\d+)\s*\)/g, 'numbers from 0 to $1 - 1');
        clean = clean.replace(/range\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)/g, 'numbers from $1 to $2 - 1');

        clean = clean.replace(/==/g, ' is equal to ')
                     .replace(/!=/g, ' is not equal to ')
                     .replace(/>=/g, ' is greater than or equal to ')
                     .replace(/<=/g, ' is less than or equal to ')
                     .replace(/>/g, ' is greater than ')
                     .replace(/</g, ' is less than ')
                     .replace(/\band\b/g, ' and ')
                     .replace(/\bor\b/g, ' or ')
                     .replace(/\bnot\b/g, ' not ');
                     
        clean = clean.replace(/len\((.*?)\)/g, 'length of $1');
        
        clean = clean.replace(/(\w+)\.upper\(\)/g, 'uppercase version of $1');
        clean = clean.replace(/(\w+)\.lower\(\)/g, 'lowercase version of $1');
        
        clean = clean.replace(/(\w+)\.append\((.*?)\)/g, 'add $2 to $1');
        clean = clean.replace(/(\w+)\.remove\((.*?)\)/g, 'remove $2 from $1');
        clean = clean.replace(/(\w+)\.pop\(\)/g, 'remove last item of $1');
        
        return clean;
    }

    function translateSimple(text) {
        let clean = text.trim();
        const inputRegex = /^(\w+)\s*=\s*input\((.*)\)$/;
        const printRegex = /^print\((.*)\)$/;
        const assignRegex = /^(\w+)\s*=\s*(.*)$/;
        const returnRegex = /^return\s*(.*)$/;
        const appendRegex = /^(\w+)\.append\((.*)\)$/;
        const removeRegex = /^(\w+)\.remove\((.*)\)$/;
        
        if (inputRegex.test(clean)) {
            const m = clean.match(inputRegex);
            const varName = m[1];
            const prompt = toEnglish(m[2]);
            return {
                class: 'bc-input',
                icon: '📥',
                label: `Ask user: <strong>"${prompt}"</strong> and store in <strong>${varName}</strong>`
            };
        }
        
        if (printRegex.test(clean)) {
            const m = clean.match(printRegex);
            const expr = toEnglish(m[1]);
            return {
                class: 'bc-output',
                icon: '🖨️',
                label: `Print output: <strong>${expr}</strong>`
            };
        }
        
        if (appendRegex.test(clean)) {
            const m = clean.match(appendRegex);
            const listName = m[1];
            const valName = toEnglish(m[2]);
            return {
                class: 'bc-store',
                icon: '📦',
                label: `Add <strong>${valName}</strong> to list <strong>${listName}</strong>`
            };
        }

        if (removeRegex.test(clean)) {
            const m = clean.match(removeRegex);
            const listName = m[1];
            const valName = toEnglish(m[2]);
            return {
                class: 'bc-store',
                icon: '📦',
                label: `Remove <strong>${valName}</strong> from list <strong>${listName}</strong>`
            };
        }
        
        if (assignRegex.test(clean)) {
            const m = clean.match(assignRegex);
            const varName = m[1];
            const val = toEnglish(m[2]);
            return {
                class: 'bc-store',
                icon: '📦',
                label: `Store <strong>${val}</strong> in variable <strong>${varName}</strong>`
            };
        }
        
        if (returnRegex.test(clean)) {
            const m = clean.match(returnRegex);
            const val = toEnglish(m[1]);
            return {
                class: 'bc-store',
                icon: '📤',
                label: `Return <strong>${val || 'nothing'}</strong>`
            };
        }
        
        return {
            class: 'bc-action',
            icon: '⚙️',
            label: `Run step: <code>${clean}</code>`
        };
    }

    function renderFlowchartHTML(statements) {
        let html = '';
        
        html += `
            <div class="bc-node bc-start">
                <span class="bc-node-icon">🏁</span>
                <span class="bc-node-lbl">START</span>
            </div>
            <div class="bc-arrow"><i class="fas fa-arrow-down"></i></div>
        `;
        
        function renderList(list) {
            let subHtml = '';
            list.forEach((stmt, idx) => {
                if (stmt.type === 'simple') {
                    const trans = translateSimple(stmt.text);
                    subHtml += `
                        <div class="bc-node ${trans.class}">
                            <span class="bc-node-icon">${trans.icon}</span>
                            <span class="bc-node-lbl">${trans.label}</span>
                        </div>
                    `;
                    if (idx < list.length - 1 || list[idx+1]) {
                        subHtml += `<div class="bc-arrow"><i class="fas fa-arrow-down"></i></div>`;
                    }
                } else if (stmt.type === 'if') {
                    const condEng = toEnglish(stmt.condition);
                    subHtml += `
                        <div class="bc-node bc-decision">
                            <span class="bc-node-icon">🧠</span>
                            <span class="bc-node-lbl">Is ${condEng}?</span>
                        </div>
                        <div class="bc-branches-container">
                            <div class="bc-branch bc-branch-yes">
                                <div class="bc-branch-label">YES ↙</div>
                                <div class="bc-branch-flow">
                                    ${renderList(stmt.then)}
                                </div>
                            </div>
                            <div class="bc-branch bc-branch-no">
                                <div class="bc-branch-label">NO ↘</div>
                                <div class="bc-branch-flow">
                                    ${stmt.else ? renderList(stmt.else) : `
                                        <div class="bc-node bc-empty">
                                            <span class="bc-node-icon">⏩</span>
                                            <span class="bc-node-lbl">Do nothing</span>
                                        </div>
                                    `}
                                </div>
                            </div>
                        </div>
                    `;
                    if (idx < list.length - 1) {
                        subHtml += `
                            <div class="bc-merge-dot"></div>
                            <div class="bc-arrow"><i class="fas fa-arrow-down"></i></div>
                        `;
                    }
                } else if (stmt.type === 'for') {
                    const loopEng = toEnglish(stmt.loop);
                    subHtml += `
                        <div class="bc-node bc-loop">
                            <span class="bc-node-icon">🔄</span>
                            <span class="bc-node-lbl">Loop: For each ${loopEng}</span>
                        </div>
                        <div class="bc-loop-container">
                            <div class="bc-loop-body">
                                ${renderList(stmt.body)}
                            </div>
                            <div class="bc-loop-arrow-back">
                                <span>loop back ↺</span>
                            </div>
                        </div>
                    `;
                    if (idx < list.length - 1) {
                        subHtml += `<div class="bc-arrow"><i class="fas fa-arrow-down"></i></div>`;
                    }
                } else if (stmt.type === 'while') {
                    const condEng = toEnglish(stmt.condition);
                    subHtml += `
                        <div class="bc-node bc-loop">
                            <span class="bc-node-icon">🔄</span>
                            <span class="bc-node-lbl">Loop: While ${condEng} is true</span>
                        </div>
                        <div class="bc-loop-container">
                            <div class="bc-loop-body">
                                ${renderList(stmt.body)}
                            </div>
                            <div class="bc-loop-arrow-back">
                                <span>loop back ↺</span>
                            </div>
                        </div>
                    `;
                    if (idx < list.length - 1) {
                        subHtml += `<div class="bc-arrow"><i class="fas fa-arrow-down"></i></div>`;
                    }
                } else if (stmt.type === 'def') {
                    subHtml += `
                        <div class="bc-node bc-action">
                            <span class="bc-node-icon">⚙️</span>
                            <span class="bc-node-lbl">Define task: ${stmt.func}</span>
                        </div>
                        <div class="bc-loop-container">
                            <div class="bc-loop-body">
                                ${renderList(stmt.body)}
                            </div>
                        </div>
                    `;
                    if (idx < list.length - 1) {
                        subHtml += `<div class="bc-arrow"><i class="fas fa-arrow-down"></i></div>`;
                    }
                }
            });
            return subHtml;
        }
        
        if (statements.length === 0) {
            html += `
                <div class="bc-node bc-empty">
                    <span class="bc-node-icon">💡</span>
                    <span class="bc-node-lbl">Your editor is empty or has only comments.<br>Type some Python code to visualize its logic flow!</span>
                </div>
            `;
        } else {
            html += renderList(statements);
        }
        
        html += `
            <div class="bc-arrow"><i class="fas fa-arrow-down"></i></div>
            <div class="bc-node bc-end">
                <span class="bc-node-icon">🏁</span>
                <span class="bc-node-lbl">END</span>
            </div>
        `;
        
        return html;
    }

    function showBambooCopterPopup() {
        let code = '';
        
        // Priority 1: Level Solution code, so the learner can see the expected flowchart workflow to help them code!
        const params = new URLSearchParams(window.location.search);
        const levelId = parseInt(params.get('id'));
        if (levelId && window.levels && window.levels[levelId - 1]) {
            const lvl = window.levels[levelId - 1];
            code = lvl.solution || lvl.starterCode || '';
        }
        
        // Priority 2: Fallback to the current code in the editor
        if (!code || code.trim().length === 0) {
            const editor = document.getElementById('codeEditor');
            if (editor && editor.value.trim().length > 0) {
                code = editor.value;
            }
        }
        
        let usingDemo = false;
        if (!code || code.trim().length === 0) {
            usingDemo = true;
            code = `name = input("Enter your name")\n\nif len(name) > 5:\n    print("Long Name")\nelse:\n    print("Short Name")`;
        }

        const statements = parsePython(code);
        const flowchartHTML = renderFlowchartHTML(statements);

        // Check if side-by-side panel is available in DOM (e.g. level.html)
        const panel = document.getElementById('copterHelperPanel');
        if (panel) {
            playPocketSynth('click');
            panel.innerHTML = `
                <div style="position: relative; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px dashed rgba(0, 174, 239, 0.2); text-align: center;">
                    <button onclick="document.getElementById('copterHelperPanel').style.display='none'" style="position: absolute; right: 0; top: 0; background: none; border: none; font-size: 20px; font-weight: 800; color: #00AEEF; cursor: pointer; line-height: 1;">&times;</button>
                    <div style="font-family: 'Nunito', sans-serif; font-size: 15px; font-weight: 900; color: #00AEEF;">🚁 Bamboo Copter Helper</div>
                    <div style="font-family: 'Quicksand', sans-serif; font-size: 11px; color: #2e7d32; font-weight: 700; margin-top: 4px;">Target Logic Flow</div>
                </div>
                <div class="bc-flow-body" style="display: flex; flex-direction: column; align-items: center; gap: 2px;">
                    ${flowchartHTML}
                </div>
            `;
            // Toggle panel display
            if (panel.style.display === 'flex') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'flex';
            }
            return;
        }

        // Full-screen Modal Fallback (e.g. home.html)
        const card = document.getElementById('bambooCopterCard');
        if (!card) return;

        card.innerHTML = `
            <button class="bc-close-btn" id="bambooCopterCloseBtn">&times;</button>
            <div class="bc-header">
                <div class="bc-header-title">🚁 Bamboo Copter Activated!</div>
                <div class="bc-header-subtitle">"Let's fly above the code and understand how it thinks."</div>
                ${usingDemo ? `
                    <div style="font-size:12px; color:#ef5350; margin-top:8px; font-weight:700;">💡 Demo Mode (Write code in the editor to map your own logic flow!)</div>
                ` : `
                    <div style="font-size:12.5px; color:#2e7d32; margin-top:8px; font-weight:700; background:rgba(46, 125, 50, 0.1); display:inline-block; padding:4px 10px; border-radius:20px;">💡 Target Workflow (Follow this logic to solve the level!)</div>
                `}
            </div>
            <div class="bc-flow-body">
                ${flowchartHTML}
            </div>
        `;

        document.getElementById('bambooCopterCloseBtn').onclick = closeBambooCopterPopup;

        const wrapper = document.querySelector('.level-wrapper') || document.querySelector('.home-wrapper');
        if (wrapper) wrapper.classList.add('zoomed-out');

        const overlay = document.getElementById('bambooCopterPopup');
        if (overlay) overlay.classList.add('visible');
    }

    function closeBambooCopterPopup() {
        playPocketSynth('click');
        const overlay = document.getElementById('bambooCopterPopup');
        if (overlay) overlay.classList.remove('visible');

        const wrapper = document.querySelector('.level-wrapper') || document.querySelector('.home-wrapper');
        if (wrapper) wrapper.classList.remove('zoomed-out');
    }

    window.playPocketSynth = playPocketSynth;

    // ===== OPEN/CLOSE INVENTORY INTERFACES =====
    function openPocketModal() {
        playPocketSynth('click');
        const modal = document.getElementById('floatingPocketModal');
        if (modal) {
            rebuildInventoryGrid();
            modal.classList.add('visible');
            startCooldownTimer();
        }
    }

    function closePocketModal() {
        playPocketSynth('click');
        const modal = document.getElementById('floatingPocketModal');
        if (modal) {
            modal.classList.remove('visible');
        }
    }

    // ===== INITIALIZATION ON SITE LOAD =====
    function initialize() {
        loadPocketState();
        injectDOMElements();

        // Bind events
        document.getElementById('floatingPocketBtn').onclick = openPocketModal;
        document.getElementById('floatingPocketCloseBtn').onclick = closePocketModal;
        
        const modal = document.getElementById('floatingPocketModal');
        if (modal) {
            modal.onclick = (e) => {
                if (e.target === modal) closePocketModal();
            };
        }
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
})();
