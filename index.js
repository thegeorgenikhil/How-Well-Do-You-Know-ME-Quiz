var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " do you know Nikhil");

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("right!");
    score++;
  } else {
    console.log("wrong!");
  }

  console.log("Current Score:", score);
  console.log("------------------------");
}

var questions = [
  {
    question: "What is my favourite colour? ",
    answer: "Black",
  },
  {
    question: "What is my favourite programming language? ",
    answer: "Javascript",
  },
  {
    question: "Where do I live? ",
    answer: "Kerala",
  },
  {
    question: "What is my age? ",
    answer: "17",
  },
  {
    question: "What is my favourite destination? ",
    answer: "Dubai",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Final Score:", score);
console.log("------------------------");
