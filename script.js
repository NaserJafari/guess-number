"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const restart = document.querySelector(".again");
const check = document.querySelector(".check");
let score = 20;
let highscore = 0;

const message = function (message) {
  document.querySelector(".message").textContent = message;
};

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message("Geen input!");
  } else if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    message("Je hebt gewonnen!");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    message(guess > secretNumber ? "Too high!" : "Too low!");
    score--;
    document.querySelector(".score").textContent = score;
  }
});

restart.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  message("Start guessing!!!");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
