window.onload = () => {
  let chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      horizontalAlign: "left",
    },
    data: [
      {
        type: "doughnut",
        startAngle: 60,
        indexLabelFontSize: 35,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 66, label: "Correct", color: "#00FFFF" },
          { y: 33, label: "Wrong", color: "#C2128D" },
        ],
      },
    ],
  });
  chart.render();
};
