const fs = require('fs');
const vm = require('vm');

let c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');
c = c.trim().replace(/]\s*;?\s*$/, '');

const level4 = `
    {
        id: 4,
        title: "Introduction to Python",
        concept: "Why Python? History of Guido van Rossum and the Python story",
        sections: ["description", "qna", "test", "coding"],

        description: {
            heading: "Introduction to Python",
            subheading: "Why one language took over the world of programming",
            body: '<p>Python is one of the most popular programming languages in the world today. But it did not start in a corporate lab -- it was created by a single person who wanted to make programming fun and accessible. That person was <strong>Guido van Rossum</strong>.</p>' +
'<h3>The Birth of Python -- 1989</h3>' +
'<p>During a relaxed holiday week at CERN (the European Organization for Nuclear Research) in Amsterdam, Guido van Rossum was looking for a hobby project. He had been working on a language called ABC at CWI (Centrum Wiskunde & Informatica), and he wanted to create something even better.</p>' +
'<p>He named it <strong>Python</strong> -- not after the snake, but after <em>Monty Python\'s Flying Circus</em>, a British comedy TV show he loved. This set the tone for Python from the very beginning: it was supposed to be fun.</p>' +
'<div class="desc-callout"><span class="callout-icon">🎬</span><div><strong>Why "Python" and not "ABC"?</strong><br>Guido wanted a short, unique, and slightly mysterious name. He loved Monty Python and felt that the name reflected the language\'s core philosophy: programming should be enjoyable, not frustrating.</div></div>' +
'<h3>Guido van Rossum -- The Creator</h3>' +
'<p>Python was created by <strong>Guido van Rossum</strong> in 1991 during a holiday at CERN in Amsterdam. For over 25 years, he was Python\'s <strong>Benevolent Dictator For Life (BDFL)</strong> -- the final decision-maker on the language\'s design. He worked at Google, Dropbox, and eventually Microsoft, always continuing to shepherd Python\'s growth.</p>' +
'<p>He retired as BDFL in 2018, passing Python\'s governance to the <strong>Python Steering Council</strong>. But his influence remains in every line of Python code written today.</p>' +
'<h3>Python\'s Core Philosophy</h3>' +
'<p>Python was designed around a set of guiding principles written in a document called <strong>"The Zen of Python"</strong> by Tim Peters. The most famous line is:</p>' +
'<blockquote class="desc-callout callout-highlight">"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Readability counts."</blockquote>' +
'<p>Python prioritises making code <strong>readable</strong> -- your future self and other developers will thank you. This is why Python is often the first language taught in universities and coding bootcamps worldwide.</p>' +
'<h3>Why Learn Python in 2024 and Beyond?</h3>' +
'<div class="desc-grid"><div class="desc-card"><span class="desc-card-icon">🤖</span><h4>AI & Machine Learning</h4><p>Python is the language of AI. TensorFlow, PyTorch, OpenAI, and every major AI library is built with Python.</p></div><div class="desc-card"><span class="desc-card-icon">🌐</span><h4>Web Development</h4><p>Django and Flask are powerful Python frameworks used by Instagram, Pinterest, and Spotify.</p></div><div class="desc-card"><span class="desc-card-icon">📊</span><h4>Data Science</h4><p>Pandas, NumPy, and Matplotlib make Python the data scientist\'s best friend.</p></div><div class="desc-card"><span class="desc-card-icon">🔧</span><h4>Automation</h4><p>Python can automate repetitive tasks -- file management, web scraping, Excel reports -- in just a few lines.</p></div></div>' +
'<h3>Python 2 vs Python 3</h3>' +
'<p>You might hear about Python 2 and Python 3. They are two different versions of the same language. Python 2 is <strong>officially dead</strong> (retired in 2020). Always learn <strong>Python 3</strong> -- it is the only version being actively developed and supported.</p>' +
'<pre class="code-example"># Python 2 (old, deprecated)\nprint "Hello"         # No parentheses needed\n\n# Python 3 (current)\nprint("Hello")        # Parentheses required</pre>' +
'<p>In this course, we use <strong>Python 3</strong> exclusively.</p>' +
'<h3>Who Uses Python Today?</h3>' +
'<ul class="desc-list"><li><strong>Google</strong> -- Uses Python extensively across many services</li><li><strong>Netflix</strong> -- Recommendation engine, content delivery, and security</li><li><strong>NASA</strong> -- Mission control, simulations, and data analysis</li><li><strong>Instagram</strong> -- Entire backend infrastructure built on Django (Python)</li><li><strong>Spotify</strong> -- Backend services and data pipelines</li><li><strong>Dropbox</strong> -- Desktop client written in Python</li><li><strong>Disney</strong> -- Animation and visual effects pipelines</li></ul>' +
'<div class="desc-callout"><span class="callout-icon">🤖</span><div><strong>Doraemon\'s tip:</strong> The best time to learn Python was 10 years ago. The second best time is right now. You are exactly where you need to be!</div></div>'
        },

        qna: [
            { q: "Who created Python and why was it named Python?", a: "Python was created by <strong>Guido van Rossum</strong> in 1991 during a holiday at CERN in Amsterdam. The name comes from <em>Monty Python\'s Flying Circus</em> -- Guido\'s favourite comedy show. Not the snake!" },
            { q: "What does BDFL mean and why was it important for Python?", a: "BDFL stands for <strong>Benevolent Dictator For Life</strong> -- an informal title for Guido van Rossum, who had the final say on Python\'s design decisions for nearly 30 years. This ensured consistent, thoughtful evolution of the language without endless debates slowing it down. He stepped down in 2018." },
            { q: "What is The Zen of Python and why does it matter?", a: "The Zen of Python is a collection of guiding principles for writing Python code, written by Tim Peters and embedded in Python as an easter egg (<code>import this</code>). The core idea: <em>readable, simple, explicit code is better than clever, complex, confusing code.</em> This philosophy shapes every design decision in the language." },
            { q: "Should I learn Python 2 or Python 3?", a: "<strong>Python 3 only.</strong> Python 2 was officially retired on January 1, 2020 and receives no updates or security patches. All modern libraries, courses, and jobs use Python 3. It is not backward-compatible with Python 2." },
            { q: "What makes Python different from languages like C++ or Java?", a: "Python is <strong>interpreted</strong> (not compiled), <strong>dynamically typed</strong> (you do not declare variable types), and prioritises <strong>readability over ceremony</strong>. In C++ or Java, you write lots of boilerplate code. In Python, you write only what you need. Python is slower than compiled languages but far faster to write and easier to learn." }
        ],

        test: {
            intro: "Let's test your knowledge of Python's history, philosophy, and why it matters!",
            questions: [
                { type: "mcq", question: "Who created Python?", options: ["Elon Musk", "Guido van Rossum", "Linus Torvalds", "Tim Cook"], answer: 1 },
                { type: "mcq", question: "Why was Python named Python?", options: ["After the snake that lives in the Amazon", "After Guido's favourite pet", "After Monty Python's Flying Circus comedy show", "It stands for Programming Through One"], answer: 2 },
                { type: "mcq", question: "What does BDFL stand for in the context of Python?", options: ["Big Data Language Framework", "Benevolent Dictator For Life", "Binary Data Format Language", "Basic Development Function Library"], answer: 1 },
                { type: "fill", question: "Python was created in the year _____. (1989 / 1991 / 1995 / 2000)", answer: "1991" },
                { type: "fill", question: "The set of guiding principles for Python's design is called the _____ of Python. (rules / guidelines / zen / philosophy)", answer: "zen" },
                { type: "fill", question: "Python 2 was officially retired in the year _____. (2018 / 2019 / 2020 / 2021)", answer: "2020" },
                { type: "fill", question: "The company where Guido van Rossum worked on Python's ecosystem is _____. (Google / Microsoft / Apple / Amazon)", answer: "google" },
                { type: "tf", question: "Python was named after the snake, because Guido loved reptiles.", answer: "false" },
                { type: "tf", question: "The Zen of Python states that Readability counts -- code should be easy to understand.", answer: "true" },
                { type: "tf", question: "You should learn Python 2 in 2024 because it is more stable than Python 3.", answer: "false" },
                { type: "tf", question: "Instagram's backend is built using Python (Django framework).", answer: "true" },
                { type: "short", question: "In your own words, explain why Python is considered a great first programming language for beginners.", sampleAnswer: "Python is considered great for beginners because its syntax is designed to be as close to plain English as possible, making code easy to read and write. Unlike languages like C++ or Java that require a lot of boilerplate code and explicit type declarations, Python lets you express ideas with minimal symbols. This means beginners can focus on learning programming concepts (logic, problem-solving) rather than getting stuck on complex syntax rules." }
            ]
        },

        scenario: "Write a program that prints a short introduction about yourself as a Python learner. It should print your name and one interesting fact about you.",
        hint: "Use the print() function with text inside quotes. Example: print(\"My name is Doraemon\")",
        wrongHint: "Check your spelling of print() and make sure your text is inside quotes!",
        solution: 'print("My name is Doraemon")\nprint("I am learning Python!")',
        starterCode: '# Write a program that introduces yourself in Python\n# Use print() to display your name and something about you\n\n# Example:\n# print("My name is Doraemon")\n# print("I am learning Python!")\n\n'
    }
];`

const newContent = c + ',\n' + level4;
fs.writeFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', newContent);
console.log('Written!');

// Verify
const verifyCode = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');
const ctx = vm.createContext({ window: {} });
try {
    new vm.Script(verifyCode).runInContext(ctx);
    const lv = ctx.window.levels;
    console.log('Levels:', lv.length);
    console.log('L4 title:', lv[3].title);
    console.log('L4 sections:', lv[3].sections);
    console.log('L4 coding:', !!lv[3].scenario);
} catch(e) {
    console.error('Parse error:', e.message);
    // Show where
    const m = e.message.match(/at position (\d+)/);
    if (m) console.log('Around:', JSON.stringify(verifyCode.slice(parseInt(m[1])-30, parseInt(m[1])+30)));
}