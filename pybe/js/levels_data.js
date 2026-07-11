window.levels = [
    {
        "id": 1,
        "title": "What is Programming?",
        "concept": "Understanding the foundation of all software",
        "sections": [
            "description",
            "qna",
            "test"
        ],
        "description": {
            "heading": "What is Programming?",
            "subheading": "The language computers understand",
            "body": "<p>Programming is the art of writing instructions that a computer can understand and follow. These instructions are written in a <strong>programming language</strong> -- a structured way to communicate with a machine.</p>\n<p>Think of it like this: a recipe tells a cook how to make a dish. A program tells a computer how to accomplish a task. Both need the right ingredients, the right steps, and the right order.</p>\n<p>Python is one such language -- designed to be readable, beginner-friendly, and incredibly powerful. It's used everywhere: websites, AI, games, apps, data science, and more!</p>"
        },
        "qna": [
            {
                "q": "What is a programming language?",
                "a": "A programming language is a notation that humans can read and write, but computers can also understand and execute. Just like humans need English or Hindi to communicate with each other, programmers need a programming language like Python to communicate with computers."
            },
            {
                "q": "Why is Python recommended for beginners?",
                "a": "Python was designed to read almost like English. Its syntax (grammar rules) are simple and clean. Where other languages might use confusing symbols, Python uses simple keywords like <code>print()</code>. This makes it one of the easiest languages to learn as a beginner."
            },
            {
                "q": "What does 'writing code' actually mean?",
                "a": "Writing code means typing out instructions in a programming language. These instructions tell the computer what to do step by step. Once written, the code can be saved as a file and run whenever needed."
            },
            {
                "q": "What can you build with Python?",
                "a": "Pretty much anything! Websites (Instagram, YouTube), AI and machine learning systems, data analysis tools, games, automation scripts, mobile apps, and much more. Python is a general-purpose language -- it can do almost anything."
            },
            {
                "q": "Do I need to be good at math to code?",
                "a": "Not at all! Programming is more about <strong>logical thinking</strong> and <strong>problem solving</strong> than math. For most beginner Python, you just need basic arithmetic. The computer handles the complex calculations -- you just tell it what to calculate!"
            }
        ],
        "test": {
            "intro": "Let's test what you've learned about programming!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is a programming language?",
                    "options": [
                        "A language to speak to humans",
                        "A language to write instructions for a computer",
                        "A type of spoken language like English or Hindi",
                        "A setting on your phone"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which of these best describes a computer program?",
                    "options": [
                        "A painting",
                        "A recipe with precise steps",
                        "A musical instrument",
                        "A video recording"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Why does a computer need a program to do anything useful?",
                    "options": [
                        "It doesn't -- computers can think on their own",
                        "Because without instructions it doesn't know what to do",
                        "Because programs make computers faster",
                        "Computers only understand drawings"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What makes Python good for beginners?",
                    "options": [
                        "It's the most complex programming language",
                        "It looks like English and is easy to read",
                        "It only works on expensive computers",
                        "It requires no instructions at all"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The set of grammar rules in a programming language is called its _____. (syntax / vocabulary / voice / font) (syntax / nameerror / syntaxerror / typeerror)",
                    "answer": "syntax"
                },
                {
                    "type": "fill",
                    "question": "A complete set of instructions that tells a computer to accomplish a task is called a _____. (program / recipe / document / image) (syntax / program / readable / code)",
                    "answer": "program"
                },
                {
                    "type": "fill",
                    "question": "Python was designed to be _____ and easy to read. (complex / beautiful / readable / expensive) (program / readable / syntax / code)",
                    "answer": "readable"
                },
                {
                    "type": "fill",
                    "question": "A single instruction written in a programming language is called _____. (code / music / art / speech) (readable / program / code / syntax)",
                    "answer": "code"
                },
                {
                    "type": "tf",
                    "question": "A programming language is a way for humans to communicate with computers.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Python is used by companies like Google, NASA, and Netflix.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You need to be excellent at mathematics before you can start learning Python.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain in your own words why someone would choose Python over other programming languages to start learning.",
                    "sampleAnswer": "Python is chosen by beginners because its syntax (grammar) is simple and reads almost like plain English, making it easier to understand and write. It also has a huge community and is used in real-world applications, so learning it is practical and rewarding."
                }
            ]
        }
    },
    {
        "id": 2,
        "title": "How Code Works",
        "concept": "Compiler vs Interpreter -- how computers understand your instructions",
        "sections": [
            "description",
            "qna",
            "test"
        ],
        "description": {
            "heading": "How Code Works",
            "subheading": "From your idea to the computer's action",
            "body": "<p>When you write Python code, something fascinating happens behind the scenes. Your human-readable instructions don't go directly to the computer's brain (the CPU). Instead, they go through a <strong>translation process</strong> first.</p>\n\n<p>Python uses an <strong>interpreter</strong> -- a program that reads your code line by line and converts it into something the computer can execute, one instruction at a time. Think of it like having a live translator at a meeting: they translate each sentence as it's spoken, not the whole speech beforehand.</p>\n\n<h3>The Three-Step Process</h3>\n\n<div class=\"desc-callout\">\n<span class=\"callout-icon\">📝</span>\n<div><strong>Step 1 -- Write:</strong> You write Python source code in a <code>.py</code> file using plain English-like instructions.</div>\n</div>\n\n<div class=\"desc-callout\">\n<span class=\"callout-icon\">⚙️</span>\n<div><strong>Step 2 -- Interpret:</strong> Python reads your code. It first checks that your code follows Python's grammar rules (syntax). If there's a mistake, it stops and shows a <strong>SyntaxError</strong>.</div>\n</div>\n\n<div class=\"desc-callout\">\n<span class=\"callout-icon\">▶️</span>\n<div><strong>Step 3 -- Execute:</strong> Python runs your code line by line. If it meets a word it doesn't recognize (a variable that doesn't exist), it stops and shows a <strong>NameError</strong>.</div>\n</div>\n\n<h3>Python is Interpreted</h3>\n<p>Unlike languages like C or Java that are <strong>compiled</strong> (translated all at once before running), Python is <strong>interpreted</strong> -- it translates and runs one line at a time. This makes it slower than compiled languages, but also easier to test and debug because you can run code interactively.</p>\n\n<pre class=\"code-example\"># A simple Python program\nprint(\"Hello from Python!\")\n# Step 1: You write this\n# Step 2: Python interprets it\n# Step 3: Python executes it → prints: Hello from Python!</pre>\n\n<h3>Cross-Platform</h3>\n<p>Because Python handles the translation itself, your <code>.py</code> files can run on Windows, Mac, or Linux without any changes. Python's interpreter exists for all major operating systems, so the same code works everywhere!</p>"
        },
        "qna": [
            {
                "q": "What is the difference between a compiler and an interpreter?",
                "a": "A <strong>compiler</strong> translates your entire program into machine code (binary) <em>before</em> running it. A <strong>interpreter</strong> translates and executes your code <em>one line at a time</em>, in real time. Python uses an interpreter, which means it runs slower than compiled languages but is easier to test and debug."
            },
            {
                "q": "What is bytecode in Python?",
                "a": "When Python runs your code, it first compiles it into <strong>bytecode</strong> -- a low-level, platform-independent set of instructions for something called the Python Virtual Machine (PVM). This bytecode is then interpreted by the PVM. You won't see this file normally, but it exists in a <code>__pycache__</code> folder when you run a Python program."
            },
            {
                "q": "What is the Python Virtual Machine (PVM)?",
                "a": "The PVM is the part of Python that actually runs your code. After your source code is compiled to bytecode, the PVM reads that bytecode and executes it, one instruction at a time. It's called a 'virtual' machine because it's a program that behaves like a machine, but isn't physical hardware."
            },
            {
                "q": "What happens when Python encounters an error?",
                "a": "Python stops execution and shows an <strong>error message</strong> that tells you what went wrong and where. For example, a <strong>SyntaxError</strong> means your code doesn't follow Python's grammar rules (found <em>before</em> running). A <strong>NameError</strong> means Python saw a word it doesn't know (found <em>during</em> running). Errors tell you exactly what to fix."
            },
            {
                "q": "Why does Python need an interpreter and can't just run directly on the CPU?",
                "a": "The CPU only understands binary (0s and 1s). Python's interpreter acts as a bridge -- it translates your human-readable code into binary instructions that the CPU can execute. Without the interpreter, you'd have to write everything in binary, which would be nearly impossible for humans."
            }
        ],
        "test": {
            "intro": "Let's test your understanding of how code runs behind the scenes!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which of the following best describes how Python runs code?",
                    "options": [
                        "Python compiles the entire program to machine code before running it",
                        "Python translates code line-by-line and executes it in real time",
                        "Python sends your source code directly to the CPU",
                        "Python runs code only if it is saved as a .exe file"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is bytecode in Python?",
                    "options": [
                        "An encrypted version of your code for security",
                        "A low-level set of instructions for Python's Virtual Machine",
                        "Machine code that runs directly on the CPU",
                        "A type of Python variable"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Python's Virtual Machine (PVM) reads and executes _____, which is an intermediate step between source code and machine code. (syntax checking / interpreted / variable / bytecode)",
                    "answer": "bytecode"
                },
                {
                    "type": "fill",
                    "question": "The phase where Python checks your code for correct grammar before running it is called _____. (syntaxerror / nameerror / typeerror / syntax checking)",
                    "answer": "syntax checking"
                },
                {
                    "type": "fill",
                    "question": "A language that translates and executes code one line at a time, in real time, is called an _____ language. (bytecode / variable / interpreted / syntax checking)",
                    "answer": "interpreted"
                },
                {
                    "type": "tf",
                    "question": "Python first compiles your source code into bytecode, and then the Python Virtual Machine interprets that bytecode.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A compiler translates the entire program into machine code before execution, while an interpreter translates and executes one statement at a time.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Python can run the same .py file on Windows, Mac, and Linux without any changes.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Python is a purely interpreted language with no compilation step at all.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "A student writes print(Hello) and gets a NameError. Explain why this error occurred and what Python's interpreter did when it encountered it.",
                    "sampleAnswer": "Python raised a NameError because it tried to interpret Hello as a variable name, but no variable called Hello was defined. Without quotes, Python doesn't treat Hello as text -- it searches for something stored in memory with that name. Since it finds nothing, execution stops with a NameError."
                },
                {
                    "type": "short",
                    "question": "Why might a compiled language like C run faster than Python for the same task?",
                    "sampleAnswer": "C compiles directly to machine code that the CPU executes at full hardware speed with no translation layer. Python adds an extra step -- it compiles to bytecode first, then the Virtual Machine interprets that bytecode at runtime. This extra interpretation layer adds overhead and makes Python slower for CPU-intensive tasks."
                }
            ]
        }
    },
    {
        "id": 3,
        "title": "Beginner Doubts",
        "concept": "What is code, syntax, errors, and how software is built",
        "sections": [
            "description",
            "qna",
            "test"
        ],
        "description": {
            "heading": "Beginner Doubts -- Answered!",
            "subheading": "The stuff every beginner wonders but is afraid to ask",
            "body": "<p>You have questions. Good ones. Every developer -- even the best in the world -- started by asking exactly these same questions. Let's clear them all up, right now.</p>\n\n<h3>What is Code?</h3>\n<p><strong>Code</strong> is simply a set of written instructions that tell a computer what to do. Think of it like a recipe -- a recipe tells a cook what ingredients to use and in what order to mix them. Code tells a computer what steps to follow and in what order.</p>\n\n<p>Here's the important part: code is written in a <em>language</em> -- a structured notation that humans can read and write, but that a computer can also understand and follow. Python is one such language.</p>\n\n<div class=\"desc-callout\">\n<span class=\"callout-icon\">🧾</span>\n<div><strong>Code vs Program</strong><br>A single instruction is code. A complete, runnable set of instructions that accomplishes a task is called a <strong>program</strong>. When you write a Python file that can run and do something, you've built a program!</div>\n</div>\n\n<h3>What is Syntax?</h3>\n<p>Every language -- spoken or programming -- has <strong>syntax</strong>: a set of rules about how to write it correctly. In English, sentences need a subject and a verb to make sense. In Python, <code>print(\"Hello\")</code> is correct syntax -- but <code>print Hello</code> is not.</p>\n\n<pre class=\"code-example\"># Valid Python syntax\nprint(\"Hello, Doraemon!\")\n\n# Invalid Python syntax\nprint Hello      # NameError\nprint \"Hello\"    # SyntaxError</pre>\n\n<h3>What are Errors?</h3>\n<p>An <strong>error</strong> is Python's way of saying \"I understood what you wrote, but something went wrong.\" Errors are not failures -- they are Python communicating with you. Learning to read them is one of the most important skills you'll develop.</p>\n\n<div class=\"desc-grid\">\n<div class=\"desc-card\"><span class=\"desc-card-icon\">🔴</span><h4>SyntaxError</h4><p>Your code broke Python's grammar rules. Python catches this <em>before</em> running anything.</p></div>\n<div class=\"desc-card\"><span class=\"desc-card-icon\">🟡</span><h4>NameError</h4><p>Python searched its memory for a variable name but couldn't find it.</p></div>\n<div class=\"desc-card\"><span class=\"desc-card-icon\">🟠</span><h4>TypeError</h4><p>You asked Python to do something impossible with a data type -- like adding text to a number.</p></div>\n<div class=\"desc-card\"><span class=\"desc-card-icon\">🔵</span><h4>LogicError</h4><p>Your code runs perfectly but gives the wrong result. The trickiest kind -- Python can't detect it!</p></div>\n</div>\n\n<h3>How are Apps, Websites, and Software Built?</h3>\n<p>Every app, website, and software system has two main parts:</p>\n\n<div class=\"desc-callout\">\n<span class=\"callout-icon\">🌐</span>\n<div><strong>Frontend</strong> -- What the user sees and interacts with. Built with HTML, CSS, and JavaScript. Python is <em>not</em> typically used here.</div>\n</div>\n\n<div class=\"desc-callout callout-highlight\">\n<span class=\"callout-icon\">⚙️</span>\n<div><strong>Backend</strong> -- The invisible engine. Handles data, logic, and decisions. Built with Python, Java, Node.js, and more. This is where Python shines.</div>\n</div>\n\n<div class=\"desc-callout\">\n<span class=\"callout-icon\">🗄️</span>\n<div><strong>Database</strong> -- Where data is stored. Think of it like a digital filing cabinet. Examples: MySQL, PostgreSQL, MongoDB.</div>\n</div>\n\n<h3>Who Uses Python in the Real World?</h3>\n\n<ul class=\"desc-list\">\n<li><strong>Instagram</strong> -- Built with Python for its backend simplicity and speed of development</li>\n<li><strong>Netflix</strong> -- Uses Python for its recommendation engine and server-side logic</li>\n<li><strong>NASA</strong> -- Uses Python for scientific computing and mission control systems</li>\n<li><strong>Spotify</strong> -- Uses Python for data analysis and backend services</li>\n</ul>\n\n<div class=\"desc-callout\">\n<span class=\"callout-icon\">🤖</span>\n<div><strong>Doraemon's tip:</strong> Every expert was once a beginner who asked \"dumb\" questions. The only dumb question is the one you didn't ask. Keep asking!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is the difference between 'code' and a 'program'?",
                "a": "Code is any single instruction or line of written instructions for a computer. A <strong>program</strong> is a complete, organized set of code that can be executed to accomplish a meaningful task. Think of code as words and a program as a full sentence -- you need complete, structured code to have a working program."
            },
            {
                "q": "What is syntax and why does it matter?",
                "a": "Syntax is the set of grammar rules that govern how a programming language must be written. Python's syntax is designed to be readable, but it still has strict rules. For example, parentheses <code>()</code> must match, quotes <code>\"\"</code> must be balanced, and colons <code>:</code> must follow <code>if</code> and <code>def</code> statements. If you break the rules, Python raises a <strong>SyntaxError</strong> and refuses to run your code until you fix it."
            },
            {
                "q": "What's the difference between a bug and an error?",
                "a": "An <strong>error</strong> when Python stops and tells you something went wrong (SyntaxError, NameError, TypeError, etc.). A <strong>bug</strong> is a broader term -- it means your code runs but does something wrong or unexpected. Logic errors are bugs. Not every bug causes an error message! The hardest bugs to fix are the ones where Python runs your code perfectly but produces the wrong result."
            },
            {
                "q": "How are websites actually built? What does Python have to do with them?",
                "a": "Most websites have two parts: <strong>frontend</strong> (what you see -- buttons, text, images) built with HTML, CSS, and JavaScript, and <strong>backend</strong> (server-side logic -- handling logins, data, recommendations) which can be built with Python. When you log into Instagram, Python handles your login on the server. Python is rarely used for the visual part of a website, but it's very often used behind the scenes."
            },
            {
                "q": "Why does my code sometimes run without errors but give wrong answers?",
                "a": "This is called a <strong>logic error</strong> -- the most difficult kind of bug to find. Python successfully interpreted and ran every line of code without any problem, so no error was raised. But your logic was wrong -- maybe you used <code>+</code> when you needed <code>-</code>, or you wrote the wrong condition. Python can't detect this because technically your code is valid -- it just doesn't do what you intended. This is why testing your code and thinking through your logic carefully is so important."
            }
        ],
        "test": {
            "intro": "Time to test your understanding of code, syntax, errors, and how software is built!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the difference between code and a program?",
                    "options": [
                        "There is no difference -- they mean the same thing",
                        "Code is a single instruction; a program is a complete, runnable set of code",
                        "A program is a single line; code is a collection of programs",
                        "Code runs on the frontend; programs run on the backend"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is syntax in programming?",
                    "options": [
                        "The logic and flow of a program",
                        "The set of grammar rules for writing code correctly",
                        "The error messages Python shows when something goes wrong",
                        "The way a program stores data"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "A LogicError occurs when:",
                    "options": [
                        "Python finds a grammatical mistake in your code",
                        "Python cannot find a variable name you used",
                        "Your code runs without errors but gives the wrong result",
                        "Python tries to add a number to a word"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The part of a website that you actually see and interact with is called the _____. (frontend / backend / database / server) (database / server / backend / frontend)",
                    "answer": "frontend"
                },
                {
                    "type": "fill",
                    "question": "When Python checks your code for grammatical correctness before running it, this is called _____. (compiling / syntax checking / debugging / rendering) (syntaxerror / nameerror / typeerror / syntax checking)",
                    "answer": "syntax checking"
                },
                {
                    "type": "fill",
                    "question": "A bug where your code runs without crashing but produces the wrong output is called a _____ error. (syntax / runtime / logic / type) (syntax checking / backend / frontend / logic)",
                    "answer": "logic"
                },
                {
                    "type": "fill",
                    "question": "Python is most commonly used in the _____ part of a web application. (frontend / backend / database / browser UI) (backend / server / frontend / database)",
                    "answer": "backend"
                },
                {
                    "type": "tf",
                    "question": "A SyntaxError is raised when Python finds a grammatical mistake in your code, before the program starts running.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A NameError occurs when Python searches for a variable name in its memory but cannot find it.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Python is the language used to build the visual interface (buttons, text, images) of websites like Instagram.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Google, Netflix, NASA, and Spotify all use Python in their backend systems.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "A student's code runs without any error messages, but it prints the wrong answer. Explain why this happened and what type of error it is.",
                    "sampleAnswer": "This is a Logic Error -- the most difficult type of bug to find. Python successfully interpreted and executed every line of code without any problem, so no error was raised. However, the logic of the code was incorrect -- perhaps a wrong operator was used, or a condition was written incorrectly. Python cannot detect logic errors because it follows the code exactly as written, even if the result is wrong. The student needs to review the logic of their program carefully."
                }
            ]
        }
    },
    {
        "id": 4,
        "title": "Introduction to Python",
        "concept": "Why Python? History of Guido van Rossum and the Python story",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Introduction to Python",
            "subheading": "Why one language took over the world of programming",
            "body": "<p>Python is one of the most popular programming languages in the world today. But it did not start in a corporate lab -- it was created by a single person who wanted to make programming fun and accessible. That person was <strong>Guido van Rossum</strong>.</p><h3>The Birth of Python -- 1989</h3><p>During a relaxed holiday week at CERN (the European Organization for Nuclear Research) in Amsterdam, Guido van Rossum was looking for a hobby project. He had been working on a language called ABC at CWI (Centrum Wiskunde & Informatica), and he wanted to create something even better.</p><p>He named it <strong>Python</strong> -- not after the snake, but after <em>Monty Python's Flying Circus</em>, a British comedy TV show he loved. This set the tone for Python from the very beginning: it was supposed to be fun.</p><div class=\"desc-callout\"><span class=\"callout-icon\">🎬</span><div><strong>Why Python and not ABC?</strong><br>Guido wanted a short, unique, and slightly mysterious name. He loved Monty Python and felt that the name reflected the language's core philosophy: programming should be enjoyable, not frustrating.</div></div><h3>Guido van Rossum -- The Creator</h3><p>Python was created by <strong>Guido van Rossum</strong> in 1991 during a holiday at CERN in Amsterdam. For over 25 years, he was Python's <strong>Benevolent Dictator For Life (BDFL)</strong> -- the final decision-maker on the language's design. He worked at Google, Dropbox, and eventually Microsoft, always continuing to shepherd Python's growth.</p><p>He retired as BDFL in 2018, passing Python's governance to the <strong>Python Steering Council</strong>. But his influence remains in every line of Python code written today.</p><h3>Python's Core Philosophy</h3><p>Python was designed around a set of guiding principles written in a document called <strong>The Zen of Python</strong> by Tim Peters. The most famous line is:</p><blockquote class=\"desc-callout callout-highlight\">Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Readability counts.</blockquote><p>Python prioritises making code <strong>readable</strong> -- your future self and other developers will thank you. This is why Python is often the first language taught in universities and coding bootcamps worldwide.</p><h3>Why Learn Python in 2024 and Beyond?</h3><div class=\"desc-grid\"><div class=\"desc-card\"><span class=\"desc-card-icon\">🤖</span><h4>AI & Machine Learning</h4><p>Python is the language of AI. TensorFlow, PyTorch, OpenAI, and every major AI library is built with Python.</p></div><div class=\"desc-card\"><span class=\"desc-card-icon\">🌐</span><h4>Web Development</h4><p>Django and Flask are powerful Python frameworks used by Instagram, Pinterest, and Spotify.</p></div><div class=\"desc-card\"><span class=\"desc-card-icon\">📊</span><h4>Data Science</h4><p>Pandas, NumPy, and Matplotlib make Python the data scientist's best friend.</p></div><div class=\"desc-card\"><span class=\"desc-card-icon\">🔧</span><h4>Automation</h4><p>Python can automate repetitive tasks -- file management, web scraping, Excel reports -- in just a few lines.</p></div></div><h3>Python 2 vs Python 3</h3><p>You might hear about Python 2 and Python 3. They are two different versions of the same language. Python 2 is <strong>officially dead</strong> (retired in 2020). Always learn <strong>Python 3</strong> -- it is the only version being actively developed and supported.</p><pre class=\"code-example\"># Python 2 (old, deprecated)\nprint \"Hello\"         # No parentheses needed\n\n# Python 3 (current)\nprint(\"Hello\")        # Parentheses required</pre><p>In this course, we use <strong>Python 3</strong> exclusively.</p><h3>Who Uses Python Today?</h3><ul class=\"desc-list\"><li><strong>Google</strong> -- Uses Python extensively across many services</li><li><strong>Netflix</strong> -- Recommendation engine, content delivery, and security</li><li><strong>NASA</strong> -- Mission control, simulations, and data analysis</li><li><strong>Instagram</strong> -- Entire backend infrastructure built on Django (Python)</li><li><strong>Spotify</strong> -- Backend services and data pipelines</li><li><strong>Dropbox</strong> -- Desktop client written in Python</li><li><strong>Disney</strong> -- Animation and visual effects pipelines</li></ul><div class=\"desc-callout\"><span class=\"callout-icon\">🤖</span><div><strong>Doraemon's tip:</strong> The best time to learn Python was 10 years ago. The second best time is right now. You are exactly where you need to be!</div></div>"
        },
        "qna": [
            {
                "q": "Who created Python and why was it named Python?",
                "a": "Python was created by <strong>Guido van Rossum</strong> in 1991 during a holiday at CERN in Amsterdam. The name comes from <em>Monty Python's Flying Circus</em> -- Guido's favourite comedy show. Not the snake!"
            },
            {
                "q": "What does BDFL mean and why was it important for Python?",
                "a": "BDFL stands for <strong>Benevolent Dictator For Life</strong> -- an informal title for Guido van Rossum, who had the final say on Python's design decisions for nearly 30 years. This ensured consistent, thoughtful evolution of the language without endless debates slowing it down. He stepped down in 2018."
            },
            {
                "q": "What is The Zen of Python and why does it matter?",
                "a": "The Zen of Python is a collection of guiding principles for writing Python code, written by Tim Peters and embedded in Python as an easter egg (<code>import this</code>). The core idea: <em>readable, simple, explicit code is better than clever, complex, confusing code.</em> This philosophy shapes every design decision in the language."
            },
            {
                "q": "Should I learn Python 2 or Python 3?",
                "a": "<strong>Python 3 only.</strong> Python 2 was officially retired on January 1, 2020 and receives no updates or security patches. All modern libraries, courses, and jobs use Python 3. It is not backward-compatible with Python 2."
            },
            {
                "q": "What makes Python different from languages like C++ or Java?",
                "a": "Python is <strong>interpreted</strong> (not compiled), <strong>dynamically typed</strong> (you do not declare variable types), and prioritises <strong>readability over ceremony</strong>. In C++ or Java, you write lots of boilerplate code. In Python, you write only what you need. Python is slower than compiled languages but far faster to write and easier to learn."
            }
        ],
        "test": {
            "intro": "Let's test your knowledge of Python's history, philosophy, and why it matters!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Who created Python?",
                    "options": [
                        "Elon Musk",
                        "Guido van Rossum",
                        "Linus Torvalds",
                        "Tim Cook"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Why was Python named Python?",
                    "options": [
                        "After the snake that lives in the Amazon",
                        "After Guido's favourite pet",
                        "After Monty Python's Flying Circus comedy show",
                        "It stands for Programming Through One"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What does BDFL stand for in the context of Python?",
                    "options": [
                        "Big Data Language Framework",
                        "Benevolent Dictator For Life",
                        "Binary Data Format Language",
                        "Basic Development Function Library"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Python was created in the year _____. (1989 / 1991 / 1995 / 2000) (2000 / 1989 / 1991 / 1995)",
                    "answer": "1991"
                },
                {
                    "type": "fill",
                    "question": "The set of guiding principles for Python's design is called the _____ of Python. (rules / guidelines / zen / philosophy) (1991 / zen / 2020 / google)",
                    "answer": "zen"
                },
                {
                    "type": "fill",
                    "question": "Python 2 was officially retired in the year _____. (2018 / 2019 / 2020 / 2021) (1995 / 1991 / 2020 / 1989)",
                    "answer": "2020"
                },
                {
                    "type": "fill",
                    "question": "The company where Guido van Rossum worked on Python's ecosystem is _____. (Google / Microsoft / Apple / Amazon) (2020 / zen / google / 1991)",
                    "answer": "google"
                },
                {
                    "type": "tf",
                    "question": "Python was named after the snake, because Guido loved reptiles.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The Zen of Python states that Readability counts -- code should be easy to understand.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You should learn Python 2 in 2024 because it is more stable than Python 3.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Instagram's backend is built using Python (Django framework).",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "In your own words, explain why Python is considered a great first programming language for beginners.",
                    "sampleAnswer": "Python is considered great for beginners because its syntax is designed to be as close to plain English as possible, making code easy to read and write. Unlike languages like C++ or Java that require a lot of boilerplate code and explicit type declarations, Python lets you express ideas with minimal symbols. This means beginners can focus on learning programming concepts (logic, problem-solving) rather than getting stuck on complex syntax rules."
                }
            ]
        },
        "scenario": "Write a program that prints a short introduction about yourself as a Python learner. It should print your name and one interesting fact about you.",
        "hint": "Use the print() function with text inside quotes. Example: print(\"My name is Doraemon\")",
        "wrongHint": "Check your spelling of print() and make sure your text is inside quotes!",
        "solution": "print('My name is Doraemon')\nprint('I am learning Python!')",
        "starterCode": "# Write a program that introduces yourself in Python\n# Use print() to display your name and something about you\n\n# Example:\n# print(\"My name is Doraemon\")\n# print(\"I am learning Python!\")\n"
    },
    {
        "id": 5,
        "title": "Installing Python",
        "concept": "Setup from Python Official Website",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Installing Python & Local Setup",
            "subheading": "Get Python running on your own computer",
            "body": "<p>To start writing and running Python programs on your computer, you need to install the Python software package. This is a simple process, but there is one critical step you must not skip!</p>\n\n<h3>Step 1 -- Download the Python Installer</h3>\n<p>Open your web browser and visit the official website: <a href=\"https://www.python.org\" target=\"_blank\">python.org</a>.</p>\n<ul class=\"desc-list\">\n    <li>Hover over the <strong>Downloads</strong> menu.</li>\n    <li>Click the download button for your operating system (it will say something like <strong>Download Python 3.x.x</strong> where x is the latest version).</li>\n</ul>\n\n<h3>Step 2 -- Run the Installer</h3>\n<p>Once downloaded, locate and run the installer file. You will see a window with options. Before clicking anything else, look at the bottom of the window:</p>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>CRITICAL STEP:</strong> Check the box that says <strong>\"Add python.exe to PATH\"</strong> (or <strong>\"Add Python to PATH\"</strong>). If you forget this, your computer's terminal won't recognize Python, and you will get errors later!</div>\n</div>\n\n<p>After checking that box, click <strong>\"Install Now\"</strong>. The installation will take a few moments.</p>\n\n<h3>Step 3 -- Verify the Installation</h3>\n<p>Once installation finishes, you can verify it by opening your system's Command Prompt (Windows) or Terminal (Mac/Linux) and typing:</p>\n\n<pre class=\"code-example\">python --version</pre>\n\n<p>Press Enter. If you see something like <code>Python 3.x.x</code> displayed, congratulations! Python is successfully installed and ready to use on your machine. 🎉</p>"
        }
    },
    {
        "id": 6,
        "title": "Running Python (IDLE, terminal, editor)",
        "concept": "Executing Python scripts in different environments",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Running Python",
            "subheading": "Interactive Shell vs Script Mode",
            "body": "<p>Once Python is installed, you need a place to write and run your code. There are three primary environments where developers write and execute Python code: <strong>IDLE</strong>, the <strong>Terminal</strong>, and <strong>Code Editors</strong> like VS Code.</p>\n\n<h3>1. IDLE (Python's Built-in Playground)</h3>\n<p>IDLE stands for <em>Interactive Development and Learning Environment</em>. It comes bundled with the official Python installation. IDLE offers two modes:</p>\n<ul class=\"desc-list\">\n    <li><strong>Interactive Shell:</strong> When you open IDLE, you see the Shell window. Type any Python statement and press Enter -- it runs instantly! It is perfect for trying out single lines of code.</li>\n    <li><strong>Editor Window:</strong> Click <em>File &rarr; New File</em>. This opens a text editor where you can write a multi-line program, save it as a <code>.py</code> file, and run it all at once by pressing <strong>F5</strong>.</li>\n</ul>\n\n<h3>2. The Terminal (Command Line)</h3>\n<p>To run Python from your command prompt (Windows) or terminal (Mac/Linux), you navigate to the folder containing your script and execute it using the python command:</p>\n\n<pre class=\"code-example\">python script.py</pre>\n\n<p>This runs the script in <strong>Script Mode</strong>. The interpreter reads the entire file, executes all instructions, and then exits.</p>\n\n<h3>3. Code Editors (VS Code, PyCharm)</h3>\n<p>While IDLE is good for beginners, professional developers use specialized editors like <strong>Visual Studio Code (VS Code)</strong>. These tools provide advanced features like syntax highlighting, auto-completion, error checkers, and integrated terminals, making writing complex software much easier.</p>\n\n<div class=\"desc-grid\">\n    <div class=\"desc-card\"><span class=\"desc-card-icon\">💻</span><h4>Shell Mode</h4><p>Runs code line-by-line instantly. Code is not saved.</p></div>\n    <div class=\"desc-card\"><span class=\"desc-card-icon\">📄</span><h4>Script Mode</h4><p>Saved in a <code>.py</code> file. Reusable and editable.</p></div>\n</div>"
        },
        "qna": [
            {
                "q": "What is IDLE in Python?",
                "a": "IDLE is Python's built-in <strong>Interactive Development and Learning Environment</strong>. It includes a Python Shell for executing commands instantly, and a basic editor for writing and saving Python script files."
            },
            {
                "q": "What is the difference between Interactive Shell and Script Mode?",
                "a": "<strong>Interactive Shell</strong> runs each line of code instantly as you press Enter, but it doesn't save your work. <strong>Script Mode</strong> involves writing code in a file, saving it as a <code>.py</code> file, and running the whole file at once. Script Mode allows you to save, edit, and share your programs."
            },
            {
                "q": "How do I run a Python file from my computer's terminal?",
                "a": "Open your system command prompt or terminal, navigate to the folder where your file is saved, and run the command <code>python filename.py</code> (or <code>python3 filename.py</code> on some systems)."
            },
            {
                "q": "Do I need an Internet connection to run Python code?",
                "a": "<strong>No.</strong> Python runs locally on your computer. Once installed, you can write and run Python scripts entirely offline."
            },
            {
                "q": "Why use VS Code if IDLE is already installed?",
                "a": "VS Code is a professional-grade editor. It offers features like autocompletion (IntelliSense), syntax highlighting, terminal integration, git version control, and plugins that make programming much faster and less error-prone than using basic IDLE."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of running Python scripts!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which of the following is Python's built-in development environment?",
                    "options": [
                        "VS Code",
                        "IDLE",
                        "PyCharm",
                        "Sublime Text"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the correct terminal command to execute a script named hello.py?",
                    "options": [
                        "run hello.py",
                        "python hello.py",
                        "exec hello.py",
                        "start hello.py"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which mode is best suited for writing a multi-line program that you want to save and run later?",
                    "options": [
                        "Interactive Shell Mode",
                        "Terminal Shell Mode",
                        "Script Mode",
                        "Direct CPU Mode"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "Python script files must be saved with the _____ file extension. (shell / variable / py / F5)",
                    "answer": "py"
                },
                {
                    "type": "fill",
                    "question": "In IDLE, you can run a saved script file by pressing the _____ key on your keyboard. (F1 / F5 / Tab / Enter) (shell / py / F5 / Variable)",
                    "answer": "F5"
                },
                {
                    "type": "fill",
                    "question": "The environment that runs code line-by-line instantly but doesn't save it is called the interactive _____. (shell / F5 / variable / py)",
                    "answer": "shell"
                },
                {
                    "type": "tf",
                    "question": "Code written directly inside the IDLE shell is saved automatically when you close the window.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "VS Code is an editor that can run Python files, but Python itself must still be installed on your system.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You must have an active internet connection to run a python script locally.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the difference between writing code in Python's interactive shell versus script mode.",
                    "sampleAnswer": "Interactive shell mode runs commands line-by-line instantly and is perfect for quick testing, but it does not save your code. Script mode allows you to write, edit, and save your code in a .py file, executing the entire set of instructions at once. Script mode is used for building actual programs that you want to run repeatedly."
                }
            ]
        },
        "scenario": "Write a program that prints 'IDLE is ready' on the first line and 'Terminal is ready' on the second line.",
        "hint": "Use two separate print() functions, one for each line.",
        "wrongHint": "Make sure you print 'IDLE is ready' on the first line and 'Terminal is ready' on the second line exactly!",
        "solution": "print('IDLE is ready')\nprint('Terminal is ready')",
        "starterCode": "# Print 'IDLE is ready' on the first line and 'Terminal is ready' on the second line\n"
    },
    {
        "id": 7,
        "title": "Writing first program -> print()",
        "concept": "Outputting messages to the console using the print() function",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Writing Your First Program",
            "subheading": "Saying hello to the computer",
            "body": "<p>Every programming journey begins with a classic program: printing a message to the screen. In Python, this is done using the <strong><code>print()</code></strong> function.</p>\n\n<h3>Anatomy of a print() Statement</h3>\n<p>To print text, you write the function name <code>print</code>, followed by parentheses, and put the text inside quotation marks:</p>\n\n<pre class=\"code-example\">print(\"Hello, World!\")</pre>\n\n<p>Let's break down the rules of this instruction:</p>\n<ul class=\"desc-list\">\n    <li><strong>print:</strong> This is the name of the function. It must be written in all <strong>lowercase</strong>. Python is case-sensitive, so writing <code>Print()</code> or <code>PRINT()</code> will result in an error.</li>\n    <li><strong>Parentheses ():</strong> These tell Python to run the function. Anything you want to print must go inside these brackets.</li>\n    <li><strong>Quotes \"\":</strong> Text inside quotes is known as a <strong>string</strong>. You can use double quotes (<code>\"</code>) or single quotes (<code>'</code>), as long as they match. For example, <code>print('Hello!')</code> is perfect, but <code>print(\"Hello')</code> is a syntax error.</li>\n</ul>\n\n<h3>Printing Numbers</h3>\n<p>Unlike text, numbers do not require quotation marks. You can print them directly or even print the result of math calculations:</p>\n\n<pre class=\"code-example\">print(42)        # Prints the number 42\nprint(10 + 5)    # Calculates and prints: 15\nprint(\"10 + 5\")  # Prints the literal text: 10 + 5</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Case Sensitivity:</strong> Python is very strict! Writing <code>Print(\"Hello\")</code> causes a <strong>NameError</strong> because Python does not recognize the word with a capital 'P'. Always use lowercase!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What does the print() function do?",
                "a": "The <code>print()</code> function takes whatever data is inside its parentheses and displays it on the output console screen."
            },
            {
                "q": "Is there any difference between double quotes and single quotes in print()?",
                "a": "No, they work exactly the same way in Python for writing text (strings). You can use either <code>\"Hello\"</code> or <code>'Hello'</code>. However, you must be consistent and use the same type of quote at both the start and end of the string."
            },
            {
                "q": "Why do I get an error when I write Print(\"Hello\")?",
                "a": "Python is a **case-sensitive** language, meaning capital letters and lowercase letters are treated as completely different things. Python only knows the lowercase command <code>print</code>. Capitalized <code>Print</code> will make Python search for a variable or function that hasn't been defined, causing a **NameError**."
            },
            {
                "q": "How can I print a blank line?",
                "a": "You can simply call <code>print()</code> with nothing inside the parentheses. This will output an empty line."
            },
            {
                "q": "Why do numbers not need quotes inside print()?",
                "a": "In programming, text and numbers are different **data types**. Text is represented as strings and needs quotes so Python knows where it starts and ends. Numbers are mathematical values and don't need quotes; this also allows Python to do calculations inside the function, like <code>print(5 + 3)</code>."
            }
        ],
        "test": {
            "intro": "Let's test your understanding of Python's print() function!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which of the following is the correct syntax to output Hello in Python?",
                    "options": [
                        "print(Hello)",
                        "print 'Hello'",
                        "print(\"Hello\")",
                        "Print(\"Hello\")"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What error will you get if you capitalize the 'P' in Print(\"Hi\")?",
                    "options": [
                        "SyntaxError",
                        "NameError",
                        "TypeError",
                        "ValueError"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does print(\"5 + 5\") output?",
                    "options": [
                        "10",
                        "5 + 5",
                        "Error",
                        "nothing"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Python is _____ -- meaning print() and Print() are treated as completely different instructions. (variable / parentheses / string / case-sensitive)",
                    "answer": "case-sensitive"
                },
                {
                    "type": "fill",
                    "question": "The brackets () after the word print are called _____. (parentheses / semicolon / colon / comma)",
                    "answer": "parentheses"
                },
                {
                    "type": "fill",
                    "question": "In Python, a sequence of characters inside quotation marks is called a _____. (case-sensitive / string / variable / parentheses)",
                    "answer": "string"
                },
                {
                    "type": "tf",
                    "question": "print('Welcome') and print(\"Welcome\") are both valid statements in Python.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The statement print(20 + 30) will print the text '20 + 30' on the screen.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "In Python 3, the parentheses after print are optional.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain why print(\"Hello') causes an error, and how you would fix it.",
                    "sampleAnswer": "This causes a SyntaxError because the starting quote is a double quote (\") but the ending quote is a single quote ('). Quotation marks must match. To fix it, make both quotes either double quotes: print(\"Hello\") or both single quotes: print('Hello')."
                }
            ]
        },
        "scenario": "Write a program that prints 'Hello, Doraemon!' to the console.",
        "hint": "Use the print() function in lowercase, and put 'Hello, Doraemon!' exactly inside quotation marks.",
        "wrongHint": "Make sure you print 'Hello, Doraemon!' with a capital H and D, and the exclamation mark at the end!",
        "solution": "print('Hello, Doraemon!')",
        "starterCode": "# Write a program that prints 'Hello, Doraemon!' to the console\n"
    },
    {
        "id": 8,
        "title": "Comments and why comments matter",
        "concept": "Using '#' to document your Python code and prevent line execution",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Comments in Python",
            "subheading": "Writing notes for humans inside your code",
            "body": "<p>As programs grow larger, understanding what the code does becomes more difficult. To help humans read and maintain code, Python allows you to write <strong>comments</strong>.</p>\n\n<h3>What is a Comment?</h3>\n<p>A comment is a line or part of a line in your source code that is completely ignored by the Python interpreter. When Python runs your program, it skips right over comments. They are strictly for programmers to read.</p>\n\n<h3>How to Write a Comment</h3>\n<p>In Python, single-line comments start with the hash symbol (<strong><code>#</code></strong>). Everything to the right of the <code>#</code> on that line is treated as a comment:</p>\n\n<pre class=\"code-example\"># This is a full-line comment\nprint(\"Hello, World!\")  # This is an inline comment</pre>\n\n<h3>Why Do Comments Matter?</h3>\n<p>Comments are vital for two main reasons:</p>\n<ul class=\"desc-list\">\n    <li><strong>Documentation:</strong> Explaining *why* code was written in a certain way. This is incredibly helpful when you (or other team members) review the code months later.</li>\n    <li><strong>Debugging (Commenting Out Code):</strong> If you want to test your program without running a specific line, you can place a <code>#</code> in front of it. Python will skip it without you having to delete the line!</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>No Multi-line Comment Syntax:</strong> Unlike languages like Java or CSS that use <code>/* ... */</code>, Python does not have a special symbol for multi-line comments. You must write a <code>#</code> at the start of every single comment line!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a comment in Python?",
                "a": "A comment is a note written inside the source code for human readers. Python's interpreter ignores comments completely when executing the script."
            },
            {
                "q": "How do you write a comment in Python?",
                "a": "Start the comment with a hash symbol (<code>#</code>). Everything following the <code>#</code> on that line will be treated as a comment and ignored by Python."
            },
            {
                "q": "What is an inline comment?",
                "a": "An inline comment is a comment placed on the same line as a code statement, following the code itself. For example: <code>print(\"Hi\") # displays greeting</code>."
            },
            {
                "q": "What does 'commenting out' code mean?",
                "a": "It means placing a <code>#</code> symbol at the beginning of a line of code to temporarily disable it. This tells Python to ignore the line during execution, which is helpful when debugging or trying out different solutions without deleting your code."
            },
            {
                "q": "Does Python have a multi-line comment symbol?",
                "a": "No. Python does not have a dedicated multi-line comment syntax. To write multi-line comments, you must put a <code>#</code> at the start of each line. Alternatively, you can use triple-quoted strings (<code>\"\"\"</code>) that are not assigned to a variable, but using <code>#</code> is the standard convention."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python comments!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which character is used to start a comment in Python?",
                    "options": [
                        "//",
                        "/*",
                        "#",
                        "--"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What does the Python interpreter do when it encounters a comment?",
                    "options": [
                        "Prints it on the screen",
                        "Checks it for syntax errors",
                        "Ignores it completely",
                        "Converts it into a variable name"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Which of the following is a valid inline comment?",
                    "options": [
                        "# print(\"Hi\")",
                        "print(\"Hi\") # prints a message",
                        "/* print(\"Hi\") */",
                        "print(\"Hi\") // prints a message"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "In Python, you can write a comment by placing the _____ character at the start of the line. (commenting / hash / humans / variable)",
                    "answer": "hash"
                },
                {
                    "type": "fill",
                    "question": "Adding a hash symbol in front of a line of code to temporarily disable it is called _____ out code. (commenting / variable / hash / humans)",
                    "answer": "commenting"
                },
                {
                    "type": "fill",
                    "question": "Comments are written for _____ to read, not the computer interpreter. (variable / humans / commenting / hash)",
                    "answer": "humans"
                },
                {
                    "type": "tf",
                    "question": "Everything written to the right of a # character on any line is ignored by the Python interpreter.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Python supports multi-line comments using the /* and */ symbols.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "An inline comment must be placed before the code statement on the same line.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain two reasons why developers write comments in their programs.",
                    "sampleAnswer": "Developers write comments to document their code (explaining why a block of code does something for future developers or their future self) and to debug code (commenting out specific statements temporarily to isolate errors without deleting the lines)."
                }
            ]
        },
        "scenario": "Write a program that contains a comment saying 'This is a comment' on the first line, and prints 'Doraemon loves dorayaki!' on the second line.",
        "hint": "Start the first line with '# This is a comment'. On the second line, write a print() function printing the exact message.",
        "wrongHint": "Make sure you have the comment '# This is a comment' exactly on line 1, and print 'Doraemon loves dorayaki!' on line 2!",
        "solution": "# This is a comment\nprint('Doraemon loves dorayaki!')",
        "starterCode": "# Write a comment on line 1 and print the message on line 2\n"
    },
    {
        "id": 9,
        "title": "Variables introduction",
        "concept": "What is a variable and how to assign values to them in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Variables in Python",
            "subheading": "Storing values in your program's memory",
            "body": "<p>To write useful programs, we need a way to store data so we can reuse and modify it later. In programming, we do this using <strong>variables</strong>.</p>\n\n<h3>What is a Variable?</h3>\n<p>A variable is a labeled storage box inside your computer's memory. You can store values (like text or numbers) in this box, change the contents whenever you want, and reference it by its label name.</p>\n\n<h3>Variable Assignment (=)</h3>\n<p>In Python, you create a variable and give it a value using the assignment operator (<strong><code>=</code></strong>):</p>\n\n<pre class=\"code-example\">pocket = \"Anywhere Door\"\nscore = 99</pre>\n\n<p>This tells Python:</p>\n<ul class=\"desc-list\">\n    <li>Create a memory box and label it <code>pocket</code>. Store the text <code>\"Anywhere Door\"</code> inside it.</li>\n    <li>Create another memory box and label it <code>score</code>. Store the number <code>99</code> inside it.</li>\n</ul>\n\n<h3>Using Variables</h3>\n<p>Once a variable is created, you can access its contents by writing its name (without quotation marks!):</p>\n\n<pre class=\"code-example\">message = \"Hello, Doraemon!\"\nprint(message)    # Prints: Hello, Doraemon!\nprint(\"message\")  # Prints the literal text: message</pre>\n\n<h3>Variable Reassignment</h3>\n<p>Variables are called \"variables\" because their values can vary. You can overwrite the old value in a variable by assigning it a new value at any time:</p>\n\n<pre class=\"code-example\">target = \"Apple\"\ntarget = \"Banana\"\nprint(target)  # Prints: Banana (the old value 'Apple' is replaced!)</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>No Declaration Needed:</strong> In languages like Java or C++, you have to state the variable type (like int or String) before using it. Python is dynamically typed -- you create a variable the exact moment you assign a value to it!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a variable?",
                "a": "A variable is a named location in a computer's memory used to store data. You can think of it as a labeled container that holds a value for later use."
            },
            {
                "q": "How do you store a value inside a variable in Python?",
                "a": "You use the assignment operator (<code>=</code>). Write the variable name on the left side, the <code>=</code> in the middle, and the value you want to store on the right side. For example: <code>age = 10</code>."
            },
            {
                "q": "What is the difference between print(name) and print(\"name\")?",
                "a": "<code>print(name)</code> looks up a variable named <code>name</code> in memory and outputs whatever value is stored inside it. <code>print(\"name\")</code> is a literal string -- it will output the actual characters 'name' directly."
            },
            {
                "q": "Can you change the value of a variable once it is created?",
                "a": "Yes. This is called <strong>reassignment</strong>. If you write <code>x = 5</code> and then write <code>x = 10</code>, Python overwrites the old value (5) with the new value (10)."
            },
            {
                "q": "Do I need to specify what type of data a variable holds?",
                "a": "No. Python automatically detects whether you are storing text, integers, decimals, or booleans. You don't need to declare data types beforehand."
            }
        ],
        "test": {
            "intro": "Let's test your knowledge of variables in Python!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which operator is used to assign a value to a variable?",
                    "options": [
                        "==",
                        "=",
                        "->",
                        "+="
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What will the following code print?\n\ntoy = \"Bamboo Copter\"\nprint(\"toy\")",
                    "options": [
                        "Bamboo Copter",
                        "toy",
                        "Error",
                        "nothing"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What will the following code output?\n\nx = 100\nx = 200\nprint(x)",
                    "options": [
                        "100",
                        "200",
                        "300",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The symbol '=' used to store a value in a variable is called the _____ operator. (name / memory / assignment / variable)",
                    "answer": "assignment"
                },
                {
                    "type": "fill",
                    "question": "If you try to print a variable that hasn't been created yet, Python raises a _____Error. (typeerror / syntaxerror / name / nameerror)",
                    "answer": "name"
                },
                {
                    "type": "fill",
                    "question": "Variables are stored in the computer's _____ while your program runs. (name / memory / variable / assignment)",
                    "answer": "memory"
                },
                {
                    "type": "tf",
                    "question": "You must declare a variable's data type (like string or integer) before assigning a value in Python.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "A variable name can only hold letters and cannot store numbers.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The statement count = 10 overwrites any previous value stored in count.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain what variable reassignment is and what happens to the old value.",
                    "sampleAnswer": "Variable reassignment is when you assign a new value to a variable that already exists. Python overwrites the old value in memory with the new value, making the old value lost and inaccessible."
                }
            ]
        },
        "scenario": "Create a variable named 'my_gadget' and assign the value 'Bamboo Copter' to it. Then, print the variable 'my_gadget' to the console.",
        "hint": "On line 1, write 'my_gadget = \"Bamboo Copter\"'. On line 2, write 'print(my_gadget)' without quotation marks.",
        "wrongHint": "Make sure you assign the variable 'my_gadget' the exact text 'Bamboo Copter', and print it without quotes!",
        "solution": "my_gadget = 'Bamboo Copter'\nprint(my_gadget)",
        "starterCode": "# Create a variable named my_gadget and print its value\n"
    },
    {
        "id": 10,
        "title": "Rules for naming variables",
        "concept": "Valid and invalid variable names in Python (naming conventions)",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Rules for Naming Variables",
            "subheading": "How to avoid SyntaxErrors in Python naming",
            "body": "<p>In Python, you can name your variables almost anything, but there are some strict rules you must follow. If you break these rules, Python will throw a <strong>SyntaxError</strong> and refuse to run your program.</p>\n\n<h3>The 5 Strict Naming Rules</h3>\n<div class=\"desc-grid\">\n    <div class=\"desc-card\"><span class=\"desc-card-icon\">1️⃣</span><h4>Start Right</h4><p>Variable names must start with a letter (a-z, A-Z) or an underscore (<code>_</code>). They <strong>cannot start with a number</strong>.</p></div>\n    <div class=\"desc-card\"><span class=\"desc-card-icon\">2️⃣</span><h4>Only Safe Characters</h4><p>Names can only contain letters, numbers, and underscores (<code>a-z, A-Z, 0-9, _</code>). No spaces, dashes, or special symbols (like $, !, @, %) are allowed.</p></div>\n    <div class=\"desc-card\"><span class=\"desc-card-icon\">3️⃣</span><h4>No Keywords</h4><p>You cannot use Python's reserved keywords (like <code>if</code>, <code>else</code>, <code>while</code>, <code>for</code>, <code>def</code>, <code>import</code>) as variable names.</p></div>\n    <div class=\"desc-card\"><span class=\"desc-card-icon\">4️⃣</span><h4>Case Sensitive</h4><p>Capitalization matters! <code>myVar</code> and <code>myvar</code> are treated as two completely different variables.</p></div>\n</div>\n\n<h3>Examples: Valid vs Invalid</h3>\n<ul class=\"desc-list\">\n    <li><strong>Valid:</strong> <code>gadget</code>, <code>_pocket</code>, <code>score_1</code>, <code>doraemon_pocket</code></li>\n    <li><strong>Invalid:</strong> <code>1score</code> (starts with a number), <code>user age</code> (contains a space), <code>total-cost</code> (contains a hyphen), <code>class</code> (reserved keyword)</li>\n</ul>\n\n<h3>Python Naming Conventions</h3>\n<p>While not a strict rule, Python programmers follow a style guide called PEP 8. It recommends using <strong>snake_case</strong> for multi-word variables (all lowercase letters, with words separated by underscores):</p>\n\n<blockquote class=\"desc-callout callout-highlight\">\n    <strong>Best Practice Example:</strong> <code>dorayaki_count = 5</code> (snake_case)\n</blockquote>"
        },
        "qna": [
            {
                "q": "What characters are allowed in a Python variable name?",
                "a": "Variable names can only contain letters (a-z, A-Z), numbers (0-9), and underscores (<code>_</code>)."
            },
            {
                "q": "Can a variable name start with a number?",
                "a": "<strong>No.</strong> Variable names must start with a letter or an underscore. Starting a variable name with a number will result in a **SyntaxError**."
            },
            {
                "q": "Why can't I name a variable 'class' or 'if'?",
                "a": "Words like <code>class</code>, <code>if</code>, <code>else</code>, <code>def</code>, and <code>while</code> are <strong>reserved keywords</strong> in Python. The interpreter uses them to define the structure of the language, so you cannot re-use them as variable names."
            },
            {
                "q": "Is 'doraemonPocket' the same variable as 'doraemon_pocket'?",
                "a": "No. Not only do they use different symbols (underscores vs capital letters), but Python is case-sensitive. Even if you just capitalized one letter (e.g. <code>pocket</code> vs <code>Pocket</code>), Python would treat them as two completely separate boxes in memory."
            },
            {
                "q": "What is snake_case?",
                "a": "Snake case is a variable naming convention where all letters are lowercase and multiple words are joined by underscores (like <code>user_score_limit</code>). It is the recommended standard for Python variables."
            }
        ],
        "test": {
            "intro": "Let's test your understanding of Python variable naming rules!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which of the following is a VALID variable name in Python?",
                    "options": [
                        "user age",
                        "user-age",
                        "user_age",
                        "1user_age"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Why is '2_player' invalid as a variable name?",
                    "options": [
                        "It contains an underscore",
                        "It starts with a number",
                        "It is a Python reserved keyword",
                        "It is too short"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which of these is a reserved keyword that CANNOT be used as a variable name?",
                    "options": [
                        "pocket",
                        "print",
                        "while",
                        "doraemon"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The variable naming convention where words are separated by underscores is called _____ case. (underscore / syntax / variable / snake)",
                    "answer": "snake"
                },
                {
                    "type": "fill",
                    "question": "If you try to use an invalid variable name, Python raises a _____Error. (syntax / nameerror / syntaxerror / typeerror)",
                    "answer": "syntax"
                },
                {
                    "type": "fill",
                    "question": "Variable names can only start with a letter or the _____ character. (snake / syntax / variable / underscore)",
                    "answer": "underscore"
                },
                {
                    "type": "tf",
                    "question": "my_score and My_Score represent the exact same variable in Python.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "A variable name cannot contain spaces.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "_temp_value is a valid variable name in Python.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain why total-cost is an invalid variable name and how you would fix it using Python conventions.",
                    "sampleAnswer": "The variable total-cost is invalid because it contains a hyphen (-), which Python interprets as the subtraction operator. To fix it, you should replace the hyphen with an underscore to write total_cost, which follows Python's snake_case convention."
                }
            ]
        },
        "scenario": "Create a valid variable using snake_case named 'dorayaki_count' and assign it the number 5. Then, print 'dorayaki_count'.",
        "hint": "On line 1, write 'dorayaki_count = 5'. On line 2, write 'print(dorayaki_count)'.",
        "wrongHint": "Make sure you name the variable exactly 'dorayaki_count' in lowercase, assign it 5, and print it without quotes!",
        "solution": "dorayaki_count = 5\nprint(dorayaki_count)",
        "starterCode": "# Create the variable and print it\n"
    },
    {
        "id": 11,
        "title": "Data types (int, float, str, bool)",
        "concept": "Understanding basic data types in Python: integers, floats, strings, and booleans",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Basic Data Types",
            "subheading": "Integers, Floats, Strings, and Booleans",
            "body": "<p>In programming, computers don't just store generic values; they classify data into specific categories called <strong>data types</strong>. Knowing the data type tells Python what kind of value it is and what operations can be performed on it.</p>\n\n<h3>The 4 Core Data Types in Python</h3>\n<ul class=\"desc-list\">\n    <li><strong>Integer (<code>int</code>):</strong> Whole numbers without decimal points. They can be positive, negative, or zero. Examples: <code>10</code>, <code>-5</code>, <code>0</code>.</li>\n    <li><strong>Floating-Point (<code>float</code>):</strong> Decimal numbers. Used for precise math. Examples: <code>3.14</code>, <code>-10.5</code>, <code>0.0</code>.</li>\n    <li><strong>String (<code>str</code>):</strong> Text values enclosed inside quotation marks. Anything inside quotes is a string, even numbers! Examples: <code>\"Doraemon\"</code>, <code>'Python'</code>, <code>\"123\"</code>.</li>\n    <li><strong>Boolean (<code>bool</code>):</strong> Logical values that can only be either <code>True</code> or <code>False</code>. First letters must be capitalized! Examples: <code>True</code>, <code>False</code>.</li>\n</ul>\n\n<h3>Checking Data Types with type()</h3>\n<p>Python has a built-in function called <code>type()</code> that tells you the exact type of any value or variable:</p>\n\n<pre class=\"code-example\">print(type(42))        # Outputs: &lt;class 'int'&gt;\nprint(type(9.9))       # Outputs: &lt;class 'float'&gt;\nprint(type(\"Hello\"))   # Outputs: &lt;class 'str'&gt;\nprint(type(True))      # Outputs: &lt;class 'bool'&gt;</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Strings vs Numbers:</strong> Be careful! <code>print(type(5))</code> is an <code>int</code>, but <code>print(type(\"5\"))</code> is a <code>str</code>. You cannot perform mathematical operations on text numbers without converting them first!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a data type?",
                "a": "A data type is an attribute of data which tells the Python interpreter how the programmer intends to use the data (e.g. as a text string, as a decimal number, or as a true/false value)."
            },
            {
                "q": "What is the difference between int and float?",
                "a": "An <strong>int</strong> (integer) represents a whole number with no decimals (e.g. <code>7</code>). A <strong>float</strong> (floating-point number) represents a number with a decimal point (e.g. <code>7.0</code> or <code>3.14</code>)."
            },
            {
                "q": "Why are booleans capitalized in Python?",
                "a": "Python syntax mandates that boolean logical values must be written exactly as <code>True</code> and <code>False</code> (with uppercase 'T' and 'F'). Lowercase <code>true</code> or <code>false</code> will be treated as variable names and trigger a **NameError**."
            },
            {
                "q": "Is '99' treated as a number in Python?",
                "a": "<strong>No.</strong> Because it is surrounded by quotes, Python treats <code>\"99\"</code> as a text string (<code>str</code>). If you try to add a number to it, like <code>\"99\" + 1</code>, Python will throw a **TypeError**."
            },
            {
                "q": "How do I check the data type of a variable?",
                "a": "You can pass the variable into the built-in <code>type()</code> function. For example, calling <code>print(type(my_variable))</code> will output the class of the data type."
            }
        ],
        "test": {
            "intro": "Let's test your understanding of Python's basic data types!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the data type of the value 5.5?",
                    "options": [
                        "int",
                        "float",
                        "str",
                        "bool"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which of the following is a valid boolean value in Python?",
                    "options": [
                        "\"True\"",
                        "true",
                        "True",
                        "1"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What does type(\"100\") return?",
                    "options": [
                        "<class 'int'>",
                        "<class 'str'>",
                        "<class 'float'>",
                        "<class 'bool'>"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "A decimal number like 12.34 belongs to the _____ data type in Python. (int / bool / str / float)",
                    "answer": "float"
                },
                {
                    "type": "fill",
                    "question": "The logical data type that holds only True or False values is called _____. (bool / float / int / str)",
                    "answer": "bool"
                },
                {
                    "type": "fill",
                    "question": "Whole numbers like -50 belong to the _____ data type. (bool / float / str / int)",
                    "answer": "int"
                },
                {
                    "type": "tf",
                    "question": "In Python, True and true are identical and can be used interchangeably.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "A string data type can contain letters, numbers, and symbols inside quotation marks.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The statement x = 10.0 creates an integer variable.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain why x = 40 and y = \"40\" are different data types, and how that impacts operations on them.",
                    "sampleAnswer": "The variable x is an integer (int) because it is a whole number without quotation marks, while y is a string (str) because it is enclosed in quotes. You can perform mathematical operations on x (like adding or multiplying), but performing math on y (like y + 5) will cause a TypeError because you cannot add a number to text."
                }
            ]
        },
        "scenario": "Create four variables: 'my_int' with value 10, 'my_float' with value 20.5, 'my_str' with value 'Doraemon', and 'my_bool' with value True. Then, print the type of 'my_bool' using print(type(my_bool)).",
        "hint": "Define the four variables on separate lines, then write 'print(type(my_bool))'. Make sure True is capitalized and has no quotes.",
        "wrongHint": "Make sure you define 'my_int = 10', 'my_float = 20.5', 'my_str = \"Doraemon\"', and 'my_bool = True' correctly, and print(type(my_bool))!",
        "solution": "my_int = 10\nmy_float = 20.5\nmy_str = 'Doraemon'\nmy_bool = True\nprint(type(my_bool))",
        "starterCode": "# Create the 4 variables and print the type of my_bool below\n"
    },
    {
        "id": 12,
        "title": "Type conversion / type casting",
        "concept": "Converting values from one data type to another using int(), float(), str(), and bool()",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Type Conversion & Casting",
            "subheading": "Converting data categories manually and automatically",
            "body": "<p>In Python, you often need to convert values from one data type to another. For example, you cannot do math with a string like <code>\"5\"</code> -- you must convert it to a number first. This process is called <strong>Type Conversion</strong> or <strong>Type Casting</strong>.</p>\n\n<h3>1. Implicit Type Conversion (Automatic)</h3>\n<p>Sometimes, Python converts data types automatically. For example, if you add an integer to a float, Python will convert the integer to a float first so that it doesn't lose decimal precision:</p>\n\n<pre class=\"code-example\">result = 10 + 5.5\nprint(result)  # Outputs: 15.5\nprint(type(result))  # Outputs: &lt;class 'float'&gt;</pre>\n\n<h3>2. Explicit Type Casting (Manual)</h3>\n<p>To convert data types manually, you use built-in functions. Here are the most common ones:</p>\n<ul class=\"desc-list\">\n    <li><strong><code>int()</code>:</strong> Converts a value to an integer. If converting a float, it chops off the decimal part (truncation). Example: <code>int(7.9)</code> becomes <code>7</code>.</li>\n    <li><strong><code>float()</code>:</strong> Converts a value to a float. Example: <code>float(5)</code> becomes <code>5.0</code>.</li>\n    <li><strong><code>str()</code>:</strong> Converts a value to a text string. Example: <code>str(42)</code> becomes <code>\"42\"</code>.</li>\n    <li><strong><code>bool()</code>:</strong> Converts a value to a boolean. Zero (<code>0</code>), <code>None</code>, and empty containers (like <code>\"\"</code>) become <code>False</code>; all other values become <code>True</code>.</li>\n</ul>\n\n<h3>Common Type Casting Pitfalls</h3>\n<p>Trying to cast incompatible types will trigger a <strong>ValueError</strong>. For example, writing <code>int(\"hello\")</code> or <code>int(\"5.5\")</code> directly will crash your program. To convert the string <code>\"5.5\"</code> to an integer, you must first convert it to a float, and then to an integer: <code>int(float(\"5.5\"))</code>.</p>"
        },
        "qna": [
            {
                "q": "What is type casting?",
                "a": "Type casting (also known as type conversion) is the process of converting a value from one data type to another, such as converting a string representation of a number into an actual integer."
            },
            {
                "q": "What is the difference between implicit and explicit type conversion?",
                "a": "<strong>Implicit</strong> conversion is done automatically by Python at runtime (e.g. adding <code>3</code> and <code>1.5</code> yields <code>4.5</code>). <strong>Explicit</strong> conversion is done manually by the programmer using casting functions like <code>int()</code> or <code>str()</code>."
            },
            {
                "q": "Does int(9.99) round the number to 10?",
                "a": "<strong>No.</strong> The <code>int()</code> function performs **truncation**, which means it completely drops the decimal portion of the number. Therefore, <code>int(9.99)</code> evaluates to <code>9</code>, not 10."
            },
            {
                "q": "How can I convert the string \"12.5\" into an integer?",
                "a": "Calling <code>int(\"12.5\")</code> directly will raise a **ValueError**. You must first convert the string to a float, and then cast it to an integer: <code>int(float(\"12.5\"))</code>."
            },
            {
                "q": "What values evaluate to False when cast to a boolean?",
                "a": "In Python, empty values (like empty strings <code>\"\"</code>), the number <code>0</code> (or <code>0.0</code>), and <code>None</code> evaluate to <code>False</code>. Almost all other values evaluate to <code>True</code>."
            }
        ],
        "test": {
            "intro": "Let's test your knowledge of type casting and conversion in Python!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the result of int(8.99)?",
                    "options": [
                        "8",
                        "9",
                        "8.99",
                        "Error"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "Which of the following statements will raise a ValueError?",
                    "options": [
                        "float(\"7.8\")",
                        "int(\"7.8\")",
                        "str(7.8)",
                        "int(\"7\")"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does bool(\"\") (empty string) evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "Error",
                        "None"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Manual conversion of data types by the programmer using functions is called _____ type conversion. (variable / function / explicit / float)",
                    "answer": "explicit"
                },
                {
                    "type": "fill",
                    "question": "The function used to convert a value into a floating-point decimal number is _____. (int / bool / str / float)",
                    "answer": "float"
                },
                {
                    "type": "fill",
                    "question": "If you add an integer and a float, Python automatically outputs the result as a _____. (int / bool / str / float)",
                    "answer": "float"
                },
                {
                    "type": "tf",
                    "question": "The statement int(float(\"3.7\")) is a valid way to convert the string \"3.7\" to the integer 3.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The statement str(50) converts the integer 50 into a string value.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The boolean expression bool(\"False\") evaluates to False.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain why int(\"15.9\") raises a ValueError and describe how you would successfully extract the integer 15 from it.",
                    "sampleAnswer": "The int() function cannot directly convert a string containing a decimal point into an integer. To do it successfully, you must first convert the string to a float using float(\"15.9\") and then cast that float to an integer using int(), resulting in: int(float(\"15.9\"))."
                }
            ]
        },
        "scenario": "Take the variable price_str = \"19.99\". Convert it to a float and store it in 'price_float'. Then, convert 'price_float' to an integer and store it in 'price_int'. Finally, print 'price_int'.",
        "hint": "First define price_float = float(price_str), then define price_int = int(price_float), and write print(price_int).",
        "wrongHint": "Make sure you convert price_str to float, then to int, and print the final integer price_int!",
        "solution": "price_str = '19.99'\nprice_float = float(price_str)\nprice_int = int(price_float)\nprint(price_int)",
        "starterCode": "price_str = \"19.99\"\n# Write your code to convert and print below\n"
    },
    {
        "id": 13,
        "title": "Taking input with input()",
        "concept": "How to read user input in Python using the input() function and convert it using type casting",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Reading User Input",
            "subheading": "Making your programs interactive with input()",
            "body": "<p>Up until now, our programs have only printed static outputs. To make a program truly interactive, we need to accept data from the user. In Python, this is done using the <strong><code>input()</code></strong> function.</p>\n\n<h3>Basic Usage</h3>\n<p>The <code>input()</code> function pauses the program and waits for the user to type something. You can provide a text message (called a <strong>prompt</strong>) to guide the user:</p>\n\n<pre class=\"code-example\">name = input(\"Enter your name: \")\nprint(\"Hello, \" + name)</pre>\n\n<h3>The Golden Rule of input()</h3>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Always a String:</strong> The <code>input()</code> function <strong>always returns a string (str)</strong>, even if the user types a number! For example, if you type <code>25</code>, Python stores the text <code>\"25\"</code>.</div>\n</div>\n\n<h3>Reading Numbers (Type Casting Input)</h3>\n<p>Since <code>input()</code> always returns text, you cannot perform math operations on it directly. If you want to read an integer or a float, you must wrap the <code>input()</code> function inside <code>int()</code> or <code>float()</code>:</p>\n\n<pre class=\"code-example\"># Read as integer\nage = int(input(\"Enter your age: \"))\nprint(age + 1)  # Works perfectly!\n\n# Read as decimal\nheight = float(input(\"Enter your height (in meters): \"))\nprint(height)</pre>"
        },
        "qna": [
            {
                "q": "What does the input() function do?",
                "a": "The <code>input()</code> function pauses program execution, prints a prompt message to the console, and waits for the user to type text and press Enter. It then returns that user input."
            },
            {
                "q": "What data type is returned by input()?",
                "a": "It <strong>always returns a string (str)</strong>. Even if the user types a whole number like <code>42</code> or a decimal like <code>9.9</code>, it is returned as text (e.g. <code>\"42\"</code>)."
            },
            {
                "q": "How do I read a number from the user so I can do math on it?",
                "a": "You must wrap the <code>input()</code> function in a type casting function, such as <code>int(input())</code> for whole numbers or <code>float(input())</code> for decimals."
            },
            {
                "q": "What happens if a user types text when int(input()) is expected?",
                "a": "Python will throw a **ValueError** because it cannot convert text letters into a number. The program will crash unless the exception is handled."
            },
            {
                "q": "Is the prompt message inside input() required?",
                "a": "No, it is optional. Writing <code>val = input()</code> will wait for user input without displaying any instruction message."
            }
        ],
        "test": {
            "intro": "Let's test your understanding of getting user input in Python!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What data type does the input() function return by default?",
                    "options": [
                        "int",
                        "float",
                        "str",
                        "bool"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Which of these is the correct way to get the user's age as an integer?",
                    "options": [
                        "age = input(\"Enter age: \")",
                        "age = int(input(\"Enter age: \"))",
                        "age = float(input(\"Enter age: \"))",
                        "age = int(\"input()\")"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If the user inputs 10 in response to x = input(), what is the type of x?",
                    "options": [
                        "int",
                        "float",
                        "str",
                        "bool"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The guiding text inside the input() parentheses is called the _____. (variable / casting / prompt / value)",
                    "answer": "prompt"
                },
                {
                    "type": "fill",
                    "question": "Converting user input text to a number using int() is a process called type _____. (prompt / variable / casting / value)",
                    "answer": "casting"
                },
                {
                    "type": "fill",
                    "question": "If the user enters 'ten' when running x = int(input()), Python raises a _____Error. (value / typeerror / nameerror / syntaxerror)",
                    "answer": "value"
                },
                {
                    "type": "tf",
                    "question": "input() automatically returns a float if the user types a decimal number.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You can combine string inputs directly with other strings using the + operator.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Leaving the input() parentheses empty will cause a SyntaxError.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain why num = input(\"Enter number: \") followed by print(num + 5) causes a TypeError, and how to fix it.",
                    "sampleAnswer": "The input() function always returns a string, so num holds text (like '10'). Python cannot add an integer (5) to a string, which causes a TypeError. To fix it, cast the input string into an integer first: num = int(input(\"Enter number: \"))."
                }
            ]
        },
        "scenario": "Write a program that asks the user for their favorite gadget using the prompt \"Enter your favorite gadget: \". Store it in 'favorite_gadget'. Then, print \"Doraemon gave me a \" concatenated with the value of 'favorite_gadget'.",
        "hint": "Use input(\"Enter your favorite gadget: \") to get the value, then use the + operator to join the strings in print().",
        "wrongHint": "Make sure you use the exact prompt and concatenate the strings properly!",
        "solution": "favorite_gadget = input('Enter your favorite gadget: ')\nprint('Doraemon gave me a ' + favorite_gadget)",
        "starterCode": "# Ask for favorite gadget and print it\n"
    },
    {
        "id": 14,
        "title": "Output formatting",
        "concept": "Formatting print outputs in Python using concatenation, commas, and f-strings",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Output Formatting",
            "subheading": "Styling and presenting printed text",
            "body": "<p>When printing messages, presenting your data cleanly is very important. Python offers three primary ways to format output statements.</p>\n\n<h3>1. String Concatenation (+)</h3>\n<p>You can join multiple strings together using the <code>+</code> operator. Note that you must handle spacing manually, and you can only concatenate strings (non-strings must be explicitly cast to <code>str</code>):</p>\n\n<pre class=\"code-example\">name = \"Nobita\"\nprint(\"Hello \" + name + \"!\")  # Outputs: Hello Nobita!</pre>\n\n<h3>2. Using Commas (,)</h3>\n<p>Inside the <code>print()</code> function, you can separate different values with commas. Python automatically converts other data types (like numbers) to text and inserts a single space between the items:</p>\n\n<pre class=\"code-example\">age = 10\nprint(\"Age:\", age)  # Outputs: Age: 10</pre>\n\n<h3>3. f-Strings (Formatted String Literals)</h3>\n<p>This is the modern and most popular way! Prefix your string with the letter <code>f</code> or <code>F</code>. You can then insert variables or expressions directly inside the text by wrapping them in curly braces <code>{}</code>:</p>\n\n<pre class=\"code-example\">name = \"Doraemon\"\nitems = 4\nprint(f\"{name} has {items} gadgets.\")  # Outputs: Doraemon has 4 gadgets.</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>f-String Power:</strong> You can even run calculations directly inside f-string curly braces! For example, <code>print(f\"Next year I will be {age + 1}\")</code> will calculate and display <code>11</code>.</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is string concatenation in Python?",
                "a": "String concatenation is joining multiple strings together into one using the <code>+</code> operator."
            },
            {
                "q": "What is the limitation of concatenating strings with +?",
                "a": "You can only join strings. If you attempt to concatenate a string with an integer or float (e.g. <code>\"Score: \" + 10</code>), Python raises a **TypeError**."
            },
            {
                "q": "How do commas inside print() work?",
                "a": "Commas allow you to print multiple arguments of different data types in one statement. Python automatically converts them and inserts a single space between each item."
            },
            {
                "q": "What is an f-string?",
                "a": "An f-string (formatted string literal) is a string prefixed with the letter <code>f</code>. It lets you embed variables or expressions directly inside the text using curly braces <code>{}</code>."
            },
            {
                "q": "Why are f-strings preferred by Python developers?",
                "a": "f-strings are cleaner to read, easier to write, execute faster, and automatically handle type conversions for variables inside the curly braces."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of output formatting in Python!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which prefix is used to define a formatted f-string?",
                    "options": [
                        "s",
                        "f",
                        "r",
                        "p"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the output of print(\"Hello\", \"World\")?",
                    "options": [
                        "HelloWorld",
                        "Hello World",
                        "Hello, World",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which of the following statements raises a TypeError?",
                    "options": [
                        "print(\"Score: \" + str(10))",
                        "print(\"Score:\", 10)",
                        "print(f\"Score: {10}\")",
                        "print(\"Score: \" + 10)"
                    ],
                    "answer": 3
                },
                {
                    "type": "fill",
                    "question": "In f-strings, variables are placed inside _____ braces. (parentheses / square / braces / curly)",
                    "answer": "curly"
                },
                {
                    "type": "fill",
                    "question": "The operator used to join strings together is the _____ symbol. (/ / * / + / -)",
                    "answer": "+"
                },
                {
                    "type": "fill",
                    "question": "Separating print items with a comma automatically inserts a _____ character between them. (curly / + / space / variable)",
                    "answer": "space"
                },
                {
                    "type": "tf",
                    "question": "f-strings automatically convert non-string variables into strings when printing.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can write arithmetic expressions inside f-string curly braces.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "String concatenation automatically adds spaces between the joined strings.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Compare print() with commas vs f-strings, and explain when f-strings are more useful.",
                    "sampleAnswer": "Using commas in print() is easy for simple outputs and inserts default spaces. f-strings, however, are far more useful for complex text because they allow you to place variables and expressions exactly where they belong in a template, which is cleaner and supports math calculations directly."
                }
            ]
        },
        "scenario": "Define two variables: character = \"Doraemon\" and dorayakis = 12. Print the message \"Doraemon has 12 dorayakis!\" using an f-string referencing both variables.",
        "hint": "Set up the variables, then print an f-string: f\"{character} has {dorayakis} dorayakis!\".",
        "wrongHint": "Make sure you start the string with 'f' and use curly braces around the variable names!",
        "solution": "character = 'Doraemon'\ndorayakis = 12\nprint(f'{character} has {dorayakis} dorayakis!')",
        "starterCode": "character = \"Doraemon\"\ndorayakis = 12\n# Write your f-string print statement below\n"
    },
    {
        "id": 15,
        "title": "Keywords in Python",
        "concept": "Reserved keywords in Python, how to view them, and why they cannot be used as variable names",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Keywords in Python",
            "subheading": "Python's reserved vocabulary",
            "body": "<p>Just like human languages have specific words with fixed, unchangeable meanings, programming languages have <strong>reserved words</strong> called <strong>keywords</strong>.</p>\n\n<h3>What are Keywords?</h3>\n<p>Keywords are words that have a special predefined meaning and utility in Python. The Python interpreter uses them to understand the structure, loops, logic, and commands of your program.</p>\n\n<h3>The Golden Rule of Keywords</h3>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Syntax Error:</strong> Because keywords are reserved by the language, <strong>you cannot use them as variable names, function names, or any other identifiers</strong>! Doing so will result in a <strong>SyntaxError</strong>.</div>\n</div>\n\n<h3>Common Python Keywords</h3>\n<ul class=\"desc-list\">\n    <li><strong>Logic & Booleans:</strong> <code>True</code>, <code>False</code>, <code>None</code>, <code>and</code>, <code>or</code>, <code>not</code></li>\n    <li><strong>Conditionals:</strong> <code>if</code>, <code>elif</code>, <code>else</code></li>\n    <li><strong>Loops:</strong> <code>for</code>, <code>while</code>, <code>break</code>, <code>continue</code>, <code>in</code></li>\n    <li><strong>Functions & Classes:</strong> <code>def</code>, <code>class</code>, <code>return</code>, <code>pass</code>, <code>lambda</code></li>\n    <li><strong>Structure:</strong> <code>import</code>, <code>from</code>, <code>as</code>, <code>try</code>, <code>except</code></li>\n</ul>\n\n<h3>How to View All Keywords</h3>\n<p>Python provides a built-in module called <code>keyword</code> that lists all reserved words in the system. You can print them by importing the module and reading <code>keyword.kwlist</code>:</p>\n\n<pre class=\"code-example\">import keyword\nprint(keyword.kwlist)</pre>\n\n<p>All Python keywords (except <code>True</code>, <code>False</code>, and <code>None</code>) are written in <strong>completely lowercase</strong> letters!</p>"
        },
        "qna": [
            {
                "q": "What are reserved keywords in Python?",
                "a": "Reserved keywords are words that Python has set aside for its own syntax and commands (like <code>if</code>, <code>for</code>, and <code>def</code>). They cannot be reassigned or used as names for variables."
            },
            {
                "q": "Why does using a keyword as a variable name cause an error?",
                "a": "If Python allowed keywords to be variable names, the interpreter could not distinguish between a control flow instruction (like <code>if</code>) and your variable, making the code ambiguous and impossible to execute."
            },
            {
                "q": "How many keywords does Python have?",
                "a": "Python 3 has approximately 35 keywords. The exact count may vary slightly depending on the specific Python version."
            },
            {
                "q": "Are keywords case-sensitive?",
                "a": "Yes. Keywords must be typed exactly as defined. Most are all lowercase (e.g. <code>while</code>). Only three keywords start with an uppercase letter: <code>True</code>, <code>False</code>, and <code>None</code>. Capitalizing other keywords (like writing <code>IF</code> instead of <code>if</code>) will result in errors."
            },
            {
                "q": "Is 'print' a reserved keyword?",
                "a": "<strong>No.</strong> <code>print</code> is a built-in function, not a reserved keyword. However, you should still never use it as a variable name because doing so will overwrite the printing functionality, causing future print statements to fail!"
            }
        ],
        "test": {
            "intro": "Let's test your understanding of Python's reserved keywords!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which of the following is NOT a reserved keyword in Python?",
                    "options": [
                        "for",
                        "if",
                        "loop",
                        "while"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Which of these keywords is capitalized in Python?",
                    "options": [
                        "true",
                        "None",
                        "else",
                        "import"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What error will you get if you try to assign def = 5?",
                    "options": [
                        "NameError",
                        "TypeError",
                        "SyntaxError",
                        "ValueError"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The built-in module used to view all Python keywords is named _____. (typeerror / nameerror / syntaxerror / keyword)",
                    "answer": "keyword"
                },
                {
                    "type": "fill",
                    "question": "The list of keywords is retrieved using the attribute keyword._____. (sensitive / variable / kwlist / keyword)",
                    "answer": "kwlist"
                },
                {
                    "type": "fill",
                    "question": "Python keywords are case-_____, meaning 'True' is a keyword but 'true' is not. (variable / sensitive / keyword / kwlist)",
                    "answer": "sensitive"
                },
                {
                    "type": "tf",
                    "question": "You can technically use print as a variable name, although it is highly discouraged.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Every single reserved keyword in Python is written in all-lowercase letters.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Reserved keywords can be used to define loop boundaries and logical steps.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain why while = 10 causes an error, but While = 10 is allowed.",
                    "sampleAnswer": "The word 'while' in lowercase is a reserved keyword used to start a loop, so Python raises a SyntaxError when you try to use it as a variable name. However, because Python is case-sensitive, 'While' with a capital 'W' is treated as a completely different word and is not reserved, making it valid as a variable name."
                }
            ]
        },
        "scenario": "Import the built-in 'keyword' module, and then print the list of keywords using 'print(keyword.kwlist)'.",
        "hint": "Write 'import keyword' on line 1, and 'print(keyword.kwlist)' on line 2.",
        "wrongHint": "Make sure you import the keyword module and print keyword.kwlist exactly!",
        "solution": "import keyword\nprint(keyword.kwlist)",
        "starterCode": "# Import the keyword module and print the keyword list below\n"
    },
    {
        "id": 16,
        "title": "Arithmetic operators",
        "concept": "Performing mathematical calculations using +, -, *, /, //, %, and **",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Arithmetic Operators",
            "subheading": "Doing math calculations in Python",
            "body": "<p>Python can be used as a highly capable calculator! We perform math operations in code using symbols called <strong>Arithmetic Operators</strong>.</p>\n\n<h3>The 7 Arithmetic Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong>Addition (<code>+</code>):</strong> Adds two values. Example: <code>5 + 3</code> yields <code>8</code>.</li>\n    <li><strong>Subtraction (<code>-</code>):</strong> Subtracts the right value from the left value. Example: <code>10 - 4</code> yields <code>6</code>.</li>\n    <li><strong>Multiplication (<code>*</code>):</strong> Multiplies two values. Example: <code>3 * 4</code> yields <code>12</code>.</li>\n    <li><strong>Division (<code>/</code>):</strong> Divides the left value by the right. <strong>CRITICAL RULE: Division in Python always returns a float (decimal number)</strong>, even if the division is perfectly even! Example: <code>4 / 2</code> yields <code>2.0</code>.</li>\n    <li><strong>Floor Division (<code>//</code>):</strong> Divides and rounds down to the nearest whole integer, discarding any decimal remainders. Example: <code>7 // 2</code> yields <code>3</code>.</li>\n    <li><strong>Modulus (<code>%</code>):</strong> Divides two numbers and returns the remainder of the division. Example: <code>7 % 2</code> yields <code>1</code>.</li>\n    <li><strong>Exponentiation (<code>**</code>):</strong> Calculates power (the base raised to the power of the exponent). Example: <code>2 ** 3</code> is 2 cubed, yielding <code>8</code>.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Operator Precedence:</strong> Python follows standard mathematical order of operations (PEMDAS/BODMAS). Exponentiation is evaluated first, followed by multiplication/division, and finally addition/subtraction. You can use parentheses <code>()</code> to force calculations to occur first!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is the difference between regular division (/) and floor division (//)?",
                "a": "Regular division (<code>/</code>) returns a decimal float representing the exact quotient (e.g. <code>5 / 2</code> evaluates to <code>2.5</code>). Floor division (<code>//</code>) rounds the result down to the nearest whole integer, discarding the decimal fraction (e.g. <code>5 // 2</code> evaluates to <code>2</code>)."
            },
            {
                "q": "How does the modulus (%) operator work?",
                "a": "The modulus operator calculates and returns the remainder after division. For example, <code>10 % 3</code> returns <code>1</code> because 3 fits into 10 three times (making 9) with a remaining remainder of 1."
            },
            {
                "q": "How do you calculate powers (exponents) in Python?",
                "a": "You use the double asterisk operator (<code>**</code>). For example, writing <code>3 ** 4</code> represents 3 raised to the power of 4, yielding <code>81</code>."
            },
            {
                "q": "Why does print(8 / 2) output 4.0 instead of 4?",
                "a": "In Python 3, the single slash division operator (<code>/</code>) is programmed to always output a floating-point data type (<code>float</code>) to preserve decimal accuracy."
            },
            {
                "q": "Can you use arithmetic operators on strings?",
                "a": "Yes, but only <code>+</code> (for joining/concatenating strings) and <code>*</code> (for repeating a string by an integer). For example, <code>\"Hi\" * 3</code> yields <code>\"HiHiHi\"</code>. Subtraction, division, and exponents will trigger a **TypeError**."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python math and arithmetic operators!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the output of print(5 / 2)?",
                    "options": [
                        "2",
                        "2.5",
                        "3",
                        "2.0"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the output of print(5 // 2)?",
                    "options": [
                        "2",
                        "2.5",
                        "3",
                        "2.0"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What does 2 ** 4 evaluate to?",
                    "options": [
                        "8",
                        "16",
                        "32",
                        "64"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The operator used to get the remainder of a division is the _____ operator. (modulus / variable / float / **)",
                    "answer": "modulus"
                },
                {
                    "type": "fill",
                    "question": "The operator used to raise a number to an exponential power is _____. (+ / - / ** / *)",
                    "answer": "**"
                },
                {
                    "type": "fill",
                    "question": "In Python, division using the '/' operator always returns a data type of _____. (int / bool / str / float)",
                    "answer": "float"
                },
                {
                    "type": "tf",
                    "question": "The statement 7 % 2 evaluates to 1.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Floor division (//) rounds the division result up to the nearest whole integer.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The statement 10 % 5 evaluates to 0.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Compare the results of x = 11 / 3, y = 11 // 3, and z = 11 % 3.",
                    "sampleAnswer": "x is 3.6666... because regular division returns the exact float quotient. y is 3 because floor division truncates and rounds down to the nearest integer. z is 2 because modulus returns the remainder left over from the division (11 - 3*3 = 2)."
                }
            ]
        },
        "scenario": "Define three variables: base = 3, power = 3, and result which calculates 'base' raised to the power of 'power' using the exponentiation operator. Finally, print 'result'.",
        "hint": "Assign the base and power values, write result = base ** power, and print(result).",
        "wrongHint": "Make sure you define 'result = base ** power' and print result without quotes!",
        "solution": "base = 3\npower = 3\nresult = base ** power\nprint(result)",
        "starterCode": "base = 3\npower = 3\n# Calculate result and print below\n"
    },
    {
        "id": 17,
        "title": "Assignment operators",
        "concept": "Storing values and updating variables using =, +=, -=, *=, and /= in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Assignment Operators",
            "subheading": "Storing and updating variable values",
            "body": "<p>We already know the basic assignment operator (<code>=</code>), which stores a value inside a variable. Python also provides <strong>compound assignment operators</strong> (or shortcut operators) that allow you to modify a variable's value and reassign it in a single step!</p>\n\n<h3>Common Assignment Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong>Assignment (<code>=</code>):</strong> Stores the right-hand value inside the left-hand variable. Example: <code>x = 10</code>.</li>\n    <li><strong>Add and Assign (<code>+=</code>):</strong> Adds the right-hand value to the variable and stores the sum. E.g. <code>x += 5</code> is identical to <code>x = x + 5</code>.</li>\n    <li><strong>Subtract and Assign (<code>-=</code>):</strong> Subtracts the right-hand value from the variable and stores the difference. E.g. <code>x -= 2</code> is identical to <code>x = x - 2</code>.</li>\n    <li><strong>Multiply and Assign (<code>*=</code>):</strong> Multiplies the variable by the right-hand value and stores the product. E.g. <code>x *= 3</code> is identical to <code>x = x * 3</code>.</li>\n    <li><strong>Divide and Assign (<code>/=</code>):</strong> Divides the variable by the right-hand value and stores the quotient. <strong>Note: updates the variable's type to a float!</strong> E.g. <code>x /= 2</code> is identical to <code>x = x / 2</code>.</li>\n    <li><strong>Modulus and Assign (<code>%=</code>):</strong> Takes modulus and stores the remainder. E.g. <code>x %= 3</code> is identical to <code>x = x % 3</code>.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Why use shortcuts?</strong> Writing compound assignments like <code>score += 10</code> makes your code cleaner, shorter, and easier for the computer to optimize during execution.</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is an assignment operator?",
                "a": "An assignment operator is used to assign values to variables. The primary assignment operator is <code>=</code>, but compound operators like <code>+=</code> or <code>-=</code> also perform operations on the variable before assigning."
            },
            {
                "q": "What is the meaning of x += 3?",
                "a": "It is a compound assignment shortcut meaning <code>x = x + 3</code>. It reads the current value of <code>x</code>, adds <code>3</code> to it, and reassigns the new value back to <code>x</code>."
            },
            {
                "q": "What is a compound assignment operator?",
                "a": "A compound assignment operator combines an arithmetic operation with an assignment (e.g. <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>) to perform updates on variables in a single expression."
            },
            {
                "q": "Does writing x =+ 5 work the same as x += 5?",
                "a": "<strong>No.</strong> Writing <code>x =+ 5</code> assigns positive 5 (<code>+5</code>) to <code>x</code>. The mathematical compound operator must be written with the calculation operator first, followed by the equal sign (<code>+=</code>)."
            },
            {
                "q": "Can you use compound assignment on strings?",
                "a": "Yes! You can use <code>+=</code> to append text to an existing string (e.g. <code>text = \"Hello\"; text += \" Nobita\"</code> makes it <code>\"Hello Nobita\"</code>) or <code>*=</code> to repeat the string."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python assignment operators!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "If x = 10, what is the value of x after running x += 5?",
                    "options": [
                        "5",
                        "10",
                        "15",
                        "Error"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Which of the following is equivalent to count = count * 2?",
                    "options": [
                        "count =* 2",
                        "count = count ** 2",
                        "count *= 2",
                        "count *== 2"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "If score = 20, what is the value and type of score after score /= 2?",
                    "options": [
                        "10 (int)",
                        "10.0 (float)",
                        "20 (int)",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The shortcut operator '-=' represents subtract and _____. (variable / assign / = / 1)",
                    "answer": "assign"
                },
                {
                    "type": "fill",
                    "question": "If x = 7, the statement x %= 3 will update x to the value _____. (3 / 2 / 1 / 0)",
                    "answer": "1"
                },
                {
                    "type": "fill",
                    "question": "The basic assignment operator in Python is the _____ symbol. (- / + / = / *)",
                    "answer": "="
                },
                {
                    "type": "tf",
                    "question": "The command x += 1 is a valid way to increment a variable by 1.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The statement x =+ 10 is identical in action to x += 10.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Using text = \"A\"; text *= 3 updates the text variable to hold 'AAA'.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "If x = 5, explain the difference in result between running x += 2 and x =+ 2.",
                    "sampleAnswer": "Running x += 2 performs addition, adding 2 to x's current value to update x to 7. Running x =+ 2 performs direct assignment of positive 2, overwriting x's old value to update x to 2."
                }
            ]
        },
        "scenario": "Define pocket_space = 100. Reduce it by 20 using the '-=' compound assignment operator, then double it using the '*=' compound operator. Finally, print pocket_space.",
        "hint": "Write pocket_space -= 20, then pocket_space *= 2, and print(pocket_space).",
        "wrongHint": "Make sure you update pocket_space using compound operators and print its final value!",
        "solution": "pocket_space = 100\npocket_space -= 20\npocket_space *= 2\nprint(pocket_space)",
        "starterCode": "pocket_space = 100\n# Write your compound operators and print statement below\n"
    },
    {
        "id": 18,
        "title": "Comparison operators",
        "concept": "Comparing values in Python using ==, !=, >, <, >=, and <= to produce boolean results",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Comparison Operators",
            "subheading": "Comparing values and making decisions",
            "body": "<p>When writing programs, we often need to compare two values. For example: Is Nobita's exam score greater than 50? Is the user's password correct? Python uses <strong>Comparison Operators</strong> (or relational operators) to solve these questions.</p>\n\n<h3>The 6 Comparison Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong>Equal to (<code>==</code>):</strong> Checks if two values are equal. Note: Use double equals <code>==</code> for comparison, and single equal <code>=</code> for assignment! Example: <code>5 == 5</code> yields <code>True</code>.</li>\n    <li><strong>Not equal to (<code>!=</code>):</strong> Checks if two values are different. Example: <code>5 != 3</code> yields <code>True</code>.</li>\n    <li><strong>Greater than (<code>&gt;</code>):</strong> Checks if the left value is strictly larger than the right. Example: <code>10 &gt; 5</code> yields <code>True</code>.</li>\n    <li><strong>Less than (<code>&lt;</code>):</strong> Checks if the left value is strictly smaller than the right. Example: <code>3 &lt; 8</code> yields <code>True</code>.</li>\n    <li><strong>Greater than or equal to (<code>&gt;=</code>):</strong> Checks if the left value is larger or equal. Example: <code>10 &gt;= 10</code> yields <code>True</code>.</li>\n    <li><strong>Less than or equal to (<code>&lt;=</code>):</strong> Checks if the left value is smaller or equal. Example: <code>5 &lt;= 6</code> yields <code>True</code>.</li>\n</ul>\n\n<h3>String Comparisons</h3>\n<p>Python can also compare strings! String comparisons are case-sensitive. For example, <code>\"apple\" == \"Apple\"</code> evaluates to <code>False</code> because the capital letter 'A' is distinct from the lowercase 'a'.</p>\n\n<blockquote class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>TypeError Warning:</strong> You cannot compare incompatible data types (like <code>5 &gt; \"3\"</code>) using inequality operators. Doing so will raise a <strong>TypeError</strong>!</div>\n</blockquote>"
        },
        "qna": [
            {
                "q": "What are comparison operators?",
                "a": "Comparison operators are symbols used to compare two values. The result of any comparison operation is a boolean value: either <code>True</code> or <code>False</code>."
            },
            {
                "q": "What is the difference between = and ==?",
                "a": "The single equal sign (<code>=</code>) is the **assignment operator**, used to store a value inside a variable (e.g. <code>x = 5</code>). The double equal sign (<code>==</code>) is the **comparison operator**, used to check if two values are equal (e.g. <code>x == 5</code> returns <code>True</code> or <code>False</code>)."
            },
            {
                "q": "How does the 'not equal' (!=) operator work?",
                "a": "The <code>!=</code> operator compares two values and returns <code>True</code> if they are different, and <code>False</code> if they are identical."
            },
            {
                "q": "Can you compare an integer and a float?",
                "a": "Yes! Python can compare integers and floats directly. For example, <code>10 == 10.0</code> evaluates to <code>True</code>."
            },
            {
                "q": "Are string comparisons case-sensitive in Python?",
                "a": "Yes, string comparisons are strictly case-sensitive. For example, <code>\"Doraemon\" == \"doraemon\"</code> evaluates to <code>False</code> because capitalization matters in Python."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of comparison operators in Python!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which operator is used to check if two values are equal?",
                    "options": [
                        "=",
                        "==",
                        "===",
                        "!="
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does the expression 5 != 5 evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "Error",
                        "None"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which of the following comparisons raises a TypeError?",
                    "options": [
                        "5 == 5.0",
                        "5 != \"5\"",
                        "5 > \"3\"",
                        "\"apple\" == \"orange\""
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "Comparison operators in Python always return a data type of _____. (bool / float / int / str)",
                    "answer": "bool"
                },
                {
                    "type": "fill",
                    "question": "The operator used to check if a value is greater than or equal to another is _____. (- / + / >= / *)",
                    "answer": ">="
                },
                {
                    "type": "fill",
                    "question": "If x = 12 and y = 15, the expression x < y evaluates to _____. (None / True / undefined / False)",
                    "answer": "True"
                },
                {
                    "type": "tf",
                    "question": "\"Python\" == \"python\" evaluates to True.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The comparison 10 >= 10 evaluates to True.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The single equal sign (=) is used to check if two values are equal in Python.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "If score = 85, explain what expressions you would write to check if the score is a passing mark (50 or above) and if it is a perfect mark (100).",
                    "sampleAnswer": "To check if the score is passing, write 'score >= 50'. To check if the score is perfect, write 'score == 100'."
                }
            ]
        },
        "scenario": "Define two variables: user_guess = 42 and correct_answer = 42. Create a variable 'is_correct' that compares if 'user_guess' is equal to 'correct_answer'. Finally, print 'is_correct'.",
        "hint": "Assign the values, then write is_correct = user_guess == correct_answer, and print(is_correct).",
        "wrongHint": "Make sure you compare user_guess and correct_answer using the == operator and print the result!",
        "solution": "user_guess = 42\ncorrect_answer = 42\nis_correct = user_guess == correct_answer\nprint(is_correct)",
        "starterCode": "user_guess = 42\ncorrect_answer = 42\n# Compare variables and print the result below\n"
    },
    {
        "id": 19,
        "title": "Logical operators",
        "concept": "Combining boolean expressions using and, or, and not in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Logical Operators",
            "subheading": "Combining and reversing true/false statements",
            "body": "<p>Sometimes, decisions in your code depend on multiple conditions. For example: \"If a user has a key AND the door is locked, open the door.\" Python uses <strong>Logical Operators</strong> to combine or modify boolean conditions.</p>\n\n<h3>The 3 Logical Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>and</code>:</strong> Returns <code>True</code> <strong>only if BOTH conditions are True</strong>. If even one part is False, the result is <code>False</code>. Example: <code>True and False</code> yields <code>False</code>.</li>\n    <li><strong><code>or</code>:</strong> Returns <code>True</code> <strong>if AT LEAST ONE condition is True</strong>. It only returns <code>False</code> if both parts are False. Example: <code>True or False</code> yields <code>True</code>.</li>\n    <li><strong><code>not</code>:</strong> Inverts (reverses) a boolean value. Turns <code>True</code> into <code>False</code>, and <code>False</code> into <code>True</code>. Example: <code>not True</code> yields <code>False</code>.</li>\n</ul>\n\n<h3>Order of Evaluation (Precedence)</h3>\n<p>Unless overridden by parentheses, Python evaluates logical operations in this order: <code>not</code> first, then <code>and</code>, and finally <code>or</code>. Using parentheses <code>()</code> is highly recommended to make your code clear and ensure calculations happen in the correct order!</p>"
        },
        "qna": [
            {
                "q": "What are logical operators used for?",
                "a": "Logical operators are used to connect two or more conditional expressions, or to reverse a boolean expression, yielding a final true/false result."
            },
            {
                "q": "When does the 'and' operator return True?",
                "a": "The <code>and</code> operator returns <code>True</code> if and only if both conditions being evaluated are <code>True</code>."
            },
            {
                "q": "When does the 'or' operator return True?",
                "a": "The <code>or</code> operator returns <code>True</code> if at least one of the conditions is <code>True</code>. It only returns <code>False</code> when both conditions are <code>False</code>."
            },
            {
                "q": "How does the 'not' operator work?",
                "a": "The <code>not</code> operator flips the boolean state. It takes a value and reverses it (e.g. <code>not True</code> becomes <code>False</code>, and <code>not False</code> becomes <code>True</code>)."
            },
            {
                "q": "What is short-circuit evaluation?",
                "a": "In an <code>and</code> statement, if the first condition is <code>False</code>, Python doesn't check the second because the result is guaranteed to be False. In an <code>or</code> statement, if the first condition is <code>True</code>, Python doesn't check the second because the result is guaranteed to be True. This is called short-circuiting."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's logical operators!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What does True and False evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "None",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does False or True evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "None",
                        "Error"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What does the expression not (10 > 5) evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "Error",
                        "None"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The logical operator that returns True only if both conditions are True is _____. (if / elif / and / else)",
                    "answer": "and"
                },
                {
                    "type": "fill",
                    "question": "The operator used to invert a boolean value is _____. (if / else / not / elif)",
                    "answer": "not"
                },
                {
                    "type": "fill",
                    "question": "If x = True and y = False, the expression x or y evaluates to _____. (None / True / undefined / False)",
                    "answer": "True"
                },
                {
                    "type": "tf",
                    "question": "The logical statement not False evaluates to True.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "In the expression A and B, if A is False, Python evaluates B anyway.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The statement 5 > 3 or 2 > 10 evaluates to False.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "If has_key = True and is_locked = False, explain what 'has_key and not is_locked' evaluates to.",
                    "sampleAnswer": "It evaluates to True. has_key is True, and is_locked is False (so not is_locked becomes True). Since both parts are True, the 'and' returns True."
                }
            ]
        },
        "scenario": "Define two variables: has_dorayaki = True and is_hungry = True. Create a variable 'should_eat' that is True if 'has_dorayaki' is True AND 'is_hungry' is True. Finally, print 'should_eat'.",
        "hint": "Set up the variables, write should_eat = has_dorayaki and is_hungry, and print the result.",
        "wrongHint": "Make sure you combine conditions using the logical operator 'and' and print should_eat!",
        "solution": "has_dorayaki = True\nis_hungry = True\nshould_eat = has_dorayaki and is_hungry\nprint(should_eat)",
        "starterCode": "has_dorayaki = True\nis_hungry = True\n# Combine conditions using 'and' and print should_eat below\n"
    },
    {
        "id": 20,
        "title": "Membership operators",
        "concept": "Checking if a value or character is present in a sequence using 'in' and 'not in' in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Membership Operators",
            "subheading": "Checking for presence inside collections",
            "body": "<p>When programming, we often need to check if an item exists inside a collection. For example: Is the letter <code>\"a\"</code> in the word <code>\"apple\"</code>? Is the name <code>\"nobita\"</code> in a list of users? Python makes this incredibly simple using <strong>Membership Operators</strong>.</p>\n\n<h3>The 2 Membership Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>in</code>:</strong> Evaluates to <code>True</code> if the specified value is found inside the sequence. Otherwise, it returns <code>False</code>.\n        <pre class=\"code-example\">text = \"Bamboo Copter\"\nprint(\"Bamboo\" in text)  # Outputs: True\nprint(\"door\" in text)    # Outputs: False</pre>\n    </li>\n    <li><strong><code>not in</code>:</strong> Evaluates to <code>True</code> if the specified value is <strong>not</strong> found inside the sequence. If it is found, it returns <code>False</code>.\n        <pre class=\"code-example\">text = \"Anywhere Door\"\nprint(\"copter\" not in text)  # Outputs: True</pre>\n    </li>\n</ul>\n\n<h3>Important Details</h3>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Case Sensitivity:</strong> Membership tests are strictly case-sensitive. For example, <code>\"bamboo\" in \"Bamboo Copter\"</code> will evaluate to <code>False</code> because the letters have different casing!</div>\n</div>\n<p>Membership operators work on any Python sequence data type, including strings (which we've seen) and lists/tuples (which you will learn about in future levels).</p>"
        },
        "qna": [
            {
                "q": "What are membership operators?",
                "a": "Membership operators are used to test if a value or variable is part of a sequence (such as strings, lists, or tuples)."
            },
            {
                "q": "What does the 'in' operator do?",
                "a": "The <code>in</code> operator evaluates to <code>True</code> if the specified element is found in the sequence, and <code>False</code> otherwise."
            },
            {
                "q": "What does the 'not in' operator do?",
                "a": "The <code>not in</code> operator evaluates to <code>True</code> if the specified element is not present in the sequence, and <code>False</code> if it is present."
            },
            {
                "q": "Can I search for multiple words inside a string using 'in'?",
                "a": "Yes! You can search for a single character (e.g. <code>\"a\" in \"cat\"</code>) or entire substrings/words (e.g. <code>\"Anywhere Door\" in \"Doraemon opened the Anywhere Door.\"</code>)."
            },
            {
                "q": "Are membership operations case-sensitive?",
                "a": "Yes, they are case-sensitive. Searching for <code>\"python\" in \"Python programming\"</code> returns <code>False</code> because capital P and lowercase p do not match."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python membership operators!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which operator is used to test if a value is present in a sequence?",
                    "options": [
                        "is",
                        "in",
                        "has",
                        "not"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does \"a\" in \"Apple\" evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "None",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does \"key\" not in \"pocket\" evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "None",
                        "Error"
                    ],
                    "answer": 0
                },
                {
                    "type": "fill",
                    "question": "The operator that returns True if a value is NOT present in a sequence is _____ in. (if / else / not / elif)",
                    "answer": "not"
                },
                {
                    "type": "fill",
                    "question": "Membership operators check if a value is part of a _____. (not / True / sequence / variable)",
                    "answer": "sequence"
                },
                {
                    "type": "fill",
                    "question": "If word = \"Doraemon\", then the expression \"Dora\" in word evaluates to _____. (None / True / undefined / False)",
                    "answer": "True"
                },
                {
                    "type": "tf",
                    "question": "Membership operators can only search for single characters, not substrings.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "\"pocket\" in \"Doraemon's pocket\" evaluates to True.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "\"A\" not in \"apple\" evaluates to True.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "If sentence = \"Doraemon loves dorayakis\", explain what \"dorayaki\" in sentence and \"Dorayaki\" in sentence evaluate to, and why.",
                    "sampleAnswer": "'dorayaki' in sentence is True because the lowercase word exists inside 'dorayakis'. 'Dorayaki' in sentence is False because membership checks are case-sensitive."
                }
            ]
        },
        "scenario": "Define a variable gadget_list = \"Bamboo Copter, Anywhere Door, Translation Konjac\". Create a boolean variable 'has_door' that checks if the string \"Door\" is present in gadget_list. Finally, print 'has_door'.",
        "hint": "Set up the string, write has_door = \"Door\" in gadget_list, and print(has_door).",
        "wrongHint": "Make sure you search for the substring 'Door' (case-sensitive) in gadget_list and print the boolean result has_door!",
        "solution": "gadget_list = 'Bamboo Copter, Anywhere Door, Translation Konjac'\nhas_door = 'Door' in gadget_list\nprint(has_door)",
        "starterCode": "gadget_list = \"Bamboo Copter, Anywhere Door, Translation Konjac\"\n# Check if \"Door\" is in gadget_list and print the result below\n"
    },
    {
        "id": 21,
        "title": "Identity operators",
        "concept": "Comparing memory locations of objects using 'is' and 'is not' vs value comparison '=='",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Identity Operators",
            "subheading": "Checking memory locations in Python",
            "body": "<p>In Python, variables don't hold values directly; they point to objects stored in the computer's memory. Sometimes, we need to check if two variables point to the <strong>exact same memory address</strong> (object identity), rather than just checking if their values are equal.</p>\n\n<h3>The 2 Identity Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>is</code>:</strong> Evaluates to <code>True</code> if both variables refer to the exact same object in memory.</li>\n    <li><strong><code>is not</code>:</strong> Evaluates to <code>True</code> if both variables refer to different objects in memory.</li>\n</ul>\n\n<h3>The Big Difference: is vs ==</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>==</code> (Equality):</strong> Checks if the **values** of the two objects are equal.</li>\n    <li><strong><code>is</code> (Identity):</strong> Checks if the variables point to the **same object address** in memory.</li>\n</ul>\n\n<pre class=\"code-example\">list_a = [1, 2, 3]\nlist_b = [1, 2, 3]\nlist_c = list_a\n\nprint(list_a == list_b) # Outputs: True (they have identical contents)\nprint(list_a is list_b)  # Outputs: False (stored in different memory slots)\nprint(list_a is list_c)  # Outputs: True (list_c points to list_a's address)</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Python Optimization (Caching):</strong> For performance, Python reuses the same memory address for small integers (between -5 and 256) and small strings. Therefore, if <code>x = 5</code> and <code>y = 5</code>, <code>x is y</code> evaluates to <code>True</code>. However, for collections like lists or dictionaries, Python always creates new objects in memory!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What do identity operators do?",
                "a": "Identity operators (<code>is</code> and <code>is not</code>) check whether two variables point to the exact same object located at the same memory address."
            },
            {
                "q": "What is the difference between == and is?",
                "a": "The <code>==</code> operator compares the values of two objects to check if they are equal (value equality). The <code>is</code> operator compares the memory addresses of two variables to check if they point to the exact same object (address identity)."
            },
            {
                "q": "Why does list_a is list_b return False even if they contain the same values?",
                "a": "Lists are mutable collections. When you create two lists, Python allocates separate boxes in memory for each list. Because they are in different memory addresses, <code>is</code> returns <code>False</code>."
            },
            {
                "q": "How does 'is not' differ from '!='?",
                "a": "The <code>!=</code> operator checks if values are different. The <code>is not</code> operator checks if the variables point to different objects in memory, even if their contents are equal."
            },
            {
                "q": "What is the id() function?",
                "a": "The built-in <code>id()</code> function returns the unique integer memory address of an object. If <code>x is y</code> is True, then <code>id(x)</code> will equal <code>id(y)</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python identity operators!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which operator checks if two variables refer to the exact same object address?",
                    "options": [
                        "==",
                        "is",
                        "in",
                        "equals"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does x is y compare?",
                    "options": [
                        "Value equality",
                        "Memory address identity",
                        "Data type equivalence",
                        "Variable spelling"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If list_a = [1, 2] and list_b = [1, 2], what does list_a is list_b evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "Error",
                        "None"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The operator used to check if two variables point to different objects in memory is _____ not. (is / else / if / elif)",
                    "answer": "is"
                },
                {
                    "type": "fill",
                    "question": "The built-in function that returns the unique memory address of an object is _____. (variable / object / is / id)",
                    "answer": "id"
                },
                {
                    "type": "fill",
                    "question": "While '==' checks value equality, the 'is' operator checks _____ identity. (object / is / variable / id)",
                    "answer": "object"
                },
                {
                    "type": "tf",
                    "question": "The expression 10 is 10.0 evaluates to True in Python.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Python caches and reuses memory locations for small integers to optimize performance.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "If x is not y is True, it means x and y are stored in different memory addresses.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "If a = [5, 10] and b = a, explain what a == b and a is b evaluate to, and why.",
                    "sampleAnswer": "Both evaluate to True. a == b is True because they hold the same values. a is b is True because assigning b = a makes b refer to the exact same list object address in memory."
                }
            ]
        },
        "scenario": "Define a list nobita_bag = [\"dorayaki\", \"notebook\"]. Point 'doraemon_bag' to the same list object (doraemon_bag = nobita_bag). Create a variable 'same_bag' that checks if 'nobita_bag' is the same object as 'doraemon_bag' using the identity operator. Finally, print 'same_bag'.",
        "hint": "Set up the list, point doraemon_bag = nobita_bag, assign same_bag = nobita_bag is doraemon_bag, and print the result.",
        "wrongHint": "Make sure you assign doraemon_bag to point to nobita_bag, use 'is' to check identity, and print same_bag!",
        "solution": "nobita_bag = ['dorayaki', 'notebook']\ndoraemon_bag = nobita_bag\nsame_bag = nobita_bag is doraemon_bag\nprint(same_bag)",
        "starterCode": "nobita_bag = [\"dorayaki\", \"notebook\"]\n# Point doraemon_bag to nobita_bag, check identity, and print below\n"
    },
    {
        "id": 22,
        "title": "Operator precedence",
        "concept": "Order of operations (PEMDAS/BODMAS) in Python, combining arithmetic, comparison, and logical operators",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Operator Precedence",
            "subheading": "Rules governing the order of execution",
            "body": "<p>When you write complex expressions with multiple operators, like <code>10 - 2 * 3</code> or <code>5 &gt; 3 and 2 &lt; 1</code>, Python needs a set of rules to determine which operations to run first. These rules are called <strong>Operator Precedence</strong> (similar to PEMDAS/BODMAS in school math).</p>\n\n<h3>The Order of Precedence (Highest to Lowest)</h3>\n<ol class=\"desc-list\">\n    <li><strong>Parentheses <code>()</code>:</strong> Anything inside brackets is evaluated first!</li>\n    <li><strong>Exponentiation <code>**</code>:</strong> Raising a number to a power.</li>\n    <li><strong>Multiplication, Division, Floor Division, Modulus <code>*</code>, <code>/</code>, <code>//</code>, <code>%</code></strong></li>\n    <li><strong>Addition, Subtraction <code>+</code>, <code>-</code></strong></li>\n    <li><strong>Comparison, Membership, Identity:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>, <code>in</code>, <code>is</code></li>\n    <li><strong>Logical NOT:</strong> <code>not</code></li>\n    <li><strong>Logical AND:</strong> <code>and</code></li>\n    <li><strong>Logical OR:</strong> <code>or</code></li>\n</ol>\n\n<h3>Associativity (Left-to-Right)</h3>\n<p>If two operators have the same precedence (like addition <code>+</code> and subtraction <code>-</code>), Python evaluates them from **left to right**.</p>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Best Practice:</strong> Always use parentheses <code>()</code> in complex calculations! It ensures the code executes in the exact order you want, and makes your code much easier for others to read. E.g., <code>(5 + 3) * 2</code> forces addition to happen first, yielding <code>16</code> instead of <code>11</code>.</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is operator precedence?",
                "a": "Operator precedence determines the order in which operators are evaluated in expressions containing multiple operators."
            },
            {
                "q": "Which arithmetic operator has the highest precedence?",
                "a": "Exponentiation (<code>**</code>) has the highest precedence among math operators. Parentheses <code>()</code> override everything."
            },
            {
                "q": "How do logical operators rank in precedence?",
                "a": "Logical operators rank as: <code>not</code> first, then <code>and</code>, and finally <code>or</code>."
            },
            {
                "q": "What happens when operators have equal precedence?",
                "a": "When operators have equal precedence, Python evaluates them from left to right (left-to-right associativity)."
            },
            {
                "q": "Why should I use parentheses in expressions?",
                "a": "Parentheses clarify the programmer's intent, prevent calculation bugs, and allow you to override standard math order to achieve the desired result."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python operator precedence!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the output of print(10 - 2 * 3)?",
                    "options": [
                        "24",
                        "4",
                        "6",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the output of print((10 - 2) * 3)?",
                    "options": [
                        "24",
                        "4",
                        "6",
                        "Error"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "Which of these operators has the highest precedence?",
                    "options": [
                        "*",
                        "**",
                        "+",
                        "/"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The operator with the absolute highest precedence that overrides all other rules is _____. (parentheses / semicolon / colon / comma)",
                    "answer": "parentheses"
                },
                {
                    "type": "fill",
                    "question": "In the expression True or False and False, the _____ operator is evaluated first. (if / elif / and / else)",
                    "answer": "and"
                },
                {
                    "type": "fill",
                    "question": "If operators have identical precedence levels, Python evaluates them from _____ to right. (parentheses / variable / and / left)",
                    "answer": "left"
                },
                {
                    "type": "tf",
                    "question": "Exponentiation (**) has higher precedence than multiplication (*).",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Comparison operators have lower precedence than logical operators like 'and'.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The expression 2 ** 3 * 2 evaluates to 16.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Predict the output of '5 + 2 * 10 > 20 and not 2 == 3' step-by-step.",
                    "sampleAnswer": "Multiplication happens first: 2*10 = 20. Addition: 5+20 = 25. Comparisons: 25 > 20 is True and 2 == 3 is False. Logical NOT: not False is True. Logical AND: True and True evaluates to True."
                }
            ]
        },
        "scenario": "Define a variable 'calculation' that evaluates to 40. Write the expression using: 5, 3, and 5 with addition (+) and multiplication (*). Use parentheses to make sure addition happens before multiplication! Finally, print 'calculation'.",
        "hint": "Write calculation = (5 + 3) * 5, then print(calculation).",
        "wrongHint": "Make sure you write calculation = (5 + 3) * 5 to force the addition to happen first!",
        "solution": "calculation = (5 + 3) * 5\nprint(calculation)",
        "starterCode": "# Calculate 40 using 5, 3, 5 with addition and multiplication. Force addition first.\n"
    },
    {
        "id": 23,
        "title": "Practice questions on operators",
        "concept": "Solving complex combination expressions with arithmetic, comparison, identity, membership, and logical operators",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Operator Challenge Room",
            "subheading": "Mastering combined operator challenges",
            "body": "<p>Welcome to a dedicated training room! Now that you have learned about arithmetic, assignment, comparison, logical, membership, and identity operators, it is time to practice combining them into complex logic structures.</p>\n\n<h3>The Evaluation Checklist</h3>\n<p>To solve complex combined expressions without making mistakes, always run your evaluation in this order:</p>\n<ol class=\"desc-list\">\n    <li><strong>Parentheses <code>()</code>:</strong> Always resolve brackets first.</li>\n    <li><strong>Arithmetic Math:</strong> Exponents (<code>**</code>) first, then multiplication/division/modulus/floor-division (<code>*</code>, <code>/</code>, <code>%</code>, <code>//</code>), then addition/subtraction (<code>+</code>, <code>-</code>).</li>\n    <li><strong>Comparisons:</strong> Greater/less-than and equality checks (<code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>).</li>\n    <li><strong>Identity & Membership:</strong> <code>is</code>, <code>is not</code>, <code>in</code>, <code>not in</code>.</li>\n    <li><strong>Logical Operators:</strong> Logical <code>not</code> first, then <code>and</code>, and finally <code>or</code>.</li>\n</ol>\n\n<h3>Walkthrough Example</h3>\n<pre class=\"code-example\">expression = 5 + 2 == 7 or 10 // 3 &gt; 3\n\n# Step 1: Evaluate math\n# 5 + 2 is 7. 10 // 3 is 3.\n# expression becomes: 7 == 7 or 3 &gt; 3\n\n# Step 2: Evaluate comparisons\n# 7 == 7 is True. 3 &gt; 3 is False.\n# expression becomes: True or False\n\n# Step 3: Evaluate logical\n# True or False evaluates to True!</pre>"
        },
        "qna": [
            {
                "q": "Why is practicing combined operators important?",
                "a": "In real-world software, decisions depend on multiple variables (e.g. checking user login validity, order values, and account clearance). Combining operators is standard practice for logic statements."
            },
            {
                "q": "In what order are math and comparison operators evaluated?",
                "a": "Arithmetic math operations (like <code>+</code> or <code>//</code>) are always evaluated before comparison operations (like <code>==</code> or <code>&gt;</code>)."
            },
            {
                "q": "Does logical 'and' evaluate before logical 'or'?",
                "a": "Yes, <code>and</code> has a higher precedence than <code>or</code>. For example, <code>True or False and False</code> is evaluated as <code>True or (False and False)</code>, resulting in <code>True</code>."
            },
            {
                "q": "What happens when membership or identity operators are combined with logical operators?",
                "a": "Identity (<code>is</code>) and membership (<code>in</code>) checks evaluate first as comparisons, and their boolean outputs are then combined using logical connectors."
            },
            {
                "q": "How can I guarantee specific order of evaluation in complex logic statements?",
                "a": "Always group sub-expressions using parentheses <code>()</code>. E.g., writing <code>(x &gt; 5) and (y &lt; 10)</code> makes the evaluation order clear and readable."
            }
        ],
        "test": {
            "intro": "Let's test your ability to resolve combined operator expressions!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the output of print(10 - 3 * 2 == 4)?",
                    "options": [
                        "True",
                        "False",
                        "None",
                        "Error"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What does True or False and not True evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "None",
                        "Error"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "If list_a = [1, 2] and list_b = list_a, what does (1 in list_a) and (list_a is list_b) evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "Error",
                        "None"
                    ],
                    "answer": 0
                },
                {
                    "type": "fill",
                    "question": "If x = 15, the expression x % 2 == 1 and x < 20 evaluates to _____. (None / True / undefined / False)",
                    "answer": "True"
                },
                {
                    "type": "fill",
                    "question": "The expression not ('a' in 'banana' or 'z' in 'apple') evaluates to _____. (True / undefined / False / None)",
                    "answer": "False"
                },
                {
                    "type": "fill",
                    "question": "If y = 10, the statement y is not 10.0 evaluates to _____. (None / True / undefined / False)",
                    "answer": "True"
                },
                {
                    "type": "tf",
                    "question": "5 + 2 * 3 == 21 evaluates to True.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "('Door' in 'Anywhere Door') and not (5 is 5.0) evaluates to True.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Logical 'or' is evaluated before logical 'and' in Python expressions.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain step-by-step why 'not 10 > 5 and \"apple\" in \"pineapple\"' evaluates to False.",
                    "sampleAnswer": "10 > 5 is True, and 'apple' in 'pineapple' is True. This leaves: not True and True. The logical 'not' runs first, giving: False and True. Finally, the 'and' returns False."
                }
            ]
        },
        "scenario": "Define score = 75 and has_completed_project = True. Create a variable 'is_eligible' that is True if 'score' is greater than or equal to 70 AND 'has_completed_project' is True. Finally, print 'is_eligible'.",
        "hint": "Assign the values, then write is_eligible = score >= 70 and has_completed_project, and print it.",
        "wrongHint": "Make sure you combine conditions using the logical operator 'and' and print the eligibility!",
        "solution": "score = 75\nhas_completed_project = True\nis_eligible = score >= 70 and has_completed_project\nprint(is_eligible)",
        "starterCode": "score = 75\nhas_completed_project = True\n# Combine conditions and print is_eligible below\n"
    },
    {
        "id": 24,
        "title": "Real life logic building",
        "concept": "Translating business rules and real-life scenarios into Python logical expressions",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Real-Life Logic Building",
            "subheading": "Translating real-world problems into code",
            "body": "<p>Programming is about solving real-world problems. In this lesson, we will practice translating descriptive business requirements and daily logical decisions into Python expressions.</p>\n\n<h3>Example Scenario 1: Movie Ticket Discounts</h3>\n<p><strong>Requirement:</strong> \"A movie theater offers discounted tickets if the visitor is a child (under 12) OR a senior citizen (65 or older).\"</p>\n<blockquote class=\"desc-callout callout-highlight\">\n    <strong>Python translation:</strong> <code>is_discounted = age &lt; 12 or age &gt;= 65</code>\n</blockquote>\n\n<h3>Example Scenario 2: Web Login Authentication</h3>\n<p><strong>Requirement:</strong> \"A user can log in if their username is correct AND their password is correct, provided their account is NOT suspended.\"</p>\n<blockquote class=\"desc-callout callout-highlight\">\n    <strong>Python translation:</strong> <code>can_login = is_username_correct and is_password_correct and not is_suspended</code>\n</blockquote>\n\n<h3>Example Scenario 3: Roller Coaster Ride Eligibility</h3>\n<p><strong>Requirement:</strong> \"To ride the roller coaster, a person must be at least 120cm tall AND weigh less than 150kg.\"</p>\n<blockquote class=\"desc-callout callout-highlight\">\n    <strong>Python translation:</strong> <code>can_ride = height_cm &gt;= 120 and weight_kg &lt; 150</code>\n</blockquote>\n\n<p>Translating rules carefully is critical to avoid software bugs and security issues in real-world applications!</p>"
        },
        "qna": [
            {
                "q": "What is logic building?",
                "a": "Logic building is the process of translating real-world problems, rules, and conditions into structured, unambiguous code statements."
            },
            {
                "q": "How do you write a rule like 'A and B, unless C' in Python?",
                "a": "The word 'unless' acts as a negation. You would write this as: <code>(A and B) and not C</code>."
            },
            {
                "q": "How do you check if a number is between two values, inclusive?",
                "a": "To check if age is between 18 and 30 inclusive, you write: <code>age &gt;= 18 and age &lt;= 30</code>. You can also write the shortcut: <code>18 &lt;= age &lt;= 30</code>."
            },
            {
                "q": "Why are parentheses important when combining 'and' and 'or' logic?",
                "a": "Because <code>and</code> is evaluated before <code>or</code>, omitting parentheses can lead to bugs. For example, <code>(is_admin or has_permit) and is_logged_in</code> works differently from <code>is_admin or (has_permit and is_logged_in)</code>."
            },
            {
                "q": "How can I verify if my real-world logical translation is correct?",
                "a": "By testing the logic with different combinations of inputs (e.g. testing an admin user, a suspended user, and a guest user) to check that the boolean output matches the expected result."
            }
        ],
        "test": {
            "intro": "Let's check your ability to build logical expressions for real-life business rules!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "A customer gets free shipping if they are premium OR if their order is over 50. Which expression represents this?",
                    "options": [
                        "free = premium and order > 50",
                        "free = premium or order > 50",
                        "free = not premium and order > 50",
                        "free = premium or order >= 50"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "To enter a concert, you must have a ticket AND be accompanied by an adult if you are under 18. If under_18 is True, how is this checked?",
                    "options": [
                        "can_enter = ticket and accompanied",
                        "can_enter = ticket or accompanied",
                        "can_enter = not ticket and accompanied",
                        "can_enter = ticket and not accompanied"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "An alarm triggers if it is night AND a window is open, OR if a smoke sensor is active. Which expression is correct?",
                    "options": [
                        "alarm = is_night and is_window_open or smoke",
                        "alarm = (is_night and is_window_open) or smoke",
                        "alarm = is_night and (is_window_open or smoke)",
                        "alarm = is_night or is_window_open and smoke"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To check if a score is strictly between 80 and 90 (exclusive), you write: score > 80 and score < _____. (90 / 92 / 89 / 91)",
                    "answer": "90"
                },
                {
                    "type": "fill",
                    "question": "The logical expression to check if a user is NOT banned is written as: not _____. (variable / 90 / is_banned / True)",
                    "answer": "is_banned"
                },
                {
                    "type": "fill",
                    "question": "If age = 15, the expression: age >= 13 and age <= 19 evaluates to _____. (None / True / undefined / False)",
                    "answer": "True"
                },
                {
                    "type": "tf",
                    "question": "The statement: is_weekend and is_sunny will return True if it is a sunny Monday.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Parentheses are unnecessary when combining 'and' and 'or' because calculations evaluate left-to-right.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The expression: score < 0 or score > 100 checks if a score is invalid (assuming valid range is 0 to 100).",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Write a logical expression that checks if a visitor can ride a theme park attraction. The requirements: they must be at least 140cm tall, and they must NOT have a heart condition.",
                    "sampleAnswer": "can_ride = height_cm >= 140 and not has_heart_condition"
                }
            ]
        },
        "scenario": "A customer is eligible for a bank loan if their annual_income is at least 50000 AND their credit_score is greater than 700 AND they do NOT have a criminal_record (boolean False). Define variables: annual_income = 55000, credit_score = 720, and criminal_record = False. Create a variable 'loan_approved' containing the condition, and print it.",
        "hint": "Set up the variables, combine requirements using 'and' (with 'not' for criminal_record), and print(loan_approved).",
        "wrongHint": "Make sure you write loan_approved = annual_income >= 50000 and credit_score > 700 and not criminal_record, and print it!",
        "solution": "annual_income = 55000\ncredit_score = 720\ncriminal_record = False\nloan_approved = annual_income >= 50000 and credit_score > 700 and not criminal_record\nprint(loan_approved)",
        "starterCode": "annual_income = 55000\ncredit_score = 720\ncriminal_record = False\n# Write your loan logic check and print below\n"
    },
    {
        "id": 25,
        "title": "Beginner coding challenge",
        "concept": "First algorithmic coding exercises",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Beginner Coding Challenge",
            "subheading": "Put your knowledge to the test!",
            "body": "<p>Congratulations on reaching <strong>Level 25</strong>, which marks the completion of <strong>STAGE 3: Operators & Logic</strong>!</p>\n\n<p>Now, you will face your first major coding challenge. Instead of writing simple one-line checks, you will combine all the concepts you have learned so far:</p>\n<ul class=\"desc-list\">\n    <li>Storing and manipulating values inside <strong>variables</strong>.</li>\n    <li>Using <strong>arithmetic operators</strong> like floor division (<code>//</code>) and modulus (<code>%</code>).</li>\n    <li>Constructing clean, formatted outputs using <strong>f-strings</strong>.</li>\n</ul>\n\n<p>Solving coding challenges requires a systematic approach. Make sure you read the requirements carefully, define the correct variables, run the necessary calculations, and double-check your output formatting. Good luck!</p>"
        },
        "qna": [
            {
                "q": "What is an algorithmic coding challenge?",
                "a": "An algorithmic coding challenge is a structured problem where you are given a description, inputs, and expected outputs, and you must write code to solve it."
            },
            {
                "q": "How should I approach a coding challenge?",
                "a": "First, carefully read and understand the problem requirements. Identify inputs, expected outputs, and boundaries. Plan the logic in your mind or using code comments, then write and test your solution."
            },
            {
                "q": "Can I use multiple operators together in coding challenges?",
                "a": "Yes! You can chain calculations, comparisons, and logical checks. Use parentheses <code>()</code> to guarantee the operations execute in the order you expect."
            },
            {
                "q": "What is formatting and why is it verified in challenges?",
                "a": "Formatting guarantees that output matches expected user interfaces or API structures. Printing raw numbers is often not enough; you must present data in clean, readable sentence formats using f-strings."
            },
            {
                "q": "What are edge cases?",
                "a": "Edge cases are unusual or extreme inputs that might break a program (like negative values, extremely large numbers, or zero). Designing programs to handle edge cases is an essential coding skill."
            }
        ],
        "test": {
            "intro": "Let's check your preparation for the final Stage 3 coding challenge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which steps describe the correct order of solving a coding challenge?",
                    "options": [
                        "Write code, debug, submit without reading",
                        "Understand requirements, plan logic, write code, test",
                        "Copy from internet, paste, run",
                        "Guess options, submit, repeat"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If a challenge asks you to calculate the area of a rectangle given length and width, which operator do you use?",
                    "options": [
                        "+",
                        "-",
                        "*",
                        "/"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "If a challenge requires you to read a user's age as a whole integer from input, which syntax is correct?",
                    "options": [
                        "age = input()",
                        "age = int(input())",
                        "age = float(input())",
                        "age = str(input())"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "A test case with extreme or unusual inputs that could potentially break a program is called an _____ case. (edge / 3 / variable / f)",
                    "answer": "edge"
                },
                {
                    "type": "fill",
                    "question": "The formatting style that embeds variables directly inside string curly braces is called an _____-string. (f / variable / 3 / edge)",
                    "answer": "f"
                },
                {
                    "type": "fill",
                    "question": "If x = 10 and y = 3, then x // y evaluates to the integer _____. (5 / 4 / 3 / 2)",
                    "answer": "3"
                },
                {
                    "type": "tf",
                    "question": "Algorithmic challenges only accept one specific way of writing the code, and other valid approaches will fail.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "It is a good practice to plan your code on paper or in comments before writing it.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The statement print('Result:', result) is a basic way of formatting output.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "If a challenge asks you to check if a number is positive and even, what logical expression would you write?",
                    "sampleAnswer": "number > 0 and number % 2 == 0"
                }
            ]
        },
        "scenario": "Doraemon has a budget of 100 coins and wants to buy as many dorayakis as possible. Each dorayaki costs 15 coins. Calculate: 1. The maximum number of whole dorayakis Doraemon can buy using floor division (//) and store it in 'max_dorayakis'. 2. The leftover change (remaining coins) using modulus (%) and store it in 'leftover_coins'. Finally, print the result using exactly this format (use an f-string): 'Doraemon can buy {max_dorayakis} dorayakis with {leftover_coins} coins left.'",
        "hint": "Set max_dorayakis = budget // cost_per_dorayaki, leftover_coins = budget % cost_per_dorayaki, and print using the specified f-string.",
        "wrongHint": "Make sure you use floor division and modulus, and print the exact format: 'Doraemon can buy {max_dorayakis} dorayakis with {leftover_coins} coins left.'!",
        "solution": "budget = 100\ncost_per_dorayaki = 15\nmax_dorayakis = budget // cost_per_dorayaki\nleftover_coins = budget % cost_per_dorayaki\nprint(f\"Doraemon can buy {max_dorayakis} dorayakis with {leftover_coins} coins left.\")",
        "starterCode": "budget = 100\ncost_per_dorayaki = 15\n# Calculate max_dorayakis and leftover_coins, then print the formatted string\n"
    },
    {
        "id": 26,
        "title": "Why decisions in programming",
        "concept": "Understanding the concept of conditional branching and why programs need decision-making paths",
        "sections": [
            "description",
            "qna",
            "test"
        ],
        "description": {
            "heading": "Why Decisions in Programming",
            "subheading": "How programs make choices and adapt",
            "body": "<p>Up until now, all the Python programs we have written have run line-by-line, sequentially, from top to bottom. Every single line of code executed, no matter what inputs or values were active. This is called a linear execution flow.</p>\n\n<p>But real life isn't a straight line. We make choices based on criteria: <em>\"If it is raining, take an umbrella. Otherwise, leave it at home.\"</em></p>\n\n<h3>The Concept of Conditional Branching</h3>\n<p>Computer programs need this same intelligence. We call this <strong>Conditional Branching</strong> or **Decision Making**. Without decision-making capability, software would be completely static and inflexible:</p>\n<ul class=\"desc-list\">\n    <li>A **login page** would let everyone in because it couldn't check <em>if</em> the password is correct.</li>\n    <li>An **ATM** would dispense cash even if you have zero balance because it couldn't check <em>if</em> you have sufficient funds.</li>\n    <li>A **video game** wouldn't show a \"Game Over\" screen because it couldn't check <em>if</em> player lives have hit zero.</li>\n</ul>\n\n<h3>How Decisions Work in Python</h3>\n<p>In Python, decision-making is controlled by checking expressions that resolve to a boolean value (<code>True</code> or <code>False</code>). Based on that true/false state, the program branches and executes a specific block of code while skipping other blocks completely.</p>\n\n<blockquote class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>What's Next?</strong> In the following levels, we will learn the exact syntax to implement these decisions using keywords like <code>if</code>, <code>else</code>, and <code>elif</code>!</div>\n</blockquote>"
        },
        "qna": [
            {
                "q": "Why does code need decision-making statements?",
                "a": "Without them, programs can only run sequentially, executing every line of code. Decision-making statements allow programs to choose which code block to run based on runtime conditions."
            },
            {
                "q": "What is conditional branching?",
                "a": "Conditional branching is the mechanism by which a program executes different instructions or paths (branches) depending on whether a given condition evaluates to True or False."
            },
            {
                "q": "How do computers evaluate decisions?",
                "a": "Computers evaluate decisions by checking conditional expressions. These expressions resolve to a boolean value: either <code>True</code> or <code>False</code>. If True, one branch executes; if False, another does."
            },
            {
                "q": "Give a real-life example of decision-making logic in software.",
                "a": "An ATM withdrawal: <strong>If</strong> the requested cash amount is less than or equal to the account balance, dispense the money. <strong>Else</strong>, display an error message."
            },
            {
                "q": "What keywords does Python use for decision making?",
                "a": "Python uses the keywords <code>if</code>, <code>elif</code> (short for else-if), and <code>else</code> to control code execution flow."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of why decision making is necessary in coding!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the primary purpose of decision-making statements in programming?",
                    "options": [
                        "To speed up program execution",
                        "To run code conditionally based on specific criteria",
                        "To repeat code blocks multiple times",
                        "To delete variables from memory"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which flow describes a sequential program?",
                    "options": [
                        "Lines execute out of order randomly",
                        "Lines execute one after another from top to bottom",
                        "Lines execute only if a button is clicked",
                        "Lines are skipped automatically"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What data type must a decision condition evaluate to in Python?",
                    "options": [
                        "An integer",
                        "A string",
                        "A boolean (True or False)",
                        "A float"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The concept of executing different blocks of code based on conditions is called conditional _____. (else / if / branching / variable)",
                    "answer": "branching"
                },
                {
                    "type": "fill",
                    "question": "In Python, the statement used to run code ONLY if a condition is True starts with the keyword _____. (if / else / elif / for)",
                    "answer": "if"
                },
                {
                    "type": "fill",
                    "question": "If a condition is False, the fallback code block that runs is defined by the keyword _____. (elif / else / if / for)",
                    "answer": "else"
                },
                {
                    "type": "tf",
                    "question": "Sequential code executes every line from start to finish without skipping any statement.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A program can make a decision without using boolean values.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Decision statements allow programs to interact dynamically with user inputs.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Give three real-world examples of conditional decisions in common mobile applications.",
                    "sampleAnswer": "1. Messengers: If message is sent, show one check; if delivered, show two checks. 2. Stores: If cart total is over 50, apply free shipping. 3. Games: If lives are 0, end the game."
                }
            ]
        }
    },
    {
        "id": 27,
        "title": "if statement",
        "concept": "Executing code conditionally using the 'if' statement, indentation syntax, and conditional blocks in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The if Statement",
            "subheading": "Running code only when a condition is True",
            "body": "<p>The simplest way to make a decision in Python is by using the <strong><code>if</code> statement</strong>. It tells the computer to run a block of code ONLY if a certain condition is True.</p>\n\n<h3>Basic Syntax</h3>\n<pre class=\"code-example\">if condition:\n    # code to run if condition is True</pre>\n\n<h3>Two Crucial Python Syntax Rules</h3>\n<ol class=\"desc-list\">\n    <li><strong>The Colon (<code>:</code>):</strong> You must place a colon at the end of the <code>if</code> line. This indicates that a new block of code is about to start.</li>\n    <li><strong>Indentation:</strong> In Python, we do not use curly braces <code>{}</code> to group blocks of code. Instead, we indent (typically 4 spaces or 1 tab) the code block. All statements with the same level of indentation are part of that conditional block!</li>\n</ol>\n\n<pre class=\"code-example\">is_raining = True\nif is_raining:\n    print(\"Grab your umbrella!\")\n    print(\"Put on a raincoat!\")\nprint(\"Have a nice day!\") # This always runs because it is not indented!</pre>\n\n<p>If <code>is_raining</code> is <code>False</code>, Python skips the indented lines completely and prints only \"Have a nice day!\".</p>"
        },
        "qna": [
            {
                "q": "What does the 'if' statement do?",
                "a": "The <code>if</code> statement checks if a condition is True. If so, it runs the indented code block directly underneath. If the condition is False, Python skips that block."
            },
            {
                "q": "Why is indentation syntactically required in Python?",
                "a": "Unlike languages like JavaScript or C++ that use curly brackets <code>{}</code> to group statements, Python uses indentation level. Incorrect indentation will cause an <code>IndentationError</code>."
            },
            {
                "q": "What is the standard indentation size?",
                "a": "The standard Python style (PEP 8) recommends using <strong>4 spaces</strong> per indentation level. Be consistent and avoid mixing tabs and spaces!"
            },
            {
                "q": "What happens if I forget the colon (:) at the end of the if line?",
                "a": "Forgetting the colon will result in a <code>SyntaxError</code> because Python requires the colon to mark the start of a conditional block."
            },
            {
                "q": "Can I use a boolean variable directly as the condition?",
                "a": "Yes! If <code>is_active = True</code>, you can simply write <code>if is_active:</code> instead of <code>if is_active == True:</code>. It is cleaner and more professional."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's basic if statement!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the correct syntax for a basic if statement in Python?",
                    "options": [
                        "if x > 5 print(x)",
                        "if (x > 5) { print(x) }",
                        "if x > 5:",
                        "if x > 5 then:"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "How does Python determine which lines of code belong inside an if block?",
                    "options": [
                        "By placing them inside parentheses ()",
                        "By indenting the lines",
                        "By ending lines with a semicolon ;",
                        "By placing them on the same line"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which error is raised if you forget to indent code inside an if block?",
                    "options": [
                        "SyntaxError",
                        "TypeError",
                        "IndentationError",
                        "NameError"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "In Python, you must put a _____ character at the end of the line containing the if condition. (semicolon / comma / period / colon)",
                    "answer": "colon"
                },
                {
                    "type": "fill",
                    "question": "The recommended number of spaces to use for indentation in Python is _____. (6 / 5 / 4 / 3)",
                    "answer": "4"
                },
                {
                    "type": "fill",
                    "question": "If has_key = False, the code inside the block 'if has_key:' will be _____ during execution. (skipped / variable / colon / 4)",
                    "answer": "skipped"
                },
                {
                    "type": "tf",
                    "question": "You can use curly brackets {} to group code blocks in Python just like in JavaScript.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Mixing spaces and tabs for indentation in the same code block can cause an IndentationError.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The condition in an if statement must always evaluate to a boolean (True or False).",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "If temperature = 32, explain what happens when this code runs:\nif temperature > 30:\n    print('Hot')\nprint('Done')",
                    "sampleAnswer": "Since temperature is 32, which is greater than 30, the condition is True. Python runs the indented line printing 'Hot', then runs the unindented sequential line printing 'Done'."
                }
            ]
        },
        "scenario": "Define a variable is_raining = True. Write an if statement that checks if is_raining is True. If it is, print the message 'Take an umbrella!'.",
        "hint": "Write if is_raining:, then on the next line indent 4 spaces and print('Take an umbrella!').",
        "wrongHint": "Make sure you check is_raining, end the if statement with a colon, and indent the print statement properly!",
        "solution": "is_raining = True\nif is_raining:\n    print(\"Take an umbrella!\")",
        "starterCode": "is_raining = True\n# Write your if statement below to check is_raining and print \"Take an umbrella!\"\n"
    },
    {
        "id": 28,
        "title": "if-else",
        "concept": "Providing an alternative path when a condition is false using the 'if-else' statement in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The if-else Statement",
            "subheading": "Providing a fallback choice",
            "body": "<p>Sometimes you want to run one block of code if a condition is True, and a <strong>different block</strong> of code if it is False. This is handled using the <strong><code>if-else</code> statement</strong>.</p>\n\n<h3>Basic Syntax</h3>\n<pre class=\"code-example\">if condition:\n    # Runs if condition is True\nelse:\n    # Runs if condition is False</pre>\n\n<h3>Important Syntax Rules</h3>\n<ol class=\"desc-list\">\n    <li><strong>No Condition for Else:</strong> The <code>else</code> keyword represents a catch-all fallback. It never takes a condition.</li>\n    <li><strong>The Colon:</strong> Just like <code>if</code>, the <code>else</code> keyword must end with a colon (<code>:</code>).</li>\n    <li><strong>Alignment:</strong> The <code>else</code> keyword must be at the exact same indentation level (aligned vertically) as the <code>if</code> keyword.</li>\n    <li><strong>Indented Blocks:</strong> The code inside both the <code>if</code> and <code>else</code> blocks must be indented.</li>\n</ol>\n\n<pre class=\"code-example\">score = 45\nif score &gt;= 50:\n    print(\"You passed!\")\nelse:\n    print(\"You failed. Try again!\")</pre>\n<p>Since <code>score</code> is <code>45</code>, <code>score &gt;= 50</code> is False. Python skips the first print block, goes straight to the <code>else</code> block, and prints \"You failed. Try again!\".</p>"
        },
        "qna": [
            {
                "q": "When should I use an if-else statement?",
                "a": "Use <code>if-else</code> when you have two mutually exclusive choices: one block of code should run if the condition is True, and another different block should run if the condition is False."
            },
            {
                "q": "Does the else block accept a condition expression?",
                "a": "No, <code>else</code> is a fallback. It simple handles any cases that do not satisfy the <code>if</code> condition, so it does not accept a condition."
            },
            {
                "q": "How must the 'else' keyword be aligned in the editor?",
                "a": "It must be aligned vertically with the exact same indentation level as its matching <code>if</code> statement. Alignment mismatches will throw a <code>SyntaxError</code>."
            },
            {
                "q": "Can I write regular code after an if-else block?",
                "a": "Yes! Unindented code written after the <code>if-else</code> structure will execute sequentially, regardless of which branch of the decision was evaluated."
            },
            {
                "q": "What happens if both the if and else code blocks are placed on a single line?",
                "a": "While single-line statements are occasionally possible for trivial instructions, standard Python blocks require new lines and proper indentations for formatting correctness."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's if-else statement!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword executes code when the if condition evaluates to False?",
                    "options": [
                        "elseif",
                        "else",
                        "then",
                        "otherwise"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which of the following has correct syntax for an if-else structure?",
                    "options": [
                        "if x > 5: print(x) else: print(y)",
                        "if x > 5:\n    print(x)\nelse:\n    print(y)",
                        "if x > 5:\n    print(x)\n    else:\n    print(y)",
                        "if x > 5:\n    print(x)\nelse x <= 5:\n    print(y)"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Does the else keyword take a conditional expression?",
                    "options": [
                        "Yes, always",
                        "No, never",
                        "Only if it is a number",
                        "Only if it is a boolean"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The else keyword must always be followed by a _____ symbol. (semicolon / comma / period / colon)",
                    "answer": "colon"
                },
                {
                    "type": "fill",
                    "question": "If age = 18, then age >= 18 is True, so the _____ block of an if-else statement executes. (if / else / elif / for)",
                    "answer": "if"
                },
                {
                    "type": "fill",
                    "question": "If age = 15, then age >= 18 is False, so the _____ block of an if-else statement executes. (elif / else / if / for)",
                    "answer": "else"
                },
                {
                    "type": "tf",
                    "question": "The else keyword must have the exact same indentation level as its matching if keyword.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A single if statement can have multiple else blocks directly connected to it.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Writing else: on the same line as the if block is valid in Python.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Correct the indentation of this snippet:\nx = 10\nif x > 5:\nprint('Big')\nelse:\nprint('Small')",
                    "sampleAnswer": "Align x = 10, if, and else. Indent print('Big') and print('Small') by 4 spaces."
                }
            ]
        },
        "scenario": "Write an if-else statement to check if a user is allowed to enter a game zone. Define age = 15. If age is greater than or equal to 18, print 'Access Granted'. Otherwise (else), print 'Access Denied'.",
        "hint": "Write if age >= 18:, indent and print('Access Granted'), then write else: aligned with if, and print('Access Denied').",
        "wrongHint": "Make sure you check if age >= 18, use colons, align else with if, and print the exact messages!",
        "solution": "age = 15\nif age >= 18:\n    print(\"Access Granted\")\nelse:\n    print(\"Access Denied\")",
        "starterCode": "age = 15\n# Write your if-else statement below to check age and print the appropriate message\n"
    },
    {
        "id": 29,
        "title": "elif",
        "concept": "Checking multiple distinct conditions sequentially using the 'elif' statement in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The elif Keyword",
            "subheading": "Checking multiple distinct conditions",
            "body": "<p>What if your decision has more than two possible outcomes? E.g., if a score is 90 or more, print Grade A; if it's 80 or more, print Grade B; otherwise, print Grade C. In Python, we write \"else if\" as <strong><code>elif</code></strong>.</p>\n\n<h3>Syntax Structure</h3>\n<pre class=\"code-example\">if condition_1:\n    # Runs if condition_1 is True\nelif condition_2:\n    # Runs if condition_1 is False AND condition_2 is True\nelse:\n    # Runs if all preceding conditions are False</pre>\n\n<h3>Crucial Rules of elif</h3>\n<ol class=\"desc-list\">\n    <li><strong>Sequential Evaluation:</strong> Python checks conditions from top to bottom. The moment it finds a condition that evaluates to True, it runs that block and **skips the remaining checks entirely** (even if other conditions would also be True!).</li>\n    <li><strong>Chain Length:</strong> You can add as many <code>elif</code> statements as you need between the initial <code>if</code> and the final optional <code>else</code> block.</li>\n</ol>\n\n<pre class=\"code-example\">score = 85\nif score &gt;= 90:\n    print(\"Grade A\")\nelif score &gt;= 80:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")\n# Output: Grade B (85 &gt;= 80 is True, so Grade C is skipped)</pre>"
        },
        "qna": [
            {
                "q": "What does 'elif' stand for?",
                "a": "It stands for <strong>else if</strong>. It checks a condition only when all preceding <code>if</code> and <code>elif</code> checks have evaluated to False."
            },
            {
                "q": "How many 'elif' blocks can follow a single 'if'?",
                "a": "You can chain as many <code>elif</code> statements as you need. There is no limit."
            },
            {
                "q": "Why is the order of conditions important in an if-elif block?",
                "a": "Since Python evaluates top-to-bottom and stops checking once it finds a True condition, placing broad conditions first can hide more specific conditions beneath them, causing logic bugs."
            },
            {
                "q": "Can I use 'elif' without a preceding 'if' statement?",
                "a": "No, an <code>elif</code> statement must always belong to an active block initiated by a starting <code>if</code> statement. Doing otherwise triggers a <code>SyntaxError</code>."
            },
            {
                "q": "Is the final 'else' block mandatory?",
                "a": "No, the final <code>else</code> is optional. If all conditions are False and there is no <code>else</code>, Python simply skips the entire block and moves on."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's elif statement!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What does elif stand for in Python?",
                    "options": [
                        "else life",
                        "else if",
                        "element if",
                        "error life"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "How many elif blocks can follow a single if statement?",
                    "options": [
                        "Only one",
                        "At most two",
                        "Unlimited",
                        "None"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "If score = 95 is run, what is printed?\nif score >= 80: print('Pass')\nelif score >= 90: print('Excellent')",
                    "options": [
                        "Pass",
                        "Excellent",
                        "Pass and Excellent",
                        "Nothing"
                    ],
                    "answer": 0
                },
                {
                    "type": "fill",
                    "question": "In Python, the elif keyword must be followed by a condition and end with a _____. (semicolon / comma / period / colon)",
                    "answer": "colon"
                },
                {
                    "type": "fill",
                    "question": "The fallback block that runs only if all if/elif conditions are False is the _____ block. (elif / else / if / for)",
                    "answer": "else"
                },
                {
                    "type": "fill",
                    "question": "If x = 0, the code: if x > 0: print('P') elif x < 0: print('N') else: print('Z') prints _____. (colon / Z / else / Variable)",
                    "answer": "Z"
                },
                {
                    "type": "tf",
                    "question": "You can write an elif statement before the starting if statement.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Once any branch in an if-elif-else chain executes, all subsequent branches are skipped.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The final else block executes if at least one elif condition is True.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain why this code prints 'Grade C' for score = 95:\nif score >= 70: print('Grade C')\nelif score >= 90: print('Grade A')",
                    "sampleAnswer": "Since 95 >= 70 is True, Python executes the first block ('Grade C') and immediately exits, skipping the remaining checks."
                }
            ]
        },
        "scenario": "Write an if-elif-else statement to categorize a package's weight. Define weight = 8. If weight is less than or equal to 2, print 'Light'. Else if weight is less than or equal to 10, print 'Medium'. Otherwise (else), print 'Heavy'.",
        "hint": "Write if weight <= 2:, then elif weight <= 10:, then else:, and print the corresponding labels.",
        "wrongHint": "Make sure you use colons, proper indentation, and print the exact labels!",
        "solution": "weight = 8\nif weight <= 2:\n    print(\"Light\")\nelif weight <= 10:\n    print(\"Medium\")\nelse:\n    print(\"Heavy\")",
        "starterCode": "weight = 8\n# Write your if-elif-else statement below to categorize weight\n"
    },
    {
        "id": 30,
        "title": "Nested conditions",
        "concept": "Placing conditional statements inside other conditional statements in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Nested Conditions",
            "subheading": "Decisions within decisions",
            "body": "<p>Sometimes, a decision depends on another decision. For example: Is it the weekend? If yes, is it sunny? If yes, go to the beach. In programming, placing a conditional statement <strong>inside another conditional statement</strong> is called <strong>Nesting</strong>.</p>\n\n<h3>Syntax and Indentation Levels</h3>\n<p>Nesting requires careful indentation. Each nested statement must be indented by an additional level (e.g. 4 more spaces) relative to the outer statement. Correct alignment is essential for Python to understand your code structure!</p>\n\n<pre class=\"code-example\">is_weekend = True\nis_sunny = False\n\nif is_weekend:\n    print(\"It's the weekend!\")\n    if is_sunny:\n        print(\"Let's go to the beach!\")\n    else:\n        print(\"Let's watch a movie!\") # Runs because is_sunny is False\nelse:\n    print(\"Go to school!\")</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Readability Tip:</strong> Try to avoid nesting code too deeply (e.g. more than 3 levels). Deeply nested code is hard to read and debug. You can often simplify nested logic by using logical operators like <code>and</code> or <code>or</code>!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What are nested conditions?",
                "a": "Nested conditions are conditional statements (like <code>if</code> or <code>if-else</code>) written inside the execution block of another conditional statement."
            },
            {
                "q": "How does Python determine which block an else statement belongs to?",
                "a": "Python matches an <code>else</code> statement to the preceding <code>if</code> statement that shares the exact same vertical alignment (indentation level)."
            },
            {
                "q": "Is there a limit to nesting depth in Python?",
                "a": "There is no strict compiler limit, but nesting deeper than 3 levels is considered poor practice because it creates hard-to-read code."
            },
            {
                "q": "When should I use nesting instead of a logical 'and'?",
                "a": "Use nesting if you need to run specific intermediate operations (e.g. log actions or update variables) after the first check passes but before the second check runs."
            },
            {
                "q": "What happens if the outer condition evaluates to False?",
                "a": "If the outer condition is False, Python skips the entire block, which means all inner nested conditions are completely ignored."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's nested conditions!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is a nested condition in programming?",
                    "options": [
                        "Putting loops inside functions",
                        "Placing a conditional statement inside another conditional statement",
                        "Using multiple logical operators in one line",
                        "Writing code in comments"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "How does Python match an else block to its corresponding if statement?",
                    "options": [
                        "By matching parentheses",
                        "By checking their vertical alignment (indentation)",
                        "By evaluation order",
                        "By variable names"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If x = 5 and y = 10, what does this print?\nif x > 2:\n    if y < 5: print('A')\n    else: print('B')",
                    "options": [
                        "A",
                        "B",
                        "A and B",
                        "Nothing"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Each level of nesting in Python code requires another level of _____. (logical / indentation / variable / skipped)",
                    "answer": "indentation"
                },
                {
                    "type": "fill",
                    "question": "If the outer condition is False, all nested inner conditions inside it are _____. (skipped / variable / indentation / logical)",
                    "answer": "skipped"
                },
                {
                    "type": "fill",
                    "question": "To keep code clean, instead of deep nesting, you can combine conditions using _____ operators. (indentation / variable / skipped / logical)",
                    "answer": "logical"
                },
                {
                    "type": "tf",
                    "question": "An inner else statement must be aligned with its corresponding inner if statement.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "If the outer condition is False, the inner else statement can still run.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Nested statements can have their own nested statements inside them.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain why this code prints nothing: if x > 5: (where x = 3) if y > 10: print('Yes')",
                    "sampleAnswer": "The outer condition x > 5 (3 > 5) evaluates to False. Python skips the entire block, ignoring the inner y check."
                }
            ]
        },
        "scenario": "Write a nested condition to check access credentials. Define has_id = True and is_guest = False. First, check if has_id is True. If it is, print 'ID verified.'. Inside that block, check if is_guest is True: if it is, print 'Guest access approved.'; otherwise (else), print 'Member access approved.'. If has_id is False (outer else), print 'No ID. Access Denied.'.",
        "hint": "Write if has_id:, indent print('ID verified.') and write if is_guest: below it, indenting the guest outcomes. Write else: aligned with if has_id:.",
        "wrongHint": "Make sure you nested is_guest under has_id, align colons, and print the exact messages!",
        "solution": "has_id = True\nis_guest = False\nif has_id:\n    print(\"ID verified.\")\n    if is_guest:\n        print(\"Guest access approved.\")\n    else:\n        print(\"Member access approved.\")\nelse:\n    print(\"No ID. Access Denied.\")",
        "starterCode": "has_id = True\nis_guest = False\n# Write your nested conditions below\n"
    },
    {
        "id": 31,
        "title": "Multiple conditions",
        "concept": "Combining multiple conditions in an 'if' statement using logical operators 'and', 'or', and 'not' in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Multiple Conditions",
            "subheading": "Combining choices with logical operators",
            "body": "<p>In Level 30, we saw that nesting conditions too deeply can make code complex and hard to read. A much cleaner way to handle multiple checks in a single decision is by combining conditions using <strong>logical operators</strong> (<code>and</code>, <code>or</code>, <code>not</code>).</p>\n\n<h3>Nesting vs Combining</h3>\n<p>Instead of nesting if statements like this:</p>\n<pre class=\"code-example\">if is_weekend:\n    if is_sunny:\n        print(\"Go to the beach!\")</pre>\n\n<p>We can combine them on a single line using <code>and</code>:</p>\n<pre class=\"code-example\">if is_weekend and is_sunny:\n    print(\"Go to the beach!\")</pre>\n\n<h3>Reviewing Logical Operators in Decisions</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>and</code>:</strong> The code block runs ONLY if <strong>both</strong> conditions evaluate to True.</li>\n    <li><strong><code>or</code>:</strong> The code block runs if <strong>at least one</strong> condition evaluates to True.</li>\n    <li><strong><code>not</code>:</strong> Inverts the boolean result of a check. E.g. <code>if not is_locked:</code> runs if is_locked is False.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Syntax Reminder:</strong> Even with combined conditions, the colon (<code>:</code>) goes at the very end of the <code>if</code> line, and the lines belonging to the execution block must be indented by 4 spaces. Always use parentheses <code>()</code> to make complex combinations readable!</div>\n</div>"
        },
        "qna": [
            {
                "q": "When should I combine conditions instead of nesting them?",
                "a": "Combine conditions when you want to execute a block of code only when a set of conditions are all met (using <code>and</code>) or when at least one condition is met (using <code>or</code>), without needing intermediate operations."
            },
            {
                "q": "Can I combine more than two conditions in a single if statement?",
                "a": "Yes! You can chain multiple checks together. For example: <code>if age &gt;= 18 and has_id and not is_suspended:</code>."
            },
            {
                "q": "How does Python evaluate combined expressions with different logical operators?",
                "a": "Python evaluates <code>and</code> before <code>or</code> because of precedence. To avoid logical errors and ensure your checks run in the correct order, wrap grouped conditions inside parentheses <code>()</code>."
            },
            {
                "q": "What is short-circuit evaluation in combined if statements?",
                "a": "In an <code>and</code> check, if the first condition is False, Python stops evaluating immediately. In an <code>or</code> check, if the first condition is True, Python stops immediately. This saves computing power."
            },
            {
                "q": "Can I check variables of different data types in the same conditional line?",
                "a": "Yes, as long as each separate expression evaluates to a boolean value. E.g., <code>if age &gt;= 18 and user_role == 'admin':</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of combining multiple conditions in Python!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which operator checks if both conditions are True in a single if statement?",
                    "options": [
                        "or",
                        "and",
                        "not",
                        "is"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is printed when this code is executed?\nx = 5\ny = 10\nif x > 3 or y < 5: print('Hello')\nelse: print('Goodbye')",
                    "options": [
                        "Hello",
                        "Goodbye",
                        "Hello and Goodbye",
                        "Nothing"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "If is_logged_in = True and has_permission = False, which condition evaluates to True?",
                    "options": [
                        "if is_logged_in and has_permission:",
                        "if is_logged_in or has_permission:",
                        "if not is_logged_in and has_permission:",
                        "if is_logged_in and not is_logged_in:"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The logical operator that requires only one of the combined conditions to be True is _____. (elif / else / if / or)",
                    "answer": "or"
                },
                {
                    "type": "fill",
                    "question": "To override the standard evaluation order where 'and' runs before 'or', you should use _____. (parentheses / semicolon / colon / comma)",
                    "answer": "parentheses"
                },
                {
                    "type": "fill",
                    "question": "If x = 7, the expression x > 5 and x < 10 evaluates to the boolean _____. (None / True / undefined / False)",
                    "answer": "True"
                },
                {
                    "type": "tf",
                    "question": "Chaining multiple 'and' operators in a single if statement requires all conditions to be True for the block to run.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "In the check: if A or B:, if A evaluates to True, Python still evaluates B to verify its correctness.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The statement: if not is_sunny: runs only when is_sunny is False.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain what is wrong with this statement: if score >= 50 and <= 100:",
                    "sampleAnswer": "Each logical comparison must be a complete expression with both a left and right side. It should be: if score >= 50 and score <= 100:"
                }
            ]
        },
        "scenario": "Write a program to check admission discount eligibility. Define age = 8 and has_membership = True. Create a variable 'gets_discount' which is True if the visitor's age is less than 12 AND they have a membership. Finally, print 'gets_discount'.",
        "hint": "Assign the values, then write gets_discount = age < 12 and has_membership, and print(gets_discount).",
        "wrongHint": "Make sure you combine conditions using the logical operator 'and' and print the gets_discount variable!",
        "solution": "age = 8\nhas_membership = True\ngets_discount = age < 12 and has_membership\nprint(gets_discount)",
        "starterCode": "age = 8\nhas_membership = True\n# Write your combined condition and print gets_discount below\n"
    },
    {
        "id": 32,
        "title": "Short-hand if",
        "concept": "Writing concise single-line 'if' statements when there is only one statement to execute in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Short-Hand if",
            "subheading": "Writing single-line conditional statements",
            "body": "<p>If you only have a single statement to execute inside your <code>if</code> block, you can write it all on a single line! This is known as <strong>Short-Hand <code>if</code></strong>.</p>\n\n<h3>Standard vs Short-Hand Syntax</h3>\n<p>Standard multi-line <code>if</code> statement:</p>\n<pre class=\"code-example\">x = 10\nif x &gt; 5:\n    print(\"x is positive\")</pre>\n\n<p>Short-hand single-line <code>if</code> statement:</p>\n<pre class=\"code-example\">x = 10\nif x &gt; 5: print(\"x is positive\")</pre>\n\n<p>Both snippets do the exact same thing. The short-hand version is useful for making simple checks concise and saving space in your files.</p>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Readability Note:</strong> You should only use short-hand single-line checks for very short and simple statements. Chaining too many commands on one line makes code hard to read and goes against Python's clean code style guidelines!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a short-hand if statement?",
                "a": "A short-hand if statement is a syntax shortcut that allows you to write a complete <code>if</code> check and its execution body on a single line."
            },
            {
                "q": "What is the syntax for short-hand if?",
                "a": "Simply write the condition, a colon, a space, and the single statement to execute. E.g. <code>if condition: statement</code>."
            },
            {
                "q": "Can I write multiple statements on the same line after the colon?",
                "a": "Technically, Python allows separating multiple statements with a semicolon (e.g. <code>if x &gt; 5: print('Yes'); x = 0</code>), but this is considered bad practice because it decreases code readability."
            },
            {
                "q": "When should I avoid using short-hand if?",
                "a": "Avoid it when the condition is long, when there are multiple statements to run, or when using complex nested structures. Keep code clean and easy to scan."
            },
            {
                "q": "Does short-hand if run faster?",
                "a": "No, it performs exactly the same as the multi-line version. It is just syntactic sugar to make source files cleaner for developers."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's short-hand if statement!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which of the following is a valid short-hand if statement in Python?",
                    "options": [
                        "if x > 5: print(x)",
                        "if x > 5 then print(x)",
                        "if x > 5: { print(x) }",
                        "if x > 5: print x"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "When is it recommended to use short-hand if?",
                    "options": [
                        "For all conditionals",
                        "Only when there is a single simple statement to execute",
                        "When nesting multiple checks",
                        "Never"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What separates multiple statements on a single line in Python (though discouraged)?",
                    "options": [
                        ", (comma)",
                        "; (semicolon)",
                        ". (period)",
                        "/ (slash)"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The syntax shortcut where the condition and execution body are written on one line is called _____ if. (0 / colon / variable / short-hand)",
                    "answer": "short-hand"
                },
                {
                    "type": "fill",
                    "question": "In the statement 'if x > 5: print(x)', the print statement is placed directly after the _____ character. (semicolon / comma / period / colon)",
                    "answer": "colon"
                },
                {
                    "type": "fill",
                    "question": "If x = 4, the expression 'if x > 5: print(\"Yes\")' will execute _____ lines of output. (1 / 0 / 2 / -1)",
                    "answer": "0"
                },
                {
                    "type": "tf",
                    "question": "Short-hand if statements require indenting the code block on the next line.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Writing 'if score >= 50: print(\"Passed\")' is syntactically valid in Python.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Short-hand if performs checks faster than standard multi-line if statements.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Rewrite this multi-line code into a single-line short-hand if statement:\nif is_active:\n    print('Online')",
                    "sampleAnswer": "if is_active: print('Online')"
                }
            ]
        },
        "scenario": "Define a variable has_gadget = True. Write a single-line short-hand if statement to check if has_gadget is True. If it is, print the message 'Gadget Ready!'.",
        "hint": "Write: if has_gadget: print('Gadget Ready!') on one line.",
        "wrongHint": "Make sure you write the entire statement on a single line, directly after the colon!",
        "solution": "has_gadget = True\nif has_gadget: print(\"Gadget Ready!\")",
        "starterCode": "has_gadget = True\n# Write your single-line short-hand if statement below\n"
    },
    {
        "id": 33,
        "title": "Ternary operator",
        "concept": "Evaluating conditional expressions in a single line using the ternary operator format in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Ternary Operator",
            "subheading": "Conditional expressions on a single line",
            "body": "<p>We have seen short-hand <code>if</code> for running single statements. What if we want to <strong>assign a value to a variable</strong> based on a condition? E.g., if score is 50 or more, result is \"Pass\", else result is \"Fail\".</p>\n\n<p>Instead of writing 4 lines of block code, we can use Python's <strong>Ternary Operator</strong> (also called a conditional expression) to do this in a single line!</p>\n\n<h3>Syntax Structure</h3>\n<pre class=\"code-example\">variable = value_if_true if condition else value_if_false</pre>\n\n<pre class=\"code-example\">score = 80\nresult = \"Pass\" if score &gt;= 50 else \"Fail\"\nprint(result) # Outputs: Pass</pre>\n\n<h3>Analyzing the Expression</h3>\n<ol class=\"desc-list\">\n    <li>First, specify the value you want if the condition is True (<code>\"Pass\"</code>).</li>\n    <li>Second, write the keyword <code>if</code> and the condition to test (<code>score &gt;= 50</code>).</li>\n    <li>Third, write the keyword <code>else</code> and the value you want if the condition is False (<code>\"Fail\"</code>).</li>\n</ol>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>No Colons:</strong> Notice that colons (<code>:</code>) are NOT used anywhere in a ternary operator expression. You can even pass ternary expressions directly inside functions, like <code>print(\"Access granted\" if is_admin else \"Access denied\")</code>!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is the ternary operator in Python?",
                "a": "The ternary operator is a shortcut syntax that evaluates a condition and returns one value if the condition is True, and an alternative value if it is False, all on a single line."
            },
            {
                "q": "What is the syntax for the ternary operator?",
                "a": "The format is: <code>value_if_true if condition else value_if_false</code>."
            },
            {
                "q": "Why is it called 'ternary'?",
                "a": "Because it takes three parts (operands): the true value, the condition itself, and the false value."
            },
            {
                "q": "Can I use the ternary operator inside a print statement?",
                "a": "Yes! E.g. <code>print('Yes' if active else 'No')</code> is a common way to print values conditionally."
            },
            {
                "q": "Do I need to put a colon after if or else in a ternary operator?",
                "a": "No. Colons are not used in Python's single-line conditional expressions."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's ternary operator!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which of the following is the correct syntax for the ternary operator in Python?",
                    "options": [
                        "condition ? val1 : val2",
                        "val1 if condition else val2",
                        "if condition then val1 else val2",
                        "val1 else val2 if condition"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the output of: print('High' if 10 > 20 else 'Low')?",
                    "options": [
                        "High",
                        "Low",
                        "True",
                        "False"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If score = 80, what is stored in result after: result = 'A' if score >= 90 else 'B'?",
                    "options": [
                        "A",
                        "B",
                        "True",
                        "False"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The ternary operator in Python consists of _____ parts or operands. (5 / 4 / 3 / 2)",
                    "answer": "3"
                },
                {
                    "type": "fill",
                    "question": "In the expression x = 'Yes' if is_ok else 'No', if is_ok is False, x holds the value _____. (3 / Variable / colon / No)",
                    "answer": "No"
                },
                {
                    "type": "fill",
                    "question": "Unlike block-level conditions, the ternary operator does not use the _____ character. (semicolon / comma / period / colon)",
                    "answer": "colon"
                },
                {
                    "type": "tf",
                    "question": "The ternary operator is mainly used to perform conditional variable assignments or return operations.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The syntax: result = score >= 50 ? 'Pass' : 'Fail' is valid Python code.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You can nest ternary operators inside other ternary operators in Python.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Convert this block into a ternary operator expression: if age >= 18: ticket = 'Adult' else: ticket = 'Child'",
                    "sampleAnswer": "ticket = 'Adult' if age >= 18 else 'Child'"
                }
            ]
        },
        "scenario": "Define a variable score = 85. Create a variable 'status' using the ternary operator. Set status to 'Pass' if score is greater than or equal to 60, otherwise set it to 'Fail'. Finally, print 'status'.",
        "hint": "Write status = 'Pass' if score >= 60 else 'Fail', and print(status).",
        "wrongHint": "Make sure you write the ternary expression correctly on a single line and print the status variable!",
        "solution": "score = 85\nstatus = \"Pass\" if score >= 60 else \"Fail\"\nprint(status)",
        "starterCode": "score = 85\n# Set status using a ternary operator and print it below\n"
    },
    {
        "id": 34,
        "title": "Decision based coding problems",
        "concept": "Solving algorithmic problems requiring multiple paths of execution and conditional checks in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Decision-Based Coding",
            "subheading": "Solving conditional algorithms",
            "body": "<p>Now that you have mastered <code>if</code>, <code>else</code>, <code>elif</code>, nested conditions, and ternary operators, you are ready to tackle decision-based algorithms. In software, conditional logic represents the business rules that govern application behaviors.</p>\n\n<h3>How to Approach Decision-Based Problems</h3>\n<ol class=\"desc-list\">\n    <li><strong>Identify Input Criteria:</strong> What variables are given? What are their types?</li>\n    <li><strong>List Distinct States:</strong> What are the mutually exclusive outcomes? (e.g. positive, negative, zero).</li>\n    <li><strong>Order Your Conditions:</strong> Place specific, strict checks at the top of your <code>if-elif</code> chain, and broader fallbacks at the bottom.</li>\n    <li><strong>Verify Boundary Conditions:</strong> Check boundary values (like checking exactly 0 or 100) carefully to determine if you need strict (<code>&gt;</code>) or inclusive (<code>&gt;=</code>) comparisons.</li>\n</ol>\n\n<h3>Example Problem: Leap Year Check</h3>\n<p>A year is leap if it is divisible by 4. However, centurial years (ending in 00) must also be divisible by 400. Solving this requires combining modulus operations (<code>year % 4 == 0</code>) and nested comparisons to handle rules cleanly!</p>"
        },
        "qna": [
            {
                "q": "What are decision-based coding problems?",
                "a": "These are programming problems where the main goal is to correctly route different inputs to their appropriate outcomes using conditional structures."
            },
            {
                "q": "When should I use an if-elif chain versus nesting?",
                "a": "Use an <code>if-elif</code> chain for sequential, flat choices where only one branch should execute. Use nesting when a secondary decision depends directly on the outcome of a first decision."
            },
            {
                "q": "How do boundary values affect decision blocks?",
                "a": "Logical errors frequently occur at boundary values. Ensure you use the correct comparison operator (e.g. <code>&gt;=</code> vs <code>&gt;</code>) based on requirements."
            },
            {
                "q": "What is the best way to handle multiple checks in a single conditional statement?",
                "a": "Combine them with logical operators (<code>and</code>, <code>or</code>, <code>not</code>) and use parentheses <code>()</code> to keep code readable and ensure proper evaluation order."
            },
            {
                "q": "How can I verify that my conditional logic covers all possibilities?",
                "a": "Write test cases that hit every branch of your code, checking positive, negative, zero, and boundary inputs to verify correctness."
            }
        ],
        "test": {
            "intro": "Let's check your preparation for decision-based coding problems!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "If a program checks if a number is positive, negative, or zero, which structure is best?",
                    "options": [
                        "A single if statement",
                        "An if-else statement",
                        "An if-elif-else chain",
                        "Nested if statements only"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What happens if you put a general check before a specific check in an if-elif chain?",
                    "options": [
                        "The specific check is never evaluated",
                        "Python throws a syntax error",
                        "The general check is skipped",
                        "The code runs faster"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "Which operator checks if a year is divisible by 4 (remainder is 0)?",
                    "options": [
                        "year / 4 == 0",
                        "year // 4 == 0",
                        "year % 4 == 0",
                        "year ** 4 == 0"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "In a decision tree checking temperature ranges, if no specific ranges are met, execution routes to the final _____ block. (elif / else / if / for)",
                    "answer": "else"
                },
                {
                    "type": "fill",
                    "question": "The logical check to see if number is positive and even is: number > 0 and number % 2 == _____. (1 / 0 / 2 / -1)",
                    "answer": "0"
                },
                {
                    "type": "fill",
                    "question": "If x = -5, the expression x > 0 evaluates to the boolean _____. (True / undefined / False / None)",
                    "answer": "False"
                },
                {
                    "type": "tf",
                    "question": "Putting a general check at the very top of an if-elif-else chain is a recommended best practice.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "All conditions inside an if statement must evaluate to either True or False.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Indentation must match exactly across sibling elif and else blocks.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Design an if-elif-else outline that checks if a grade is A (90+), B (80-89), or Fail (below 80).",
                    "sampleAnswer": "if grade >= 90: print('A')\nelif grade >= 80: print('B')\nelse: print('Fail')"
                }
            ]
        },
        "scenario": "Write a program to determine ticket pricing based on age. Define age = 22. Create a variable 'ticket_price'. If age is less than 12, ticket_price is 5. Else if age is less than 65, ticket_price is 12. Otherwise (else), ticket_price is 7. Finally, print 'ticket_price'.",
        "hint": "Set age = 22, write an if-elif-else chain to set ticket_price, and print ticket_price.",
        "wrongHint": "Make sure you set ticket_price correctly in each branch and print only the price variable!",
        "solution": "age = 22\nif age < 12:\n    ticket_price = 5\nelif age < 65:\n    ticket_price = 12\nelse:\n    ticket_price = 7\nprint(ticket_price)",
        "starterCode": "age = 22\n# Write your pricing conditions and print ticket_price below\n"
    },
    {
        "id": 35,
        "title": "Logic challenge",
        "concept": "Solving the Stage 4 final logic puzzle combining arithmetic comparisons, nesting, and short-hand operators",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Logic Challenge",
            "subheading": "The final Stage 4 logic challenge!",
            "body": "<p>Welcome to <strong>Level 35</strong>, the final logic challenge of <strong>STAGE 4: Decision Making</strong>!</p>\n\n<p>In this room, you will face a complex logical problem testing your ability to construct multi-level decisions in Python. You must combine all the tools you have mastered so far:</p>\n<ul class=\"desc-list\">\n    <li>Checking multiple conditions and logical states.</li>\n    <li>Nesting decisions accurately with correct vertical indentations.</li>\n    <li>Applying colons (<code>:</code>) to initiate block scopes.</li>\n</ul>\n\n<p>Review the Q&As and quizzes below to verify your structural understanding, then jump into the coding console to resolve the final Stage 4 logic challenge!</p>"
        },
        "qna": [
            {
                "q": "What is the Stage 4 logic challenge?",
                "a": "It is a comprehensive problem combining nested checks, variable comparisons, and logical boundaries to verify your mastery of conditional flows."
            },
            {
                "q": "How can I prevent syntax errors in nested conditions?",
                "a": "By using consistent indentations (4 spaces per level) and ensuring every conditional block (<code>if</code>, <code>elif</code>, <code>else</code>) is terminated with a colon."
            },
            {
                "q": "When is it better to combine checks instead of nesting them?",
                "a": "If you do not need intermediate code execution between checks, combining conditions using <code>and</code> makes code shorter and easier to read."
            },
            {
                "q": "How do I test if my logic handles negative numbers?",
                "a": "By verifying that your conditions check less-than-zero states correctly, e.g., <code>if value &lt; 0:</code>."
            },
            {
                "q": "What are the common traps to avoid in this challenge?",
                "a": "Spelling mistakes in variable names, mixing tabs and spaces, forgetting colons, and misalignment of sibling block elements."
            }
        ],
        "test": {
            "intro": "Let's complete the final preparation quiz for the logic challenge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What does not (True or False) and (5 > 2) evaluate to?",
                    "options": [
                        "True",
                        "False",
                        "Error",
                        "None"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which statement is equivalent to: is_member = True if age >= 18 else False?",
                    "options": [
                        "is_member = age >= 18",
                        "is_member = True",
                        "is_member = age > 18",
                        "is_member = age <= 18"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "If you have 3 conditions that must all be True, which operator do you use?",
                    "options": [
                        "or",
                        "and",
                        "not",
                        "is"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Chained elif blocks are evaluated from top to _____ in Python. (variable / Indentation / bottom / True)",
                    "answer": "bottom"
                },
                {
                    "type": "fill",
                    "question": "The error thrown when mixing tabs and spaces in Python is _____Error. (Indentation / Variable / bottom / True)",
                    "answer": "Indentation"
                },
                {
                    "type": "fill",
                    "question": "If x = 10, the expression: x > 5 or x < 0 evaluates to the boolean _____. (None / True / undefined / False)",
                    "answer": "True"
                },
                {
                    "type": "tf",
                    "question": "An else block is executed if none of the if/elif conditions in that block are True.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A ternary operator in Python can have an if without an else.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The logical 'not' operator has lower precedence than 'and' in Python.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain why this nested block prints 'No': if x > 10: (where x = 12) if x < 15: if x % 2 != 0: print('Yes') else: print('No')",
                    "sampleAnswer": "12 satisfies x > 10 and x < 15. The third check is 12 % 2 != 0, which is False. This executes the inner else block, printing 'No'."
                }
            ]
        },
        "scenario": "Doraemon needs a gadget select algorithm. Define is_emergency = True and distance_meters = 1500. Create a variable 'gadget'. If is_emergency is True: if distance_meters is less than 1000, gadget is 'Anywhere Door'; otherwise, gadget is 'Bamboo Copter'. If is_emergency is False (outer else), gadget is 'Walk'. Finally, print 'gadget'.",
        "hint": "Write the outer if-else for is_emergency, and nest the distance check inside the emergency block.",
        "wrongHint": "Make sure you nest the conditions properly, check bounds, and print the gadget variable name!",
        "solution": "is_emergency = True\ndistance_meters = 1500\nif is_emergency:\n    if distance_meters < 1000:\n        gadget = \"Anywhere Door\"\n    else:\n        gadget = \"Bamboo Copter\"\nelse:\n    gadget = \"Walk\"\nprint(gadget)",
        "starterCode": "is_emergency = True\ndistance_meters = 1500\n# Write your nested logic here to assign gadget and print it\n"
    },
    {
        "id": 36,
        "title": "Why loops exist",
        "concept": "Understanding the concept of iteration, code repetition, and dry execution rules to avoid code duplication in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Why Loops Exist",
            "subheading": "The power of iteration",
            "body": "<p>Imagine Doraemon asks Nobita to write <em>\"I will not forget my homework!\"</em> <strong>100 times</strong> as a punishment. Writing <code>print(\"I will not forget my homework!\")</code> 100 times manually is slow, boring, and makes code extremely long!</p>\n\n<p>What if Doraemon wants it 1,000 times? Or what if we need to print a message an unknown number of times (e.g. based on user input)? This is why we use **Loops**.</p>\n\n<h3>Key Benefits of Loops</h3>\n<ul class=\"desc-list\">\n    <li><strong>Avoid Duplication:</strong> Loops help you keep your code **DRY** (Don't Repeat Yourself).</li>\n    <li><strong>Dynamic Repetition:</strong> Loops can run as many times as a variable or user input dictates.</li>\n    <li><strong>Efficiency:</strong> Write the code once, and let the computer run it thousands of times!</li>\n</ul>\n\n<h3>Loops in Python</h3>\n<p>Python provides two main types of loops:</p>\n<ol class=\"desc-list\">\n    <li><strong><code>for</code> loops:</strong> Best for iterating over sequences (like strings or lists) or repeating code a specific number of times.</li>\n    <li><strong><code>while</code> loops:</strong> Best for repeating code as long as a certain condition remains True.</li>\n</ol>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>What is an Iteration?</strong> In programming, a single cycle or execution of a loop is called an <strong>iteration</strong>.</div>\n</div>"
        },
        "qna": [
            {
                "q": "Why do we need loops in programming?",
                "a": "Loops allow us to repeat a block of code multiple times without writing the same lines repeatedly, keeping our code clean, maintainable, and efficient."
            },
            {
                "q": "What does DRY stand for?",
                "a": "DRY stands for <strong>Don't Repeat Yourself</strong>. It is a core programming principle aimed at reducing duplication of code."
            },
            {
                "q": "What are the two main types of loops in Python?",
                "a": "Python features <code>for</code> loops (for iterating over a sequence or specific range) and <code>while</code> loops (for repeating actions as long as a condition is True)."
            },
            {
                "q": "What is a single loop execution called?",
                "a": "A single cycle or execution of a loop is called an <strong>iteration</strong>."
            },
            {
                "q": "What happens if a loop has no condition to stop?",
                "a": "It will run forever. This is called an <strong>infinite loop</strong>, which can freeze or crash your program. We must always ensure our loops have a path to terminate!"
            }
        ],
        "test": {
            "intro": "Let's check your understanding of why loops exist!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which software design principle is directly promoted by using loops?",
                    "options": [
                        "KISS (Keep It Simple, Stupid)",
                        "DRY (Don't Repeat Yourself)",
                        "YAGNI (You Aren't Gonna Need It)",
                        "SOLID"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is a single repetition of a loop called?",
                    "options": [
                        "Rotation",
                        "Iteration",
                        "Recursion",
                        "Cycle"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What occurs when a loop has no condition to stop?",
                    "options": [
                        "A SyntaxError is thrown",
                        "An infinite loop",
                        "The program runs faster",
                        "Python deletes the code"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The DRY principle stands for Don't _____ Yourself. (Variable / for / Repeat / while)",
                    "answer": "Repeat"
                },
                {
                    "type": "fill",
                    "question": "The loop that repeats as long as a condition is True is the _____ loop. (if / while / elif / else)",
                    "answer": "while"
                },
                {
                    "type": "fill",
                    "question": "The loop used when you know in advance how many times to repeat is the _____ loop. (elif / for / else / if)",
                    "answer": "for"
                },
                {
                    "type": "tf",
                    "question": "Writing print statements 100 times manually is the best way to repeat code.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "An infinite loop will run forever unless the program is forcefully terminated.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Python supports both 'for' and 'while' loop structures.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain why duplicating lines of code to repeat an action is a bad practice.",
                    "sampleAnswer": "It makes code long and hard to update. If you need to change the message, you have to modify it in every duplicate line, leading to bugs."
                }
            ]
        },
        "scenario": "Nobita has to write 'I will do my homework!' 3 times. Show him how tedious manual replication is by printing this exact message 3 separate times on 3 separate lines using print().",
        "hint": "Use three print statements on three separate lines.",
        "wrongHint": "Make sure you print 'I will do my homework!' exactly 3 times!",
        "solution": "print(\"I will do my homework!\")\nprint(\"I will do my homework!\")\nprint(\"I will do my homework!\")",
        "starterCode": "# Print the message \"I will do my homework!\" 3 separate times below\n"
    },
    {
        "id": 37,
        "title": "for loop",
        "concept": "Iterating over sequences like strings, lists, or ranges using the 'for' loop in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The for Loop",
            "subheading": "Iterating over sequences",
            "body": "<p>A <strong><code>for</code> loop</strong> is used to iterate over a sequence (such as a string, list, or range of numbers). Python's <code>for</code> loop works like: <em>\"For each item inside this sequence, execute this code block.\"</em></p>\n\n<h3>Basic Syntax</h3>\n<pre class=\"code-example\">for item in sequence:\n    # code to run for each item</pre>\n\n<h3>Syntax Rules</h3>\n<ol class=\"desc-list\">\n    <li><strong>The Colon:</strong> The <code>for</code> loop header must always end with a colon (<code>:</code>).</li>\n    <li><strong>Indentation:</strong> The code inside the loop must be indented (typically 4 spaces).</li>\n</ol>\n\n<h3>Looping through a String</h3>\n<pre class=\"code-example\">word = \"Cat\"\nfor letter in word:\n    print(letter)</pre>\n<p>Output:</p>\n<pre class=\"code-example\">C\na\nt</pre>\n\n<p>Here, the loop variable <code>letter</code> automatically takes the value of each character in the string <code>\"Cat\"</code> one by one and prints it.</p>"
        },
        "qna": [
            {
                "q": "What is a 'for' loop in Python?",
                "a": "A <code>for</code> loop is a control flow structure used to iterate over any sequence (like a string, list, or range) sequentially."
            },
            {
                "q": "How does a 'for' loop know when to stop?",
                "a": "It stops automatically once it reaches the end of the sequence it is iterating over."
            },
            {
                "q": "What is the role of the loop variable in a 'for' loop?",
                "a": "The loop variable (e.g. <code>letter</code> in <code>for letter in word:</code>) stores the value of the current item in the sequence for that specific iteration."
            },
            {
                "q": "Do I need to manually increment the loop variable in a 'for' loop?",
                "a": "No, Python handles this automatically, updating the variable to the next item at the start of each iteration."
            },
            {
                "q": "Can I use a for loop to iterate over a string?",
                "a": "Yes! Iterating over a string checks each character one by one, from first to last."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's for loop!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword is used to start a loop that iterates over a sequence?",
                    "options": [
                        "while",
                        "for",
                        "loop",
                        "repeat"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "In 'for x in \"Python\":', what is x?",
                    "options": [
                        "A function name",
                        "A loop variable",
                        "A keyword",
                        "A data type"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "How many times will this loop print 'Hello'? for character in 'ABC': print('Hello')",
                    "options": [
                        "1",
                        "3",
                        "0",
                        "Infinite"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "In a for loop header, you must end the line with the _____ character. (semicolon / comma / period / colon)",
                    "answer": "colon"
                },
                {
                    "type": "fill",
                    "question": "The code block to run inside a for loop must be _____ by 4 spaces. (colon / indented / 4th / variable)",
                    "answer": "indented"
                },
                {
                    "type": "fill",
                    "question": "If we iterate over 'Dora', the loop variable will take the value of letter 'a' during the _____ iteration. (Variable / colon / 4th / indented)",
                    "answer": "4th"
                },
                {
                    "type": "tf",
                    "question": "Python's 'for' loop requires manual incrementing of the loop variable.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "A 'for' loop can iterate through each letter of a string.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The loop variable can be named anything as long as it follows variable naming rules.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain what this loop prints when executed: for char in 'Hi': print(char)",
                    "sampleAnswer": "It iterates over the string 'Hi', printing 'H' and 'i' on separate lines."
                }
            ]
        },
        "scenario": "Write a for loop to print each character of a name. Define name = 'Nobita'. Write a for loop that iterates over name, and inside the loop print the current character.",
        "hint": "Write for char in name:, then indent and write print(char).",
        "wrongHint": "Make sure you iterate over name using a for loop and print each character!",
        "solution": "name = \"Nobita\"\nfor char in name:\n    print(char)",
        "starterCode": "name = \"Nobita\"\n# Write your for loop below to print each character in name\n"
    },
    {
        "id": 38,
        "title": "while loop",
        "concept": "Repeating code blocks while a conditional check remains True using the 'while' loop and counter variables in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The while Loop",
            "subheading": "Looping based on conditions",
            "body": "<p>A <strong><code>while</code> loop</strong> repeats a block of code <strong>as long as a condition is True</strong>. It is best used when you do not know in advance how many times the loop needs to run.</p>\n\n<h3>Basic Syntax</h3>\n<pre class=\"code-example\">while condition:\n    # code to run</pre>\n\n<h3>Example using a Counter</h3>\n<pre class=\"code-example\">count = 1\nwhile count &lt;= 3:\n    print(count)\n    count = count + 1 # Crucial! Increment the counter to stop the loop</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">1\n2\n3</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Infinite Loops:</strong> If you forget to update the variable checked in the condition (e.g. <code>count = count + 1</code>), the condition will stay True forever, causing an <strong>infinite loop</strong>! This can freeze your program or crash your environment.</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a 'while' loop?",
                "a": "A <code>while</code> loop is a conditional loop that continues executing its code block repeatedly as long as its condition expression evaluates to True."
            },
            {
                "q": "What is a loop control variable or counter?",
                "a": "It is a variable used within the loop condition that is modified inside the loop body, ensuring that the condition eventually becomes False so the loop terminates."
            },
            {
                "q": "What happens if I forget to increment my counter variable inside a while loop?",
                "a": "The loop condition will remain True forever, causing an infinite loop. This freezes your program and consumes system resources."
            },
            {
                "q": "When should I choose a while loop over a for loop?",
                "a": "Choose a <code>while</code> loop when the number of iterations is not known beforehand and depends on a dynamic condition (e.g. waiting for a user input or game event)."
            },
            {
                "q": "Can a while loop condition check multiple values?",
                "a": "Yes! You can use logical operators to form compound conditions. E.g. <code>while count &lt; 10 and not game_over:</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's while loop!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword starts a loop that runs as long as a condition is True?",
                    "options": [
                        "for",
                        "while",
                        "until",
                        "repeat"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What happens when the while condition becomes False?",
                    "options": [
                        "An error occurs",
                        "The loop terminates immediately",
                        "The program restarts",
                        "The loop variable is deleted"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "How many times does this loop print 'Hello'? count = 5; while count < 5: print('Hello'); count += 1",
                    "options": [
                        "5",
                        "0",
                        "1",
                        "Infinite"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "A loop that never terminates is called a(n) _____ loop. (infinite / variable / 0 / incrementing)",
                    "answer": "infinite"
                },
                {
                    "type": "fill",
                    "question": "In the code 'count = count + 1', we are _____ the value of count. (variable / incrementing / infinite / 0)",
                    "answer": "incrementing"
                },
                {
                    "type": "fill",
                    "question": "If the while condition is False on the very first check, the loop body is executed _____ times. (1 / 0 / 2 / -1)",
                    "answer": "0"
                },
                {
                    "type": "tf",
                    "question": "A while loop is the best choice when you know the exact number of iterations beforehand.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The condition of a while loop must end with a colon (:).",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A while loop code block must be indented.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain the bug in this while loop: x = 1; while x <= 5: print(x)",
                    "sampleAnswer": "The variable x is never incremented, making the condition always True and causing an infinite loop."
                }
            ]
        },
        "scenario": "Nobita wants to count up to 5. Define count = 1. Write a while loop that runs as long as count is less than or equal to 5. Inside the loop, print the value of count, then increment count by 1.",
        "hint": "Write while count <= 5:, then indent and write print(count) followed by count = count + 1.",
        "wrongHint": "Make sure you print count and update its value inside the loop block to avoid an infinite loop!",
        "solution": "count = 1\nwhile count <= 5:\n    print(count)\n    count = count + 1",
        "starterCode": "count = 1\n# Write your while loop below to print count and increment it\n"
    },
    {
        "id": 39,
        "title": "range()",
        "concept": "Generating sequences of numbers using the range() function with start, stop, and step arguments in Python loops",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The range() Function",
            "subheading": "Generating number sequences",
            "body": "<p>What if you want to run a <code>for</code> loop exactly 5 times? Or count from 10 to 50? In Python, we use the built-in <strong><code>range()</code></strong> function to generate sequences of numbers.</p>\n\n<h3>Usage Forms of range()</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>range(stop)</code>:</strong> Generates numbers from <code>0</code> up to (but NOT including) <code>stop</code>.\n        <br>E.g. <code>range(3)</code> generates <code>0, 1, 2</code>.</li>\n    <li><strong><code>range(start, stop)</code>:</strong> Generates numbers from <code>start</code> up to (but NOT including) <code>stop</code>.\n        <br>E.g. <code>range(2, 6)</code> generates <code>2, 3, 4, 5</code>.</li>\n    <li><strong><code>range(start, stop, step)</code>:</strong> Generates numbers with a specific increment (<code>step</code>).\n        <br>E.g. <code>range(1, 10, 2)</code> generates <code>1, 3, 5, 7, 9</code>.\n        <br>E.g. <code>range(5, 0, -1)</code> generates <code>5, 4, 3, 2, 1</code> (counts backwards!).</li>\n</ul>\n\n<pre class=\"code-example\">for i in range(3):\n    print(i)</pre>\n<p>Output:</p>\n<pre class=\"code-example\">0\n1\n2</pre>"
        },
        "qna": [
            {
                "q": "What does the range() function do?",
                "a": "It is a built-in Python function that generates an immutable sequence of numbers, commonly used to control the iterations of a <code>for</code> loop."
            },
            {
                "q": "Does range(5) include the number 5?",
                "a": "No, Python's <code>range()</code> is half-open, meaning it goes up to but excludes the stop value. <code>range(5)</code> generates <code>0, 1, 2, 3, 4</code>."
            },
            {
                "q": "How do I count starting from a number other than 0?",
                "a": "Use the two-argument format: <code>range(start, stop)</code>. E.g. <code>range(1, 6)</code> generates 1 through 5."
            },
            {
                "q": "What does the step argument in range() do?",
                "a": "The third argument specifies the step (increment). E.g. <code>range(0, 10, 2)</code> counts by 2s. It can be negative to count down."
            },
            {
                "q": "Can I convert a range object to a list to inspect its values?",
                "a": "Yes! Wrap it in the <code>list()</code> function. E.g. <code>list(range(3))</code> returns <code>[0, 1, 2]</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's range() function!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What numbers are generated by range(3)?",
                    "options": [
                        "1, 2, 3",
                        "0, 1, 2",
                        "0, 1, 2, 3",
                        "1, 2"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does range(1, 5) generate?",
                    "options": [
                        "1, 2, 3, 4, 5",
                        "1, 2, 3, 4",
                        "0, 1, 2, 3, 4",
                        "2, 3, 4"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which of the following generates numbers: 5, 4, 3, 2, 1?",
                    "options": [
                        "range(5, 0)",
                        "range(5, 1, -1)",
                        "range(5, 0, -1)",
                        "range(1, 5, -1)"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The stop parameter in range(start, stop) is always _____ from the generated sequence. (variable / step / excluded / 0)",
                    "answer": "excluded"
                },
                {
                    "type": "fill",
                    "question": "The default start value of range() if only one argument is provided is _____. (1 / 0 / 2 / -1)",
                    "answer": "0"
                },
                {
                    "type": "fill",
                    "question": "To count by 3s, you must supply 3 as the _____ argument in the range function. (excluded / 0 / variable / step)",
                    "answer": "step"
                },
                {
                    "type": "tf",
                    "question": "The statement range(0, 10, 2) will generate the number 10.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "A step value in range() can be negative to count backwards.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The default step value in range() is 1.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Write the range expression to generate: 10, 20, 30, 40.",
                    "sampleAnswer": "range(10, 50, 10)"
                }
            ]
        },
        "scenario": "Write a for loop to print even numbers from 2 to 8. Use range() with start, stop, and step parameters to generate: 2, 4, 6, 8. Loop through this range and print each number.",
        "hint": "Use range(2, 10, 2) inside your for loop.",
        "wrongHint": "Make sure you start at 2, go up to 8 (so stop must be at least 9), and step by 2!",
        "solution": "for i in range(2, 10, 2):\n    print(i)",
        "starterCode": "# Write your for loop using range() below to print 2, 4, 6, 8\n"
    },
    {
        "id": 40,
        "title": "Nested loops",
        "concept": "Putting loops inside other loops and tracing their execution in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Nested Loops",
            "subheading": "Loops inside loops",
            "body": "<p>Just like nesting conditional checks, we can also place a loop statement inside the execution body of another loop statement! This is called a <strong>Nested Loop</strong>.</p>\n\n<h3>How Nested Loops Work</h3>\n<ol class=\"desc-list\">\n    <li>The outer loop initiates its first iteration.</li>\n    <li>This triggers the inner loop, which runs **completely from start to finish**.</li>\n    <li>Once the inner loop completes, the outer loop moves to its next step.</li>\n    <li>The inner loop resets and executes its full cycle again. This repeats until the outer loop finishes.</li>\n</ol>\n\n<h3>Basic Syntax Example</h3>\n<pre class=\"code-example\">for i in range(2): # Outer loop\n    for j in range(3): # Inner loop\n        print(i, j)</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">0 0\n0 1\n0 2\n1 0\n1 1\n1 2</pre>\n\n<p>Notice that the total number of print iterations is the product of the loops: 2 (outer) &times; 3 (inner) = 6 iterations!</p>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Variable Naming Bug:</strong> Never use the same variable name (e.g. <code>i</code>) for both the outer and inner loop control variables! Doing so overwrites the outer counter, causing serious logic bugs or infinite loops. Always use distinct names, such as <code>i</code> and <code>j</code>.</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a nested loop?",
                "a": "A nested loop is a loop statement placed inside the body of another loop statement."
            },
            {
                "q": "How does a nested loop execute?",
                "a": "The outer loop triggers the inner loop. For each single iteration of the outer loop, the inner loop executes its entire cycle of iterations before the outer loop proceeds to its next step."
            },
            {
                "q": "How do I calculate the total number of iterations in a nested loop?",
                "a": "Multiply the number of iterations of the outer loop by the number of iterations of the inner loop. E.g. 3 outer iterations and 4 inner iterations result in 12 total print executions."
            },
            {
                "q": "Can I nest different types of loops, like a 'while' loop inside a 'for' loop?",
                "a": "Yes! Python allows you to nest any loop type inside any other loop type (e.g. <code>while</code> inside <code>for</code>, or <code>for</code> inside <code>while</code>)."
            },
            {
                "q": "What is a common pitfall of nested loops?",
                "a": "Using the same loop control variable name for both the outer and inner loops. This overwrites the variable and causes infinite loops or logic errors. Always use unique names (e.g. <code>i</code> for outer, <code>j</code> for inner)."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's nested loops!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is a nested loop in programming?",
                    "options": [
                        "A loop inside another loop",
                        "A loop inside an if statement",
                        "A function that calls itself",
                        "A loop that never stops"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "If the outer loop runs 3 times and the inner loop runs 5 times, how many times does the inner loop body execute in total?",
                    "options": [
                        "8",
                        "15",
                        "5",
                        "3"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which of the following has a variable naming bug in nested loops?",
                    "options": [
                        "for i in range(3):\n    for j in range(3):",
                        "for i in range(3):\n    for i in range(3):",
                        "for x in range(3):\n    for y in range(3):",
                        "while count < 3:\n    for i in range(3):"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "For each single iteration of the outer loop, the inner loop runs _____ from start to finish. (completely / 1 1 / 8 / variable)",
                    "answer": "completely"
                },
                {
                    "type": "fill",
                    "question": "Sibling nested statements inside the inner loop of a nested structure must be indented by _____ spaces. (8 / 9 / 10 / 7)",
                    "answer": "8"
                },
                {
                    "type": "fill",
                    "question": "In a nested loop with i (outer, range(2)) and j (inner, range(2)), the final output coordinate printed is _____. (1 1 / completely / 8 / Variable)",
                    "answer": "1 1"
                },
                {
                    "type": "tf",
                    "question": "You can nest a while loop inside a for loop.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Sibling nested loops must share the same loop variable.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Nested loops are frequently used to print 2D grids or coordinates.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain the execution order of: for i in range(2): for j in range(2): print(i, j)",
                    "sampleAnswer": "First, i is 0. The inner loop runs with j = 0 and j = 1, printing '0 0' and '0 1'. Then, i becomes 1. The inner loop resets and runs with j = 0 and j = 1, printing '1 0' and '1 1'."
                }
            ]
        },
        "scenario": "Write a nested loop to print coordinates in a 2x2 grid. The outer loop variable i should iterate through range(2). The inner loop variable j should iterate through range(2). Inside the inner loop, print the values of i and j separated by a space.",
        "hint": "Use for i in range(2): as outer and for j in range(2): indented as inner.",
        "wrongHint": "Make sure you use distinct variables i and j, and indent the print statement properly by 8 spaces!",
        "solution": "for i in range(2):\n    for j in range(2):\n        print(i, j)",
        "starterCode": "# Write your nested loops below to print 2x2 coordinates\n"
    },
    {
        "id": 41,
        "title": "break",
        "concept": "Terminating a loop execution prematurely when a specific condition is met using the 'break' keyword in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The break Statement",
            "subheading": "Exiting a loop prematurely",
            "body": "<p>Sometimes you want to stop a loop immediately, before it completes all its iterations. In Python, the <strong><code>break</code></strong> statement is used to exit a loop prematurely.</p>\n\n<p>When Python encounters <code>break</code> inside a loop, it <strong>jumps out of the loop block</strong> immediately. Execution then proceeds to the first line of code written after the loop.</p>\n\n<h3>Example</h3>\n<pre class=\"code-example\">for num in range(1, 10):\n    if num == 5:\n        break # Exit the loop immediately when num is 5\n    print(num)\nprint(\"Loop finished!\")</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">1\n2\n3\n4\nLoop finished!</pre>\n\n<p>Notice that <code>5</code> is not printed. The loop stopped the moment <code>num</code> became <code>5</code>. The <code>break</code> statement works inside both <code>for</code> and <code>while</code> loops. It is especially useful for stopping search operations once an item is found!</p>"
        },
        "qna": [
            {
                "q": "What does the break statement do in a loop?",
                "a": "The <code>break</code> statement terminates the current loop immediately, shifting execution flow to the first line of code outside the loop block."
            },
            {
                "q": "In what situations is break commonly used?",
                "a": "It is commonly used when searching for an item (to stop looping once found) or to exit a <code>while True</code> loop based on user input or a specific termination condition."
            },
            {
                "q": "Does break exit all loops in a nested structure?",
                "a": "No. The <code>break</code> keyword only terminates the **innermost loop** that contains it. The outer loops will continue running."
            },
            {
                "q": "Can I use break inside an if statement that is not inside a loop?",
                "a": "No. Using <code>break</code> outside a loop triggers a SyntaxError: <code>'break' outside loop</code>."
            },
            {
                "q": "What happens to the remaining iterations of a loop after a break is executed?",
                "a": "They are completely skipped. The loop is finished and will not iterate any further."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's break statement!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What keyword is used to exit a loop immediately?",
                    "options": [
                        "exit",
                        "stop",
                        "break",
                        "continue"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What is printed by this code?\nfor i in range(1, 5):\n    if i == 3: break\n    print(i)",
                    "options": [
                        "1, 2, 3, 4",
                        "1, 2",
                        "1, 2, 3",
                        "3, 4"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If break is executed inside a nested inner loop, which loop stops?",
                    "options": [
                        "Only the inner loop",
                        "Only the outer loop",
                        "Both loops",
                        "Neither loop"
                    ],
                    "answer": 0
                },
                {
                    "type": "fill",
                    "question": "The break statement is syntactically invalid if it is not placed inside a _____. (1 / variable / 3 / loop)",
                    "answer": "loop"
                },
                {
                    "type": "fill",
                    "question": "If count = 1 and we run: while True: print('A'); break, the letter 'A' is printed _____ times. (3 / 2 / 1 / 0)",
                    "answer": "1"
                },
                {
                    "type": "fill",
                    "question": "In a loop of range(1, 6), if we break when i == 4, the numbers printed before breaking are 1, 2, and _____. (5 / 4 / 3 / 2)",
                    "answer": "3"
                },
                {
                    "type": "tf",
                    "question": "The break statement can be used inside both 'for' and 'while' loops.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A break statement will execute the else block of a loop in Python.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Placing a break statement directly inside a standalone if-statement outside any loop is valid.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain what happens when this code runs: x = 1; while x < 10: if x == 3: break; print(x); x += 1",
                    "sampleAnswer": "It prints 1, then 2. When x reaches 3, the condition x == 3 triggers break, terminating the loop. Only 1 and 2 print."
                }
            ]
        },
        "scenario": "Nobita is searching for the number 7. Write a for loop to search through numbers from 1 to 10. Use for num in range(1, 11):. If num is equal to 7, execute a break statement to stop searching. Otherwise, print the value of num.",
        "hint": "Check if num == 7:, indent and break, otherwise print(num).",
        "wrongHint": "Make sure you break out of the loop when num == 7 and print only the numbers before 7!",
        "solution": "for num in range(1, 11):\n    if num == 7:\n        break\n    print(num)",
        "starterCode": "# Write your for loop with break below\n"
    },
    {
        "id": 42,
        "title": "continue",
        "concept": "Skipping the remaining code in the current iteration and moving to the next cycle using the 'continue' keyword in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The continue Statement",
            "subheading": "Skipping the current iteration",
            "body": "<p>What if you don't want to stop the whole loop, but just want to <strong>skip the rest of the current iteration</strong> and jump straight to the next one? In Python, we use the <strong><code>continue</code></strong> statement to do exactly this.</p>\n\n<p>When Python encounters <code>continue</code> inside a loop:</p>\n<ol class=\"desc-list\">\n    <li>It immediately skips the remaining lines of code inside the loop for the current cycle.</li>\n    <li>It jumps straight back to the header of the loop to begin the **next iteration** check.</li>\n</ol>\n\n<h3>Example</h3>\n<pre class=\"code-example\">for num in range(1, 6):\n    if num == 3:\n        continue # Skip printing 3 and go to next number\n    print(num)</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">1\n2\n4\n5</pre>\n\n<p>Notice that `3` is skipped, but the loop continues printing `4` and `5`. Unlike <code>break</code> which stops the whole loop, <code>continue</code> only skips the current iteration.</p>"
        },
        "qna": [
            {
                "q": "What does the continue statement do?",
                "a": "The <code>continue</code> statement skips the rest of the code in the current loop iteration and moves execution straight to the next iteration of the loop."
            },
            {
                "q": "How does continue differ from break?",
                "a": "<code>break</code> exits the entire loop completely, whereas <code>continue</code> only skips the remaining code of the current iteration and keeps the loop running for subsequent cycles."
            },
            {
                "q": "What happens to the counter variable in a while loop if continue is executed before it is incremented?",
                "a": "If you skip the increment statement inside a <code>while</code> loop by calling <code>continue</code> before it, the loop variable is never updated, which will cause an infinite loop!"
            },
            {
                "q": "Can I use continue inside both for and while loops?",
                "a": "Yes, <code>continue</code> works in both <code>for</code> and <code>while</code> loops."
            },
            {
                "q": "Does continue trigger a SyntaxError if used outside a loop?",
                "a": "Yes, using <code>continue</code> outside a loop triggers a SyntaxError: <code>'continue' not properly in loop</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's continue statement!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword is used to skip the rest of the current loop iteration and move to the next?",
                    "options": [
                        "pass",
                        "continue",
                        "skip",
                        "break"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is printed by this code?\nfor i in range(1, 4):\n    if i == 2: continue\n    print(i)",
                    "options": [
                        "1, 2, 3",
                        "1, 3",
                        "1",
                        "3"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If continue is executed in a while loop, where does Python jump to?",
                    "options": [
                        "The first line outside the loop",
                        "The next loop iteration check at the top",
                        "The end of the program",
                        "The previous line of code"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "While break terminates the entire loop, _____ only skips the current iteration. (else / continue / if / elif)",
                    "answer": "continue"
                },
                {
                    "type": "fill",
                    "question": "If we use continue in a while loop, we must ensure the loop counter is updated _____ the continue statement is called. (continue / variable / before / 4)",
                    "answer": "before"
                },
                {
                    "type": "fill",
                    "question": "If continue is used in a range(5) loop, and we skip when i is odd, the numbers printed will be 0, 2, and _____. (6 / 5 / 4 / 3)",
                    "answer": "4"
                },
                {
                    "type": "tf",
                    "question": "The continue keyword terminates the entire loop immediately.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "A continue statement can only be used inside loops.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Iteration variables in a for loop still auto-update when continue is called.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain why this while loop is infinite: x = 1; while x <= 3: if x == 2: continue; print(x); x += 1",
                    "sampleAnswer": "When x is 2, continue skips the rest of the block including x += 1. x stays 2 forever, creating an infinite loop."
                }
            ]
        },
        "scenario": "Nobita wants to print odd numbers from 1 to 5. Write a for loop using range(1, 6). If num is even (num % 2 == 0), execute a continue statement to skip printing. Otherwise, print the value of num.",
        "hint": "Check if num % 2 == 0:, indent and continue, then print(num) below it.",
        "wrongHint": "Make sure you skip even numbers using continue and print only 1, 3, 5!",
        "solution": "for num in range(1, 6):\n    if num % 2 == 0:\n        continue\n    print(num)",
        "starterCode": "# Write your for loop with continue below\n"
    },
    {
        "id": 43,
        "title": "pass",
        "concept": "Using the 'pass' statement as a syntactical placeholder for empty code blocks in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The pass Statement",
            "subheading": "The placeholder statement",
            "body": "<p>In Python, blocks of code (like loops, conditional statements, functions, and classes) cannot be empty. If you define a loop or condition without any code inside, Python will raise an <code>IndentationError</code> or <code>SyntaxError</code>.</p>\n\n<p>What if you want to write a loop structure now, but implement its code logic later? This is where the <strong><code>pass</code></strong> statement comes in. It is a <strong>null statement</strong> (does absolutely nothing) used as a syntactical placeholder.</p>\n\n<h3>Example</h3>\n<pre class=\"code-example\">for num in range(5):\n    if num == 3:\n        pass # TODO: Add special handling for 3 later!\n    print(num)</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">0\n1\n2\n3\n4</pre>\n\n<p>Notice that `3` is printed normally. The <code>pass</code> statement executes silently and performs no action. However, it successfully prevented Python from raising a syntax error! You can use <code>pass</code> in empty loops, empty functions, or empty conditional blocks.</p>"
        },
        "qna": [
            {
                "q": "What does the pass statement do in Python?",
                "a": "The <code>pass</code> statement is a null operation. When it is executed, nothing happens. It is used as a placeholder where code is syntactically required but no action is needed."
            },
            {
                "q": "Why does Python need a pass statement?",
                "a": "Since Python uses indentation to define code blocks, empty blocks are not allowed. The <code>pass</code> statement satisfies this syntax requirement without executing any logic."
            },
            {
                "q": "How does pass differ from continue?",
                "a": "<code>continue</code> skips the rest of the current iteration and jumps to the next cycle. <code>pass</code> does absolutely nothing and allows the program to continue executing the rest of the code inside the current iteration."
            },
            {
                "q": "Can I use pass in empty if statements or functions?",
                "a": "Yes! You can use <code>pass</code> anywhere a code block is syntactically required, including <code>if</code> statements, functions, classes, and loops."
            },
            {
                "q": "Does pass print anything to the screen?",
                "a": "No, it executes silently and performs no actions."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's pass statement!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the pass statement in Python?",
                    "options": [
                        "A loop control keyword",
                        "A null statement placeholder",
                        "A debugging tool",
                        "A variable declaration"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the output of this code?\nfor i in range(3):\n    if i == 1: pass\n    print(i)",
                    "options": [
                        "0, 2",
                        "0, 1, 2",
                        "1, 2",
                        "0"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If you write an empty loop block in Python without the pass statement, what happens?",
                    "options": [
                        "The loop runs infinitely",
                        "Python throws an IndentationError or SyntaxError",
                        "The loop is ignored",
                        "Nothing"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The pass statement is a _____ statement that performs no action. (pass / function / null / variable)",
                    "answer": "null"
                },
                {
                    "type": "fill",
                    "question": "Unlike continue, which skips to the next iteration, the _____ statement lets execution flow normally down the current block. (else / elif / pass / if)",
                    "answer": "pass"
                },
                {
                    "type": "fill",
                    "question": "If we want to define a function but write its body later, we can write _____ in its body. (else / elif / pass / if)",
                    "answer": "pass"
                },
                {
                    "type": "tf",
                    "question": "The pass statement is used to exit loops early.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Using pass avoids syntax errors in empty conditional blocks.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The pass statement prints a warning message to the console when executed.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain why this code raises an error, and how to fix it: if x > 5: print('Done')",
                    "sampleAnswer": "The if block is empty, which raises an IndentationError. Fix it by placing 'pass' indented under the if line."
                }
            ]
        },
        "scenario": "Write an if statement that does nothing when x is even, using the pass statement. Define x = 4. If x is even (x % 2 == 0), use pass. Otherwise (else), print 'Odd'.",
        "hint": "Write if x % 2 == 0:, indent and write pass. Align else: with if and print('Odd').",
        "wrongHint": "Make sure you use the pass keyword in the even block to avoid a syntax error!",
        "solution": "x = 4\nif x % 2 == 0:\n    pass\nelse:\n    print(\"Odd\")",
        "starterCode": "x = 4\n# Write your if-else statement below using pass for the even check\n"
    },
    {
        "id": 44,
        "title": "Pattern printing",
        "concept": "Constructing geometric shapes and grids using nested loops and string multiplication in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Pattern Printing",
            "subheading": "Building grids and shapes",
            "body": "<p>In Level 40, we learned how nested loops execute. One of the most famous applications of nested loops is <strong>Pattern Printing</strong>! It is a classic programming exercise to practice loop control by printing grids, triangles, or pyramids of symbols (usually asterisks <code>*</code>).</p>\n\n<h3>Printing a 3x3 Grid</h3>\n<pre class=\"code-example\">for i in range(3):\n    for j in range(3):\n        print(\"*\", end=\" \") # end=\" \" keeps prints on the same line\n    print() # Prints a newline to move to the next row</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">* * *\n* * *\n* * *</pre>\n\n<h3>The print() end Parameter</h3>\n<p>By default, Python's <code>print()</code> function ends with a newline character (<code>\\n</code>), which starts a new line. Passing <code>end=\" \"</code> tells Python to end the print with a space instead, keeping subsequent prints on the same row.</p>\n\n<h3>Printing a Triangle with String Multiplication</h3>\n<p>Python allows you to multiply a string by an integer to repeat it. E.g. <code>\"*\" * 3</code> returns <code>\"***\"</code>. We can print a triangle easily using this feature:</p>\n<pre class=\"code-example\">for i in range(1, 4):\n    print(\"*\" * i)</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">*\n**\n***</pre>"
        },
        "qna": [
            {
                "q": "What is pattern printing?",
                "a": "Pattern printing is a programming exercise where nested loops or string multiplication are used to display geometric shapes or grids of symbols (such as stars or numbers) in the console."
            },
            {
                "q": "What does the end parameter do in the print() function?",
                "a": "By default, <code>print()</code> ends with a newline character (<code>\\n</code>), which starts a new line. Specifying <code>end=\" \"</code> replaces it with a space, so subsequent prints stay on the same line."
            },
            {
                "q": "How do I print an empty line to start a new row?",
                "a": "Simply call <code>print()</code> without any arguments. E.g. <code>print()</code>."
            },
            {
                "q": "What is string multiplication in Python?",
                "a": "It is a Python feature where multiplying a string by an integer <code>n</code> repeats the string <code>n</code> times. E.g. <code>print(\"*\" * 3)</code> outputs <code>***</code>."
            },
            {
                "q": "When should I use nested loops instead of string multiplication for patterns?",
                "a": "Use nested loops when the symbols inside the row are dynamic or depend on the column position (e.g. printing coordinates or a grid of increasing numbers like <code>1 2 3</code>)."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's pattern printing techniques!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "How does Python's print() function behave by default after printing its arguments?",
                    "options": [
                        "It stays on the same line",
                        "It prints a space",
                        "It moves to a new line",
                        "It prints a tab"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What does print('*', end=' ') accomplish?",
                    "options": [
                        "Prints * and starts a new line",
                        "Prints * and ends with a space, staying on the same line",
                        "Prints * three times",
                        "Raises a SyntaxError"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the output of print('A' * 4)?",
                    "options": [
                        "A4",
                        "AAAA",
                        "A A A A",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To move execution to a new row after printing a line of characters, we write an empty _____ function call. (input / min / print / len)",
                    "answer": "print"
                },
                {
                    "type": "fill",
                    "question": "The expression print('*' * 0) will output _____ characters. (1 / 0 / 2 / -1)",
                    "answer": "0"
                },
                {
                    "type": "fill",
                    "question": "In a nested loop printing a grid, the outer loop controls the number of _____. (variable / rows / print / 0)",
                    "answer": "rows"
                },
                {
                    "type": "tf",
                    "question": "String multiplication works with floating-point numbers.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Using end='' inside print() prevents starting a new line.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The inner loop in a grid-printing nested loop controls the characters in a single row.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Write a nested loop snippet to print a 2x4 grid of stars (*).",
                    "sampleAnswer": "for i in range(2):\n    for j in range(4):\n        print('*', end='')\n    print()"
                }
            ]
        },
        "scenario": "Write a program to print a right-angled triangle pattern of stars with a height of 3. Loop through rows using for i in range(1, 4):. In each row i, print i number of stars using string multiplication print('*' * i).",
        "hint": "Write for i in range(1, 4):, then indent and write print('*' * i).",
        "wrongHint": "Make sure you print a triangle of stars (*) with height 3, printing 1, 2, and then 3 stars!",
        "solution": "for i in range(1, 4):\n    print(\"*\" * i)",
        "starterCode": "# Write your pattern loop below to print the triangle of height 3\n"
    },
    {
        "id": 45,
        "title": "Loop coding challenge",
        "concept": "Solving the Stage 5 final coding challenge using combined loop logic and conditions in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Loop Coding Challenge",
            "subheading": "The final Stage 5 loop challenge!",
            "body": "<p>Welcome to <strong>Level 45</strong>, the final challenge of <strong>STAGE 5: Loops</strong>! In this room, you will face an algorithmic problem requiring you to compute mathematical aggregates and control loop executions.</p>\n\n<p>You have mastered:</p>\n<ul class=\"desc-list\">\n    <li><code>for</code> and <code>while</code> loops.</li>\n    <li>Controlling iterations with <code>range()</code>.</li>\n    <li>Breaking loops early with <code>break</code> and skipping with <code>continue</code>.</li>\n    <li>Nesting loops and pattern layouts.</li>\n</ul>\n\n<p>Verify your readiness using the review questions and diagnostic tests below, then complete the final loop challenge inside the coding editor!</p>"
        },
        "qna": [
            {
                "q": "What is the Stage 5 loop coding challenge?",
                "a": "It is a comprehensive problem testing your ability to construct and control loops using conditions and control statements (like <code>break</code> and <code>continue</code>) in Python."
            },
            {
                "q": "How do I choose between a for loop and a while loop for a challenge?",
                "a": "Use a <code>for</code> loop when iterating over a known range or sequence. Use a <code>while</code> loop when the number of cycles is determined dynamically by a condition."
            },
            {
                "q": "How do I avoid infinite loops in a while loop challenge?",
                "a": "Ensure the loop condition variable is modified correctly inside the loop body, or that a <code>break</code> statement is guaranteed to execute."
            },
            {
                "q": "Can I place multiple break statements in a single loop?",
                "a": "Yes! A loop can have multiple <code>if</code> conditions that trigger <code>break</code> statements. When any of them are met, the loop terminates immediately."
            },
            {
                "q": "What are the key things to verify before submitting loop code?",
                "a": "Check the start and stop bounds, ensure variables are updated correctly, verify indentations, and verify the console outputs!"
            }
        ],
        "test": {
            "intro": "Let's check your preparation for the loop coding challenge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which loop is best suited to iterate over a list of items?",
                    "options": [
                        "while loop",
                        "for loop",
                        "infinite loop",
                        "pass loop"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the output of this code?\ncount = 0\nfor i in range(1, 6):\n    if i % 2 == 0: count += 1\nprint(count)",
                    "options": [
                        "5",
                        "2",
                        "3",
                        "0"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If a while loop condition is 'while True:', how can the loop stop?",
                    "options": [
                        "It can never stop",
                        "Using a break statement inside the loop",
                        "Using a continue statement",
                        "When the counter reaches 100"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To calculate the sum of numbers in a loop, we add each number to an accumulator variable initialized to _____. (1 / 0 / 2 / -1)",
                    "answer": "0"
                },
                {
                    "type": "fill",
                    "question": "The statement that skips the rest of the current iteration is _____. (else / continue / if / elif)",
                    "answer": "continue"
                },
                {
                    "type": "fill",
                    "question": "If total = 0, and we loop 'for i in range(1, 4): total += i', the final value of total is _____. (7 / 8 / 5 / 6)",
                    "answer": "6"
                },
                {
                    "type": "tf",
                    "question": "You can use a break statement inside a for loop.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A continue statement terminates the entire loop.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The loop condition 'while count <= 5:' will execute the loop body one last time when count is exactly 5.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain what this loop computes: product = 1; for i in range(1, 5): product *= i",
                    "sampleAnswer": "It computes the product (factorial) of numbers from 1 to 4: 1 * 2 * 3 * 4 = 24."
                }
            ]
        },
        "scenario": "Doraemon needs to count his dorayaki buns. Find the sum of all odd numbers from 1 to 9. Initialize dorayaki_sum = 0. Write a for loop to iterate over all odd numbers from 1 to 9 using range(1, 10, 2). Inside the loop, add the current number to dorayaki_sum, and finally print dorayaki_sum.",
        "hint": "Loop for i in range(1, 10, 2): and add i to dorayaki_sum.",
        "wrongHint": "Make sure you sum only the odd numbers (1, 3, 5, 7, 9) and print the final sum value!",
        "solution": "dorayaki_sum = 0\nfor i in range(1, 10, 2):\n    dorayaki_sum += i\nprint(dorayaki_sum)",
        "starterCode": "dorayaki_sum = 0\n# Write your loop below to sum odd numbers and print dorayaki_sum\n"
    },
    {
        "id": 46,
        "title": "Introduction to strings",
        "concept": "Understanding string creation, single vs double quotes, multi-line strings, and basic operations like concatenation and repetition in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Introduction to Strings",
            "subheading": "Working with text data",
            "body": "<p>Text data in Python is represented as a <strong>String</strong> (a sequence of characters). You will work with strings in almost every program you write!</p>\n\n<h3>Creating Strings</h3>\n<ul class=\"desc-list\">\n    <li><strong>Single or Double Quotes:</strong> You can define strings using single quotes (<code>'hello'</code>) or double quotes (<code>\"hello\"</code>). Both work identically. Double quotes are useful when your string contains a single quote contract, like <code>\"Nobita's gadget\"</code>!</li>\n    <li><strong>Triple Quotes:</strong> For multi-line text blocks, enclose your string inside triple quotes (<code>'''hello'''</code> or <code>\"\"\"hello\"\"\"</code>).</li>\n</ul>\n\n<h3>Basic String Operations</h3>\n<ol class=\"desc-list\">\n    <li><strong>Concatenation (addition):</strong> Combine strings together using the <code>+</code> operator. E.g. <code>\"Dora\" + \"emon\"</code> &rarr; <code>\"Doraemon\"</code>.</li>\n    <li><strong>Repetition (multiplication):</strong> Repeat strings multiple times using the <code>*</code> operator. E.g. <code>\"A\" * 3</code> &rarr; <code>\"AAA\"</code>.</li>\n</ol>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>TypeError Warning:</strong> You cannot concatenate a string and a number directly using the <code>+</code> operator (e.g. <code>\"Score: \" + 10</code>). You must first convert the number to a string using the <code>str()</code> function, or use f-strings!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a string in Python?",
                "a": "A string is a sequence of characters used to store and manipulate text data."
            },
            {
                "q": "What is the difference between single and double quotes?",
                "a": "In Python, there is no structural difference. Both are used to create strings. Using one type makes it easier to include the other type inside the string (e.g. <code>\"Nobita's gadget\"</code>)."
            },
            {
                "q": "How do I create a string that spans multiple lines?",
                "a": "Use triple quotes (three single quotes <code>'''</code> or three double quotes <code>\"\"\"</code>) to enclose multi-line strings."
            },
            {
                "q": "Can I concatenate a string and an integer directly using '+'?",
                "a": "No. Doing so raises a TypeError. You must first convert the integer to a string using <code>str()</code>, or use f-strings. E.g. <code>\"Age: \" + str(10)</code>."
            },
            {
                "q": "What happens when I multiply a string by a negative number?",
                "a": "Multiplying a string by 0 or a negative integer returns an empty string (<code>\"\"</code>)."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of basic Python strings!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "How do you define a string in Python?",
                    "options": [
                        "Using single or double quotes",
                        "Using curly braces {}",
                        "Using square brackets []",
                        "Without any quotes"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What does 'Hi ' + 'there' evaluate to?",
                    "options": [
                        "Hithere",
                        "Hi there",
                        "Hi+there",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which quote type is used for multi-line strings?",
                    "options": [
                        "Single quotes '",
                        "Double quotes \"",
                        "Triple quotes \"\"\"",
                        "Backticks `"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "Combining two strings together using the '+' operator is called _____. (Type / variable / concatenation / ByeBye)",
                    "answer": "concatenation"
                },
                {
                    "type": "fill",
                    "question": "The result of 'Bye' * 2 is _____. (ByeBye / Type / Variable / concatenation)",
                    "answer": "ByeBye"
                },
                {
                    "type": "fill",
                    "question": "Direct combination of 'Score: ' + 10 raises a _____Error. (TypeError / NameError / SyntaxError / Type)",
                    "answer": "Type"
                },
                {
                    "type": "tf",
                    "question": "Single quotes and double quotes can be mixed in the same string boundary (e.g. 'Hello\").",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "A string in Python is immutable (cannot be changed in place).",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "String multiplication works with any integer value.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain why this code raises an error: print('Age: ' + 12)",
                    "sampleAnswer": "Python doesn't auto-convert integers to strings during concatenation. Convert it first using str(12)."
                }
            ]
        },
        "scenario": "Nobita wants to create a personalized greeting. Define first_name = 'Nobita' and last_name = 'Nobi'. Combine them into a variable 'full_name' with a space in between (using concatenation '+'), and print full_name.",
        "hint": "Use: full_name = first_name + ' ' + last_name.",
        "wrongHint": "Make sure you join them with a space and print only full_name!",
        "solution": "first_name = \"Nobita\"\nlast_name = \"Nobi\"\nfull_name = first_name + \" \" + last_name\nprint(full_name)",
        "starterCode": "first_name = \"Nobita\"\nlast_name = \"Nobi\"\n# Concatenate them with a space and print full_name below\n"
    },
    {
        "id": 47,
        "title": "Indexing",
        "concept": "Accessing individual characters in a string using positive and negative indices in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "String Indexing",
            "subheading": "Accessing characters by position",
            "body": "<p>Every character in a string has a specific position number called an <strong>Index</strong>. We can access any character in a string using its index.</p>\n\n<h3>Positive Indexing (Left to Right)</h3>\n<p>In Python, indexing starts at <strong><code>0</code></strong> for the first character!</p>\n<p>For string <code>word = \"Python\"</code>:</p>\n<ul class=\"desc-list\">\n    <li><code>word[0]</code> &rarr; <code>'P'</code> (First character)</li>\n    <li><code>word[1]</code> &rarr; <code>'y'</code></li>\n    <li><code>word[5]</code> &rarr; <code>'n'</code> (Last character)</li>\n</ul>\n\n<h3>Negative Indexing (Right to Left)</h3>\n<p>Negative indices start at <strong><code>-1</code></strong> for the last character, allowing you to easily read backwards!</p>\n<ul class=\"desc-list\">\n    <li><code>word[-1]</code> &rarr; <code>'n'</code> (Last character)</li>\n    <li><code>word[-2]</code> &rarr; <code>'o'</code></li>\n    <li><code>word[-6]</code> &rarr; <code>'P'</code></li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>IndexError:</strong> Trying to access an index that is out of bounds (e.g. <code>word[10]</code> for a 6-letter string) will crash your program with an <code>IndexError: string index out of range</code>. Also remember that strings are <strong>immutable</strong>; you cannot change characters directly using <code>word[0] = 'X'</code>!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is indexing in strings?",
                "a": "Indexing is the method used to access a single character in a string using its position number enclosed in square brackets <code>[]</code>."
            },
            {
                "q": "Where does string indexing start in Python?",
                "a": "Indexing always starts at <strong>0</strong> for the first character (positive index) and <strong>-1</strong> for the last character (negative index)."
            },
            {
                "q": "What is negative indexing?",
                "a": "Negative indexing counts backward from the end of the string (right to left), with <code>[-1]</code> representing the last character, <code>[-2]</code> the second to last, and so on."
            },
            {
                "q": "What happens if I try to access an index that is out of range?",
                "a": "Python raises an <code>IndexError: string index out of range</code>."
            },
            {
                "q": "Can I use indexing to modify a character in a string directly?",
                "a": "No, because strings are immutable. Trying to edit them raises a <code>TypeError</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python string indexing!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which index accesses the first character of a string text?",
                    "options": [
                        "text[1]",
                        "text[0]",
                        "text[-0]",
                        "text[first]"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which index accesses the last character of a string text?",
                    "options": [
                        "text[-1]",
                        "text[len(text)]",
                        "text[last]",
                        "text[0]"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "If s = 'Dora', what is s[-2]?",
                    "options": [
                        "D",
                        "o",
                        "r",
                        "a"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "Indexing in Python is done using _____ brackets. (curly / braces / parentheses / square)",
                    "answer": "square"
                },
                {
                    "type": "fill",
                    "question": "Accessing an index that does not exist in the string raises a(n) _____Error. (TypeError / Index / SyntaxError / NameError)",
                    "answer": "Index"
                },
                {
                    "type": "fill",
                    "question": "If s = 'Fly', s[0] returns the character _____. (Index / F / square / Variable)",
                    "answer": "F"
                },
                {
                    "type": "tf",
                    "question": "Negative indices count characters from right to left starting at -0.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Writing s[0] = 'X' is a valid way to edit a string.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The maximum index of a string is its length minus 1.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain why s[4] raises an error if s = 'Cute'.",
                    "sampleAnswer": "'Cute' has a length of 4 (indices 0, 1, 2, 3). Index 4 is out of bounds, raising an IndexError."
                }
            ]
        },
        "scenario": "Access characters from Doraemon's name. Define word = 'Doraemon'. Access the first character and store it in 'first_letter'. Access the last character (using negative indexing) and store it in 'last_letter'. Print first_letter and last_letter on separate lines.",
        "hint": "Use word[0] and word[-1].",
        "wrongHint": "Make sure you print first_letter and last_letter separately!",
        "solution": "word = \"Doraemon\"\nfirst_letter = word[0]\nlast_letter = word[-1]\nprint(first_letter)\nprint(last_letter)",
        "starterCode": "word = \"Doraemon\"\n# Access first and last letters and print them below\n"
    },
    {
        "id": 48,
        "title": "Slicing",
        "concept": "Extracting substrings using the slice syntax (start:stop:step) in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "String Slicing",
            "subheading": "Extracting substrings",
            "body": "<p>What if you want to extract a <strong>part of a string</strong> (a substring), not just a single character? E.g., getting <code>\"Dora\"</code> from <code>\"Doraemon\"</code>. In Python, we do this using <strong>Slicing</strong>.</p>\n\n<h3>Slicing Syntax</h3>\n<pre class=\"code-example\">string[start:stop:step]</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>start</code>:</strong> The index where the slice begins (included).</li>\n    <li><strong><code>stop</code>:</strong> The index where the slice ends (<strong>excluded</strong>).</li>\n    <li><strong><code>step</code>:</strong> The increment size (optional, defaults to <code>1</code>).</li>\n</ul>\n\n<h3>Examples with word = \"Doraemon\"</h3>\n<ul class=\"desc-list\">\n    <li><code>word[0:4]</code> &rarr; <code>\"Dora\"</code> (indices 0, 1, 2, 3)</li>\n    <li><code>word[4:8]</code> &rarr; <code>\"emon\"</code> (indices 4, 5, 6, 7)</li>\n</ul>\n\n<h3>Omitting Parameters</h3>\n<ul class=\"desc-list\">\n    <li><code>word[:4]</code> &rarr; <code>\"Dora\"</code> (starts at index 0 if start is omitted)</li>\n    <li><code>word[4:]</code> &rarr; <code>\"emon\"</code> (goes to the end of the string if stop is omitted)</li>\n    <li><code>word[::-1]</code> &rarr; <code>\"nomearoD\"</code> (reverses the string! A step of <code>-1</code> counts backwards)</li>\n</ul>"
        },
        "qna": [
            {
                "q": "What is string slicing?",
                "a": "Slicing is the technique of extracting a range of characters (a substring) from a string using start, stop, and step positions."
            },
            {
                "q": "Is the stop index included in the sliced result?",
                "a": "No, the stop index is <strong>excluded</strong>. E.g. <code>s[1:4]</code> extracts characters at indices 1, 2, and 3."
            },
            {
                "q": "What happens if I omit the start index in a slice?",
                "a": "If omitted, Python defaults the start to <strong>0</strong> (the beginning of the string)."
            },
            {
                "q": "What is the step parameter in slicing?",
                "a": "The step parameter specifies the step size for slicing. E.g. <code>s[::2]</code> extracts every second character."
            },
            {
                "q": "How can I reverse a string using slicing?",
                "a": "Use the slice expression <code>string[::-1]</code>. Specifying a step of <code>-1</code> tells Python to extract characters backward from end to start."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python string slicing!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What does text[1:3] extract from text = 'Python'?",
                    "options": [
                        "Py",
                        "yt",
                        "yth",
                        "ytho"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the default start value of a slice if it is left blank (e.g. text[:3])?",
                    "options": [
                        "1",
                        "0",
                        "-1",
                        "length of string"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which slice reverses the string s?",
                    "options": [
                        "s[reverse]",
                        "s[0:-1]",
                        "s[::-1]",
                        "s[-1:0]"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "In string slicing, the stop index is always _____ from the output substring. (variable / 3rd / excluded / Dora)",
                    "answer": "excluded"
                },
                {
                    "type": "fill",
                    "question": "If s = 'Doraemon', s[:4] returns _____. (excluded / Variable / 3rd / Dora)",
                    "answer": "Dora"
                },
                {
                    "type": "fill",
                    "question": "The slice s[::3] will select every _____ character. (Variable / Dora / excluded / 3rd)",
                    "answer": "3rd"
                },
                {
                    "type": "tf",
                    "question": "Slicing raises an IndexError if the stop index is greater than the string length.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The slice s[3:] extracts characters from index 3 up to the end of the string.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Slicing returns a brand new string.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "If s = 'Python', what does s[1:5:2] return? Explain.",
                    "sampleAnswer": "It starts at index 1 ('y'), goes up to index 5 ('n', excluded), stepping by 2. It selects indices 1 and 3, returning 'yh'."
                }
            ]
        },
        "scenario": "Extract substrings from Doraemon's name. Define word = 'Doraemon'. Slice the first 4 characters ('Dora') and store them in 'part1'. Slice the remaining characters ('emon') and store them in 'part2'. Print part1 and part2 on separate lines.",
        "hint": "Use word[:4] and word[4:].",
        "wrongHint": "Make sure you slice the parts correctly and print them!",
        "solution": "word = \"Doraemon\"\npart1 = word[:4]\npart2 = word[4:]\nprint(part1)\nprint(part2)",
        "starterCode": "word = \"Doraemon\"\n# Slice and print part1 and part2 below\n"
    },
    {
        "id": 49,
        "title": "String methods (upper/lower)",
        "concept": "Modifying character casing using string methods like upper(), lower(), isupper(), and islower() in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Casing Methods",
            "subheading": "upper(), lower(), isupper(), and islower()",
            "body": "<p>Python strings have built-in functions called <strong>Methods</strong> that allow us to perform common text manipulations easily.</p>\n\n<h3>Case Conversion Methods</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>upper()</code>:</strong> Returns a new string with all letters converted to UPPERCASE. E.g. <code>\"Dora\".upper()</code> &rarr; <code>\"DORA\"</code>.</li>\n    <li><strong><code>lower()</code>:</strong> Returns a new string with all letters converted to lowercase. E.g. <code>\"Dora\".lower()</code> &rarr; <code>\"dora\"</code>.</li>\n</ul>\n\n<h3>Case Check Methods (Boolean)</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>isupper()</code>:</strong> Returns <code>True</code> if all alphabetic characters in the string are uppercase. E.g. <code>\"DORA\".isupper()</code> &rarr; <code>True</code>.</li>\n    <li><strong><code>islower()</code>:</strong> Returns <code>True</code> if all alphabetic characters in the string are lowercase. E.g. <code>\"dora\".islower()</code> &rarr; <code>True</code>.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Method Syntax:</strong> Methods are invoked using dot notation: <code>string.method()</code>. Always include parentheses <code>()</code>. Remember that strings are immutable, so methods never change the original variable; they return a brand new string!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a string method?",
                "a": "A method is a function built into Python string objects that performs operations on them when called using dot notation (e.g. <code>text.upper()</code>)."
            },
            {
                "q": "Do upper() and lower() modify the original string?",
                "a": "No, because strings are immutable. These methods return a brand new string with the modified casing."
            },
            {
                "q": "How do check-methods like isupper() differ from upper()?",
                "a": "<code>upper()</code> changes the letters to uppercase, returning a new string. <code>isupper()</code> checks the string, returning a boolean (<code>True</code> or <code>False</code>)."
            },
            {
                "q": "What happens when I call lower() on a string containing numbers or symbols?",
                "a": "Numbers and symbols remain unchanged; only alphabetic characters are converted to lowercase."
            },
            {
                "q": "Why are parentheses () required when calling string methods?",
                "a": "Parentheses are required to execute (call) the method. Forgetting them returns the method reference rather than running the code."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's casing methods!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which method converts a string to all lowercase letters?",
                    "options": [
                        "lower()",
                        "to_lower()",
                        "lowercase()",
                        "islower()"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What is the output of 'Py123'.upper()?",
                    "options": [
                        "PY",
                        "PY123",
                        "py123",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If s = 'hello', what does s.isupper() return?",
                    "options": [
                        "True",
                        "False",
                        "None",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To convert a string to uppercase, we use the _____ method. (variable / upper / boolean / new)",
                    "answer": "upper"
                },
                {
                    "type": "fill",
                    "question": "The return type of s.islower() is always a _____ value. (float / boolean / int / str)",
                    "answer": "boolean"
                },
                {
                    "type": "fill",
                    "question": "Because strings are immutable, casing methods return a _____ string instead of updating the variable. (boolean / upper / variable / new)",
                    "answer": "new"
                },
                {
                    "type": "tf",
                    "question": "Calling s.lower() updates the original variable s directly.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "'12345'.isupper() will return True.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Parentheses are necessary to invoke string methods in Python.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "If text = 'Dora', what is stored inside text after running text.upper()? Explain.",
                    "sampleAnswer": "text remains 'Dora' because strings are immutable. text.upper() returns 'DORA', but it is not stored back in text."
                }
            ]
        },
        "scenario": "Convert a string to uppercase and lowercase. Define word = 'Doraemon'. Convert word to uppercase and store it in 'up_word'. Convert word to lowercase and store it in 'low_word'. Print up_word and low_word on separate lines.",
        "hint": "Use word.upper() and word.lower().",
        "wrongHint": "Make sure you store the outputs in up_word and low_word, then print them!",
        "solution": "word = \"Doraemon\"\nup_word = word.upper()\nlow_word = word.lower()\nprint(up_word)\nprint(low_word)",
        "starterCode": "word = \"Doraemon\"\n# Convert to upper and lower casing and print them below\n"
    },
    {
        "id": 50,
        "title": "replace()",
        "concept": "Replacing occurrences of substrings inside a string using the replace() method in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The replace() Method",
            "subheading": "Replacing characters or words",
            "body": "<p>What if you want to swap one word for another inside a text? Python provides the built-in <strong><code>replace()</code></strong> method to do this easily.</p>\n\n<h3>Method Syntax</h3>\n<pre class=\"code-example\">string.replace(old, new, count)</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>old</code>:</strong> The substring you want to search for.</li>\n    <li><strong><code>new</code>:</strong> The new substring you want to insert.</li>\n    <li><strong><code>count</code>:</strong> (Optional) The maximum number of replacements to perform starting from the left. If omitted, all occurrences are replaced.</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>\"I like apples\".replace(\"apples\", \"bananas\")</code> &rarr; <code>\"I like bananas\"</code></li>\n    <li><code>\"banana\".replace(\"a\", \"o\")</code> &rarr; <code>\"bonono\"</code> (replaces all occurrences!)</li>\n    <li><code>\"banana\".replace(\"a\", \"o\", 2)</code> &rarr; <code>\"bonona\"</code> (replaces only the first 2 occurrences)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Immutability check:</strong> Just like casing methods, <code>replace()</code> returns a brand new string and does not modify the original variable. It is also case-sensitive, meaning replacing <code>\"apple\"</code> will not match <code>\"Apple\"</code>!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What does the replace() method do?",
                "a": "The <code>replace()</code> method searches a string for a specified substring and returns a new string where all occurrences of that substring are replaced with a new value."
            },
            {
                "q": "Is the replacement case-sensitive?",
                "a": "Yes! E.g. <code>\"Apple\".replace(\"a\", \"o\")</code> will not replace anything because <code>\"a\"</code> is lowercase, while <code>\"Apple\"</code> starts with uppercase <code>\"A\"</code>."
            },
            {
                "q": "What is the role of the optional count argument in replace()?",
                "a": "The <code>count</code> argument specifies how many occurrences of the old substring to replace starting from the left. If omitted, all occurrences are replaced."
            },
            {
                "q": "Can I replace a single character or multiple characters?",
                "a": "You can replace both! It works with single characters, words, or longer phrases."
            },
            {
                "q": "What happens if the old substring is not found in the string?",
                "a": "The method simply returns a copy of the original string unchanged, without raising errors."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's replace() method!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which method is used to swap characters or substrings?",
                    "options": [
                        "swap()",
                        "replace()",
                        "change()",
                        "update()"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the output of: 'apple'.replace('p', 'm', 1)?",
                    "options": [
                        "ammle",
                        "ample",
                        "ampple",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does 'Doraemon'.replace('X', 'Y') return?",
                    "options": [
                        "Doraemon",
                        "DoraemonY",
                        "Error",
                        "None"
                    ],
                    "answer": 0
                },
                {
                    "type": "fill",
                    "question": "The replace() method takes two mandatory arguments: the old substring and the _____ substring. (space / 1 / variable / new)",
                    "answer": "new"
                },
                {
                    "type": "fill",
                    "question": "If we want to replace only the first occurrence, we pass _____ as the third argument in the replace function. (3 / 2 / 1 / 0)",
                    "answer": "1"
                },
                {
                    "type": "fill",
                    "question": "Suffixing .replace(' ', '') to a string removes all _____ characters. (new / 1 / space / variable)",
                    "answer": "space"
                },
                {
                    "type": "tf",
                    "question": "The replace() method modifies the string in-place.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The replacement operation in Python's replace() is case-sensitive.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can use replace() to delete a substring by replacing it with an empty string ''.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "If text = 'cat dog cat', write the replace expression to change only the first 'cat' to 'cow'.",
                    "sampleAnswer": "text.replace('cat', 'cow', 1)"
                }
            ]
        },
        "scenario": "Correct a spelling error using replace. Define sentence = 'Doraemon likes apples and apples.'. Use replace() to replace 'apples' with 'dorayaki'. Store the result in 'updated_sentence' and print it.",
        "hint": "Use sentence.replace('apples', 'dorayaki').",
        "wrongHint": "Make sure you replace all occurrences of apples and print updated_sentence!",
        "solution": "sentence = \"Doraemon likes apples and apples.\"\nupdated_sentence = sentence.replace(\"apples\", \"dorayaki\")\nprint(updated_sentence)",
        "starterCode": "sentence = \"Doraemon likes apples and apples.\"\n# Replace 'apples' with 'dorayaki' and print updated_sentence below\n"
    },
    {
        "id": 51,
        "title": "find()",
        "concept": "Searching for substrings within strings and finding their index positions",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The find() Method",
            "subheading": "Searching for substrings",
            "body": "<p>What if you want to know <strong>where</strong> a specific word or character appears inside a string? Python provides the <strong><code>find()</code></strong> method to search for substrings and return their index position.</p>\n\n<h3>Method Syntax</h3>\n<pre class=\"code-example\">string.find(substring, start, end)</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>substring</code>:</strong> The text you want to search for.</li>\n    <li><strong><code>start</code>:</strong> (Optional) The index to start searching from (defaults to 0).</li>\n    <li><strong><code>end</code>:</strong> (Optional) The index to stop searching at (defaults to end of string).</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>\"Doraemon\".find(\"ora\")</code> &rarr; <code>1</code> (found at index 1)</li>\n    <li><code>\"Doraemon\".find(\"z\")</code> &rarr; <code>-1</code> (not found, returns -1)</li>\n    <li><code>\"banana\".find(\"a\", 2)</code> &rarr; <code>3</code> (searches from index 2 onwards)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Important Note:</strong> <code>find()</code> returns <strong>-1</strong> if the substring is not found. This is different from using the <code>in</code> operator which returns <code>True</code> or <code>False</code>. The search is also case-sensitive!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What does the find() method return?",
                "a": "The <code>find()</code> method returns the <strong>index</strong> of the first occurrence of the specified substring. If the substring is not found, it returns <strong>-1</strong>."
            },
            {
                "q": "Is the search in find() case-sensitive?",
                "a": "Yes! <code>\"Doraemon\".find(\"d\")</code> returns <strong>-1</strong> because the lowercase 'd' is not found (the string starts with uppercase 'D')."
            },
            {
                "q": "What is the difference between find() and index()?",
                "a": "Both methods work similarly, but <code>index()</code> raises a <code>ValueError</code> if the substring is not found, while <code>find()</code> returns <strong>-1</strong> without raising an error."
            },
            {
                "q": "How can I search for a substring starting from a specific position?",
                "a": "Use the optional <code>start</code> parameter. E.g. <code>\"banana\".find(\"a\", 2)</code> starts searching from index 2."
            },
            {
                "q": "What happens if I search for an empty string?",
                "a": "Searching for an empty string <code>\"\"</code> always returns <code>0</code> (the start of the string)."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's find() method!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What does 'hello'.find('l') return?",
                    "options": [
                        "2",
                        "3",
                        "-1",
                        "1"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What does 'Python'.find('z') return?",
                    "options": [
                        "0",
                        "-1",
                        "Error",
                        "None"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which method returns -1 when a substring is not found?",
                    "options": [
                        "index()",
                        "find()",
                        "search()",
                        "locate()"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The find() method returns the _____ of the first occurrence of a substring. (index / nameerror / typeerror / syntaxerror)",
                    "answer": "index"
                },
                {
                    "type": "fill",
                    "question": "If a substring is not found, find() returns _____. (-1 / 1 / -2 / 0)",
                    "answer": "-1"
                },
                {
                    "type": "fill",
                    "question": "The search in find() is _____-sensitive. (-1 / index / variable / case)",
                    "answer": "case"
                },
                {
                    "type": "tf",
                    "question": "find() raises an error if the substring is not found.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You can specify a starting position for the search in find().",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "find() returns the index of the last occurrence of the substring.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the difference between find() and index() methods.",
                    "sampleAnswer": "find() returns -1 when substring is not found, while index() raises a ValueError."
                }
            ]
        },
        "scenario": "Find the position of a word in a sentence. Define sentence = 'Doraemon loves dorayaki'. Use find() to locate the position of 'loves' and store it in 'position'. Print position.",
        "hint": "Use sentence.find('loves').",
        "wrongHint": "Make sure you store the result in position and print it!",
        "solution": "sentence = \"Doraemon loves dorayaki\"\nposition = sentence.find(\"loves\")\nprint(position)",
        "starterCode": "sentence = \"Doraemon loves dorayaki\"\n# Find the position of 'loves' and print it below\n"
    },
    {
        "id": 52,
        "title": "split()",
        "concept": "Breaking strings into lists of words using delimiters",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The split() Method",
            "subheading": "Breaking strings into lists",
            "body": "<p>What if you have a sentence and want to extract each word separately? Python's <strong><code>split()</code></strong> method breaks a string into a <strong>list</strong> of smaller strings based on a separator (delimiter).</p>\n\n<h3>Method Syntax</h3>\n<pre class=\"code-example\">string.split(separator, maxsplit)</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>separator</code>:</strong> The character(s) to split on (defaults to <strong>whitespace</strong> if omitted).</li>\n    <li><strong><code>maxsplit</code>:</strong> (Optional) Maximum number of splits to perform.</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>\"Doraemon loves dorayaki\".split()</code> &rarr; <code>[\"Doraemon\", \"loves\", \"dorayaki\"]</code> (splits on whitespace)</li>\n    <li><code>\"apple,banana,cherry\".split(\",\")</code> &rarr; <code>[\"apple\", \"banana\", \"cherry\"]</code> (splits on comma)</li>\n    <li><code>\"one-two-three\".split(\"-\")</code> &rarr; <code>[\"one\", \"two\", \"three\"]</code> (splits on hyphen)</li>\n    <li><code>\"a,b,c\".split(\",\", 1)</code> &rarr; <code>[\"a\", \"b,c\"]</code> (splits only once)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Use Case:</strong> <code>split()</code> is incredibly useful for parsing data, reading CSV files, processing user input, and breaking down sentences into individual words for analysis!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What does the split() method do?",
                "a": "The <code>split()</code> method breaks a string into a list of substrings based on a specified separator (delimiter). If no separator is provided, it splits on whitespace."
            },
            {
                "q": "What is the default separator in split()?",
                "a": "If no separator is specified, <code>split()</code> defaults to splitting on <strong>whitespace</strong> (spaces, tabs, newlines)."
            },
            {
                "q": "Can I split on characters other than whitespace?",
                "a": "Yes! You can specify any character or string as the separator. E.g. <code>\"a,b,c\".split(\",\")</code> splits on commas."
            },
            {
                "q": "What does the maxsplit parameter do?",
                "a": "The <code>maxsplit</code> parameter limits the number of splits. E.g. <code>\"a,b,c\".split(\",\", 1)</code> splits only once, resulting in <code>[\"a\", \"b,c\"]</code>."
            },
            {
                "q": "What type of data does split() return?",
                "a": "The <code>split()</code> method always returns a <strong>list</strong> of strings."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's split() method!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What does 'hello world'.split() return?",
                    "options": [
                        "['hello', 'world']",
                        "['hello world']",
                        "helloworld",
                        "Error"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What does 'a,b,c'.split(',') return?",
                    "options": [
                        "['a', 'b', 'c']",
                        "['a,b,c']",
                        "abc",
                        "Error"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What is the default separator in split()?",
                    "options": [
                        "Comma",
                        "Space",
                        "Whitespace",
                        "None"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The split() method returns a _____. (int / float / str / list)",
                    "answer": "list"
                },
                {
                    "type": "fill",
                    "question": "To split a string on commas, use _____ as the separator. (- / + / * / ,)",
                    "answer": ","
                },
                {
                    "type": "fill",
                    "question": "The parameter that limits the number of splits is called _____. (list / , / variable / maxsplit)",
                    "answer": "maxsplit"
                },
                {
                    "type": "tf",
                    "question": "split() modifies the original string.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You can split on multiple characters at once using split().",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "split() always returns a list of strings.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "How would you split '2024-01-15' into year, month, and day?",
                    "sampleAnswer": "Use '2024-01-15'.split('-') to get ['2024', '01', '15']."
                }
            ]
        },
        "scenario": "Split a sentence into words. Define sentence = 'Doraemon Nobita Shizuka Gian Suneo'. Use split() to break the sentence into a list of words and store it in 'words'. Print words.",
        "hint": "Use sentence.split() to split on whitespace.",
        "wrongHint": "Make sure you store the result in words and print it!",
        "solution": "sentence = \"Doraemon Nobita Shizuka Gian Suneo\"\nwords = sentence.split()\nprint(words)",
        "starterCode": "sentence = \"Doraemon Nobita Shizuka Gian Suneo\"\n# Split the sentence into words and print the list below\n"
    },
    {
        "id": 53,
        "title": "join()",
        "concept": "Combining lists of strings back into a single string using a separator",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The join() Method",
            "subheading": "Combining lists into strings",
            "body": "<p>The <strong><code>join()</code></strong> method is the opposite of <code>split()</code> — it combines a list of strings into a single string, placing a separator between each element.</p>\n\n<h3>Method Syntax</h3>\n<pre class=\"code-example\">separator.join(list_of_strings)</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>separator</code>:</strong> The string to place between each element (e.g., space, comma, hyphen).</li>\n    <li><strong><code>list_of_strings</code>:</strong> The list (or any iterable) of strings to join.</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>\" \".join([\"Doraemon\", \"loves\", \"dorayaki\"])</code> &rarr; <code>\"Doraemon loves dorayaki\"</code> (joins with space)</li>\n    <li><code>\",\".join([\"apple\", \"banana\", \"cherry\"])</code> &rarr; <code>\"apple,banana,cherry\"</code> (joins with comma)</li>\n    <li><code>\"-\".join([\"2024\", \"01\", \"15\"])</code> &rarr; <code>\"2024-01-15\"</code> (joins with hyphen)</li>\n    <li><code>\"\".join([\"h\", \"e\", \"l\", \"l\", \"o\"])</code> &rarr; <code>\"hello\"</code> (joins with empty string)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Important Note:</strong> <code>join()</code> is called on the <strong>separator string</strong>, not the list! Also, all elements in the list must be strings — you cannot join a list containing numbers directly without converting them first.</div>\n</div>"
        },
        "qna": [
            {
                "q": "What does the join() method do?",
                "a": "The <code>join()</code> method combines a list of strings into a single string, placing a specified separator between each element."
            },
            {
                "q": "How is the join() method called?",
                "a": "Unlike most string methods, <code>join()</code> is called on the <strong>separator string</strong>, passing the list as an argument. E.g. <code>\" \".join(my_list)</code>."
            },
            {
                "q": "Can I join a list containing numbers?",
                "a": "No, all elements must be strings. You must convert numbers to strings first using <code>str()</code> or a list comprehension."
            },
            {
                "q": "What happens if I use an empty string as the separator?",
                "a": "Using an empty string <code>\"\"</code> as the separator concatenates all elements without any characters between them."
            },
            {
                "q": "What is the relationship between split() and join()?",
                "a": "They are inverse operations! <code>split()</code> breaks a string into a list, while <code>join()</code> combines a list back into a string."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python's join() method!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What does ' '.join(['hello', 'world']) return?",
                    "options": [
                        "['hello', 'world']",
                        "hello world",
                        "helloworld",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does ','.join(['a', 'b', 'c']) return?",
                    "options": [
                        "a,b,c",
                        "['a', 'b', 'c']",
                        "abc",
                        "Error"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "Which string is the method called on in join()?",
                    "options": [
                        "The list",
                        "The separator",
                        "The first element",
                        "None"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The join() method is called on the _____ string. (concatenates / strings / variable / separator)",
                    "answer": "separator"
                },
                {
                    "type": "fill",
                    "question": "All elements in the list must be _____ to use join(). (separator / strings / concatenates / variable)",
                    "answer": "strings"
                },
                {
                    "type": "fill",
                    "question": "Using an empty string '' as the separator _____ the elements. (strings / variable / separator / concatenates)",
                    "answer": "concatenates"
                },
                {
                    "type": "tf",
                    "question": "join() is the opposite of split().",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can join a list of integers directly.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The separator is placed between elements, not at the start or end.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "How would you join ['2024', '01', '15'] with hyphens?",
                    "sampleAnswer": "Use '-'.join(['2024', '01', '15']) to get '2024-01-15'."
                }
            ]
        },
        "scenario": "Join a list of names into a sentence. Define names = ['Doraemon', 'Nobita', 'Shizuka']. Use join() with a space and comma to create 'Doraemon, Nobita, Shizuka' and store it in 'sentence'. Print sentence.",
        "hint": "Use ', '.join(names) to join with comma and space.",
        "wrongHint": "Make sure you use ', ' as the separator and print the result!",
        "solution": "names = [\"Doraemon\", \"Nobita\", \"Shizuka\"]\nsentence = \", \".join(names)\nprint(sentence)",
        "starterCode": "names = [\"Doraemon\", \"Nobita\", \"Shizuka\"]\n# Join the names with ', ' and print the result below\n"
    },
    {
        "id": 54,
        "title": "Escape characters",
        "concept": "Using special characters like newlines, tabs, and quotes inside strings with backslash",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Escape Characters",
            "subheading": "Special characters in strings",
            "body": "<p>Sometimes you need to include special characters in your strings that can't be typed directly — like a <strong>newline</strong>, <strong>tab</strong>, or even a <strong>quote</strong> inside a quoted string. Python uses the <strong>backslash (\\)</strong> to create these <strong>escape characters</strong>.</p>\n\n<h3>Common Escape Characters</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>\\n</code></strong> — Newline (moves to the next line)</li>\n    <li><strong><code>\\t</code></strong> — Tab (horizontal spacing)</li>\n    <li><strong><code>\\'</code></strong> — Single quote (inside single-quoted strings)</li>\n    <li><strong><code>\\\"</code></strong> — Double quote (inside double-quoted strings)</li>\n    <li><strong><code>\\\\</code></strong> — Backslash (to display a literal backslash)</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>\"Hello\\nWorld\"</code> &rarr; Displays as two lines</li>\n    <li><code>\"Name:\\tDoraemon\"</code> &rarr; Displays with tab spacing</li>\n    <li><code>'Nobita\\'s gadget'</code> &rarr; Displays as <code>Nobita's gadget</code></li>\n    <li><code>\"Path: C:\\\\Users\\\\Doraemon\"</code> &rarr; Displays as <code>Path: C:\\Users\\Doraemon</code></li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Pro Tip:</strong> For Windows file paths, you can either use double backslashes <code>\\\\</code> or use <strong>raw strings</strong> with the <code>r</code> prefix: <code>r\"C:\\Users\\Doraemon\"</code> — raw strings treat backslashes literally!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What are escape characters?",
                "a": "Escape characters are special sequences starting with a backslash (\\) that represent characters that can't be typed directly, like newlines, tabs, or quotes inside quoted strings."
            },
            {
                "q": "What does \\n do in a string?",
                "a": "<code>\\n</code> creates a <strong>newline</strong> — it moves the cursor to the beginning of the next line."
            },
            {
                "q": "How do I include a single quote inside a single-quoted string?",
                "a": "Use the escape sequence <code>\\'</code>. E.g. <code>'It\\'s Doraemon'</code> displays as <code>It's Doraemon</code>."
            },
            {
                "q": "Why do I need double backslashes for file paths?",
                "a": "Because a single backslash is the escape character. To display a literal backslash, you need to escape it as <code>\\\\</code>."
            },
            {
                "q": "What is a raw string?",
                "a": "A raw string (prefixed with <code>r</code>) treats backslashes as literal characters, not escape sequences. Useful for file paths and regex patterns."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python escape characters!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which escape character creates a newline?",
                    "options": [
                        "\\n",
                        "\\t",
                        "\\\\",
                        "\\r"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What does 'Hello\\nWorld' display as?",
                    "options": [
                        "Hello\\nWorld",
                        "Hello World",
                        "Hello on one line, World on next",
                        "Error"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "How do you display a literal backslash?",
                    "options": [
                        "\\",
                        "\\\\",
                        "//",
                        "/"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The escape character for tab is _____. (* / \\t / + / -)",
                    "answer": "\\t"
                },
                {
                    "type": "fill",
                    "question": "To include a double quote inside a double-quoted string, use _____. (+ / - / \\\" / *)",
                    "answer": "\\\""
                },
                {
                    "type": "fill",
                    "question": "Raw strings are prefixed with the letter _____. (r / a / w / x)",
                    "answer": "r"
                },
                {
                    "type": "tf",
                    "question": "Escape characters start with a forward slash (/).",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You can use \\n to create line breaks in printed output.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Raw strings ignore escape sequences.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "How would you print 'C:\\Users\\Doraemon' correctly?",
                    "sampleAnswer": "Use print('C:\\\\Users\\\\Doraemon') or print(r'C:\\Users\\Doraemon')."
                }
            ]
        },
        "scenario": "Create a multi-line message with escape characters. Define message = 'Hello\\nWelcome to PyBe!\\nLet\\'s learn Python together.' Print message to see the formatted output.",
        "hint": "Use \\n for newlines and \\' for the apostrophe.",
        "wrongHint": "Make sure you use \\n for line breaks and \\' for the apostrophe!",
        "solution": "message = \"Hello\\nWelcome to PyBe!\\nLet's learn Python together.\"\nprint(message)",
        "starterCode": "message = \"Hello\\nWelcome to PyBe!\\nLet's learn Python together.\"\n# Print the message to see the formatted output\n"
    },
    {
        "id": 55,
        "title": "f-Strings",
        "concept": "Embedding variables and expressions directly inside strings using f-string notation",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "f-Strings (Formatted String Literals)",
            "subheading": "Modern string formatting",
            "body": "<p><strong>f-Strings</strong> (introduced in Python 3.6) are the most modern and readable way to format strings in Python. They allow you to <strong>embed variables and expressions directly inside strings</strong> using curly braces <code>{}</code>.</p>\n\n<h3>f-String Syntax</h3>\n<pre class=\"code-example\">f\"Text with {variable} embedded\"</pre>\n<ul class=\"desc-list\">\n    <li>Prefix the string with the letter <code>f</code></li>\n    <li>Place variables or expressions inside <code>{}</code> curly braces</li>\n    <li>Python automatically converts them to strings!</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>name = \"Doraemon\"; f\"Hello {name}!\"</code> &rarr; <code>\"Hello Doraemon!\"</code></li>\n    <li><code>age = 10; f\"Age: {age}\"</code> &rarr; <code>\"Age: 10\"</code> (no str() needed!)</li>\n    <li><code>f\"2 + 3 = {2 + 3}\"</code> &rarr; <code>\"2 + 3 = 5\"</code> (expressions work!)</li>\n    <li><code>f\"{name.upper()} is awesome!\"</code> &rarr; <code>\"DORAEMON is awesome!\"</code> (methods work!)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Why f-Strings?</strong> They're faster than <code>.format()</code> and <code>%</code> formatting, more readable, and automatically handle type conversion. They're the recommended way to format strings in modern Python!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What are f-Strings?",
                "a": "f-Strings (formatted string literals) are a way to embed variables and expressions directly inside strings by prefixing the string with <code>f</code> and using curly braces <code>{}</code>."
            },
            {
                "q": "How do I create an f-String?",
                "a": "Prefix your string with the letter <code>f</code> and place variables inside curly braces. E.g. <code>f\"Hello {name}\"</code>."
            },
            {
                "q": "Do I need to convert numbers to strings in f-Strings?",
                "a": "No! f-Strings automatically convert any variable or expression to a string. No need for <code>str()</code>."
            },
            {
                "q": "Can I use expressions inside f-Strings?",
                "a": "Yes! You can use any valid Python expression inside the curly braces, including math operations, function calls, and method calls."
            },
            {
                "q": "What happens if I forget the 'f' prefix?",
                "a": "The string will be treated as a regular string, and the curly braces will be displayed literally instead of evaluating the variables inside."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python f-Strings!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What prefix do you use to create an f-String?",
                    "options": [
                        "s",
                        "f",
                        "r",
                        "b"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does f'Age: {age}' evaluate to if age = 10?",
                    "options": [
                        "Age: age",
                        "Age: 10",
                        "Age: {10}",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Can you use expressions inside f-String curly braces?",
                    "options": [
                        "No",
                        "Yes",
                        "Only math",
                        "Only strings"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Variables are placed inside _____ braces in f-Strings. (parentheses / square / braces / curly)",
                    "answer": "curly"
                },
                {
                    "type": "fill",
                    "question": "f-Strings automatically convert variables to _____. (curly / strings / 5 / variable)",
                    "answer": "strings"
                },
                {
                    "type": "fill",
                    "question": "The expression f\"{2+3}\" evaluates to _____. (7 / 6 / 5 / 4)",
                    "answer": "5"
                },
                {
                    "type": "tf",
                    "question": "You need to use str() to convert numbers in f-Strings.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "f-Strings are available in Python 3.6 and later.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can call methods on variables inside f-Strings.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Write an f-String that combines name='Doraemon' and gadget='Anywhere Door'.",
                    "sampleAnswer": "f\"{name} has the {gadget}\""
                }
            ]
        },
        "scenario": "Create a personalized message using f-Strings. Define name = 'Doraemon' and gadget = 'Anywhere Door'. Use an f-String to create 'Doraemon uses the Anywhere Door!' and store it in 'message'. Print message.",
        "hint": "Use f\"{name} uses the {gadget}!\" to create the message.",
        "wrongHint": "Make sure you use the f prefix and curly braces around variables!",
        "solution": "name = \"Doraemon\"\ngadget = \"Anywhere Door\"\nmessage = f\"{name} uses the {gadget}!\"\nprint(message)",
        "starterCode": "name = \"Doraemon\"\ngadget = \"Anywhere Door\"\n# Create an f-String message and print it below\n"
    },
    {
        "id": 56,
        "title": "Lists",
        "concept": "Creating, accessing, and modifying ordered mutable collections in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Introduction to Lists",
            "subheading": "Ordered, mutable collections",
            "body": "<p>A <strong>List</strong> is Python's most versatile collection type. It's an <strong>ordered</strong> sequence of items that can be of <strong>any type</strong> — numbers, strings, or even other lists! Lists are <strong>mutable</strong>, meaning you can change them after creation.</p>\n\n<h3>Creating Lists</h3>\n<ul class=\"desc-list\">\n    <li>Use <strong>square brackets <code>[]</code></strong> to create lists</li>\n    <li>Separate items with <strong>commas</strong></li>\n    <li>Lists can contain mixed data types</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>gadgets = [\"Anywhere Door\", \"Time Machine\", \"Bamboo Copter\"]</code></li>\n    <li><code>numbers = [1, 2, 3, 4, 5]</code></li>\n    <li><code>mixed = [\"Doraemon\", 10, True, 3.14]</code></li>\n    <li><code>empty = []</code> (empty list)</li>\n</ul>\n\n<h3>Accessing List Elements</h3>\n<ul class=\"desc-list\">\n    <li><code>gadgets[0]</code> &rarr; First element (index 0)</li>\n    <li><code>gadgets[-1]</code> &rarr; Last element</li>\n    <li><code>gadgets[1:3]</code> &rarr; Slice (elements at index 1 and 2)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>IndexError:</strong> Trying to access an index that doesn't exist (e.g. <code>gadgets[10]</code> for a 3-item list) will crash your program!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a list in Python?",
                "a": "A list is an ordered, mutable collection of items that can hold any data type. Items are stored in square brackets <code>[]</code> and separated by commas."
            },
            {
                "q": "Are lists mutable or immutable?",
                "a": "Lists are <strong>mutable</strong>, meaning you can modify them after creation by adding, removing, or changing elements."
            },
            {
                "q": "Can a list contain different data types?",
                "a": "Yes! Lists can contain mixed data types — strings, integers, floats, booleans, or even other lists."
            },
            {
                "q": "How do you access the first element of a list?",
                "a": "Use index <code>[0]</code>. Python uses zero-based indexing, so the first element is always at index 0."
            },
            {
                "q": "What happens if you try to access an index that doesn't exist?",
                "a": "Python raises an <code>IndexError: list index out of range</code>. Always ensure your index is within the list's bounds."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python lists!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "How do you create a list in Python?",
                    "options": [
                        "Using curly braces {}",
                        "Using square brackets []",
                        "Using parentheses ()",
                        "Using angle brackets <>"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the index of the first element in a list?",
                    "options": [
                        "1",
                        "0",
                        "-1",
                        "first"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which of these is a valid list?",
                    "options": [
                        "(1, 2, 3)",
                        "{1, 2, 3}",
                        "[1, 2, 3]",
                        "<1, 2, 3>"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "Lists are created using _____ brackets. (curly / braces / parentheses / square)",
                    "answer": "square"
                },
                {
                    "type": "fill",
                    "question": "Accessing an invalid index raises an _____Error. (TypeError / Index / SyntaxError / NameError)",
                    "answer": "Index"
                },
                {
                    "type": "fill",
                    "question": "The last element of a list can be accessed using index _____. (-1 / 1 / -2 / 0)",
                    "answer": "-1"
                },
                {
                    "type": "tf",
                    "question": "Lists can only contain items of the same type.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Lists are mutable (can be changed after creation).",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "List indexing starts at 1.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain what happens when you access my_list[-1].",
                    "sampleAnswer": "It returns the last element of the list. Negative indices count from the end."
                }
            ]
        },
        "scenario": "Create a list of Doraemon's gadgets and access elements. Define gadgets = ['Anywhere Door', 'Time Machine', 'Bamboo Copter']. Access the first gadget and store it in 'first_gadget'. Access the last gadget (using negative indexing) and store it in 'last_gadget'. Print both on separate lines.",
        "hint": "Use gadgets[0] and gadgets[-1].",
        "wrongHint": "Make sure you print first_gadget and last_gadget separately!",
        "solution": "gadgets = [\"Anywhere Door\", \"Time Machine\", \"Bamboo Copter\"]\nfirst_gadget = gadgets[0]\nlast_gadget = gadgets[-1]\nprint(first_gadget)\nprint(last_gadget)",
        "starterCode": "gadgets = [\"Anywhere Door\", \"Time Machine\", \"Bamboo Copter\"]\n# Access first and last gadgets and print them below\n"
    },
    {
        "id": 57,
        "title": "List methods",
        "concept": "Using built-in methods to add, remove, and modify list elements",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "List Methods",
            "subheading": "Adding, removing, and sorting",
            "body": "<p>Python lists come with powerful <strong>built-in methods</strong> to manipulate their contents. These methods make it easy to add, remove, and organize elements.</p>\n\n<h3>Common List Methods</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>append(item)</code></strong> — Adds an item to the <strong>end</strong> of the list</li>\n    <li><strong><code>insert(index, item)</code></strong> — Inserts an item at a specific position</li>\n    <li><strong><code>remove(item)</code></strong> — Removes the <strong>first occurrence</strong> of an item</li>\n    <li><strong><code>pop(index)</code></strong> — Removes and returns item at index (default: last)</li>\n    <li><strong><code>sort()</code></strong> — Sorts the list in <strong>ascending order</strong> (modifies in-place)</li>\n    <li><strong><code>reverse()</code></strong> — Reverses the list in-place</li>\n    <li><strong><code>count(item)</code></strong> — Returns how many times an item appears</li>\n    <li><strong><code>index(item)</code></strong> — Returns the index of the first occurrence</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>gadgets.append(\"Memory Bread\")</code> &rarr; Adds to end</li>\n    <li><code>gadgets.insert(0, \"Anywhere Door\")</code> &rarr; Inserts at beginning</li>\n    <li><code>gadgets.remove(\"Time Machine\")</code> &rarr; Removes first match</li>\n    <li><code>gadgets.pop()</code> &rarr; Removes and returns last item</li>\n    <li><code>numbers.sort()</code> &rarr; Sorts numbers ascending</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>In-place vs Return:</strong> Methods like <code>append()</code>, <code>sort()</code>, and <code>reverse()</code> modify the list <strong>in-place</strong> and return <code>None</code>. Don't assign them back to the list!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What does the append() method do?",
                "a": "<code>append(item)</code> adds an item to the <strong>end</strong> of the list. It modifies the list in-place and returns None."
            },
            {
                "q": "What is the difference between remove() and pop()?",
                "a": "<code>remove(item)</code> removes the first occurrence of a specific value, while <code>pop(index)</code> removes and returns an item at a specific index (or the last item if no index is given)."
            },
            {
                "q": "Does sort() return a new sorted list?",
                "a": "No! <code>sort()</code> sorts the list <strong>in-place</strong> and returns <code>None</code>. If you want a new sorted list without modifying the original, use <code>sorted(my_list)</code> instead."
            },
            {
                "q": "How do I insert an item at a specific position?",
                "a": "Use <code>insert(index, item)</code>. The item will be inserted at the specified index, pushing existing elements to the right."
            },
            {
                "q": "What happens if I try to remove an item that doesn't exist?",
                "a": "Python raises a <code>ValueError: list.remove(x): x not in list</code>. Always check if the item exists before removing, or handle the exception."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python list methods!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which method adds an item to the end of a list?",
                    "options": [
                        "add()",
                        "append()",
                        "insert()",
                        "push()"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does my_list.pop() do by default?",
                    "options": [
                        "Removes first item",
                        "Removes last item",
                        "Removes all items",
                        "Does nothing"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which method sorts a list in-place?",
                    "options": [
                        "sorted()",
                        "sort()",
                        "order()",
                        "arrange()"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The _____ method inserts an item at a specific index. (len / print / insert / input)",
                    "answer": "insert"
                },
                {
                    "type": "fill",
                    "question": "The _____ method removes the first occurrence of an item. (input / len / print / remove)",
                    "answer": "remove"
                },
                {
                    "type": "fill",
                    "question": "Methods that modify in-place return _____. (remove / insert / None / Variable)",
                    "answer": "None"
                },
                {
                    "type": "tf",
                    "question": "append() returns the modified list.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "pop() removes and returns an item.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "sort() creates a new sorted list.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Why shouldn't you write my_list = my_list.sort()?",
                    "sampleAnswer": "Because sort() returns None, not the sorted list. This would replace your list with None. Just use my_list.sort()."
                }
            ]
        },
        "scenario": "Add and remove items from a gadget list. Define gadgets = ['Anywhere Door', 'Time Machine']. Use append() to add 'Bamboo Copter' to the list. Then use remove() to remove 'Time Machine'. Print the final gadgets list.",
        "hint": "Use gadgets.append('Bamboo Copter') and gadgets.remove('Time Machine').",
        "wrongHint": "Make sure you don't assign the result back to gadgets!",
        "solution": "gadgets = [\"Anywhere Door\", \"Time Machine\"]\ngadgets.append(\"Bamboo Copter\")\ngadgets.remove(\"Time Machine\")\nprint(gadgets)",
        "starterCode": "gadgets = [\"Anywhere Door\", \"Time Machine\"]\n# Add 'Bamboo Copter' and remove 'Time Machine', then print gadgets\n"
    },
    {
        "id": 58,
        "title": "List comprehension",
        "concept": "Creating lists dynamically using concise one-line syntax with loops and conditions",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "List Comprehension",
            "subheading": "Elegant list creation",
            "body": "<p><strong>List comprehension</strong> is a beautiful Python feature that lets you create lists using a single, concise line of code. It combines a <code>for</code> loop (and optionally an <code>if</code> condition) into one expression!</p>\n\n<h3>Basic Syntax</h3>\n<pre class=\"code-example\">[expression for item in iterable]</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>expression</code></strong> — What each element will be</li>\n    <li><strong><code>item</code></strong> — Variable representing each element</li>\n    <li><strong><code>iterable</code></strong> — The sequence to loop over</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>[x*2 for x in range(5)]</code> &rarr; <code>[0, 2, 4, 6, 8]</code> (double each number)</li>\n    <li><code>[x.upper() for x in [\"dora\", \"emon\"]]</code> &rarr; <code>[\"DORA\", \"EMON\"]</code> (uppercase each)</li>\n    <li><code>[x for x in range(10) if x % 2 == 0]</code> &rarr; <code>[0, 2, 4, 6, 8]</code> (only evens)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Why use it?</strong> List comprehensions are more readable, faster, and considered more \"Pythonic\" than traditional for loops with append().</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is list comprehension?",
                "a": "List comprehension is a concise way to create lists using a single line of code that combines a for loop (and optionally an if condition) into one expression."
            },
            {
                "q": "What is the basic syntax of list comprehension?",
                "a": "The syntax is <code>[expression for item in iterable]</code>. You can also add a condition: <code>[expression for item in iterable if condition]</code>."
            },
            {
                "q": "Can I add a condition to filter elements in list comprehension?",
                "a": "Yes! Add an <code>if</code> clause at the end: <code>[x for x in range(10) if x % 2 == 0]</code> creates a list of only even numbers."
            },
            {
                "q": "How is list comprehension different from a for loop?",
                "a": "List comprehension creates a new list in one line, while a for loop with append() requires multiple lines. List comprehensions are generally faster and more readable."
            },
            {
                "q": "Can I use list comprehension with strings?",
                "a": "Yes! You can iterate over strings: <code>[char.upper() for char in \\\"hello\\\"]</code> creates <code>['H', 'E', 'L', 'L', 'O']</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python list comprehensions!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What does [x*2 for x in range(3)] create?",
                    "options": [
                        "[0, 1, 2]",
                        "[0, 2, 4]",
                        "[2, 4, 6]",
                        "[0, 0, 0]"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which symbol starts a list comprehension?",
                    "options": [
                        "()",
                        "{}",
                        "[]",
                        "<>"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "How do you filter elements in list comprehension?",
                    "options": [
                        "using where",
                        "using if",
                        "using filter",
                        "using select"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "List comprehension uses _____ brackets. (curly / braces / parentheses / square)",
                    "answer": "square"
                },
                {
                    "type": "fill",
                    "question": "The keyword used to iterate in list comprehension is _____. (elif / for / else / if)",
                    "answer": "for"
                },
                {
                    "type": "fill",
                    "question": "To filter elements, add an _____ clause at the end. (if / else / elif / for)",
                    "answer": "if"
                },
                {
                    "type": "tf",
                    "question": "List comprehension can only create numeric lists.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "List comprehension is more Pythonic than for loops with append().",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can use list comprehension without any condition.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Write a list comprehension that squares numbers 1-5.",
                    "sampleAnswer": "[x**2 for x in range(1, 6)]"
                }
            ]
        },
        "scenario": "Create a list of squared numbers using list comprehension. Use list comprehension to create a list of squares for numbers 1 to 5 (1, 4, 9, 16, 25) and store it in 'squares'. Print squares.",
        "hint": "Use [x**2 for x in range(1, 6)].",
        "wrongHint": "Make sure you use range(1, 6) to get numbers 1-5!",
        "solution": "squares = [x**2 for x in range(1, 6)]\nprint(squares)",
        "starterCode": "# Create a list of squares for numbers 1-5 using list comprehension\n"
    },
    {
        "id": 59,
        "title": "Tuples",
        "concept": "Creating and using ordered immutable sequences for fixed data",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Tuples",
            "subheading": "Immutable ordered sequences",
            "body": "<p>A <strong>Tuple</strong> is similar to a list, but with one key difference: it's <strong>immutable</strong> — once created, it <strong>cannot be changed</strong>. Tuples are perfect for data that should remain constant throughout your program.</p>\n\n<h3>Creating Tuples</h3>\n<ul class=\"desc-list\">\n    <li>Use <strong>parentheses <code>()</code></strong> to create tuples</li>\n    <li>Separate items with <strong>commas</strong></li>\n    <li>Single-item tuples need a trailing comma: <code>(item,)</code></li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>coordinates = (10, 20)</code> (x, y position)</li>\n    <li><code>colors = (\"red\", \"green\", \"blue\")</code> (RGB values)</li>\n    <li><code>single = (\"Doraemon\",)</code> (single item with comma)</li>\n    <li><code>empty = ()</code> (empty tuple)</li>\n</ul>\n\n<h3>Tuple vs List</h3>\n<ul class=\"desc-list\">\n    <li><strong>Tuples:</strong> Immutable, faster, use parentheses <code>()</code></li>\n    <li><strong>Lists:</strong> Mutable, slower, use square brackets <code>[]</code></li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Immutable:</strong> You cannot add, remove, or modify tuple elements after creation. Trying to do so raises a <code>TypeError</code>!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a tuple in Python?",
                "a": "A tuple is an ordered, immutable collection of items. Like lists, tuples can hold multiple data types, but unlike lists, they cannot be modified after creation."
            },
            {
                "q": "What does immutable mean?",
                "a": "Immutable means the object cannot be changed after it's created. You cannot add, remove, or modify elements in a tuple."
            },
            {
                "q": "How do you create a tuple?",
                "a": "Use parentheses <code>()</code> with comma-separated items. E.g. <code>my_tuple = (1, 2, 3)</code>. For a single item, use a trailing comma: <code>(item,)</code>."
            },
            {
                "q": "What is the main difference between tuples and lists?",
                "a": "Tuples are <strong>immutable</strong> (cannot be changed) and use <code>()</code>, while lists are <strong>mutable</strong> (can be changed) and use <code>[]</code>."
            },
            {
                "q": "When should I use a tuple instead of a list?",
                "a": "Use tuples for data that should remain constant (like coordinates, configuration settings, or database records). Use lists when you need to modify the data."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python tuples!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which brackets are used to create tuples?",
                    "options": [
                        "Square brackets []",
                        "Curly braces {}",
                        "Parentheses ()",
                        "Angle brackets <>"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Can you modify a tuple after creation?",
                    "options": [
                        "Yes",
                        "No",
                        "Only if empty",
                        "Only with special methods"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What do you need for a single-item tuple?",
                    "options": [
                        "Nothing special",
                        "A trailing comma",
                        "Double parentheses",
                        "A semicolon"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Tuples are _____ (cannot be changed). (immutable / static / mutable / dynamic)",
                    "answer": "immutable"
                },
                {
                    "type": "fill",
                    "question": "Tuples are generally _____ than lists. (variable / faster / square / immutable)",
                    "answer": "faster"
                },
                {
                    "type": "fill",
                    "question": "Lists use _____ brackets, tuples use parentheses. (curly / braces / parentheses / square)",
                    "answer": "square"
                },
                {
                    "type": "tf",
                    "question": "Tuples can contain mixed data types.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can append items to a tuple.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Tuples support indexing like lists.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Why might you choose a tuple over a list?",
                    "sampleAnswer": "Choose tuples for data that shouldn't change, like coordinates or configuration values. They're also faster and more memory-efficient."
                }
            ]
        },
        "scenario": "Create a tuple with Doraemon's favorite colors. Define colors = ('blue', 'red', 'white'). Access the first color and store it in 'first_color'. Print first_color.",
        "hint": "Use colors[0] to access the first element.",
        "wrongHint": "Make sure you use parentheses () to create the tuple!",
        "solution": "colors = (\"blue\", \"red\", \"white\")\nfirst_color = colors[0]\nprint(first_color)",
        "starterCode": "# Create a tuple with colors and access the first color\n"
    },
    {
        "id": 60,
        "title": "Sets",
        "concept": "Using unordered collections to store unique items and perform set operations",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Sets",
            "subheading": "Unordered unique collections",
            "body": "<p>A <strong>Set</strong> is an unordered collection of <strong>unique</strong> items. Unlike lists, sets cannot contain duplicate values, and they don't maintain any specific order. Sets are perfect for removing duplicates and performing mathematical set operations.</p>\n\n<h3>Creating Sets</h3>\n<ul class=\"desc-list\">\n    <li>Use <strong>curly braces <code>{}</code></strong> to create sets</li>\n    <li>Or use the <code>set()</code> constructor</li>\n    <li>Duplicates are automatically removed</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>{1, 2, 3, 2, 1}</code> &rarr; <code>{1, 2, 3}</code> (duplicates removed)</li>\n    <li><code>set([\"a\", \"b\", \"a\"])</code> &rarr; <code>{\"a\", \"b\"}</code> (from list)</li>\n    <li><code>empty_set = set()</code> (empty set — <code>{}</code> creates empty dict!)</li>\n</ul>\n\n<h3>Set Operations</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>add()</code></strong> — Add an element</li>\n    <li><strong><code>remove()</code></strong> — Remove an element</li>\n    <li><strong><code>union()</code></strong> or <code>|</code> — Combine sets</li>\n    <li><strong><code>intersection()</code></strong> or <code>&</code> — Common elements</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>No Indexing:</strong> Sets are unordered, so you cannot access elements by index (no <code>set[0]</code>). Use loops or convert to list if you need indexing!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a set in Python?",
                "a": "A set is an unordered collection of unique items. It automatically removes duplicates and doesn't maintain any specific order."
            },
            {
                "q": "What happens if you try to add a duplicate to a set?",
                "a": "Nothing! Sets automatically ignore duplicate values. If you add an item that already exists, the set remains unchanged."
            },
            {
                "q": "How do you create an empty set?",
                "a": "Use <code>set()</code>. Using <code>{}</code> creates an empty dictionary, not a set!"
            },
            {
                "q": "Can you access set elements by index?",
                "a": "No! Sets are unordered, so they don't support indexing. You must use loops or convert to a list if you need indexed access."
            },
            {
                "q": "What are some common set operations?",
                "a": "Common operations include <code>add()</code>, <code>remove()</code>, <code>union()</code> (combine), and <code>intersection()</code> (find common elements)."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python sets!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which brackets are used to create sets?",
                    "options": [
                        "Square brackets []",
                        "Parentheses ()",
                        "Curly braces {}",
                        "Angle brackets <>"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What does {1, 2, 2, 3} evaluate to?",
                    "options": [
                        "{1, 2, 2, 3}",
                        "{1, 2, 3}",
                        "{1, 3}",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "How do you create an empty set?",
                    "options": [
                        "{}",
                        "set()",
                        "[]",
                        "()"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Sets automatically remove duplicates and are _____. (indexed / ordered / unordered / sorted)",
                    "answer": "unordered"
                },
                {
                    "type": "fill",
                    "question": "To add an element to a set, use the _____ method. (variable / add / unordered / indexing)",
                    "answer": "add"
                },
                {
                    "type": "fill",
                    "question": "Sets do not support _____. (indexing / typeerror / nameerror / syntaxerror)",
                    "answer": "indexing"
                },
                {
                    "type": "tf",
                    "question": "Sets maintain the order of elements.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You can have duplicate values in a set.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "{} creates an empty set.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Why would you use a set instead of a list?",
                    "sampleAnswer": "Use sets when you need unique items and don't care about order, or when you need fast membership testing and set operations like union/intersection."
                }
            ]
        },
        "scenario": "Create a set of unique gadgets. Define gadgets = {'Anywhere Door', 'Time Machine', 'Anywhere Door'}. Print gadgets to see duplicates removed. Then add 'Bamboo Copter' using add() and print gadgets again.",
        "hint": "Use gadgets.add('Bamboo Copter') to add an element.",
        "wrongHint": "Make sure you use curly braces {} and print gadgets twice!",
        "solution": "gadgets = {\"Anywhere Door\", \"Time Machine\", \"Anywhere Door\"}\nprint(gadgets)\ngadgets.add(\"Bamboo Copter\")\nprint(gadgets)",
        "starterCode": "gadgets = {\"Anywhere Door\", \"Time Machine\", \"Anywhere Door\"}\n# Print gadgets, add 'Bamboo Copter', then print again\n"
    },
    {
        "id": 61,
        "title": "Dictionary",
        "concept": "Key-value pair data structures",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Dictionaries",
            "subheading": "Key-value pair data structures",
            "body": "<p>A <strong>Dictionary</strong> is a collection of key-value pairs. Dictionaries are unordered (ordered by insertion from Python 3.7+), mutable, and indexed by keys (which must be unique and of immutable types).</p>\n\n<h3>Creating Dictionaries</h3>\n<ul class=\"desc-list\">\n    <li>Use <strong>curly braces <code>{}</code></strong> with <code>key: value</code> pairs</li>\n    <li>Or use the <code>dict()</code> constructor</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>doraemon = {\"name\": \"Doraemon\", \"color\": \"blue\", \"age\": 10}</code></li>\n    <li><code>empty_dict = {}</code></li>\n</ul>\n\n<h3>Accessing and Modifying Elements</h3>\n<ul class=\"desc-list\">\n    <li><code>doraemon[\"color\"]</code> &rarr; <code>\"blue\"</code> (Accessing value)</li>\n    <li><code>doraemon.get(\"pocket\", \"no pocket\")</code> &rarr; <code>\"no pocket\"</code> (Safe access using get())</li>\n    <li><code>doraemon[\"height\"] = 129.3</code> &rarr; Adds a new key-value pair</li>\n    <li><code>doraemon[\"color\"] = \"yellow\"</code> &rarr; Updates existing key</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>KeyError:</strong> Trying to access a key that does not exist in a dictionary using square brackets (e.g. <code>doraemon[\"pocket\"]</code>) will raise a <code>KeyError</code>. Use the <code>get()</code> method to avoid this!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a dictionary in Python?",
                "a": "A dictionary is a mutable collection of key-value pairs. Each key is mapped to a value, and keys must be unique and immutable (like strings, numbers, or tuples)."
            },
            {
                "q": "How do you access a value in a dictionary?",
                "a": "You can access a value using its key inside square brackets (e.g. <code>my_dict[\"key\"]</code>) or by using the <code>get()</code> method (e.g. <code>my_dict.get(\"key\")</code>)."
            },
            {
                "q": "What is the difference between my_dict[\"key\"] and my_dict.get(\"key\")?",
                "a": "If the key does not exist, <code>my_dict[\"key\"]</code> raises a <code>KeyError</code>, whereas <code>my_dict.get(\"key\")</code> returns <code>None</code> (or a default value you specify) without raising an error."
            },
            {
                "q": "Can you have duplicate keys in a dictionary?",
                "a": "No, keys must be unique. If you assign a value to an existing key, it will overwrite the previous value."
            },
            {
                "q": "How do you add or update a key-value pair?",
                "a": "Simply assign a value to the key: <code>my_dict[\"new_key\"] = value</code>. If the key exists, it updates it; if it doesn't, it adds it."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python dictionaries!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which brackets are used to create dictionaries?",
                    "options": [
                        "Square brackets []",
                        "Parentheses ()",
                        "Curly braces {}",
                        "Angle brackets <>"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What happens if you try to access a non-existent key using square brackets?",
                    "options": [
                        "Returns None",
                        "Raises a KeyError",
                        "Creates the key automatically",
                        "Returns False"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the output of empty = {}; empty.get('pocket', 'not found')?",
                    "options": [
                        "not found",
                        "None",
                        "KeyError",
                        "empty"
                    ],
                    "answer": 0
                },
                {
                    "type": "fill",
                    "question": "Dictionaries store data as key-_____ pairs. (value / typeerror / nameerror / syntaxerror)",
                    "answer": "value"
                },
                {
                    "type": "fill",
                    "question": "To get a list of all keys in a dictionary, use the _____() method. (syntaxerror / nameerror / typeerror / keys)",
                    "answer": "keys"
                },
                {
                    "type": "fill",
                    "question": "A safe way to access keys without raising KeyError is the _____() method. (variable / keys / get / value)",
                    "answer": "get"
                },
                {
                    "type": "tf",
                    "question": "Dictionary keys must be unique.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can have duplicate values in a dictionary.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "{} creates an empty dictionary.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "How do you check if a key is present in a dictionary?",
                    "sampleAnswer": "Use the 'in' operator, for example: 'key' in my_dict."
                }
            ]
        },
        "scenario": "Create a dictionary containing Doraemon's details. Define a dictionary named 'doraemon' with keys 'color' set to 'blue' and 'type' set to 'robot'. Add a new key 'pocket' set to True. Print the doraemon dictionary.",
        "hint": "Use doraemon = {'color': 'blue', 'type': 'robot'} and then doraemon['pocket'] = True.",
        "wrongHint": "Make sure you create the dictionary correctly, add the 'pocket' key, and print the dictionary!",
        "solution": "doraemon = {\"color\": \"blue\", \"type\": \"robot\"}\ndoraemon[\"pocket\"] = True\nprint(doraemon)",
        "starterCode": "doraemon = {\"color\": \"blue\", \"type\": \"robot\"}\n# Add the key 'pocket' with value True, then print doraemon\n"
    },
    {
        "id": 62,
        "title": "Nested dictionary",
        "concept": "Structuring complex hierarchical data",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Nested Dictionaries",
            "subheading": "Structuring complex hierarchical data",
            "body": "<p>A <strong>Nested Dictionary</strong> is a dictionary that contains other dictionaries as values. This is extremely useful for structuring complex hierarchical data, like user profiles, nested objects, or database records.</p>\n\n<h3>Creating a Nested Dictionary</h3>\n<ul class=\"desc-list\">\n    <li>Place a dictionary inside another dictionary as a value associated with a key.</li>\n</ul>\n\n<h3>Example</h3>\n<pre class=\"code-example\">users = {\n    \"user1\": {\n        \"name\": \"Doraemon\",\n        \"color\": \"blue\"\n    },\n    \"user2\": {\n        \"name\": \"Nobita\",\n        \"color\": \"yellow\"\n    }\n}</pre>\n\n<h3>Accessing Nested Elements</h3>\n<ul class=\"desc-list\">\n    <li>Chain the square brackets <code>[]</code> to access nested values.</li>\n    <li><code>users[\"user1\"][\"name\"]</code> &rarr; <code>\"Doraemon\"</code></li>\n    <li><code>users[\"user2\"][\"color\"]</code> &rarr; <code>\"yellow\"</code></li>\n</ul>\n\n<h3>Modifying Nested Elements</h3>\n<ul class=\"desc-list\">\n    <li><code>users[\"user2\"][\"color\"] = \"red\"</code> &rarr; Changes Nobita's color to red</li>\n    <li><code>users[\"user1\"][\"pocket\"] = True</code> &rarr; Adds 'pocket' to Doraemon's dictionary</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Chaining get():</strong> To safely access nested elements, you can chain <code>.get()</code>. But be careful: if a outer key is missing, <code>.get()</code> returns <code>None</code>, and calling <code>.get()</code> on <code>None</code> will crash your program. Use: <code>users.get(\"user1\", {}).get(\"name\")</code>.</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a nested dictionary?",
                "a": "A nested dictionary is a dictionary where the values of one or more keys are themselves dictionaries."
            },
            {
                "q": "How do you access a value inside a nested dictionary?",
                "a": "You access a value by chaining keys in square brackets, starting with the outermost key: <code>dict[outer_key][inner_key]</code>."
            },
            {
                "q": "Can you have multiple levels of nesting in a dictionary?",
                "a": "Yes! You can nest dictionaries inside nested dictionaries as deep as you need, e.g. <code>dict[level1][level2][level3]</code>."
            },
            {
                "q": "How do you add a new key-value pair to an existing nested dictionary?",
                "a": "Access the nested dictionary first, and then assign the value: <code>dict[outer_key][new_inner_key] = value</code>."
            },
            {
                "q": "How can you safely access nested keys without raising an error?",
                "a": "Use <code>.get()</code> with an empty dictionary fallback for intermediate keys: <code>dict.get(outer_key, {}).get(inner_key)</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of Python nested dictionaries!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Given info = {'dora': {'color': 'blue'}}, how do you access 'blue'?",
                    "options": [
                        "info['dora', 'color']",
                        "info['dora']['color']",
                        "info['dora'](color)",
                        "info.dora.color"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What type of structure is a nested dictionary?",
                    "options": [
                        "Flat structure",
                        "Hierarchical structure",
                        "Sequential structure",
                        "Tabular structure"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the result of info = {'dora': {'color': 'blue'}}; info['dora'].get('pocket', 'none')?",
                    "options": [
                        "None",
                        "none",
                        "KeyError",
                        "blue"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To access nested dictionary values, you _____ key lookups. (1 / dictionary / variable / chain)",
                    "answer": "chain"
                },
                {
                    "type": "fill",
                    "question": "If info = {'a': {'b': 1}}, then info['a']['b'] is equal to _____. (3 / 2 / 1 / 0)",
                    "answer": "1"
                },
                {
                    "type": "fill",
                    "question": "Using info.get('a', {}) returns an empty _____ if 'a' is not found. (dictionary / chain / variable / 1)",
                    "answer": "dictionary"
                },
                {
                    "type": "tf",
                    "question": "You can change a value inside a nested dictionary.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Nested dictionaries can only have one level of nesting.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "info['a']['b'] will raise an error if key 'a' doesn't exist.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Write the expression to add a key 'age' with value 10 to a nested dictionary 'nobita' inside 'friends'.",
                    "sampleAnswer": "friends['nobita']['age'] = 10"
                }
            ]
        },
        "scenario": "Define a nested dictionary representing character gadgets. Create a dictionary named 'inventory' containing 'doraemon' as a key, whose value is another dictionary with key 'primary' set to 'Anywhere Door'. Modify this nested dictionary to add a key 'secondary' with value 'Time Machine' under 'doraemon'. Print the final inventory dictionary.",
        "hint": "Use inventory = {'doraemon': {'primary': 'Anywhere Door'}} and inventory['doraemon']['secondary'] = 'Time Machine'.",
        "wrongHint": "Make sure you nest the dictionaries correctly and print the main inventory dictionary!",
        "solution": "inventory = {\"doraemon\": {\"primary\": \"Anywhere Door\"}}\ninventory[\"doraemon\"][\"secondary\"] = \"Time Machine\"\nprint(inventory)",
        "starterCode": "inventory = {\"doraemon\": {\"primary\": \"Anywhere Door\"}}\n# Add 'secondary' key with value 'Time Machine' under 'doraemon', then print inventory\n"
    },
    {
        "id": 63,
        "title": "len(), max(), min()",
        "concept": "Core aggregate functions on collections",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "len(), max(), and min() Functions",
            "subheading": "Core aggregate functions on collections",
            "body": "<p>Python provides several extremely useful built-in functions that work across all collections (lists, tuples, sets, dictionaries, and even strings) to get their size, maximum value, and minimum value.</p>\n\n<h3>1. The <code>len()</code> Function</h3>\n<ul class=\"desc-list\">\n    <li>Returns the number of items (length) in a collection.</li>\n    <li><code>len([1, 2, 3])</code> &rarr; <code>3</code></li>\n    <li><code>len(\"Doraemon\")</code> &rarr; <code>8</code></li>\n</ul>\n\n<h3>2. The <code>max()</code> Function</h3>\n<ul class=\"desc-list\">\n    <li>Returns the largest item in a collection.</li>\n    <li><code>max([5, 12, 3])</code> &rarr; <code>12</code></li>\n    <li><code>max(\"abc\")</code> &rarr; <code>\"c\"</code> (alphabetically largest)</li>\n</ul>\n\n<h3>3. The <code>min()</code> Function</h3>\n<ul class=\"desc-list\">\n    <li>Returns the smallest item in a collection.</li>\n    <li><code>min([5, 12, 3])</code> &rarr; <code>3</code></li>\n    <li><code>min(\"abc\")</code> &rarr; <code>\"a\"</code> (alphabetically smallest)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Comparing Mixed Types:</strong> Calling <code>max()</code> or <code>min()</code> on a collection with mixed, incomparable types (e.g. <code>[10, \"apple\"]</code>) will raise a <code>TypeError</code>!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What does len() do?",
                "a": "<code>len()</code> returns the number of elements in a collection, such as a list, set, dictionary, tuple, or the number of characters in a string."
            },
            {
                "q": "What does max() and min() return for strings?",
                "a": "They compare characters based on their Unicode value (alphabetical order). E.g. <code>min(\"doraemon\")</code> returns <code>\"a\"</code>."
            },
            {
                "q": "Can you use max() and min() on dictionaries?",
                "a": "Yes! By default, they will find the maximum/minimum of the dictionary's <strong>keys</strong>, not its values."
            },
            {
                "q": "What happens if you pass an empty collection to max() or min()?",
                "a": "Passing an empty collection raises a <code>ValueError</code>. You can prevent this by passing a default value, e.g. <code>max([], default=0)</code>."
            },
            {
                "q": "Does len() work on numeric values like integers?",
                "a": "No. <code>len()</code> only works on sequences and collections. Calling <code>len(123)</code> will raise a <code>TypeError</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of len(), max(), and min()!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What does len('Python') return?",
                    "options": [
                        "5",
                        "6",
                        "7",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the result of max([2, 8, 1])?",
                    "options": [
                        "1",
                        "2",
                        "8",
                        "TypeError"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What happens if you run min([1, 'a'])?",
                    "options": [
                        "1",
                        "'a'",
                        "None",
                        "Raises TypeError"
                    ],
                    "answer": 3
                },
                {
                    "type": "fill",
                    "question": "The _____ function returns the number of elements in a list. (input / len / min / print)",
                    "answer": "len"
                },
                {
                    "type": "fill",
                    "question": "To find the smallest element in a collection, use the _____ function. (min / input / len / print)",
                    "answer": "min"
                },
                {
                    "type": "fill",
                    "question": "When used on a dictionary, max() compares the dictionary _____. (syntaxerror / nameerror / typeerror / keys)",
                    "answer": "keys"
                },
                {
                    "type": "tf",
                    "question": "len() can be used to find the length of an integer directly.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "max() and min() are built-in functions, not list methods.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "min() on a string returns the alphabetically earliest character.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Write the code to find the length of the list [10, 20, 30].",
                    "sampleAnswer": "len([10, 20, 30])"
                }
            ]
        },
        "scenario": "Analyze a list of scores. Define scores = [78, 92, 56, 89, 95, 84]. Find the number of scores using len() and store it in 'count'. Find the highest score using max() and store it in 'highest'. Find the lowest score using min() and store it in 'lowest'. Print all three values on separate lines in that order.",
        "hint": "Use len(scores), max(scores), and min(scores).",
        "wrongHint": "Make sure you print count, highest, and lowest on three separate lines!",
        "solution": "scores = [78, 92, 56, 89, 95, 84]\ncount = len(scores)\nhighest = max(scores)\nlowest = min(scores)\nprint(count)\nprint(highest)\nprint(lowest)",
        "starterCode": "scores = [78, 92, 56, 89, 95, 84]\n# Find count, highest, lowest and print them on separate lines below\n"
    },
    {
        "id": 64,
        "title": "Sorting",
        "concept": "Sorting collections using sort() and sorted()",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Sorting Collections",
            "subheading": "In-place sort() vs. returns-new sorted()",
            "body": "<p>Python offers two primary ways to sort collections. Understanding the difference between them is crucial for writing bug-free and efficient code.</p>\n\n<h3>1. The <code>sort()</code> Method (In-place)</h3>\n<ul class=\"desc-list\">\n    <li>Only available for <strong>lists</strong>.</li>\n    <li>Modifies the original list **in-place** (permanently changing its order).</li>\n    <li>Returns <code>None</code>.</li>\n    <li><code>numbers = [3, 1, 4]; numbers.sort(); print(numbers)</code> &rarr; <code>[1, 3, 4]</code></li>\n</ul>\n\n<h3>2. The <code>sorted()</code> Function (Returns new list)</h3>\n<ul class=\"desc-list\">\n    <li>Available for **any iterable** (lists, tuples, strings, dictionaries, sets).</li>\n    <li>Leaves the original collection **unchanged**.</li>\n    <li>Returns a **new sorted list**.</li>\n    <li><code>numbers = [3, 1, 4]; sorted_nums = sorted(numbers); print(sorted_nums)</code> &rarr; <code>[1, 3, 4]</code></li>\n</ul>\n\n<h3>Reverse Sorting</h3>\n<p>Both support sorting in descending order using the <code>reverse=True</code> parameter:</p>\n<ul class=\"desc-list\">\n    <li><code>numbers.sort(reverse=True)</code></li>\n    <li><code>new_list = sorted(numbers, reverse=True)</code></li>\n</ul>"
        },
        "qna": [
            {
                "q": "What is the difference between sort() and sorted()?",
                "a": "<code>sort()</code> is a list method that modifies the list in-place and returns <code>None</code>. <code>sorted()</code> is a built-in function that works on any iterable, leaves the original unchanged, and returns a new sorted list."
            },
            {
                "q": "Can you use sort() on a tuple?",
                "a": "No, tuples are immutable, so they cannot be modified in-place. Trying to use <code>my_tuple.sort()</code> raises an <code>AttributeError</code>. You can, however, use the <code>sorted(my_tuple)</code> function, which returns a new sorted list."
            },
            {
                "q": "How do you sort a list in descending order?",
                "a": "Pass the argument <code>reverse=True</code> to either <code>sort()</code> or <code>sorted()</code>. E.g. <code>my_list.sort(reverse=True)</code>."
            },
            {
                "q": "What does sorted() return when you pass a string?",
                "a": "It returns a sorted **list** of characters, e.g. <code>sorted(\"cba\")</code> returns <code>['a', 'b', 'c']</code>."
            },
            {
                "q": "Can you sort a list of strings?",
                "a": "Yes! Strings are sorted alphabetically (lexicographically) by default. Capital letters come before lowercase letters in ASCII/Unicode sorting."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of sorting in Python!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which of the following sorts a list in-place?",
                    "options": [
                        "sorted(my_list)",
                        "my_list.sort()",
                        "my_list.sorted()",
                        "sort(my_list)"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does my_list.sort() return?",
                    "options": [
                        "The sorted list",
                        "None",
                        "A new list",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Can you call sort() on a tuple?",
                    "options": [
                        "Yes, it returns a sorted tuple",
                        "Yes, it modifies the tuple in-place",
                        "No, tuples have no sort method",
                        "Only if it contains numbers"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "To sort a collection in descending order, pass the parameter reverse=_____. (None / True / undefined / False)",
                    "answer": "True"
                },
                {
                    "type": "fill",
                    "question": "The sorted() function returns a new _____. (int / float / str / list)",
                    "answer": "list"
                },
                {
                    "type": "fill",
                    "question": "The sort() method sorts a list _____-place. (else / in / elif / if)",
                    "answer": "in"
                },
                {
                    "type": "tf",
                    "question": "sorted() modifies the original collection.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You can use sorted() on dictionaries.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Strings are sorted alphabetically.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "What is the return type of sorted('hello')?",
                    "sampleAnswer": "A list of strings/characters, specifically ['e', 'h', 'l', 'l', 'o']."
                }
            ]
        },
        "scenario": "Perform both types of sorting. Define a list named 'prices' with values [25, 10, 45, 5]. Use sorted() to create a new sorted list in descending order and store it in 'prices_desc'. Then use sort() on the original 'prices' list to sort it in-place in ascending order. Print both prices_desc and prices on separate lines.",
        "hint": "Use prices_desc = sorted(prices, reverse=True) and prices.sort().",
        "wrongHint": "Make sure you print prices_desc first, then prices on the next line!",
        "solution": "prices = [25, 10, 45, 5]\nprices_desc = sorted(prices, reverse=True)\nprices.sort()\nprint(prices_desc)\nprint(prices)",
        "starterCode": "prices = [25, 10, 45, 5]\n# Sort prices descending into prices_desc, sort prices in-place, then print both on separate lines\n"
    },
    {
        "id": 65,
        "title": "Collection coding challenge",
        "concept": "Solving complex collection puzzles",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Collection Coding Challenge",
            "subheading": "Mastering lists, tuples, sets, and dictionaries",
            "body": "<p>Congratulations! You've reached the end of the Collections module. It's time to put your knowledge to the test by solving a practical programming challenge that combines various collection types.</p>\n\n<h3>Review of Collections</h3>\n<ul class=\"desc-list\">\n    <li><strong>Lists:</strong> Ordered, mutable, allows duplicates. Great for lists of items you want to change.</li>\n    <li><strong>Tuples:</strong> Ordered, immutable, allows duplicates. Great for fixed data (e.g. coordinates, key-value keys).</li>\n    <li><strong>Sets:</strong> Unordered, mutable, unique elements. Great for removing duplicates and testing membership.</li>\n    <li><strong>Dictionaries:</strong> Key-value mapping, keys must be unique. Great for lookup tables and structured objects.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Challenge Prompt:</strong> We want to identify the unique items present in a list, sort them alphabetically, and map them to their length in a dictionary!</div>\n</div>"
        },
        "qna": [
            {
                "q": "How can you remove duplicates from a list?",
                "a": "The easiest way is to convert the list to a set using <code>set(my_list)</code>, then optionally convert it back to a list using <code>list()</code>."
            },
            {
                "q": "How do you count occurrences of items in a list?",
                "a": "You can use a loop with a dictionary, or the built-in <code>list.count()</code> method, or the <code>collections.Counter</code> class."
            },
            {
                "q": "Can set elements be dictionary keys?",
                "a": "Yes! Set elements must be hashable (immutable), just like dictionary keys. So you can map unique string items from a set to dictionary values."
            },
            {
                "q": "What happens when you sort a set?",
                "a": "Using <code>sorted(my_set)</code> returns a sorted <strong>list</strong> of the set elements, as sets themselves cannot be sorted."
            },
            {
                "q": "How do you combine elements from a list into a dictionary?",
                "a": "You can use a dictionary comprehension, for example: <code>{item: len(item) for item in items}</code>."
            }
        ],
        "test": {
            "intro": "Let's test your overall collections mastery!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which structure guarantees only unique elements?",
                    "options": [
                        "List",
                        "Tuple",
                        "Set",
                        "Dictionary"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Which structure is immutable?",
                    "options": [
                        "List",
                        "Tuple",
                        "Set",
                        "Dictionary"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the return type of sorted({3, 1, 2})?",
                    "options": [
                        "Set",
                        "List",
                        "Tuple",
                        "Dict"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To add an element to a set, use the _____ method. (variable / add / append / duplicates)",
                    "answer": "add"
                },
                {
                    "type": "fill",
                    "question": "To add an element to a list, use the _____ method. (print / append / len / input)",
                    "answer": "append"
                },
                {
                    "type": "fill",
                    "question": "Converting a list to a set automatically removes _____. (add / append / duplicates / variable)",
                    "answer": "duplicates"
                },
                {
                    "type": "tf",
                    "question": "Dictionaries can have lists as keys.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Tuples can contain mutable lists.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The expression len({1, 1, 2}) evaluates to 2.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Write a dictionary comprehension that maps 1, 2 to their squares.",
                    "sampleAnswer": "{x: x**2 for x in (1, 2)}"
                }
            ]
        },
        "scenario": "Remove duplicates and map item lengths. Define words = ['dorayaki', 'apple', 'dorayaki', 'banana', 'apple']. Convert this list to a set to get unique words, then sort them alphabetically to get a sorted list of unique words. Finally, create a dictionary where keys are the sorted unique words and values are their lengths. Print the final dictionary.",
        "hint": "First, do unique_words = sorted(list(set(words))), then create the dict using comprehension: {w: len(w) for w in unique_words}.",
        "wrongHint": "Make sure you convert the list to a set to remove duplicates, sort the results alphabetically, map them to their lengths, and print the dictionary!",
        "solution": "words = ['dorayaki', 'apple', 'dorayaki', 'banana', 'apple']\nunique_words = sorted(list(set(words)))\nresult = {w: len(w) for w in unique_words}\nprint(result)",
        "starterCode": "words = ['dorayaki', 'apple', 'dorayaki', 'banana', 'apple']\n# Remove duplicates, sort alphabetically, map to lengths in a dictionary, and print it below\n"
    },
    {
        "id": 66,
        "title": "Why functions",
        "concept": "Reusing and modularizing your Python code",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Why Functions?",
            "subheading": "Reusing and modularizing your Python code",
            "body": "<p>Imagine you need to print a banner message 10 times in different parts of your code. Copy-pasting the print statement works, but what if you need to change the message? You'd have to edit all 10 places! This is where <strong>functions</strong> come in.</p>\n\n<h3>Core Principles</h3>\n<ul class=\"desc-list\">\n    <li><strong>DRY (Don't Repeat Yourself):</strong> Avoid copy-pasting code. Write once, use everywhere!</li>\n    <li><strong>Modularity:</strong> Break complex code into smaller, organized, and manageable chunks.</li>\n    <li><strong>Readability:</strong> Named functions make it easy to understand what the code does (e.g. <code>calculate_score()</code>).</li>\n    <li><strong>Maintainability:</strong> Bug fixes or updates only need to be done in one place.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>What is a Function?</strong> A function is a named block of code designed to perform a specific task. Defining a function is like writing a recipe; it doesn't do anything until you actually follow (call) it!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What does the DRY principle stand for?",
                "a": "DRY stands for <strong>Don't Repeat Yourself</strong>. It's a programming best practice aimed at reducing repetition of code."
            },
            {
                "q": "How do functions improve readability?",
                "a": "By grouping statements under a descriptive name (like <code>draw_circle()</code>), we tell the reader what the block of code does without them needing to read every line of logic."
            },
            {
                "q": "What is modularity?",
                "a": "Modularity is the practice of breaking down a large program into small, independent sub-programs (modules or functions) that are easy to build and test."
            },
            {
                "q": "Does defining a function execute its code?",
                "a": "No, defining a function only registers it in memory. It will not execute until you explicitly call it."
            },
            {
                "q": "When should I write a function?",
                "a": "Write a function whenever you find yourself repeating the same lines of code, or when a block of code becomes too long and does a distinct, logical task."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of why we use functions in programming!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the primary benefit of the DRY principle?",
                    "options": [
                        "Faster execution",
                        "Reduced code repetition",
                        "Simpler syntax",
                        "More parameters"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is breaking code into self-contained blocks called?",
                    "options": [
                        "Linearity",
                        "Modularity",
                        "Precedence",
                        "Nesting"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What happens when you define a function?",
                    "options": [
                        "It runs immediately",
                        "It compiles to binary",
                        "It is registered in memory but doesn't run",
                        "It prompts user input"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "DRY stands for Don't _____ Yourself. (Variable / modularity / Repeat / block)",
                    "answer": "Repeat"
                },
                {
                    "type": "fill",
                    "question": "A function is a named _____ of code. (Repeat / block / modularity / variable)",
                    "answer": "block"
                },
                {
                    "type": "fill",
                    "question": "Grouping code into small independent parts is called _____. (modularity / Repeat / block / variable)",
                    "answer": "modularity"
                },
                {
                    "type": "tf",
                    "question": "Functions make code harder to debug.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You should write a function if you copy-paste the same code multiple times.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A program can only have one function.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the concept of code reusability.",
                    "sampleAnswer": "Code reusability means writing a block of code once (like in a function) and invoking it multiple times throughout a program without rewriting it."
                }
            ]
        },
        "scenario": "Define a simple welcome function. Create a function named 'greet' that prints the string 'Hello, PyBe Explorer!'. Run the function once to see the message printed.",
        "hint": "Use def greet(): followed by print('Hello, PyBe Explorer!') and then call greet().",
        "wrongHint": "Make sure you define greet() and then call it by typing greet() at the bottom!",
        "solution": "def greet():\n    print(\"Hello, PyBe Explorer!\")\n\ngreet()",
        "starterCode": "# Define the greet function and call it below\n"
    },
    {
        "id": 67,
        "title": "Creating functions",
        "concept": "Defining functions with def",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Creating Functions",
            "subheading": "Defining functions with def",
            "body": "<p>In Python, we create functions using the <strong><code>def</code></strong> keyword. Let's look at the basic structure of a function definition and how to call it.</p>\n\n<h3>Syntax of a Function</h3>\n<pre class=\"code-example\">def function_name():\n    # code block inside function\n    print(\"Hello from function!\")</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>def</code>:</strong> Keyword telling Python we are defining a function.</li>\n    <li><strong><code>function_name</code>:</strong> The name of the function (use snake_case, similar to variables).</li>\n    <li><strong>Parentheses <code>()</code>:</strong> Where inputs go (can be empty).</li>\n    <li><strong>Colon <code>:</code>:</strong> Ends the function header.</li>\n    <li><strong>Indented Block:</strong> The code statements that will run when the function is called.</li>\n</ul>\n\n<h3>Calling a Function</h3>\n<p>To run (call) a function, write its name followed by parentheses:</p>\n<pre class=\"code-example\">function_name()</pre>"
        },
        "qna": [
            {
                "q": "What keyword is used to start a function definition?",
                "a": "The <code>def</code> keyword is used to start a function definition."
            },
            {
                "q": "What is the difference between defining and calling a function?",
                "a": "Defining a function creates the block of code and names it. Calling a function actually executes that block of code."
            },
            {
                "q": "Why do function names need parentheses when called?",
                "a": "The parentheses indicate to Python that you want to execute (call) the function. Without parentheses, Python refers to the function object itself rather than running it."
            },
            {
                "q": "Does Python require indentation for function bodies?",
                "a": "Yes! All statements inside the function body must be consistently indented (usually 4 spaces). Indentation determines where the function ends."
            },
            {
                "q": "Can a function name start with a number?",
                "a": "No, function names follow the same naming rules as variables. They must start with a letter or underscore, and cannot be Python keywords."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of creating and calling functions!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword defines a function in Python?",
                    "options": [
                        "function",
                        "def",
                        "define",
                        "func"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "How do you call a function named 'say_hello'?",
                    "options": [
                        "call say_hello",
                        "say_hello()",
                        "say_hello[]",
                        "say_hello"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What happens if you omit parentheses when calling a function?",
                    "options": [
                        "It raises a SyntaxError",
                        "It runs anyway",
                        "It refers to the function object but does not execute it",
                        "It returns None"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "Functions are defined using the _____ keyword. (else / elif / def / if)",
                    "answer": "def"
                },
                {
                    "type": "fill",
                    "question": "The body of a function must be _____. (def / indented / : / variable)",
                    "answer": "indented"
                },
                {
                    "type": "fill",
                    "question": "A function header must end with a _____. (: / * / + / -)",
                    "answer": ":"
                },
                {
                    "type": "tf",
                    "question": "def stands for define.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Function names must follow the same rules as variable names.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can call a function before defining it in a script.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "What is the syntax error in: 'def test() print(\"ok\")'?",
                    "sampleAnswer": "It is missing the colon ':' at the end of the def statement, and the print function must be indented on the next line."
                }
            ]
        },
        "scenario": "Define and run an intro function. Create a function named 'doraemon_intro' that prints 'I am Doraemon, a robot cat!'. Call the function at the bottom of the script.",
        "hint": "Use def doraemon_intro(): and indent the print statement. Don't forget to call doraemon_intro() at the end.",
        "wrongHint": "Make sure you call doraemon_intro() at the bottom!",
        "solution": "def doraemon_intro():\n    print(\"I am Doraemon, a robot cat!\")\n\ndoraemon_intro()",
        "starterCode": "# Create and call the doraemon_intro function below\n"
    },
    {
        "id": 68,
        "title": "Parameters",
        "concept": "Passing inputs into your functions",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Function Parameters",
            "subheading": "Passing inputs into your functions",
            "body": "<p>Functions become much more powerful when we can feed them information. <strong>Parameters</strong> allow functions to accept input values and use them inside their logic.</p>\n\n<h3>Parameters vs. Arguments</h3>\n<ul class=\"desc-list\">\n    <li><strong>Parameter:</strong> The variable listed inside the parentheses in the function <strong>definition</strong> (e.g. <code>name</code>).</li>\n    <li><strong>Argument:</strong> The actual value sent to the function when it is <strong>called</strong> (e.g. <code>\"Nobita\"</code>).</li>\n</ul>\n\n<h3>Example</h3>\n<pre class=\"code-example\">def greet(name):\n    print(\"Hello, \" + name)\n\ngreet(\"Nobita\")  # Output: Hello, Nobita\ngreet(\"Shizuka\") # Output: Hello, Shizuka</pre>\n\n<h3>Multiple Parameters</h3>\n<p>You can define functions with multiple parameters by separating them with commas:</p>\n<pre class=\"code-example\">def add_nums(a, b):\n    print(a + b)</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>TypeError:</strong> If a function expects a certain number of parameters, you must pass the exact same number of arguments when calling it, otherwise Python will throw an error!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is the difference between a parameter and an argument?",
                "a": "A parameter is the variable name inside the function definition. An argument is the actual value passed to that parameter during a function call."
            },
            {
                "q": "Can you pass multiple parameters to a function?",
                "a": "Yes! You can specify as many parameters as needed, separated by commas: <code>def func(x, y, z):</code>."
            },
            {
                "q": "What happens if you pass the wrong number of arguments?",
                "a": "Python raises a <code>TypeError</code> stating that the function is missing required positional arguments, or that too many arguments were given."
            },
            {
                "q": "Do parameters have specific data types?",
                "a": "In Python, parameters are dynamically typed. They will accept any data type passed to them, unless you use type hints."
            },
            {
                "q": "Are variables created inside a function (including parameters) accessible outside?",
                "a": "No, they have local scope. They only exist inside the function and disappear once the function completes execution."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of parameters and arguments!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the variable in a function definition called?",
                    "options": [
                        "Argument",
                        "Parameter",
                        "Constant",
                        "Key"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the actual value passed in a function call called?",
                    "options": [
                        "Argument",
                        "Parameter",
                        "Variable",
                        "Statement"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What error is raised when arguments mismatch parameters?",
                    "options": [
                        "ValueError",
                        "TypeError",
                        "SyntaxError",
                        "NameError"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Variables inside def parentheses are called _____. (parameters / commas / arguments / variable)",
                    "answer": "parameters"
                },
                {
                    "type": "fill",
                    "question": "Multiple parameters are separated by _____. (commas / semicolon / comma / colon)",
                    "answer": "commas"
                },
                {
                    "type": "fill",
                    "question": "Values passed during function call are called _____. (commas / arguments / variable / parameters)",
                    "answer": "arguments"
                },
                {
                    "type": "tf",
                    "question": "A function can only take one parameter.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Arguments and parameters must match in count.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Parameter variables can be accessed outside the function body.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Given: 'def mult(x, y): print(x * y)'. Write the call to multiply 4 and 5.",
                    "sampleAnswer": "mult(4, 5)"
                }
            ]
        },
        "scenario": "Create a parameter-driven greeting. Write a function named 'greet_friend' that takes one parameter: 'name'. The function should print 'Hello, Nobita!' when passed 'Nobita'. Call the function with 'Nobita' as the argument.",
        "hint": "Use def greet_friend(name): and print(f'Hello, {name}!'). Then call greet_friend('Nobita').",
        "wrongHint": "Make sure you print 'Hello, ' followed by the name parameter and an exclamation mark!",
        "solution": "def greet_friend(name):\n    print(f\"Hello, {name}!\")\n\ngreet_friend(\"Nobita\")",
        "starterCode": "# Define greet_friend(name) and call it with 'Nobita' below\n"
    },
    {
        "id": 69,
        "title": "Return statement",
        "concept": "Returning values back from function calls",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "The Return Statement",
            "subheading": "Returning values back from function calls",
            "body": "<p>So far, our functions have only printed values to the screen. But often, we want a function to perform a calculation and **send the result back** to the main program. We do this using the <strong><code>return</code></strong> statement.</p>\n\n<h3>Return Syntax</h3>\n<pre class=\"code-example\">def square(x):\n    return x * x\n\nresult = square(4)\nprint(result)  # Output: 16</pre>\n\n<h3>Print vs. Return</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>print()</code>:</strong> Displays text on the screen for the user. It **does not** give any data to the program (returns <code>None</code>).</li>\n    <li><strong><code>return</code>:</strong> Sends data back to the program. This data can be stored in a variable, used in math, or printed later.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Exit Code:</strong> The <code>return</code> statement immediately exits the function. Any code written inside the function *after* a return statement will never be run (known as dead code)!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What does the return statement do?",
                "a": "It terminates function execution and sends a value (or values) back to the caller."
            },
            {
                "q": "Can you store a return value in a variable?",
                "a": "Yes! That's the main purpose of return. E.g. <code>my_val = calculate_total()</code>."
            },
            {
                "q": "What does a function return if it doesn't have a return statement?",
                "a": "It returns <code>None</code> by default once the function reaches the end of its body."
            },
            {
                "q": "What is dead code?",
                "a": "Dead code is code written after a return statement inside a function. Since the function exits on return, this code is unreachable and will never execute."
            },
            {
                "q": "Can a function return multiple values?",
                "a": "Yes! You can return multiple values separated by commas: <code>return x, y</code>. Python returns them grouped together as a single <strong>tuple</strong>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of function return values!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which statement exits a function and sends a value back?",
                    "options": [
                        "send",
                        "output",
                        "return",
                        "exit"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What is returned by a function that has no return statement?",
                    "options": [
                        "0",
                        "None",
                        "False",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What happens to code written inside a function after a return statement?",
                    "options": [
                        "It runs first",
                        "It raises a warning",
                        "It is ignored (dead code)",
                        "It executes after returning"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The _____ statement terminates the function and sends a value back. (return / if / else / elif)",
                    "answer": "return"
                },
                {
                    "type": "fill",
                    "question": "By default, functions with no return statement return _____. (dead / return / None / Variable)",
                    "answer": "None"
                },
                {
                    "type": "fill",
                    "question": "Code after return that cannot be reached is called _____ code. (dead / return / variable / None)",
                    "answer": "dead"
                },
                {
                    "type": "tf",
                    "question": "print() and return do the exact same thing.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "A function can have multiple return statements (e.g. in different if branches).",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can use the returned value of a function in mathematical expressions.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "What does return 5, 10 output in terms of data type?",
                    "sampleAnswer": "It returns a tuple: (5, 10)."
                }
            ]
        },
        "scenario": "Write a sum function that returns a value. Define a function named 'add_numbers' that accepts two parameters 'a' and 'b'. It should return their sum. Call the function with 5 and 7, store the returned value in a variable 'total', and print 'total'.",
        "hint": "Use def add_numbers(a, b): return a + b. Then total = add_numbers(5, 7) and print(total).",
        "wrongHint": "Make sure you return the sum and assign the function call to total before printing!",
        "solution": "def add_numbers(a, b):\n    return a + b\n\ntotal = add_numbers(5, 7)\nprint(total)",
        "starterCode": "# Define add_numbers(a, b) and print the result of 5 + 7 below\n"
    },
    {
        "id": 70,
        "title": "Default arguments",
        "concept": "Specifying fallback parameter values",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Default Arguments",
            "subheading": "Specifying fallback parameter values",
            "body": "<p>Sometimes, we want a parameter to have a fallback value if the caller doesn't provide one. These are called <strong>default arguments</strong>.</p>\n\n<h3>Syntax</h3>\n<pre class=\"code-example\">def greet(name=\"Friend\"):\n    print(\"Hello, \" + name)\n\ngreet()         # Output: Hello, Friend (uses default)\ngreet(\"Nobita\") # Output: Hello, Nobita (overrides default)</pre>\n\n<h3>Order of Arguments</h3>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Golden Rule:</strong> In a function signature, non-default arguments <strong>must</strong> come before default arguments. Otherwise, Python will raise a <code>SyntaxError</code>!</div>\n</div>\n<pre class=\"code-example\"># Correct:\ndef greet(greeting, name=\"Friend\"): ...\n\n# Incorrect (SyntaxError):\ndef greet(name=\"Friend\", greeting): ...</pre>"
        },
        "qna": [
            {
                "q": "What is a default argument?",
                "a": "A default argument is a value provided in the function definition that is automatically assigned to a parameter if the caller does not pass a value for it."
            },
            {
                "q": "Can default arguments be overridden?",
                "a": "Yes! If the caller passes a value for that parameter, the passed value overrides the default value."
            },
            {
                "q": "Where must parameters with default values be placed?",
                "a": "They must always be placed <strong>after</strong> any parameters that do not have default values."
            },
            {
                "q": "Why does Python enforce this order?",
                "a": "So Python can unambiguously match positional arguments. If defaults came first, passing fewer arguments would make it impossible to tell which parameters were omitted."
            },
            {
                "q": "Can a default argument be a list or dictionary?",
                "a": "Yes, but it is highly discouraged to use mutable default arguments (like <code>[]</code> or <code>{}</code>) because they are shared across all calls. Use <code>None</code> instead."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of default arguments!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Where must default arguments be placed in a function definition?",
                    "options": [
                        "At the very beginning",
                        "Anywhere",
                        "After non-default arguments",
                        "Inside the body only"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What does greet() print if defined as def greet(name='User'): print(name)?",
                    "options": [
                        "User",
                        "None",
                        "Error",
                        "Empty string"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "Is def func(a=5, b) valid in Python?",
                    "options": [
                        "Yes, completely valid",
                        "No, it raises a SyntaxError",
                        "No, it raises a TypeError",
                        "Only if called with arguments"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Default arguments must follow _____-default arguments. (variable / overrides / optional / non)",
                    "answer": "non"
                },
                {
                    "type": "fill",
                    "question": "If an argument is provided, it _____ the default value. (optional / non / overrides / variable)",
                    "answer": "overrides"
                },
                {
                    "type": "fill",
                    "question": "Assigning a default value to a parameter makes that argument _____. (optional / variable / non / overrides)",
                    "answer": "optional"
                },
                {
                    "type": "tf",
                    "question": "A function can have multiple parameters with default values.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Using empty lists [] as default arguments is a recommended practice.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You can call a function with default arguments without passing any values.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Correct the signature: def info(tag='Cat', name):",
                    "sampleAnswer": "def info(name, tag='Cat'):"
                }
            ]
        },
        "scenario": "Define a function with a default parameter. Create a function named 'make_gadget' that takes two parameters: 'gadget_name' and 'owner' with a default value of 'Doraemon'. The function should return the string '{owner} owns the {gadget_name}'. Call 'make_gadget' with only 'Anywhere Door' as the argument, store the return value in 'message', and print it.",
        "hint": "Use def make_gadget(gadget_name, owner='Doraemon'): return f'{owner} owns the {gadget_name}'. Then call it with one argument.",
        "wrongHint": "Make sure you print message and place the default parameter second in the signature!",
        "solution": "def make_gadget(gadget_name, owner=\"Doraemon\"):\n    return f\"{owner} owns the {gadget_name}\"\n\nmessage = make_gadget(\"Anywhere Door\")\nprint(message)",
        "starterCode": "# Define make_gadget and print the result with Anywhere Door below\n"
    },
    {
        "id": 71,
        "title": "Keyword arguments",
        "concept": "Passing inputs explicitly by name",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Keyword Arguments",
            "subheading": "Passing inputs explicitly by name",
            "body": "<p>In Python, you can pass arguments to a function using their parameter names: <code>parameter_name = value</code>. These are called <strong>keyword arguments</strong>.</p>\n\n<h3>Benefits of Keyword Arguments</h3>\n<ul class=\"desc-list\">\n    <li><strong>Order doesn't matter:</strong> You can pass arguments in any order, and Python will match them by name rather than position!</li>\n    <li><strong>Readability:</strong> It is instantly clear what each value represents.</li>\n</ul>\n\n<h3>Example</h3>\n<pre class=\"code-example\">def print_info(name, age):\n    print(f\"{name} is {age} years old.\")\n\n# These two calls do the exact same thing:\nprint_info(\"Nobita\", 10)\nprint_info(age=10, name=\"Nobita\")</pre>\n\n<h3>Mixing Positional and Keyword Arguments</h3>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Strict Order Rule:</strong> You can mix positional and keyword arguments, but positional arguments <strong>must always</strong> come first. Positional argument following keyword argument raises a <code>SyntaxError</code>!</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is a keyword argument?",
                "a": "A keyword argument is an argument passed to a function preceded by a parameter name and an equals sign (e.g. <code>name=\"Nobita\"</code>)."
            },
            {
                "q": "Does the order of keyword arguments matter?",
                "a": "No, order does not matter for keyword arguments. Python matches them to parameters by their names."
            },
            {
                "q": "Can I mix positional arguments and keyword arguments?",
                "a": "Yes! But you must place all positional arguments first before any keyword arguments. E.g. <code>func(10, y=20)</code> is valid, but <code>func(x=10, 20)</code> is not."
            },
            {
                "q": "What error is raised if a positional argument follows a keyword argument?",
                "a": "Python raises a <code>SyntaxError: positional argument follows keyword argument</code>."
            },
            {
                "q": "Why are keyword arguments helpful for functions with many parameters?",
                "a": "They allow you to specify only the parameters you want to change, leaving optional arguments to use their defaults, without keeping track of parameter order."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of keyword arguments!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which of these is a keyword argument call?",
                    "options": [
                        "func(10)",
                        "func(x=10)",
                        "func('x', 10)",
                        "func([10])"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What happens if a positional argument follows a keyword argument?",
                    "options": [
                        "Raises SyntaxError",
                        "It runs fine",
                        "Raises ValueError",
                        "Returns None"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "Given def show(a, b): print(a, b), what does show(b=2, a=1) print?",
                    "options": [
                        "2 1",
                        "1 2",
                        "a b",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "Keyword arguments are matched to parameters by _____. (typeerror / syntaxerror / name / nameerror)",
                    "answer": "name"
                },
                {
                    "type": "fill",
                    "question": "Positional arguments must come _____ keyword arguments. (name / variable / before / follows)",
                    "answer": "before"
                },
                {
                    "type": "fill",
                    "question": "The syntax error raised is 'positional argument _____ keyword argument'. (follows / variable / before / name)",
                    "answer": "follows"
                },
                {
                    "type": "tf",
                    "question": "The order of keyword arguments in a call must match the definition.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Using keyword arguments improves code readability.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "show(a=1, 2) is a valid function call.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Rewrite call: func(10, 'blue') using keyword arguments (x and color).",
                    "sampleAnswer": "func(x=10, color='blue') or func(color='blue', x=10)"
                }
            ]
        },
        "scenario": "Define a function and call it using keyword arguments. Define a function named 'greet' with two parameters: 'greeting' and 'name'. Inside the function, print '{greeting}, {name}!'. Call this function using keyword arguments in reversed order, specifically setting name='Shizuka' and greeting='Hello'.",
        "hint": "Use def greet(greeting, name): print(f'{greeting}, {name}!'). Call it using greet(name='Shizuka', greeting='Hello').",
        "wrongHint": "Make sure you call the greet function with keyword arguments and print the exact format!",
        "solution": "def greet(greeting, name):\n    print(f\"{greeting}, {name}!\")\n\ngreet(name=\"Shizuka\", greeting=\"Hello\")",
        "starterCode": "# Define greet(greeting, name) and call it with keyword arguments name='Shizuka' and greeting='Hello' below\n"
    },
    {
        "id": 72,
        "title": "*args",
        "concept": "Accepting a variable number of positional arguments",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Arbitrary Positional Arguments: *args",
            "subheading": "Accepting a variable number of positional arguments",
            "body": "<p>What if you want to write a function that can accept any number of inputs? For example, a function that sums up numbers, whether you pass 2, 5, or 100 values. In Python, you can achieve this using <strong><code>*args</code></strong>.</p>\n\n<h3>The Asterisk <code>*</code> Prefix</h3>\n<ul class=\"desc-list\">\n    <li>The <code>*</code> before a parameter name tells Python to collect all remaining positional arguments into a single <strong>tuple</strong>.</li>\n    <li>By convention, we name this parameter <strong><code>args</code></strong> (short for arguments), but any name like <code>*numbers</code> is valid.</li>\n</ul>\n\n<h3>Example</h3>\n<pre class=\"code-example\">def print_all(*args):\n    print(args)  # args is a tuple\n\nprint_all(1, 2, 3)  # Output: (1, 2, 3)</pre>\n\n<h3>Iterating Over *args</h3>\n<p>Since <code>args</code> is a standard tuple, you can loop through its elements, use index indexing, or pass it to built-in functions like <code>sum()</code> or <code>len()</code>!</p>"
        },
        "qna": [
            {
                "q": "What does the asterisk * do in *args?",
                "a": "The asterisk <code>*</code> is an unpacking operator. In a function definition, it bundles all positional arguments passed to the function into a single tuple."
            },
            {
                "q": "Is the name 'args' mandatory?",
                "a": "No. The name <code>args</code> is a standard convention. You can name it anything, like <code>*items</code> or <code>*numbers</code>, as long as it has the <code>*</code> prefix."
            },
            {
                "q": "What data type is args inside the function?",
                "a": "Inside the function, <code>args</code> is a <strong>tuple</strong> containing all the positional arguments."
            },
            {
                "q": "Can you have regular parameters before *args?",
                "a": "Yes! You can define regular positional parameters first. Any remaining arguments will be caught by <code>*args</code>. E.g. <code>def func(first, *rest):</code>."
            },
            {
                "q": "What happens if you pass no arguments to a function with *args?",
                "a": "It runs fine! <code>args</code> will simply be an empty tuple <code>()</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of *args in Python!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What data type is args inside a function?",
                    "options": [
                        "List",
                        "Tuple",
                        "Dictionary",
                        "Set"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which parameter definition collects arbitrary positional arguments?",
                    "options": [
                        "**args",
                        "*args",
                        "args*",
                        "args"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is printed by def f(*a): print(len(a)); f(10, 20)?",
                    "options": [
                        "1",
                        "2",
                        "0",
                        "Error"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The asterisk * collects positional arguments into a _____. (str / int / float / tuple)",
                    "answer": "tuple"
                },
                {
                    "type": "fill",
                    "question": "The convention name for arbitrary positional arguments is _____. (args / variable / function / tuple)",
                    "answer": "args"
                },
                {
                    "type": "fill",
                    "question": "If f(*args) is called with no arguments, args is an empty _____. (str / int / float / tuple)",
                    "answer": "tuple"
                },
                {
                    "type": "tf",
                    "question": "You can only have one *args parameter in a function signature.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can change tuple elements inside args.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "args holds keyword arguments.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the difference between *args and regular parameters.",
                    "sampleAnswer": "*args collects any number of positional arguments into a single tuple, whereas regular parameters expect exactly one argument each."
                }
            ]
        },
        "scenario": "Sum a variable number of integers. Write a function named 'sum_all' that takes a variable number of parameters using '*args'. Inside, return the sum of all elements in 'args' (hint: use sum(args)). Call the function with arguments 1, 2, 3, 4, store the return value in 'result', and print it.",
        "hint": "Use def sum_all(*args): return sum(args). Then call it and print the result.",
        "wrongHint": "Make sure you use sum_all(1, 2, 3, 4) and print the sum result!",
        "solution": "def sum_all(*args):\n    return sum(args)\n\nresult = sum_all(1, 2, 3, 4)\nprint(result)",
        "starterCode": "# Define sum_all(*args) and print the sum of 1, 2, 3, 4 below\n"
    },
    {
        "id": 73,
        "title": "**kwargs",
        "concept": "Accepting a variable number of keyword arguments",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Arbitrary Keyword Arguments: **kwargs",
            "subheading": "Accepting a variable number of keyword arguments",
            "body": "<p>While <code>*args</code> collects positional arguments, Python gives us a way to accept any number of named (keyword) arguments. This is done using <strong><code>**kwargs</code></strong> (double asterisks).</p>\n\n<h3>The Double Asterisk <code>**</code> Prefix</h3>\n<ul class=\"desc-list\">\n    <li>The <code>**</code> collects all arbitrary keyword arguments into a <strong>dictionary</strong>.</li>\n    <li>By convention, we name this parameter <strong><code>kwargs</code></strong> (short for keyword arguments).</li>\n</ul>\n\n<h3>Example</h3>\n<pre class=\"code-example\">def print_profile(**kwargs):\n    print(kwargs)  # kwargs is a dictionary\n\nprint_profile(name=\"Doraemon\", age=10)\n# Output: {'name': 'Doraemon', 'age': 10}</pre>\n\n<h3>Looping through **kwargs</h3>\n<p>Since <code>kwargs</code> is a dictionary, you can use methods like <code>.keys()</code>, <code>.values()</code>, and <code>.items()</code> to loop over key-value pairs inside the function body!</p>"
        },
        "qna": [
            {
                "q": "What is the purpose of **kwargs?",
                "a": "It collects any arbitrary keyword arguments passed to the function into a single dictionary."
            },
            {
                "q": "What data type is kwargs inside the function?",
                "a": "Inside the function, <code>kwargs</code> is a standard Python <strong>dictionary</strong>."
            },
            {
                "q": "What is the ordering of parameters in a function when mixing arguments?",
                "a": "The ordering must be: positional parameters, then <code>*args</code>, then <code>**kwargs</code>."
            },
            {
                "q": "Is 'kwargs' a reserved keyword in Python?",
                "a": "No, it is a standard name convention. You can use any name (e.g. <code>**details</code>) as long as it has the <code>**</code> prefix."
            },
            {
                "q": "What happens if you pass no keyword arguments to **kwargs?",
                "a": "The function executes successfully, and <code>kwargs</code> is set to an empty dictionary <code>{}</code>."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of **kwargs in Python!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What data type is kwargs inside a function?",
                    "options": [
                        "List",
                        "Tuple",
                        "Dictionary",
                        "Set"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Which prefix identifies arbitrary keyword arguments?",
                    "options": [
                        "*",
                        "**",
                        "***",
                        "&"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which order of parameters is correct?",
                    "options": [
                        "func(*args, **kwargs, a)",
                        "func(a, *args, **kwargs)",
                        "func(**kwargs, *args, a)",
                        "func(a, **kwargs, *args)"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The double asterisk prefix collects keyword arguments into a _____. (dictionary / kwargs / variable / items)",
                    "answer": "dictionary"
                },
                {
                    "type": "fill",
                    "question": "The standard name for arbitrary keyword arguments is _____. (variable / kwargs / dictionary / items)",
                    "answer": "kwargs"
                },
                {
                    "type": "fill",
                    "question": "To get key-value pairs from kwargs, call the _____() method. (variable / kwargs / dictionary / items)",
                    "answer": "items"
                },
                {
                    "type": "tf",
                    "question": "kwargs keys are strings matching the argument names.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "You can add new items to the kwargs dictionary inside the function.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "kwargs can accept positional arguments.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Write a function signature that takes one positional parameter 'x' and arbitrary kwargs.",
                    "sampleAnswer": "def func(x, **kwargs):"
                }
            ]
        },
        "scenario": "Display profile details using kwargs. Define a function named 'print_profile' that accepts arbitrary keyword arguments using '**kwargs'. Inside, loop over kwargs items (using .items()) and print each pair on a new line in the format '{key}: {value}'. Call 'print_profile' with arguments name='Doraemon' and color='blue'.",
        "hint": "Use for key, value in kwargs.items(): print(f'{key}: {value}') inside print_profile.",
        "wrongHint": "Make sure you call the function passing name='Doraemon' and color='blue'!",
        "solution": "def print_profile(**kwargs):\n    for key, value in kwargs.items():\n        print(f\"{key}: {value}\")\n\nprint_profile(name=\"Doraemon\", color=\"blue\")",
        "starterCode": "# Define print_profile(**kwargs) and call it with name='Doraemon' and color='blue' below\n"
    },
    {
        "id": 74,
        "title": "Variable scope (global)",
        "concept": "Understanding local vs global scopes",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Variable Scope",
            "subheading": "Understanding local vs global scopes",
            "body": "<p>Where you define a variable determines where you can access it in your code. This concept is called <strong>variable scope</strong>.</p>\n\n<h3>1. Local Scope</h3>\n<ul class=\"desc-list\">\n    <li>Variables created <strong>inside</strong> a function belong to the local scope of that function.</li>\n    <li>They can only be used inside that function and cease to exist once the function ends.</li>\n</ul>\n\n<h3>2. Global Scope</h3>\n<ul class=\"desc-list\">\n    <li>Variables created in the <strong>main body</strong> of a Python script (outside any functions) belong to the global scope.</li>\n    <li>They are accessible from anywhere in your code, including inside functions.</li>\n</ul>\n\n<h3>The <code>global</code> Keyword</h3>\n<p>By default, you can **read** global variables inside a function, but you cannot **modify** them. If you try to change a global variable inside a function, Python will create a new local variable with the same name.</p>\n<p>To modify a global variable inside a function, declare it with the <strong><code>global</code></strong> keyword:</p>\n<pre class=\"code-example\">count = 0\n\ndef increment():\n    global count\n    count += 1</pre>"
        },
        "qna": [
            {
                "q": "What is variable scope?",
                "a": "Variable scope refers to the region of a program where a variable is defined and can be accessed."
            },
            {
                "q": "Can I read a global variable inside a function?",
                "a": "Yes! You can read its value inside a function without any special keywords."
            },
            {
                "q": "What happens if I assign a value to a global variable name inside a function without declaring 'global'?",
                "a": "Python creates a new **local variable** with the same name. The global variable remains unchanged."
            },
            {
                "q": "What is variable shadowing?",
                "a": "Variable shadowing occurs when a local variable shares the same name as a global variable. Inside the function, the local variable takes precedence, shadowing the global one."
            },
            {
                "q": "What does the global keyword do?",
                "a": "The <code>global</code> keyword tells Python that the variable name references the global scope, allowing you to modify the global variable from inside a function."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of variable scopes and the global keyword!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Where are local variables accessible?",
                    "options": [
                        "Everywhere in the file",
                        "Only inside the function they are defined in",
                        "Only in outer scopes",
                        "Nowhere"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which keyword lets you modify a global variable inside a function?",
                    "options": [
                        "extern",
                        "global",
                        "static",
                        "modify"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does Python do if you write x = 5 inside a function when global x exists (without 'global x')?",
                    "options": [
                        "Raises SyntaxError",
                        "Modifies global x",
                        "Creates a new local variable named x",
                        "Raises NameError"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "Variables defined outside functions reside in the _____ scope. (elif / if / else / global)",
                    "answer": "global"
                },
                {
                    "type": "fill",
                    "question": "Variables defined inside functions reside in the _____ scope. (global / local / nonlocal / builtin)",
                    "answer": "local"
                },
                {
                    "type": "fill",
                    "question": "To change a global variable inside a function, use the _____ keyword. (elif / if / else / global)",
                    "answer": "global"
                },
                {
                    "type": "tf",
                    "question": "You can read a global variable inside a function without using the 'global' keyword.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Local variables exist in memory after their function exits.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Global variables should be used sparingly because they can make debugging difficult.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain local scope in your own words.",
                    "sampleAnswer": "Local scope is the scope inside a function. Variables defined inside a function are local to it and cannot be accessed outside of it."
                }
            ]
        },
        "scenario": "Modify a global counter inside a function. Define a global variable named 'count' initialized to 0. Write a function named 'increment' that uses the 'global' keyword to modify 'count' by adding 1. Call the increment function once, and then print the value of count.",
        "hint": "Use global count inside increment(), then count += 1.",
        "wrongHint": "Make sure you declare 'global count' before modifying count, and print count at the end!",
        "solution": "count = 0\n\ndef increment():\n    global count\n    count += 1\n\nincrement()\nprint(count)",
        "starterCode": "count = 0\n# Declare increment() and modify global count inside, call it, then print count\n"
    },
    {
        "id": 75,
        "title": "Recursion",
        "concept": "Functions that call themselves",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Recursion",
            "subheading": "Functions that call themselves",
            "body": "<p><strong>Recursion</strong> is a powerful programming technique where a function **calls itself** to solve a problem. It works by breaking down a complex problem into smaller, simpler sub-problems of the same type.</p>\n\n<h3>The Two Essential Parts of Recursion</h3>\n<ul class=\"desc-list\">\n    <li><strong>Base Case:</strong> The stopping condition. It returns a value directly without making another recursive call. Without it, the function would call itself forever!</li>\n    <li><strong>Recursive Case:</strong> The part where the function calls itself with a simpler or smaller input, moving closer to the base case.</li>\n</ul>\n\n<h3>Example: Factorial</h3>\n<p>The factorial of a number <code>n</code> (denoted <code>n!</code>) is <code>n * (n-1) * (n-2) * ... * 1</code>.</p>\n<pre class=\"code-example\">def factorial(n):\n    if n <= 1:  # Base Case\n        return 1\n    else:       # Recursive Case\n        return n * factorial(n - 1)</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>RecursionError:</strong> If you forget a base case or your inputs don't approach it, Python will exceed its call stack size limit and crash with a <code>RecursionError: maximum recursion depth exceeded</code>.</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is recursion?",
                "a": "Recursion is a programming technique where a function calls itself during execution to solve a smaller instance of the same problem."
            },
            {
                "q": "What is a base case?",
                "a": "The base case is the condition that terminates the recursive loop. Without it, a function would call itself infinitely."
            },
            {
                "q": "What happens if a recursive function does not have a base case?",
                "a": "It leads to infinite recursion, eventually causing a <code>RecursionError: maximum recursion depth exceeded</code>."
            },
            {
                "q": "Can every recursive function be written using loops?",
                "a": "Yes! Any recursive algorithm can be rewritten using iteration (for or while loops). Iteration is often more memory-efficient, but recursion can make code cleaner and simpler for certain tasks (like traversing trees)."
            },
            {
                "q": "What is the call stack?",
                "a": "The call stack is the memory structure Python uses to keep track of active function calls. In recursion, every self-call adds a new frame to the call stack until the base case is reached."
            }
        ],
        "test": {
            "intro": "Let's check your understanding of recursion!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the stopping condition in a recursive function called?",
                    "options": [
                        "Stop Case",
                        "Terminator",
                        "Base Case",
                        "Default Case"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What error is raised if a function calls itself infinitely?",
                    "options": [
                        "RecursionError",
                        "OverflowError",
                        "InfiniteError",
                        "StackError"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "Which of these algorithms is naturally recursive?",
                    "options": [
                        "Factorial calculation",
                        "Linear search",
                        "Printing a string",
                        "Adding two numbers"
                    ],
                    "answer": 0
                },
                {
                    "type": "fill",
                    "question": "Recursion is when a function calls _____. (self / super / parent / itself)",
                    "answer": "itself"
                },
                {
                    "type": "fill",
                    "question": "The stopping condition is the _____ case. (parent / super / base / self)",
                    "answer": "base"
                },
                {
                    "type": "fill",
                    "question": "Infinite recursion leads to exceeding the maximum call _____ depth. (itself / variable / base / stack)",
                    "answer": "stack"
                },
                {
                    "type": "tf",
                    "question": "A recursive function can have more than one base case.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Recursion is always more memory-efficient than loops.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Base cases prevent stack overflows.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "State the two components required in any valid recursive function.",
                    "sampleAnswer": "A base case (stopping condition) and a recursive case (calling itself with a reduced input)."
                }
            ]
        },
        "scenario": "Implement factorial recursively. Define a function 'factorial(n)' that returns 1 if n <= 1 (base case), otherwise returns n * factorial(n - 1) (recursive case). Call the function passing 5, store the returned value in 'result', and print result.",
        "hint": "Use def factorial(n): if n <= 1: return 1 else: return n * factorial(n-1). Call factorial(5).",
        "wrongHint": "Make sure you calculate factorial(5) which should output 120, and print it!",
        "solution": "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nresult = factorial(5)\nprint(result)",
        "starterCode": "# Define factorial(n) recursively and print factorial(5) below\n"
    },
    {
        "id": 76,
        "title": "Errors vs Exceptions",
        "concept": "Understanding syntax errors vs runtime faults",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Errors vs Exceptions",
            "subheading": "The difference between grammar mistakes and execution crashes",
            "body": "<p>When writing Python code, things will occasionally go wrong. Python categorizes issues into two main categories: <strong>Syntax Errors</strong> and <strong>Exceptions</strong>. Understanding the difference is key to debugging like a pro!</p>\n\n<h3>1. Syntax Errors (Grammar Mistakes)</h3>\n<p>A <strong>SyntaxError</strong> occurs when Python's interpreter tries to parse your code but finds that you have broken the grammar rules of the language. This happens <strong>before</strong> the code is even run. If there is a single syntax error in your file, Python refuses to execute any of it.</p>\n<p>Think of it like trying to write a letter to Doraemon in a language that doesn't exist -- he won't be able to read it at all!</p>\n<pre class=\"code-example\"># SyntaxError: missing colon\nif True\n    print(\"Hello\")</pre>\n\n<h3>2. Exceptions (Runtime Crashes)</h3>\n<p>An <strong>Exception</strong> is an error that occurs <strong>while the program is running</strong>. The syntax of the code is completely correct, but when Python tries to execute a specific operation, it encounters a problem it cannot resolve.</p>\n<p>Think of it like Doraemon's <strong>Anywhere Door</strong>: the door's syntax (its design) is perfect, but if you request to go to a location that has been destroyed, the gadget will fail mid-operation!</p>\n<pre class=\"code-example\"># Exception: ZeroDivisionError (syntactically correct, but math-wise impossible)\nprint(10 / 0)</pre>\n\n<h3>Common Types of Exceptions</h3>\n<ul class=\"desc-list\">\n    <li><strong>ZeroDivisionError:</strong> Raised when dividing a number by zero.</li>\n    <li><strong>NameError:</strong> Raised when trying to use a variable or function that hasn't been defined.</li>\n    <li><strong>TypeError:</strong> Raised when an operation is applied to an object of inappropriate type (e.g. adding text and a number).</li>\n    <li><strong>IndexError:</strong> Raised when trying to access an item in a list using an index that is out of range.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Pro Tip:</strong> When Python encounters an exception that is not handled, it stops executing immediately and prints a traceback, showing the type of error and the exact line where it crashed.</div>\n</div>"
        },
        "qna": [
            {
                "q": "What is the primary difference between a SyntaxError and an Exception?",
                "a": "A <strong>SyntaxError</strong> is caught by Python before execution begins because the code grammar is incorrect. An <strong>Exception</strong> is a runtime error that occurs while the program is running, even though the code grammar itself is valid."
            },
            {
                "q": "Will Python run any code if a SyntaxError is present?",
                "a": "No. If there is a SyntaxError anywhere in the script, Python will not execute a single line of the program."
            },
            {
                "q": "What happens when an exception is triggered?",
                "a": "If an exception is triggered and not caught/handled, the program immediately halts execution and crashes, printing a traceback error message."
            },
            {
                "q": "Why does print(10 / 0) cause an exception and not a syntax error?",
                "a": "Because the grammar of the statement is correct (function name, parentheses, number, operator, number). Python understands *how* to parse it, but it only discovers the division by zero *during* the mathematical calculation at runtime."
            },
            {
                "q": "What is an IndexError?",
                "a": "An <strong>IndexError</strong> is an exception raised when you try to access an index of a sequence (like a list or string) that does not exist. For example, if a list has 2 items, accessing index 5 triggers an IndexError."
            }
        ],
        "test": {
            "intro": "Let's see if you can tell errors from exceptions!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which of these is detected before execution begins?",
                    "options": [
                        "ZeroDivisionError",
                        "SyntaxError",
                        "NameError",
                        "IndexError"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What exception is raised by: print('Nobita' + 5)?",
                    "options": [
                        "ValueError",
                        "SyntaxError",
                        "TypeError",
                        "NameError"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What exception occurs when you access an invalid index in a list?",
                    "options": [
                        "KeyError",
                        "IndexError",
                        "ValueError",
                        "TypeError"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "An error that occurs during the execution of a grammatically correct program is called an _____. (exception / parsing error / compiler error / indentation error) (variable / Zero / exception / Name)",
                    "answer": "exception"
                },
                {
                    "type": "fill",
                    "question": "If you try to call a function name that has not been defined, Python raises a _____Error. (TypeError / NameError / Name / SyntaxError)",
                    "answer": "Name"
                },
                {
                    "type": "fill",
                    "question": "Dividing any number by zero in Python triggers a _____DivisionError. (NameError / Zero / TypeError / SyntaxError)",
                    "answer": "Zero"
                },
                {
                    "type": "tf",
                    "question": "A SyntaxError can be bypassed and run anyway if it is written inside a comment.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Exceptions are detected by the interpreter only when that specific line of code is executed.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "If a program crashes due to an exception on line 10, lines 1 to 9 will still run successfully.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain in your own words what is wrong with the code: print(x) if x was never defined, and specify what type of error it is.",
                    "sampleAnswer": "This code is grammatically correct, so it has no syntax errors. However, because the variable x was never defined in memory, trying to access it causes a NameError exception during runtime when Python searches for x and finds nothing."
                }
            ]
        },
        "scenario": "Doraemon's pocket has two gadgets: gadgets = ['Anywhere Door', 'Bamboo Copter']. Print the item at index 1 to safely retrieve the Bamboo Copter without triggering an IndexError.",
        "hint": "Access index 1 of the gadgets list inside a print() function.",
        "wrongHint": "Make sure you print gadgets[1] exactly!",
        "solution": "gadgets = ['Anywhere Door', 'Bamboo Copter']\nprint(gadgets[1])",
        "starterCode": "gadgets = ['Anywhere Door', 'Bamboo Copter']\n# Print the gadget at index 1\n"
    },
    {
        "id": 77,
        "title": "try-except",
        "concept": "Handling program crashes gracefully",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "try-except block",
            "subheading": "The Safety Net for your Python code",
            "body": "<p>In real-world applications, code can fail due to unpredictable situations (like bad user input or lost internet connections). Instead of letting your program crash, you can catch and handle exceptions using the <strong><code>try-except</code></strong> statement.</p>\n\n<h3>The Metaphor: The Safety Net</h3>\n<p>Think of it like Doraemon's <strong>Safety Net</strong> gadget: when Nobita tries to perform a risky stunt, the safety net is placed below. If he falls, he doesn't get hurt; the net catches him gracefully and he continues his day!</p>\n\n<h3>Syntax of try-except</h3>\n<p>We write the risky code inside the <code>try</code> block. If an error occurs, Python immediately stops running the <code>try</code> block and runs the code inside the <code>except</code> block:</p>\n<pre class=\"code-example\">try:\n    # Risky code goes here\n    result = 10 / 0\nexcept:\n    # This code runs only if a crash occurs above\n    print(\"Oops, something went wrong!\")</pre>\n\n<h3>Handling Specific Exceptions</h3>\n<p>It's best practice to handle specific exceptions rather than catching everything. This prevents hiding other bugs:</p>\n<pre class=\"code-example\">try:\n    num = int(input(\"Enter a number: \"))\n    print(10 / num)\nexcept ZeroDivisionError:\n    print(\"You cannot divide by zero!\")\nexcept ValueError:\n    print(\"Please enter a valid whole number!\")</pre>\n\n<h3>Getting the Error Message</h3>\n<p>You can capture the error object and print its message using the <code>as</code> keyword:</p>\n<pre class=\"code-example\">try:\n    print(undefined_variable)\nexcept NameError as e:\n    print(f\"Caught an error: {e}\")  # Prints: Caught an error: name 'undefined_variable' is not defined</pre>"
        },
        "qna": [
            {
                "q": "What happens to the remaining lines inside a try block if an exception occurs?",
                "a": "Python skips all remaining lines inside the <code>try</code> block and immediately jumps to the matching <code>except</code> block."
            },
            {
                "q": "What happens if no exception occurs inside the try block?",
                "a": "The entire <code>try</code> block runs successfully, and the <code>except</code> block is completely ignored."
            },
            {
                "q": "Why is it bad practice to use a bare 'except:' without specifying an error type?",
                "a": "A bare <code>except:</code> catches all errors, including system-exit signals and keyboard interrupts (Ctrl+C), making it harder to stop the program or identify unexpected logic bugs."
            },
            {
                "q": "Can you have multiple except blocks for a single try block?",
                "a": "Yes! You can stack multiple <code>except</code> blocks to handle different exceptions (e.g. ValueError, TypeError, ZeroDivisionError) in different ways."
            },
            {
                "q": "What does 'except Exception as e' do?",
                "a": "It catches any exception that inherits from the base <code>Exception</code> class and binds it to the variable <code>e</code>, allowing you to print the error message or log it."
            }
        ],
        "test": {
            "intro": "Test your ability to catch exceptions with try-except!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword begins the block of code where exceptions might be raised?",
                    "options": [
                        "catch",
                        "try",
                        "except",
                        "handle"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What happens when a try block completes successfully with no errors?",
                    "options": [
                        "The except block runs anyway",
                        "The program crashes",
                        "The except block is skipped",
                        "Python raises a SuccessError"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "How do you bind the exception object to a variable in an except statement?",
                    "options": [
                        "except ValueError with e",
                        "except ValueError as e",
                        "except ValueError (e)",
                        "except ValueError = e"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The block of code that handles the error if something crashes in the try block begins with the keyword _____. (else / elif / if / except)",
                    "answer": "except"
                },
                {
                    "type": "fill",
                    "question": "A try block must have at least one _____ block or finally block to be syntactically correct. (else / elif / if / except)",
                    "answer": "except"
                },
                {
                    "type": "fill",
                    "question": "If try contains: num = 10 / 2, the except ZeroDivisionError block will be _____. (skipped / function / except / variable)",
                    "answer": "skipped"
                },
                {
                    "type": "tf",
                    "question": "You can catch multiple different exceptions using a single except block by grouping them in a tuple, like: except (ValueError, TypeError):",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A try-except block can catch a SyntaxError that happens when loading the script.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "If an error is handled in an except block, the program will continue running the code below the try-except block.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Why is it helpful to catch specific exceptions like ValueError instead of using a generic except block?",
                    "sampleAnswer": "Catching specific exceptions ensures you only handle errors you expect and know how to fix, while letting unexpected errors crash the program so you can find and fix those bugs instead of hiding them."
                }
            ]
        },
        "scenario": "Write a try-except block. In the try block, print the result of 10 // 0. Catch the ZeroDivisionError exception and print 'Cannot divide by zero!' in the except block.",
        "hint": "Wrap print(10 // 0) in try: block and handle ZeroDivisionError in except ZeroDivisionError: block.",
        "wrongHint": "Make sure you print 'Cannot divide by zero!' inside the except ZeroDivisionError block!",
        "solution": "try:\n    print(10 // 0)\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')",
        "starterCode": "# Write a try-except block to handle division by zero\n"
    },
    {
        "id": 78,
        "title": "finally",
        "concept": "Executing cleanup code under try-except",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "finally block",
            "subheading": "Guaranteed cleanup code, no matter what",
            "body": "<p>When a program runs, it often uses external resources (like files, databases, or network connections). If an error occurs, we must ensure these resources are closed or cleaned up. In Python, this is achieved using the <strong><code>finally</code></strong> block.</p>\n\n<h3>The Metaphor: Returning Doraemon's Gadgets</h3>\n<p>Think of it like borrowing a gadget from Doraemon. If Nobita uses it successfully (try block) or if the gadget malfunctions and gets ruined (except block), there is one rule that never changes: Nobita <strong>must always return the gadget</strong> at the end of the day (finally block)!</p>\n\n<h3>Syntax of finally</h3>\n<p>The <code>finally</code> block is placed at the end of a try-except structure. Code inside the <code>finally</code> block is **guaranteed to run**, whether an exception occurred or not, and whether it was successfully handled or not!</p>\n<pre class=\"code-example\">try:\n    print(\"Opening the chest.\")\n    # Imagine some code here that might fail\nexcept:\n    print(\"Handling error.\")\nfinally:\n    print(\"This ALWAYS runs!\")  # Cleanup code</pre>\n\n<h3>Guaranteed Execution</h3>\n<p>Even if you have a <code>return</code>, <code>break</code>, or <code>continue</code> statement inside the <code>try</code> or <code>except</code> blocks, Python will still execute the <code>finally</code> block before leaving the structure. This makes it the ultimate place for safety cleanup routines!</p>"
        },
        "qna": [
            {
                "q": "What is the primary purpose of the finally block?",
                "a": "To define cleanup actions that must execute under all circumstances, such as closing files, releasing memory resources, or disconnecting from databases."
            },
            {
                "q": "Does finally run if the program crashes due to an unhandled exception?",
                "a": "Yes! The code inside the <code>finally</code> block runs right before the program terminates due to the unhandled crash."
            },
            {
                "q": "Can you have a try block with a finally block but NO except block?",
                "a": "Yes. A <code>try-finally</code> block is valid. If an error occurs, the <code>finally</code> block runs, and then the program crashes because there was no <code>except</code> block to handle the error."
            },
            {
                "q": "Does finally run if a function returns inside the try block?",
                "a": "Yes. If a <code>return</code> is executed in the <code>try</code> block, Python will temporarily pause the return, run the <code>finally</code> block, and then complete the return."
            },
            {
                "q": "What is the order of execution in try-except-finally?",
                "a": "1. <code>try</code> code runs. 2. If an error occurs, <code>except</code> code runs. 3. <code>finally</code> code runs under all circumstances."
            }
        ],
        "test": {
            "intro": "Test your knowledge of the finally block!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "When does code inside the finally block run?",
                    "options": [
                        "Only when an exception is raised",
                        "Only when no exceptions are raised",
                        "Always, regardless of exceptions",
                        "Only if the program crashes"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Which of these is a typical use case for a finally block?",
                    "options": [
                        "Performing complex math operations",
                        "Closing an opened database connection",
                        "Defining new functions",
                        "Importing external libraries"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Can you use a finally block without an except block?",
                    "options": [
                        "No, except is always mandatory",
                        "Yes, but only inside a class definition",
                        "Yes, try-finally is syntactically valid",
                        "No, finally is only allowed after except"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The keyword used to define code that executes under any circumstances is _____. (elif / else / if / finally)",
                    "answer": "finally"
                },
                {
                    "type": "fill",
                    "question": "If a function returns a value inside the try block, the finally block runs _____ the return takes place. (after / before / instead of) (finally / function / before / variable)",
                    "answer": "before"
                },
                {
                    "type": "fill",
                    "question": "A try block must have at least one except or _____ block. (elif / else / if / finally)",
                    "answer": "finally"
                },
                {
                    "type": "tf",
                    "question": "Code inside the finally block will not execute if the except block also raises an error.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The finally block is a great place to handle a ZeroDivisionError.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "A try block can be followed by multiple finally blocks.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Describe a scenario where a try-finally block is useful even without an except block.",
                    "sampleAnswer": "It is useful when you want to ensure that resources (like an open file) are closed no matter what, but you want any exceptions to propagate upward to be handled by the caller or crash the program normally."
                }
            ]
        },
        "scenario": "Create a try-except-finally block. In the try block, print 'Opening notebook.' and then convert 'abc' to an integer using int('abc') to trigger a ValueError. In the except ValueError block, print 'Error encountered!'. In the finally block, print 'Closing notebook.'.",
        "hint": "Write try: block with print('Opening notebook.') and int('abc'), followed by except ValueError: with print('Error encountered!'), and finally: with print('Closing notebook.').",
        "wrongHint": "Make sure you print 'Opening notebook.', 'Error encountered!', and 'Closing notebook.' in the correct blocks!",
        "solution": "try:\n    print('Opening notebook.')\n    int('abc')\nexcept ValueError:\n    print('Error encountered!')\nfinally:\n    print('Closing notebook.')",
        "starterCode": "# Write a try-except-finally block\n"
    },
    {
        "id": 79,
        "title": "raise keyword",
        "concept": "Triggering errors and exceptions manually",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "raise keyword",
            "subheading": "Blowing the emergency whistle in Python",
            "body": "<p>So far, we have only handled exceptions raised by Python itself. But what if your own program needs to report that something illegal or invalid has occurred? In Python, you can manually trigger an exception using the <strong><code>raise</code></strong> keyword.</p>\n\n<h3>The Metaphor: The Emergency Whistle</h3>\n<p>Think of it like Doraemon's <strong>Emergency Whistle</strong> gadget. If Nobita sees Gian violating the rules of the playground (like stealing toys), Nobita blows the whistle to manually signal an alert. The whistle doesn't wait for things to go wrong on their own -- it triggers the warning immediately!</p>\n\n<h3>Syntax of raise</h3>\n<p>To raise an exception, write the keyword <code>raise</code>, followed by the name of the exception type, and optional error details in parentheses:</p>\n<pre class=\"code-example\">raise ValueError(\"Invalid value entered!\")</pre>\n\n<h3>Why Raise Exceptions?</h3>\n<p>We raise exceptions to enforce rules in our code (input validation). For example, if a function expects a positive deposit amount, a negative value is logical nonsense. Rather than continuing with corrupt data, we blow the whistle:</p>\n<pre class=\"code-example\">def set_age(age):\n    if age &lt; 0:\n        raise ValueError(\"Age cannot be negative!\")\n    print(f\"Age is set to: {age}\")</pre>\n\n<h3>Re-raising Exceptions</h3>\n<p>Sometimes you catch an exception to log it or perform minor cleanup, but still want to crash or let the calling function know. You can do this by using <code>raise</code> on its own inside the <code>except</code> block:</p>\n<pre class=\"code-example\">try:\n    num = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Logged: Division by zero attempted.\")\n    raise  # Re-raises the ZeroDivisionError</pre>"
        },
        "qna": [
            {
                "q": "What does the raise keyword do in Python?",
                "a": "It manually triggers a specified exception, interrupting the normal flow of the program and initiating traceback/exception handling."
            },
            {
                "q": "Can you raise custom messages with exceptions?",
                "a": "Yes! By passing a string argument inside the exception's parentheses, e.g., <code>raise TypeError(\"Expected an integer\")</code>."
            },
            {
                "q": "Which exception class should you raise if an argument is of the correct type but has an invalid value?",
                "a": "You should raise a <strong>ValueError</strong> (for instance, if age is -5 or an email string is missing an '@' symbol)."
            },
            {
                "q": "What happens if a raise statement is executed inside a try block?",
                "a": "The program immediately stops running the rest of the <code>try</code> block and looks for a matching <code>except</code> block. If none is found, it terminates and displays the traceback."
            },
            {
                "q": "What does a bare 'raise' keyword do inside an except block?",
                "a": "It re-raises the active exception that was caught by the <code>except</code> block, allowing it to propagate up to parent caller blocks."
            }
        ],
        "test": {
            "intro": "Test your understanding of the raise keyword!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword is used to manually trigger an exception?",
                    "options": [
                        "throw",
                        "raise",
                        "trigger",
                        "error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "If you write: raise ValueError('Invalid'), what type of error is triggered?",
                    "options": [
                        "TypeError",
                        "ValueError",
                        "NameError",
                        "SyntaxError"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the purpose of re-raising an exception inside an except block?",
                    "options": [
                        "To ignore the error completely",
                        "To log or handle the error locally but still let it propagate up",
                        "To change the error type to a SyntaxError",
                        "To double the execution speed"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To raise an exception with a custom message, you pass the message string inside the _____ of the exception class. (parentheses / semicolon / colon / comma)",
                    "answer": "parentheses"
                },
                {
                    "type": "fill",
                    "question": "If you want to validate that a variable is a string and raise an exception otherwise, the most appropriate exception type is _____Error. (TypeError / NameError / SyntaxError / Type)",
                    "answer": "Type"
                },
                {
                    "type": "fill",
                    "question": "When a raise statement executes outside a try block, the program will immediately _____. (succeed / pause / crash / loop) (parentheses / variable / crash / Type)",
                    "answer": "crash"
                },
                {
                    "type": "tf",
                    "question": "You can only raise exceptions that are built into Python.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Using the raise keyword helps prevent bad data from corrupting your program's state.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Writing 'raise' without any exception name is only valid inside an except block.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Give an example of a situation where you would want to raise a ValueError in a library booking system.",
                    "sampleAnswer": "In a library booking system, you would raise a ValueError if a user tries to borrow a negative number of books or sets the return date to be prior to the borrow date."
                }
            ]
        },
        "scenario": "Doraemon wants to ensure dorayakis count is not negative. Write a program: define dorayakis = -1. If dorayakis is less than 0, print 'Invalid count' and raise a ValueError with the message 'Cannot be negative'.",
        "hint": "Check if dorayakis < 0. Inside the conditional block, print('Invalid count') and write raise ValueError('Cannot be negative').",
        "wrongHint": "Make sure you raise ValueError('Cannot be negative') when dorayakis < 0!",
        "solution": "dorayakis = -1\nif dorayakis < 0:\n    print('Invalid count')\n    raise ValueError('Cannot be negative')",
        "starterCode": "dorayakis = -1\n# Check if negative, print 'Invalid count' and raise ValueError\n"
    },
    {
        "id": 80,
        "title": "File handling (open)",
        "concept": "Opening and closing files on your computer",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "File handling (open)",
            "subheading": "Working with files on your computer's drive",
            "body": "<p>Programs need a way to store data permanently. While variables are stored in temporary RAM (which clears when the computer turns off), files are saved on the permanent hard drive. Python makes working with files simple through its built-in <strong><code>open()</code></strong> function.</p>\n\n<h3>The Metaphor: The Diary of Secrets</h3>\n<p>Think of file handling like writing in a **Diary of Secrets** gadget: to interact with the diary, you must first unlock it with a key (<code>open()</code>). Once open, you can either read your previous notes or write down new secrets. Finally, you must lock it back up (<code>close()</code>) so no one else can read it!</p>\n\n<h3>Opening a File</h3>\n<p>To open a file, we use the <code>open()</code> function, passing the filename and the **access mode**:</p>\n<pre class=\"code-example\">my_file = open(\"diary.txt\", \"r\")</pre>\n\n<h3>File Modes</h3>\n<p>The second argument specifies the mode. The three most common modes are:</p>\n<ul class=\"desc-list\">\n    <li><strong><code>'r'</code> (Read):</strong> Default mode. Opens the file for reading. Raises a <code>FileNotFoundError</code> if the file does not exist.</li>\n    <li><strong><code>'w'</code> (Write):</strong> Opens the file for writing. If the file exists, it **deletes/overwrites** everything! If it doesn't exist, it creates a new file.</li>\n    <li><strong><code>'a'</code> (Append):</strong> Opens the file for writing but **adds** new text to the end of the existing content. Creates the file if it doesn't exist.</li>\n</ul>\n\n<h3>Closing the File</h3>\n<p>When you open a file, the operating system locks it for your program. If you forget to close it, it can cause memory leaks and file corruption. Always call <code>close()</code> when you are finished:</p>\n<pre class=\"code-example\">my_file = open(\"diary.txt\", \"w\")\n# Perform write/read actions here...\nmy_file.close()  # Locks the file and saves changes</pre>"
        },
        "qna": [
            {
                "q": "What does the open() function return in Python?",
                "a": "It returns a <strong>file object</strong>, which acts as a stream containing methods to read, write, and manipulate the file contents."
            },
            {
                "q": "What happens if you open an existing file in 'w' mode?",
                "a": "All existing contents in the file are immediately erased (truncated). If you want to keep the content and add new data, use append (<code>'a'</code>) mode instead."
            },
            {
                "q": "What is the default file mode if none is specified?",
                "a": "The default mode is read (<code>'r'</code>) mode in text format."
            },
            {
                "q": "Why is it important to close a file after opening it?",
                "a": "To free up system resources, unlock the file for other programs, and ensure that all changes are successfully written from the memory buffer onto the hard drive."
            },
            {
                "q": "What exception is raised if you open a non-existent file in 'r' mode?",
                "a": "Python raises a <strong>FileNotFoundError</strong> exception."
            }
        ],
        "test": {
            "intro": "Test your understanding of opening and closing files!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which function is used to open a file in Python?",
                    "options": [
                        "access()",
                        "open()",
                        "load()",
                        "read()"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which mode should you use to add text to the end of an existing file?",
                    "options": [
                        "'r'",
                        "'w'",
                        "'a'",
                        "'x'"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What is the default mode of open()?",
                    "options": [
                        "Write mode ('w')",
                        "Read mode ('r')",
                        "Append mode ('a')",
                        "Binary mode ('b')"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To close an open file object named `f`, you write `f._____()`. (print / len / input / close)",
                    "answer": "close"
                },
                {
                    "type": "fill",
                    "question": "If you try to open a missing file in read mode, Python raises a _____NotFoundError. (SyntaxError / TypeError / File / NameError)",
                    "answer": "File"
                },
                {
                    "type": "fill",
                    "question": "Opening a file in write mode ('w') will _____ any existing contents of that file. (append / preserve / overwrite / format) (overwrite / variable / File / close)",
                    "answer": "overwrite"
                },
                {
                    "type": "tf",
                    "question": "Opening a file in write mode ('w') raises an exception if the file does not already exist on disk.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Failing to close a file can lock the file and prevent other applications from using it.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The open() function can open both text files and binary files (like images).",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain the difference between opening a file in 'w' mode versus 'a' mode.",
                    "sampleAnswer": "In 'w' (write) mode, if the file exists, its contents are cleared entirely before writing new data. In 'a' (append) mode, the existing contents are preserved and any new data written is added directly to the end of the file."
                }
            ]
        },
        "scenario": "Nobita wants to open his diary. Write a program that opens a file named 'diary.txt' in write mode ('w'), prints 'File opened successfully', and then closes the file.",
        "hint": "Assign diary = open('diary.txt', 'w'), print('File opened successfully'), and then call diary.close().",
        "wrongHint": "Make sure you open 'diary.txt' in 'w' mode and call close() on the file object!",
        "solution": "diary = open('diary.txt', 'w')\nprint('File opened successfully')\ndiary.close()",
        "starterCode": "# Open 'diary.txt' in write mode, print success, and close it\n"
    },
    {
        "id": 81,
        "title": "Read/Write files",
        "concept": "Reading lines and writing to text files",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Read/Write files",
            "subheading": "Writing and reading file streams",
            "body": "<p>Opening a file is just the first step. To actually use it, we must learn how to <strong>write</strong> data into it and <strong>read</strong> data back from it. Python provides simple methods on file objects to do just that!</p>\n\n<h3>1. Writing to Files (.write)</h3>\n<p>When a file is opened in write (<code>'w'</code>) or append (<code>'a'</code>) mode, you can write text into it using the <strong><code>write()</code></strong> method. Crucially, <code>write()</code> does <strong>not</strong> automatically add a newline character at the end. You must add <code>\\n</code> manually if you want a line break!</p>\n<pre class=\"code-example\"># Writing to Nobita's notebook\nf = open(\"notebook.txt\", \"w\")\nf.write(\"Buy dorayakis\\n\")\nf.write(\"Clean room\\n\")\nf.close()</pre>\n\n<h3>2. Reading from Files</h3>\n<p>When a file is opened in read (<code>'r'</code>) mode, you have three primary ways to extract the text:</p>\n<ul class=\"desc-list\">\n    <li><strong><code>.read()</code>:</strong> Reads the entire file content into a single string. Be careful with huge files, as this loads everything into RAM!</li>\n    <li><strong><code>.readline()</code>:</strong> Reads a single line from the file. Each subsequent call reads the next line, returning an empty string when the end is reached.</li>\n    <li><strong><code>.readlines()</code>:</strong> Reads all lines and returns them as a list of strings, with each line as an item.</li>\n</ul>\n<pre class=\"code-example\">f = open(\"notebook.txt\", \"r\")\nprint(f.read())  # Prints both lines\nf.close()</pre>\n\n<h3>The File Cursor & .seek()</h3>\n<p>Think of reading a file like playing a cassette tape. When you read the file, the \"playback head\" (cursor) moves forward. If you read the entire file using <code>read()</code>, the cursor is now at the very end. If you call `read()` again, you will get nothing! You can reset the cursor back to the start (position 0) using <strong><code>seek(0)</code></strong>.</p>"
        },
        "qna": [
            {
                "q": "Does the write() method automatically start a new line?",
                "a": "No. Unlike the <code>print()</code> function, the <code>write()</code> method does not automatically add space or newline characters. You must write <code>\\n</code> explicitly to start a new line."
            },
            {
                "q": "What happens if you read a file, close it, and then try to read it again?",
                "a": "You must reopen the file first! Attempting to read a closed file raises a <code>ValueError: I/O operation on closed file.</code>"
            },
            {
                "q": "Which method is best if I want to process a file line-by-line?",
                "a": "You can use a <code>for</code> loop directly on the file object, which is highly memory-efficient (e.g. <code>for line in f:</code>), or call <code>.readline()</code> inside a loop."
            },
            {
                "q": "How does seek(0) work?",
                "a": "It moves Python's read/write file pointer to byte index 0 (the beginning of the file), allowing you to re-read the file contents without closing and reopening it."
            },
            {
                "q": "What does readlines() return if the file is empty?",
                "a": "It returns an empty list <code>[]</code>."
            }
        ],
        "test": {
            "intro": "Test your knowledge of reading and writing files!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which method reads the entire file content into a single string?",
                    "options": [
                        "readline()",
                        "readlines()",
                        "read()",
                        "load()"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What is the result of running f.write('Hello') followed by f.write('World')?",
                    "options": [
                        "HelloWorld",
                        "Hello\\nWorld",
                        "Hello World",
                        "An error occurs"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "Which method returns a list of strings representing the lines in a file?",
                    "options": [
                        "read()",
                        "readline()",
                        "readlines()",
                        "read_all()"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "To reset the file pointer back to the very beginning of the file, call f._____(0). (seek / print / len / input)",
                    "answer": "seek"
                },
                {
                    "type": "fill",
                    "question": "The string sequence that represents a newline in Python is _____. (+ / - / * / \\n)",
                    "answer": "\\n"
                },
                {
                    "type": "fill",
                    "question": "Calling read() at the end of a file returns an _____ string. (seek / \\n / variable / empty)",
                    "answer": "empty"
                },
                {
                    "type": "tf",
                    "question": "You can write integers directly into a file using f.write(42) without converting them first.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Iterating over a file object using a for loop: 'for line in f:' reads the file line-by-line.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Each string returned by readlines() includes the newline character \\n at the end.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain why calling f.read() twice in a row on the same open file returns nothing on the second call.",
                    "sampleAnswer": "On the first call, Python reads all text and moves the internal file cursor to the end of the file. The second call starts reading from the current cursor position, which is the end of the file, returning an empty string."
                }
            ]
        },
        "scenario": "Doraemon wants you to write a gadget to a file. Open a file named 'gadgets.txt' in write mode ('w'), write 'Anywhere Door\\n' to it, and then close the file.",
        "hint": "Assign f = open('gadgets.txt', 'w'), use f.write('Anywhere Door\\n'), and then call f.close().",
        "wrongHint": "Make sure you write 'Anywhere Door\\n' exactly (with a newline) and close the file!",
        "solution": "f = open('gadgets.txt', 'w')\nf.write('Anywhere Door\\n')\nf.close()",
        "starterCode": "# Open 'gadgets.txt' in write mode, write 'Anywhere Door\\n', and close it\n"
    },
    {
        "id": 82,
        "title": "CSV files",
        "concept": "Working with spreadsheet tabular data",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "CSV files",
            "subheading": "Handling tabular spreadsheet datasets in Python",
            "body": "<p>A very common file format used in data science and engineering is the <strong>CSV</strong> (Comma-Separated Values) file. It represents tabular spreadsheet data, where each row is a line, and columns are separated by commas.</p>\n\n<h3>The csv Module</h3>\n<p>While you could read CSV files as normal text files and split them by commas (<code>line.split(\",\")</code>), this breaks down if columns contain quotes, commas inside text, or spaces. Instead, Python has a built-in <strong><code>csv</code></strong> module to handle this automatically!</p>\n\n<h3>Writing to a CSV (.writerow)</h3>\n<p>To write tabular data, we import the module, open the file, create a CSV writer object, and use <strong><code>writerow()</code></strong> to write lists of data:</p>\n<pre class=\"code-example\">import csv\nf = open(\"scores.csv\", \"w\", newline=\"\")\nwriter = csv.writer(f)\n# Write header row\nwriter.writerow([\"Name\", \"Score\"])\n# Write data rows\nwriter.writerow([\"Nobita\", \"30\"])\nwriter.writerow([\"Shizuka\", \"95\"])\nf.close()</pre>\n<p>Note: The <code>newline=\"\"</code> parameter is recommended when opening CSV files on Windows to prevent blank lines between rows.</p>\n\n<h3>Reading from a CSV</h3>\n<p>Reading is just as simple: we create a reader object and iterate over it. Each row returned is a list of strings:</p>\n<pre class=\"code-example\">import csv\nf = open(\"scores.csv\", \"r\")\nreader = csv.reader(f)\nfor row in reader:\n    print(row)  # prints list: ['Name', 'Score'], then ['Nobita', '30'], etc.\nf.close()</pre>"
        },
        "qna": [
            {
                "q": "What does CSV stand for?",
                "a": "CSV stands for <strong>Comma-Separated Values</strong>, a simple text-based format for storing tabular data."
            },
            {
                "q": "Why shouldn't you just use line.split(',') to parse CSVs?",
                "a": "If a CSV column contains text with commas (e.g. <code>\"Doraemon, the cat robot\"</code>), using <code>split()</code> will split the column incorrectly. The <code>csv</code> module handles quotes and escape characters correctly."
            },
            {
                "q": "What data type does the csv.reader iterate over?",
                "a": "It iterates over the rows of the CSV file, returning each row as a <strong>list of strings</strong>."
            },
            {
                "q": "How do you write multiple rows at once?",
                "a": "You can use the <code>writer.writerows()</code> method, which takes a list of lists (a sequence of rows) and writes them all at once."
            },
            {
                "q": "Can you use characters other than commas to separate CSV values?",
                "a": "Yes! You can specify a different delimiter character (like tabs <code>\\t</code> or semicolons <code>;</code>) using the <code>delimiter</code> keyword, e.g. <code>csv.reader(f, delimiter=';')</code>."
            }
        ],
        "test": {
            "intro": "Test your knowledge of the csv module!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which module do you import to handle CSV files in Python?",
                    "options": [
                        "excel",
                        "csv",
                        "table",
                        "sheet"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is returned for each row when iterating over a csv.reader object?",
                    "options": [
                        "A string containing commas",
                        "A dictionary",
                        "A list of strings",
                        "A tuple of floats"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Which parameter in open() prevents double newlines when writing CSV files on Windows?",
                    "options": [
                        "mode='w'",
                        "newline=''",
                        "encoding='utf-8'",
                        "newline='\\n'"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To write a single row of data to a CSV file, use the writer._____() method. (variable / csv / writerow / ,)",
                    "answer": "writerow"
                },
                {
                    "type": "fill",
                    "question": "To import the CSV handling module, you write `import _____`. (csv / writerow / , / variable)",
                    "answer": "csv"
                },
                {
                    "type": "fill",
                    "question": "The character separating columns in a standard CSV file is a _____. (- / + / * / ,)",
                    "answer": ","
                },
                {
                    "type": "tf",
                    "question": "CSV files are binary files and cannot be opened with Notepad.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "writer.writerows() takes a list of lists and writes multiple rows at once.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "All values returned by csv.reader are strings, even if they represent numbers.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain the role of the delimiter parameter in the csv module.",
                    "sampleAnswer": "The delimiter parameter specifies the character used to separate columns in the file. By default, it is a comma, but it can be changed to semicolons, tabs, or any other character."
                }
            ]
        },
        "scenario": "Nobita wants to record names and scores in a CSV. Write a program: import the csv module, open a file named 'scores.csv' in write mode ('w'), create a csv writer, write the headers ['Name', 'Score'] using writerow(), and close the file.",
        "hint": "Import csv, open 'scores.csv' in write mode, assign writer = csv.writer(f), call writer.writerow(['Name', 'Score']), and close the file.",
        "wrongHint": "Make sure you write writer.writerow(['Name', 'Score']) and call close()!",
        "solution": "import csv\nf = open('scores.csv', 'w')\nwriter = csv.writer(f)\nwriter.writerow(['Name', 'Score'])\nf.close()",
        "starterCode": "# Write a program to create a CSV and write the headers\n"
    },
    {
        "id": 83,
        "title": "JSON files",
        "concept": "Serializing and parsing structured JSON data",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "JSON files",
            "subheading": "Reading and writing structured data in JSON format",
            "body": "<p><strong>JSON</strong> (JavaScript Object Notation) is a lightweight, human-readable data format used heavily on the internet to send structured data. It maps perfectly to Python's built-in data types: JSON objects look like Python dictionaries, and JSON arrays look like Python lists!</p>\n\n<h3>The json Module</h3>\n<p>Python has a built-in <strong><code>json</code></strong> module that allows you to easily serialize (convert Python objects to JSON) and deserialize (parse JSON back into Python objects).</p>\n\n<h3>Writing JSON to Files (.dump)</h3>\n<p>To save a dictionary or list into a JSON file, we open the file in write mode and use the <strong><code>json.dump()</code></strong> function:</p>\n<pre class=\"code-example\">import json\ndata = {\n    \"name\": \"Doraemon\",\n    \"color\": \"blue\",\n    \"pocket\": [\"Anywhere Door\", \"Bamboo Copter\"]\n}\nf = open(\"doraemon.json\", \"w\")\njson.dump(data, f)\nf.close()</pre>\n\n<h3>Reading JSON from Files (.load)</h3>\n<p>To read a JSON file and convert it back into a Python dictionary or list, we open the file in read mode and use the <strong><code>json.load()</code></strong> function:</p>\n<pre class=\"code-example\">import json\nf = open(\"doraemon.json\", \"r\")\nloaded_data = json.load(f)\nf.close()\nprint(loaded_data[\"name\"])  # Prints: Doraemon\nprint(type(loaded_data))    # Prints: &lt;class 'dict'&gt;</pre>\n\n<h3>dump/load vs dumps/loads</h3>\n<p>The methods with an **'s'** stand for **string**: they serialize/deserialize to/from strings in memory, rather than file streams:\n<ul class=\"desc-list\">\n    <li><code>json.dump(obj, file)</code>: Writes data to a file.</li>\n    <li><code>json.dumps(obj)</code>: Returns a JSON-formatted string.</li>\n    <li><code>json.load(file)</code>: Reads data from a file.</li>\n    <li><code>json.loads(string)</code>: Parses JSON from a string.</li>\n</ul></p>"
        },
        "qna": [
            {
                "q": "What is the difference between json.dump() and json.dumps()?",
                "a": "<code>json.dump()</code> writes JSON data directly to a file stream object. <code>json.dumps()</code> (dump string) converts a Python object into a JSON-formatted string in memory."
            },
            {
                "q": "How do JSON arrays and objects map to Python?",
                "a": "JSON objects map to Python <strong>dictionaries</strong>, and JSON arrays map to Python <strong>lists</strong>."
            },
            {
                "q": "Can you format the written JSON to make it readable?",
                "a": "Yes! You can pass the <code>indent</code> parameter to <code>json.dump()</code> or <code>json.dumps()</code>, e.g., <code>json.dump(data, f, indent=4)</code> to pretty-print the JSON."
            },
            {
                "q": "What happens if a JSON file contains syntax errors when loaded?",
                "a": "Python raises a <code>json.decoder.JSONDecodeError</code> exception."
            },
            {
                "q": "Do keys in JSON have to be strings?",
                "a": "Yes. While Python dictionaries can have numbers or tuples as keys, JSON format strictly requires keys to be strings. The json module automatically converts keys to strings when dumping."
            }
        ],
        "test": {
            "intro": "Test your knowledge of the json module!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which method is used to parse JSON data from a file stream?",
                    "options": [
                        "json.load()",
                        "json.loads()",
                        "json.read()",
                        "json.parse()"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What Python data type is created when you load a JSON object containing key-value pairs?",
                    "options": [
                        "list",
                        "dict",
                        "tuple",
                        "set"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which method converts a Python object to a JSON string in memory?",
                    "options": [
                        "json.dump()",
                        "json.loads()",
                        "json.dumps()",
                        "json.string()"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The method used to save a Python dictionary to a JSON file is json._____(). (variable / loads / dump / Notation)",
                    "answer": "dump"
                },
                {
                    "type": "fill",
                    "question": "JSON stands for JavaScript Object _____. (dump / loads / Notation / Variable)",
                    "answer": "Notation"
                },
                {
                    "type": "fill",
                    "question": "If you want to parse JSON from a string named raw_str, call json._____(raw_str). (dump / variable / Notation / loads)",
                    "answer": "loads"
                },
                {
                    "type": "tf",
                    "question": "A JSON array is represented in Python as a list.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Keys in JSON objects must be wrapped in double quotes, not single quotes.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "The indent parameter in json.dump is used to change column separator symbols.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the difference between json.load() and json.loads().",
                    "sampleAnswer": "json.load() reads and parses JSON data from an open file-like object, whereas json.loads() takes a string containing JSON text and parses it into a Python data structure."
                }
            ]
        },
        "scenario": "Doraemon is storing gadget info. Write a program: import the json module, define a dictionary data = {'gadget': 'Bamboo Copter'}, open a file named 'gadget.json' in write mode ('w'), save the dictionary to the file using json.dump(), and close the file.",
        "hint": "Import json, define data, open 'gadget.json' in write mode, call json.dump(data, f), and call close().",
        "wrongHint": "Make sure you call json.dump(data, f) and close the file!",
        "solution": "import json\ndata = {'gadget': 'Bamboo Copter'}\nf = open('gadget.json', 'w')\njson.dump(data, f)\nf.close()",
        "starterCode": "# Write a program to dump dictionary data into a JSON file\n"
    },
    {
        "id": 84,
        "title": "Context manager (with)",
        "concept": "Managing file streams safely with 'with'",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Context Manager (with)",
            "subheading": "Ensuring files are closed safely and automatically",
            "body": "<p>When working with files, forgetting to call <code>close()</code> is a very common beginner mistake. It locks resources and can corrupt data. To make file handling safer and cleaner, Python provides context managers through the <strong><code>with</code></strong> statement.</p>\n\n<h3>The Metaphor: The Self-Locking Safe</h3>\n<p>Imagine Nobita enters a high-security **Self-Locking Safe** (the context). He unlocks it, steps inside, reads or writes notes, and the moment he steps outside, the door automatically swings shut, locks, and shuts down all access. Nobita doesn't have to remember to turn the key or lock the bolts -- the safe manages its own closing process!</p>\n\n<h3>Syntax of with statement</h3>\n<p>Instead of manually opening and closing, we wrap the file actions inside a <code>with</code> block. The file is assigned to a variable using the <code>as</code> keyword:</p>\n<pre class=\"code-example\">with open(\"diary.txt\", \"r\") as f:\n    content = f.read()\n    print(content)\n\n# Outside the block, the file is ALREADY closed! f.close() is called automatically.</pre>\n\n<h3>Why with is Better</h3>\n<ul class=\"desc-list\">\n    <li><strong>Guaranteed Cleanup:</strong> Python guarantees the file is closed as soon as the execution leaves the <code>with</code> block.</li>\n    <li><strong>Error Safety:</strong> Even if your code inside the <code>with</code> block throws a traceback exception and crashes, Python closes the file safely before letting the program crash.</li>\n    <li><strong>Clean Code:</strong> You write less boilerplate code, and the indentation clearly shows where the file resource is active.</li>\n</ul>"
        },
        "qna": [
            {
                "q": "Do I ever need to call f.close() when using the 'with' statement?",
                "a": "No, never. The <code>with</code> statement handles closing the file automatically when the indented code block is exited."
            },
            {
                "q": "What happens if a crash/exception occurs inside the 'with' block?",
                "a": "Python still closes the file safely. The context manager executes its exit routine (closing the file handle) before letting the exception bubble up."
            },
            {
                "q": "How can you open multiple files simultaneously using with?",
                "a": "You can separate them with commas, like: <code>with open('file1.txt') as f1, open('file2.txt') as f2:</code>."
            },
            {
                "q": "Can you use with with resources other than files?",
                "a": "Yes! Context managers are used for database connections, network sockets, thread locks, and any resource requiring setup and teardown."
            },
            {
                "q": "What methods define a custom Context Manager class?",
                "a": "A class must implement the magic methods <code>__enter__()</code> (run when entering block) and <code>__exit__()</code> (run when leaving block)."
            }
        ],
        "test": {
            "intro": "Test your knowledge of the with statement!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword begins a context manager block in Python?",
                    "options": [
                        "using",
                        "with",
                        "open",
                        "context"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "When is the file closed when opened inside a with block?",
                    "options": [
                        "Only when f.close() is called",
                        "When the program ends",
                        "Immediately when the indented code block is exited",
                        "Never"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What is the alias keyword used to name the file object inside with?",
                    "options": [
                        "to",
                        "as",
                        "for",
                        "in"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To open a file inside a context manager, you write: _____ open('file.txt') as f: (if / else / elif / with)",
                    "answer": "with"
                },
                {
                    "type": "fill",
                    "question": "The method called automatically on the file object when exiting with is _____. (print / len / input / close)",
                    "answer": "close"
                },
                {
                    "type": "fill",
                    "question": "Opening multiple files in one with statement requires separating them with a _____. (- / + / * / ,)",
                    "answer": ","
                },
                {
                    "type": "tf",
                    "question": "If an exception is raised inside a with block, the file is left open.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Context managers make code safer because they eliminate the risk of forgetting to close files.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Using with open() allows you to skip specifying the file mode parameter entirely.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the safety benefit of using 'with' over manually opening and closing files.",
                    "sampleAnswer": "The 'with' statement guarantees that the file is closed under all circumstances, even if an exception occurs or the block is exited early using return or break, preventing memory leaks and locked files."
                }
            ]
        },
        "scenario": "Nobita wants to read his diary safely. Open a file named 'diary.txt' in read mode ('r') using a with statement, read the entire content into a variable named content, print content, and let context manager handle closing the file.",
        "hint": "Write: with open('diary.txt', 'r') as f:, indent content = f.read() and print(content) inside the block.",
        "wrongHint": "Make sure you use a with block and print the read content!",
        "solution": "with open('diary.txt', 'r') as f:\n    content = f.read()\n    print(content)",
        "starterCode": "# Open 'diary.txt' safely using a with statement and print its content\n"
    },
    {
        "id": 85,
        "title": "File project challenge",
        "concept": "Building a local text logging dashboard",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "File project challenge",
            "subheading": "Putting it all together: Building a secure text logging dashboard",
            "body": "<p>In this final level of the section, you will combine everything you have learned about file handling, exceptions, and safety mechanisms to build a robust logging program.</p>\n\n<h3>The Scenario: The Gadget Access Logger</h3>\n<p>Doraemon wants to create a secure security system to track which gadgets Nobita borrows. Every time a gadget is accessed, we must write a new record to a file named <code>log.txt</code>. Because file writing can fail (e.g. disk write failures, permission errors), we must wrap our context manager in a <code>try-except</code> block to keep the application stable.</p>\n\n<h3>Designing the Logger</h3>\n<p>To implement this successfully, we use:</p>\n<ul class=\"desc-list\">\n    <li><strong>Append Mode (<code>'a'</code>):</strong> To ensure new log entries are added to the end of the file, preserving all previous logs.</li>\n    <li><strong>Context Manager (<code>with</code>):</strong> To guarantee the log file handles are closed automatically.</li>\n    <li><strong>Try-Except:</strong> To catch any <code>IOError</code> (input/output faults) and display a fallback message instead of crashing the system.</li>\n</ul>\n<pre class=\"code-example\">try:\n    with open(\"log.txt\", \"a\") as log:\n        log.write(\"System initialized\\n\")\nexcept IOError:\n    print(\"Logging failed!\")</pre>"
        },
        "qna": [
            {
                "q": "Why is append mode ('a') chosen over write mode ('w') for logs?",
                "a": "Write mode overwrites the file from scratch, which would erase all previous history. Append mode keeps the old logs and adds new records at the end."
            },
            {
                "q": "What kind of issues can trigger an IOError during logging?",
                "a": "Permissions errors (file read-only), lack of space on the hard drive, or the file being locked by another running program."
            },
            {
                "q": "Is f.write() thread-safe or is there buffered writing?",
                "a": "Python buffers writes to disk for speed. Using a context manager ensures that the buffer is flushed (written to disk) immediately when exiting the block."
            },
            {
                "q": "Why is it important to capture IOError rather than a bare except?",
                "a": "So we only handle access errors. If we made a typo in a variable name (NameError), a bare except would hide it, whereas catching IOError lets the developer spot logic typos."
            },
            {
                "q": "What happens if log.txt does not exist when opened in 'a' mode?",
                "a": "Python automatically creates the file for you."
            }
        ],
        "test": {
            "intro": "Test your overall file handling mastery!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which access mode keeps existing file data and lets you write new entries at the end?",
                    "options": [
                        "'r'",
                        "'w'",
                        "'a'",
                        "'x'"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What is the benefit of nesting with open() inside a try block?",
                    "options": [
                        "It speeds up execution",
                        "It prevents Python from creating the file",
                        "It handles setup/teardown while catching potential access crashes",
                        "It turns off the console output"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What exception class is raised if a file-writing operation fails due to full disk?",
                    "options": [
                        "ValueError",
                        "IOError",
                        "IndexError",
                        "TypeError"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To append text to a log file, open it in _____ mode. (w / r / x / a)",
                    "answer": "a"
                },
                {
                    "type": "fill",
                    "question": "Files are stored in permanent disk storage, whereas variables are stored in temporary _____ memory. (\\n / a / RAM / Variable)",
                    "answer": "RAM"
                },
                {
                    "type": "fill",
                    "question": "To write a line break into a log file, write the characters _____. (+ / - / * / \\n)",
                    "answer": "\\n"
                },
                {
                    "type": "tf",
                    "question": "A context manager inside a try-except block still guarantees the file is closed if an error is caught.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "If you open a file in 'a' mode, you cannot write to it.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Logging operations should always run without exceptions because log files are virtual.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Describe how you would implement a security logging routine that handles access errors.",
                    "sampleAnswer": "I would wrap a 'with open(\"log.txt\", \"a\")' context manager inside a try-except block that catches IOError. Inside the context, I'd use write() to write the log entry with a newline."
                }
            ]
        },
        "scenario": "Write a logging system. Wrap a try-except block around a context manager: open 'log.txt' in append mode ('a') using with, write 'Bamboo Copter borrowed\\n' to the file. If an IOError occurs, catch it and print 'Log failed'.",
        "hint": "Wrap the code with try:, inside write with open('log.txt', 'a') as f: and call f.write('Bamboo Copter borrowed\\n'). Add except IOError: and print('Log failed').",
        "wrongHint": "Make sure you catch IOError and print 'Log failed' on error!",
        "solution": "try:\n    with open('log.txt', 'a') as f:\n        f.write('Bamboo Copter borrowed\\n')\nexcept IOError:\n    print('Log failed')",
        "starterCode": "# Write a try-except block with a context manager to append log lines\n"
    },
    {
        "id": 86,
        "title": "Modules",
        "concept": "Splitting code across multiple file modules",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Modules",
            "subheading": "Splitting your code into clean, reusable files",
            "body": "<p>As your programs grow larger, keeping all your code in a single file becomes messy and difficult to manage. Python solves this by allowing you to split your code into separate files called <strong>Modules</strong>.</p>\n\n<h3>What is a Module?</h3>\n<p>Any file containing Python code ending in <code>.py</code> can be imported as a module in another script. Modules allow you to write functions once and reuse them across different programs!</p>\n<p>Think of it like Doraemon's **Gadget Drawer**: instead of piling all gadgets onto the floor (one giant file), he categorizes them into separate drawers (modules) -- one for flying gadgets, one for time gadgets, etc.</p>\n\n<h3>Importing Modules</h3>\n<p>Python provides three main ways to import modules:</p>\n<ol class=\"desc-list\">\n    <li><strong><code>import module_name</code>:</strong> Imports the entire module. You access its functions using the dot notation:\n        <pre class=\"code-example\">import math\nprint(math.sqrt(25))  # Prints: 5.0</pre>\n    </li>\n    <li><strong><code>from module_name import name</code>:</strong> Imports a specific function or variable directly. You don't need dot notation:\n        <pre class=\"code-example\">from math import sqrt\nprint(sqrt(25))       # Prints: 5.0</pre>\n    </li>\n    <li><strong><code>import module_name as alias</code>:</strong> Imports a module under a shorter name (alias) to save typing:\n        <pre class=\"code-example\">import datetime as dt\nprint(dt.date.today())</pre>\n    </li>\n</ol>\n\n<h3>Creating Your Own Module</h3>\n<p>Creating custom modules is incredibly easy. Simply write standard functions in a file named <code>my_module.py</code>. In your main script, write <code>import my_module</code>, and you can now use those functions!</p>"
        },
        "qna": [
            {
                "q": "What is a module in Python?",
                "a": "A module is simply a file with a <code>.py</code> extension that contains Python functions, classes, and variables. It allows you to organize and reuse code."
            },
            {
                "q": "What is the difference between 'import math' and 'from math import sqrt'?",
                "a": "<code>import math</code> imports the entire module, requiring you to access functions with <code>math.sqrt()</code>. <code>from math import sqrt</code> imports only the <code>sqrt</code> function, letting you use it directly without the module name prefix."
            },
            {
                "q": "What does the 'as' keyword do in an import statement?",
                "a": "It creates an **alias** (a nickname) for the module, making it shorter and easier to reference in your code, e.g. <code>import numpy as np</code>."
            },
            {
                "q": "Can you import everything from a module directly?",
                "a": "Yes, using <code>from module import *</code>. However, this is generally discouraged because it can clutter your namespace and create naming conflicts if different modules have functions with the same name."
            },
            {
                "q": "What is the purpose of 'if __name__ == \"__main__\":' inside a module?",
                "a": "It ensures that code block only runs when the script is executed directly, but is ignored when the file is imported as a module in another script."
            }
        ],
        "test": {
            "intro": "Test your knowledge of Python modules!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword is used to load an external module into your Python script?",
                    "options": [
                        "load",
                        "include",
                        "import",
                        "require"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "How would you import only the 'randint' function from the 'random' module?",
                    "options": [
                        "import random.randint",
                        "from random import randint",
                        "import randint from random",
                        "from random.randint import *"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the result of importing a module under an alias, e.g. 'import math as m'?",
                    "options": [
                        "It renames the math.py file on disk",
                        "It restricts access to the math module",
                        "It lets you call math functions using 'm.function()'",
                        "It triggers a SyntaxError"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "Any file containing Python code with a _____ extension can be imported as a module. (* / .py / __name__ / Variable)",
                    "answer": ".py"
                },
                {
                    "type": "fill",
                    "question": "To import all functions from a module directly without dot notation, use: from module import _____. (+ / - / * / /)",
                    "answer": "*"
                },
                {
                    "type": "fill",
                    "question": "The special variable Python uses to check if a file is executed directly is `_____`. (NameError / TypeError / SyntaxError / __name__)",
                    "answer": "__name__"
                },
                {
                    "type": "tf",
                    "question": "When a module is imported for the first time, Python executes all top-level statements in that module.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Creating a custom module requires compiling your Python code into binary format.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The import statement must always be placed at the very top of your Python file.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the benefit of using the 'import module as alias' syntax.",
                    "sampleAnswer": "It allows developers to use a shorter, cleaner name for a module throughout their code, saving typing time and making libraries like 'pandas as pd' or 'numpy as np' easier to read."
                }
            ]
        },
        "scenario": "Nobita wants to calculate a square root. Import the 'sqrt' function from the 'math' module, calculate the square root of 16 using 'sqrt(16)', and print the result.",
        "hint": "Write: from math import sqrt, and print(sqrt(16)).",
        "wrongHint": "Make sure you import sqrt and print(sqrt(16)) exactly!",
        "solution": "from math import sqrt\nprint(sqrt(16))",
        "starterCode": "# Import sqrt from the math module, compute sqrt of 16, and print it\n"
    },
    {
        "id": 87,
        "title": "Packages",
        "concept": "Structuring collections of modules into directories",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Packages",
            "subheading": "Grouping related modules into directories",
            "body": "<p>While modules help organize files, a large project might have dozens of modules. To prevent clutter, Python allows you to group related modules into directories called <strong>Packages</strong>.</p>\n\n<h3>What is a Package?</h3>\n<p>A package is simply a directory containing multiple module files and a special file named <strong><code>__init__.py</code></strong>. The <code>__init__.py</code> file can be empty, but its presence tells Python that the directory should be treated as a package, allowing you to import modules from it using the dot (<code>.</code>) syntax.</p>\n<p>Think of it like Doraemon's **Toolbox**: the toolbox (package) contains separate drawers (directories/sub-packages), each containing specific tools (modules).</p>\n\n<h3>Importing from a Package</h3>\n<p>Suppose you have a directory structure like this:\n<pre>my_project/\n└── mathutils/            &larr; Package\n    ├── __init__.py       &larr; Marks folder as package\n    ├── algebra.py        &larr; Module\n    └── geometry.py       &larr; Module</pre></p>\n<p>You can import modules from this package using different methods:\n<pre class=\"code-example\"># Method 1\nimport mathutils.algebra\nmathutils.algebra.solve()\n\n# Method 2\nfrom mathutils import geometry\ngeometry.calculate_area()\n\n# Method 3\nfrom mathutils.geometry import calculate_area\ncalculate_area()</pre></p>"
        },
        "qna": [
            {
                "q": "What is the difference between a module and a package?",
                "a": "A module is a single Python file (.py). A package is a directory (folder) that holds modules and contains a special <code>__init__.py</code> file."
            },
            {
                "q": "What is the role of the __init__.py file?",
                "a": "It acts as the initializer for the package, telling Python's import engine that the directory contains modules that can be imported."
            },
            {
                "q": "Can you have nested packages?",
                "a": "Yes! A package directory can contain subdirectories, which can also be packages (sub-packages) as long as they contain their own <code>__init__.py</code> files."
            },
            {
                "q": "What happens when you run 'import package_name'?",
                "a": "It executes the code inside that package's <code>__init__.py</code> file. Any modules inside the package must be imported explicitly unless configured otherwise in <code>__init__.py</code>."
            },
            {
                "q": "Is __init__.py mandatory in Python 3?",
                "a": "Since Python 3.3, directories without <code>__init__.py</code> are recognized as implicit namespace packages. However, it is still standard practice to include <code>__init__.py</code> for regular, explicit packages."
            }
        ],
        "test": {
            "intro": "Test your package hierarchy knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What defines a folder as a package in Python?",
                    "options": [
                        "It must end with the .pkg extension",
                        "It must contain an __init__.py file",
                        "It must be inside the Python path",
                        "It must only contain text files"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which import statement is valid for importing a module named 'sales' from a package named 'finance'?",
                    "options": [
                        "import finance.sales",
                        "from finance import sales",
                        "Both of the above",
                        "None of the above"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "What symbol is used to separate packages, sub-packages, and modules in import statements?",
                    "options": [
                        "Slash (/)",
                        "Backslash (\\)",
                        "Dot (.)",
                        "Colon (:)"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "A package is represented as a _____ in your computer's filesystem. (variable / directory / __init__.py / add)",
                    "answer": "directory"
                },
                {
                    "type": "fill",
                    "question": "The special initializer file in packages is named `_____`. (Variable / add / directory / __init__.py)",
                    "answer": "__init__.py"
                },
                {
                    "type": "fill",
                    "question": "To import a function called add from the calculator module inside the mathutils package, write: from mathutils.calculator import _____. (variable / add / directory / __init__.py)",
                    "answer": "add"
                },
                {
                    "type": "tf",
                    "question": "The __init__.py file can be left completely empty.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Packages make it harder to organize large-scale software systems.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Nested folders inside packages do not require __init__.py to be sub-packages.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the difference between namespace packages and regular packages.",
                    "sampleAnswer": "Regular packages contain an __init__.py file and are self-contained. Namespace packages (introduced in Python 3.3) do not require __init__.py and allow modules to be spread across different physical directories/locations."
                }
            ]
        },
        "scenario": "Nobita is importing a sub-module. Imagine we have a package 'pocket' and a sub-module 'door'. Write a statement to import the 'door' sub-module from the 'pocket' package using 'import pocket.door', and print 'Anywhere Door imported'.",
        "hint": "Write import pocket.door, and print('Anywhere Door imported').",
        "wrongHint": "Make sure you write import pocket.door and print('Anywhere Door imported') exactly!",
        "solution": "import pocket.door\nprint('Anywhere Door imported')",
        "starterCode": "# Import the sub-module door from package pocket, and print a success message\n"
    },
    {
        "id": 88,
        "title": "Virtual environments (venv)",
        "concept": "Isolating package dependencies for projects",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Virtual Environments (venv)",
            "subheading": "Isolating your project dependencies",
            "body": "<p>When you build different Python projects, they will require different third-party libraries (e.g. Django, Flask, Pandas). Installing all libraries globally on your computer can cause conflicts: Project A might need Version 1 of a library, while Project B needs Version 2. To solve this, we use <strong>Virtual Environments</strong>.</p>\n\n<h3>The Metaphor: Isolated Test Chambers</h3>\n<p>Think of a virtual environment like Doraemon's **Isolated Test Chamber** gadget: when Nobita wants to experiment with chemical potions (third-party libraries), he does it inside an isolated chamber. Any potions mixed there won't spill out, conflict, or ruin the rest of the house (your global operating system)!</p>\n\n<h3>Working with Virtual Environments</h3>\n<p>Virtual environments are managed in three simple steps:</p>\n<ol class=\"desc-list\">\n    <li><strong>Create:</strong> Create an isolated environment folder using the built-in <code>venv</code> module:\n        <pre class=\"code-example\">python -m venv myenv</pre>\n    </li>\n    <li><strong>Activate:</strong> Turn on the environment. Once activated, any library you install stays inside this folder.\n        <ul>\n            <li><strong>Windows:</strong> <code>myenv\\Scripts\\activate</code></li>\n            <li><strong>Mac/Linux:</strong> <code>source myenv/bin/activate</code></li>\n        </ul>\n    </li>\n    <li><strong>Install Packages (pip):</strong> Use the package installer <code>pip</code> to install libraries:\n        <pre class=\"code-example\">pip install requests</pre>\n    </li>\n    <li><strong>Deactivate:</strong> Exit the virtual environment when finished:\n        <pre class=\"code-example\">deactivate</pre>\n    </li>\n</ol>\n\n<h3>Sharing Dependencies: requirements.txt</h3>\n<p>You can save a list of your installed libraries to share with others using:\n<pre class=\"code-example\">pip freeze > requirements.txt</pre>\nOthers can recreate your exact environment by running:\n<pre class=\"code-example\">pip install -r requirements.txt</pre></p>"
        },
        "qna": [
            {
                "q": "Why do we need virtual environments?",
                "a": "To isolate dependencies for different projects, preventing version conflicts between libraries and keeping your global system clean."
            },
            {
                "q": "What happens when you run 'python -m venv myenv'?",
                "a": "It creates a directory named <code>myenv</code> containing a local copy of the Python interpreter, standard libraries, and script managers."
            },
            {
                "q": "How do you know if a virtual environment is active in your terminal?",
                "a": "Your terminal prompt will change to show the environment name in parentheses at the start, e.g. <code>(myenv) C:\\Users\\...</code>."
            },
            {
                "q": "Does deleting the virtual environment folder delete Python?",
                "a": "No. It only deletes the isolated environment and its installed libraries, leaving your global Python installation untouched."
            },
            {
                "q": "How do you share your project's libraries with another developer?",
                "a": "By exporting them to a text file using <code>pip freeze > requirements.txt</code>. The other developer can run <code>pip install -r requirements.txt</code> to install all of them at once."
            }
        ],
        "test": {
            "intro": "Test your virtual environment knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which built-in module is used to create isolated virtual environments?",
                    "options": [
                        "pip",
                        "venv",
                        "env",
                        "isolate"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the command to deactivate an active virtual environment?",
                    "options": [
                        "exit",
                        "stop",
                        "deactivate",
                        "venv deactivate"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Which tool is Python's package installer, used to install libraries inside environments?",
                    "options": [
                        "npm",
                        "pip",
                        "gem",
                        "apt"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To write the list of installed libraries into requirements.txt, run: pip _____ > requirements.txt. (freeze / requirements.txt / variable / Scripts)",
                    "answer": "freeze"
                },
                {
                    "type": "fill",
                    "question": "On Windows, the activation script is located inside the _____ folder of your environment. (requirements.txt / Scripts / Variable / freeze)",
                    "answer": "Scripts"
                },
                {
                    "type": "fill",
                    "question": "To install packages from a requirements.txt file, write: pip install -r _____. (Scripts / freeze / variable / requirements.txt)",
                    "answer": "requirements.txt"
                },
                {
                    "type": "tf",
                    "question": "A virtual environment uses its own local set of libraries, separate from your global system.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Deactivating a virtual environment deletes all folders inside it.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You must run 'source myenv/bin/activate' on Windows Command Prompt.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Describe the workflow to initialize a new project with its own libraries.",
                    "sampleAnswer": "Create a virtual environment using 'python -m venv myenv', activate it in the terminal, and then use 'pip install' to load the required libraries for that project."
                }
            ]
        },
        "scenario": "Nobita wants to check virtual environment setup. Write a program that prints the command to create an environment 'python -m venv myenv' on the first line, and the command to activate it 'myenv\\Scripts\\activate' on the second line.",
        "hint": "Use print() twice. On the second line, remember to escape the backslash: print('myenv\\\\Scripts\\\\activate').",
        "wrongHint": "Make sure you print 'python -m venv myenv' on line 1, and 'myenv\\Scripts\\activate' on line 2!",
        "solution": "print('python -m venv myenv')\nprint('myenv\\Scripts\\activate')",
        "starterCode": "# Print the venv creation and activation commands\n"
    },
    {
        "id": 89,
        "title": "Standard libraries",
        "concept": "Using math, random, and datetime libraries",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Standard libraries",
            "subheading": "Python's built-in batteries-included tools",
            "body": "<p>Python is known as a \"batteries-included\" language. This means it comes pre-packaged with a vast collection of modules called the <strong>Standard Library</strong>. You don't need to install them via pip; they are already on your machine, waiting to be imported!</p>\n\n<h3>The Metaphor: Standard Gadgets</h3>\n<p>Think of the standard library like Doraemon's **Standard Gadgets**: these are the default tools built directly into his chassis (like his translation button or flashlight). He doesn't need to buy or download them from future department stores; they are always ready to go!</p>\n\n<h3>Core Modules in the Standard Library</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>math</code>:</strong> Provides advanced mathematical operations and constants:\n        <pre class=\"code-example\">import math\nprint(math.pi)        # 3.141592653589793\nprint(math.floor(4.9))  # Rounds down -> 4</pre>\n    </li>\n    <li><strong><code>random</code>:</strong> Generates random numbers or selects random choices:\n        <pre class=\"code-example\">import random\nprint(random.randint(1, 10))  # Random int from 1 to 10\nprint(random.choice([\"A\", \"B\"])) # Random item</pre>\n    </li>\n    <li><strong><code>datetime</code>:</strong> Handles dates, times, and formatting:\n        <pre class=\"code-example\">import datetime\nprint(datetime.date.today())  # Returns current date</pre>\n    </li>\n</ul>"
        },
        "qna": [
            {
                "q": "What does 'batteries-included' mean in Python?",
                "a": "It means Python comes with a large library of pre-installed, ready-to-use modules that handle tasks like file access, system operations, math, and data formatting."
            },
            {
                "q": "Do you need to use 'pip install' for standard libraries?",
                "a": "No, standard libraries are built into Python itself and are available out of the box."
            },
            {
                "q": "What is the difference between math.ceil() and math.floor()?",
                "a": "<code>math.ceil()</code> rounds a decimal number **up** to the nearest integer, whereas <code>math.floor()</code> rounds it **down**."
            },
            {
                "q": "What does random.choice(list) do?",
                "a": "It randomly selects and returns a single element from a non-empty sequence like a list or tuple."
            },
            {
                "q": "How can you print a formatted date?",
                "a": "By using the <code>strftime()</code> method on a datetime object, which formats the date into a custom string pattern (e.g. <code>\"%Y-%m-%d\"</code>)."
            }
        ],
        "test": {
            "intro": "Test your standard library knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which standard library module handles random numbers?",
                    "options": [
                        "math",
                        "random",
                        "datetime",
                        "sys"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What does math.ceil(5.1) return?",
                    "options": [
                        "5",
                        "6",
                        "5.0",
                        "An error"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which method returns the current date and time?",
                    "options": [
                        "datetime.date.today()",
                        "datetime.datetime.now()",
                        "datetime.now()",
                        "datetime.today()"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To generate a random float between 0.0 and 1.0, call random._____(). (random / choice / variable / math)",
                    "answer": "random"
                },
                {
                    "type": "fill",
                    "question": "To use advanced trig functions, you must write `import _____`. (variable / random / math / choice)",
                    "answer": "math"
                },
                {
                    "type": "fill",
                    "question": "To pick a random element from a list named options, use: random._____(options). (choice / random / variable / math)",
                    "answer": "choice"
                },
                {
                    "type": "tf",
                    "question": "random.randint(1, 10) can generate the number 10.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Standard library modules must be imported before they can be used in your code.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "math.pi is a function and requires parentheses: math.pi().",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Give an example of a situation where the random module would be useful in a game.",
                    "sampleAnswer": "It would be useful to roll a die, spawn enemies at random locations, determine random loot drops, or pick a starting player."
                }
            ]
        },
        "scenario": "Nobita wants to pick a random gadget from Doraemon's list. Write a program: import the random module, define a list choices = ['Time Cloth', 'Anywhere Door'], select a random gadget using random.choice(), store it in a variable 'gadget', and print 'gadget'.",
        "hint": "Import random, define choices, assign gadget = random.choice(choices), and print(gadget).",
        "wrongHint": "Make sure you use random.choice(choices) and print the selected gadget!",
        "solution": "import random\nchoices = ['Time Cloth', 'Anywhere Door']\ngadget = random.choice(choices)\nprint(gadget)",
        "starterCode": "# Write a program to choose and print a random gadget\n"
    },
    {
        "id": 90,
        "title": "Regular Expressions (re)",
        "concept": "Searching and validating patterns in strings",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Regular Expressions (re)",
            "subheading": "The search patterns tool for text",
            "body": "<p>When working with text, sometimes we need to search for patterns rather than exact words. For example, finding all email addresses, phone numbers, or numbers in a long text. In Python, we do this using <strong>Regular Expressions</strong> (often called **Regex**) through the built-in <strong><code>re</code></strong> module.</p>\n\n<h3>The Metaphor: The X-Ray Detector</h3>\n<p>Think of regular expressions like Doraemon's **X-Ray Detector** gadget: instead of reading every word on a paper (manual string searches), you program the detector to highlight specific shapes (patterns). It filters out all the normal text and shines a light on exact patterns (like digits or codes)!</p>\n\n<h3>Core regex Methods</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>re.search(pattern, text)</code>:</strong> Searches the string for the first match, returning a match object if found.</li>\n    <li><strong><code>re.findall(pattern, text)</code>:</strong> Finds all matches in the text, returning them as a list of strings.</li>\n    <li><strong><code>re.sub(pattern, replacement, text)</code>:</strong> Replaces occurrences of the pattern with new text.</li>\n</ul>\n\n<h3>Common regex Patterns</h3>\n<p>Patterns are written as **raw strings** (prefixed with <code>r</code>) to prevent Python from escaping backslashes:\n<ul class=\"desc-list\">\n    <li><code>\\d</code>: Matches any digit (0-9). <code>\\d+</code> matches one or more digits.</li>\n    <li><code>\\w</code>: Matches any alphanumeric character (letters, numbers, underscores).</li>\n    <li><code>\\s</code>: Matches any whitespace character (spaces, tabs, newlines).</li>\n</ul>\n<pre class=\"code-example\">import re\ntext = \"Doraemon has 4 pockets and 12 dorayakis.\"\nnumbers = re.findall(r\"\\d+\", text)\nprint(numbers)  # Prints: ['4', '12']</pre></p>"
        },
        "qna": [
            {
                "q": "What is a regular expression (regex)?",
                "a": "A regular expression is a special sequence of characters that forms a search pattern, used for pattern matching and text manipulation."
            },
            {
                "q": "Why do we prefix regex patterns with 'r', like r'\\d+'?",
                "a": "The 'r' prefix marks the string as a **raw string**, which tells Python to treat backslashes literally instead of as escape sequences (like newline <code>\\n</code>)."
            },
            {
                "q": "What is the difference between re.match() and re.search()?",
                "a": "<code>re.match()</code> checks for a match only at the **very beginning** of the string. <code>re.search()</code> scans the **entire string** for the first occurrence of a match."
            },
            {
                "q": "What does the '+' symbol mean in regex patterns?",
                "a": "The <code>+</code> symbol is a quantifier meaning **one or more** occurrences of the preceding character or group (e.g. <code>\\d+</code> matches '4' or '123' but not empty text)."
            },
            {
                "q": "How do you replace text patterns using regex?",
                "a": "By using the <code>re.sub(pattern, replacement, text)</code> function, which replaces all instances of the pattern with the replacement text."
            }
        ],
        "test": {
            "intro": "Test your regular expressions knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which module provides regular expression support in Python?",
                    "options": [
                        "regex",
                        "re",
                        "pattern",
                        "search"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which regex character matches any single digit?",
                    "options": [
                        "\\w",
                        "\\d",
                        "\\s",
                        "\\t"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is returned by re.findall() if no matches are found in the text?",
                    "options": [
                        "None",
                        "An empty list []",
                        "An empty string ''",
                        "False"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To ensure backslashes are treated literally, prefix your pattern string with the letter _____. (r / a / w / x)",
                    "answer": "r"
                },
                {
                    "type": "fill",
                    "question": "In regex patterns, the '*' symbol means zero or _____ occurrences of the character. (sub / more / r / variable)",
                    "answer": "more"
                },
                {
                    "type": "fill",
                    "question": "To replace all occurrences of a pattern in a string, use the function re._____(). (more / r / variable / sub)",
                    "answer": "sub"
                },
                {
                    "type": "tf",
                    "question": "re.search() will scan the entire string and return all matches in a list.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "The pattern r'\\s+' matches one or more whitespace characters.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Using standard string methods like find() is always preferred over regex because it is faster.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the difference between the regex patterns r'\\d' and r'\\d+'.",
                    "sampleAnswer": "r'\\d' matches only a single digit character (e.g. '1' from '12'), whereas r'\\d+' matches one or more consecutive digits as a single group (e.g. '12' from '12')."
                }
            ]
        },
        "scenario": "Nobita is scanning text for digits. Write a program: import the re module, define text = 'I found 3 bells and 5 dorayakis', use re.findall(r'\\d', text) to find all single digits, store the list in 'digits', and print 'digits'.",
        "hint": "Import re, define text, assign digits = re.findall(r'\\d', text), and print(digits).",
        "wrongHint": "Make sure you call re.findall(r'\\d', text) and print digits!",
        "solution": "import re\ntext = 'I found 3 bells and 5 dorayakis'\ndigits = re.findall(r'\\d', text)\nprint(digits)",
        "starterCode": "# Write a program using regex findall to extract digits\n"
    },
    {
        "id": 91,
        "title": "Classes and objects",
        "concept": "Object-oriented blueprint structures",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Classes and Objects",
            "subheading": "Object-Oriented Programming (OOP) foundation",
            "body": "<p>So far, we have written programs using variables and functions. <strong>Object-Oriented Programming (OOP)</strong> is a powerful way to organize programs by grouping variables (data) and functions (actions) together into entities called **Objects**.</p>\n\n<h3>The Metaphor: The 3D Printer Blueprint</h3>\n<p>Think of a **Class** like a digital <strong>3D Printer Blueprint</strong> file. The blueprint defines what a gadget looks like and what it does, but you cannot hold it or use it on its own. An **Object** is the actual physical, plastic gadget that comes out of the printer (the **Instance**). You can print dozens of gadgets from a single blueprint -- each gadget behaves the same, but has its own physical presence!</p>\n\n<h3>Defining a Class</h3>\n<p>We use the <code>class</code> keyword. Inside the class, variables are called **Attributes** and functions are called **Methods**:</p>\n<pre class=\"code-example\">class RobotCat:\n    # Attribute\n    color = \"blue\"\n\n    # Method\n    def meow(self):\n        print(\"Meow! I am Doraemon!\")</pre>\n\n<h3>Instantiating an Object</h3>\n<p>To print an object from our blueprint, we call the class name like a function:\n<pre class=\"code-example\">dora = RobotCat()  # Instantiate object\nprint(dora.color)  # Access attribute -> blue\ndora.meow()        # Call method -> Meow! I am Doraemon!</pre></p>\n\n<h3>What is self?</h3>\n<p>When you define a class method, the first parameter must always be **<code>self</code>**. It represents the specific object calling the method, allowing Python to access and update that object's variables.</p>"
        },
        "qna": [
            {
                "q": "What is Object-Oriented Programming (OOP)?",
                "a": "OOP is a programming paradigm that organizes code around objects (data structures) rather than actions and logic."
            },
            {
                "q": "What is the difference between a class and an object?",
                "a": "A **class** is a blueprint or template that defines properties and actions. An **object** is a concrete instance of that class containing real data."
            },
            {
                "q": "What is the role of the 'self' parameter?",
                "a": "<code>self</code> refers to the active object instance that is currently calling the method, allowing Python to access attributes belonging to that specific object."
            },
            {
                "q": "Do you need to pass an argument for 'self' when calling a method?",
                "a": "No. Python automatically passes the calling object as the first argument behind the scenes when you write <code>object.method()</code>."
            },
            {
                "q": "What is the difference between an attribute and a method?",
                "a": "An **attribute** is a variable defined inside a class that holds data. A **method** is a function defined inside a class that operates on the object's attributes."
            }
        ],
        "test": {
            "intro": "Test your OOP foundation knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword is used to define a new blueprint class in Python?",
                    "options": [
                        "object",
                        "def",
                        "class",
                        "blueprint"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "If you have a class named 'Gadget', how do you create an instance named 'door'?",
                    "options": [
                        "door = new Gadget()",
                        "door = Gadget()",
                        "door = Gadget.create()",
                        "class door(Gadget):"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the mandatory first parameter of methods defined inside a class?",
                    "options": [
                        "this",
                        "self",
                        "obj",
                        "me"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "An individual realization of a class template is called an _____. (object / attributes / variable / methods)",
                    "answer": "object"
                },
                {
                    "type": "fill",
                    "question": "Variables defined inside a class to hold data are called _____. (constructors / variables / methods / attributes)",
                    "answer": "attributes"
                },
                {
                    "type": "fill",
                    "question": "Functions defined inside a class to perform actions are called _____. (attributes / constructors / methods / variables)",
                    "answer": "methods"
                },
                {
                    "type": "tf",
                    "question": "A class can only have one object instantiated from it in any single program.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Object attributes can be read and modified after the object has been instantiated.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Methods must always have 'self' written as their first argument in the class definition.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain the blueprint analogy for classes and objects in your own words.",
                    "sampleAnswer": "A class is like an architectural blueprint for a house, defining the number of rooms and layout. An object is the actual physical house built from that blueprint. You can build multiple houses from a single blueprint."
                }
            ]
        },
        "scenario": "Doraemon wants you to define a basic class. Create a class named 'Gadget'. Inside it, define a method 'use(self)' that prints 'Gadget activated'. Then create an instance of 'Gadget' called 'door' and call 'door.use()'.",
        "hint": "Write: class Gadget: followed by def use(self): print('Gadget activated'). Then assign door = Gadget() and call door.use().",
        "wrongHint": "Make sure you call door.use() at the end to activate it!",
        "solution": "class Gadget:\n    def use(self):\n        print('Gadget activated')\n\ndoor = Gadget()\ndoor.use()",
        "starterCode": "# Define the class, instantiate door, and call the method\n"
    },
    {
        "id": 92,
        "title": "Constructor __init__",
        "concept": "Initializing properties on object instantiation",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Constructor __init__",
            "subheading": "Initializing object attributes dynamically",
            "body": "<p>In the previous level, we set the attribute <code>color = \"blue\"</code> directly in the class body. This means every object printed has the exact same color. To create objects with custom data upon creation, we use a constructor method called <strong><code>__init__</code></strong>.</p>\n\n<h3>The Metaphor: The Customization Panel</h3>\n<p>Think of the constructor like a <strong>Customization Panel</strong> on a factory conveyor belt. When you print a robot cat, you set its name, color, and pocket size on the control panel before pushing the start button. The constructor configures these settings on the product immediately during creation!</p>\n\n<h3>The __init__ Method</h3>\n<p>The <code>__init__</code> method (short for initialize) is a special \"dunder\" (double underscore) method that Python calls **automatically** the instant you instantiate an object:</p>\n<pre class=\"code-example\">class Gadget:\n    # The Constructor\n    def __init__(self, name, rank):\n        self.name = name  # Save argument to object\n        self.rank = rank\n\n# Create objects with custom data\ndoor = Gadget(\"Anywhere Door\", \"A\")\ncopter = Gadget(\"Bamboo Copter\", \"B\")\n\nprint(door.name)    # Anywhere Door\nprint(copter.name)  # Bamboo Copter</pre>\n<p>Inside the constructor, <code>self.name = name</code> binds the passed argument value to the new object instance's <code>name</code> attribute.</p>"
        },
        "qna": [
            {
                "q": "What is a constructor method in Python?",
                "a": "A constructor is a special method named <code>__init__</code> that Python automatically runs whenever a new object is created from a class."
            },
            {
                "q": "Why is the constructor method named __init__?",
                "a": "It stands for **initialize**. It is wrapped in double underscores (dunder) because it is a special built-in method in Python's class protocols."
            },
            {
                "q": "What happens if you do not define an __init__ method inside a class?",
                "a": "Python provides a default, empty constructor automatically behind the scenes, allowing you to instantiate objects without arguments."
            },
            {
                "q": "Can you define multiple constructor methods in a Python class?",
                "a": "No. Python only allows one constructor method. If you write multiple <code>__init__</code> definitions, the last one defined will overwrite the earlier ones."
            },
            {
                "q": "Can constructor parameters have default values?",
                "a": "Yes! You can define default arguments, e.g. <code>def __init__(self, name, rank=\"C\"):</code>, allowing objects to be created without specifying those parameters if they match the default."
            }
        ],
        "test": {
            "intro": "Test your constructor initialization knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which special method acts as the constructor in Python classes?",
                    "options": [
                        "__new__",
                        "__init__",
                        "__construct__",
                        "__start__"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "When is the __init__ constructor method executed?",
                    "options": [
                        "Only when explicitly called: obj.__init__()",
                        "Automatically when a new object is created",
                        "When the class is defined",
                        "When the program terminates"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "How do you pass arguments to the constructor?",
                    "options": [
                        "Inside parentheses when calling the class name",
                        "By writing arguments in a dictionary",
                        "By calling object.set_attributes()",
                        "Constructors cannot take arguments"
                    ],
                    "answer": 0
                },
                {
                    "type": "fill",
                    "question": "Methods wrapped in double underscores like __init__ are called _____ methods. (dunder / attributes / variables / methods)",
                    "answer": "dunder"
                },
                {
                    "type": "fill",
                    "question": "The first parameter of the constructor method must always be `_____`. (child / super / self / parent)",
                    "answer": "self"
                },
                {
                    "type": "fill",
                    "question": "To initialize an attribute named speed using a parameter s, write: self.speed = _____. (self / s / variable / dunder)",
                    "answer": "s"
                },
                {
                    "type": "tf",
                    "question": "The __init__ constructor must return a string value describing the object status.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You can assign default values to constructor parameters.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Using self.value inside __init__ creates an instance variable unique to that object.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain the difference between class attributes and instance attributes.",
                    "sampleAnswer": "Class attributes are shared by all objects created from that class. Instance attributes (defined using self inside __init__) are unique to each specific object."
                }
            ]
        },
        "scenario": "Nobita wants to customize his gadget. Define a class 'Gadget'. Write an '__init__(self, name)' method that assigns self.name = name. Instantiate a gadget named 'door' by passing 'Anywhere Door' as the argument, and print door.name.",
        "hint": "Write class Gadget:, then def __init__(self, name): self.name = name. Underneath, write door = Gadget('Anywhere Door') and print(door.name).",
        "wrongHint": "Make sure you assign self.name = name inside the constructor!",
        "solution": "class Gadget:\n    def __init__(self, name):\n        self.name = name\n\ndoor = Gadget('Anywhere Door')\nprint(door.name)",
        "starterCode": "# Define class with constructor, instantiate Anywhere Door, and print name\n"
    },
    {
        "id": 93,
        "title": "Inheritance",
        "concept": "Sharing code attributes between parent and child classes",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Inheritance",
            "subheading": "Reusing and extending existing class structures",
            "body": "<p>In software development, writing duplicate code is bad practice. If different classes share the same attributes or behaviors, we can make one class inherit them from another. This concept is called <strong>Inheritance</strong>.</p>\n\n<h3>Parent vs Child Classes</h3>\n<ul class=\"desc-list\">\n    <li><strong>Parent Class (Base Class):</strong> The class containing the shared structure.</li>\n    <li><strong>Child Class (Derived Class):</strong> The new class that inherits all attributes and methods from the parent.</li>\n</ul>\n<p>Think of it like a **Family Legacy**: Nobita inherits his family house (attributes) and rules (methods) from his father. However, Nobita can customize his room (extend the class) or override standard house rules (method overriding).</p>\n\n<h3>Syntax of Inheritance</h3>\n<p>To make a child class inherit, write the parent class name in parentheses after the child class name:</p>\n<pre class=\"code-example\">class Gadget:  # Parent Class\n    def __init__(self, name):\n        self.name = name\n\n    def activate(self):\n        print(f\"{self.name} is powered on!\")\n\nclass FlyingGadget(Gadget):  # Child Class inherits from Gadget\n    def fly(self):\n        print(f\"{self.name} floats into the sky!\")\n\ncopter = FlyingGadget(\"Bamboo Copter\")\ncopter.activate()  # Inherited method -> Bamboo Copter is powered on!\ncopter.fly()       # Child method -> Bamboo Copter floats into the sky!</pre>\n\n<h3>Method Overriding & super()</h3>\n<p>If a child class redefines a parent method, the child's version replaces the parent's (this is called **Overriding**). To call the parent's version of a method from inside the child class, use the **<code>super()</code>** function.</p>"
        },
        "qna": [
            {
                "q": "What is inheritance in OOP?",
                "a": "Inheritance allows a new class (child class) to adopt all attributes and methods of an existing class (parent class) automatically, promoting code reuse."
            },
            {
                "q": "How do you override a parent method in a child class?",
                "a": "Simply define a method in the child class with the exact same name as the method in the parent class. Python will use the child's version."
            },
            {
                "q": "What is the purpose of the super() function?",
                "a": "It returns a reference to the parent class, allowing the child class to call parent methods or constructors (e.g. <code>super().__init__(name)</code>)."
            },
            {
                "q": "Can a child class have its own new methods?",
                "a": "Yes! A child class inherits everything from the parent but can define its own unique attributes and methods to extend functionality."
            },
            {
                "q": "Does Python support inheriting from multiple parent classes?",
                "a": "Yes! This is called **Multiple Inheritance**. You separate parent classes with commas, e.g. <code>class Child(Parent1, Parent2):</code>."
            }
        ],
        "test": {
            "intro": "Test your inheritance and method overriding knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the class that gets inherited from called?",
                    "options": [
                        "Subclass",
                        "Child class",
                        "Parent class",
                        "Derived class"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "How do you define a class 'Dog' that inherits from a class 'Animal'?",
                    "options": [
                        "class Dog inherits Animal:",
                        "class Dog(Animal):",
                        "class Dog extends Animal:",
                        "class Dog is Animal:"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which function allows a child class to reference parent methods?",
                    "options": [
                        "parent()",
                        "base()",
                        "super()",
                        "this()"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "Redefining a parent class method inside a child class is called method _____. (overloading / inheritance / overriding / encapsulation)",
                    "answer": "overriding"
                },
                {
                    "type": "fill",
                    "question": "Inheriting from multiple parent classes in Python is called _____ inheritance. (hierarchical / multiple / multilevel / single)",
                    "answer": "multiple"
                },
                {
                    "type": "fill",
                    "question": "To call the parent constructor from a child constructor, write: _____().__init__(). (self / parent / child / super)",
                    "answer": "super"
                },
                {
                    "type": "tf",
                    "question": "A child class inherits private methods from the parent class too.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Method overriding allows a child class to implement its own custom logic for an inherited method.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "A Python class can only inherit from one single parent class.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the benefit of method overriding in a game development context.",
                    "sampleAnswer": "It allows specialized entities to respond uniquely to standard commands. For example, a base Enemy class might have a move() method, but a FlyingEnemy class can override move() to compute flight paths."
                }
            ]
        },
        "scenario": "Create parent and child classes. Define a class 'Gadget' with a method 'use(self)' that prints 'Activated'. Define a child class 'Copter(Gadget)' that overrides 'use(self)' to print 'Flying'. Instantiate 'Copter' as 'bamboo' and call 'bamboo.use()'.",
        "hint": "Define class Gadget: def use(self): print('Activated'). Define class Copter(Gadget): def use(self): print('Flying'). Instantiate bamboo = Copter() and run bamboo.use().",
        "wrongHint": "Make sure Copter inherits from Gadget and overrides use()!",
        "solution": "class Gadget:\n    def use(self):\n        print('Activated')\n\nclass Copter(Gadget):\n    def use(self):\n        print('Flying')\n\nbamboo = Copter()\nbamboo.use()",
        "starterCode": "# Define parent Gadget, child Copter, override use(), and call it\n"
    },
    {
        "id": 94,
        "title": "Encapsulation",
        "concept": "Restricting public access to object attributes",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Encapsulation",
            "subheading": "Hiding internal data and restricting direct access",
            "body": "<p>When designing objects, we want to prevent external code from modifying our internal data directly in ways that break the object. The concept of bundling data and restricting direct access to it is called <strong>Encapsulation</strong>.</p>\n\n<h3>The Metaphor: The Locked Control Panel</h3>\n<p>Think of it like the **Locked Control Panel** on Doraemon's back. While some controls are public (like talking or opening his pocket), the wiring configurations and memory systems are hidden under a locked cover (private attributes). Nobita cannot touch the wiring directly because he might break Doraemon; instead, he must use public interfaces (getter/setter buttons) that ensure settings remain safe!</p>\n\n<h3>Access Modifiers in Python</h3>\n<p>Unlike some languages, Python uses variable naming prefixes to signal access levels:\n<ul class=\"desc-list\">\n    <li><strong>Public (Default):</strong> Access from anywhere (e.g. <code>self.name</code>).</li>\n    <li><strong>Protected (one underscore):</strong> A warning indicating internal use only (e.g. <code>self._status</code>). Access is still allowed.</li>\n    <li><strong>Private (two underscores):</strong> Hidden from external access (e.g. <code>self.__pocket_code</code>). Causes an error if accessed directly.</li>\n</ul></p>\n\n<h3>Getters and Setters</h3>\n<p>To safely access or modify private attributes, we define public methods called **Getters** and **Setters**:</p>\n<pre class=\"code-example\">class Robot:\n    def __init__(self):\n        self.__battery = 100  # Private attribute\n\n    # Getter\n    def get_battery(self):\n        return self.__battery\n\n    # Setter\n    def set_battery(self, charge):\n        if 0 <= charge <= 100:  # Data validation!\n            self.__battery = charge\n\ndora = Robot()\ndora.set_battery(80)\nprint(dora.get_battery())  # Prints: 80</pre>"
        },
        "qna": [
            {
                "q": "What is Encapsulation?",
                "a": "Encapsulation is the practice of hiding an object's internal state (attributes) and requiring all interactions to go through public methods."
            },
            {
                "q": "How do you make an attribute private in Python?",
                "a": "By prefixing the attribute name with two leading underscores, for example, <code>self.__secret_key</code>."
            },
            {
                "q": "What is Name Mangling?",
                "a": "The mechanism Python uses to protect private attributes. It renames <code>__attribute</code> internally to <code>_ClassName__attribute</code>, making it harder to access from outside the class."
            },
            {
                "q": "What is the difference between protected (_) and private (__) attributes?",
                "a": "A single underscore is just a convention warning developers not to touch it directly. Double underscores trigger Python's name mangling, actively blocking direct outside access."
            },
            {
                "q": "Why use getter and setter methods?",
                "a": "They let you control how attributes are accessed and updated, enabling data validation (e.g. checking for negative numbers) before changing values."
            }
        ],
        "test": {
            "intro": "Test your encapsulation and access control knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which prefix marks an attribute as private in Python?",
                    "options": [
                        "Single underscore: _var",
                        "Double underscore: __var",
                        "Keyword: private var",
                        "Asterisk: *var"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the term for renaming private variables internally to prevent access?",
                    "options": [
                        "Encryption",
                        "Name Mangling",
                        "Data Hiding",
                        "Obfuscation"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What error is thrown if you try to read a private attribute 'dora.__battery' from outside?",
                    "options": [
                        "ValueError",
                        "NameError",
                        "AttributeError",
                        "TypeError"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "A method used to safely retrieve a private variable's value is called a _____. (method / constructor / setter / getter)",
                    "answer": "getter"
                },
                {
                    "type": "fill",
                    "question": "A method used to safely update a private variable's value is called a _____. (getter / setter / method / constructor)",
                    "answer": "setter"
                },
                {
                    "type": "fill",
                    "question": "An attribute prefixed with a single underscore (e.g., _state) is considered _____. (protected / setter / getter / variable)",
                    "answer": "protected"
                },
                {
                    "type": "tf",
                    "question": "Python variables and methods are public by default.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Encapsulation prevents developers from ever accessing internal values under any circumstance.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Private variables help prevent bugs by stopping external code from corrupting internal states.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Describe how name mangling affects an attribute '__val' inside a class 'Data'.",
                    "sampleAnswer": "Python renames '__val' to '_Data__val' internally. Attempting to call 'Data().__val' from outside raises an AttributeError because '__val' no longer exists under that exact name."
                }
            ]
        },
        "scenario": "Nobita is securing gadget settings. Define a class 'Robot'. Inside __init__, set a private attribute 'self.__battery = 100'. Define a getter method 'get_battery(self)' that returns self.__battery. Instantiate 'Robot' as 'dora', call 'get_battery()', and print the result.",
        "hint": "Define class Robot, write def __init__(self): self.__battery = 100, then write def get_battery(self): return self.__battery. Underneath, write dora = Robot() and print(dora.get_battery()).",
        "wrongHint": "Make sure you use double underscores for __battery and return it in get_battery()!",
        "solution": "class Robot:\n    def __init__(self):\n        self.__battery = 100\n    def get_battery(self):\n        return self.__battery\n\ndora = Robot()\nprint(dora.get_battery())",
        "starterCode": "# Define Robot with private __battery, getter, instantiate, and print\n"
    },
    {
        "id": 95,
        "title": "Polymorphism + Abstraction",
        "concept": "Implementing dynamic methods and class interfaces",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Polymorphism & Abstraction",
            "subheading": "Universal controls and clean templates",
            "body": "<p>In this level, we cover two advanced OOP concepts that make your code extremely flexible: <strong>Polymorphism</strong> and <strong>Abstraction</strong>.</p>\n\n<h3>1. Polymorphism (Many Shapes)</h3>\n<p>Polymorphism allows different classes to share the same method name but have different behaviors. Think of it like a **Universal Controller**: you click the red button (method call). If it is plugged into a TV, the TV turns on. If it is plugged into a helicopter, the blades spin. One button, different responses depending on the object!</p>\n<pre class=\"code-example\">class Door:\n    def use(self):\n        print(\"Open Anywhere Door\")\n\nclass Copter:\n    def use(self):\n        print(\"Fly Bamboo Copter\")\n\n# Polymorphic execution\nfor gadget in [Door(), Copter()]:\n    gadget.use()  # Same method call, different actions!</pre>\n\n<h3>2. Abstraction (Hiding Complexity)</h3>\n<p>Abstraction is hiding complex implementation details and showing only the essential features. It also lets you create **Templates** that child classes must follow.</p>\n<p>Python enforces abstraction using the built-in <strong><code>abc</code></strong> module. We inherit from <strong><code>ABC</code></strong> (Abstract Base Class) and mark methods using the <strong><code>@abstractmethod</code></strong> decorator. Abstract classes cannot be instantiated directly; they exist only to be inherited from!</p>\n<pre class=\"code-example\">from abc import ABC, abstractmethod\n\nclass AbstractGadget(ABC):  # Template class\n    @abstractmethod\n    def operate(self):\n        pass\n\nclass Door(AbstractGadget):\n    def operate(self):\n        print(\"Door is active\")\n\n# obj = AbstractGadget()  # TypeError! Cannot instantiate abstract class\ndoor = Door()             # Valid!</pre>"
        },
        "qna": [
            {
                "q": "What is Polymorphism?",
                "a": "Polymorphism means 'many shapes'. It allows different classes to define methods with the identical name, which can be executed interchangeably in a loop or function."
            },
            {
                "q": "What is Abstraction?",
                "a": "Abstraction is hiding internal logic details and exposing only the clean, essential interface functions to the user."
            },
            {
                "q": "What is an Abstract Base Class (ABC)?",
                "a": "An abstract class is a blueprint template class that cannot be instantiated directly. It forces child classes to implement its abstract methods."
            },
            {
                "q": "What happens if a child class forgets to implement an @abstractmethod?",
                "a": "Python will throw a <code>TypeError</code> when you try to instantiate the child class, protecting your interface contract."
            },
            {
                "q": "What is Duck Typing in Python's polymorphism?",
                "a": "Duck typing is dynamic typing where an object's suitability is determined by the presence of certain methods (e.g. having a <code>use()</code> method), rather than its strict inheritance from a parent class."
            }
        ],
        "test": {
            "intro": "Test your polymorphism and abstraction knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "What is the term for different classes having methods with the same name doing different tasks?",
                    "options": [
                        "Inheritance",
                        "Polymorphism",
                        "Encapsulation",
                        "Compilation"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "Which module must you import to create abstract base classes in Python?",
                    "options": [
                        "abstract",
                        "abc",
                        "oop",
                        "interface"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What happens if you try to instantiate an abstract base class directly?",
                    "options": [
                        "An object is created with empty attributes",
                        "The program hangs in an infinite loop",
                        "Python raises a TypeError",
                        "Nothing, it is allowed"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "To mark a method as abstract in your parent template, use the decorator @_____-method (replace '-' with nothing). (constructor / abstractmethod / setter / getter)",
                    "answer": "abstractmethod"
                },
                {
                    "type": "fill",
                    "question": "ABC stands for Abstract Base _____. (Class / else / if / elif)",
                    "answer": "Class"
                },
                {
                    "type": "fill",
                    "question": "The concept of matching objects by method interfaces rather than strict type checks is called _____ typing. (variable / Class / abstractmethod / duck)",
                    "answer": "duck"
                },
                {
                    "type": "tf",
                    "question": "Abstract base classes can contain regular, fully implemented methods alongside abstract methods.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Polymorphism makes it easier to extend code because we can add new classes without changing existing loops.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "An abstract method is defined using the standard 'def' keyword but contains no working body (often using 'pass').",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Describe the main benefit of Abstraction in software architecture.",
                    "sampleAnswer": "Abstraction allows developers to establish structural templates that guarantee child classes implement required methods, reducing architectural errors and hiding complex subroutines."
                }
            ]
        },
        "scenario": "Nobita is testing polymorphism. Define two classes: 'Door' and 'Copter'. Both must have a method 'use(self)'. 'Door.use' prints 'Open'. 'Copter.use' prints 'Fly'. Define a function 'run_gadget(obj)' that calls 'obj.use()'. Instantiate both classes, and call 'run_gadget' on each.",
        "hint": "Define class Door with use() printing 'Open'. Define class Copter with use() printing 'Fly'. Define def run_gadget(obj): obj.use(). Run run_gadget(Door()) and run_gadget(Copter()).",
        "wrongHint": "Make sure you define the function run_gadget and call it with instances of both classes!",
        "solution": "class Door:\n    def use(self):\n        print('Open')\n\nclass Copter:\n    def use(self):\n        print('Fly')\n\ndef run_gadget(obj):\n    obj.use()\n\nrun_gadget(Door())\nrun_gadget(Copter())",
        "starterCode": "# Define Door and Copter, create run_gadget(), and execute polymorphic calls\n"
    },
    {
        "id": 96,
        "title": "Lambda + map() + filter()",
        "concept": "Functional programming tools in Python",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Lambda + map() + filter()",
            "subheading": "Compact functional programming tools",
            "body": "<p>In Python, we can write cleaner, shorter code for processing collections by using functional programming tools: **Lambda** functions, **map()**, and **filter()**.</p>\n\n<h3>1. Lambda Functions (Anonymous Functions)</h3>\n<p>A **Lambda** function is a small, anonymous (unnamed) function defined in a single line using the <code>lambda</code> keyword. It can take any number of arguments but can only contain **one single expression**:</p>\n<pre class=\"code-example\"># Regular function\ndef double(x):\n    return x * 2\n\n# Equivalent Lambda function\ndouble_lambda = lambda x: x * 2\nprint(double_lambda(5))  # Prints: 10</pre>\n<p>Think of a lambda function like a temporary **Disposable Mini-Gadget**: you build it on the spot to do a quick job, and throw it away once you are done!</p>\n\n<h3>2. The map() Function (The Conveyor Belt)</h3>\n<p>The <strong><code>map(func, iterable)</code></strong> function takes a function and applies it to **every item** in a list (or other iterable). It acts like a **Factory Conveyor Belt**, modifying each item as it passes by:</p>\n<pre class=\"code-example\">nums = [1, 2, 3]\ndoubled = list(map(lambda x: x * 2, nums))\nprint(doubled)  # Prints: [2, 4, 6]</pre>\n\n<h3>3. The filter() Function (The Sorting Gate)</h3>\n<p>The <strong><code>filter(func, iterable)</code></strong> function filters items from a collection, keeping only the elements that satisfy a condition (where the function returns <code>True</code>). It acts like a **Sorting Gate**, letting only non-broken gadgets through:</p>\n<pre class=\"code-example\">nums = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)  # Prints: [2, 4, 6]</pre>"
        },
        "qna": [
            {
                "q": "What is a lambda function in Python?",
                "a": "A lambda function is an anonymous, single-line function defined using the <code>lambda</code> keyword instead of <code>def</code>. It is used for short, throwaway operations."
            },
            {
                "q": "Can a lambda function contain multiple lines of code?",
                "a": "No. Lambda functions are strictly limited to a single expression. They cannot contain statements, loops, or multiple lines of logic."
            },
            {
                "q": "What does map() return?",
                "a": "It returns a <code>map</code> iterator object. To convert it into a standard Python list, you must wrap it in the <code>list()</code> function, e.g. <code>list(map(...))</code>."
            },
            {
                "q": "What is the key difference between map() and filter()?",
                "a": "<code>map()</code> applies a transformation to **every** item, returning a collection of the same size with modified values. <code>filter()</code> runs a true/false condition check, returning a smaller collection containing only the unchanged original items that passed the test."
            },
            {
                "q": "Do lambda functions require a 'return' statement?",
                "a": "No. The result of the single expression inside a lambda function is returned automatically."
            }
        ],
        "test": {
            "intro": "Test your functional programming knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword is used to declare an anonymous, single-line function?",
                    "options": [
                        "def",
                        "lambda",
                        "inline",
                        "anonymous"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the output of 'list(map(lambda x: x + 1, [10, 20]))'?",
                    "options": [
                        "[11, 21]",
                        "[10, 20]",
                        "30",
                        "[11]"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "Which function is used to selectively filter out elements from an iterable based on a condition?",
                    "options": [
                        "map()",
                        "filter()",
                        "select()",
                        "reduce()"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "To convert the iterator returned by map() into a list, wrap it in the _____() function. (int / float / str / list)",
                    "answer": "list"
                },
                {
                    "type": "fill",
                    "question": "A lambda function is defined on a single line and contains exactly one _____. (2 / expression / list / variable)",
                    "answer": "expression"
                },
                {
                    "type": "fill",
                    "question": "To write a lambda that returns the square of x, write: lambda x: x ** _____. (4 / 3 / 2 / 1)",
                    "answer": "2"
                },
                {
                    "type": "tf",
                    "question": "Lambda functions can accept multiple input parameters.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Using map() alters the original input list in place.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "If filter() receives a function that always returns True, the output list will match the input list.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain the benefit of using lambda functions as arguments inside map() or filter().",
                    "sampleAnswer": "It allows developers to write short, anonymous transformations or filters directly where they are needed, without cluttering the global namespace with small, single-use function definitions."
                }
            ]
        },
        "scenario": "Doraemon wants to double the prices of gadgets. Given a list prices = [10, 20, 30], use map() and a lambda function to double each price, convert the result to a list, store it in 'double_prices', and print 'double_prices'.",
        "hint": "Write prices = [10, 20, 30], then assign double_prices = list(map(lambda x: x * 2, prices)), and print(double_prices).",
        "wrongHint": "Make sure you double the prices and wrap map in list() before printing!",
        "solution": "prices = [10, 20, 30]\ndouble_prices = list(map(lambda x: x * 2, prices))\nprint(double_prices)",
        "starterCode": "# Double the list prices using map and lambda, then print the result list\n"
    },
    {
        "id": 97,
        "title": "Decorators + Generators + yield",
        "concept": "Modifying functions and streaming memory data",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Decorators & Generators",
            "subheading": "Advanced function modifications and streaming iterators",
            "body": "<p>In this level, we cover two powerful tools for advanced function control: <strong>Decorators</strong> and <strong>Generators</strong>.</p>\n\n<h3>1. Decorators (The Upgrader)</h3>\n<p>A **Decorator** is a function that takes another function as input, extends or changes its behavior, and returns a new wrapper function. We apply decorators using the **<code>@</code>** symbol.</p>\n<p>Think of a decorator like a **Gadget Upgrader** (e.g. the Big Light): you wrap your core tool (the function) with it, and it suddenly gains extra abilities (like printing run timers or logging access) without you rewriting the tool's inner circuits!</p>\n<pre class=\"code-example\">def logger_decorator(func):\n    def wrapper():\n        print(\"--- Gadget starting ---\")\n        func()\n        print(\"--- Gadget shutdown ---\")\n    return wrapper\n\n@logger_decorator\ndef use_door():\n    print(\"Entering Anywhere Door\")\n\nuse_door() # Prints both start/stop lines along with the door message!</pre>\n\n<h3>2. Generators & yield (The Infinite Snack Dispenser)</h3>\n<p>Normal functions calculate a list of results and return them all at once. If the list has a million items, it eats up massive RAM memory. A **Generator** function generates values **one at a time, on demand**, using the **<code>yield</code>** keyword.</p>\n<p>Think of it like a **Dorayaki Dispenser**: instead of preparing a million snacks in advance and stuffing them in your pocket (clogging RAM), the dispenser yields one fresh snack only when you click the button (using `next()`), saving space!</p>\n<pre class=\"code-example\">def count_generator():\n    yield 1\n    yield 2\n    yield 3\n\ngen = count_generator()\nprint(next(gen))  # Prints: 1\nprint(next(gen))  # Prints: 2 (resumes right where it left off!)</pre>"
        },
        "qna": [
            {
                "q": "What is a decorator in Python?",
                "a": "A decorator is a function that wraps another function to modify or augment its behavior without directly modifying the wrapped function's code."
            },
            {
                "q": "What does the '@' symbol do?",
                "a": "It is syntactic sugar used to apply a decorator function to the function defined directly below it."
            },
            {
                "q": "What is a generator function?",
                "a": "A generator is a function that uses the <code>yield</code> keyword instead of <code>return</code>. It returns a lazy iterator that computes values one by one on the fly."
            },
            {
                "q": "What is the difference between yield and return?",
                "a": "<code>return</code> terminates a function and sends back a value. <code>yield</code> sends back a value but **pauses** the function, saving its state, so execution can resume from that exact line on the next request."
            },
            {
                "q": "What exception is raised when a generator runs out of items?",
                "a": "It raises a <code>StopIteration</code> exception, which signals loops like <code>for</code> to stop calling <code>next()</code>."
            }
        ],
        "test": {
            "intro": "Test your decorators and generators knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword is used inside a generator function to produce values?",
                    "options": [
                        "return",
                        "yield",
                        "produce",
                        "emit"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the standard function used to fetch the next value from a generator?",
                    "options": [
                        "generator.get()",
                        "next()",
                        "continue()",
                        "generator.next()"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "How do you apply a decorator named 'my_decorator' to a function 'my_func'?",
                    "options": [
                        "my_decorator(my_func)",
                        "wrapper: my_decorator my_func",
                        "@my_decorator placed above my_func definition",
                        "decorators.apply(my_decorator, my_func)"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The symbol used to apply decorators in Python is _____. (* / - / @ / +)",
                    "answer": "@"
                },
                {
                    "type": "fill",
                    "question": "Generator functions are highly efficient because they save _____ usage. (Stop / memory / variable / @)",
                    "answer": "memory"
                },
                {
                    "type": "fill",
                    "question": "When a generator has no more values to yield, it raises a _____Iteration exception. (NameError / TypeError / Stop / SyntaxError)",
                    "answer": "Stop"
                },
                {
                    "type": "tf",
                    "question": "A generator function can contain multiple yield statements.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Decorators modify the underlying source code file of the function they wrap.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Calling next() on a generator resumes execution from the line immediately following the last executed yield statement.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Explain why generators are preferred over lists for streaming huge datasets.",
                    "sampleAnswer": "Lists load all data into RAM at once, which can cause out-of-memory errors for huge datasets. Generators yield one item at a time, keeping memory footprint constant and minimal."
                }
            ]
        },
        "scenario": "Nobita wants to make a generator for numbers. Write a generator function named 'count_up(n)' that yields numbers from 1 to n (inclusive) using a for loop. Instantiate the generator for 3 as 'gen = count_up(3)', and print each value using next(gen) three times.",
        "hint": "Define count_up(n) with a for loop that yields numbers. Create gen = count_up(3). Print next(gen) three times.",
        "wrongHint": "Make sure you print next(gen) exactly three times and call yield inside count_up!",
        "solution": "def count_up(n):\n    for i in range(1, n + 1):\n        yield i\n\ngen = count_up(3)\nprint(next(gen))\nprint(next(gen))\nprint(next(gen))",
        "starterCode": "# Define count_up generator, instantiate, and print next values\n"
    },
    {
        "id": 98,
        "title": "APIs with requests + working with JSON",
        "concept": "Fetching data from web APIs",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "APIs & Web requests",
            "subheading": "Connecting Python to the internet",
            "body": "<p>Almost all modern software interacts with web servers to get updates, fetch weather, or save data. We do this by sending requests to <strong>APIs</strong> (Application Programming Interfaces) using Python's industry-standard <strong><code>requests</code></strong> library.</p>\n\n<h3>The Metaphor: The Pocket Communicator</h3>\n<p>Think of sending an API request like Doraemon using his **Pocket Communicator** gadget: he dials a code (sends an HTTP GET request to a URL) to contact a future department store database. The store packages up a response envelope (JSON payload) and beams it back. Doraemon unpacks the envelope and reads the items inside!</p>\n\n<h3>Fetching API Data (.get)</h3>\n<p>To retrieve data from a URL, we use <code>requests.get()</code>. The server replies with a response object containing a **Status Code** (e.g. 200 means success, 404 means not found):</p>\n<pre class=\"code-example\">import requests\n\nresponse = requests.get(\"https://api.github.com/users/octocat\")\nprint(response.status_code) # Prints: 200</pre>\n\n<h3>Parsing JSON response (.json)</h3>\n<p>API data is sent back as JSON text. To convert this text payload into a Python dictionary, we call the **<code>.json()</code>** method:</p>\n<pre class=\"code-example\">data = response.json() # Convert to dict\nprint(data[\"name\"])    # Access key -> The Octocat\nprint(type(data))      # Prints: &lt;class 'dict'&gt;</pre>"
        },
        "qna": [
            {
                "q": "What is an API?",
                "a": "API stands for **Application Programming Interface**. It is a set of rules allowing different software applications to communicate and exchange data with one another."
            },
            {
                "q": "Do we need to install the requests library?",
                "a": "Yes, <code>requests</code> is a third-party library. You install it in your environment using the terminal command: <code>pip install requests</code>."
            },
            {
                "q": "What does a status code of 200 mean?",
                "a": "It indicates that the HTTP request was successful and the server has returned the requested resource."
            },
            {
                "q": "How do you parse a JSON response into a Python dictionary?",
                "a": "By calling the <code>.json()</code> method on the response object, e.g. <code>my_dict = response.json()</code>."
            },
            {
                "q": "What is the difference between GET and POST requests?",
                "a": "A **GET** request retrieves data from a server. A **POST** request sends new data to a server to create or update resources."
            }
        ],
        "test": {
            "intro": "Test your web requests and API integration knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which HTTP method is used to retrieve data from a server?",
                    "options": [
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE"
                    ],
                    "answer": 0
                },
                {
                    "type": "mcq",
                    "question": "What is the status code for a successful HTTP request?",
                    "options": [
                        "404",
                        "500",
                        "200",
                        "301"
                    ],
                    "answer": 2
                },
                {
                    "type": "mcq",
                    "question": "Which method extracts and parses JSON text into a Python dict/list?",
                    "options": [
                        "response.parse()",
                        "response.json()",
                        "response.text()",
                        "response.dict()"
                    ],
                    "answer": 1
                },
                {
                    "type": "fill",
                    "question": "The library used to make HTTP calls in Python is called _____. (Interface / not found / requests / variable)",
                    "answer": "requests"
                },
                {
                    "type": "fill",
                    "question": "An HTTP status code of 404 represents a resource _____ error. (variable / requests / not found / Interface)",
                    "answer": "not found"
                },
                {
                    "type": "fill",
                    "question": "API stands for Application Programming _____. (Interface / not found / requests / Variable)",
                    "answer": "Interface"
                },
                {
                    "type": "tf",
                    "question": "The requests library is built into Python by default.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "A status code of 500 indicates an issue on the client's end, not the server's.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "You can send headers and query parameters alongside a requests.get() call.",
                    "answer": "true"
                },
                {
                    "type": "short",
                    "question": "Describe what happens if you attempt to call .json() on a response that is not in JSON format.",
                    "sampleAnswer": "Python raises a requests.exceptions.JSONDecodeError or json.decoder.JSONDecodeError because the text payload cannot be parsed into a dictionary."
                }
            ]
        },
        "scenario": "Nobita is querying an API. Write a program: import requests, simulate getting data from 'https://api.example.com' using requests.get(), save the response in 'res', call res.json() and store the output in 'data', and print 'data'.",
        "hint": "Import requests, assign res = requests.get('https://api.example.com'), assign data = res.json(), and print(data).",
        "wrongHint": "Make sure you call requests.get and print res.json() output!",
        "solution": "import requests\nres = requests.get('https://api.example.com')\ndata = res.json()\nprint(data)",
        "starterCode": "# Write a program to query an API and print parsed JSON data\n"
    },
    {
        "id": 99,
        "title": "Multithreading + Async programming",
        "concept": "Executing code concurrently and non-blocking",
        "sections": [
            "description",
            "qna",
            "test",
            "coding"
        ],
        "description": {
            "heading": "Concurrency in Python",
            "subheading": "Multithreading vs Asynchronous programming",
            "body": "<p>By default, Python runs code line-by-line in a single sequence. If one line takes 10 seconds (like loading a webpage), the entire program halts. To run tasks in parallel or prevent blocking, we use <strong>Concurrency</strong>: **Multithreading** or **Async programming**.</p>\n\n<h3>1. Multithreading (The Clones)</h3>\n<p>Multithreading spins up background lines of execution (threads) to run tasks at the same time. Think of it like using Doraemon's **Clone Liquid** to create multiple Nobitas. Each clone tackles a separate chore concurrently! It is ideal for I/O-bound tasks (waiting on disks or networks):</p>\n<pre class=\"code-example\">import threading\n\ndef check_mail():\n    print(\"Checking mail...\")\n\nt = threading.Thread(target=check_mail)\nt.start()  # Runs check_mail in the background!</pre>\n\n<h3>2. Async programming (The Multitasking Chef)</h3>\n<p>Async programming runs on a **single thread** using an **Event Loop**. Instead of waiting idle for a task (like preheating the oven), the program switches to do something else (like cutting vegetables) and returns once the oven is hot. We write async code using <strong><code>asyncio</code></strong>, **<code>async def</code>** (coroutines), and **<code>await</code>**:</p>\n<pre class=\"code-example\">import asyncio\n\nasync def main():\n    print(\"Boiling water...\")\n    await asyncio.sleep(2)  # Non-blocking wait!\n    print(\"Tea is ready!\")\n\n# Run the event loop\nasyncio.run(main())</pre>"
        },
        "qna": [
            {
                "q": "What is the difference between CPU-bound and I/O-bound tasks?",
                "a": "CPU-bound tasks require constant calculations (e.g. heavy math). I/O-bound tasks spend most of their time waiting for external events (e.g. database query, internet page load)."
            },
            {
                "q": "What is the Global Interpreter Lock (GIL)?",
                "a": "The GIL is a lock in standard Python (CPython) that allows only one thread to control the interpreter at a time, meaning multithreading in Python does not achieve true parallel CPU execution on multiple cores."
            },
            {
                "q": "What does the 'async def' keyword do?",
                "a": "It defines a **coroutine** function, which can suspend its execution to let other coroutines run before it finishes."
            },
            {
                "q": "What does the 'await' keyword do?",
                "a": "It pauses the execution of the coroutine and yields control back to the event loop, allowing other async tasks to run while waiting."
            },
            {
                "q": "Why use Async programming instead of Multithreading?",
                "a": "Async programming uses a single thread, consuming much less memory and avoiding complex multi-threaded concurrency bugs (like race conditions or deadlocks)."
            }
        ],
        "test": {
            "intro": "Test your Python concurrency knowledge!",
            "questions": [
                {
                    "type": "mcq",
                    "question": "Which keyword is used to declare an asynchronous coroutine function?",
                    "options": [
                        "thread",
                        "async",
                        "await",
                        "parallel"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What is the purpose of the 'await' keyword inside a coroutine?",
                    "options": [
                        "It crashes the thread",
                        "It pauses execution of the coroutine until the awaited task is done",
                        "It speeds up math calculations",
                        "It defines a variable"
                    ],
                    "answer": 1
                },
                {
                    "type": "mcq",
                    "question": "What CPython feature restricts multi-core parallel CPU execution for threads?",
                    "options": [
                        "The Garbage Collector",
                        "The Event Loop",
                        "The GIL (Global Interpreter Lock)",
                        "The thread pool"
                    ],
                    "answer": 2
                },
                {
                    "type": "fill",
                    "question": "The standard library module used for asynchronous event loops is _____. (variable / sleep / start / asyncio)",
                    "answer": "asyncio"
                },
                {
                    "type": "fill",
                    "question": "To start a thread object 't', run: t._____(). (asyncio / sleep / variable / start)",
                    "answer": "start"
                },
                {
                    "type": "fill",
                    "question": "Instead of blocking time.sleep(), async uses non-blocking asyncio._____(). (asyncio / sleep / variable / start)",
                    "answer": "sleep"
                },
                {
                    "type": "tf",
                    "question": "You can use the 'await' keyword outside of an 'async def' function body.",
                    "answer": "false"
                },
                {
                    "type": "tf",
                    "question": "Asynchronous code runs on a single thread and multitasking is managed by an event loop.",
                    "answer": "true"
                },
                {
                    "type": "tf",
                    "question": "Multithreading is highly recommended for speeding up heavy matrix multiplication math.",
                    "answer": "false"
                },
                {
                    "type": "short",
                    "question": "Explain the multitasking chef analogy for async programming.",
                    "sampleAnswer": "A single chef prepares a meal. Instead of waiting idle doing nothing while water boils, the chef moves to chop vegetables, returning to the water once it starts boiling, making single-threaded multitasking highly efficient."
                }
            ]
        },
        "scenario": "Nobita wants to write an async function. Write a coroutine function 'async def greet()' that prints 'Hello', awaits 'asyncio.sleep(1)' to pause for 1 second, and prints 'World'.",
        "hint": "Write: async def greet():, then indent print('Hello'), await asyncio.sleep(1), and print('World').",
        "wrongHint": "Make sure you use async def and await asyncio.sleep(1) inside the coroutine!",
        "solution": "import asyncio\nasync def greet():\n    print('Hello')\n    await asyncio.sleep(1)\n    print('World')",
        "starterCode": "import asyncio\n# Define the coroutine function greet()\n"
    },
    {
        "id": 100,
        "title": "Final Project & Certificate",
        "concept": "Submit your project and GitHub link to receive your certificate!",
        "sections": [
            "coding"
        ],
        "scenario": "Choose one of the 4 project types, enter your name, enter your GitHub repository link, paste your project code, and click Submit to claim your certificate.",
        "hint": "Fill out the project submission form, paste your code, and click Submit.",
        "wrongHint": "Make sure you fill out all fields and write a project!",
        "solution": "",
        "starterCode": "# Paste your completed final project code here..."
    }
];
