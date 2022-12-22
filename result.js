let params = new URLSearchParams(location.search);
let primoParametro = params.get("correctAnswers");
let max = params.get("max");
let secondoParametro = params.get("incorrectAnswers");

// Crea un nuovo oggetto Chart
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Risposte giuste", "Risposte sbagliate"],
    datasets: [
      {
        label: "# of Votes",
        data: [primoParametro, secondoParametro],
        backgroundColor: ["#00FFFF", "#d20094"],
        borderColor: ["#000000", "#000000"],
        borderWidth: 4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      position: "right",
    },
  },
});
const canvas = document.getElementById("myChart");
canvas.style.width = "80%";
canvas.style.height = "80%";

const latosx = function () {
  const newprimoparametro = (primoParametro / 10) * 100;
  const rispotecorr = document.getElementById("rispcorr");
  const pcorr = document.createElement("p");
  pcorr.innerText = "Correct";
  const p2corr = document.createElement("p");
  p2corr.innerText = newprimoparametro + "%";
  const p3corr = document.createElement("p");
  p3corr.innerText = primoParametro + "/10 questions";
  pcorr.classList = "correct";
  p2corr.classList = "correct";
  p3corr.classList = "correct";
  rispotecorr.appendChild(pcorr);
  rispotecorr.appendChild(p2corr);
  rispotecorr.appendChild(p3corr);
};

const latodx = function () {
  const newsecondoparametro = (secondoParametro / 10) * 100;
  const rispoteerr = document.getElementById("risperr");
  const perr = document.createElement("p");
  perr.innerText = "Wrong";
  const p2err = document.createElement("p");
  p2err.innerText = newsecondoparametro + "%";
  const p3err = document.createElement("p");
  p3err.innerText = secondoParametro + "/10 questions";
  perr.classList = "wrong";
  p2err.classList = "wrong";
  p3err.classList = "wrong";
  rispoteerr.appendChild(perr);
  rispoteerr.appendChild(p2err);
  rispoteerr.appendChild(p3err);
};
