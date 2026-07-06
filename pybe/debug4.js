const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');

function findSyntaxError(code) {
    // Try parsing line by line
    const lines = code.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const partial = lines.slice(0, i + 1).join('\n');
        try {
            new vm.Script(partial);
        } catch (e) {
            if (e.message.includes('Unexpected')) {
                console.log('Error at line', i + 1, ':', JSON.stringify(lines[i]));
                // Show context
                for (let j = Math.max(0, i - 2); j <= Math.min(lines.length - 1, i + 2); j++) {
                    console.log(j + 1 + ': ' + JSON.stringify(lines[j]));
                }
                return;
            }
        }
    }
    console.log('No error found in first-pass');
}

findSyntaxError(code);

// Also try eval approach
try {
    const ctx = vm.createContext({ window: {} });
    new vm.Script(code).runInContext(ctx);
    console.log('SUCCESS! Levels:', ctx.window.levels.length);
} catch (e) {
    console.log('Error message:', e.message);
    const m = e.message.match(/at position (\d+)/);
    if (m) {
        const pos = parseInt(m[1]);
        console.log('Around position', pos, ':', JSON.stringify(code.slice(pos - 20, pos + 20)));
    }
}