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

// TIPS:

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// PARTE INIZIALE
// REGOLE:
// / L'utente dovrà indovinare un certo numero di domande
// / Ogni risposta corretta gli darà 1 punto
// / Le domande possono avere risposte multiple o singole (true/false)
// / Al termine del quiz l'utente dovrà poter vedere il suo punteggio

// DOMANDE:
// / Le domande possono essere ottenute da questo URL ( http://bit.ly/strive_QUIZZ ) o puoi scriverne di tue
// / Possono essere composte di boolean multipli (true / false)

// TIPS:
// / Usa una variabile globale per registrare il punteggio dell'utente
// / Crea una variabile "questionNumber" per tenere traccia del numero (o posizione) della domanda presentata all'utente
// / Quando "questionNumber" è maggiore delle domande disponibili, a quel punto l'applicazione dovrà mostrare il punteggio
// / Comincia salvando le domande in una variabile (o reperiscile dall'URL fornito usando AJAX e fetch)
// / Parti con l'implementazione semplice, poi passa agli extra e ad abbellire l'interfaccia
// / Fai test completi: controlla la console periodicamente per verificare che non ci siano errori e che il flusso di dati sia quello che ti aspetti

// EXTRA:
// / Dai un feedback sulla risposta al momento del click (corretta o sbagliata)
// / Visualizza una domanda alla volta in sequenza piuttosto che tutte assieme in forma di lista
// / Permetti all'utente di selezionare la difficoltà del quiz prima di iniziare e il numero di domande che desidera ricevere.
// ( Se hai implementato l'applicazione usando l'URL fornito, puoi ottenere i dati che ti servono in modo semplice,
// usando query parameters in questo modo: https://opentdb.com/api.php?amount=10&category=18&difficulty=easy e modificarne il numero di domande e difficoltà )

// /* NON DIMENTICARE...
//   di fare commit & push del codice regolarmente sulla tua repository GitHub e di condividerla con i tuoi colleghi
// */
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
    updateQuestionCounter(); // Aggiorna il counter in basso
    resetTimer(); //Resetta il timer a 60
    // Mostra la domanda corrente
    document.querySelector("#currentQuestion").innerHTML = `
    <p>${questions[currentQuestion].question}</p>
  `;

    // Mostra le risposte
    const buttons = document.querySelectorAll(".button-box button");
    buttons.forEach((button, index) => {
      button.innerHTML =
        questions[currentQuestion].incorrect_answers[index] || questions[currentQuestion].correct_answer;
    });

    // Se ci sono solo due risposte, mostra solo i primi due pulsanti
    // altrimenti, mostra tutti e quattro i pulsanti
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
        // Incrementa il contatore delle risposte corrette
        correctAnswers++;
      } else {
        // Incrementa il contatore delle risposte sbagliate
        incorrectAnswers++;
      }

      // Passa alla domanda successiva
      currentQuestion++;
      if (currentQuestion === questions.length) {
        // Fine del quiz, mostra un messaggio
        document.querySelector("#currentQuestion").innerHTML = `<button id="buttEnd">Vai ai risultati!</button>`;
        document.querySelector(".button-box").innerHTML = "";
        const timer = document.getElementById("countdown");
        timer.remove();
        const footerNone = document.querySelector(".questions-footer");
        footerNone.remove();
        // Aggiungi un evento di click al bottone "buttEnd"
        const buttEnd = document.getElementById("buttEnd");
        buttEnd.addEventListener("click", () => {
          // Carica la nuova pagina web con i valori di correctAnswers e incorrectAnswers come parametri dell'URL
          window.location.assign(`/results.html?correctAnswers=${correctAnswers}&incorrectAnswers=${incorrectAnswers}`);
        });
      } else {
        // Mostra la domanda successiva
        showQuestion();
      }
    });
  });
  const updateQuestionCounter = () => {
    // Aggiorna il contatore delle domande
    document.querySelector(".questions-footer p").innerHTML = `Question ${
      currentQuestion + 1
    }<span class="pink-text">/10</span>`;
  };

  // Mostra la prima domanda
  showQuestion();
};

// const bottoneFinale = document.getElementById("buttEnd");

// // Aggiungi un evento di click al bottone
// bottoneFinale.addEventListener("click", () => {
//   // Carica la nuova pagina web
//   window.location.assign(`/results.html?giuste=${correctAnswers}&max=10`);
// });
