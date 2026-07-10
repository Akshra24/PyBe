(function() {
    // Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        /* XP System Styles */
        .xp-float {
            position: fixed;
            z-index: 100000009;
            color: #ea80fc;
            font-family: 'Quicksand', sans-serif;
            font-weight: 900;
            font-size: 22px;
            pointer-events: none;
            text-shadow: 0 0 8px rgba(234, 128, 252, 0.6), 0 2px 4px rgba(0,0,0,0.4);
            animation: xpFloatUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes xpFloatUp {
            0% { transform: translateY(0) scale(0.8); opacity: 0; }
            20% { transform: translateY(-20px) scale(1.15); opacity: 1; }
            100% { transform: translateY(-100px) scale(0.9); opacity: 0; }
        }
        .lu-overlay {
            position: fixed;
            inset: 0;
            background: rgba(13, 8, 28, 0.9);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100000008;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }
        .lu-overlay.visible {
            opacity: 1;
            pointer-events: all;
        }
        .lu-card {
            background: #1a0f30;
            border: 4px solid #ea80fc;
            border-radius: 40px;
            box-shadow: 0 20px 50px rgba(186, 104, 200, 0.3), inset 0 0 30px rgba(0,0,0,0.6);
            padding: 40px;
            width: 420px;
            max-width: 90%;
            text-align: center;
            position: relative;
            transform: scale(0.7) translateY(50px);
            transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            color: white;
            font-family: 'Quicksand', sans-serif;
        }
        .lu-overlay.visible .lu-card {
            transform: scale(1) translateY(0);
        }
        .lu-ring {
            width: 120px;
            height: 120px;
            margin: 0 auto 20px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .lu-ring-glow {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            border: 4px dashed #ea80fc;
            animation: luSpin 10s linear infinite;
            box-shadow: 0 0 20px #ea80fc;
        }
        .lu-badge {
            font-size: 42px;
            z-index: 2;
            animation: luPulse 1.5s infinite alternate;
        }
        .lu-congrats {
            font-size: 28px;
            font-weight: 900;
            color: #ea80fc;
            text-shadow: 0 0 10px rgba(234, 128, 252, 0.5);
            margin-bottom: 8px;
        }
        .lu-subtitle {
            font-size: 15px;
            color: #b0bec5;
            line-height: 1.6;
            margin-bottom: 24px;
        }
        .lu-btn {
            background: linear-gradient(135deg, #e040fb, #aa00ff);
            color: white;
            border: none;
            padding: 12px 35px;
            border-radius: 50px;
            font-weight: 800;
            font-size: 15px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(224, 64, 251, 0.4);
            transition: all 0.2s;
        }
        .lu-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(224, 64, 251, 0.6);
        }
        @keyframes luSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes luPulse {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);

    // Initial state loading
    const progressKey = 'pybe_progress';
    function getProgress() {
        try {
            const p = JSON.parse(localStorage.getItem(progressKey) || '{}');
            if (p.xpLevel === undefined) p.xpLevel = 1;
            if (p.xp === undefined) p.xp = 0;
            return p;
        } catch(e) {
            return { xpLevel: 1, xp: 0 };
        }
    }

    function saveProgress(p) {
        localStorage.setItem(progressKey, JSON.stringify(p));
    }

    function getXpRequired(level) {
        return level * 120;
    }

    // Award XP function
    window.awardXp = function(amount, reason) {
        const p = getProgress();
        let currentXp = p.xp + amount;
        let currentLevel = p.xpLevel;
        let leveledUp = false;

        while (currentXp >= getXpRequired(currentLevel)) {
            currentXp -= getXpRequired(currentLevel);
            currentLevel++;
            leveledUp = true;
        }

        p.xp = currentXp;
        p.xpLevel = currentLevel;
        saveProgress(p);

        // Display floating indicator
        triggerXpFloat(`+${amount} XP ${reason ? ' — ' + reason : ''}`);

        if (leveledUp) {
            triggerLevelUpModal(currentLevel);
        }
    };

    function triggerXpFloat(text) {
        const floater = document.createElement('div');
        floater.className = 'xp-float';
        floater.textContent = text;
        floater.style.left = (Math.random() * 30 + 35) + '%';
        floater.style.top = (Math.random() * 20 + 40) + '%';
        document.body.appendChild(floater);
        setTimeout(() => floater.remove(), 1200);
    }

    function triggerLevelUpModal(level) {
        let overlay = document.getElementById('levelUpOverlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'lu-overlay';
            overlay.id = 'levelUpOverlay';
            overlay.innerHTML = `
                <div class="lu-card">
                    <div class="lu-ring">
                        <div class="lu-ring-glow"></div>
                        <div class="lu-badge">🌟</div>
                    </div>
                    <div class="lu-congrats">LEVEL UP!</div>
                    <div class="lu-subtitle" id="luSub">You have reached Level 1!</div>
                    <button class="lu-btn" id="luBtn">Awesome!</button>
                </div>
            `;
            document.body.appendChild(overlay);
        }

        document.getElementById('luSub').innerHTML = `You have advanced to <strong>Level ${level}</strong>! 🛡️<br><span style="font-size:12px; color:#aaa;">Keep up the excellent Python training!</span>`;
        
        // Play level up sound chord
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const now = ctx.currentTime;
            const chords = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
            chords.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.08);
                gain.gain.setValueAtTime(0.12, now + idx * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.5);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + idx * 0.08);
                osc.stop(now + idx * 0.08 + 0.5);
            });
        } catch(e) {}

        overlay.classList.add('visible');

        if (window.launchConfetti) {
            window.launchConfetti();
        } else if (typeof confetti === 'function') {
            confetti();
        }

        document.getElementById('luBtn').onclick = () => {
            overlay.classList.remove('visible');
        };
    }

    // Achievements definitions
    const ACHIEVEMENTS = {
        first_steps: { title: "First Steps 👣", desc: "Complete Level 1" },
        fast_learner: { title: "Fast Learner ⚡", desc: "Reach active streak of 3 days" },
        diligence: { title: "Diligence 🔥", desc: "Reach active streak of 7 days" },
        time_lord: { title: "Time Lord ⏳", desc: "Activate Time Cloth to reverse a mistake" },
        bug_hunter: { title: "Bug Hunter 🔦", desc: "Activate Search Light to spot a bug" },
        polyglot: { title: "Polyglot 🍮", desc: "Activate Translation Jelly to translate a lesson" },
        historian: { title: "Historian 📺", desc: "Open Time TV to inspect past attempts" },
        lucky_savior: { title: "Lucky Savior ⭐", desc: "Activate Lucky Star to restore a streak" },
        energy_surge: { title: "Energy Surge 💊", desc: "Activate Energy Capsule during coding" },
        perfect_marks: { title: "Perfect Marks 🎯", desc: "Get a 100% correct score on any test" }
    };

    window.unlockAchievement = function(id) {
        const ach = ACHIEVEMENTS[id];
        if (!ach) return;

        const p = getProgress();
        if (!p.unlockedAchievements) p.unlockedAchievements = [];
        if (p.unlockedAchievements.includes(id)) return;

        p.unlockedAchievements.push(id);
        saveProgress(p);

        triggerAchievementNotification(ach.title, ach.desc);
        
        setTimeout(() => {
            window.awardXp(100, "Achievement Unlocked! 🏆");
        }, 1500);
    };

    function triggerAchievementNotification(title, desc) {
        const notif = document.createElement('div');
        notif.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 30px;
            background: rgba(30, 20, 50, 0.95);
            border: 2px solid #ea80fc;
            border-radius: 20px;
            padding: 16px 24px;
            box-shadow: 0 10px 30px rgba(186, 104, 200, 0.4);
            z-index: 100000010;
            display: flex;
            align-items: center;
            gap: 15px;
            font-family: 'Quicksand', sans-serif;
            color: #fff;
            transform: translateX(-150%);
            transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        `;
        notif.innerHTML = `
            <div style="font-size:32px;">🏆</div>
            <div>
                <div style="font-size:12px; font-weight:800; color:#ea80fc; text-transform:uppercase;">Achievement Unlocked!</div>
                <div style="font-weight:900; font-size:16px;">${title}</div>
                <div style="font-size:12px; color:#aaa; margin-top:2px;">${desc}</div>
            </div>
        `;
        document.body.appendChild(notif);
        
        setTimeout(() => {
            notif.style.transform = 'translateX(0)';
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(587.33, ctx.currentTime);
                osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + 0.3);
            } catch(e) {}
        }, 100);

        setTimeout(() => {
            notif.style.transform = 'translateX(-150%)';
            setTimeout(() => notif.remove(), 600);
        }, 6000);
    }

    // Daily Login Check (Award +40 XP daily + 10 XP per streak day)
    function checkDailyLoginXp() {
        try {
            const today = new Date().toISOString().split("T")[0];
            const p = getProgress();
            
            if (p.lastXpLoginDate !== today) {
                p.lastXpLoginDate = today;
                saveProgress(p);
                
                const streak = p.streak || 1;
                const dailyXp = 40;
                const streakBonus = streak * 10;
                
                setTimeout(() => {
                    window.awardXp(dailyXp, "Daily Login 📅");
                    
                    // Streak achievements check
                    if (streak >= 7) {
                        window.unlockAchievement('diligence');
                    } else if (streak >= 3) {
                        window.unlockAchievement('fast_learner');
                    }

                    if (streak > 1) {
                        setTimeout(() => {
                            window.awardXp(streakBonus, "Streak Bonus 🔥");
                        }, 1300);
                    }
                }, 1000);
            }
        } catch(e) {}
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            checkDailyLoginXp();
        });
    } else {
        checkDailyLoginXp();
    }
})();
