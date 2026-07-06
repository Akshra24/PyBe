const fs = require('fs');
const vm = require('vm');

let c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');

// Find Level 4 body lines (around line 220-244) and escape apostrophes
const lines = c.split('\n');
const startLine = lines.findIndex(l => l.includes("body: '<p>Python is one of the most popular"));
const endLine = lines.findIndex((l, i) => i > startLine && l.trim() === "'");
console.log('Body lines:', startLine + 1, 'to', endLine + 1);

// Replace: in these specific lines, escape all 's patterns inside strings
for (let i = startLine; i <= endLine; i++) {
    let line = lines[i];
    // Only process if it's a string continuation line (starts with single quote)
    const trimmed = line.trim();
    if (trimmed.startsWith("'")) {
        // Count quotes: first opens string, last closes it
        // We need to escape all 's occurrences inside
        // Replace Python's -> Python\'s, it's -> it\'s, etc.
        line = line.replace(/'s/g, "\\'s").replace(/'t/g, "\\'t").replace(/'r/g, "\\'r").replace(/'m/g, "\\'m").replace(/'ve/g, "\\'ve").replace(/'re/g, "\\'re").replace(/'ll/g, "\\'ll").replace(/'d/g, "\\'d");
        lines[i] = line;
    }
}

const newContent = lines.join('\n');
fs.writeFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', newContent);
console.log('Written!');

// Verify
const ctx = vm.createContext({ window: {}, console });
try {
    new vm.Script(newContent).runInContext(ctx);
    console.log('SUCCESS! Levels:', ctx.window.levels.length);
    ctx.window.levels.forEach((l, i) => console.log('L' + (i+1) + ':', l.title));
} catch(e) {
    console.log('Still broken:', e.message);
}