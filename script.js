const star1 = document.getElementById('star1');const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');
const image = document.getElementById("image");
const heading = document.getElementById("heading");
const ratedstar = document.getElementById("ratedstar");
const paragraph = document.getElementById("paragraph");
const reviewbox = document.getElementById("reviewbox");

ratedstar.style.display = "none";
image.style.display = "none";
const stars=document.getElementById('stars');

star1.addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#ff781f';
  ratedstar.innerText = "you selected 1 out of 5";
});

star2.addEventListener('click',(event)=> {
  event.target.style.backgroundColor = '#ff781f';
  ratedstar.innerText = "you selected 2 out of 5";
});

star3.addEventListener('click',(event)=> {
  event.target.style.backgroundColor = '#ff781f';
  ratedstar.innerText = "you selected 3 out of 5";
});

star4.addEventListener('click',(event)=> {
  event.target.style.backgroundColor = '#ff781f';
  ratedstar.innerText = "you selected 4 out of 5";
});

star5.addEventListener('click',(event)=>{
  event.target.style.backgroundColor = '#ff781f';
  ratedstar.innerText = "you selected 5 out of 5";
});


let submit = document.querySelector("#submit");
submit.addEventListener("click",() => {
  viewstar.style.display = "none";
  text.style.display = "none";
  star1.style.display = "none";
  star2.style.display = "none";
  star3.style.display = "none";
  star4.style.display = "none";
  star5.style.display = "none";
  submit.style.display = "none";
  heading.innerText = "Thank you!";
  paragraph.innerText = "We appreciate you taking the time to give rating \n if you ever need more support,don't hesitate to \n get in touch!";
  ratedstar.style.display = "block";
  image.style.display = "block"; 
});




