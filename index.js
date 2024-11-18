let secretNumber;
let attempts;
let maxAttempts;

function startGame(difficulty) {
  // Set game variables based on difficulty
  switch (difficulty) {
    case "easy":
      maxAttempts = 10;
      break;
    case "medium":
      maxAttempts = 7;
      break;
    case "hard":
      maxAttempts = 5;
      break;
    case "brutal":
      maxAttempts = 5;
      break;
    case "bonus":
      maxAttempts = 1;
      break;
    default:
      return;
  }

  // Generate random secret number
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  // Update UI
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("gameplay").classList.remove("hidden");
  document.getElementById("instructions").innerText =
    difficulty === "brutal"
      ? "Guess the sum and difference of two numbers between 2 and 6!"
      : `You have ${maxAttempts} attempts to guess a number between 1 and 100.`;
  document.getElementById("feedback").innerText = "";
}

function submitGuess() {
  const guess = Number(document.getElementById("guess").value);
  attempts++;

  if (guess === secretNumber) {
    document.getElementById("feedback").innerText =
      "Correct! You are the C++ King!!! 🎉";
    document.getElementById("feedback").style.color = "var(--apple-green)";
  } else if (attempts >= maxAttempts) {
    document.getElementById("feedback").innerText = `Game over! The correct number was ${secretNumber}.`;
    document.getElementById("feedback").style.color = "var(--apple-red)";
  } else {
    const hint = guess > secretNumber ? "lower" : "higher";
    document.getElementById("feedback").innerText = `Try ${hint}! Attempts left: ${
      maxAttempts - attempts
    }.`;
    document.getElementById("feedback").style.color = "var(--apple-blue)";
  }
}

function restartGame() {
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("gameplay").classList.add("hidden");
  document.getElementById("guess").value = "";
}
document.getElementById("submitGuess").addEventListener("click", submitGuess);
