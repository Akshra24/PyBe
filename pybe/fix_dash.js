const fs = require('fs');
const vm = require('vm');

// Fix em dashes in levels_data.js
let c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');
// Replace em dash (U+2014) and en dash (U+2013) with plain dash
c = c.replace(/\u2014/g, '--').replace(/\u2013/g, '-');
fs.writeFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', c);
console.log('Fixed dashes. New size:', c.length);

// Verify
const ctx = vm.createContext({ window: {} });
try {
    new vm.Script(c).runInContext(ctx);
    console.log('Parse OK! Levels:', ctx.window.levels.length);
    ctx.window.levels.forEach((l, i) => console.log(' L' + (i+1) + ':', l.title, '|', l.sections));
} catch (e) {
    console.log('Still broken:', e.message);
    const m = e.message.match(/at position (\d+)/);
    if (m) {
        const pos = parseInt(m[1]);
        console.log('Context:', JSON.stringify(c.slice(Math.max(0,pos-20), pos+20)));
    }
}