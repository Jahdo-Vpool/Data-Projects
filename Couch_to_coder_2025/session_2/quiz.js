// Create an array with a few objects
// =======================
// Couch-to-Coder Quiz Game
// Week 2: Arrays, Objects, Loops
// =======================

// An array that stores quiz questions
// Each question is an OBJECT with 3 parts:
//  - question: the text of the question
//  - options: an ARRAY of possible answers
//  - answer: the index of the correct option (0, 1, or 2)
const questions = [
  { question: "What is programming?", options: ["Writing essays", "Giving instructions to a computer", "Building a house"], answer: 1 },
  { question: "Which of these is a programming language?", options: ["Spanish", "JavaScript", "English"], answer: 1 },
  { question: "Which tool do we use to run JavaScript code locally?", options: ["Photoshop", "Node.js", "Microsoft Word"], answer: 1 },
  { question: "Which editor is commonly used in this course?", options: ["Excel", "VS Code", "Chrome"], answer: 1 },
  { question: "What is the index of the first element in a JavaScript array?", options: ["1", "-1", "0"], answer: 2 },
  { question: "Which method adds an item to the end of an array?", options: [".pop()", ".push()", ".shift()"], answer: 1 },
  { question: "Which method removes the last element from an array?", options: [".push()", ".unshift()", ".pop()"], answer: 2 },
  { question: "Objects store data in what form?", options: ["Only numbers", "Only strings", "Key-value pairs"], answer: 2 },
  { question: "In person.name, what is 'name'?", options: ["An array index", "A value", "A key (property)"], answer: 2 },
  { question: "Which loop is commonly used to go through each element in an array?", options: ["switch statement", "if statement", "for loop"], answer: 2 },
  { question: "A loop that never ends is called a:", options: ["While loop", "Infinite loop", "For loop"], answer: 1 },
  { question: "Which keyword is used to stop a loop early?", options: ["stop", "exit", "break"], answer: 2 },
  { question: "Which language defines the structure of a webpage?", options: ["JavaScript", "HTML", "CSS"], answer: 1 },
  { question: "Which language is used to style a webpage?", options: ["SQL", "CSS", "HTML"], answer: 1 },
  { question: "Which of these is NOT a web technology?", options: ["CSS", "Microsoft Excel", "HTML"], answer: 1 }
];

// Keep track of how many questions the user gets right
let score = 0;

// Loop through every question in the array
// for (initialize; condition; update)
for (let i = 0; i < questions.length; i++) {
  // Get the current question object
  const q = questions[i];

  // Print the question number and text
  console.log(`\nQuestion ${i + 1}: ${q.question}`);

  // Loop through the options array to display each choice
  for (let j = 0; j < q.options.length; j++) {
    console.log(`${j}: ${q.options[j]}`);
  }

  // For now, simulate the user's answer with a random guess
  // Math.random() gives a decimal between 0 and 1
  // Multiply by number of options → scale to correct range (0 up to 3)
  // Math.floor() → round down to get a whole number (0, 1, or 2)
  const userAnswer = Math.floor(Math.random() * q.options.length);
  console.log("User guessed:", q.options[userAnswer]);

  // Compare the random guess to the correct answer
  if (userAnswer === q.answer) {
    console.log("We randomly got it right!");
    score++;
  } else {
    console.log("Wrong! The correct answer is: " + q.options[q.answer]);
  }
}

// After the loop ends, show the final score
console.log(`\nFinal Score is.....: ${score}/${questions.length}`);



