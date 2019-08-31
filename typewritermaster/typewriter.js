"use strict";

const text = document.getElementById("typewriter").textContent;
const arr = text.split("");
let step = 0;
const audio = new Audio("typekey1.mp3");

function start(counter) {
  if (counter < 44) {
    setTimeout(function() {
      let letter = arr[step];
      document.querySelector("h1").append(letter);
      step++;
      counter++;
      audio.play();

      console.log(counter);
      console.log(step);
      console.log(letter);

      start(counter);
    }, 300);
  }
}
start(0);
