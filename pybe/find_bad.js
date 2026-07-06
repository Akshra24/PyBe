const fs = require('fs');
const c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');
const ls = c.split('\n');

// Find level 4 description body start (line after id: 4, sections)
const l4Start = ls.findIndex(l => l.includes('id: 4,'));
console.log('Level 4 starts at line:', l4Start + 1);

// Find qna start for level 4
const qnaIdx = ls.findIndex((l, i) => i > l4Start && l.includes('qna: ['));
console.log('Level 4 qna at line:', qnaIdx + 1);
console.log('\nLevel 4 description body lines with potential quote issues:');
for (let i = l4Start; i < qnaIdx; i++) {
    const line = ls[i];
    // Count unescaped single quotes
    const hasIssue = line.includes("'") && (line.trim().startsWith("'") || line.trim().startsWith('body:'));
    if (hasIssue) {
        console.log('Line ' + (i+1) + ':', line.slice(0, 100));
    }
}