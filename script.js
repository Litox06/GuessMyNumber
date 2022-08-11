"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};

const changeHeader = function (h1) {
  document.querySelector("h1").textContent = h1;
};

const updateScore = function (score) {
  document.querySelector(".score").textContent = score;
};


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there's no input
  if (!guess) {
    displayMessage("No number!");
    // When player wins
  } else if (guess === secretNumber) {
    changeHeader("You guessed the number!");
    displayMessage("Correct number!");
    displayNumber(secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.Width = "30rem";

    if (score > highscore) {
      // Highscore logic
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      updateScore(score);
    } else {
      changeHeader("The number to guess was");
      displayNumber(secretNumber);
      displayMessage("🚮 You lost the game!");

      document.querySelector("body").style.backgroundColor = "rgb(203, 8, 8)";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  changeHeader("Guess My Number!");
  updateScore(score);
  displayNumber("?");
  
  document.querySelector(".guess").value = ""; // Use value instead of textContent, that's the keyword to manipulate the input's content
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.Width = "15rem";
});
