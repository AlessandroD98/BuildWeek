let countdownNumberEl = document.getElementById("countdown-number");
let countdown = 60;

countdownNumberEl.textContent = countdown;

setInterval(function () {
  countdown = --countdown <= 0 ? 60 : countdown;

  countdownNumberEl.textContent = countdown;
}, 1000);

// Parte per la pagina 2

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
// window.onload
// for (let i = 0; i < questions[i].question.length; i++) {
//   let element = questions[i].question;
//   console.log(element);
// }

let x = function () {
  const posizioneDomanda = document.getElementById("currentQuestion");
  const scatolaDomanda = document.createElement("p");
  scatolaDomanda.className = "title";
  const firstQuestion = questions[0].question;
  scatolaDomanda.innerText = firstQuestion;
  posizioneDomanda.appendChild(scatolaDomanda);
  //Pulsante Uno
  const answerOne = questions[0].correct_answer;
  const scatolaRisposta = document.getElementById("buttOne");
  const screenRis = document.createElement("p");
  screenRis.className = "buttonP";
  screenRis.innerText = answerOne;
  scatolaRisposta.appendChild(screenRis);
  //Pulsante Due
  const answerTwo = questions[0].incorrect_answers[0];
  const scatolaRispostaDue = document.getElementById("buttTwo");
  const screenRisUno = document.createElement("p");
  screenRisUno.className = "buttonP";
  screenRisUno.innerText = answerTwo;
  scatolaRispostaDue.appendChild(screenRisUno);
  //Pulsante Tre
  const answerThree = questions[0].incorrect_answers[1];
  const scatolaRispostaTre = document.getElementById("buttThree");
  const screenRisDue = document.createElement("p");
  screenRisDue.className = "buttonP";
  screenRisDue.innerText = answerThree;
  scatolaRispostaTre.appendChild(screenRisDue);
  //Pulsante Quattro
  const answerFour = questions[0].incorrect_answers[2];
  const scatolaRispostaQuattro = document.getElementById("buttFour");
  const screenRisTre = document.createElement("p");
  screenRisTre.className = "buttonP";
  screenRisTre.innerText = answerFour;
  scatolaRispostaQuattro.appendChild(screenRisTre);
};

// const bottoni = document.querySelectorAll("button");
// bottoni.forEach((bottone) => {
//   bottone.addEventListener("click", check, replace);
// });

// const check = function () {
//   if (questions[0].correct_answer)
// }

// TIPS:
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile

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
