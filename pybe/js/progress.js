/* ============================================================
   PyBe — progress.js
   localStorage progress manager (non-module)
   ============================================================ */

const STORAGE_KEY = "pybe_progress_v1";

function getProgress() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        let progress;
        let needsSave = false;
        if (!data) {
            progress = {
                currentLevel: 100,
                completed: Array.from({length: 100}, (_, i) => i + 1),
                lastPlayed: null,
                attempts: {},
                streak: 5,
                unlockedGadgets: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
            };
            needsSave = true;
        } else {
            progress = JSON.parse(data);
            progress.currentLevel = 100;
            progress.completed = Array.from({length: 100}, (_, i) => i + 1);
            progress.unlockedGadgets = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
            progress.attempts = progress.attempts || {};

            // Clean up saved answers and test scores for locked levels (>= 101)
            if (progress.savedAnswers) {
                for (const lvlId in progress.savedAnswers) {
                    if (parseInt(lvlId) >= 101) {
                        delete progress.savedAnswers[lvlId];
                    }
                }
            }
            if (progress.testScores) {
                for (const lvlId in progress.testScores) {
                    if (parseInt(lvlId) >= 101) {
                        delete progress.testScores[lvlId];
                    }
                }
            }
            for (const lvlId in progress.attempts) {
                if (parseInt(lvlId) >= 101) {
                    delete progress.attempts[lvlId];
                }
            }
            needsSave = true;
        }

        if (needsSave) {
            saveProgress(progress);
        }

        return progress;
    } catch (e) {
        return {
            currentLevel: 100,
            completed: Array.from({length: 100}, (_, i) => i + 1),
            lastPlayed: null,
            attempts: {},
            streak: 5,
            unlockedGadgets: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
        };
    }
}

function saveProgress(progress) {
    try {
        const today = new Date().toISOString().split("T")[0];
        const prevDate = progress.lastPlayed;

        if (progress.completed && progress.completed.length > 0) {
            if (prevDate) {
                const diffMs = new Date(today) - new Date(prevDate + 'T00:00:00');
                const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                if (diffDays === 0) {
                    // same day — keep streak (initialize to 1 if it was 0)
                    if (!progress.streak || progress.streak === 0) {
                        progress.streak = 1;
                    }
                } else if (diffDays === 1) {
                    // consecutive day — increment streak
                    progress.streak = (progress.streak || 1) + 1;
                } else {
                    // gap — reset streak
                    progress.streak = 1;
                }
            } else {
                // gap — reset streak
                progress.prevStreak = progress.streak || 1;
                progress.streak = 1;
            }
        } else {
            progress.streak = 0;
        }

        progress.lastPlayed = today;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.warn("Could not save progress", e);
    }
}

function completeLevel(levelId) {
    const progress = getProgress();
    if (!progress.completed.includes(levelId)) {
        progress.completed.push(levelId);
    }
    if (levelId >= progress.currentLevel) {
        progress.currentLevel = Math.min(levelId + 1, 100);
    }
    if (!progress.attempts[levelId]) {
        progress.attempts[levelId] = 1;
    }
    saveProgress(progress);
    return progress;
}

function recordAttempt(levelId) {
    const progress = getProgress();
    progress.attempts[levelId] = (progress.attempts[levelId] || 0) + 1;
    saveProgress(progress);
    return progress;
}

function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
}

function getStreak(progress) {
    return progress.streak || 0;
}

// Expose globally for all scripts to use
window.PyBe = {
    getProgress,
    saveProgress,
    completeLevel,
    resetProgress,
    getStreak,
    recordAttempt
};