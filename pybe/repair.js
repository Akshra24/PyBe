const fs = require('fs');

// Read current broken file
let c = fs.readFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', 'utf8');
let lines = c.split('\n');

console.log('Before: Lines', lines.length, '| Chars', c.length);
console.log('Line 224:', lines[223].slice(-60));
console.log('Line 225:', lines[224].trim().slice(0, 80));

// Keep only lines 1-224 (0-indexed: 0-223)
// Line 224 should end with Level 4 body backtick
// But Level 4 object (description, qna, test, coding sections) needs to be closed properly
// After line 224 (which ends with `), we need:
//         },
//
//         qna: [...],
//
//         test: {...},
//
//         scenario: "...",
//         hint: "...",
//         wrongHint: "...",
//         solution: "..." + "\n" + "...",
//         starterCode: "..."
//     }
// ];

const goodContent = lines.slice(0, 224).join('\n');

// Now append Level 4's closing: qna, test, coding sections + close object
// First check what's at end of line 224
const lastLine = lines[223];
console.log('Last line ends with:', JSON.stringify(lastLine.slice(-20)));

// If line 224 ends with ` then description is not closed yet
// We need to add:        },
//
//        qna: [...],
// ... etc.

const level4Closing = `        },

        qna: [
            { q: "Who created Python and why was it named Python?", a: "Python was created by <strong>Guido van Rossum</strong> in 1991 during a holiday at CERN in Amsterdam. The name comes from <em>Monty Python's Flying Circus</em> -- Guido's favourite comedy show. Not the snake!" },
            { q: "What does BDFL mean and why was it important for Python?", a: "BDFL stands for <strong>Benevolent Dictator For Life</strong> -- an informal title for Guido van Rossum, who had the final say on Python's design decisions for nearly 30 years. This ensured consistent, thoughtful evolution of the language without endless debates slowing it down. He stepped down in 2018." },
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
        hint: 'Use the print() function with text inside quotes. Example: print("My name is Doraemon")',
        wrongHint: "Check your spelling of print() and make sure your text is inside quotes!",
        solution: "print('My name is Doraemon')" + "\\n" + "print('I am learning Python!')",
        starterCode: "# Write a program that introduces yourself in Python\\n# Use print() to display your name and something about you\\n\\n# Example:\\n# print(\\"My name is Doraemon\\")\\n# print(\\"I am learning Python!\\")\\n"
    }
];`;

const finalContent = goodContent + '\n' + level4Closing;

fs.writeFileSync('C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', finalContent);
console.log('\nAfter: Lines', finalContent.split('\n').length, '| Chars', finalContent.length);

// Verify
const { execSync } = require('child_process');
try {
    execSync('node --check C:/Users/akshra/.openclaw/workspace/pybe/js/levels_data.js', { stdio: 'pipe' });
    console.log('PASS: File is syntactically valid!');
} catch(e) {
    console.log('FAIL:', e.stderr ? e.stderr.toString() : e.message);
}