"use strict";

const secretNnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNnumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess < 0) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "❌ Range starts from 1!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😓 You lost!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess >= 21) {
    if (score > 1) {
      document.querySelector(".message").textContent = "❌ Range stops at 20!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😓 You lost!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === secretNnumber) {
    document.querySelector(".message").textContent = "🎉 correct number!";
  } else if (guess > secretNnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🔼 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😓 You lost!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🔽 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😓 You lost!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
