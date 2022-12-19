let countdownNumberEl = document.getElementById("countdown-number");
let countdown = 60;

countdownNumberEl.textContent = countdown;

setInterval(function () {
  countdown = --countdown <= 0 ? 10 : countdown;

  countdownNumberEl.textContent = countdown;
}, 6000);
