const fs = require('fs');
const vm = require('vm');

const c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');

// Binary search to find the broken line
const lines = c.split('\n');

function canParse(upToLine) {
    const code = lines.slice(0, upToLine).join('\n');
    try {
        new vm.Script(code).runInContext(vm.createContext({ window: {} }));
        return true;
    } catch(e) {
        return false;
    }
}

let lo = 1, hi = lines.length;
while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (canParse(mid)) lo = mid + 1;
    else hi = mid;
}
console.log('First broken line:', lo);
console.log('Content:', JSON.stringify(lines[lo - 1]));
console.log('Prev line:', JSON.stringify(lines[lo - 2]));
console.log('Next line:', JSON.stringify(lines[lo]));