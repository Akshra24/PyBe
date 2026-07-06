const fs = require('fs');
const vm = require('vm');

let c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');

// Try parsing, catch exact error
const ctx = vm.createContext({ window: {}, console });
try {
    new vm.Script(c).runInContext(ctx);
    console.log('OK! Levels:', ctx.window.levels.length);
} catch(e) {
    // Find where the error is - search for apostrophes in single-quoted strings
    // The error is "Unexpected identifier 's'" - means a string closed early
    
    // Strategy: find single-quoted strings that contain unescaped 's
    // Look for the pattern: ' followed by text containing 's
    
    // Let's find all unescaped apostrophes in the file
    let inSingleQuote = false;
    let lineNum = 0;
    let col = 0;
    let problems = [];
    
    for (let i = 0; i < c.length; i++) {
        if (c[i] === '\n') { lineNum++; col = 0; continue; }
        col++;
        
        if (c[i] === "'" && (i === 0 || c[i-1] !== '\\')) {
            inSingleQuote = !inSingleQuote;
            if (!inSingleQuote) {
                // Check if the string we just closed had problematic content
            }
        } else if (c[i] === "'" && inSingleQuote && c[i-1] !== '\\') {
            // This is a second apostrophe INSIDE a single-quoted string
            problems.push({ pos: i, line: lineNum + 1, col, context: c.slice(Math.max(0,i-30), i+10) });
        }
    }
    
    console.log('Potential apostrophe issues:', problems.length);
    problems.forEach(p => console.log('Line', p.line, 'col', p.col, ':', JSON.stringify(p.context)));
}