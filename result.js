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
canvas.style.width = "350px";
canvas.style.height = "350px";
