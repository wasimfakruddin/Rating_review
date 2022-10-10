
let RATING = null;

const text = document.getElementById("text");
const stars = document.getElementById("stars");
const image = document.getElementById("image");
const heading = document.getElementById("heading");
const ratedstar = document.getElementById("ratedstar");
const paragraph = document.getElementById("paragraph");
const reviewbox = document.getElementById("reviewbox");
const allStars = document.getElementsByClassName("star");

function resetRateButtonStyles(hideallStars = false) {
  for (let i = 0; i < allStars.length; i++) {
    if (hideallStars) allStars[i].style.display = "none";
    allStars[i].style.backgroundColor = "rgb(83, 85, 90)";
  }
}

ratedstar.style.display = "none";
image.style.display = "none";

for (let i = 0; i < allStars.length; i++) {
  allStars[i].addEventListener("click", (event) => {
    resetRateButtonStyles();
    event.target.style.backgroundColor = "#ff781f";
    RATING = i + 1;
  });
}

let submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  if (!RATING) return;
  resetRateButtonStyles(true);
  viewstar.style.display = "none";
  submit.style.display = "none";
  text.style.display = "none";
  heading.innerText = "Thank you!";
  paragraph.innerText =
    "We appreciate you taking the time to give rating \n if you ever need more support,don't hesitate to \n get in touch!";
  ratedstar.innerText = "You have rated " + RATING + " out of 5";
  ratedstar.style.display = "block";
  image.style.display = "block";
});




