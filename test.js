const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let countdownNumberEl = document.getElementById("countdown-number");
let countdown = 60;

countdownNumberEl.textContent = countdown;

const resetTimer = () => {
  countdown = 60;
  countdownNumberEl.textContent = countdown;
};

setInterval(function () {
  countdown = --countdown <= 0 ? 60 : countdown;

  countdownNumberEl.textContent = countdown;
}, 1000);

let x = function () {
  let currentQuestion = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  const showQuestion = () => {
    updateQuestionCounter();
    resetTimer();
    // Mostra la domanda corrente
    document.querySelector("#currentQuestion").innerHTML = `
    <p>${questions[currentQuestion].question}</p>
  `;

    // Mostra le risposte correnti
    const buttons = document.querySelectorAll(".button-box button");
    buttons.forEach((button, index) => {
      button.innerHTML =
        questions[currentQuestion].incorrect_answers[index] || questions[currentQuestion].correct_answer;
    });

    // Se ci sono solo due risposte, mostra solo i primi due pulsanti
    if (questions[currentQuestion].incorrect_answers.length + 1 === 2) {
      document.querySelector("#buttThree").style.display = "none";
      document.querySelector("#buttFour").style.display = "none";
    } else {
      document.querySelector("#buttThree").style.display = "inline-block";
      document.querySelector("#buttFour").style.display = "inline-block";
    }
  };

  document.querySelectorAll(".button-box button").forEach((button) => {
    button.addEventListener("click", (event) => {
      // Verifica se la risposta è corretta
      const isCorrect = event.target.innerHTML === questions[currentQuestion].correct_answer;
      if (isCorrect) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }

      // Passa alla domanda successiva
      currentQuestion++;
      if (currentQuestion === questions.length) {
        // Fine del quiz, mostra il bottone
        document.querySelector("#currentQuestion").innerHTML = `<button id="buttEnd">Vai ai risultati!</button>`;
        document.querySelector(".button-box").innerHTML = "";
        const timer = document.getElementById("countdown");
        timer.remove();
        const footerNone = document.querySelector(".questions-footer");
        footerNone.remove();
        const buttEnd = document.getElementById("buttEnd");
        buttEnd.addEventListener("click", () => {
          // Carica la nuova pagina web con i valori di correctAnswers e incorrectAnswers come parametri dell'URL
          window.location.assign(
            `/results.html?correctAnswers=${correctAnswers}&incorrectAnswers=${incorrectAnswers}&max=10`
          );
        });
      } else {
        showQuestion();
      }
    });
  });
  const updateQuestionCounter = () => {
    document.querySelector(".questions-footer p").innerHTML = `Question ${
      currentQuestion + 1
    }<span class="pink-text">/10</span>`;
  };

  // Mostra la prima domanda
  showQuestion();
};
