const fs = require('fs');
let c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');

// The problem: line 223 has Python's inside a single-quoted string
// We need to see the exact bytes at the reported position
// The debug script said error at "line 225 char 1" in the script source

// Find all single-quote issues in the Level 4 body section
// Split by lines and find the issue
const lines = c.split('\n');

// Find Level 4 body start (around id:4 sections line)
let l4body = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('body:') && lines[i].includes("'") && i > 200) {
        l4body = i;
        break;
    }
}
console.log('Level 4 body starts at line:', l4body + 1);
console.log('That line:', lines[l4body].slice(0, 80));

// Find qna start
let qnaStart = -1;
for (let i = l4body; i < lines.length; i++) {
    if (lines[i].includes('qna:')) { qnaStart = i; break; }
}
console.log('qna at line:', qnaStart + 1);

// Show lines with unescaped apostrophes in single-quoted strings
console.log('\nProblem lines (single-quoted strings with apostrophes):');
for (let i = l4body; i < qnaStart; i++) {
    const line = lines[i];
    // Check if this is a string line starting/ending with single quote
    const trimmed = line.trim();
    if (trimmed.startsWith("'") && trimmed.endsWith("'") && trimmed.includes("'s")) {
        console.log('Line ' + (i+1) + ':', trimmed.slice(0, 80));
    } else if (trimmed.startsWith("body: '") && line.includes("'s")) {
        console.log('Line ' + (i+1) + ' (body start):', trimmed.slice(0, 80));
    }
}