const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "IBM"],
    answer: "Netscape"
  },
  {
    question: "What symbol is used for comments in JavaScript?",
    options: ["//", "symbol", "comments", "comm"],
    answer: "//"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],
    answer: "React"
  }
];

let current = 0;

function showQuestion() {
  const q = quiz[current];
  document.getElementById("question").textContent = `Q${current + 1}: ${q.question}`;
  const optionsHTML = q.options.map(opt =>
    `<li><button onclick="checkAnswer('${opt}')">${opt}</button></li>`
  ).join("");
  document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(selected) {
  const correct = quiz[current].answer;
  alert(selected === correct ? "✅ Correct!" : `❌ Wrong! Correct: ${correct}`);
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <h2>🎉 Quiz Completed!</h2>
      <p>Great job! You've finished the quiz.</p>
    `;
  }
}

// Joke API
async function getJoke() {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
  } catch {
    document.getElementById("joke").textContent = "Couldn't fetch joke. Try again!";
  }
}

// Init
showQuestion();
getJoke();
