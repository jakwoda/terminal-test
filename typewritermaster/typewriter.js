"use strict";

const text = document.getElementById("typewriter").textContent;
const arr = text.split("");

var step;
for (step = 0; step < 44; step++) {
  let letter = arr[step];
  document.querySelector("h1").append(letter);
  console.log(step);
  console.log(letter);
}
