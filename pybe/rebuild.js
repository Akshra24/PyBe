const fs = require('fs');
const vm = require('vm');

const c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');
console.log('File length:', c.length);

// Try vm.Script parse
const ctx = vm.createContext({ window: {} });
try {
    new vm.Script(c).runInContext(ctx);
    console.log('SUCCESS! Levels:', ctx.window.levels.length);
    ctx.window.levels.forEach((l, i) => console.log('L' + (i+1) + ':', l.title, '| sections:', l.sections.join(',')));
} catch(e) {
    console.log('ERROR:', e.message);
    // Try different approach - find the character position from error
    const m = e.message.match(/at position (\d+)/);
    if (m) {
        const pos = parseInt(m[1]);
        console.log('Error at char', pos, ':', JSON.stringify(c.slice(Math.max(0,pos-30), pos+30)));
    } else {
        // Try to find where by binary search approach
        console.log('Trying line-by-line...');
        const ls = c.split('\n');
        // Use binary search to find the bad line
        let lo = 0, hi = ls.length - 1;
        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            const partial = ls.slice(0, mid + 1).join('\n');
            try {
                new vm.Script(partial).runInContext(vm.createContext({ window: {} }));
                lo = mid + 1;
            } catch(e2) {
                if (!e2.message.includes('Unexpected') && !e2.message.includes('missing')) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
        }
        console.log('Problem near line:', lo + 1, ':', JSON.stringify(ls[lo]));
        // show 3 lines context
        for (let i = Math.max(0, lo - 1); i <= Math.min(ls.length - 1, lo + 1); i++) {
            console.log('  ' + (i + 1) + ': ' + JSON.stringify(ls[i]));
        }
    }
}