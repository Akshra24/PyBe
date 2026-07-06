const fs = require('fs');
let c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');
const lines = c.split('\n');

// Find the start: the first line with body: `<p>Python is one of...  (just fixed line 220)
const startIdx = lines.findIndex(l => l.includes("body: `<p>Python is one of the most popular"));
// Find end: last line with Doraemon tip (ends the body)
const endIdx = lines.findIndex((l, i) => i > startIdx && l.includes("Doraemon's tip"));
console.log('Start:', startIdx + 1, '| End:', endIdx + 1);

// Show the problematic lines
for (let i = startIdx; i <= endIdx; i++) {
    console.log(i + 1 + ': ' + lines[i].slice(0, 100));
}

// Build the replacement: single backtick string
const newBodyLines = [
    '            body: `<p>Python is one of the most popular programming languages in the world today. But it did not start in a corporate lab -- it was created by a single person who wanted to make programming fun and accessible. That person was <strong>Guido van Rossum</strong>.</p><h3>The Birth of Python -- 1989</h3><p>During a relaxed holiday week at CERN (the European Organization for Nuclear Research) in Amsterdam, Guido van Rossum was looking for a hobby project. He had been working on a language called ABC at CWI (Centrum Wiskunde & Informatica), and he wanted to create something even better.</p><p>He named it <strong>Python</strong> -- not after the snake, but after <em>Monty Python\'s Flying Circus</em>, a British comedy TV show he loved. This set the tone for Python from the very beginning: it was supposed to be fun.</p><div class="desc-callout"><span class="callout-icon">🎬</span><div><strong>Why Python and not ABC?</strong><br>Guido wanted a short, unique, and slightly mysterious name. He loved Monty Python and felt that the name reflected the language\'s core philosophy: programming should be enjoyable, not frustrating.</div></div><h3>Guido van Rossum -- The Creator</h3><p>Python was created by <strong>Guido van Rossum</strong> in 1991 during a holiday at CERN in Amsterdam. For over 25 years, he was Python\'s <strong>Benevolent Dictator For Life (BDFL)</strong> -- the final decision-maker on the language\'s design. He worked at Google, Dropbox, and eventually Microsoft, always continuing to shepherd Python\'s growth.</p><p>He retired as BDFL in 2018, passing Python\'s governance to the <strong>Python Steering Council</strong>. But his influence remains in every line of Python code written today.</p><h3>Python\'s Core Philosophy</h3><p>Python was designed around a set of guiding principles written in a document called <strong>The Zen of Python</strong> by Tim Peters. The most famous line is:</p><blockquote class="desc-callout callout-highlight">Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Readability counts.</blockquote><p>Python prioritises making code <strong>readable</strong> -- your future self and other developers will thank you. This is why Python is often the first language taught in universities and coding bootcamps worldwide.</p><h3>Why Learn Python in 2024 and Beyond?</h3><div class="desc-grid"><div class="desc-card"><span class="desc-card-icon">🤖</span><h4>AI & Machine Learning</h4><p>Python is the language of AI. TensorFlow, PyTorch, OpenAI, and every major AI library is built with Python.</p></div><div class="desc-card"><span class="desc-card-icon">🌐</span><h4>Web Development</h4><p>Django and Flask are powerful Python frameworks used by Instagram, Pinterest, and Spotify.</p></div><div class="desc-card"><span class="desc-card-icon">📊</span><h4>Data Science</h4><p>Pandas, NumPy, and Matplotlib make Python the data scientist\'s best friend.</p></div><div class="desc-card"><span class="desc-card-icon">🔧</span><h4>Automation</h4><p>Python can automate repetitive tasks -- file management, web scraping, Excel reports -- in just a few lines.</p></div></div><h3>Python 2 vs Python 3</h3><p>You might hear about Python 2 and Python 3. They are two different versions of the same language. Python 2 is <strong>officially dead</strong> (retired in 2020). Always learn <strong>Python 3</strong> -- it is the only version being actively developed and supported.</p><pre class="code-example"># Python 2 (old, deprecated)\nprint "Hello"         # No parentheses needed\n\n# Python 3 (current)\nprint("Hello")        # Parentheses required</pre><p>In this course, we use <strong>Python 3</strong> exclusively.</p><h3>Who Uses Python Today?</h3><ul class="desc-list"><li><strong>Google</strong> -- Uses Python extensively across many services</li><li><strong>Netflix</strong> -- Recommendation engine, content delivery, and security</li><li><strong>NASA</strong> -- Mission control, simulations, and data analysis</li><li><strong>Instagram</strong> -- Entire backend infrastructure built on Django (Python)</li><li><strong>Spotify</strong> -- Backend services and data pipelines</li><li><strong>Dropbox</strong> -- Desktop client written in Python</li><li><strong>Disney</strong> -- Animation and visual effects pipelines</li></ul><div class="desc-callout"><span class="callout-icon">🤖</span><div><strong>Doraemon\'s tip:</strong> The best time to learn Python was 10 years ago. The second best time is right now. You are exactly where you need to be!</div></div>`'
];

// Replace lines startIdx to endIdx with the new single line
const before = lines.slice(0, startIdx);
const after = lines.slice(endIdx + 1);
const newFile = [...before, ...newBodyLines, ...after].join('\n');

fs.writeFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', newFile);
console.log('Written! New length:', newFile.length);

// Verify with node --check
const { execSync } = require('child_process');
try {
    execSync('node --check C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', { stdio: 'pipe' });
    console.log('PASS: File is syntactically valid!');
} catch(e) {
    console.log('FAIL:', e.stderr ? e.stderr.toString() : e.message);
}