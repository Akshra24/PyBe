const fs = require('fs');
const vm = require('vm');

// Read the raw code
const c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');
console.log('File length:', c.length);

// Strategy: wrap in an IIFE that returns window.levels
// First let's find any non-ASCII chars
let badChars = [];
for (let i = 0; i < c.length; i++) {
    const cp = c.charCodeAt(i);
    if (cp > 127 && cp !== 10 && cp !== 13) {
        badChars.push({ pos: i, cp, ch: c[i] });
    }
}
console.log('Non-ASCII chars found:', badChars.length);
if (badChars.length > 0) {
    badChars.slice(0, 5).forEach(x => {
        console.log('  pos', x.pos, 'U+' + x.cp.toString(16).toUpperCase().padStart(4, '0'), JSON.stringify(x.ch));
    });
}

// Strategy: try to eval with vm context
const code = `
var window = {};
${c}
//# sourceURL=levels_data.js
`;
const script = new vm.Script(code, { filename: 'levels_data.js' });
const ctx = vm.createContext({
    console: console,
    window: {}
});
try {
    script.runInContext(ctx);
    const lv = ctx.window.levels;
    console.log('SUCCESS! Levels found:', lv.length);
    lv.forEach((l, i) => console.log('L' + (i+1) + ':', l.title, '|', l.sections.join('+')));
} catch(e) {
    console.log('ERROR:', e.message);
    // Show error location if possible
    const match = e.stack && e.stack.match(/levels_data\.js:(\d+):(\d+)/);
    if (match) {
        console.log('Error at line:', match[1], 'col:', match[2]);
    }
    // Show what's around character 0-200
    console.log('First 200 chars:', JSON.stringify(c.slice(0, 200)));
}