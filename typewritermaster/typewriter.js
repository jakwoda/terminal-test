"use strict";

const text = document.getElementById("typewriter").textContent;
const arr = text.split("");
let step = 0;
let rando = 0;
const audio = new Audio("typekey1.mp3");

//function that writes one letter at a time from the array
document.getElementById("typewriter").textContent = " ";
function type(counter) {
  if (step <= 42) {
    setTimeout(function() {
      let letter = arr[step];

      document.querySelector("h1").append(letter);

      //audio.play();

      rando = Math.floor(Math.random() * 200) + 300;
      type(counter);

      step++;
      counter++;
      //console.log(counter);
      //console.log(rando);
      console.log(step);
    }, rando);
  } else {
    console.log("sorry11111");
  }
}

// start animation
window.addEventListener("click", event => {
  type(0);
  arr[0];
});
