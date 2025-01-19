"use strict";

function createConfetti() {
  const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
  ];
  const confettiContainer = document.querySelector(".confetti-container");
  const particleCount = 150;

  // Clear any existing confetti
  confettiContainer.innerHTML = "";

  for (let i = 0; i < particleCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "%";

    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.animationDelay = Math.random() * 2 + "s";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiContainer.appendChild(confetti);
  }

  // Remove confetti after animation
  setTimeout(() => {
    confettiContainer.innerHTML = "";
  }, 5000);
}

let secretNnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (className, content) {
  document.querySelector(className).textContent = content;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage(".message", "⛔ No number!");
  } else if (guess === secretNnumber) {
    displayMessage(".number", secretNnumber);
    displayMessage(".message", "🎉 correct number!");
    if (score > highscore) {
      highscore = score;
      displayMessage(".highscore", highscore);
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    createConfetti();
  } else if (guess !== secretNnumber) {
    if (score > 1) {
      displayMessage(
        ".message",
        guess < 0
          ? "❌ Range starts from 1!"
          : guess >= 21
          ? "❌ Range stops at 20!"
          : guess > secretNnumber
          ? "🔼 Too high!"
          : "🔽 Too low!"
      );
      score--;
      displayMessage(".score", score);
    } else {
      displayMessage(".message", "😓 You lost!");
      displayMessage(".score", 0);
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage(".message", "Start guessing...");
  displayMessage(".number", "?");
  displayMessage(".score", score);
  document.querySelector(".guess").value = null;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
