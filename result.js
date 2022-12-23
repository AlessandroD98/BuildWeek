let params = new URLSearchParams(location.search);
let primoParametro = params.get("correctAnswers");
let max = params.get("max");
let secondoParametro = params.get("incorrectAnswers");

// Crea un nuovo oggetto Chart
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Correct Answers", "Wrong Answers"],
    datasets: [
      {
        label: "# of Votes",
        data: [primoParametro, secondoParametro],
        backgroundColor: ["rgba(0, 255, 255, 0.6)", "rgba(210, 0, 148, 0.6)"],
        borderColor: ["#000000", "#000000"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    cutoutPercentage: 50,
    afterDraw: function (chart) {
      if (primoParametro > 5) {
        const ctx = chart.chart.ctx;
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "20px Arial";
        ctx.fillText("Congratulations", chart.chart.width / 2, chart.chart.height / 2);
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "right",
      labels: {
        boxWidth: 20,
        fontColor: "#ffffff",
        fontSize: 20,
        generateLabels: function (chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function (label, i) {
              const meta = chart.getDatasetMeta(0);
              const ds = data.datasets[0];
              const arc = meta.data[i];
              const custom = (arc && arc.custom) || {};
              const getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
              const arcOpts = chart.options.elements.arc;
              const fill = custom.backgroundColor
                ? custom.backgroundColor
                : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
              const stroke = custom.borderColor
                ? custom.borderColor
                : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
              const bw = custom.borderWidth
                ? custom.borderWidth
                : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

              return {
                text: label + ": " + ds.data[i] + "/" + max,
                fillStyle: fill,
                strokeStyle: stroke,
                lineWidth: bw,
                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                index: i,
              };
            });
          }
          return [];
        },
      },
    },
  },
});
const canvas = document.getElementById("myChart");
canvas.style.width = "300%";
canvas.style.height = "300%";

// const latosx = function () {
//   const newprimoparametro = (primoParametro / 10) * 100;
//   const rispotecorr = document.getElementById("rispcorr");
//   const pcorr = document.createElement("p");
//   pcorr.innerText = "Correct";
//   const p2corr = document.createElement("p");
//   p2corr.innerText = newprimoparametro + "%";
//   const p3corr = document.createElement("p");
//   p3corr.innerText = primoParametro + "/10 questions";
//   pcorr.classList = "correct";
//   p2corr.classList = "correct";
//   p3corr.classList = "correct";
//   rispotecorr.appendChild(pcorr);
//   rispotecorr.appendChild(p2corr);
//   rispotecorr.appendChild(p3corr);

//   const newsecondoparametro = (secondoParametro / 10) * 100;
//   const rispoteerr = document.getElementById("risperr");
//   const perr = document.createElement("p");
//   perr.innerText = "Wrong";
//   const p2err = document.createElement("p");
//   p2err.innerText = newsecondoparametro + "%";
//   const p3err = document.createElement("p");
//   p3err.innerText = secondoParametro + "/10 questions";
//   perr.classList = "wrong";
//   p2err.classList = "wrong";
//   p3err.classList = "wrong";
//   rispoteerr.appendChild(perr);
//   rispoteerr.appendChild(p2err);
//   rispoteerr.appendChild(p3err);
// };
