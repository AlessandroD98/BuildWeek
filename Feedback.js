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

//Metodo funzionante

// const stars = document.querySelectorAll(".star");

// stars.forEach((star) => {
//   star.addEventListener("click", (event) => {
//     //for aggiungere loop
//     const selected = event.currentTarget.classList.toggle("selected");
//     const index = Array.from(stars).indexOf(event.currentTarget);

//     // Seleziona tutte le stelle precedenti
//     for (let i = 0; i < index; i++) {
//       stars[i].classList.toggle("selected", selected);
//     }
//   });
// });

//Metodo alternativo

const ratingStars = [...document.getElementsByClassName("star")];

function executeRating(stars) {
  const starClassActive = "selected";
  const starClassInactive = "star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);
