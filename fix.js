const fs = require('fs');
let content = fs.readFileSync('python_course.html', 'utf-8');

// Fix unescaped backtick breaking template literals in Level 3
content = content.replace(/`IndentationError`/g, "<code>IndentationError</code>");

// Fix missing commas between lesson array end and quiz array start
content = content.replace(/\s+\]\r?\n\s+quiz: \[/g, "\n        ],\n        quiz: [");

fs.writeFileSync('python_course.html', content);
console.log("Syntax errors fixed!");
