const btnSubmit = document.querySelector("#btn-submit");
const tyContainer = document.querySelector(".thankyou-container-hidden");
const mainContainerList = document.querySelector(".main-container");

const logo = document.querySelector(".class-logo");
const mainText = document.querySelector(".main-text");
const btnContainer = document.querySelector(".btn-container");
const submitContainer = document.querySelector(".btn-submit-container");

const btnRatings = document.querySelectorAll(".btn-ratings");
const btnChoice = document.querySelector(".rate-choice");

const btnRatingsList = Array.from(btnRatings);

for (let rating of btnRatingsList) {
  rating.addEventListener("click", function () {
    btnChoice.innerHTML = `You selected ${rating.innerHTML} out of ${btnRatingsList.length}`;
  });
}

btnSubmit.addEventListener("click", () => {
  logo.style.display = "none";
  mainText.style.display = "none";
  btnContainer.style.display = "none";
  submitContainer.style.display = "none";
  tyContainer.classList.remove("hide-me");

  // why didn't this work inside here?
  // for (let rating of btnRatingsList) {
  //   rating.addEventListener("click", function () {
  //     btnChoice.innerHTML = `You selected ${rating.innerHTML} out of ${btnRatingsList.length}`;
  //   });
  // }
});
