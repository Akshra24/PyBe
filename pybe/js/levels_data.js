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
                    "question": "The set of grammar rules in a programming language is called its _____. (syntax / vocabulary / voice / font)",
                    "answer": "syntax"
                },
                {
                    "type": "fill",
                    "question": "A complete set of instructions that tells a computer to accomplish a task is called a _____. (program / recipe / document / image)",
                    "answer": "program"
                },
                {
                    "type": "fill",
                    "question": "Python was designed to be _____ and easy to read. (complex / beautiful / readable / expensive)",
                    "answer": "readable"
                },
                {
                    "type": "fill",
                    "question": "A single instruction written in a programming language is called _____. (code / music / art / speech)",
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
                    "question": "Python's Virtual Machine (PVM) reads and executes _____, which is an intermediate step between source code and machine code.",
                    "answer": "bytecode"
                },
                {
                    "type": "fill",
                    "question": "The phase where Python checks your code for correct grammar before running it is called _____.",
                    "answer": "syntax checking"
                },
                {
                    "type": "fill",
                    "question": "A language that translates and executes code one line at a time, in real time, is called an _____ language.",
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
                    "question": "The part of a website that you actually see and interact with is called the _____. (frontend / backend / database / server)",
                    "answer": "frontend"
                },
                {
                    "type": "fill",
                    "question": "When Python checks your code for grammatical correctness before running it, this is called _____. (compiling / syntax checking / debugging / rendering)",
                    "answer": "syntax checking"
                },
                {
                    "type": "fill",
                    "question": "A bug where your code runs without crashing but produces the wrong output is called a _____ error. (syntax / runtime / logic / type)",
                    "answer": "logic"
                },
                {
                    "type": "fill",
                    "question": "Python is most commonly used in the _____ part of a web application. (frontend / backend / database / browser UI)",
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
                    "question": "Python was created in the year _____. (1989 / 1991 / 1995 / 2000)",
                    "answer": "1991"
                },
                {
                    "type": "fill",
                    "question": "The set of guiding principles for Python's design is called the _____ of Python. (rules / guidelines / zen / philosophy)",
                    "answer": "zen"
                },
                {
                    "type": "fill",
                    "question": "Python 2 was officially retired in the year _____. (2018 / 2019 / 2020 / 2021)",
                    "answer": "2020"
                },
                {
                    "type": "fill",
                    "question": "The company where Guido van Rossum worked on Python's ecosystem is _____. (Google / Microsoft / Apple / Amazon)",
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
                    "question": "Python script files must be saved with the _____ file extension.",
                    "answer": "py"
                },
                {
                    "type": "fill",
                    "question": "In IDLE, you can run a saved script file by pressing the _____ key on your keyboard. (F1 / F5 / Tab / Enter)",
                    "answer": "F5"
                },
                {
                    "type": "fill",
                    "question": "The environment that runs code line-by-line instantly but doesn't save it is called the interactive _____.",
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
                    "question": "Python is _____ -- meaning print() and Print() are treated as completely different instructions.",
                    "answer": "case-sensitive"
                },
                {
                    "type": "fill",
                    "question": "The brackets () after the word print are called _____.",
                    "answer": "parentheses"
                },
                {
                    "type": "fill",
                    "question": "In Python, a sequence of characters inside quotation marks is called a _____.",
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
                    "question": "In Python, you can write a comment by placing the _____ character at the start of the line.",
                    "answer": "hash"
                },
                {
                    "type": "fill",
                    "question": "Adding a hash symbol in front of a line of code to temporarily disable it is called _____ out code.",
                    "answer": "commenting"
                },
                {
                    "type": "fill",
                    "question": "Comments are written for _____ to read, not the computer interpreter.",
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
                    "question": "The symbol '=' used to store a value in a variable is called the _____ operator.",
                    "answer": "assignment"
                },
                {
                    "type": "fill",
                    "question": "If you try to print a variable that hasn't been created yet, Python raises a _____Error.",
                    "answer": "name"
                },
                {
                    "type": "fill",
                    "question": "Variables are stored in the computer's _____ while your program runs.",
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
                    "question": "The variable naming convention where words are separated by underscores is called _____ case.",
                    "answer": "snake"
                },
                {
                    "type": "fill",
                    "question": "If you try to use an invalid variable name, Python raises a _____Error.",
                    "answer": "syntax"
                },
                {
                    "type": "fill",
                    "question": "Variable names can only start with a letter or the _____ character.",
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Basic Data Types",
            "subheading": "Integers, Floats, Strings, and Booleans",
            "body": "<p>In programming, computers don't just store generic values; they classify data into specific categories called <strong>data types</strong>. Knowing the data type tells Python what kind of value it is and what operations can be performed on it.</p>\n\n<h3>The 4 Core Data Types in Python</h3>\n<ul class=\"desc-list\">\n    <li><strong>Integer (<code>int</code>):</strong> Whole numbers without decimal points. They can be positive, negative, or zero. Examples: <code>10</code>, <code>-5</code>, <code>0</code>.</li>\n    <li><strong>Floating-Point (<code>float</code>):</strong> Decimal numbers. Used for precise math. Examples: <code>3.14</code>, <code>-10.5</code>, <code>0.0</code>.</li>\n    <li><strong>String (<code>str</code>):</strong> Text values enclosed inside quotation marks. Anything inside quotes is a string, even numbers! Examples: <code>\"Doraemon\"</code>, <code>'Python'</code>, <code>\"123\"</code>.</li>\n    <li><strong>Boolean (<code>bool</code>):</strong> Logical values that can only be either <code>True</code> or <code>False</code>. First letters must be capitalized! Examples: <code>True</code>, <code>False</code>.</li>\n</ul>\n\n<h3>Checking Data Types with type()</h3>\n<p>Python has a built-in function called <code>type()</code> that tells you the exact type of any value or variable:</p>\n\n<pre class=\"code-example\">print(type(42))        # Outputs: &lt;class 'int'&gt;\nprint(type(9.9))       # Outputs: &lt;class 'float'&gt;\nprint(type(\"Hello\"))   # Outputs: &lt;class 'str'&gt;\nprint(type(True))      # Outputs: &lt;class 'bool'&gt;</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Strings vs Numbers:</strong> Be careful! <code>print(type(5))</code> is an <code>int</code>, but <code>print(type(\"5\"))</code> is a <code>str</code>. You cannot perform mathematical operations on text numbers without converting them first!</div>\n</div>"
        },

        "qna": [
            { "q": "What is a data type?", "a": "A data type is an attribute of data which tells the Python interpreter how the programmer intends to use the data (e.g. as a text string, as a decimal number, or as a true/false value)." },
            { "q": "What is the difference between int and float?", "a": "An <strong>int</strong> (integer) represents a whole number with no decimals (e.g. <code>7</code>). A <strong>float</strong> (floating-point number) represents a number with a decimal point (e.g. <code>7.0</code> or <code>3.14</code>)." },
            { "q": "Why are booleans capitalized in Python?", "a": "Python syntax mandates that boolean logical values must be written exactly as <code>True</code> and <code>False</code> (with uppercase 'T' and 'F'). Lowercase <code>true</code> or <code>false</code> will be treated as variable names and trigger a **NameError**." },
            { "q": "Is '99' treated as a number in Python?", "a": "<strong>No.</strong> Because it is surrounded by quotes, Python treats <code>\"99\"</code> as a text string (<code>str</code>). If you try to add a number to it, like <code>\"99\" + 1</code>, Python will throw a **TypeError**." },
            { "q": "How do I check the data type of a variable?", "a": "You can pass the variable into the built-in <code>type()</code> function. For example, calling <code>print(type(my_variable))</code> will output the class of the data type." }
        ],

        "test": {
            "intro": "Let's test your understanding of Python's basic data types!",
            "questions": [
                { "type": "mcq", "question": "What is the data type of the value 5.5?", "options": ["int", "float", "str", "bool"], "answer": 1 },
                { "type": "mcq", "question": "Which of the following is a valid boolean value in Python?", "options": ["\"True\"", "true", "True", "1"], "answer": 2 },
                { "type": "mcq", "question": "What does type(\"100\") return?", "options": ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'bool'>"], "answer": 1 },
                { "type": "fill", "question": "A decimal number like 12.34 belongs to the _____ data type in Python.", "answer": "float" },
                { "type": "fill", "question": "The logical data type that holds only True or False values is called _____.", "answer": "bool" },
                { "type": "fill", "question": "Whole numbers like -50 belong to the _____ data type.", "answer": "int" },
                { "type": "tf", "question": "In Python, True and true are identical and can be used interchangeably.", "answer": "false" },
                { "type": "tf", "question": "A string data type can contain letters, numbers, and symbols inside quotation marks.", "answer": "true" },
                { "type": "tf", "question": "The statement x = 10.0 creates an integer variable.", "answer": "false" },
                { "type": "short", "question": "Explain why x = 40 and y = \"40\" are different data types, and how that impacts operations on them.", "sampleAnswer": "The variable x is an integer (int) because it is a whole number without quotation marks, while y is a string (str) because it is enclosed in quotes. You can perform mathematical operations on x (like adding or multiplying), but performing math on y (like y + 5) will cause a TypeError because you cannot add a number to text." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Type Conversion & Casting",
            "subheading": "Converting data categories manually and automatically",
            "body": "<p>In Python, you often need to convert values from one data type to another. For example, you cannot do math with a string like <code>\"5\"</code> -- you must convert it to a number first. This process is called <strong>Type Conversion</strong> or <strong>Type Casting</strong>.</p>\n\n<h3>1. Implicit Type Conversion (Automatic)</h3>\n<p>Sometimes, Python converts data types automatically. For example, if you add an integer to a float, Python will convert the integer to a float first so that it doesn't lose decimal precision:</p>\n\n<pre class=\"code-example\">result = 10 + 5.5\nprint(result)  # Outputs: 15.5\nprint(type(result))  # Outputs: &lt;class 'float'&gt;</pre>\n\n<h3>2. Explicit Type Casting (Manual)</h3>\n<p>To convert data types manually, you use built-in functions. Here are the most common ones:</p>\n<ul class=\"desc-list\">\n    <li><strong><code>int()</code>:</strong> Converts a value to an integer. If converting a float, it chops off the decimal part (truncation). Example: <code>int(7.9)</code> becomes <code>7</code>.</li>\n    <li><strong><code>float()</code>:</strong> Converts a value to a float. Example: <code>float(5)</code> becomes <code>5.0</code>.</li>\n    <li><strong><code>str()</code>:</strong> Converts a value to a text string. Example: <code>str(42)</code> becomes <code>\"42\"</code>.</li>\n    <li><strong><code>bool()</code>:</strong> Converts a value to a boolean. Zero (<code>0</code>), <code>None</code>, and empty containers (like <code>\"\"</code>) become <code>False</code>; all other values become <code>True</code>.</li>\n</ul>\n\n<h3>Common Type Casting Pitfalls</h3>\n<p>Trying to cast incompatible types will trigger a <strong>ValueError</strong>. For example, writing <code>int(\"hello\")</code> or <code>int(\"5.5\")</code> directly will crash your program. To convert the string <code>\"5.5\"</code> to an integer, you must first convert it to a float, and then to an integer: <code>int(float(\"5.5\"))</code>.</p>"
        },

        "qna": [
            { "q": "What is type casting?", "a": "Type casting (also known as type conversion) is the process of converting a value from one data type to another, such as converting a string representation of a number into an actual integer." },
            { "q": "What is the difference between implicit and explicit type conversion?", "a": "<strong>Implicit</strong> conversion is done automatically by Python at runtime (e.g. adding <code>3</code> and <code>1.5</code> yields <code>4.5</code>). <strong>Explicit</strong> conversion is done manually by the programmer using casting functions like <code>int()</code> or <code>str()</code>." },
            { "q": "Does int(9.99) round the number to 10?", "a": "<strong>No.</strong> The <code>int()</code> function performs **truncation**, which means it completely drops the decimal portion of the number. Therefore, <code>int(9.99)</code> evaluates to <code>9</code>, not 10." },
            { "q": "How can I convert the string \"12.5\" into an integer?", "a": "Calling <code>int(\"12.5\")</code> directly will raise a **ValueError**. You must first convert the string to a float, and then cast it to an integer: <code>int(float(\"12.5\"))</code>." },
            { "q": "What values evaluate to False when cast to a boolean?", "a": "In Python, empty values (like empty strings <code>\"\"</code>), the number <code>0</code> (or <code>0.0</code>), and <code>None</code> evaluate to <code>False</code>. Almost all other values evaluate to <code>True</code>." }
        ],

        "test": {
            "intro": "Let's test your knowledge of type casting and conversion in Python!",
            "questions": [
                { "type": "mcq", "question": "What is the result of int(8.99)?", "options": ["8", "9", "8.99", "Error"], "answer": 0 },
                { "type": "mcq", "question": "Which of the following statements will raise a ValueError?", "options": ["float(\"7.8\")", "int(\"7.8\")", "str(7.8)", "int(\"7\")"], "answer": 1 },
                { "type": "mcq", "question": "What does bool(\"\") (empty string) evaluate to?", "options": ["True", "False", "Error", "None"], "answer": 1 },
                { "type": "fill", "question": "Manual conversion of data types by the programmer using functions is called _____ type conversion.", "answer": "explicit" },
                { "type": "fill", "question": "The function used to convert a value into a floating-point decimal number is _____.", "answer": "float" },
                { "type": "fill", "question": "If you add an integer and a float, Python automatically outputs the result as a _____.", "answer": "float" },
                { "type": "tf", "question": "The statement int(float(\"3.7\")) is a valid way to convert the string \"3.7\" to the integer 3.", "answer": "true" },
                { "type": "tf", "question": "The statement str(50) converts the integer 50 into a string value.", "answer": "true" },
                { "type": "tf", "question": "The boolean expression bool(\"False\") evaluates to False.", "answer": "false" },
                { "type": "short", "question": "Explain why int(\"15.9\") raises a ValueError and describe how you would successfully extract the integer 15 from it.", "sampleAnswer": "The int() function cannot directly convert a string containing a decimal point into an integer. To do it successfully, you must first convert the string to a float using float(\"15.9\") and then cast that float to an integer using int(), resulting in: int(float(\"15.9\"))." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Reading User Input",
            "subheading": "Making your programs interactive with input()",
            "body": "<p>Up until now, our programs have only printed static outputs. To make a program truly interactive, we need to accept data from the user. In Python, this is done using the <strong><code>input()</code></strong> function.</p>\n\n<h3>Basic Usage</h3>\n<p>The <code>input()</code> function pauses the program and waits for the user to type something. You can provide a text message (called a <strong>prompt</strong>) to guide the user:</p>\n\n<pre class=\"code-example\">name = input(\"Enter your name: \")\nprint(\"Hello, \" + name)</pre>\n\n<h3>The Golden Rule of input()</h3>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Always a String:</strong> The <code>input()</code> function <strong>always returns a string (str)</strong>, even if the user types a number! For example, if you type <code>25</code>, Python stores the text <code>\"25\"</code>.</div>\n</div>\n\n<h3>Reading Numbers (Type Casting Input)</h3>\n<p>Since <code>input()</code> always returns text, you cannot perform math operations on it directly. If you want to read an integer or a float, you must wrap the <code>input()</code> function inside <code>int()</code> or <code>float()</code>:</p>\n\n<pre class=\"code-example\"># Read as integer\nage = int(input(\"Enter your age: \"))\nprint(age + 1)  # Works perfectly!\n\n# Read as decimal\nheight = float(input(\"Enter your height (in meters): \"))\nprint(height)</pre>"
        },

        "qna": [
            { "q": "What does the input() function do?", "a": "The <code>input()</code> function pauses program execution, prints a prompt message to the console, and waits for the user to type text and press Enter. It then returns that user input." },
            { "q": "What data type is returned by input()?", "a": "It <strong>always returns a string (str)</strong>. Even if the user types a whole number like <code>42</code> or a decimal like <code>9.9</code>, it is returned as text (e.g. <code>\"42\"</code>)." },
            { "q": "How do I read a number from the user so I can do math on it?", "a": "You must wrap the <code>input()</code> function in a type casting function, such as <code>int(input())</code> for whole numbers or <code>float(input())</code> for decimals." },
            { "q": "What happens if a user types text when int(input()) is expected?", "a": "Python will throw a **ValueError** because it cannot convert text letters into a number. The program will crash unless the exception is handled." },
            { "q": "Is the prompt message inside input() required?", "a": "No, it is optional. Writing <code>val = input()</code> will wait for user input without displaying any instruction message." }
        ],

        "test": {
            "intro": "Let's test your understanding of getting user input in Python!",
            "questions": [
                { "type": "mcq", "question": "What data type does the input() function return by default?", "options": ["int", "float", "str", "bool"], "answer": 2 },
                { "type": "mcq", "question": "Which of these is the correct way to get the user's age as an integer?", "options": ["age = input(\"Enter age: \")", "age = int(input(\"Enter age: \"))", "age = float(input(\"Enter age: \"))", "age = int(\"input()\")"], "answer": 1 },
                { "type": "mcq", "question": "If the user inputs 10 in response to x = input(), what is the type of x?", "options": ["int", "float", "str", "bool"], "answer": 2 },
                { "type": "fill", "question": "The guiding text inside the input() parentheses is called the _____.", "answer": "prompt" },
                { "type": "fill", "question": "Converting user input text to a number using int() is a process called type _____.", "answer": "casting" },
                { "type": "fill", "question": "If the user enters 'ten' when running x = int(input()), Python raises a _____Error.", "answer": "value" },
                { "type": "tf", "question": "input() automatically returns a float if the user types a decimal number.", "answer": "false" },
                { "type": "tf", "question": "You can combine string inputs directly with other strings using the + operator.", "answer": "true" },
                { "type": "tf", "question": "Leaving the input() parentheses empty will cause a SyntaxError.", "answer": "false" },
                { "type": "short", "question": "Explain why num = input(\"Enter number: \") followed by print(num + 5) causes a TypeError, and how to fix it.", "sampleAnswer": "The input() function always returns a string, so num holds text (like '10'). Python cannot add an integer (5) to a string, which causes a TypeError. To fix it, cast the input string into an integer first: num = int(input(\"Enter number: \"))." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Output Formatting",
            "subheading": "Styling and presenting printed text",
            "body": "<p>When printing messages, presenting your data cleanly is very important. Python offers three primary ways to format output statements.</p>\n\n<h3>1. String Concatenation (+)</h3>\n<p>You can join multiple strings together using the <code>+</code> operator. Note that you must handle spacing manually, and you can only concatenate strings (non-strings must be explicitly cast to <code>str</code>):</p>\n\n<pre class=\"code-example\">name = \"Nobita\"\nprint(\"Hello \" + name + \"!\")  # Outputs: Hello Nobita!</pre>\n\n<h3>2. Using Commas (,)</h3>\n<p>Inside the <code>print()</code> function, you can separate different values with commas. Python automatically converts other data types (like numbers) to text and inserts a single space between the items:</p>\n\n<pre class=\"code-example\">age = 10\nprint(\"Age:\", age)  # Outputs: Age: 10</pre>\n\n<h3>3. f-Strings (Formatted String Literals)</h3>\n<p>This is the modern and most popular way! Prefix your string with the letter <code>f</code> or <code>F</code>. You can then insert variables or expressions directly inside the text by wrapping them in curly braces <code>{}</code>:</p>\n\n<pre class=\"code-example\">name = \"Doraemon\"\nitems = 4\nprint(f\"{name} has {items} gadgets.\")  # Outputs: Doraemon has 4 gadgets.</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>f-String Power:</strong> You can even run calculations directly inside f-string curly braces! For example, <code>print(f\"Next year I will be {age + 1}\")</code> will calculate and display <code>11</code>.</div>\n</div>"
        },

        "qna": [
            { "q": "What is string concatenation in Python?", "a": "String concatenation is joining multiple strings together into one using the <code>+</code> operator." },
            { "q": "What is the limitation of concatenating strings with +?", "a": "You can only join strings. If you attempt to concatenate a string with an integer or float (e.g. <code>\"Score: \" + 10</code>), Python raises a **TypeError**." },
            { "q": "How do commas inside print() work?", "a": "Commas allow you to print multiple arguments of different data types in one statement. Python automatically converts them and inserts a single space between each item." },
            { "q": "What is an f-string?", "a": "An f-string (formatted string literal) is a string prefixed with the letter <code>f</code>. It lets you embed variables or expressions directly inside the text using curly braces <code>{}</code>." },
            { "q": "Why are f-strings preferred by Python developers?", "a": "f-strings are cleaner to read, easier to write, execute faster, and automatically handle type conversions for variables inside the curly braces." }
        ],

        "test": {
            "intro": "Let's check your understanding of output formatting in Python!",
            "questions": [
                { "type": "mcq", "question": "Which prefix is used to define a formatted f-string?", "options": ["s", "f", "r", "p"], "answer": 1 },
                { "type": "mcq", "question": "What is the output of print(\"Hello\", \"World\")?", "options": ["HelloWorld", "Hello World", "Hello, World", "Error"], "answer": 1 },
                { "type": "mcq", "question": "Which of the following statements raises a TypeError?", "options": ["print(\"Score: \" + str(10))", "print(\"Score:\", 10)", "print(f\"Score: {10}\")", "print(\"Score: \" + 10)"], "answer": 3 },
                { "type": "fill", "question": "In f-strings, variables are placed inside _____ braces.", "answer": "curly" },
                { "type": "fill", "question": "The operator used to join strings together is the _____ symbol.", "answer": "+" },
                { "type": "fill", "question": "Separating print items with a comma automatically inserts a _____ character between them.", "answer": "space" },
                { "type": "tf", "question": "f-strings automatically convert non-string variables into strings when printing.", "answer": "true" },
                { "type": "tf", "question": "You can write arithmetic expressions inside f-string curly braces.", "answer": "true" },
                { "type": "tf", "question": "String concatenation automatically adds spaces between the joined strings.", "answer": "false" },
                { "type": "short", "question": "Compare print() with commas vs f-strings, and explain when f-strings are more useful.", "sampleAnswer": "Using commas in print() is easy for simple outputs and inserts default spaces. f-strings, however, are far more useful for complex text because they allow you to place variables and expressions exactly where they belong in a template, which is cleaner and supports math calculations directly." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Keywords in Python",
            "subheading": "Python's reserved vocabulary",
            "body": "<p>Just like human languages have specific words with fixed, unchangeable meanings, programming languages have <strong>reserved words</strong> called <strong>keywords</strong>.</p>\n\n<h3>What are Keywords?</h3>\n<p>Keywords are words that have a special predefined meaning and utility in Python. The Python interpreter uses them to understand the structure, loops, logic, and commands of your program.</p>\n\n<h3>The Golden Rule of Keywords</h3>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Syntax Error:</strong> Because keywords are reserved by the language, <strong>you cannot use them as variable names, function names, or any other identifiers</strong>! Doing so will result in a <strong>SyntaxError</strong>.</div>\n</div>\n\n<h3>Common Python Keywords</h3>\n<ul class=\"desc-list\">\n    <li><strong>Logic & Booleans:</strong> <code>True</code>, <code>False</code>, <code>None</code>, <code>and</code>, <code>or</code>, <code>not</code></li>\n    <li><strong>Conditionals:</strong> <code>if</code>, <code>elif</code>, <code>else</code></li>\n    <li><strong>Loops:</strong> <code>for</code>, <code>while</code>, <code>break</code>, <code>continue</code>, <code>in</code></li>\n    <li><strong>Functions & Classes:</strong> <code>def</code>, <code>class</code>, <code>return</code>, <code>pass</code>, <code>lambda</code></li>\n    <li><strong>Structure:</strong> <code>import</code>, <code>from</code>, <code>as</code>, <code>try</code>, <code>except</code></li>\n</ul>\n\n<h3>How to View All Keywords</h3>\n<p>Python provides a built-in module called <code>keyword</code> that lists all reserved words in the system. You can print them by importing the module and reading <code>keyword.kwlist</code>:</p>\n\n<pre class=\"code-example\">import keyword\nprint(keyword.kwlist)</pre>\n\n<p>All Python keywords (except <code>True</code>, <code>False</code>, and <code>None</code>) are written in <strong>completely lowercase</strong> letters!</p>"
        },

        "qna": [
            { "q": "What are reserved keywords in Python?", "a": "Reserved keywords are words that Python has set aside for its own syntax and commands (like <code>if</code>, <code>for</code>, and <code>def</code>). They cannot be reassigned or used as names for variables." },
            { "q": "Why does using a keyword as a variable name cause an error?", "a": "If Python allowed keywords to be variable names, the interpreter could not distinguish between a control flow instruction (like <code>if</code>) and your variable, making the code ambiguous and impossible to execute." },
            { "q": "How many keywords does Python have?", "a": "Python 3 has approximately 35 keywords. The exact count may vary slightly depending on the specific Python version." },
            { "q": "Are keywords case-sensitive?", "a": "Yes. Keywords must be typed exactly as defined. Most are all lowercase (e.g. <code>while</code>). Only three keywords start with an uppercase letter: <code>True</code>, <code>False</code>, and <code>None</code>. Capitalizing other keywords (like writing <code>IF</code> instead of <code>if</code>) will result in errors." },
            { "q": "Is 'print' a reserved keyword?", "a": "<strong>No.</strong> <code>print</code> is a built-in function, not a reserved keyword. However, you should still never use it as a variable name because doing so will overwrite the printing functionality, causing future print statements to fail!" }
        ],

        "test": {
            "intro": "Let's test your understanding of Python's reserved keywords!",
            "questions": [
                { "type": "mcq", "question": "Which of the following is NOT a reserved keyword in Python?", "options": ["for", "if", "loop", "while"], "answer": 2 },
                { "type": "mcq", "question": "Which of these keywords is capitalized in Python?", "options": ["true", "None", "else", "import"], "answer": 1 },
                { "type": "mcq", "question": "What error will you get if you try to assign def = 5?", "options": ["NameError", "TypeError", "SyntaxError", "ValueError"], "answer": 2 },
                { "type": "fill", "question": "The built-in module used to view all Python keywords is named _____.", "answer": "keyword" },
                { "type": "fill", "question": "The list of keywords is retrieved using the attribute keyword._____.", "answer": "kwlist" },
                { "type": "fill", "question": "Python keywords are case-_____, meaning 'True' is a keyword but 'true' is not.", "answer": "sensitive" },
                { "type": "tf", "question": "You can technically use print as a variable name, although it is highly discouraged.", "answer": "true" },
                { "type": "tf", "question": "Every single reserved keyword in Python is written in all-lowercase letters.", "answer": "false" },
                { "type": "tf", "question": "Reserved keywords can be used to define loop boundaries and logical steps.", "answer": "true" },
                { "type": "short", "question": "Explain why while = 10 causes an error, but While = 10 is allowed.", "sampleAnswer": "The word 'while' in lowercase is a reserved keyword used to start a loop, so Python raises a SyntaxError when you try to use it as a variable name. However, because Python is case-sensitive, 'While' with a capital 'W' is treated as a completely different word and is not reserved, making it valid as a variable name." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Arithmetic Operators",
            "subheading": "Doing math calculations in Python",
            "body": "<p>Python can be used as a highly capable calculator! We perform math operations in code using symbols called <strong>Arithmetic Operators</strong>.</p>\n\n<h3>The 7 Arithmetic Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong>Addition (<code>+</code>):</strong> Adds two values. Example: <code>5 + 3</code> yields <code>8</code>.</li>\n    <li><strong>Subtraction (<code>-</code>):</strong> Subtracts the right value from the left value. Example: <code>10 - 4</code> yields <code>6</code>.</li>\n    <li><strong>Multiplication (<code>*</code>):</strong> Multiplies two values. Example: <code>3 * 4</code> yields <code>12</code>.</li>\n    <li><strong>Division (<code>/</code>):</strong> Divides the left value by the right. <strong>CRITICAL RULE: Division in Python always returns a float (decimal number)</strong>, even if the division is perfectly even! Example: <code>4 / 2</code> yields <code>2.0</code>.</li>\n    <li><strong>Floor Division (<code>//</code>):</strong> Divides and rounds down to the nearest whole integer, discarding any decimal remainders. Example: <code>7 // 2</code> yields <code>3</code>.</li>\n    <li><strong>Modulus (<code>%</code>):</strong> Divides two numbers and returns the remainder of the division. Example: <code>7 % 2</code> yields <code>1</code>.</li>\n    <li><strong>Exponentiation (<code>**</code>):</strong> Calculates power (the base raised to the power of the exponent). Example: <code>2 ** 3</code> is 2 cubed, yielding <code>8</code>.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Operator Precedence:</strong> Python follows standard mathematical order of operations (PEMDAS/BODMAS). Exponentiation is evaluated first, followed by multiplication/division, and finally addition/subtraction. You can use parentheses <code>()</code> to force calculations to occur first!</div>\n</div>"
        },

        "qna": [
            { "q": "What is the difference between regular division (/) and floor division (//)?", "a": "Regular division (<code>/</code>) returns a decimal float representing the exact quotient (e.g. <code>5 / 2</code> evaluates to <code>2.5</code>). Floor division (<code>//</code>) rounds the result down to the nearest whole integer, discarding the decimal fraction (e.g. <code>5 // 2</code> evaluates to <code>2</code>)." },
            { "q": "How does the modulus (%) operator work?", "a": "The modulus operator calculates and returns the remainder after division. For example, <code>10 % 3</code> returns <code>1</code> because 3 fits into 10 three times (making 9) with a remaining remainder of 1." },
            { "q": "How do you calculate powers (exponents) in Python?", "a": "You use the double asterisk operator (<code>**</code>). For example, writing <code>3 ** 4</code> represents 3 raised to the power of 4, yielding <code>81</code>." },
            { "q": "Why does print(8 / 2) output 4.0 instead of 4?", "a": "In Python 3, the single slash division operator (<code>/</code>) is programmed to always output a floating-point data type (<code>float</code>) to preserve decimal accuracy." },
            { "q": "Can you use arithmetic operators on strings?", "a": "Yes, but only <code>+</code> (for joining/concatenating strings) and <code>*</code> (for repeating a string by an integer). For example, <code>\"Hi\" * 3</code> yields <code>\"HiHiHi\"</code>. Subtraction, division, and exponents will trigger a **TypeError**." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python math and arithmetic operators!",
            "questions": [
                { "type": "mcq", "question": "What is the output of print(5 / 2)?", "options": ["2", "2.5", "3", "2.0"], "answer": 1 },
                { "type": "mcq", "question": "What is the output of print(5 // 2)?", "options": ["2", "2.5", "3", "2.0"], "answer": 0 },
                { "type": "mcq", "question": "What does 2 ** 4 evaluate to?", "options": ["8", "16", "32", "64"], "answer": 1 },
                { "type": "fill", "question": "The operator used to get the remainder of a division is the _____ operator.", "answer": "modulus" },
                { "type": "fill", "question": "The operator used to raise a number to an exponential power is _____.", "answer": "**" },
                { "type": "fill", "question": "In Python, division using the '/' operator always returns a data type of _____.", "answer": "float" },
                { "type": "tf", "question": "The statement 7 % 2 evaluates to 1.", "answer": "true" },
                { "type": "tf", "question": "Floor division (//) rounds the division result up to the nearest whole integer.", "answer": "false" },
                { "type": "tf", "question": "The statement 10 % 5 evaluates to 0.", "answer": "true" },
                { "type": "short", "question": "Compare the results of x = 11 / 3, y = 11 // 3, and z = 11 % 3.", "sampleAnswer": "x is 3.6666... because regular division returns the exact float quotient. y is 3 because floor division truncates and rounds down to the nearest integer. z is 2 because modulus returns the remainder left over from the division (11 - 3*3 = 2)." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Assignment Operators",
            "subheading": "Storing and updating variable values",
            "body": "<p>We already know the basic assignment operator (<code>=</code>), which stores a value inside a variable. Python also provides <strong>compound assignment operators</strong> (or shortcut operators) that allow you to modify a variable's value and reassign it in a single step!</p>\n\n<h3>Common Assignment Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong>Assignment (<code>=</code>):</strong> Stores the right-hand value inside the left-hand variable. Example: <code>x = 10</code>.</li>\n    <li><strong>Add and Assign (<code>+=</code>):</strong> Adds the right-hand value to the variable and stores the sum. E.g. <code>x += 5</code> is identical to <code>x = x + 5</code>.</li>\n    <li><strong>Subtract and Assign (<code>-=</code>):</strong> Subtracts the right-hand value from the variable and stores the difference. E.g. <code>x -= 2</code> is identical to <code>x = x - 2</code>.</li>\n    <li><strong>Multiply and Assign (<code>*=</code>):</strong> Multiplies the variable by the right-hand value and stores the product. E.g. <code>x *= 3</code> is identical to <code>x = x * 3</code>.</li>\n    <li><strong>Divide and Assign (<code>/=</code>):</strong> Divides the variable by the right-hand value and stores the quotient. <strong>Note: updates the variable's type to a float!</strong> E.g. <code>x /= 2</code> is identical to <code>x = x / 2</code>.</li>\n    <li><strong>Modulus and Assign (<code>%=</code>):</strong> Takes modulus and stores the remainder. E.g. <code>x %= 3</code> is identical to <code>x = x % 3</code>.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Why use shortcuts?</strong> Writing compound assignments like <code>score += 10</code> makes your code cleaner, shorter, and easier for the computer to optimize during execution.</div>\n</div>"
        },

        "qna": [
            { "q": "What is an assignment operator?", "a": "An assignment operator is used to assign values to variables. The primary assignment operator is <code>=</code>, but compound operators like <code>+=</code> or <code>-=</code> also perform operations on the variable before assigning." },
            { "q": "What is the meaning of x += 3?", "a": "It is a compound assignment shortcut meaning <code>x = x + 3</code>. It reads the current value of <code>x</code>, adds <code>3</code> to it, and reassigns the new value back to <code>x</code>." },
            { "q": "What is a compound assignment operator?", "a": "A compound assignment operator combines an arithmetic operation with an assignment (e.g. <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>) to perform updates on variables in a single expression." },
            { "q": "Does writing x =+ 5 work the same as x += 5?", "a": "<strong>No.</strong> Writing <code>x =+ 5</code> assigns positive 5 (<code>+5</code>) to <code>x</code>. The mathematical compound operator must be written with the calculation operator first, followed by the equal sign (<code>+=</code>)." },
            { "q": "Can you use compound assignment on strings?", "a": "Yes! You can use <code>+=</code> to append text to an existing string (e.g. <code>text = \"Hello\"; text += \" Nobita\"</code> makes it <code>\"Hello Nobita\"</code>) or <code>*=</code> to repeat the string." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python assignment operators!",
            "questions": [
                { "type": "mcq", "question": "If x = 10, what is the value of x after running x += 5?", "options": ["5", "10", "15", "Error"], "answer": 2 },
                { "type": "mcq", "question": "Which of the following is equivalent to count = count * 2?", "options": ["count =* 2", "count = count ** 2", "count *= 2", "count *== 2"], "answer": 2 },
                { "type": "mcq", "question": "If score = 20, what is the value and type of score after score /= 2?", "options": ["10 (int)", "10.0 (float)", "20 (int)", "Error"], "answer": 1 },
                { "type": "fill", "question": "The shortcut operator '-=' represents subtract and _____.", "answer": "assign" },
                { "type": "fill", "question": "If x = 7, the statement x %= 3 will update x to the value _____.", "answer": "1" },
                { "type": "fill", "question": "The basic assignment operator in Python is the _____ symbol.", "answer": "=" },
                { "type": "tf", "question": "The command x += 1 is a valid way to increment a variable by 1.", "answer": "true" },
                { "type": "tf", "question": "The statement x =+ 10 is identical in action to x += 10.", "answer": "false" },
                { "type": "tf", "question": "Using text = \"A\"; text *= 3 updates the text variable to hold 'AAA'.", "answer": "true" },
                { "type": "short", "question": "If x = 5, explain the difference in result between running x += 2 and x =+ 2.", "sampleAnswer": "Running x += 2 performs addition, adding 2 to x's current value to update x to 7. Running x =+ 2 performs direct assignment of positive 2, overwriting x's old value to update x to 2." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Comparison Operators",
            "subheading": "Comparing values and making decisions",
            "body": "<p>When writing programs, we often need to compare two values. For example: Is Nobita's exam score greater than 50? Is the user's password correct? Python uses <strong>Comparison Operators</strong> (or relational operators) to solve these questions.</p>\n\n<h3>The 6 Comparison Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong>Equal to (<code>==</code>):</strong> Checks if two values are equal. Note: Use double equals <code>==</code> for comparison, and single equal <code>=</code> for assignment! Example: <code>5 == 5</code> yields <code>True</code>.</li>\n    <li><strong>Not equal to (<code>!=</code>):</strong> Checks if two values are different. Example: <code>5 != 3</code> yields <code>True</code>.</li>\n    <li><strong>Greater than (<code>&gt;</code>):</strong> Checks if the left value is strictly larger than the right. Example: <code>10 &gt; 5</code> yields <code>True</code>.</li>\n    <li><strong>Less than (<code>&lt;</code>):</strong> Checks if the left value is strictly smaller than the right. Example: <code>3 &lt; 8</code> yields <code>True</code>.</li>\n    <li><strong>Greater than or equal to (<code>&gt;=</code>):</strong> Checks if the left value is larger or equal. Example: <code>10 &gt;= 10</code> yields <code>True</code>.</li>\n    <li><strong>Less than or equal to (<code>&lt;=</code>):</strong> Checks if the left value is smaller or equal. Example: <code>5 &lt;= 6</code> yields <code>True</code>.</li>\n</ul>\n\n<h3>String Comparisons</h3>\n<p>Python can also compare strings! String comparisons are case-sensitive. For example, <code>\"apple\" == \"Apple\"</code> evaluates to <code>False</code> because the capital letter 'A' is distinct from the lowercase 'a'.</p>\n\n<blockquote class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>TypeError Warning:</strong> You cannot compare incompatible data types (like <code>5 &gt; \"3\"</code>) using inequality operators. Doing so will raise a <strong>TypeError</strong>!</div>\n</blockquote>"
        },

        "qna": [
            { "q": "What are comparison operators?", "a": "Comparison operators are symbols used to compare two values. The result of any comparison operation is a boolean value: either <code>True</code> or <code>False</code>." },
            { "q": "What is the difference between = and ==?", "a": "The single equal sign (<code>=</code>) is the **assignment operator**, used to store a value inside a variable (e.g. <code>x = 5</code>). The double equal sign (<code>==</code>) is the **comparison operator**, used to check if two values are equal (e.g. <code>x == 5</code> returns <code>True</code> or <code>False</code>)." },
            { "q": "How does the 'not equal' (!=) operator work?", "a": "The <code>!=</code> operator compares two values and returns <code>True</code> if they are different, and <code>False</code> if they are identical." },
            { "q": "Can you compare an integer and a float?", "a": "Yes! Python can compare integers and floats directly. For example, <code>10 == 10.0</code> evaluates to <code>True</code>." },
            { "q": "Are string comparisons case-sensitive in Python?", "a": "Yes, string comparisons are strictly case-sensitive. For example, <code>\"Doraemon\" == \"doraemon\"</code> evaluates to <code>False</code> because capitalization matters in Python." }
        ],

        "test": {
            "intro": "Let's check your understanding of comparison operators in Python!",
            "questions": [
                { "type": "mcq", "question": "Which operator is used to check if two values are equal?", "options": ["=", "==", "===", "!="], "answer": 1 },
                { "type": "mcq", "question": "What does the expression 5 != 5 evaluate to?", "options": ["True", "False", "Error", "None"], "answer": 1 },
                { "type": "mcq", "question": "Which of the following comparisons raises a TypeError?", "options": ["5 == 5.0", "5 != \"5\"", "5 > \"3\"", "\"apple\" == \"orange\""], "answer": 2 },
                { "type": "fill", "question": "Comparison operators in Python always return a data type of _____.", "answer": "bool" },
                { "type": "fill", "question": "The operator used to check if a value is greater than or equal to another is _____.", "answer": ">=" },
                { "type": "fill", "question": "If x = 12 and y = 15, the expression x < y evaluates to _____.", "answer": "True" },
                { "type": "tf", "question": "\"Python\" == \"python\" evaluates to True.", "answer": "false" },
                { "type": "tf", "question": "The comparison 10 >= 10 evaluates to True.", "answer": "true" },
                { "type": "tf", "question": "The single equal sign (=) is used to check if two values are equal in Python.", "answer": "false" },
                { "type": "short", "question": "If score = 85, explain what expressions you would write to check if the score is a passing mark (50 or above) and if it is a perfect mark (100).", "sampleAnswer": "To check if the score is passing, write 'score >= 50'. To check if the score is perfect, write 'score == 100'." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Logical Operators",
            "subheading": "Combining and reversing true/false statements",
            "body": "<p>Sometimes, decisions in your code depend on multiple conditions. For example: \"If a user has a key AND the door is locked, open the door.\" Python uses <strong>Logical Operators</strong> to combine or modify boolean conditions.</p>\n\n<h3>The 3 Logical Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>and</code>:</strong> Returns <code>True</code> <strong>only if BOTH conditions are True</strong>. If even one part is False, the result is <code>False</code>. Example: <code>True and False</code> yields <code>False</code>.</li>\n    <li><strong><code>or</code>:</strong> Returns <code>True</code> <strong>if AT LEAST ONE condition is True</strong>. It only returns <code>False</code> if both parts are False. Example: <code>True or False</code> yields <code>True</code>.</li>\n    <li><strong><code>not</code>:</strong> Inverts (reverses) a boolean value. Turns <code>True</code> into <code>False</code>, and <code>False</code> into <code>True</code>. Example: <code>not True</code> yields <code>False</code>.</li>\n</ul>\n\n<h3>Order of Evaluation (Precedence)</h3>\n<p>Unless overridden by parentheses, Python evaluates logical operations in this order: <code>not</code> first, then <code>and</code>, and finally <code>or</code>. Using parentheses <code>()</code> is highly recommended to make your code clear and ensure calculations happen in the correct order!</p>"
        },

        "qna": [
            { "q": "What are logical operators used for?", "a": "Logical operators are used to connect two or more conditional expressions, or to reverse a boolean expression, yielding a final true/false result." },
            { "q": "When does the 'and' operator return True?", "a": "The <code>and</code> operator returns <code>True</code> if and only if both conditions being evaluated are <code>True</code>." },
            { "q": "When does the 'or' operator return True?", "a": "The <code>or</code> operator returns <code>True</code> if at least one of the conditions is <code>True</code>. It only returns <code>False</code> when both conditions are <code>False</code>." },
            { "q": "How does the 'not' operator work?", "a": "The <code>not</code> operator flips the boolean state. It takes a value and reverses it (e.g. <code>not True</code> becomes <code>False</code>, and <code>not False</code> becomes <code>True</code>)." },
            { "q": "What is short-circuit evaluation?", "a": "In an <code>and</code> statement, if the first condition is <code>False</code>, Python doesn't check the second because the result is guaranteed to be False. In an <code>or</code> statement, if the first condition is <code>True</code>, Python doesn't check the second because the result is guaranteed to be True. This is called short-circuiting." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's logical operators!",
            "questions": [
                { "type": "mcq", "question": "What does True and False evaluate to?", "options": ["True", "False", "None", "Error"], "answer": 1 },
                { "type": "mcq", "question": "What does False or True evaluate to?", "options": ["True", "False", "None", "Error"], "answer": 0 },
                { "type": "mcq", "question": "What does the expression not (10 > 5) evaluate to?", "options": ["True", "False", "Error", "None"], "answer": 1 },
                { "type": "fill", "question": "The logical operator that returns True only if both conditions are True is _____.", "answer": "and" },
                { "type": "fill", "question": "The operator used to invert a boolean value is _____.", "answer": "not" },
                { "type": "fill", "question": "If x = True and y = False, the expression x or y evaluates to _____.", "answer": "True" },
                { "type": "tf", "question": "The logical statement not False evaluates to True.", "answer": "true" },
                { "type": "tf", "question": "In the expression A and B, if A is False, Python evaluates B anyway.", "answer": "false" },
                { "type": "tf", "question": "The statement 5 > 3 or 2 > 10 evaluates to False.", "answer": "false" },
                { "type": "short", "question": "If has_key = True and is_locked = False, explain what 'has_key and not is_locked' evaluates to.", "sampleAnswer": "It evaluates to True. has_key is True, and is_locked is False (so not is_locked becomes True). Since both parts are True, the 'and' returns True." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Membership Operators",
            "subheading": "Checking for presence inside collections",
            "body": "<p>When programming, we often need to check if an item exists inside a collection. For example: Is the letter <code>\"a\"</code> in the word <code>\"apple\"</code>? Is the name <code>\"nobita\"</code> in a list of users? Python makes this incredibly simple using <strong>Membership Operators</strong>.</p>\n\n<h3>The 2 Membership Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>in</code>:</strong> Evaluates to <code>True</code> if the specified value is found inside the sequence. Otherwise, it returns <code>False</code>.\n        <pre class=\"code-example\">text = \"Bamboo Copter\"\nprint(\"Bamboo\" in text)  # Outputs: True\nprint(\"door\" in text)    # Outputs: False</pre>\n    </li>\n    <li><strong><code>not in</code>:</strong> Evaluates to <code>True</code> if the specified value is <strong>not</strong> found inside the sequence. If it is found, it returns <code>False</code>.\n        <pre class=\"code-example\">text = \"Anywhere Door\"\nprint(\"copter\" not in text)  # Outputs: True</pre>\n    </li>\n</ul>\n\n<h3>Important Details</h3>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Case Sensitivity:</strong> Membership tests are strictly case-sensitive. For example, <code>\"bamboo\" in \"Bamboo Copter\"</code> will evaluate to <code>False</code> because the letters have different casing!</div>\n</div>\n<p>Membership operators work on any Python sequence data type, including strings (which we've seen) and lists/tuples (which you will learn about in future levels).</p>"
        },

        "qna": [
            { "q": "What are membership operators?", "a": "Membership operators are used to test if a value or variable is part of a sequence (such as strings, lists, or tuples)." },
            { "q": "What does the 'in' operator do?", "a": "The <code>in</code> operator evaluates to <code>True</code> if the specified element is found in the sequence, and <code>False</code> otherwise." },
            { "q": "What does the 'not in' operator do?", "a": "The <code>not in</code> operator evaluates to <code>True</code> if the specified element is not present in the sequence, and <code>False</code> if it is present." },
            { "q": "Can I search for multiple words inside a string using 'in'?", "a": "Yes! You can search for a single character (e.g. <code>\"a\" in \"cat\"</code>) or entire substrings/words (e.g. <code>\"Anywhere Door\" in \"Doraemon opened the Anywhere Door.\"</code>)." },
            { "q": "Are membership operations case-sensitive?", "a": "Yes, they are case-sensitive. Searching for <code>\"python\" in \"Python programming\"</code> returns <code>False</code> because capital P and lowercase p do not match." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python membership operators!",
            "questions": [
                { "type": "mcq", "question": "Which operator is used to test if a value is present in a sequence?", "options": ["is", "in", "has", "not"], "answer": 1 },
                { "type": "mcq", "question": "What does \"a\" in \"Apple\" evaluate to?", "options": ["True", "False", "None", "Error"], "answer": 1 },
                { "type": "mcq", "question": "What does \"key\" not in \"pocket\" evaluate to?", "options": ["True", "False", "None", "Error"], "answer": 0 },
                { "type": "fill", "question": "The operator that returns True if a value is NOT present in a sequence is _____ in.", "answer": "not" },
                { "type": "fill", "question": "Membership operators check if a value is part of a _____.", "answer": "sequence" },
                { "type": "fill", "question": "If word = \"Doraemon\", then the expression \"Dora\" in word evaluates to _____.", "answer": "True" },
                { "type": "tf", "question": "Membership operators can only search for single characters, not substrings.", "answer": "false" },
                { "type": "tf", "question": "\"pocket\" in \"Doraemon's pocket\" evaluates to True.", "answer": "true" },
                { "type": "tf", "question": "\"A\" not in \"apple\" evaluates to True.", "answer": "true" },
                { "type": "short", "question": "If sentence = \"Doraemon loves dorayakis\", explain what \"dorayaki\" in sentence and \"Dorayaki\" in sentence evaluate to, and why.", "sampleAnswer": "'dorayaki' in sentence is True because the lowercase word exists inside 'dorayakis'. 'Dorayaki' in sentence is False because membership checks are case-sensitive." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Identity Operators",
            "subheading": "Checking memory locations in Python",
            "body": "<p>In Python, variables don't hold values directly; they point to objects stored in the computer's memory. Sometimes, we need to check if two variables point to the <strong>exact same memory address</strong> (object identity), rather than just checking if their values are equal.</p>\n\n<h3>The 2 Identity Operators</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>is</code>:</strong> Evaluates to <code>True</code> if both variables refer to the exact same object in memory.</li>\n    <li><strong><code>is not</code>:</strong> Evaluates to <code>True</code> if both variables refer to different objects in memory.</li>\n</ul>\n\n<h3>The Big Difference: is vs ==</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>==</code> (Equality):</strong> Checks if the **values** of the two objects are equal.</li>\n    <li><strong><code>is</code> (Identity):</strong> Checks if the variables point to the **same object address** in memory.</li>\n</ul>\n\n<pre class=\"code-example\">list_a = [1, 2, 3]\nlist_b = [1, 2, 3]\nlist_c = list_a\n\nprint(list_a == list_b) # Outputs: True (they have identical contents)\nprint(list_a is list_b)  # Outputs: False (stored in different memory slots)\nprint(list_a is list_c)  # Outputs: True (list_c points to list_a's address)</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Python Optimization (Caching):</strong> For performance, Python reuses the same memory address for small integers (between -5 and 256) and small strings. Therefore, if <code>x = 5</code> and <code>y = 5</code>, <code>x is y</code> evaluates to <code>True</code>. However, for collections like lists or dictionaries, Python always creates new objects in memory!</div>\n</div>"
        },

        "qna": [
            { "q": "What do identity operators do?", "a": "Identity operators (<code>is</code> and <code>is not</code>) check whether two variables point to the exact same object located at the same memory address." },
            { "q": "What is the difference between == and is?", "a": "The <code>==</code> operator compares the values of two objects to check if they are equal (value equality). The <code>is</code> operator compares the memory addresses of two variables to check if they point to the exact same object (address identity)." },
            { "q": "Why does list_a is list_b return False even if they contain the same values?", "a": "Lists are mutable collections. When you create two lists, Python allocates separate boxes in memory for each list. Because they are in different memory addresses, <code>is</code> returns <code>False</code>." },
            { "q": "How does 'is not' differ from '!='?", "a": "The <code>!=</code> operator checks if values are different. The <code>is not</code> operator checks if the variables point to different objects in memory, even if their contents are equal." },
            { "q": "What is the id() function?", "a": "The built-in <code>id()</code> function returns the unique integer memory address of an object. If <code>x is y</code> is True, then <code>id(x)</code> will equal <code>id(y)</code>." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python identity operators!",
            "questions": [
                { "type": "mcq", "question": "Which operator checks if two variables refer to the exact same object address?", "options": ["==", "is", "in", "equals"], "answer": 1 },
                { "type": "mcq", "question": "What does x is y compare?", "options": ["Value equality", "Memory address identity", "Data type equivalence", "Variable spelling"], "answer": 1 },
                { "type": "mcq", "question": "If list_a = [1, 2] and list_b = [1, 2], what does list_a is list_b evaluate to?", "options": ["True", "False", "Error", "None"], "answer": 1 },
                { "type": "fill", "question": "The operator used to check if two variables point to different objects in memory is _____ not.", "answer": "is" },
                { "type": "fill", "question": "The built-in function that returns the unique memory address of an object is _____.", "answer": "id" },
                { "type": "fill", "question": "While '==' checks value equality, the 'is' operator checks _____ identity.", "answer": "object" },
                { "type": "tf", "question": "The expression 10 is 10.0 evaluates to True in Python.", "answer": "false" },
                { "type": "tf", "question": "Python caches and reuses memory locations for small integers to optimize performance.", "answer": "true" },
                { "type": "tf", "question": "If x is not y is True, it means x and y are stored in different memory addresses.", "answer": "true" },
                { "type": "short", "question": "If a = [5, 10] and b = a, explain what a == b and a is b evaluate to, and why.", "sampleAnswer": "Both evaluate to True. a == b is True because they hold the same values. a is b is True because assigning b = a makes b refer to the exact same list object address in memory." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Operator Precedence",
            "subheading": "Rules governing the order of execution",
            "body": "<p>When you write complex expressions with multiple operators, like <code>10 - 2 * 3</code> or <code>5 &gt; 3 and 2 &lt; 1</code>, Python needs a set of rules to determine which operations to run first. These rules are called <strong>Operator Precedence</strong> (similar to PEMDAS/BODMAS in school math).</p>\n\n<h3>The Order of Precedence (Highest to Lowest)</h3>\n<ol class=\"desc-list\">\n    <li><strong>Parentheses <code>()</code>:</strong> Anything inside brackets is evaluated first!</li>\n    <li><strong>Exponentiation <code>**</code>:</strong> Raising a number to a power.</li>\n    <li><strong>Multiplication, Division, Floor Division, Modulus <code>*</code>, <code>/</code>, <code>//</code>, <code>%</code></strong></li>\n    <li><strong>Addition, Subtraction <code>+</code>, <code>-</code></strong></li>\n    <li><strong>Comparison, Membership, Identity:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>, <code>in</code>, <code>is</code></li>\n    <li><strong>Logical NOT:</strong> <code>not</code></li>\n    <li><strong>Logical AND:</strong> <code>and</code></li>\n    <li><strong>Logical OR:</strong> <code>or</code></li>\n</ol>\n\n<h3>Associativity (Left-to-Right)</h3>\n<p>If two operators have the same precedence (like addition <code>+</code> and subtraction <code>-</code>), Python evaluates them from **left to right**.</p>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Best Practice:</strong> Always use parentheses <code>()</code> in complex calculations! It ensures the code executes in the exact order you want, and makes your code much easier for others to read. E.g., <code>(5 + 3) * 2</code> forces addition to happen first, yielding <code>16</code> instead of <code>11</code>.</div>\n</div>"
        },

        "qna": [
            { "q": "What is operator precedence?", "a": "Operator precedence determines the order in which operators are evaluated in expressions containing multiple operators." },
            { "q": "Which arithmetic operator has the highest precedence?", "a": "Exponentiation (<code>**</code>) has the highest precedence among math operators. Parentheses <code>()</code> override everything." },
            { "q": "How do logical operators rank in precedence?", "a": "Logical operators rank as: <code>not</code> first, then <code>and</code>, and finally <code>or</code>." },
            { "q": "What happens when operators have equal precedence?", "a": "When operators have equal precedence, Python evaluates them from left to right (left-to-right associativity)." },
            { "q": "Why should I use parentheses in expressions?", "a": "Parentheses clarify the programmer's intent, prevent calculation bugs, and allow you to override standard math order to achieve the desired result." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python operator precedence!",
            "questions": [
                { "type": "mcq", "question": "What is the output of print(10 - 2 * 3)?", "options": ["24", "4", "6", "Error"], "answer": 1 },
                { "type": "mcq", "question": "What is the output of print((10 - 2) * 3)?", "options": ["24", "4", "6", "Error"], "answer": 0 },
                { "type": "mcq", "question": "Which of these operators has the highest precedence?", "options": ["*", "**", "+", "/"], "answer": 1 },
                { "type": "fill", "question": "The operator with the absolute highest precedence that overrides all other rules is _____.", "answer": "parentheses" },
                { "type": "fill", "question": "In the expression True or False and False, the _____ operator is evaluated first.", "answer": "and" },
                { "type": "fill", "question": "If operators have identical precedence levels, Python evaluates them from _____ to right.", "answer": "left" },
                { "type": "tf", "question": "Exponentiation (**) has higher precedence than multiplication (*).", "answer": "true" },
                { "type": "tf", "question": "Comparison operators have lower precedence than logical operators like 'and'.", "answer": "false" },
                { "type": "tf", "question": "The expression 2 ** 3 * 2 evaluates to 16.", "answer": "true" },
                { "type": "short", "question": "Predict the output of '5 + 2 * 10 > 20 and not 2 == 3' step-by-step.", "sampleAnswer": "Multiplication happens first: 2*10 = 20. Addition: 5+20 = 25. Comparisons: 25 > 20 is True and 2 == 3 is False. Logical NOT: not False is True. Logical AND: True and True evaluates to True." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Operator Challenge Room",
            "subheading": "Mastering combined operator challenges",
            "body": "<p>Welcome to a dedicated training room! Now that you have learned about arithmetic, assignment, comparison, logical, membership, and identity operators, it is time to practice combining them into complex logic structures.</p>\n\n<h3>The Evaluation Checklist</h3>\n<p>To solve complex combined expressions without making mistakes, always run your evaluation in this order:</p>\n<ol class=\"desc-list\">\n    <li><strong>Parentheses <code>()</code>:</strong> Always resolve brackets first.</li>\n    <li><strong>Arithmetic Math:</strong> Exponents (<code>**</code>) first, then multiplication/division/modulus/floor-division (<code>*</code>, <code>/</code>, <code>%</code>, <code>//</code>), then addition/subtraction (<code>+</code>, <code>-</code>).</li>\n    <li><strong>Comparisons:</strong> Greater/less-than and equality checks (<code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>).</li>\n    <li><strong>Identity & Membership:</strong> <code>is</code>, <code>is not</code>, <code>in</code>, <code>not in</code>.</li>\n    <li><strong>Logical Operators:</strong> Logical <code>not</code> first, then <code>and</code>, and finally <code>or</code>.</li>\n</ol>\n\n<h3>Walkthrough Example</h3>\n<pre class=\"code-example\">expression = 5 + 2 == 7 or 10 // 3 &gt; 3\n\n# Step 1: Evaluate math\n# 5 + 2 is 7. 10 // 3 is 3.\n# expression becomes: 7 == 7 or 3 &gt; 3\n\n# Step 2: Evaluate comparisons\n# 7 == 7 is True. 3 &gt; 3 is False.\n# expression becomes: True or False\n\n# Step 3: Evaluate logical\n# True or False evaluates to True!</pre>"
        },

        "qna": [
            { "q": "Why is practicing combined operators important?", "a": "In real-world software, decisions depend on multiple variables (e.g. checking user login validity, order values, and account clearance). Combining operators is standard practice for logic statements." },
            { "q": "In what order are math and comparison operators evaluated?", "a": "Arithmetic math operations (like <code>+</code> or <code>//</code>) are always evaluated before comparison operations (like <code>==</code> or <code>&gt;</code>)." },
            { "q": "Does logical 'and' evaluate before logical 'or'?", "a": "Yes, <code>and</code> has a higher precedence than <code>or</code>. For example, <code>True or False and False</code> is evaluated as <code>True or (False and False)</code>, resulting in <code>True</code>." },
            { "q": "What happens when membership or identity operators are combined with logical operators?", "a": "Identity (<code>is</code>) and membership (<code>in</code>) checks evaluate first as comparisons, and their boolean outputs are then combined using logical connectors." },
            { "q": "How can I guarantee specific order of evaluation in complex logic statements?", "a": "Always group sub-expressions using parentheses <code>()</code>. E.g., writing <code>(x &gt; 5) and (y &lt; 10)</code> makes the evaluation order clear and readable." }
        ],

        "test": {
            "intro": "Let's test your ability to resolve combined operator expressions!",
            "questions": [
                { "type": "mcq", "question": "What is the output of print(10 - 3 * 2 == 4)?", "options": ["True", "False", "None", "Error"], "answer": 0 },
                { "type": "mcq", "question": "What does True or False and not True evaluate to?", "options": ["True", "False", "None", "Error"], "answer": 0 },
                { "type": "mcq", "question": "If list_a = [1, 2] and list_b = list_a, what does (1 in list_a) and (list_a is list_b) evaluate to?", "options": ["True", "False", "Error", "None"], "answer": 0 },
                { "type": "fill", "question": "If x = 15, the expression x % 2 == 1 and x < 20 evaluates to _____.", "answer": "True" },
                { "type": "fill", "question": "The expression not ('a' in 'banana' or 'z' in 'apple') evaluates to _____.", "answer": "False" },
                { "type": "fill", "question": "If y = 10, the statement y is not 10.0 evaluates to _____.", "answer": "True" },
                { "type": "tf", "question": "5 + 2 * 3 == 21 evaluates to True.", "answer": "false" },
                { "type": "tf", "question": "('Door' in 'Anywhere Door') and not (5 is 5.0) evaluates to True.", "answer": "true" },
                { "type": "tf", "question": "Logical 'or' is evaluated before logical 'and' in Python expressions.", "answer": "false" },
                { "type": "short", "question": "Explain step-by-step why 'not 10 > 5 and \"apple\" in \"pineapple\"' evaluates to False.", "sampleAnswer": "10 > 5 is True, and 'apple' in 'pineapple' is True. This leaves: not True and True. The logical 'not' runs first, giving: False and True. Finally, the 'and' returns False." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Real-Life Logic Building",
            "subheading": "Translating real-world problems into code",
            "body": "<p>Programming is about solving real-world problems. In this lesson, we will practice translating descriptive business requirements and daily logical decisions into Python expressions.</p>\n\n<h3>Example Scenario 1: Movie Ticket Discounts</h3>\n<p><strong>Requirement:</strong> \"A movie theater offers discounted tickets if the visitor is a child (under 12) OR a senior citizen (65 or older).\"</p>\n<blockquote class=\"desc-callout callout-highlight\">\n    <strong>Python translation:</strong> <code>is_discounted = age &lt; 12 or age &gt;= 65</code>\n</blockquote>\n\n<h3>Example Scenario 2: Web Login Authentication</h3>\n<p><strong>Requirement:</strong> \"A user can log in if their username is correct AND their password is correct, provided their account is NOT suspended.\"</p>\n<blockquote class=\"desc-callout callout-highlight\">\n    <strong>Python translation:</strong> <code>can_login = is_username_correct and is_password_correct and not is_suspended</code>\n</blockquote>\n\n<h3>Example Scenario 3: Roller Coaster Ride Eligibility</h3>\n<p><strong>Requirement:</strong> \"To ride the roller coaster, a person must be at least 120cm tall AND weigh less than 150kg.\"</p>\n<blockquote class=\"desc-callout callout-highlight\">\n    <strong>Python translation:</strong> <code>can_ride = height_cm &gt;= 120 and weight_kg &lt; 150</code>\n</blockquote>\n\n<p>Translating rules carefully is critical to avoid software bugs and security issues in real-world applications!</p>"
        },

        "qna": [
            { "q": "What is logic building?", "a": "Logic building is the process of translating real-world problems, rules, and conditions into structured, unambiguous code statements." },
            { "q": "How do you write a rule like 'A and B, unless C' in Python?", "a": "The word 'unless' acts as a negation. You would write this as: <code>(A and B) and not C</code>." },
            { "q": "How do you check if a number is between two values, inclusive?", "a": "To check if age is between 18 and 30 inclusive, you write: <code>age &gt;= 18 and age &lt;= 30</code>. You can also write the shortcut: <code>18 &lt;= age &lt;= 30</code>." },
            { "q": "Why are parentheses important when combining 'and' and 'or' logic?", "a": "Because <code>and</code> is evaluated before <code>or</code>, omitting parentheses can lead to bugs. For example, <code>(is_admin or has_permit) and is_logged_in</code> works differently from <code>is_admin or (has_permit and is_logged_in)</code>." },
            { "q": "How can I verify if my real-world logical translation is correct?", "a": "By testing the logic with different combinations of inputs (e.g. testing an admin user, a suspended user, and a guest user) to check that the boolean output matches the expected result." }
        ],

        "test": {
            "intro": "Let's check your ability to build logical expressions for real-life business rules!",
            "questions": [
                { "type": "mcq", "question": "A customer gets free shipping if they are premium OR if their order is over 50. Which expression represents this?", "options": ["free = premium and order > 50", "free = premium or order > 50", "free = not premium and order > 50", "free = premium or order >= 50"], "answer": 1 },
                { "type": "mcq", "question": "To enter a concert, you must have a ticket AND be accompanied by an adult if you are under 18. If under_18 is True, how is this checked?", "options": ["can_enter = ticket and accompanied", "can_enter = ticket or accompanied", "can_enter = not ticket and accompanied", "can_enter = ticket and not accompanied"], "answer": 0 },
                { "type": "mcq", "question": "An alarm triggers if it is night AND a window is open, OR if a smoke sensor is active. Which expression is correct?", "options": ["alarm = is_night and is_window_open or smoke", "alarm = (is_night and is_window_open) or smoke", "alarm = is_night and (is_window_open or smoke)", "alarm = is_night or is_window_open and smoke"], "answer": 1 },
                { "type": "fill", "question": "To check if a score is strictly between 80 and 90 (exclusive), you write: score > 80 and score < _____.", "answer": "90" },
                { "type": "fill", "question": "The logical expression to check if a user is NOT banned is written as: not _____.", "answer": "is_banned" },
                { "type": "fill", "question": "If age = 15, the expression: age >= 13 and age <= 19 evaluates to _____.", "answer": "True" },
                { "type": "tf", "question": "The statement: is_weekend and is_sunny will return True if it is a sunny Monday.", "answer": "false" },
                { "type": "tf", "question": "Parentheses are unnecessary when combining 'and' and 'or' because calculations evaluate left-to-right.", "answer": "false" },
                { "type": "tf", "question": "The expression: score < 0 or score > 100 checks if a score is invalid (assuming valid range is 0 to 100).", "answer": "true" },
                { "type": "short", "question": "Write a logical expression that checks if a visitor can ride a theme park attraction. The requirements: they must be at least 140cm tall, and they must NOT have a heart condition.", "sampleAnswer": "can_ride = height_cm >= 140 and not has_heart_condition" }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Beginner Coding Challenge",
            "subheading": "Put your knowledge to the test!",
            "body": "<p>Congratulations on reaching <strong>Level 25</strong>, which marks the completion of <strong>STAGE 3: Operators & Logic</strong>!</p>\n\n<p>Now, you will face your first major coding challenge. Instead of writing simple one-line checks, you will combine all the concepts you have learned so far:</p>\n<ul class=\"desc-list\">\n    <li>Storing and manipulating values inside <strong>variables</strong>.</li>\n    <li>Using <strong>arithmetic operators</strong> like floor division (<code>//</code>) and modulus (<code>%</code>).</li>\n    <li>Constructing clean, formatted outputs using <strong>f-strings</strong>.</li>\n</ul>\n\n<p>Solving coding challenges requires a systematic approach. Make sure you read the requirements carefully, define the correct variables, run the necessary calculations, and double-check your output formatting. Good luck!</p>"
        },

        "qna": [
            { "q": "What is an algorithmic coding challenge?", "a": "An algorithmic coding challenge is a structured problem where you are given a description, inputs, and expected outputs, and you must write code to solve it." },
            { "q": "How should I approach a coding challenge?", "a": "First, carefully read and understand the problem requirements. Identify inputs, expected outputs, and boundaries. Plan the logic in your mind or using code comments, then write and test your solution." },
            { "q": "Can I use multiple operators together in coding challenges?", "a": "Yes! You can chain calculations, comparisons, and logical checks. Use parentheses <code>()</code> to guarantee the operations execute in the order you expect." },
            { "q": "What is formatting and why is it verified in challenges?", "a": "Formatting guarantees that output matches expected user interfaces or API structures. Printing raw numbers is often not enough; you must present data in clean, readable sentence formats using f-strings." },
            { "q": "What are edge cases?", "a": "Edge cases are unusual or extreme inputs that might break a program (like negative values, extremely large numbers, or zero). Designing programs to handle edge cases is an essential coding skill." }
        ],

        "test": {
            "intro": "Let's check your preparation for the final Stage 3 coding challenge!",
            "questions": [
                { "type": "mcq", "question": "Which steps describe the correct order of solving a coding challenge?", "options": ["Write code, debug, submit without reading", "Understand requirements, plan logic, write code, test", "Copy from internet, paste, run", "Guess options, submit, repeat"], "answer": 1 },
                { "type": "mcq", "question": "If a challenge asks you to calculate the area of a rectangle given length and width, which operator do you use?", "options": ["+", "-", "*", "/"], "answer": 2 },
                { "type": "mcq", "question": "If a challenge requires you to read a user's age as a whole integer from input, which syntax is correct?", "options": ["age = input()", "age = int(input())", "age = float(input())", "age = str(input())"], "answer": 1 },
                { "type": "fill", "question": "A test case with extreme or unusual inputs that could potentially break a program is called an _____ case.", "answer": "edge" },
                { "type": "fill", "question": "The formatting style that embeds variables directly inside string curly braces is called an _____-string.", "answer": "f" },
                { "type": "fill", "question": "If x = 10 and y = 3, then x // y evaluates to the integer _____.", "answer": "3" },
                { "type": "tf", "question": "Algorithmic challenges only accept one specific way of writing the code, and other valid approaches will fail.", "answer": "false" },
                { "type": "tf", "question": "It is a good practice to plan your code on paper or in comments before writing it.", "answer": "true" },
                { "type": "tf", "question": "The statement print('Result:', result) is a basic way of formatting output.", "answer": "true" },
                { "type": "short", "question": "If a challenge asks you to check if a number is positive and even, what logical expression would you write?", "sampleAnswer": "number > 0 and number % 2 == 0" }
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
        "sections": ["description", "qna", "test"],

        "description": {
            "heading": "Why Decisions in Programming",
            "subheading": "How programs make choices and adapt",
            "body": "<p>Up until now, all the Python programs we have written have run line-by-line, sequentially, from top to bottom. Every single line of code executed, no matter what inputs or values were active. This is called a linear execution flow.</p>\n\n<p>But real life isn't a straight line. We make choices based on criteria: <em>\"If it is raining, take an umbrella. Otherwise, leave it at home.\"</em></p>\n\n<h3>The Concept of Conditional Branching</h3>\n<p>Computer programs need this same intelligence. We call this <strong>Conditional Branching</strong> or **Decision Making**. Without decision-making capability, software would be completely static and inflexible:</p>\n<ul class=\"desc-list\">\n    <li>A **login page** would let everyone in because it couldn't check <em>if</em> the password is correct.</li>\n    <li>An **ATM** would dispense cash even if you have zero balance because it couldn't check <em>if</em> you have sufficient funds.</li>\n    <li>A **video game** wouldn't show a \"Game Over\" screen because it couldn't check <em>if</em> player lives have hit zero.</li>\n</ul>\n\n<h3>How Decisions Work in Python</h3>\n<p>In Python, decision-making is controlled by checking expressions that resolve to a boolean value (<code>True</code> or <code>False</code>). Based on that true/false state, the program branches and executes a specific block of code while skipping other blocks completely.</p>\n\n<blockquote class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>What's Next?</strong> In the following levels, we will learn the exact syntax to implement these decisions using keywords like <code>if</code>, <code>else</code>, and <code>elif</code>!</div>\n</blockquote>"
        },

        "qna": [
            { "q": "Why does code need decision-making statements?", "a": "Without them, programs can only run sequentially, executing every line of code. Decision-making statements allow programs to choose which code block to run based on runtime conditions." },
            { "q": "What is conditional branching?", "a": "Conditional branching is the mechanism by which a program executes different instructions or paths (branches) depending on whether a given condition evaluates to True or False." },
            { "q": "How do computers evaluate decisions?", "a": "Computers evaluate decisions by checking conditional expressions. These expressions resolve to a boolean value: either <code>True</code> or <code>False</code>. If True, one branch executes; if False, another does." },
            { "q": "Give a real-life example of decision-making logic in software.", "a": "An ATM withdrawal: <strong>If</strong> the requested cash amount is less than or equal to the account balance, dispense the money. <strong>Else</strong>, display an error message." },
            { "q": "What keywords does Python use for decision making?", "a": "Python uses the keywords <code>if</code>, <code>elif</code> (short for else-if), and <code>else</code> to control code execution flow." }
        ],

        "test": {
            "intro": "Let's check your understanding of why decision making is necessary in coding!",
            "questions": [
                { "type": "mcq", "question": "What is the primary purpose of decision-making statements in programming?", "options": ["To speed up program execution", "To run code conditionally based on specific criteria", "To repeat code blocks multiple times", "To delete variables from memory"], "answer": 1 },
                { "type": "mcq", "question": "Which flow describes a sequential program?", "options": ["Lines execute out of order randomly", "Lines execute one after another from top to bottom", "Lines execute only if a button is clicked", "Lines are skipped automatically"], "answer": 1 },
                { "type": "mcq", "question": "What data type must a decision condition evaluate to in Python?", "options": ["An integer", "A string", "A boolean (True or False)", "A float"], "answer": 2 },
                { "type": "fill", "question": "The concept of executing different blocks of code based on conditions is called conditional _____.", "answer": "branching" },
                { "type": "fill", "question": "In Python, the statement used to run code ONLY if a condition is True starts with the keyword _____.", "answer": "if" },
                { "type": "fill", "question": "If a condition is False, the fallback code block that runs is defined by the keyword _____.", "answer": "else" },
                { "type": "tf", "question": "Sequential code executes every line from start to finish without skipping any statement.", "answer": "true" },
                { "type": "tf", "question": "A program can make a decision without using boolean values.", "answer": "false" },
                { "type": "tf", "question": "Decision statements allow programs to interact dynamically with user inputs.", "answer": "true" },
                { "type": "short", "question": "Give three real-world examples of conditional decisions in common mobile applications.", "sampleAnswer": "1. Messengers: If message is sent, show one check; if delivered, show two checks. 2. Stores: If cart total is over 50, apply free shipping. 3. Games: If lives are 0, end the game." }
            ]
        }
    },
    {
        "id": 27,
        "title": "if statement",
        "concept": "Executing code conditionally using the 'if' statement, indentation syntax, and conditional blocks in Python",
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The if Statement",
            "subheading": "Running code only when a condition is True",
            "body": "<p>The simplest way to make a decision in Python is by using the <strong><code>if</code> statement</strong>. It tells the computer to run a block of code ONLY if a certain condition is True.</p>\n\n<h3>Basic Syntax</h3>\n<pre class=\"code-example\">if condition:\n    # code to run if condition is True</pre>\n\n<h3>Two Crucial Python Syntax Rules</h3>\n<ol class=\"desc-list\">\n    <li><strong>The Colon (<code>:</code>):</strong> You must place a colon at the end of the <code>if</code> line. This indicates that a new block of code is about to start.</li>\n    <li><strong>Indentation:</strong> In Python, we do not use curly braces <code>{}</code> to group blocks of code. Instead, we indent (typically 4 spaces or 1 tab) the code block. All statements with the same level of indentation are part of that conditional block!</li>\n</ol>\n\n<pre class=\"code-example\">is_raining = True\nif is_raining:\n    print(\"Grab your umbrella!\")\n    print(\"Put on a raincoat!\")\nprint(\"Have a nice day!\") # This always runs because it is not indented!</pre>\n\n<p>If <code>is_raining</code> is <code>False</code>, Python skips the indented lines completely and prints only \"Have a nice day!\".</p>"
        },

        "qna": [
            { "q": "What does the 'if' statement do?", "a": "The <code>if</code> statement checks if a condition is True. If so, it runs the indented code block directly underneath. If the condition is False, Python skips that block." },
            { "q": "Why is indentation syntactically required in Python?", "a": "Unlike languages like JavaScript or C++ that use curly brackets <code>{}</code> to group statements, Python uses indentation level. Incorrect indentation will cause an <code>IndentationError</code>." },
            { "q": "What is the standard indentation size?", "a": "The standard Python style (PEP 8) recommends using <strong>4 spaces</strong> per indentation level. Be consistent and avoid mixing tabs and spaces!" },
            { "q": "What happens if I forget the colon (:) at the end of the if line?", "a": "Forgetting the colon will result in a <code>SyntaxError</code> because Python requires the colon to mark the start of a conditional block." },
            { "q": "Can I use a boolean variable directly as the condition?", "a": "Yes! If <code>is_active = True</code>, you can simply write <code>if is_active:</code> instead of <code>if is_active == True:</code>. It is cleaner and more professional." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's basic if statement!",
            "questions": [
                { "type": "mcq", "question": "What is the correct syntax for a basic if statement in Python?", "options": ["if x > 5 print(x)", "if (x > 5) { print(x) }", "if x > 5:", "if x > 5 then:"], "answer": 2 },
                { "type": "mcq", "question": "How does Python determine which lines of code belong inside an if block?", "options": ["By placing them inside parentheses ()", "By indenting the lines", "By ending lines with a semicolon ;", "By placing them on the same line"], "answer": 1 },
                { "type": "mcq", "question": "Which error is raised if you forget to indent code inside an if block?", "options": ["SyntaxError", "TypeError", "IndentationError", "NameError"], "answer": 2 },
                { "type": "fill", "question": "In Python, you must put a _____ character at the end of the line containing the if condition.", "answer": "colon" },
                { "type": "fill", "question": "The recommended number of spaces to use for indentation in Python is _____.", "answer": "4" },
                { "type": "fill", "question": "If has_key = False, the code inside the block 'if has_key:' will be _____ during execution.", "answer": "skipped" },
                { "type": "tf", "question": "You can use curly brackets {} to group code blocks in Python just like in JavaScript.", "answer": "false" },
                { "type": "tf", "question": "Mixing spaces and tabs for indentation in the same code block can cause an IndentationError.", "answer": "true" },
                { "type": "tf", "question": "The condition in an if statement must always evaluate to a boolean (True or False).", "answer": "true" },
                { "type": "short", "question": "If temperature = 32, explain what happens when this code runs:\nif temperature > 30:\n    print('Hot')\nprint('Done')", "sampleAnswer": "Since temperature is 32, which is greater than 30, the condition is True. Python runs the indented line printing 'Hot', then runs the unindented sequential line printing 'Done'." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The if-else Statement",
            "subheading": "Providing a fallback choice",
            "body": "<p>Sometimes you want to run one block of code if a condition is True, and a <strong>different block</strong> of code if it is False. This is handled using the <strong><code>if-else</code> statement</strong>.</p>\n\n<h3>Basic Syntax</h3>\n<pre class=\"code-example\">if condition:\n    # Runs if condition is True\nelse:\n    # Runs if condition is False</pre>\n\n<h3>Important Syntax Rules</h3>\n<ol class=\"desc-list\">\n    <li><strong>No Condition for Else:</strong> The <code>else</code> keyword represents a catch-all fallback. It never takes a condition.</li>\n    <li><strong>The Colon:</strong> Just like <code>if</code>, the <code>else</code> keyword must end with a colon (<code>:</code>).</li>\n    <li><strong>Alignment:</strong> The <code>else</code> keyword must be at the exact same indentation level (aligned vertically) as the <code>if</code> keyword.</li>\n    <li><strong>Indented Blocks:</strong> The code inside both the <code>if</code> and <code>else</code> blocks must be indented.</li>\n</ol>\n\n<pre class=\"code-example\">score = 45\nif score &gt;= 50:\n    print(\"You passed!\")\nelse:\n    print(\"You failed. Try again!\")</pre>\n<p>Since <code>score</code> is <code>45</code>, <code>score &gt;= 50</code> is False. Python skips the first print block, goes straight to the <code>else</code> block, and prints \"You failed. Try again!\".</p>"
        },

        "qna": [
            { "q": "When should I use an if-else statement?", "a": "Use <code>if-else</code> when you have two mutually exclusive choices: one block of code should run if the condition is True, and another different block should run if the condition is False." },
            { "q": "Does the else block accept a condition expression?", "a": "No, <code>else</code> is a fallback. It simple handles any cases that do not satisfy the <code>if</code> condition, so it does not accept a condition." },
            { "q": "How must the 'else' keyword be aligned in the editor?", "a": "It must be aligned vertically with the exact same indentation level as its matching <code>if</code> statement. Alignment mismatches will throw a <code>SyntaxError</code>." },
            { "q": "Can I write regular code after an if-else block?", "a": "Yes! Unindented code written after the <code>if-else</code> structure will execute sequentially, regardless of which branch of the decision was evaluated." },
            { "q": "What happens if both the if and else code blocks are placed on a single line?", "a": "While single-line statements are occasionally possible for trivial instructions, standard Python blocks require new lines and proper indentations for formatting correctness." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's if-else statement!",
            "questions": [
                { "type": "mcq", "question": "Which keyword executes code when the if condition evaluates to False?", "options": ["elseif", "else", "then", "otherwise"], "answer": 1 },
                { "type": "mcq", "question": "Which of the following has correct syntax for an if-else structure?", "options": ["if x > 5: print(x) else: print(y)", "if x > 5:\n    print(x)\nelse:\n    print(y)", "if x > 5:\n    print(x)\n    else:\n    print(y)", "if x > 5:\n    print(x)\nelse x <= 5:\n    print(y)"], "answer": 1 },
                { "type": "mcq", "question": "Does the else keyword take a conditional expression?", "options": ["Yes, always", "No, never", "Only if it is a number", "Only if it is a boolean"], "answer": 1 },
                { "type": "fill", "question": "The else keyword must always be followed by a _____ symbol.", "answer": "colon" },
                { "type": "fill", "question": "If age = 18, then age >= 18 is True, so the _____ block of an if-else statement executes.", "answer": "if" },
                { "type": "fill", "question": "If age = 15, then age >= 18 is False, so the _____ block of an if-else statement executes.", "answer": "else" },
                { "type": "tf", "question": "The else keyword must have the exact same indentation level as its matching if keyword.", "answer": "true" },
                { "type": "tf", "question": "A single if statement can have multiple else blocks directly connected to it.", "answer": "false" },
                { "type": "tf", "question": "Writing else: on the same line as the if block is valid in Python.", "answer": "false" },
                { "type": "short", "question": "Correct the indentation of this snippet:\nx = 10\nif x > 5:\nprint('Big')\nelse:\nprint('Small')", "sampleAnswer": "Align x = 10, if, and else. Indent print('Big') and print('Small') by 4 spaces." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The elif Keyword",
            "subheading": "Checking multiple distinct conditions",
            "body": "<p>What if your decision has more than two possible outcomes? E.g., if a score is 90 or more, print Grade A; if it's 80 or more, print Grade B; otherwise, print Grade C. In Python, we write \"else if\" as <strong><code>elif</code></strong>.</p>\n\n<h3>Syntax Structure</h3>\n<pre class=\"code-example\">if condition_1:\n    # Runs if condition_1 is True\nelif condition_2:\n    # Runs if condition_1 is False AND condition_2 is True\nelse:\n    # Runs if all preceding conditions are False</pre>\n\n<h3>Crucial Rules of elif</h3>\n<ol class=\"desc-list\">\n    <li><strong>Sequential Evaluation:</strong> Python checks conditions from top to bottom. The moment it finds a condition that evaluates to True, it runs that block and **skips the remaining checks entirely** (even if other conditions would also be True!).</li>\n    <li><strong>Chain Length:</strong> You can add as many <code>elif</code> statements as you need between the initial <code>if</code> and the final optional <code>else</code> block.</li>\n</ol>\n\n<pre class=\"code-example\">score = 85\nif score &gt;= 90:\n    print(\"Grade A\")\nelif score &gt;= 80:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")\n# Output: Grade B (85 &gt;= 80 is True, so Grade C is skipped)</pre>"
        },

        "qna": [
            { "q": "What does 'elif' stand for?", "a": "It stands for <strong>else if</strong>. It checks a condition only when all preceding <code>if</code> and <code>elif</code> checks have evaluated to False." },
            { "q": "How many 'elif' blocks can follow a single 'if'?", "a": "You can chain as many <code>elif</code> statements as you need. There is no limit." },
            { "q": "Why is the order of conditions important in an if-elif block?", "a": "Since Python evaluates top-to-bottom and stops checking once it finds a True condition, placing broad conditions first can hide more specific conditions beneath them, causing logic bugs." },
            { "q": "Can I use 'elif' without a preceding 'if' statement?", "a": "No, an <code>elif</code> statement must always belong to an active block initiated by a starting <code>if</code> statement. Doing otherwise triggers a <code>SyntaxError</code>." },
            { "q": "Is the final 'else' block mandatory?", "a": "No, the final <code>else</code> is optional. If all conditions are False and there is no <code>else</code>, Python simply skips the entire block and moves on." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's elif statement!",
            "questions": [
                { "type": "mcq", "question": "What does elif stand for in Python?", "options": ["else life", "else if", "element if", "error life"], "answer": 1 },
                { "type": "mcq", "question": "How many elif blocks can follow a single if statement?", "options": ["Only one", "At most two", "Unlimited", "None"], "answer": 2 },
                { "type": "mcq", "question": "If score = 95 is run, what is printed?\nif score >= 80: print('Pass')\nelif score >= 90: print('Excellent')", "options": ["Pass", "Excellent", "Pass and Excellent", "Nothing"], "answer": 0 },
                { "type": "fill", "question": "In Python, the elif keyword must be followed by a condition and end with a _____.", "answer": "colon" },
                { "type": "fill", "question": "The fallback block that runs only if all if/elif conditions are False is the _____ block.", "answer": "else" },
                { "type": "fill", "question": "If x = 0, the code: if x > 0: print('P') elif x < 0: print('N') else: print('Z') prints _____.", "answer": "Z" },
                { "type": "tf", "question": "You can write an elif statement before the starting if statement.", "answer": "false" },
                { "type": "tf", "question": "Once any branch in an if-elif-else chain executes, all subsequent branches are skipped.", "answer": "true" },
                { "type": "tf", "question": "The final else block executes if at least one elif condition is True.", "answer": "false" },
                { "type": "short", "question": "Explain why this code prints 'Grade C' for score = 95:\nif score >= 70: print('Grade C')\nelif score >= 90: print('Grade A')", "sampleAnswer": "Since 95 >= 70 is True, Python executes the first block ('Grade C') and immediately exits, skipping the remaining checks." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Nested Conditions",
            "subheading": "Decisions within decisions",
            "body": "<p>Sometimes, a decision depends on another decision. For example: Is it the weekend? If yes, is it sunny? If yes, go to the beach. In programming, placing a conditional statement <strong>inside another conditional statement</strong> is called <strong>Nesting</strong>.</p>\n\n<h3>Syntax and Indentation Levels</h3>\n<p>Nesting requires careful indentation. Each nested statement must be indented by an additional level (e.g. 4 more spaces) relative to the outer statement. Correct alignment is essential for Python to understand your code structure!</p>\n\n<pre class=\"code-example\">is_weekend = True\nis_sunny = False\n\nif is_weekend:\n    print(\"It's the weekend!\")\n    if is_sunny:\n        print(\"Let's go to the beach!\")\n    else:\n        print(\"Let's watch a movie!\") # Runs because is_sunny is False\nelse:\n    print(\"Go to school!\")</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Readability Tip:</strong> Try to avoid nesting code too deeply (e.g. more than 3 levels). Deeply nested code is hard to read and debug. You can often simplify nested logic by using logical operators like <code>and</code> or <code>or</code>!</div>\n</div>"
        },

        "qna": [
            { "q": "What are nested conditions?", "a": "Nested conditions are conditional statements (like <code>if</code> or <code>if-else</code>) written inside the execution block of another conditional statement." },
            { "q": "How does Python determine which block an else statement belongs to?", "a": "Python matches an <code>else</code> statement to the preceding <code>if</code> statement that shares the exact same vertical alignment (indentation level)." },
            { "q": "Is there a limit to nesting depth in Python?", "a": "There is no strict compiler limit, but nesting deeper than 3 levels is considered poor practice because it creates hard-to-read code." },
            { "q": "When should I use nesting instead of a logical 'and'?", "a": "Use nesting if you need to run specific intermediate operations (e.g. log actions or update variables) after the first check passes but before the second check runs." },
            { "q": "What happens if the outer condition evaluates to False?", "a": "If the outer condition is False, Python skips the entire block, which means all inner nested conditions are completely ignored." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's nested conditions!",
            "questions": [
                { "type": "mcq", "question": "What is a nested condition in programming?", "options": ["Putting loops inside functions", "Placing a conditional statement inside another conditional statement", "Using multiple logical operators in one line", "Writing code in comments"], "answer": 1 },
                { "type": "mcq", "question": "How does Python match an else block to its corresponding if statement?", "options": ["By matching parentheses", "By checking their vertical alignment (indentation)", "By evaluation order", "By variable names"], "answer": 1 },
                { "type": "mcq", "question": "If x = 5 and y = 10, what does this print?\nif x > 2:\n    if y < 5: print('A')\n    else: print('B')", "options": ["A", "B", "A and B", "Nothing"], "answer": 1 },
                { "type": "fill", "question": "Each level of nesting in Python code requires another level of _____.", "answer": "indentation" },
                { "type": "fill", "question": "If the outer condition is False, all nested inner conditions inside it are _____.", "answer": "skipped" },
                { "type": "fill", "question": "To keep code clean, instead of deep nesting, you can combine conditions using _____ operators.", "answer": "logical" },
                { "type": "tf", "question": "An inner else statement must be aligned with its corresponding inner if statement.", "answer": "true" },
                { "type": "tf", "question": "If the outer condition is False, the inner else statement can still run.", "answer": "false" },
                { "type": "tf", "question": "Nested statements can have their own nested statements inside them.", "answer": "true" },
                { "type": "short", "question": "Explain why this code prints nothing: if x > 5: (where x = 3) if y > 10: print('Yes')", "sampleAnswer": "The outer condition x > 5 (3 > 5) evaluates to False. Python skips the entire block, ignoring the inner y check." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Multiple Conditions",
            "subheading": "Combining choices with logical operators",
            "body": "<p>In Level 30, we saw that nesting conditions too deeply can make code complex and hard to read. A much cleaner way to handle multiple checks in a single decision is by combining conditions using <strong>logical operators</strong> (<code>and</code>, <code>or</code>, <code>not</code>).</p>\n\n<h3>Nesting vs Combining</h3>\n<p>Instead of nesting if statements like this:</p>\n<pre class=\"code-example\">if is_weekend:\n    if is_sunny:\n        print(\"Go to the beach!\")</pre>\n\n<p>We can combine them on a single line using <code>and</code>:</p>\n<pre class=\"code-example\">if is_weekend and is_sunny:\n    print(\"Go to the beach!\")</pre>\n\n<h3>Reviewing Logical Operators in Decisions</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>and</code>:</strong> The code block runs ONLY if <strong>both</strong> conditions evaluate to True.</li>\n    <li><strong><code>or</code>:</strong> The code block runs if <strong>at least one</strong> condition evaluates to True.</li>\n    <li><strong><code>not</code>:</strong> Inverts the boolean result of a check. E.g. <code>if not is_locked:</code> runs if is_locked is False.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Syntax Reminder:</strong> Even with combined conditions, the colon (<code>:</code>) goes at the very end of the <code>if</code> line, and the lines belonging to the execution block must be indented by 4 spaces. Always use parentheses <code>()</code> to make complex combinations readable!</div>\n</div>"
        },

        "qna": [
            { "q": "When should I combine conditions instead of nesting them?", "a": "Combine conditions when you want to execute a block of code only when a set of conditions are all met (using <code>and</code>) or when at least one condition is met (using <code>or</code>), without needing intermediate operations." },
            { "q": "Can I combine more than two conditions in a single if statement?", "a": "Yes! You can chain multiple checks together. For example: <code>if age &gt;= 18 and has_id and not is_suspended:</code>." },
            { "q": "How does Python evaluate combined expressions with different logical operators?", "a": "Python evaluates <code>and</code> before <code>or</code> because of precedence. To avoid logical errors and ensure your checks run in the correct order, wrap grouped conditions inside parentheses <code>()</code>." },
            { "q": "What is short-circuit evaluation in combined if statements?", "a": "In an <code>and</code> check, if the first condition is False, Python stops evaluating immediately. In an <code>or</code> check, if the first condition is True, Python stops immediately. This saves computing power." },
            { "q": "Can I check variables of different data types in the same conditional line?", "a": "Yes, as long as each separate expression evaluates to a boolean value. E.g., <code>if age &gt;= 18 and user_role == 'admin':</code>." }
        ],

        "test": {
            "intro": "Let's check your understanding of combining multiple conditions in Python!",
            "questions": [
                { "type": "mcq", "question": "Which operator checks if both conditions are True in a single if statement?", "options": ["or", "and", "not", "is"], "answer": 1 },
                { "type": "mcq", "question": "What is printed when this code is executed?\nx = 5\ny = 10\nif x > 3 or y < 5: print('Hello')\nelse: print('Goodbye')", "options": ["Hello", "Goodbye", "Hello and Goodbye", "Nothing"], "answer": 0 },
                { "type": "mcq", "question": "If is_logged_in = True and has_permission = False, which condition evaluates to True?", "options": ["if is_logged_in and has_permission:", "if is_logged_in or has_permission:", "if not is_logged_in and has_permission:", "if is_logged_in and not is_logged_in:"], "answer": 1 },
                { "type": "fill", "question": "The logical operator that requires only one of the combined conditions to be True is _____.", "answer": "or" },
                { "type": "fill", "question": "To override the standard evaluation order where 'and' runs before 'or', you should use _____.", "answer": "parentheses" },
                { "type": "fill", "question": "If x = 7, the expression x > 5 and x < 10 evaluates to the boolean _____.", "answer": "True" },
                { "type": "tf", "question": "Chaining multiple 'and' operators in a single if statement requires all conditions to be True for the block to run.", "answer": "true" },
                { "type": "tf", "question": "In the check: if A or B:, if A evaluates to True, Python still evaluates B to verify its correctness.", "answer": "false" },
                { "type": "tf", "question": "The statement: if not is_sunny: runs only when is_sunny is False.", "answer": "true" },
                { "type": "short", "question": "Explain what is wrong with this statement: if score >= 50 and <= 100:", "sampleAnswer": "Each logical comparison must be a complete expression with both a left and right side. It should be: if score >= 50 and score <= 100:" }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Short-Hand if",
            "subheading": "Writing single-line conditional statements",
            "body": "<p>If you only have a single statement to execute inside your <code>if</code> block, you can write it all on a single line! This is known as <strong>Short-Hand <code>if</code></strong>.</p>\n\n<h3>Standard vs Short-Hand Syntax</h3>\n<p>Standard multi-line <code>if</code> statement:</p>\n<pre class=\"code-example\">x = 10\nif x &gt; 5:\n    print(\"x is positive\")</pre>\n\n<p>Short-hand single-line <code>if</code> statement:</p>\n<pre class=\"code-example\">x = 10\nif x &gt; 5: print(\"x is positive\")</pre>\n\n<p>Both snippets do the exact same thing. The short-hand version is useful for making simple checks concise and saving space in your files.</p>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Readability Note:</strong> You should only use short-hand single-line checks for very short and simple statements. Chaining too many commands on one line makes code hard to read and goes against Python's clean code style guidelines!</div>\n</div>"
        },

        "qna": [
            { "q": "What is a short-hand if statement?", "a": "A short-hand if statement is a syntax shortcut that allows you to write a complete <code>if</code> check and its execution body on a single line." },
            { "q": "What is the syntax for short-hand if?", "a": "Simply write the condition, a colon, a space, and the single statement to execute. E.g. <code>if condition: statement</code>." },
            { "q": "Can I write multiple statements on the same line after the colon?", "a": "Technically, Python allows separating multiple statements with a semicolon (e.g. <code>if x &gt; 5: print('Yes'); x = 0</code>), but this is considered bad practice because it decreases code readability." },
            { "q": "When should I avoid using short-hand if?", "a": "Avoid it when the condition is long, when there are multiple statements to run, or when using complex nested structures. Keep code clean and easy to scan." },
            { "q": "Does short-hand if run faster?", "a": "No, it performs exactly the same as the multi-line version. It is just syntactic sugar to make source files cleaner for developers." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's short-hand if statement!",
            "questions": [
                { "type": "mcq", "question": "Which of the following is a valid short-hand if statement in Python?", "options": ["if x > 5: print(x)", "if x > 5 then print(x)", "if x > 5: { print(x) }", "if x > 5: print x"], "answer": 0 },
                { "type": "mcq", "question": "When is it recommended to use short-hand if?", "options": ["For all conditionals", "Only when there is a single simple statement to execute", "When nesting multiple checks", "Never"], "answer": 1 },
                { "type": "mcq", "question": "What separates multiple statements on a single line in Python (though discouraged)?", "options": [", (comma)", "; (semicolon)", ". (period)", "/ (slash)"], "answer": 1 },
                { "type": "fill", "question": "The syntax shortcut where the condition and execution body are written on one line is called _____ if.", "answer": "short-hand" },
                { "type": "fill", "question": "In the statement 'if x > 5: print(x)', the print statement is placed directly after the _____ character.", "answer": "colon" },
                { "type": "fill", "question": "If x = 4, the expression 'if x > 5: print(\"Yes\")' will execute _____ lines of output.", "answer": "0" },
                { "type": "tf", "question": "Short-hand if statements require indenting the code block on the next line.", "answer": "false" },
                { "type": "tf", "question": "Writing 'if score >= 50: print(\"Passed\")' is syntactically valid in Python.", "answer": "true" },
                { "type": "tf", "question": "Short-hand if performs checks faster than standard multi-line if statements.", "answer": "false" },
                { "type": "short", "question": "Rewrite this multi-line code into a single-line short-hand if statement:\nif is_active:\n    print('Online')", "sampleAnswer": "if is_active: print('Online')" }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Ternary Operator",
            "subheading": "Conditional expressions on a single line",
            "body": "<p>We have seen short-hand <code>if</code> for running single statements. What if we want to <strong>assign a value to a variable</strong> based on a condition? E.g., if score is 50 or more, result is \"Pass\", else result is \"Fail\".</p>\n\n<p>Instead of writing 4 lines of block code, we can use Python's <strong>Ternary Operator</strong> (also called a conditional expression) to do this in a single line!</p>\n\n<h3>Syntax Structure</h3>\n<pre class=\"code-example\">variable = value_if_true if condition else value_if_false</pre>\n\n<pre class=\"code-example\">score = 80\nresult = \"Pass\" if score &gt;= 50 else \"Fail\"\nprint(result) # Outputs: Pass</pre>\n\n<h3>Analyzing the Expression</h3>\n<ol class=\"desc-list\">\n    <li>First, specify the value you want if the condition is True (<code>\"Pass\"</code>).</li>\n    <li>Second, write the keyword <code>if</code> and the condition to test (<code>score &gt;= 50</code>).</li>\n    <li>Third, write the keyword <code>else</code> and the value you want if the condition is False (<code>\"Fail\"</code>).</li>\n</ol>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>No Colons:</strong> Notice that colons (<code>:</code>) are NOT used anywhere in a ternary operator expression. You can even pass ternary expressions directly inside functions, like <code>print(\"Access granted\" if is_admin else \"Access denied\")</code>!</div>\n</div>"
        },

        "qna": [
            { "q": "What is the ternary operator in Python?", "a": "The ternary operator is a shortcut syntax that evaluates a condition and returns one value if the condition is True, and an alternative value if it is False, all on a single line." },
            { "q": "What is the syntax for the ternary operator?", "a": "The format is: <code>value_if_true if condition else value_if_false</code>." },
            { "q": "Why is it called 'ternary'?", "a": "Because it takes three parts (operands): the true value, the condition itself, and the false value." },
            { "q": "Can I use the ternary operator inside a print statement?", "a": "Yes! E.g. <code>print('Yes' if active else 'No')</code> is a common way to print values conditionally." },
            { "q": "Do I need to put a colon after if or else in a ternary operator?", "a": "No. Colons are not used in Python's single-line conditional expressions." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's ternary operator!",
            "questions": [
                { "type": "mcq", "question": "Which of the following is the correct syntax for the ternary operator in Python?", "options": ["condition ? val1 : val2", "val1 if condition else val2", "if condition then val1 else val2", "val1 else val2 if condition"], "answer": 1 },
                { "type": "mcq", "question": "What is the output of: print('High' if 10 > 20 else 'Low')?", "options": ["High", "Low", "True", "False"], "answer": 1 },
                { "type": "mcq", "question": "If score = 80, what is stored in result after: result = 'A' if score >= 90 else 'B'?", "options": ["A", "B", "True", "False"], "answer": 1 },
                { "type": "fill", "question": "The ternary operator in Python consists of _____ parts or operands.", "answer": "3" },
                { "type": "fill", "question": "In the expression x = 'Yes' if is_ok else 'No', if is_ok is False, x holds the value _____.", "answer": "No" },
                { "type": "fill", "question": "Unlike block-level conditions, the ternary operator does not use the _____ character.", "answer": "colon" },
                { "type": "tf", "question": "The ternary operator is mainly used to perform conditional variable assignments or return operations.", "answer": "true" },
                { "type": "tf", "question": "The syntax: result = score >= 50 ? 'Pass' : 'Fail' is valid Python code.", "answer": "false" },
                { "type": "tf", "question": "You can nest ternary operators inside other ternary operators in Python.", "answer": "true" },
                { "type": "short", "question": "Convert this block into a ternary operator expression: if age >= 18: ticket = 'Adult' else: ticket = 'Child'", "sampleAnswer": "ticket = 'Adult' if age >= 18 else 'Child'" }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Decision-Based Coding",
            "subheading": "Solving conditional algorithms",
            "body": "<p>Now that you have mastered <code>if</code>, <code>else</code>, <code>elif</code>, nested conditions, and ternary operators, you are ready to tackle decision-based algorithms. In software, conditional logic represents the business rules that govern application behaviors.</p>\n\n<h3>How to Approach Decision-Based Problems</h3>\n<ol class=\"desc-list\">\n    <li><strong>Identify Input Criteria:</strong> What variables are given? What are their types?</li>\n    <li><strong>List Distinct States:</strong> What are the mutually exclusive outcomes? (e.g. positive, negative, zero).</li>\n    <li><strong>Order Your Conditions:</strong> Place specific, strict checks at the top of your <code>if-elif</code> chain, and broader fallbacks at the bottom.</li>\n    <li><strong>Verify Boundary Conditions:</strong> Check boundary values (like checking exactly 0 or 100) carefully to determine if you need strict (<code>&gt;</code>) or inclusive (<code>&gt;=</code>) comparisons.</li>\n</ol>\n\n<h3>Example Problem: Leap Year Check</h3>\n<p>A year is leap if it is divisible by 4. However, centurial years (ending in 00) must also be divisible by 400. Solving this requires combining modulus operations (<code>year % 4 == 0</code>) and nested comparisons to handle rules cleanly!</p>"
        },

        "qna": [
            { "q": "What are decision-based coding problems?", "a": "These are programming problems where the main goal is to correctly route different inputs to their appropriate outcomes using conditional structures." },
            { "q": "When should I use an if-elif chain versus nesting?", "a": "Use an <code>if-elif</code> chain for sequential, flat choices where only one branch should execute. Use nesting when a secondary decision depends directly on the outcome of a first decision." },
            { "q": "How do boundary values affect decision blocks?", "a": "Logical errors frequently occur at boundary values. Ensure you use the correct comparison operator (e.g. <code>&gt;=</code> vs <code>&gt;</code>) based on requirements." },
            { "q": "What is the best way to handle multiple checks in a single conditional statement?", "a": "Combine them with logical operators (<code>and</code>, <code>or</code>, <code>not</code>) and use parentheses <code>()</code> to keep code readable and ensure proper evaluation order." },
            { "q": "How can I verify that my conditional logic covers all possibilities?", "a": "Write test cases that hit every branch of your code, checking positive, negative, zero, and boundary inputs to verify correctness." }
        ],

        "test": {
            "intro": "Let's check your preparation for decision-based coding problems!",
            "questions": [
                { "type": "mcq", "question": "If a program checks if a number is positive, negative, or zero, which structure is best?", "options": ["A single if statement", "An if-else statement", "An if-elif-else chain", "Nested if statements only"], "answer": 2 },
                { "type": "mcq", "question": "What happens if you put a general check before a specific check in an if-elif chain?", "options": ["The specific check is never evaluated", "Python throws a syntax error", "The general check is skipped", "The code runs faster"], "answer": 0 },
                { "type": "mcq", "question": "Which operator checks if a year is divisible by 4 (remainder is 0)?", "options": ["year / 4 == 0", "year // 4 == 0", "year % 4 == 0", "year ** 4 == 0"], "answer": 2 },
                { "type": "fill", "question": "In a decision tree checking temperature ranges, if no specific ranges are met, execution routes to the final _____ block.", "answer": "else" },
                { "type": "fill", "question": "The logical check to see if number is positive and even is: number > 0 and number % 2 == _____.", "answer": "0" },
                { "type": "fill", "question": "If x = -5, the expression x > 0 evaluates to the boolean _____.", "answer": "False" },
                { "type": "tf", "question": "Putting a general check at the very top of an if-elif-else chain is a recommended best practice.", "answer": "false" },
                { "type": "tf", "question": "All conditions inside an if statement must evaluate to either True or False.", "answer": "true" },
                { "type": "tf", "question": "Indentation must match exactly across sibling elif and else blocks.", "answer": "true" },
                { "type": "short", "question": "Design an if-elif-else outline that checks if a grade is A (90+), B (80-89), or Fail (below 80).", "sampleAnswer": "if grade >= 90: print('A')\nelif grade >= 80: print('B')\nelse: print('Fail')" }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Logic Challenge",
            "subheading": "The final Stage 4 logic challenge!",
            "body": "<p>Welcome to <strong>Level 35</strong>, the final logic challenge of <strong>STAGE 4: Decision Making</strong>!</p>\n\n<p>In this room, you will face a complex logical problem testing your ability to construct multi-level decisions in Python. You must combine all the tools you have mastered so far:</p>\n<ul class=\"desc-list\">\n    <li>Checking multiple conditions and logical states.</li>\n    <li>Nesting decisions accurately with correct vertical indentations.</li>\n    <li>Applying colons (<code>:</code>) to initiate block scopes.</li>\n</ul>\n\n<p>Review the Q&As and quizzes below to verify your structural understanding, then jump into the coding console to resolve the final Stage 4 logic challenge!</p>"
        },

        "qna": [
            { "q": "What is the Stage 4 logic challenge?", "a": "It is a comprehensive problem combining nested checks, variable comparisons, and logical boundaries to verify your mastery of conditional flows." },
            { "q": "How can I prevent syntax errors in nested conditions?", "a": "By using consistent indentations (4 spaces per level) and ensuring every conditional block (<code>if</code>, <code>elif</code>, <code>else</code>) is terminated with a colon." },
            { "q": "When is it better to combine checks instead of nesting them?", "a": "If you do not need intermediate code execution between checks, combining conditions using <code>and</code> makes code shorter and easier to read." },
            { "q": "How do I test if my logic handles negative numbers?", "a": "By verifying that your conditions check less-than-zero states correctly, e.g., <code>if value &lt; 0:</code>." },
            { "q": "What are the common traps to avoid in this challenge?", "a": "Spelling mistakes in variable names, mixing tabs and spaces, forgetting colons, and misalignment of sibling block elements." }
        ],

        "test": {
            "intro": "Let's complete the final preparation quiz for the logic challenge!",
            "questions": [
                { "type": "mcq", "question": "What does not (True or False) and (5 > 2) evaluate to?", "options": ["True", "False", "Error", "None"], "answer": 1 },
                { "type": "mcq", "question": "Which statement is equivalent to: is_member = True if age >= 18 else False?", "options": ["is_member = age >= 18", "is_member = True", "is_member = age > 18", "is_member = age <= 18"], "answer": 0 },
                { "type": "mcq", "question": "If you have 3 conditions that must all be True, which operator do you use?", "options": ["or", "and", "not", "is"], "answer": 1 },
                { "type": "fill", "question": "Chained elif blocks are evaluated from top to _____ in Python.", "answer": "bottom" },
                { "type": "fill", "question": "The error thrown when mixing tabs and spaces in Python is _____Error.", "answer": "Indentation" },
                { "type": "fill", "question": "If x = 10, the expression: x > 5 or x < 0 evaluates to the boolean _____.", "answer": "True" },
                { "type": "tf", "question": "An else block is executed if none of the if/elif conditions in that block are True.", "answer": "true" },
                { "type": "tf", "question": "A ternary operator in Python can have an if without an else.", "answer": "false" },
                { "type": "tf", "question": "The logical 'not' operator has lower precedence than 'and' in Python.", "answer": "false" },
                { "type": "short", "question": "Explain why this nested block prints 'No': if x > 10: (where x = 12) if x < 15: if x % 2 != 0: print('Yes') else: print('No')", "sampleAnswer": "12 satisfies x > 10 and x < 15. The third check is 12 % 2 != 0, which is False. This executes the inner else block, printing 'No'." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Why Loops Exist",
            "subheading": "The power of iteration",
            "body": "<p>Imagine Doraemon asks Nobita to write <em>\"I will not forget my homework!\"</em> <strong>100 times</strong> as a punishment. Writing <code>print(\"I will not forget my homework!\")</code> 100 times manually is slow, boring, and makes code extremely long!</p>\n\n<p>What if Doraemon wants it 1,000 times? Or what if we need to print a message an unknown number of times (e.g. based on user input)? This is why we use **Loops**.</p>\n\n<h3>Key Benefits of Loops</h3>\n<ul class=\"desc-list\">\n    <li><strong>Avoid Duplication:</strong> Loops help you keep your code **DRY** (Don't Repeat Yourself).</li>\n    <li><strong>Dynamic Repetition:</strong> Loops can run as many times as a variable or user input dictates.</li>\n    <li><strong>Efficiency:</strong> Write the code once, and let the computer run it thousands of times!</li>\n</ul>\n\n<h3>Loops in Python</h3>\n<p>Python provides two main types of loops:</p>\n<ol class=\"desc-list\">\n    <li><strong><code>for</code> loops:</strong> Best for iterating over sequences (like strings or lists) or repeating code a specific number of times.</li>\n    <li><strong><code>while</code> loops:</strong> Best for repeating code as long as a certain condition remains True.</li>\n</ol>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>What is an Iteration?</strong> In programming, a single cycle or execution of a loop is called an <strong>iteration</strong>.</div>\n</div>"
        },

        "qna": [
            { "q": "Why do we need loops in programming?", "a": "Loops allow us to repeat a block of code multiple times without writing the same lines repeatedly, keeping our code clean, maintainable, and efficient." },
            { "q": "What does DRY stand for?", "a": "DRY stands for <strong>Don't Repeat Yourself</strong>. It is a core programming principle aimed at reducing duplication of code." },
            { "q": "What are the two main types of loops in Python?", "a": "Python features <code>for</code> loops (for iterating over a sequence or specific range) and <code>while</code> loops (for repeating actions as long as a condition is True)." },
            { "q": "What is a single loop execution called?", "a": "A single cycle or execution of a loop is called an <strong>iteration</strong>." },
            { "q": "What happens if a loop has no condition to stop?", "a": "It will run forever. This is called an <strong>infinite loop</strong>, which can freeze or crash your program. We must always ensure our loops have a path to terminate!" }
        ],

        "test": {
            "intro": "Let's check your understanding of why loops exist!",
            "questions": [
                { "type": "mcq", "question": "Which software design principle is directly promoted by using loops?", "options": ["KISS (Keep It Simple, Stupid)", "DRY (Don't Repeat Yourself)", "YAGNI (You Aren't Gonna Need It)", "SOLID"], "answer": 1 },
                { "type": "mcq", "question": "What is a single repetition of a loop called?", "options": ["Rotation", "Iteration", "Recursion", "Cycle"], "answer": 1 },
                { "type": "mcq", "question": "What occurs when a loop has no condition to stop?", "options": ["A SyntaxError is thrown", "An infinite loop", "The program runs faster", "Python deletes the code"], "answer": 1 },
                { "type": "fill", "question": "The DRY principle stands for Don't _____ Yourself.", "answer": "Repeat" },
                { "type": "fill", "question": "The loop that repeats as long as a condition is True is the _____ loop.", "answer": "while" },
                { "type": "fill", "question": "The loop used when you know in advance how many times to repeat is the _____ loop.", "answer": "for" },
                { "type": "tf", "question": "Writing print statements 100 times manually is the best way to repeat code.", "answer": "false" },
                { "type": "tf", "question": "An infinite loop will run forever unless the program is forcefully terminated.", "answer": "true" },
                { "type": "tf", "question": "Python supports both 'for' and 'while' loop structures.", "answer": "true" },
                { "type": "short", "question": "Explain why duplicating lines of code to repeat an action is a bad practice.", "sampleAnswer": "It makes code long and hard to update. If you need to change the message, you have to modify it in every duplicate line, leading to bugs." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The for Loop",
            "subheading": "Iterating over sequences",
            "body": "<p>A <strong><code>for</code> loop</strong> is used to iterate over a sequence (such as a string, list, or range of numbers). Python's <code>for</code> loop works like: <em>\"For each item inside this sequence, execute this code block.\"</em></p>\n\n<h3>Basic Syntax</h3>\n<pre class=\"code-example\">for item in sequence:\n    # code to run for each item</pre>\n\n<h3>Syntax Rules</h3>\n<ol class=\"desc-list\">\n    <li><strong>The Colon:</strong> The <code>for</code> loop header must always end with a colon (<code>:</code>).</li>\n    <li><strong>Indentation:</strong> The code inside the loop must be indented (typically 4 spaces).</li>\n</ol>\n\n<h3>Looping through a String</h3>\n<pre class=\"code-example\">word = \"Cat\"\nfor letter in word:\n    print(letter)</pre>\n<p>Output:</p>\n<pre class=\"code-example\">C\na\nt</pre>\n\n<p>Here, the loop variable <code>letter</code> automatically takes the value of each character in the string <code>\"Cat\"</code> one by one and prints it.</p>"
        },

        "qna": [
            { "q": "What is a 'for' loop in Python?", "a": "A <code>for</code> loop is a control flow structure used to iterate over any sequence (like a string, list, or range) sequentially." },
            { "q": "How does a 'for' loop know when to stop?", "a": "It stops automatically once it reaches the end of the sequence it is iterating over." },
            { "q": "What is the role of the loop variable in a 'for' loop?", "a": "The loop variable (e.g. <code>letter</code> in <code>for letter in word:</code>) stores the value of the current item in the sequence for that specific iteration." },
            { "q": "Do I need to manually increment the loop variable in a 'for' loop?", "a": "No, Python handles this automatically, updating the variable to the next item at the start of each iteration." },
            { "q": "Can I use a for loop to iterate over a string?", "a": "Yes! Iterating over a string checks each character one by one, from first to last." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's for loop!",
            "questions": [
                { "type": "mcq", "question": "Which keyword is used to start a loop that iterates over a sequence?", "options": ["while", "for", "loop", "repeat"], "answer": 1 },
                { "type": "mcq", "question": "In 'for x in \"Python\":', what is x?", "options": ["A function name", "A loop variable", "A keyword", "A data type"], "answer": 1 },
                { "type": "mcq", "question": "How many times will this loop print 'Hello'? for character in 'ABC': print('Hello')", "options": ["1", "3", "0", "Infinite"], "answer": 1 },
                { "type": "fill", "question": "In a for loop header, you must end the line with the _____ character.", "answer": "colon" },
                { "type": "fill", "question": "The code block to run inside a for loop must be _____ by 4 spaces.", "answer": "indented" },
                { "type": "fill", "question": "If we iterate over 'Dora', the loop variable will take the value of letter 'a' during the _____ iteration.", "answer": "4th" },
                { "type": "tf", "question": "Python's 'for' loop requires manual incrementing of the loop variable.", "answer": "false" },
                { "type": "tf", "question": "A 'for' loop can iterate through each letter of a string.", "answer": "true" },
                { "type": "tf", "question": "The loop variable can be named anything as long as it follows variable naming rules.", "answer": "true" },
                { "type": "short", "question": "Explain what this loop prints when executed: for char in 'Hi': print(char)", "sampleAnswer": "It iterates over the string 'Hi', printing 'H' and 'i' on separate lines." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The while Loop",
            "subheading": "Looping based on conditions",
            "body": "<p>A <strong><code>while</code> loop</strong> repeats a block of code <strong>as long as a condition is True</strong>. It is best used when you do not know in advance how many times the loop needs to run.</p>\n\n<h3>Basic Syntax</h3>\n<pre class=\"code-example\">while condition:\n    # code to run</pre>\n\n<h3>Example using a Counter</h3>\n<pre class=\"code-example\">count = 1\nwhile count &lt;= 3:\n    print(count)\n    count = count + 1 # Crucial! Increment the counter to stop the loop</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">1\n2\n3</pre>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Infinite Loops:</strong> If you forget to update the variable checked in the condition (e.g. <code>count = count + 1</code>), the condition will stay True forever, causing an <strong>infinite loop</strong>! This can freeze your program or crash your environment.</div>\n</div>"
        },

        "qna": [
            { "q": "What is a 'while' loop?", "a": "A <code>while</code> loop is a conditional loop that continues executing its code block repeatedly as long as its condition expression evaluates to True." },
            { "q": "What is a loop control variable or counter?", "a": "It is a variable used within the loop condition that is modified inside the loop body, ensuring that the condition eventually becomes False so the loop terminates." },
            { "q": "What happens if I forget to increment my counter variable inside a while loop?", "a": "The loop condition will remain True forever, causing an infinite loop. This freezes your program and consumes system resources." },
            { "q": "When should I choose a while loop over a for loop?", "a": "Choose a <code>while</code> loop when the number of iterations is not known beforehand and depends on a dynamic condition (e.g. waiting for a user input or game event)." },
            { "q": "Can a while loop condition check multiple values?", "a": "Yes! You can use logical operators to form compound conditions. E.g. <code>while count &lt; 10 and not game_over:</code>." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's while loop!",
            "questions": [
                { "type": "mcq", "question": "Which keyword starts a loop that runs as long as a condition is True?", "options": ["for", "while", "until", "repeat"], "answer": 1 },
                { "type": "mcq", "question": "What happens when the while condition becomes False?", "options": ["An error occurs", "The loop terminates immediately", "The program restarts", "The loop variable is deleted"], "answer": 1 },
                { "type": "mcq", "question": "How many times does this loop print 'Hello'? count = 5; while count < 5: print('Hello'); count += 1", "options": ["5", "0", "1", "Infinite"], "answer": 1 },
                { "type": "fill", "question": "A loop that never terminates is called a(n) _____ loop.", "answer": "infinite" },
                { "type": "fill", "question": "In the code 'count = count + 1', we are _____ the value of count.", "answer": "incrementing" },
                { "type": "fill", "question": "If the while condition is False on the very first check, the loop body is executed _____ times.", "answer": "0" },
                { "type": "tf", "question": "A while loop is the best choice when you know the exact number of iterations beforehand.", "answer": "false" },
                { "type": "tf", "question": "The condition of a while loop must end with a colon (:).", "answer": "true" },
                { "type": "tf", "question": "A while loop code block must be indented.", "answer": "true" },
                { "type": "short", "question": "Explain the bug in this while loop: x = 1; while x <= 5: print(x)", "sampleAnswer": "The variable x is never incremented, making the condition always True and causing an infinite loop." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The range() Function",
            "subheading": "Generating number sequences",
            "body": "<p>What if you want to run a <code>for</code> loop exactly 5 times? Or count from 10 to 50? In Python, we use the built-in <strong><code>range()</code></strong> function to generate sequences of numbers.</p>\n\n<h3>Usage Forms of range()</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>range(stop)</code>:</strong> Generates numbers from <code>0</code> up to (but NOT including) <code>stop</code>.\n        <br>E.g. <code>range(3)</code> generates <code>0, 1, 2</code>.</li>\n    <li><strong><code>range(start, stop)</code>:</strong> Generates numbers from <code>start</code> up to (but NOT including) <code>stop</code>.\n        <br>E.g. <code>range(2, 6)</code> generates <code>2, 3, 4, 5</code>.</li>\n    <li><strong><code>range(start, stop, step)</code>:</strong> Generates numbers with a specific increment (<code>step</code>).\n        <br>E.g. <code>range(1, 10, 2)</code> generates <code>1, 3, 5, 7, 9</code>.\n        <br>E.g. <code>range(5, 0, -1)</code> generates <code>5, 4, 3, 2, 1</code> (counts backwards!).</li>\n</ul>\n\n<pre class=\"code-example\">for i in range(3):\n    print(i)</pre>\n<p>Output:</p>\n<pre class=\"code-example\">0\n1\n2</pre>"
        },

        "qna": [
            { "q": "What does the range() function do?", "a": "It is a built-in Python function that generates an immutable sequence of numbers, commonly used to control the iterations of a <code>for</code> loop." },
            { "q": "Does range(5) include the number 5?", "a": "No, Python's <code>range()</code> is half-open, meaning it goes up to but excludes the stop value. <code>range(5)</code> generates <code>0, 1, 2, 3, 4</code>." },
            { "q": "How do I count starting from a number other than 0?", "a": "Use the two-argument format: <code>range(start, stop)</code>. E.g. <code>range(1, 6)</code> generates 1 through 5." },
            { "q": "What does the step argument in range() do?", "a": "The third argument specifies the step (increment). E.g. <code>range(0, 10, 2)</code> counts by 2s. It can be negative to count down." },
            { "q": "Can I convert a range object to a list to inspect its values?", "a": "Yes! Wrap it in the <code>list()</code> function. E.g. <code>list(range(3))</code> returns <code>[0, 1, 2]</code>." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's range() function!",
            "questions": [
                { "type": "mcq", "question": "What numbers are generated by range(3)?", "options": ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "1, 2"], "answer": 1 },
                { "type": "mcq", "question": "What does range(1, 5) generate?", "options": ["1, 2, 3, 4, 5", "1, 2, 3, 4", "0, 1, 2, 3, 4", "2, 3, 4"], "answer": 1 },
                { "type": "mcq", "question": "Which of the following generates numbers: 5, 4, 3, 2, 1?", "options": ["range(5, 0)", "range(5, 1, -1)", "range(5, 0, -1)", "range(1, 5, -1)"], "answer": 2 },
                { "type": "fill", "question": "The stop parameter in range(start, stop) is always _____ from the generated sequence.", "answer": "excluded" },
                { "type": "fill", "question": "The default start value of range() if only one argument is provided is _____.", "answer": "0" },
                { "type": "fill", "question": "To count by 3s, you must supply 3 as the _____ argument in the range function.", "answer": "step" },
                { "type": "tf", "question": "The statement range(0, 10, 2) will generate the number 10.", "answer": "false" },
                { "type": "tf", "question": "A step value in range() can be negative to count backwards.", "answer": "true" },
                { "type": "tf", "question": "The default step value in range() is 1.", "answer": "true" },
                { "type": "short", "question": "Write the range expression to generate: 10, 20, 30, 40.", "sampleAnswer": "range(10, 50, 10)" }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Nested Loops",
            "subheading": "Loops inside loops",
            "body": "<p>Just like nesting conditional checks, we can also place a loop statement inside the execution body of another loop statement! This is called a <strong>Nested Loop</strong>.</p>\n\n<h3>How Nested Loops Work</h3>\n<ol class=\"desc-list\">\n    <li>The outer loop initiates its first iteration.</li>\n    <li>This triggers the inner loop, which runs **completely from start to finish**.</li>\n    <li>Once the inner loop completes, the outer loop moves to its next step.</li>\n    <li>The inner loop resets and executes its full cycle again. This repeats until the outer loop finishes.</li>\n</ol>\n\n<h3>Basic Syntax Example</h3>\n<pre class=\"code-example\">for i in range(2): # Outer loop\n    for j in range(3): # Inner loop\n        print(i, j)</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">0 0\n0 1\n0 2\n1 0\n1 1\n1 2</pre>\n\n<p>Notice that the total number of print iterations is the product of the loops: 2 (outer) &times; 3 (inner) = 6 iterations!</p>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Variable Naming Bug:</strong> Never use the same variable name (e.g. <code>i</code>) for both the outer and inner loop control variables! Doing so overwrites the outer counter, causing serious logic bugs or infinite loops. Always use distinct names, such as <code>i</code> and <code>j</code>.</div>\n</div>"
        },

        "qna": [
            { "q": "What is a nested loop?", "a": "A nested loop is a loop statement placed inside the body of another loop statement." },
            { "q": "How does a nested loop execute?", "a": "The outer loop triggers the inner loop. For each single iteration of the outer loop, the inner loop executes its entire cycle of iterations before the outer loop proceeds to its next step." },
            { "q": "How do I calculate the total number of iterations in a nested loop?", "a": "Multiply the number of iterations of the outer loop by the number of iterations of the inner loop. E.g. 3 outer iterations and 4 inner iterations result in 12 total print executions." },
            { "q": "Can I nest different types of loops, like a 'while' loop inside a 'for' loop?", "a": "Yes! Python allows you to nest any loop type inside any other loop type (e.g. <code>while</code> inside <code>for</code>, or <code>for</code> inside <code>while</code>)." },
            { "q": "What is a common pitfall of nested loops?", "a": "Using the same loop control variable name for both the outer and inner loops. This overwrites the variable and causes infinite loops or logic errors. Always use unique names (e.g. <code>i</code> for outer, <code>j</code> for inner)." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's nested loops!",
            "questions": [
                { "type": "mcq", "question": "What is a nested loop in programming?", "options": ["A loop inside another loop", "A loop inside an if statement", "A function that calls itself", "A loop that never stops"], "answer": 0 },
                { "type": "mcq", "question": "If the outer loop runs 3 times and the inner loop runs 5 times, how many times does the inner loop body execute in total?", "options": ["8", "15", "5", "3"], "answer": 1 },
                { "type": "mcq", "question": "Which of the following has a variable naming bug in nested loops?", "options": ["for i in range(3):\n    for j in range(3):", "for i in range(3):\n    for i in range(3):", "for x in range(3):\n    for y in range(3):", "while count < 3:\n    for i in range(3):"], "answer": 1 },
                { "type": "fill", "question": "For each single iteration of the outer loop, the inner loop runs _____ from start to finish.", "answer": "completely" },
                { "type": "fill", "question": "Sibling nested statements inside the inner loop of a nested structure must be indented by _____ spaces.", "answer": "8" },
                { "type": "fill", "question": "In a nested loop with i (outer, range(2)) and j (inner, range(2)), the final output coordinate printed is _____.", "answer": "1 1" },
                { "type": "tf", "question": "You can nest a while loop inside a for loop.", "answer": "true" },
                { "type": "tf", "question": "Sibling nested loops must share the same loop variable.", "answer": "false" },
                { "type": "tf", "question": "Nested loops are frequently used to print 2D grids or coordinates.", "answer": "true" },
                { "type": "short", "question": "Explain the execution order of: for i in range(2): for j in range(2): print(i, j)", "sampleAnswer": "First, i is 0. The inner loop runs with j = 0 and j = 1, printing '0 0' and '0 1'. Then, i becomes 1. The inner loop resets and runs with j = 0 and j = 1, printing '1 0' and '1 1'." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The break Statement",
            "subheading": "Exiting a loop prematurely",
            "body": "<p>Sometimes you want to stop a loop immediately, before it completes all its iterations. In Python, the <strong><code>break</code></strong> statement is used to exit a loop prematurely.</p>\n\n<p>When Python encounters <code>break</code> inside a loop, it <strong>jumps out of the loop block</strong> immediately. Execution then proceeds to the first line of code written after the loop.</p>\n\n<h3>Example</h3>\n<pre class=\"code-example\">for num in range(1, 10):\n    if num == 5:\n        break # Exit the loop immediately when num is 5\n    print(num)\nprint(\"Loop finished!\")</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">1\n2\n3\n4\nLoop finished!</pre>\n\n<p>Notice that <code>5</code> is not printed. The loop stopped the moment <code>num</code> became <code>5</code>. The <code>break</code> statement works inside both <code>for</code> and <code>while</code> loops. It is especially useful for stopping search operations once an item is found!</p>"
        },

        "qna": [
            { "q": "What does the break statement do in a loop?", "a": "The <code>break</code> statement terminates the current loop immediately, shifting execution flow to the first line of code outside the loop block." },
            { "q": "In what situations is break commonly used?", "a": "It is commonly used when searching for an item (to stop looping once found) or to exit a <code>while True</code> loop based on user input or a specific termination condition." },
            { "q": "Does break exit all loops in a nested structure?", "a": "No. The <code>break</code> keyword only terminates the **innermost loop** that contains it. The outer loops will continue running." },
            { "q": "Can I use break inside an if statement that is not inside a loop?", "a": "No. Using <code>break</code> outside a loop triggers a SyntaxError: <code>'break' outside loop</code>." },
            { "q": "What happens to the remaining iterations of a loop after a break is executed?", "a": "They are completely skipped. The loop is finished and will not iterate any further." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's break statement!",
            "questions": [
                { "type": "mcq", "question": "What keyword is used to exit a loop immediately?", "options": ["exit", "stop", "break", "continue"], "answer": 2 },
                { "type": "mcq", "question": "What is printed by this code?\nfor i in range(1, 5):\n    if i == 3: break\n    print(i)", "options": ["1, 2, 3, 4", "1, 2", "1, 2, 3", "3, 4"], "answer": 1 },
                { "type": "mcq", "question": "If break is executed inside a nested inner loop, which loop stops?", "options": ["Only the inner loop", "Only the outer loop", "Both loops", "Neither loop"], "answer": 0 },
                { "type": "fill", "question": "The break statement is syntactically invalid if it is not placed inside a _____.", "answer": "loop" },
                { "type": "fill", "question": "If count = 1 and we run: while True: print('A'); break, the letter 'A' is printed _____ times.", "answer": "1" },
                { "type": "fill", "question": "In a loop of range(1, 6), if we break when i == 4, the numbers printed before breaking are 1, 2, and _____.", "answer": "3" },
                { "type": "tf", "question": "The break statement can be used inside both 'for' and 'while' loops.", "answer": "true" },
                { "type": "tf", "question": "A break statement will execute the else block of a loop in Python.", "answer": "false" },
                { "type": "tf", "question": "Placing a break statement directly inside a standalone if-statement outside any loop is valid.", "answer": "false" },
                { "type": "short", "question": "Explain what happens when this code runs: x = 1; while x < 10: if x == 3: break; print(x); x += 1", "sampleAnswer": "It prints 1, then 2. When x reaches 3, the condition x == 3 triggers break, terminating the loop. Only 1 and 2 print." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The continue Statement",
            "subheading": "Skipping the current iteration",
            "body": "<p>What if you don't want to stop the whole loop, but just want to <strong>skip the rest of the current iteration</strong> and jump straight to the next one? In Python, we use the <strong><code>continue</code></strong> statement to do exactly this.</p>\n\n<p>When Python encounters <code>continue</code> inside a loop:</p>\n<ol class=\"desc-list\">\n    <li>It immediately skips the remaining lines of code inside the loop for the current cycle.</li>\n    <li>It jumps straight back to the header of the loop to begin the **next iteration** check.</li>\n</ol>\n\n<h3>Example</h3>\n<pre class=\"code-example\">for num in range(1, 6):\n    if num == 3:\n        continue # Skip printing 3 and go to next number\n    print(num)</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">1\n2\n4\n5</pre>\n\n<p>Notice that `3` is skipped, but the loop continues printing `4` and `5`. Unlike <code>break</code> which stops the whole loop, <code>continue</code> only skips the current iteration.</p>"
        },

        "qna": [
            { "q": "What does the continue statement do?", "a": "The <code>continue</code> statement skips the rest of the code in the current loop iteration and moves execution straight to the next iteration of the loop." },
            { "q": "How does continue differ from break?", "a": "<code>break</code> exits the entire loop completely, whereas <code>continue</code> only skips the remaining code of the current iteration and keeps the loop running for subsequent cycles." },
            { "q": "What happens to the counter variable in a while loop if continue is executed before it is incremented?", "a": "If you skip the increment statement inside a <code>while</code> loop by calling <code>continue</code> before it, the loop variable is never updated, which will cause an infinite loop!" },
            { "q": "Can I use continue inside both for and while loops?", "a": "Yes, <code>continue</code> works in both <code>for</code> and <code>while</code> loops." },
            { "q": "Does continue trigger a SyntaxError if used outside a loop?", "a": "Yes, using <code>continue</code> outside a loop triggers a SyntaxError: <code>'continue' not properly in loop</code>." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's continue statement!",
            "questions": [
                { "type": "mcq", "question": "Which keyword is used to skip the rest of the current loop iteration and move to the next?", "options": ["pass", "continue", "skip", "break"], "answer": 1 },
                { "type": "mcq", "question": "What is printed by this code?\nfor i in range(1, 4):\n    if i == 2: continue\n    print(i)", "options": ["1, 2, 3", "1, 3", "1", "3"], "answer": 1 },
                { "type": "mcq", "question": "If continue is executed in a while loop, where does Python jump to?", "options": ["The first line outside the loop", "The next loop iteration check at the top", "The end of the program", "The previous line of code"], "answer": 1 },
                { "type": "fill", "question": "While break terminates the entire loop, _____ only skips the current iteration.", "answer": "continue" },
                { "type": "fill", "question": "If we use continue in a while loop, we must ensure the loop counter is updated _____ the continue statement is called.", "answer": "before" },
                { "type": "fill", "question": "If continue is used in a range(5) loop, and we skip when i is odd, the numbers printed will be 0, 2, and _____.", "answer": "4" },
                { "type": "tf", "question": "The continue keyword terminates the entire loop immediately.", "answer": "false" },
                { "type": "tf", "question": "A continue statement can only be used inside loops.", "answer": "true" },
                { "type": "tf", "question": "Iteration variables in a for loop still auto-update when continue is called.", "answer": "true" },
                { "type": "short", "question": "Explain why this while loop is infinite: x = 1; while x <= 3: if x == 2: continue; print(x); x += 1", "sampleAnswer": "When x is 2, continue skips the rest of the block including x += 1. x stays 2 forever, creating an infinite loop." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The pass Statement",
            "subheading": "The placeholder statement",
            "body": "<p>In Python, blocks of code (like loops, conditional statements, functions, and classes) cannot be empty. If you define a loop or condition without any code inside, Python will raise an <code>IndentationError</code> or <code>SyntaxError</code>.</p>\n\n<p>What if you want to write a loop structure now, but implement its code logic later? This is where the <strong><code>pass</code></strong> statement comes in. It is a <strong>null statement</strong> (does absolutely nothing) used as a syntactical placeholder.</p>\n\n<h3>Example</h3>\n<pre class=\"code-example\">for num in range(5):\n    if num == 3:\n        pass # TODO: Add special handling for 3 later!\n    print(num)</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">0\n1\n2\n3\n4</pre>\n\n<p>Notice that `3` is printed normally. The <code>pass</code> statement executes silently and performs no action. However, it successfully prevented Python from raising a syntax error! You can use <code>pass</code> in empty loops, empty functions, or empty conditional blocks.</p>"
        },

        "qna": [
            { "q": "What does the pass statement do in Python?", "a": "The <code>pass</code> statement is a null operation. When it is executed, nothing happens. It is used as a placeholder where code is syntactically required but no action is needed." },
            { "q": "Why does Python need a pass statement?", "a": "Since Python uses indentation to define code blocks, empty blocks are not allowed. The <code>pass</code> statement satisfies this syntax requirement without executing any logic." },
            { "q": "How does pass differ from continue?", "a": "<code>continue</code> skips the rest of the current iteration and jumps to the next cycle. <code>pass</code> does absolutely nothing and allows the program to continue executing the rest of the code inside the current iteration." },
            { "q": "Can I use pass in empty if statements or functions?", "a": "Yes! You can use <code>pass</code> anywhere a code block is syntactically required, including <code>if</code> statements, functions, classes, and loops." },
            { "q": "Does pass print anything to the screen?", "a": "No, it executes silently and performs no actions." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's pass statement!",
            "questions": [
                { "type": "mcq", "question": "What is the pass statement in Python?", "options": ["A loop control keyword", "A null statement placeholder", "A debugging tool", "A variable declaration"], "answer": 1 },
                { "type": "mcq", "question": "What is the output of this code?\nfor i in range(3):\n    if i == 1: pass\n    print(i)", "options": ["0, 2", "0, 1, 2", "1, 2", "0"], "answer": 1 },
                { "type": "mcq", "question": "If you write an empty loop block in Python without the pass statement, what happens?", "options": ["The loop runs infinitely", "Python throws an IndentationError or SyntaxError", "The loop is ignored", "Nothing"], "answer": 1 },
                { "type": "fill", "question": "The pass statement is a _____ statement that performs no action.", "answer": "null" },
                { "type": "fill", "question": "Unlike continue, which skips to the next iteration, the _____ statement lets execution flow normally down the current block.", "answer": "pass" },
                { "type": "fill", "question": "If we want to define a function but write its body later, we can write _____ in its body.", "answer": "pass" },
                { "type": "tf", "question": "The pass statement is used to exit loops early.", "answer": "false" },
                { "type": "tf", "question": "Using pass avoids syntax errors in empty conditional blocks.", "answer": "true" },
                { "type": "tf", "question": "The pass statement prints a warning message to the console when executed.", "answer": "false" },
                { "type": "short", "question": "Explain why this code raises an error, and how to fix it: if x > 5: print('Done')", "sampleAnswer": "The if block is empty, which raises an IndentationError. Fix it by placing 'pass' indented under the if line." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Pattern Printing",
            "subheading": "Building grids and shapes",
            "body": "<p>In Level 40, we learned how nested loops execute. One of the most famous applications of nested loops is <strong>Pattern Printing</strong>! It is a classic programming exercise to practice loop control by printing grids, triangles, or pyramids of symbols (usually asterisks <code>*</code>).</p>\n\n<h3>Printing a 3x3 Grid</h3>\n<pre class=\"code-example\">for i in range(3):\n    for j in range(3):\n        print(\"*\", end=\" \") # end=\" \" keeps prints on the same line\n    print() # Prints a newline to move to the next row</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">* * *\n* * *\n* * *</pre>\n\n<h3>The print() end Parameter</h3>\n<p>By default, Python's <code>print()</code> function ends with a newline character (<code>\\n</code>), which starts a new line. Passing <code>end=\" \"</code> tells Python to end the print with a space instead, keeping subsequent prints on the same row.</p>\n\n<h3>Printing a Triangle with String Multiplication</h3>\n<p>Python allows you to multiply a string by an integer to repeat it. E.g. <code>\"*\" * 3</code> returns <code>\"***\"</code>. We can print a triangle easily using this feature:</p>\n<pre class=\"code-example\">for i in range(1, 4):\n    print(\"*\" * i)</pre>\n\n<p>Output:</p>\n<pre class=\"code-example\">*\n**\n***</pre>"
        },

        "qna": [
            { "q": "What is pattern printing?", "a": "Pattern printing is a programming exercise where nested loops or string multiplication are used to display geometric shapes or grids of symbols (such as stars or numbers) in the console." },
            { "q": "What does the end parameter do in the print() function?", "a": "By default, <code>print()</code> ends with a newline character (<code>\\n</code>), which starts a new line. Specifying <code>end=\" \"</code> replaces it with a space, so subsequent prints stay on the same line." },
            { "q": "How do I print an empty line to start a new row?", "a": "Simply call <code>print()</code> without any arguments. E.g. <code>print()</code>." },
            { "q": "What is string multiplication in Python?", "a": "It is a Python feature where multiplying a string by an integer <code>n</code> repeats the string <code>n</code> times. E.g. <code>print(\"*\" * 3)</code> outputs <code>***</code>." },
            { "q": "When should I use nested loops instead of string multiplication for patterns?", "a": "Use nested loops when the symbols inside the row are dynamic or depend on the column position (e.g. printing coordinates or a grid of increasing numbers like <code>1 2 3</code>)." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's pattern printing techniques!",
            "questions": [
                { "type": "mcq", "question": "How does Python's print() function behave by default after printing its arguments?", "options": ["It stays on the same line", "It prints a space", "It moves to a new line", "It prints a tab"], "answer": 2 },
                { "type": "mcq", "question": "What does print('*', end=' ') accomplish?", "options": ["Prints * and starts a new line", "Prints * and ends with a space, staying on the same line", "Prints * three times", "Raises a SyntaxError"], "answer": 1 },
                { "type": "mcq", "question": "What is the output of print('A' * 4)?", "options": ["A4", "AAAA", "A A A A", "Error"], "answer": 1 },
                { "type": "fill", "question": "To move execution to a new row after printing a line of characters, we write an empty _____ function call.", "answer": "print" },
                { "type": "fill", "question": "The expression print('*' * 0) will output _____ characters.", "answer": "0" },
                { "type": "fill", "question": "In a nested loop printing a grid, the outer loop controls the number of _____.", "answer": "rows" },
                { "type": "tf", "question": "String multiplication works with floating-point numbers.", "answer": "false" },
                { "type": "tf", "question": "Using end='' inside print() prevents starting a new line.", "answer": "true" },
                { "type": "tf", "question": "The inner loop in a grid-printing nested loop controls the characters in a single row.", "answer": "true" },
                { "type": "short", "question": "Write a nested loop snippet to print a 2x4 grid of stars (*).", "sampleAnswer": "for i in range(2):\n    for j in range(4):\n        print('*', end='')\n    print()" }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Loop Coding Challenge",
            "subheading": "The final Stage 5 loop challenge!",
            "body": "<p>Welcome to <strong>Level 45</strong>, the final challenge of <strong>STAGE 5: Loops</strong>! In this room, you will face an algorithmic problem requiring you to compute mathematical aggregates and control loop executions.</p>\n\n<p>You have mastered:</p>\n<ul class=\"desc-list\">\n    <li><code>for</code> and <code>while</code> loops.</li>\n    <li>Controlling iterations with <code>range()</code>.</li>\n    <li>Breaking loops early with <code>break</code> and skipping with <code>continue</code>.</li>\n    <li>Nesting loops and pattern layouts.</li>\n</ul>\n\n<p>Verify your readiness using the review questions and diagnostic tests below, then complete the final loop challenge inside the coding editor!</p>"
        },

        "qna": [
            { "q": "What is the Stage 5 loop coding challenge?", "a": "It is a comprehensive problem testing your ability to construct and control loops using conditions and control statements (like <code>break</code> and <code>continue</code>) in Python." },
            { "q": "How do I choose between a for loop and a while loop for a challenge?", "a": "Use a <code>for</code> loop when iterating over a known range or sequence. Use a <code>while</code> loop when the number of cycles is determined dynamically by a condition." },
            { "q": "How do I avoid infinite loops in a while loop challenge?", "a": "Ensure the loop condition variable is modified correctly inside the loop body, or that a <code>break</code> statement is guaranteed to execute." },
            { "q": "Can I place multiple break statements in a single loop?", "a": "Yes! A loop can have multiple <code>if</code> conditions that trigger <code>break</code> statements. When any of them are met, the loop terminates immediately." },
            { "q": "What are the key things to verify before submitting loop code?", "a": "Check the start and stop bounds, ensure variables are updated correctly, verify indentations, and verify the console outputs!" }
        ],

        "test": {
            "intro": "Let's check your preparation for the loop coding challenge!",
            "questions": [
                { "type": "mcq", "question": "Which loop is best suited to iterate over a list of items?", "options": ["while loop", "for loop", "infinite loop", "pass loop"], "answer": 1 },
                { "type": "mcq", "question": "What is the output of this code?\ncount = 0\nfor i in range(1, 6):\n    if i % 2 == 0: count += 1\nprint(count)", "options": ["5", "2", "3", "0"], "answer": 1 },
                { "type": "mcq", "question": "If a while loop condition is 'while True:', how can the loop stop?", "options": ["It can never stop", "Using a break statement inside the loop", "Using a continue statement", "When the counter reaches 100"], "answer": 1 },
                { "type": "fill", "question": "To calculate the sum of numbers in a loop, we add each number to an accumulator variable initialized to _____.", "answer": "0" },
                { "type": "fill", "question": "The statement that skips the rest of the current iteration is _____.", "answer": "continue" },
                { "type": "fill", "question": "If total = 0, and we loop 'for i in range(1, 4): total += i', the final value of total is _____.", "answer": "6" },
                { "type": "tf", "question": "You can use a break statement inside a for loop.", "answer": "true" },
                { "type": "tf", "question": "A continue statement terminates the entire loop.", "answer": "false" },
                { "type": "tf", "question": "The loop condition 'while count <= 5:' will execute the loop body one last time when count is exactly 5.", "answer": "true" },
                { "type": "short", "question": "Explain what this loop computes: product = 1; for i in range(1, 5): product *= i", "sampleAnswer": "It computes the product (factorial) of numbers from 1 to 4: 1 * 2 * 3 * 4 = 24." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Introduction to Strings",
            "subheading": "Working with text data",
            "body": "<p>Text data in Python is represented as a <strong>String</strong> (a sequence of characters). You will work with strings in almost every program you write!</p>\n\n<h3>Creating Strings</h3>\n<ul class=\"desc-list\">\n    <li><strong>Single or Double Quotes:</strong> You can define strings using single quotes (<code>'hello'</code>) or double quotes (<code>\"hello\"</code>). Both work identically. Double quotes are useful when your string contains a single quote contract, like <code>\"Nobita's gadget\"</code>!</li>\n    <li><strong>Triple Quotes:</strong> For multi-line text blocks, enclose your string inside triple quotes (<code>'''hello'''</code> or <code>\"\"\"hello\"\"\"</code>).</li>\n</ul>\n\n<h3>Basic String Operations</h3>\n<ol class=\"desc-list\">\n    <li><strong>Concatenation (addition):</strong> Combine strings together using the <code>+</code> operator. E.g. <code>\"Dora\" + \"emon\"</code> &rarr; <code>\"Doraemon\"</code>.</li>\n    <li><strong>Repetition (multiplication):</strong> Repeat strings multiple times using the <code>*</code> operator. E.g. <code>\"A\" * 3</code> &rarr; <code>\"AAA\"</code>.</li>\n</ol>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>TypeError Warning:</strong> You cannot concatenate a string and a number directly using the <code>+</code> operator (e.g. <code>\"Score: \" + 10</code>). You must first convert the number to a string using the <code>str()</code> function, or use f-strings!</div>\n</div>"
        },

        "qna": [
            { "q": "What is a string in Python?", "a": "A string is a sequence of characters used to store and manipulate text data." },
            { "q": "What is the difference between single and double quotes?", "a": "In Python, there is no structural difference. Both are used to create strings. Using one type makes it easier to include the other type inside the string (e.g. <code>\"Nobita's gadget\"</code>)." },
            { "q": "How do I create a string that spans multiple lines?", "a": "Use triple quotes (three single quotes <code>'''</code> or three double quotes <code>\"\"\"</code>) to enclose multi-line strings." },
            { "q": "Can I concatenate a string and an integer directly using '+'?", "a": "No. Doing so raises a TypeError. You must first convert the integer to a string using <code>str()</code>, or use f-strings. E.g. <code>\"Age: \" + str(10)</code>." },
            { "q": "What happens when I multiply a string by a negative number?", "a": "Multiplying a string by 0 or a negative integer returns an empty string (<code>\"\"</code>)." }
        ],

        "test": {
            "intro": "Let's check your understanding of basic Python strings!",
            "questions": [
                { "type": "mcq", "question": "How do you define a string in Python?", "options": ["Using single or double quotes", "Using curly braces {}", "Using square brackets []", "Without any quotes"], "answer": 0 },
                { "type": "mcq", "question": "What does 'Hi ' + 'there' evaluate to?", "options": ["Hithere", "Hi there", "Hi+there", "Error"], "answer": 1 },
                { "type": "mcq", "question": "Which quote type is used for multi-line strings?", "options": ["Single quotes '", "Double quotes \"", "Triple quotes \"\"\"", "Backticks `"], "answer": 2 },
                { "type": "fill", "question": "Combining two strings together using the '+' operator is called _____.", "answer": "concatenation" },
                { "type": "fill", "question": "The result of 'Bye' * 2 is _____.", "answer": "ByeBye" },
                { "type": "fill", "question": "Direct combination of 'Score: ' + 10 raises a _____Error.", "answer": "Type" },
                { "type": "tf", "question": "Single quotes and double quotes can be mixed in the same string boundary (e.g. 'Hello\").", "answer": "false" },
                { "type": "tf", "question": "A string in Python is immutable (cannot be changed in place).", "answer": "true" },
                { "type": "tf", "question": "String multiplication works with any integer value.", "answer": "true" },
                { "type": "short", "question": "Explain why this code raises an error: print('Age: ' + 12)", "sampleAnswer": "Python doesn't auto-convert integers to strings during concatenation. Convert it first using str(12)." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "String Indexing",
            "subheading": "Accessing characters by position",
            "body": "<p>Every character in a string has a specific position number called an <strong>Index</strong>. We can access any character in a string using its index.</p>\n\n<h3>Positive Indexing (Left to Right)</h3>\n<p>In Python, indexing starts at <strong><code>0</code></strong> for the first character!</p>\n<p>For string <code>word = \"Python\"</code>:</p>\n<ul class=\"desc-list\">\n    <li><code>word[0]</code> &rarr; <code>'P'</code> (First character)</li>\n    <li><code>word[1]</code> &rarr; <code>'y'</code></li>\n    <li><code>word[5]</code> &rarr; <code>'n'</code> (Last character)</li>\n</ul>\n\n<h3>Negative Indexing (Right to Left)</h3>\n<p>Negative indices start at <strong><code>-1</code></strong> for the last character, allowing you to easily read backwards!</p>\n<ul class=\"desc-list\">\n    <li><code>word[-1]</code> &rarr; <code>'n'</code> (Last character)</li>\n    <li><code>word[-2]</code> &rarr; <code>'o'</code></li>\n    <li><code>word[-6]</code> &rarr; <code>'P'</code></li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>IndexError:</strong> Trying to access an index that is out of bounds (e.g. <code>word[10]</code> for a 6-letter string) will crash your program with an <code>IndexError: string index out of range</code>. Also remember that strings are <strong>immutable</strong>; you cannot change characters directly using <code>word[0] = 'X'</code>!</div>\n</div>"
        },

        "qna": [
            { "q": "What is indexing in strings?", "a": "Indexing is the method used to access a single character in a string using its position number enclosed in square brackets <code>[]</code>." },
            { "q": "Where does string indexing start in Python?", "a": "Indexing always starts at <strong>0</strong> for the first character (positive index) and <strong>-1</strong> for the last character (negative index)." },
            { "q": "What is negative indexing?", "a": "Negative indexing counts backward from the end of the string (right to left), with <code>[-1]</code> representing the last character, <code>[-2]</code> the second to last, and so on." },
            { "q": "What happens if I try to access an index that is out of range?", "a": "Python raises an <code>IndexError: string index out of range</code>." },
            { "q": "Can I use indexing to modify a character in a string directly?", "a": "No, because strings are immutable. Trying to edit them raises a <code>TypeError</code>." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python string indexing!",
            "questions": [
                { "type": "mcq", "question": "Which index accesses the first character of a string text?", "options": ["text[1]", "text[0]", "text[-0]", "text[first]"], "answer": 1 },
                { "type": "mcq", "question": "Which index accesses the last character of a string text?", "options": ["text[-1]", "text[len(text)]", "text[last]", "text[0]"], "answer": 0 },
                { "type": "mcq", "question": "If s = 'Dora', what is s[-2]?", "options": ["D", "o", "r", "a"], "answer": 2 },
                { "type": "fill", "question": "Indexing in Python is done using _____ brackets.", "answer": "square" },
                { "type": "fill", "question": "Accessing an index that does not exist in the string raises a(n) _____Error.", "answer": "Index" },
                { "type": "fill", "question": "If s = 'Fly', s[0] returns the character _____.", "answer": "F" },
                { "type": "tf", "question": "Negative indices count characters from right to left starting at -0.", "answer": "false" },
                { "type": "tf", "question": "Writing s[0] = 'X' is a valid way to edit a string.", "answer": "false" },
                { "type": "tf", "question": "The maximum index of a string is its length minus 1.", "answer": "true" },
                { "type": "short", "question": "Explain why s[4] raises an error if s = 'Cute'.", "sampleAnswer": "'Cute' has a length of 4 (indices 0, 1, 2, 3). Index 4 is out of bounds, raising an IndexError." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "String Slicing",
            "subheading": "Extracting substrings",
            "body": "<p>What if you want to extract a <strong>part of a string</strong> (a substring), not just a single character? E.g., getting <code>\"Dora\"</code> from <code>\"Doraemon\"</code>. In Python, we do this using <strong>Slicing</strong>.</p>\n\n<h3>Slicing Syntax</h3>\n<pre class=\"code-example\">string[start:stop:step]</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>start</code>:</strong> The index where the slice begins (included).</li>\n    <li><strong><code>stop</code>:</strong> The index where the slice ends (<strong>excluded</strong>).</li>\n    <li><strong><code>step</code>:</strong> The increment size (optional, defaults to <code>1</code>).</li>\n</ul>\n\n<h3>Examples with word = \"Doraemon\"</h3>\n<ul class=\"desc-list\">\n    <li><code>word[0:4]</code> &rarr; <code>\"Dora\"</code> (indices 0, 1, 2, 3)</li>\n    <li><code>word[4:8]</code> &rarr; <code>\"emon\"</code> (indices 4, 5, 6, 7)</li>\n</ul>\n\n<h3>Omitting Parameters</h3>\n<ul class=\"desc-list\">\n    <li><code>word[:4]</code> &rarr; <code>\"Dora\"</code> (starts at index 0 if start is omitted)</li>\n    <li><code>word[4:]</code> &rarr; <code>\"emon\"</code> (goes to the end of the string if stop is omitted)</li>\n    <li><code>word[::-1]</code> &rarr; <code>\"nomearoD\"</code> (reverses the string! A step of <code>-1</code> counts backwards)</li>\n</ul>"
        },

        "qna": [
            { "q": "What is string slicing?", "a": "Slicing is the technique of extracting a range of characters (a substring) from a string using start, stop, and step positions." },
            { "q": "Is the stop index included in the sliced result?", "a": "No, the stop index is <strong>excluded</strong>. E.g. <code>s[1:4]</code> extracts characters at indices 1, 2, and 3." },
            { "q": "What happens if I omit the start index in a slice?", "a": "If omitted, Python defaults the start to <strong>0</strong> (the beginning of the string)." },
            { "q": "What is the step parameter in slicing?", "a": "The step parameter specifies the step size for slicing. E.g. <code>s[::2]</code> extracts every second character." },
            { "q": "How can I reverse a string using slicing?", "a": "Use the slice expression <code>string[::-1]</code>. Specifying a step of <code>-1</code> tells Python to extract characters backward from end to start." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python string slicing!",
            "questions": [
                { "type": "mcq", "question": "What does text[1:3] extract from text = 'Python'?", "options": ["Py", "yt", "yth", "ytho"], "answer": 1 },
                { "type": "mcq", "question": "What is the default start value of a slice if it is left blank (e.g. text[:3])?", "options": ["1", "0", "-1", "length of string"], "answer": 1 },
                { "type": "mcq", "question": "Which slice reverses the string s?", "options": ["s[reverse]", "s[0:-1]", "s[::-1]", "s[-1:0]"], "answer": 2 },
                { "type": "fill", "question": "In string slicing, the stop index is always _____ from the output substring.", "answer": "excluded" },
                { "type": "fill", "question": "If s = 'Doraemon', s[:4] returns _____.", "answer": "Dora" },
                { "type": "fill", "question": "The slice s[::3] will select every _____ character.", "answer": "3rd" },
                { "type": "tf", "question": "Slicing raises an IndexError if the stop index is greater than the string length.", "answer": "false" },
                { "type": "tf", "question": "The slice s[3:] extracts characters from index 3 up to the end of the string.", "answer": "true" },
                { "type": "tf", "question": "Slicing returns a brand new string.", "answer": "true" },
                { "type": "short", "question": "If s = 'Python', what does s[1:5:2] return? Explain.", "sampleAnswer": "It starts at index 1 ('y'), goes up to index 5 ('n', excluded), stepping by 2. It selects indices 1 and 3, returning 'yh'." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Casing Methods",
            "subheading": "upper(), lower(), isupper(), and islower()",
            "body": "<p>Python strings have built-in functions called <strong>Methods</strong> that allow us to perform common text manipulations easily.</p>\n\n<h3>Case Conversion Methods</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>upper()</code>:</strong> Returns a new string with all letters converted to UPPERCASE. E.g. <code>\"Dora\".upper()</code> &rarr; <code>\"DORA\"</code>.</li>\n    <li><strong><code>lower()</code>:</strong> Returns a new string with all letters converted to lowercase. E.g. <code>\"Dora\".lower()</code> &rarr; <code>\"dora\"</code>.</li>\n</ul>\n\n<h3>Case Check Methods (Boolean)</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>isupper()</code>:</strong> Returns <code>True</code> if all alphabetic characters in the string are uppercase. E.g. <code>\"DORA\".isupper()</code> &rarr; <code>True</code>.</li>\n    <li><strong><code>islower()</code>:</strong> Returns <code>True</code> if all alphabetic characters in the string are lowercase. E.g. <code>\"dora\".islower()</code> &rarr; <code>True</code>.</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Method Syntax:</strong> Methods are invoked using dot notation: <code>string.method()</code>. Always include parentheses <code>()</code>. Remember that strings are immutable, so methods never change the original variable; they return a brand new string!</div>\n</div>"
        },

        "qna": [
            { "q": "What is a string method?", "a": "A method is a function built into Python string objects that performs operations on them when called using dot notation (e.g. <code>text.upper()</code>)." },
            { "q": "Do upper() and lower() modify the original string?", "a": "No, because strings are immutable. These methods return a brand new string with the modified casing." },
            { "q": "How do check-methods like isupper() differ from upper()?", "a": "<code>upper()</code> changes the letters to uppercase, returning a new string. <code>isupper()</code> checks the string, returning a boolean (<code>True</code> or <code>False</code>)." },
            { "q": "What happens when I call lower() on a string containing numbers or symbols?", "a": "Numbers and symbols remain unchanged; only alphabetic characters are converted to lowercase." },
            { "q": "Why are parentheses () required when calling string methods?", "a": "Parentheses are required to execute (call) the method. Forgetting them returns the method reference rather than running the code." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's casing methods!",
            "questions": [
                { "type": "mcq", "question": "Which method converts a string to all lowercase letters?", "options": ["lower()", "to_lower()", "lowercase()", "islower()"], "answer": 0 },
                { "type": "mcq", "question": "What is the output of 'Py123'.upper()?", "options": ["PY", "PY123", "py123", "Error"], "answer": 1 },
                { "type": "mcq", "question": "If s = 'hello', what does s.isupper() return?", "options": ["True", "False", "None", "Error"], "answer": 1 },
                { "type": "fill", "question": "To convert a string to uppercase, we use the _____ method.", "answer": "upper" },
                { "type": "fill", "question": "The return type of s.islower() is always a _____ value.", "answer": "boolean" },
                { "type": "fill", "question": "Because strings are immutable, casing methods return a _____ string instead of updating the variable.", "answer": "new" },
                { "type": "tf", "question": "Calling s.lower() updates the original variable s directly.", "answer": "false" },
                { "type": "tf", "question": "'12345'.isupper() will return True.", "answer": "false" },
                { "type": "tf", "question": "Parentheses are necessary to invoke string methods in Python.", "answer": "true" },
                { "type": "short", "question": "If text = 'Dora', what is stored inside text after running text.upper()? Explain.", "sampleAnswer": "text remains 'Dora' because strings are immutable. text.upper() returns 'DORA', but it is not stored back in text." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The replace() Method",
            "subheading": "Replacing characters or words",
            "body": "<p>What if you want to swap one word for another inside a text? Python provides the built-in <strong><code>replace()</code></strong> method to do this easily.</p>\n\n<h3>Method Syntax</h3>\n<pre class=\"code-example\">string.replace(old, new, count)</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>old</code>:</strong> The substring you want to search for.</li>\n    <li><strong><code>new</code>:</strong> The new substring you want to insert.</li>\n    <li><strong><code>count</code>:</strong> (Optional) The maximum number of replacements to perform starting from the left. If omitted, all occurrences are replaced.</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>\"I like apples\".replace(\"apples\", \"bananas\")</code> &rarr; <code>\"I like bananas\"</code></li>\n    <li><code>\"banana\".replace(\"a\", \"o\")</code> &rarr; <code>\"bonono\"</code> (replaces all occurrences!)</li>\n    <li><code>\"banana\".replace(\"a\", \"o\", 2)</code> &rarr; <code>\"bonona\"</code> (replaces only the first 2 occurrences)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Immutability check:</strong> Just like casing methods, <code>replace()</code> returns a brand new string and does not modify the original variable. It is also case-sensitive, meaning replacing <code>\"apple\"</code> will not match <code>\"Apple\"</code>!</div>\n</div>"
        },

        "qna": [
            { "q": "What does the replace() method do?", "a": "The <code>replace()</code> method searches a string for a specified substring and returns a new string where all occurrences of that substring are replaced with a new value." },
            { "q": "Is the replacement case-sensitive?", "a": "Yes! E.g. <code>\"Apple\".replace(\"a\", \"o\")</code> will not replace anything because <code>\"a\"</code> is lowercase, while <code>\"Apple\"</code> starts with uppercase <code>\"A\"</code>." },
            { "q": "What is the role of the optional count argument in replace()?", "a": "The <code>count</code> argument specifies how many occurrences of the old substring to replace starting from the left. If omitted, all occurrences are replaced." },
            { "q": "Can I replace a single character or multiple characters?", "a": "You can replace both! It works with single characters, words, or longer phrases." },
            { "q": "What happens if the old substring is not found in the string?", "a": "The method simply returns a copy of the original string unchanged, without raising errors." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's replace() method!",
            "questions": [
                { "type": "mcq", "question": "Which method is used to swap characters or substrings?", "options": ["swap()", "replace()", "change()", "update()"], "answer": 1 },
                { "type": "mcq", "question": "What is the output of: 'apple'.replace('p', 'm', 1)?", "options": ["ammle", "ample", "ampple", "Error"], "answer": 1 },
                { "type": "mcq", "question": "What does 'Doraemon'.replace('X', 'Y') return?", "options": ["Doraemon", "DoraemonY", "Error", "None"], "answer": 0 },
                { "type": "fill", "question": "The replace() method takes two mandatory arguments: the old substring and the _____ substring.", "answer": "new" },
                { "type": "fill", "question": "If we want to replace only the first occurrence, we pass _____ as the third argument in the replace function.", "answer": "1" },
                { "type": "fill", "question": "Suffixing .replace(' ', '') to a string removes all _____ characters.", "answer": "space" },
                { "type": "tf", "question": "The replace() method modifies the string in-place.", "answer": "false" },
                { "type": "tf", "question": "The replacement operation in Python's replace() is case-sensitive.", "answer": "true" },
                { "type": "tf", "question": "You can use replace() to delete a substring by replacing it with an empty string ''.", "answer": "true" },
                { "type": "short", "question": "If text = 'cat dog cat', write the replace expression to change only the first 'cat' to 'cow'.", "sampleAnswer": "text.replace('cat', 'cow', 1)" }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The find() Method",
            "subheading": "Searching for substrings",
            "body": "<p>What if you want to know <strong>where</strong> a specific word or character appears inside a string? Python provides the <strong><code>find()</code></strong> method to search for substrings and return their index position.</p>\n\n<h3>Method Syntax</h3>\n<pre class=\"code-example\">string.find(substring, start, end)</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>substring</code>:</strong> The text you want to search for.</li>\n    <li><strong><code>start</code>:</strong> (Optional) The index to start searching from (defaults to 0).</li>\n    <li><strong><code>end</code>:</strong> (Optional) The index to stop searching at (defaults to end of string).</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>\"Doraemon\".find(\"ora\")</code> &rarr; <code>1</code> (found at index 1)</li>\n    <li><code>\"Doraemon\".find(\"z\")</code> &rarr; <code>-1</code> (not found, returns -1)</li>\n    <li><code>\"banana\".find(\"a\", 2)</code> &rarr; <code>3</code> (searches from index 2 onwards)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Important Note:</strong> <code>find()</code> returns <strong>-1</strong> if the substring is not found. This is different from using the <code>in</code> operator which returns <code>True</code> or <code>False</code>. The search is also case-sensitive!</div>\n</div>"
        },

        "qna": [
            { "q": "What does the find() method return?", "a": "The <code>find()</code> method returns the <strong>index</strong> of the first occurrence of the specified substring. If the substring is not found, it returns <strong>-1</strong>." },
            { "q": "Is the search in find() case-sensitive?", "a": "Yes! <code>\"Doraemon\".find(\"d\")</code> returns <strong>-1</strong> because the lowercase 'd' is not found (the string starts with uppercase 'D')." },
            { "q": "What is the difference between find() and index()?", "a": "Both methods work similarly, but <code>index()</code> raises a <code>ValueError</code> if the substring is not found, while <code>find()</code> returns <strong>-1</strong> without raising an error." },
            { "q": "How can I search for a substring starting from a specific position?", "a": "Use the optional <code>start</code> parameter. E.g. <code>\"banana\".find(\"a\", 2)</code> starts searching from index 2." },
            { "q": "What happens if I search for an empty string?", "a": "Searching for an empty string <code>\"\"</code> always returns <code>0</code> (the start of the string)." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's find() method!",
            "questions": [
                { "type": "mcq", "question": "What does 'hello'.find('l') return?", "options": ["2", "3", "-1", "1"], "answer": 0 },
                { "type": "mcq", "question": "What does 'Python'.find('z') return?", "options": ["0", "-1", "Error", "None"], "answer": 1 },
                { "type": "mcq", "question": "Which method returns -1 when a substring is not found?", "options": ["index()", "find()", "search()", "locate()"], "answer": 1 },
                { "type": "fill", "question": "The find() method returns the _____ of the first occurrence of a substring.", "answer": "index" },
                { "type": "fill", "question": "If a substring is not found, find() returns _____.", "answer": "-1" },
                { "type": "fill", "question": "The search in find() is _____-sensitive.", "answer": "case" },
                { "type": "tf", "question": "find() raises an error if the substring is not found.", "answer": "false" },
                { "type": "tf", "question": "You can specify a starting position for the search in find().", "answer": "true" },
                { "type": "tf", "question": "find() returns the index of the last occurrence of the substring.", "answer": "false" },
                { "type": "short", "question": "Explain the difference between find() and index() methods.", "sampleAnswer": "find() returns -1 when substring is not found, while index() raises a ValueError." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The split() Method",
            "subheading": "Breaking strings into lists",
            "body": "<p>What if you have a sentence and want to extract each word separately? Python's <strong><code>split()</code></strong> method breaks a string into a <strong>list</strong> of smaller strings based on a separator (delimiter).</p>\n\n<h3>Method Syntax</h3>\n<pre class=\"code-example\">string.split(separator, maxsplit)</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>separator</code>:</strong> The character(s) to split on (defaults to <strong>whitespace</strong> if omitted).</li>\n    <li><strong><code>maxsplit</code>:</strong> (Optional) Maximum number of splits to perform.</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>\"Doraemon loves dorayaki\".split()</code> &rarr; <code>[\"Doraemon\", \"loves\", \"dorayaki\"]</code> (splits on whitespace)</li>\n    <li><code>\"apple,banana,cherry\".split(\",\")</code> &rarr; <code>[\"apple\", \"banana\", \"cherry\"]</code> (splits on comma)</li>\n    <li><code>\"one-two-three\".split(\"-\")</code> &rarr; <code>[\"one\", \"two\", \"three\"]</code> (splits on hyphen)</li>\n    <li><code>\"a,b,c\".split(\",\", 1)</code> &rarr; <code>[\"a\", \"b,c\"]</code> (splits only once)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Use Case:</strong> <code>split()</code> is incredibly useful for parsing data, reading CSV files, processing user input, and breaking down sentences into individual words for analysis!</div>\n</div>"
        },

        "qna": [
            { "q": "What does the split() method do?", "a": "The <code>split()</code> method breaks a string into a list of substrings based on a specified separator (delimiter). If no separator is provided, it splits on whitespace." },
            { "q": "What is the default separator in split()?", "a": "If no separator is specified, <code>split()</code> defaults to splitting on <strong>whitespace</strong> (spaces, tabs, newlines)." },
            { "q": "Can I split on characters other than whitespace?", "a": "Yes! You can specify any character or string as the separator. E.g. <code>\"a,b,c\".split(\",\")</code> splits on commas." },
            { "q": "What does the maxsplit parameter do?", "a": "The <code>maxsplit</code> parameter limits the number of splits. E.g. <code>\"a,b,c\".split(\",\", 1)</code> splits only once, resulting in <code>[\"a\", \"b,c\"]</code>." },
            { "q": "What type of data does split() return?", "a": "The <code>split()</code> method always returns a <strong>list</strong> of strings." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's split() method!",
            "questions": [
                { "type": "mcq", "question": "What does 'hello world'.split() return?", "options": ["['hello', 'world']", "['hello world']", "helloworld", "Error"], "answer": 0 },
                { "type": "mcq", "question": "What does 'a,b,c'.split(',') return?", "options": ["['a', 'b', 'c']", "['a,b,c']", "abc", "Error"], "answer": 0 },
                { "type": "mcq", "question": "What is the default separator in split()?", "options": ["Comma", "Space", "Whitespace", "None"], "answer": 2 },
                { "type": "fill", "question": "The split() method returns a _____.", "answer": "list" },
                { "type": "fill", "question": "To split a string on commas, use _____ as the separator.", "answer": "," },
                { "type": "fill", "question": "The parameter that limits the number of splits is called _____.", "answer": "maxsplit" },
                { "type": "tf", "question": "split() modifies the original string.", "answer": "false" },
                { "type": "tf", "question": "You can split on multiple characters at once using split().", "answer": "false" },
                { "type": "tf", "question": "split() always returns a list of strings.", "answer": "true" },
                { "type": "short", "question": "How would you split '2024-01-15' into year, month, and day?", "sampleAnswer": "Use '2024-01-15'.split('-') to get ['2024', '01', '15']." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "The join() Method",
            "subheading": "Combining lists into strings",
            "body": "<p>The <strong><code>join()</code></strong> method is the opposite of <code>split()</code> — it combines a list of strings into a single string, placing a separator between each element.</p>\n\n<h3>Method Syntax</h3>\n<pre class=\"code-example\">separator.join(list_of_strings)</pre>\n<ul class=\"desc-list\">\n    <li><strong><code>separator</code>:</strong> The string to place between each element (e.g., space, comma, hyphen).</li>\n    <li><strong><code>list_of_strings</code>:</strong> The list (or any iterable) of strings to join.</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>\" \".join([\"Doraemon\", \"loves\", \"dorayaki\"])</code> &rarr; <code>\"Doraemon loves dorayaki\"</code> (joins with space)</li>\n    <li><code>\",\".join([\"apple\", \"banana\", \"cherry\"])</code> &rarr; <code>\"apple,banana,cherry\"</code> (joins with comma)</li>\n    <li><code>\"-\".join([\"2024\", \"01\", \"15\"])</code> &rarr; <code>\"2024-01-15\"</code> (joins with hyphen)</li>\n    <li><code>\"\".join([\"h\", \"e\", \"l\", \"l\", \"o\"])</code> &rarr; <code>\"hello\"</code> (joins with empty string)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">⚠️</span>\n    <div><strong>Important Note:</strong> <code>join()</code> is called on the <strong>separator string</strong>, not the list! Also, all elements in the list must be strings — you cannot join a list containing numbers directly without converting them first.</div>\n</div>"
        },

        "qna": [
            { "q": "What does the join() method do?", "a": "The <code>join()</code> method combines a list of strings into a single string, placing a specified separator between each element." },
            { "q": "How is the join() method called?", "a": "Unlike most string methods, <code>join()</code> is called on the <strong>separator string</strong>, passing the list as an argument. E.g. <code>\" \".join(my_list)</code>." },
            { "q": "Can I join a list containing numbers?", "a": "No, all elements must be strings. You must convert numbers to strings first using <code>str()</code> or a list comprehension." },
            { "q": "What happens if I use an empty string as the separator?", "a": "Using an empty string <code>\"\"</code> as the separator concatenates all elements without any characters between them." },
            { "q": "What is the relationship between split() and join()?", "a": "They are inverse operations! <code>split()</code> breaks a string into a list, while <code>join()</code> combines a list back into a string." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python's join() method!",
            "questions": [
                { "type": "mcq", "question": "What does ' '.join(['hello', 'world']) return?", "options": ["['hello', 'world']", "hello world", "helloworld", "Error"], "answer": 1 },
                { "type": "mcq", "question": "What does ','.join(['a', 'b', 'c']) return?", "options": ["a,b,c", "['a', 'b', 'c']", "abc", "Error"], "answer": 0 },
                { "type": "mcq", "question": "Which string is the method called on in join()?", "options": ["The list", "The separator", "The first element", "None"], "answer": 1 },
                { "type": "fill", "question": "The join() method is called on the _____ string.", "answer": "separator" },
                { "type": "fill", "question": "All elements in the list must be _____ to use join().", "answer": "strings" },
                { "type": "fill", "question": "Using an empty string '' as the separator _____ the elements.", "answer": "concatenates" },
                { "type": "tf", "question": "join() is the opposite of split().", "answer": "true" },
                { "type": "tf", "question": "You can join a list of integers directly.", "answer": "false" },
                { "type": "tf", "question": "The separator is placed between elements, not at the start or end.", "answer": "true" },
                { "type": "short", "question": "How would you join ['2024', '01', '15'] with hyphens?", "sampleAnswer": "Use '-'.join(['2024', '01', '15']) to get '2024-01-15'." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Escape Characters",
            "subheading": "Special characters in strings",
            "body": "<p>Sometimes you need to include special characters in your strings that can't be typed directly — like a <strong>newline</strong>, <strong>tab</strong>, or even a <strong>quote</strong> inside a quoted string. Python uses the <strong>backslash (\\)</strong> to create these <strong>escape characters</strong>.</p>\n\n<h3>Common Escape Characters</h3>\n<ul class=\"desc-list\">\n    <li><strong><code>\\n</code></strong> — Newline (moves to the next line)</li>\n    <li><strong><code>\\t</code></strong> — Tab (horizontal spacing)</li>\n    <li><strong><code>\\'</code></strong> — Single quote (inside single-quoted strings)</li>\n    <li><strong><code>\\\"</code></strong> — Double quote (inside double-quoted strings)</li>\n    <li><strong><code>\\\\</code></strong> — Backslash (to display a literal backslash)</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>\"Hello\\nWorld\"</code> &rarr; Displays as two lines</li>\n    <li><code>\"Name:\\tDoraemon\"</code> &rarr; Displays with tab spacing</li>\n    <li><code>'Nobita\\'s gadget'</code> &rarr; Displays as <code>Nobita's gadget</code></li>\n    <li><code>\"Path: C:\\\\Users\\\\Doraemon\"</code> &rarr; Displays as <code>Path: C:\\Users\\Doraemon</code></li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Pro Tip:</strong> For Windows file paths, you can either use double backslashes <code>\\\\</code> or use <strong>raw strings</strong> with the <code>r</code> prefix: <code>r\"C:\\Users\\Doraemon\"</code> — raw strings treat backslashes literally!</div>\n</div>"
        },

        "qna": [
            { "q": "What are escape characters?", "a": "Escape characters are special sequences starting with a backslash (\\) that represent characters that can't be typed directly, like newlines, tabs, or quotes inside quoted strings." },
            { "q": "What does \\n do in a string?", "a": "<code>\\n</code> creates a <strong>newline</strong> — it moves the cursor to the beginning of the next line." },
            { "q": "How do I include a single quote inside a single-quoted string?", "a": "Use the escape sequence <code>\\'</code>. E.g. <code>'It\\'s Doraemon'</code> displays as <code>It's Doraemon</code>." },
            { "q": "Why do I need double backslashes for file paths?", "a": "Because a single backslash is the escape character. To display a literal backslash, you need to escape it as <code>\\\\</code>." },
            { "q": "What is a raw string?", "a": "A raw string (prefixed with <code>r</code>) treats backslashes as literal characters, not escape sequences. Useful for file paths and regex patterns." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python escape characters!",
            "questions": [
                { "type": "mcq", "question": "Which escape character creates a newline?", "options": ["\\n", "\\t", "\\\\", "\\r"], "answer": 0 },
                { "type": "mcq", "question": "What does 'Hello\\nWorld' display as?", "options": ["Hello\\nWorld", "Hello World", "Hello on one line, World on next", "Error"], "answer": 2 },
                { "type": "mcq", "question": "How do you display a literal backslash?", "options": ["\\", "\\\\", "//", "/"], "answer": 1 },
                { "type": "fill", "question": "The escape character for tab is _____.", "answer": "\\t" },
                { "type": "fill", "question": "To include a double quote inside a double-quoted string, use _____.", "answer": "\\\"" },
                { "type": "fill", "question": "Raw strings are prefixed with the letter _____.", "answer": "r" },
                { "type": "tf", "question": "Escape characters start with a forward slash (/).", "answer": "false" },
                { "type": "tf", "question": "You can use \\n to create line breaks in printed output.", "answer": "true" },
                { "type": "tf", "question": "Raw strings ignore escape sequences.", "answer": "true" },
                { "type": "short", "question": "How would you print 'C:\\Users\\Doraemon' correctly?", "sampleAnswer": "Use print('C:\\\\Users\\\\Doraemon') or print(r'C:\\Users\\Doraemon')." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "f-Strings (Formatted String Literals)",
            "subheading": "Modern string formatting",
            "body": "<p><strong>f-Strings</strong> (introduced in Python 3.6) are the most modern and readable way to format strings in Python. They allow you to <strong>embed variables and expressions directly inside strings</strong> using curly braces <code>{}</code>.</p>\n\n<h3>f-String Syntax</h3>\n<pre class=\"code-example\">f\"Text with {variable} embedded\"</pre>\n<ul class=\"desc-list\">\n    <li>Prefix the string with the letter <code>f</code></li>\n    <li>Place variables or expressions inside <code>{}</code> curly braces</li>\n    <li>Python automatically converts them to strings!</li>\n</ul>\n\n<h3>Examples</h3>\n<ul class=\"desc-list\">\n    <li><code>name = \"Doraemon\"; f\"Hello {name}!\"</code> &rarr; <code>\"Hello Doraemon!\"</code></li>\n    <li><code>age = 10; f\"Age: {age}\"</code> &rarr; <code>\"Age: 10\"</code> (no str() needed!)</li>\n    <li><code>f\"2 + 3 = {2 + 3}\"</code> &rarr; <code>\"2 + 3 = 5\"</code> (expressions work!)</li>\n    <li><code>f\"{name.upper()} is awesome!\"</code> &rarr; <code>\"DORAEMON is awesome!\"</code> (methods work!)</li>\n</ul>\n\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Why f-Strings?</strong> They're faster than <code>.format()</code> and <code>%</code> formatting, more readable, and automatically handle type conversion. They're the recommended way to format strings in modern Python!</div>\n</div>"
        },

        "qna": [
            { "q": "What are f-Strings?", "a": "f-Strings (formatted string literals) are a way to embed variables and expressions directly inside strings by prefixing the string with <code>f</code> and using curly braces <code>{}</code>." },
            { "q": "How do I create an f-String?", "a": "Prefix your string with the letter <code>f</code> and place variables inside curly braces. E.g. <code>f\"Hello {name}\"</code>." },
            { "q": "Do I need to convert numbers to strings in f-Strings?", "a": "No! f-Strings automatically convert any variable or expression to a string. No need for <code>str()</code>." },
            { "q": "Can I use expressions inside f-Strings?", "a": "Yes! You can use any valid Python expression inside the curly braces, including math operations, function calls, and method calls." },
            { "q": "What happens if I forget the 'f' prefix?", "a": "The string will be treated as a regular string, and the curly braces will be displayed literally instead of evaluating the variables inside." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python f-Strings!",
            "questions": [
                { "type": "mcq", "question": "What prefix do you use to create an f-String?", "options": ["s", "f", "r", "b"], "answer": 1 },
                { "type": "mcq", "question": "What does f'Age: {age}' evaluate to if age = 10?", "options": ["Age: age", "Age: 10", "Age: {10}", "Error"], "answer": 1 },
                { "type": "mcq", "question": "Can you use expressions inside f-String curly braces?", "options": ["No", "Yes", "Only math", "Only strings"], "answer": 1 },
                { "type": "fill", "question": "Variables are placed inside _____ braces in f-Strings.", "answer": "curly" },
                { "type": "fill", "question": "f-Strings automatically convert variables to _____.", "answer": "strings" },
                { "type": "fill", "question": "The expression f\"{2+3}\" evaluates to _____.", "answer": "5" },
                { "type": "tf", "question": "You need to use str() to convert numbers in f-Strings.", "answer": "false" },
                { "type": "tf", "question": "f-Strings are available in Python 3.6 and later.", "answer": "true" },
                { "type": "tf", "question": "You can call methods on variables inside f-Strings.", "answer": "true" },
                { "type": "short", "question": "Write an f-String that combines name='Doraemon' and gadget='Anywhere Door'.", "sampleAnswer": "f\"{name} has the {gadget}\"" }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Introduction to Lists",
            "subheading": "Ordered, mutable collections",
            "body": "<p>A <strong>List</strong> is Python's most versatile collection type. It's an <strong>ordered</strong> sequence of items that can be of <strong>any type</strong> — numbers, strings, or even other lists! Lists are <strong>mutable</strong>, meaning you can change them after creation.</p>\\n\\n<h3>Creating Lists</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li>Use <strong>square brackets <code>[]</code></strong> to create lists</li>\\n    <li>Separate items with <strong>commas</strong></li>\\n    <li>Lists can contain mixed data types</li>\\n</ul>\\n\\n<h3>Examples</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li><code>gadgets = [\\\"Anywhere Door\\\", \\\"Time Machine\\\", \\\"Bamboo Copter\\\"]</code></li>\\n    <li><code>numbers = [1, 2, 3, 4, 5]</code></li>\\n    <li><code>mixed = [\\\"Doraemon\\\", 10, True, 3.14]</code></li>\\n    <li><code>empty = []</code> (empty list)</li>\\n</ul>\\n\\n<h3>Accessing List Elements</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li><code>gadgets[0]</code> &rarr; First element (index 0)</li>\\n    <li><code>gadgets[-1]</code> &rarr; Last element</li>\\n    <li><code>gadgets[1:3]</code> &rarr; Slice (elements at index 1 and 2)</li>\\n</ul>\\n\\n<div class=\\\"desc-callout callout-highlight\\\">\\n    <span class=\\\"callout-icon\\\">⚠️</span>\\n    <div><strong>IndexError:</strong> Trying to access an index that doesn't exist (e.g. <code>gadgets[10]</code> for a 3-item list) will crash your program!</div>\\n</div>"
        },

        "qna": [
            { "q": "What is a list in Python?", "a": "A list is an ordered, mutable collection of items that can hold any data type. Items are stored in square brackets <code>[]</code> and separated by commas." },
            { "q": "Are lists mutable or immutable?", "a": "Lists are <strong>mutable</strong>, meaning you can modify them after creation by adding, removing, or changing elements." },
            { "q": "Can a list contain different data types?", "a": "Yes! Lists can contain mixed data types — strings, integers, floats, booleans, or even other lists." },
            { "q": "How do you access the first element of a list?", "a": "Use index <code>[0]</code>. Python uses zero-based indexing, so the first element is always at index 0." },
            { "q": "What happens if you try to access an index that doesn't exist?", "a": "Python raises an <code>IndexError: list index out of range</code>. Always ensure your index is within the list's bounds." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python lists!",
            "questions": [
                { "type": "mcq", "question": "How do you create a list in Python?", "options": ["Using curly braces {}", "Using square brackets []", "Using parentheses ()", "Using angle brackets <>"], "answer": 1 },
                { "type": "mcq", "question": "What is the index of the first element in a list?", "options": ["1", "0", "-1", "first"], "answer": 1 },
                { "type": "mcq", "question": "Which of these is a valid list?", "options": ["(1, 2, 3)", "{1, 2, 3}", "[1, 2, 3]", "<1, 2, 3>"], "answer": 2 },
                { "type": "fill", "question": "Lists are created using _____ brackets.", "answer": "square" },
                { "type": "fill", "question": "Accessing an invalid index raises an _____Error.", "answer": "Index" },
                { "type": "fill", "question": "The last element of a list can be accessed using index _____.", "answer": "-1" },
                { "type": "tf", "question": "Lists can only contain items of the same type.", "answer": "false" },
                { "type": "tf", "question": "Lists are mutable (can be changed after creation).", "answer": "true" },
                { "type": "tf", "question": "List indexing starts at 1.", "answer": "false" },
                { "type": "short", "question": "Explain what happens when you access my_list[-1].", "sampleAnswer": "It returns the last element of the list. Negative indices count from the end." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "List Methods",
            "subheading": "Adding, removing, and sorting",
            "body": "<p>Python lists come with powerful <strong>built-in methods</strong> to manipulate their contents. These methods make it easy to add, remove, and organize elements.</p>\\n\\n<h3>Common List Methods</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li><strong><code>append(item)</code></strong> — Adds an item to the <strong>end</strong> of the list</li>\\n    <li><strong><code>insert(index, item)</code></strong> — Inserts an item at a specific position</li>\\n    <li><strong><code>remove(item)</code></strong> — Removes the <strong>first occurrence</strong> of an item</li>\\n    <li><strong><code>pop(index)</code></strong> — Removes and returns item at index (default: last)</li>\\n    <li><strong><code>sort()</code></strong> — Sorts the list in <strong>ascending order</strong> (modifies in-place)</li>\\n    <li><strong><code>reverse()</code></strong> — Reverses the list in-place</li>\\n    <li><strong><code>count(item)</code></strong> — Returns how many times an item appears</li>\\n    <li><strong><code>index(item)</code></strong> — Returns the index of the first occurrence</li>\\n</ul>\\n\\n<h3>Examples</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li><code>gadgets.append(\\\"Memory Bread\\\")</code> &rarr; Adds to end</li>\\n    <li><code>gadgets.insert(0, \\\"Anywhere Door\\\")</code> &rarr; Inserts at beginning</li>\\n    <li><code>gadgets.remove(\\\"Time Machine\\\")</code> &rarr; Removes first match</li>\\n    <li><code>gadgets.pop()</code> &rarr; Removes and returns last item</li>\\n    <li><code>numbers.sort()</code> &rarr; Sorts numbers ascending</li>\\n</ul>\\n\\n<div class=\\\"desc-callout callout-highlight\\\">\\n    <span class=\\\"callout-icon\\\">💡</span>\\n    <div><strong>In-place vs Return:</strong> Methods like <code>append()</code>, <code>sort()</code>, and <code>reverse()</code> modify the list <strong>in-place</strong> and return <code>None</code>. Don't assign them back to the list!</div>\\n</div>"
        },

        "qna": [
            { "q": "What does the append() method do?", "a": "<code>append(item)</code> adds an item to the <strong>end</strong> of the list. It modifies the list in-place and returns None." },
            { "q": "What is the difference between remove() and pop()?", "a": "<code>remove(item)</code> removes the first occurrence of a specific value, while <code>pop(index)</code> removes and returns an item at a specific index (or the last item if no index is given)." },
            { "q": "Does sort() return a new sorted list?", "a": "No! <code>sort()</code> sorts the list <strong>in-place</strong> and returns <code>None</code>. If you want a new sorted list without modifying the original, use <code>sorted(my_list)</code> instead." },
            { "q": "How do I insert an item at a specific position?", "a": "Use <code>insert(index, item)</code>. The item will be inserted at the specified index, pushing existing elements to the right." },
            { "q": "What happens if I try to remove an item that doesn't exist?", "a": "Python raises a <code>ValueError: list.remove(x): x not in list</code>. Always check if the item exists before removing, or handle the exception." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python list methods!",
            "questions": [
                { "type": "mcq", "question": "Which method adds an item to the end of a list?", "options": ["add()", "append()", "insert()", "push()"], "answer": 1 },
                { "type": "mcq", "question": "What does my_list.pop() do by default?", "options": ["Removes first item", "Removes last item", "Removes all items", "Does nothing"], "answer": 1 },
                { "type": "mcq", "question": "Which method sorts a list in-place?", "options": ["sorted()", "sort()", "order()", "arrange()"], "answer": 1 },
                { "type": "fill", "question": "The _____ method inserts an item at a specific index.", "answer": "insert" },
                { "type": "fill", "question": "The _____ method removes the first occurrence of an item.", "answer": "remove" },
                { "type": "fill", "question": "Methods that modify in-place return _____.", "answer": "None" },
                { "type": "tf", "question": "append() returns the modified list.", "answer": "false" },
                { "type": "tf", "question": "pop() removes and returns an item.", "answer": "true" },
                { "type": "tf", "question": "sort() creates a new sorted list.", "answer": "false" },
                { "type": "short", "question": "Why shouldn't you write my_list = my_list.sort()?", "sampleAnswer": "Because sort() returns None, not the sorted list. This would replace your list with None. Just use my_list.sort()." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "List Comprehension",
            "subheading": "Elegant list creation",
            "body": "<p><strong>List comprehension</strong> is a beautiful Python feature that lets you create lists using a single, concise line of code. It combines a <code>for</code> loop (and optionally an <code>if</code> condition) into one expression!</p>\\n\\n<h3>Basic Syntax</h3>\\n<pre class=\\\"code-example\\\">[expression for item in iterable]</pre>\\n<ul class=\\\"desc-list\\\">\\n    <li><strong><code>expression</code></strong> — What each element will be</li>\\n    <li><strong><code>item</code></strong> — Variable representing each element</li>\\n    <li><strong><code>iterable</code></strong> — The sequence to loop over</li>\\n</ul>\\n\\n<h3>Examples</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li><code>[x*2 for x in range(5)]</code> &rarr; <code>[0, 2, 4, 6, 8]</code> (double each number)</li>\\n    <li><code>[x.upper() for x in [\\\"dora\\\", \\\"emon\\\"]]</code> &rarr; <code>[\\\"DORA\\\", \\\"EMON\\\"]</code> (uppercase each)</li>\\n    <li><code>[x for x in range(10) if x % 2 == 0]</code> &rarr; <code>[0, 2, 4, 6, 8]</code> (only evens)</li>\\n</ul>\\n\\n<div class=\\\"desc-callout callout-highlight\\\">\\n    <span class=\\\"callout-icon\\\">💡</span>\\n    <div><strong>Why use it?</strong> List comprehensions are more readable, faster, and considered more \\\"Pythonic\\\" than traditional for loops with append().</div>\\n</div>"
        },

        "qna": [
            { "q": "What is list comprehension?", "a": "List comprehension is a concise way to create lists using a single line of code that combines a for loop (and optionally an if condition) into one expression." },
            { "q": "What is the basic syntax of list comprehension?", "a": "The syntax is <code>[expression for item in iterable]</code>. You can also add a condition: <code>[expression for item in iterable if condition]</code>." },
            { "q": "Can I add a condition to filter elements in list comprehension?", "a": "Yes! Add an <code>if</code> clause at the end: <code>[x for x in range(10) if x % 2 == 0]</code> creates a list of only even numbers." },
            { "q": "How is list comprehension different from a for loop?", "a": "List comprehension creates a new list in one line, while a for loop with append() requires multiple lines. List comprehensions are generally faster and more readable." },
            { "q": "Can I use list comprehension with strings?", "a": "Yes! You can iterate over strings: <code>[char.upper() for char in \\\"hello\\\"]</code> creates <code>['H', 'E', 'L', 'L', 'O']</code>." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python list comprehensions!",
            "questions": [
                { "type": "mcq", "question": "What does [x*2 for x in range(3)] create?", "options": ["[0, 1, 2]", "[0, 2, 4]", "[2, 4, 6]", "[0, 0, 0]"], "answer": 1 },
                { "type": "mcq", "question": "Which symbol starts a list comprehension?", "options": ["()", "{}", "[]", "<>"], "answer": 2 },
                { "type": "mcq", "question": "How do you filter elements in list comprehension?", "options": ["using where", "using if", "using filter", "using select"], "answer": 1 },
                { "type": "fill", "question": "List comprehension uses _____ brackets.", "answer": "square" },
                { "type": "fill", "question": "The keyword used to iterate in list comprehension is _____.", "answer": "for" },
                { "type": "fill", "question": "To filter elements, add an _____ clause at the end.", "answer": "if" },
                { "type": "tf", "question": "List comprehension can only create numeric lists.", "answer": "false" },
                { "type": "tf", "question": "List comprehension is more Pythonic than for loops with append().", "answer": "true" },
                { "type": "tf", "question": "You can use list comprehension without any condition.", "answer": "true" },
                { "type": "short", "question": "Write a list comprehension that squares numbers 1-5.", "sampleAnswer": "[x**2 for x in range(1, 6)]" }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Tuples",
            "subheading": "Immutable ordered sequences",
            "body": "<p>A <strong>Tuple</strong> is similar to a list, but with one key difference: it's <strong>immutable</strong> — once created, it <strong>cannot be changed</strong>. Tuples are perfect for data that should remain constant throughout your program.</p>\\n\\n<h3>Creating Tuples</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li>Use <strong>parentheses <code>()</code></strong> to create tuples</li>\\n    <li>Separate items with <strong>commas</strong></li>\\n    <li>Single-item tuples need a trailing comma: <code>(item,)</code></li>\\n</ul>\\n\\n<h3>Examples</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li><code>coordinates = (10, 20)</code> (x, y position)</li>\\n    <li><code>colors = (\\\"red\\\", \\\"green\\\", \\\"blue\\\")</code> (RGB values)</li>\\n    <li><code>single = (\\\"Doraemon\\\",)</code> (single item with comma)</li>\\n    <li><code>empty = ()</code> (empty tuple)</li>\\n</ul>\\n\\n<h3>Tuple vs List</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li><strong>Tuples:</strong> Immutable, faster, use parentheses <code>()</code></li>\\n    <li><strong>Lists:</strong> Mutable, slower, use square brackets <code>[]</code></li>\\n</ul>\\n\\n<div class=\\\"desc-callout callout-highlight\\\">\\n    <span class=\\\"callout-icon\\\">⚠️</span>\\n    <div><strong>Immutable:</strong> You cannot add, remove, or modify tuple elements after creation. Trying to do so raises a <code>TypeError</code>!</div>\\n</div>"
        },

        "qna": [
            { "q": "What is a tuple in Python?", "a": "A tuple is an ordered, immutable collection of items. Like lists, tuples can hold multiple data types, but unlike lists, they cannot be modified after creation." },
            { "q": "What does immutable mean?", "a": "Immutable means the object cannot be changed after it's created. You cannot add, remove, or modify elements in a tuple." },
            { "q": "How do you create a tuple?", "a": "Use parentheses <code>()</code> with comma-separated items. E.g. <code>my_tuple = (1, 2, 3)</code>. For a single item, use a trailing comma: <code>(item,)</code>." },
            { "q": "What is the main difference between tuples and lists?", "a": "Tuples are <strong>immutable</strong> (cannot be changed) and use <code>()</code>, while lists are <strong>mutable</strong> (can be changed) and use <code>[]</code>." },
            { "q": "When should I use a tuple instead of a list?", "a": "Use tuples for data that should remain constant (like coordinates, configuration settings, or database records). Use lists when you need to modify the data." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python tuples!",
            "questions": [
                { "type": "mcq", "question": "Which brackets are used to create tuples?", "options": ["Square brackets []", "Curly braces {}", "Parentheses ()", "Angle brackets <>"], "answer": 2 },
                { "type": "mcq", "question": "Can you modify a tuple after creation?", "options": ["Yes", "No", "Only if empty", "Only with special methods"], "answer": 1 },
                { "type": "mcq", "question": "What do you need for a single-item tuple?", "options": ["Nothing special", "A trailing comma", "Double parentheses", "A semicolon"], "answer": 1 },
                { "type": "fill", "question": "Tuples are _____ (cannot be changed).", "answer": "immutable" },
                { "type": "fill", "question": "Tuples are generally _____ than lists.", "answer": "faster" },
                { "type": "fill", "question": "Lists use _____ brackets, tuples use parentheses.", "answer": "square" },
                { "type": "tf", "question": "Tuples can contain mixed data types.", "answer": "true" },
                { "type": "tf", "question": "You can append items to a tuple.", "answer": "false" },
                { "type": "tf", "question": "Tuples support indexing like lists.", "answer": "true" },
                { "type": "short", "question": "Why might you choose a tuple over a list?", "sampleAnswer": "Choose tuples for data that shouldn't change, like coordinates or configuration values. They're also faster and more memory-efficient." }
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
        "sections": ["description", "qna", "test", "coding"],

        "description": {
            "heading": "Sets",
            "subheading": "Unordered unique collections",
            "body": "<p>A <strong>Set</strong> is an unordered collection of <strong>unique</strong> items. Unlike lists, sets cannot contain duplicate values, and they don't maintain any specific order. Sets are perfect for removing duplicates and performing mathematical set operations.</p>\\n\\n<h3>Creating Sets</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li>Use <strong>curly braces <code>{}</code></strong> to create sets</li>\\n    <li>Or use the <code>set()</code> constructor</li>\\n    <li>Duplicates are automatically removed</li>\\n</ul>\\n\\n<h3>Examples</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li><code>{1, 2, 3, 2, 1}</code> &rarr; <code>{1, 2, 3}</code> (duplicates removed)</li>\\n    <li><code>set([\\\"a\\\", \\\"b\\\", \\\"a\\\"])</code> &rarr; <code>{\\\"a\\\", \\\"b\\\"}</code> (from list)</li>\\n    <li><code>empty_set = set()</code> (empty set — <code>{}</code> creates empty dict!)</li>\\n</ul>\\n\\n<h3>Set Operations</h3>\\n<ul class=\\\"desc-list\\\">\\n    <li><strong><code>add()</code></strong> — Add an element</li>\\n    <li><strong><code>remove()</code></strong> — Remove an element</li>\\n    <li><strong><code>union()</code></strong> or <code>|</code> — Combine sets</li>\\n    <li><strong><code>intersection()</code></strong> or <code>&</code> — Common elements</li>\\n</ul>\\n\\n<div class=\\\"desc-callout callout-highlight\\\">\\n    <span class=\\\"callout-icon\\\">⚠️</span>\\n    <div><strong>No Indexing:</strong> Sets are unordered, so you cannot access elements by index (no <code>set[0]</code>). Use loops or convert to list if you need indexing!</div>\\n</div>"
        },

        "qna": [
            { "q": "What is a set in Python?", "a": "A set is an unordered collection of unique items. It automatically removes duplicates and doesn't maintain any specific order." },
            { "q": "What happens if you try to add a duplicate to a set?", "a": "Nothing! Sets automatically ignore duplicate values. If you add an item that already exists, the set remains unchanged." },
            { "q": "How do you create an empty set?", "a": "Use <code>set()</code>. Using <code>{}</code> creates an empty dictionary, not a set!" },
            { "q": "Can you access set elements by index?", "a": "No! Sets are unordered, so they don't support indexing. You must use loops or convert to a list if you need indexed access." },
            { "q": "What are some common set operations?", "a": "Common operations include <code>add()</code>, <code>remove()</code>, <code>union()</code> (combine), and <code>intersection()</code> (find common elements)." }
        ],

        "test": {
            "intro": "Let's check your understanding of Python sets!",
            "questions": [
                { "type": "mcq", "question": "Which brackets are used to create sets?", "options": ["Square brackets []", "Parentheses ()", "Curly braces {}", "Angle brackets <>"], "answer": 2 },
                { "type": "mcq", "question": "What does {1, 2, 2, 3} evaluate to?", "options": ["{1, 2, 2, 3}", "{1, 2, 3}", "{1, 3}", "Error"], "answer": 1 },
                { "type": "mcq", "question": "How do you create an empty set?", "options": ["{}", "set()", "[]", "()"], "answer": 1 },
                { "type": "fill", "question": "Sets automatically remove duplicates and are _____.", "answer": "unordered" },
                { "type": "fill", "question": "To add an element to a set, use the _____ method.", "answer": "add" },
                { "type": "fill", "question": "Sets do not support _____.", "answer": "indexing" },
                { "type": "tf", "question": "Sets maintain the order of elements.", "answer": "false" },
                { "type": "tf", "question": "You can have duplicate values in a set.", "answer": "false" },
                { "type": "tf", "question": "{} creates an empty set.", "answer": "false" },
                { "type": "short", "question": "Why would you use a set instead of a list?", "sampleAnswer": "Use sets when you need unique items and don't care about order, or when you need fast membership testing and set operations like union/intersection." }
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
            "description"
        ],
        "description": {
            "heading": "Dictionary",
            "subheading": "STAGE 7 — Collections",
            "body": "<p>Welcome to <strong>Level 61</strong>! In this lesson, we will cover <strong>Dictionary</strong>.</p>\n<p>This level is part of <strong>STAGE 7 — Collections</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Dictionary:</strong> Key-value pair data structures.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 62,
        "title": "Nested dictionary",
        "concept": "Structuring complex hierarchical data",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Nested dictionary",
            "subheading": "STAGE 7 — Collections",
            "body": "<p>Welcome to <strong>Level 62</strong>! In this lesson, we will cover <strong>Nested dictionary</strong>.</p>\n<p>This level is part of <strong>STAGE 7 — Collections</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Nested dictionary:</strong> Structuring complex hierarchical data.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 63,
        "title": "len(), max(), min()",
        "concept": "Core aggregate functions on collections",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "len(), max(), min()",
            "subheading": "STAGE 7 — Collections",
            "body": "<p>Welcome to <strong>Level 63</strong>! In this lesson, we will cover <strong>len(), max(), min()</strong>.</p>\n<p>This level is part of <strong>STAGE 7 — Collections</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>len(), max(), min():</strong> Core aggregate functions on collections.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 64,
        "title": "Sorting",
        "concept": "Sorting collections using sort() and sorted()",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Sorting",
            "subheading": "STAGE 7 — Collections",
            "body": "<p>Welcome to <strong>Level 64</strong>! In this lesson, we will cover <strong>Sorting</strong>.</p>\n<p>This level is part of <strong>STAGE 7 — Collections</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Sorting:</strong> Sorting collections using sort() and sorted().</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 65,
        "title": "Collection coding challenge",
        "concept": "Solving complex collection puzzles",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Collection coding challenge",
            "subheading": "STAGE 7 — Collections",
            "body": "<p>Welcome to <strong>Level 65</strong>! In this lesson, we will cover <strong>Collection coding challenge</strong>.</p>\n<p>This level is part of <strong>STAGE 7 — Collections</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Collection coding challenge:</strong> Solving complex collection puzzles.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 66,
        "title": "Why functions",
        "concept": "Reusing and modularizing your Python code",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Why functions",
            "subheading": "STAGE 8 — Functions",
            "body": "<p>Welcome to <strong>Level 66</strong>! In this lesson, we will cover <strong>Why functions</strong>.</p>\n<p>This level is part of <strong>STAGE 8 — Functions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Why functions:</strong> Reusing and modularizing your Python code.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 67,
        "title": "Creating functions",
        "concept": "Defining functions with def",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Creating functions",
            "subheading": "STAGE 8 — Functions",
            "body": "<p>Welcome to <strong>Level 67</strong>! In this lesson, we will cover <strong>Creating functions</strong>.</p>\n<p>This level is part of <strong>STAGE 8 — Functions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Creating functions:</strong> Defining functions with def.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 68,
        "title": "Parameters",
        "concept": "Passing inputs into your functions",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Parameters",
            "subheading": "STAGE 8 — Functions",
            "body": "<p>Welcome to <strong>Level 68</strong>! In this lesson, we will cover <strong>Parameters</strong>.</p>\n<p>This level is part of <strong>STAGE 8 — Functions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Parameters:</strong> Passing inputs into your functions.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 69,
        "title": "Return statement",
        "concept": "Returning values back from function calls",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Return statement",
            "subheading": "STAGE 8 — Functions",
            "body": "<p>Welcome to <strong>Level 69</strong>! In this lesson, we will cover <strong>Return statement</strong>.</p>\n<p>This level is part of <strong>STAGE 8 — Functions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Return statement:</strong> Returning values back from function calls.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 70,
        "title": "Default arguments",
        "concept": "Specifying fallback parameter values",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Default arguments",
            "subheading": "STAGE 8 — Functions",
            "body": "<p>Welcome to <strong>Level 70</strong>! In this lesson, we will cover <strong>Default arguments</strong>.</p>\n<p>This level is part of <strong>STAGE 8 — Functions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Default arguments:</strong> Specifying fallback parameter values.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 71,
        "title": "Keyword arguments",
        "concept": "Passing inputs explicitly by name",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Keyword arguments",
            "subheading": "STAGE 8 — Functions",
            "body": "<p>Welcome to <strong>Level 71</strong>! In this lesson, we will cover <strong>Keyword arguments</strong>.</p>\n<p>This level is part of <strong>STAGE 8 — Functions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Keyword arguments:</strong> Passing inputs explicitly by name.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 72,
        "title": "*args",
        "concept": "Accepting a variable number of positional arguments",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "*args",
            "subheading": "STAGE 8 — Functions",
            "body": "<p>Welcome to <strong>Level 72</strong>! In this lesson, we will cover <strong>*args</strong>.</p>\n<p>This level is part of <strong>STAGE 8 — Functions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>*args:</strong> Accepting a variable number of positional arguments.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 73,
        "title": "**kwargs",
        "concept": "Accepting a variable number of keyword arguments",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "**kwargs",
            "subheading": "STAGE 8 — Functions",
            "body": "<p>Welcome to <strong>Level 73</strong>! In this lesson, we will cover <strong>**kwargs</strong>.</p>\n<p>This level is part of <strong>STAGE 8 — Functions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>**kwargs:</strong> Accepting a variable number of keyword arguments.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 74,
        "title": "Variable scope (global)",
        "concept": "Understanding local vs global scopes",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Variable scope (global)",
            "subheading": "STAGE 8 — Functions",
            "body": "<p>Welcome to <strong>Level 74</strong>! In this lesson, we will cover <strong>Variable scope (global)</strong>.</p>\n<p>This level is part of <strong>STAGE 8 — Functions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Variable scope (global):</strong> Understanding local vs global scopes.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 75,
        "title": "Recursion",
        "concept": "Functions that call themselves",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Recursion",
            "subheading": "STAGE 8 — Functions",
            "body": "<p>Welcome to <strong>Level 75</strong>! In this lesson, we will cover <strong>Recursion</strong>.</p>\n<p>This level is part of <strong>STAGE 8 — Functions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Recursion:</strong> Functions that call themselves.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 76,
        "title": "Errors vs Exceptions",
        "concept": "Understanding syntax errors vs runtime faults",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Errors vs Exceptions",
            "subheading": "STAGE 9 — Files + Exceptions",
            "body": "<p>Welcome to <strong>Level 76</strong>! In this lesson, we will cover <strong>Errors vs Exceptions</strong>.</p>\n<p>This level is part of <strong>STAGE 9 — Files + Exceptions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Errors vs Exceptions:</strong> Understanding syntax errors vs runtime faults.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 77,
        "title": "try-except",
        "concept": "Handling program crashes gracefully",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "try-except",
            "subheading": "STAGE 9 — Files + Exceptions",
            "body": "<p>Welcome to <strong>Level 77</strong>! In this lesson, we will cover <strong>try-except</strong>.</p>\n<p>This level is part of <strong>STAGE 9 — Files + Exceptions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>try-except:</strong> Handling program crashes gracefully.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 78,
        "title": "finally",
        "concept": "Executing cleanup code under try-except",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "finally",
            "subheading": "STAGE 9 — Files + Exceptions",
            "body": "<p>Welcome to <strong>Level 78</strong>! In this lesson, we will cover <strong>finally</strong>.</p>\n<p>This level is part of <strong>STAGE 9 — Files + Exceptions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>finally:</strong> Executing cleanup code under try-except.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 79,
        "title": "raise keyword",
        "concept": "Triggering errors and exceptions manually",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "raise keyword",
            "subheading": "STAGE 9 — Files + Exceptions",
            "body": "<p>Welcome to <strong>Level 79</strong>! In this lesson, we will cover <strong>raise keyword</strong>.</p>\n<p>This level is part of <strong>STAGE 9 — Files + Exceptions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>raise keyword:</strong> Triggering errors and exceptions manually.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 80,
        "title": "File handling (open)",
        "concept": "Opening and closing files on your computer",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "File handling (open)",
            "subheading": "STAGE 9 — Files + Exceptions",
            "body": "<p>Welcome to <strong>Level 80</strong>! In this lesson, we will cover <strong>File handling (open)</strong>.</p>\n<p>This level is part of <strong>STAGE 9 — Files + Exceptions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>File handling (open):</strong> Opening and closing files on your computer.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 81,
        "title": "Read/Write files",
        "concept": "Reading lines and writing to text files",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Read/Write files",
            "subheading": "STAGE 9 — Files + Exceptions",
            "body": "<p>Welcome to <strong>Level 81</strong>! In this lesson, we will cover <strong>Read/Write files</strong>.</p>\n<p>This level is part of <strong>STAGE 9 — Files + Exceptions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Read/Write files:</strong> Reading lines and writing to text files.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 82,
        "title": "CSV files",
        "concept": "Working with spreadsheet tabular data",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "CSV files",
            "subheading": "STAGE 9 — Files + Exceptions",
            "body": "<p>Welcome to <strong>Level 82</strong>! In this lesson, we will cover <strong>CSV files</strong>.</p>\n<p>This level is part of <strong>STAGE 9 — Files + Exceptions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>CSV files:</strong> Working with spreadsheet tabular data.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 83,
        "title": "JSON files",
        "concept": "Serializing and parsing structured JSON data",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "JSON files",
            "subheading": "STAGE 9 — Files + Exceptions",
            "body": "<p>Welcome to <strong>Level 83</strong>! In this lesson, we will cover <strong>JSON files</strong>.</p>\n<p>This level is part of <strong>STAGE 9 — Files + Exceptions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>JSON files:</strong> Serializing and parsing structured JSON data.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 84,
        "title": "Context manager (with)",
        "concept": "Managing file streams safely with 'with'",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Context manager (with)",
            "subheading": "STAGE 9 — Files + Exceptions",
            "body": "<p>Welcome to <strong>Level 84</strong>! In this lesson, we will cover <strong>Context manager (with)</strong>.</p>\n<p>This level is part of <strong>STAGE 9 — Files + Exceptions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Context manager (with):</strong> Managing file streams safely with 'with'.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 85,
        "title": "File project challenge",
        "concept": "Building a local text logging dashboard",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "File project challenge",
            "subheading": "STAGE 9 — Files + Exceptions",
            "body": "<p>Welcome to <strong>Level 85</strong>! In this lesson, we will cover <strong>File project challenge</strong>.</p>\n<p>This level is part of <strong>STAGE 9 — Files + Exceptions</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>File project challenge:</strong> Building a local text logging dashboard.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 86,
        "title": "Modules",
        "concept": "Splitting code across multiple file modules",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Modules",
            "subheading": "STAGE 10 — Advanced Python",
            "body": "<p>Welcome to <strong>Level 86</strong>! In this lesson, we will cover <strong>Modules</strong>.</p>\n<p>This level is part of <strong>STAGE 10 — Advanced Python</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Modules:</strong> Splitting code across multiple file modules.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 87,
        "title": "Packages",
        "concept": "Structuring collections of modules into directories",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Packages",
            "subheading": "STAGE 10 — Advanced Python",
            "body": "<p>Welcome to <strong>Level 87</strong>! In this lesson, we will cover <strong>Packages</strong>.</p>\n<p>This level is part of <strong>STAGE 10 — Advanced Python</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Packages:</strong> Structuring collections of modules into directories.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 88,
        "title": "Virtual environments (venv)",
        "concept": "Isolating package dependencies for projects",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Virtual environments (venv)",
            "subheading": "STAGE 10 — Advanced Python",
            "body": "<p>Welcome to <strong>Level 88</strong>! In this lesson, we will cover <strong>Virtual environments (venv)</strong>.</p>\n<p>This level is part of <strong>STAGE 10 — Advanced Python</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Virtual environments (venv):</strong> Isolating package dependencies for projects.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 89,
        "title": "Standard libraries",
        "concept": "Using math, random, and datetime libraries",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Standard libraries",
            "subheading": "STAGE 10 — Advanced Python",
            "body": "<p>Welcome to <strong>Level 89</strong>! In this lesson, we will cover <strong>Standard libraries</strong>.</p>\n<p>This level is part of <strong>STAGE 10 — Advanced Python</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Standard libraries:</strong> Using math, random, and datetime libraries.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 90,
        "title": "Regular Expressions (re)",
        "concept": "Searching and validating patterns in strings",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Regular Expressions (re)",
            "subheading": "STAGE 10 — Advanced Python",
            "body": "<p>Welcome to <strong>Level 90</strong>! In this lesson, we will cover <strong>Regular Expressions (re)</strong>.</p>\n<p>This level is part of <strong>STAGE 10 — Advanced Python</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Regular Expressions (re):</strong> Searching and validating patterns in strings.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 91,
        "title": "Classes and objects",
        "concept": "Object-oriented blueprint structures",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Classes and objects",
            "subheading": "STAGE 11 — OOP",
            "body": "<p>Welcome to <strong>Level 91</strong>! In this lesson, we will cover <strong>Classes and objects</strong>.</p>\n<p>This level is part of <strong>STAGE 11 — OOP</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Classes and objects:</strong> Object-oriented blueprint structures.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 92,
        "title": "Constructor __init__",
        "concept": "Initializing properties on object instantiation",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Constructor __init__",
            "subheading": "STAGE 11 — OOP",
            "body": "<p>Welcome to <strong>Level 92</strong>! In this lesson, we will cover <strong>Constructor __init__</strong>.</p>\n<p>This level is part of <strong>STAGE 11 — OOP</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Constructor __init__:</strong> Initializing properties on object instantiation.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 93,
        "title": "Inheritance",
        "concept": "Sharing code attributes between parent and child classes",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Inheritance",
            "subheading": "STAGE 11 — OOP",
            "body": "<p>Welcome to <strong>Level 93</strong>! In this lesson, we will cover <strong>Inheritance</strong>.</p>\n<p>This level is part of <strong>STAGE 11 — OOP</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Inheritance:</strong> Sharing code attributes between parent and child classes.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 94,
        "title": "Encapsulation",
        "concept": "Restricting public access to object attributes",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Encapsulation",
            "subheading": "STAGE 11 — OOP",
            "body": "<p>Welcome to <strong>Level 94</strong>! In this lesson, we will cover <strong>Encapsulation</strong>.</p>\n<p>This level is part of <strong>STAGE 11 — OOP</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Encapsulation:</strong> Restricting public access to object attributes.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 95,
        "title": "Polymorphism + Abstraction",
        "concept": "Implementing dynamic methods and class interfaces",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Polymorphism + Abstraction",
            "subheading": "STAGE 11 — OOP",
            "body": "<p>Welcome to <strong>Level 95</strong>! In this lesson, we will cover <strong>Polymorphism + Abstraction</strong>.</p>\n<p>This level is part of <strong>STAGE 11 — OOP</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Polymorphism + Abstraction:</strong> Implementing dynamic methods and class interfaces.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 96,
        "title": "Lambda + map() + filter()",
        "concept": "Functional programming tools in Python",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Lambda + map() + filter()",
            "subheading": "STAGE 12 — Extreme Python",
            "body": "<p>Welcome to <strong>Level 96</strong>! In this lesson, we will cover <strong>Lambda + map() + filter()</strong>.</p>\n<p>This level is part of <strong>STAGE 12 — Extreme Python</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Lambda + map() + filter():</strong> Functional programming tools in Python.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 97,
        "title": "Decorators + Generators + yield",
        "concept": "Modifying functions and streaming memory data",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Decorators + Generators + yield",
            "subheading": "STAGE 12 — Extreme Python",
            "body": "<p>Welcome to <strong>Level 97</strong>! In this lesson, we will cover <strong>Decorators + Generators + yield</strong>.</p>\n<p>This level is part of <strong>STAGE 12 — Extreme Python</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Decorators + Generators + yield:</strong> Modifying functions and streaming memory data.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 98,
        "title": "APIs with requests + working with JSON",
        "concept": "Fetching data from web APIs",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "APIs with requests + working with JSON",
            "subheading": "STAGE 12 — Extreme Python",
            "body": "<p>Welcome to <strong>Level 98</strong>! In this lesson, we will cover <strong>APIs with requests + working with JSON</strong>.</p>\n<p>This level is part of <strong>STAGE 12 — Extreme Python</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>APIs with requests + working with JSON:</strong> Fetching data from web APIs.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 99,
        "title": "Multithreading + Async programming",
        "concept": "Executing code concurrently and non-blocking",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Multithreading + Async programming",
            "subheading": "STAGE 12 — Extreme Python",
            "body": "<p>Welcome to <strong>Level 99</strong>! In this lesson, we will cover <strong>Multithreading + Async programming</strong>.</p>\n<p>This level is part of <strong>STAGE 12 — Extreme Python</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Multithreading + Async programming:</strong> Executing code concurrently and non-blocking.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    },
    {
        "id": 100,
        "title": "Final Project & Certificate",
        "concept": "Build a chatbot, scraper, or CLI tool!",
        "sections": [
            "description"
        ],
        "description": {
            "heading": "Final Project & Certificate",
            "subheading": "STAGE 12 — Extreme Python",
            "body": "<p>Welcome to <strong>Level 100</strong>! In this lesson, we will cover <strong>Final Project & Certificate</strong>.</p>\n<p>This level is part of <strong>STAGE 12 — Extreme Python</strong>. Here is the core concept you will master:</p>\n<div class=\"desc-callout callout-highlight\">\n    <span class=\"callout-icon\">💡</span>\n    <div><strong>Final Project & Certificate:</strong> Build a chatbot, scraper, or CLI tool!.</div>\n</div>\n<p>As you progress through your adventure, we will update this room with interactive Q&As, quizzes, and coding sandboxes. Press the <strong>Finish</strong> flag in the corner when you have reviewed this topic to complete the level!</p>\n<div class=\"desc-callout\">\n    <span class=\"callout-icon\">🤖</span>\n    <div><strong>Doraemon's Tip:</strong> Keep up the fantastic progress! You're unlocking more of the map every single day!</div>\n</div>"
        }
    }
];
