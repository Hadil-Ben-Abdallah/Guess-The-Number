"use strict";

let secretNnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNnumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";

    // When guess is lower than the range
  } else if (guess < 0) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "❌ Range starts from 1!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😓 You lost!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }

    // When guess is higher than the range
  } else if (guess >= 21) {
    if (score > 1) {
      document.querySelector(".message").textContent = "❌ Range stops at 20!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😓 You lost!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }

    // When guess is correct
  } else if (guess === secretNnumber) {
    document.querySelector(".message").textContent = "🎉 correct number!";

    // Change the background color
    document.querySelector("body").style.backgroundColor = "#60b347";

    // Change the number width
    document.querySelector(".number").style.width = "30rem";

    // When guess is high
  } else if (guess > secretNnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🔼 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😓 You lost!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }

    //When guess is low
  } else if (guess < secretNnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🔽 Too low!";
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
