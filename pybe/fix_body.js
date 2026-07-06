const fs = require('fs');
let c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');
const lines = c.split('\n');

// Find Level 4 body section: line with body: `<p>Python is one of... through the last ' before qna
let startIdx = lines.findIndex(l => l.includes("body: `<p>Python is one of the most popular"));
let endIdx = -1;
for (let i = startIdx + 1; i < lines.length; i++) {
    // Look for the line that closes the body with a trailing single quote
    if (lines[i].trim().startsWith("'") && lines[i].includes("Doraemon")) {
        endIdx = i;
        break;
    }
}
console.log('Level 4 body: lines', startIdx + 1, 'to', endIdx + 1);

// Escape apostrophes in single-quoted string lines within this range
for (let i = startIdx; i <= endIdx; i++) {
    const trimmed = lines[i].trim();
    // Only process lines that are single-quoted string continuations
    if (trimmed.startsWith("'") || trimmed.startsWith("+ '")) {
        // Escape ' followed by s, t, r, m, ve, re, ll, d
        lines[i] = lines[i].replace(/'s\b/g, "\\'s")
                           .replace(/'t\b/g, "\\'t")
                           .replace(/'r\b/g, "\\'r")
                           .replace(/'m\b/g, "\\'m")
                           .replace(/'ve\b/g, "\\'ve")
                           .replace(/'re\b/g, "\\'re")
                           .replace(/'ll\b/g, "\\'ll")
                           .replace(/'d\b/g, "\\'d");
    }
}

const newContent = lines.join('\n');
fs.writeFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', newContent);
console.log('Fixed apostrophes in Level 4 body.');

// Verify
const vm = require('vm');
const ctx = vm.createContext({ window: {}, console });
try {
    new vm.Script(newContent).runInContext(ctx);
    console.log('SUCCESS! Levels:', ctx.window.levels.length);
    ctx.window.levels.forEach((l, i) => console.log('L' + (i+1) + ':', l.title));
} catch(e) {
    console.log('Still broken:', e.message);
}