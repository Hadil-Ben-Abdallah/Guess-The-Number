"use strict";

let secretNnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } // When guess is correct
  else if (guess === secretNnumber) {
    // Show the secret number
    document.querySelector(".number").textContent = secretNnumber;

    document.querySelector(".message").textContent = "🎉 correct number!";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // Change the background color
    document.querySelector("body").style.backgroundColor = "#60b347";

    // Change the number width
    document.querySelector(".number").style.width = "30rem";
  } else if (guess !== secretNnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess < 0
          ? "❌ Range starts from 1!"
          : guess >= 21
          ? "❌ Range stops at 20!"
          : guess > secretNnumber
          ? "🔼 Too high!"
          : "🔽 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😓 You lost!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = null;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
