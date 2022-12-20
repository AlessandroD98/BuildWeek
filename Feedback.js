// const arrOfSTars = document.querySelectorAll(".star");
// FillStar = document.createElement("img");
// FillStar.src = "./starfill.svg";
// arrOfSTars.forEach((star) => {
//   star.addEventListener("click", function replaceimg() {
//     // const main = document.querySelector("main");
//     // main.replaceChild(FillStar, star);
//     const arrOfSTars = document.querySelectorAll(".star");
//     const main = document.querySelector("main");
//     for (let i = 0; i < arrOfSTars.length; i++) {
//       if (arrOfSTars[i] !== FillStar) {
//         main.replaceChild(FillStar, arrOfSTars[0]);
//       }
//     }
//   });
// });
const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("click", (event) => {
    const selected = event.currentTarget.classList.toggle("selected");
    const index = Array.from(stars).indexOf(event.currentTarget);

    // Seleziona tutte le stelle precedenti
    for (let i = 0; i < index; i++) {
      stars[i].classList.toggle("selected", selected);
    }
  });
});
