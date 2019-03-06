// Creates a global variable containing the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Breaks the alphabet variable into an array of strings
var letterChoice = alphabet.split("");

// Variables for the game wins, losses, and guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];

// Variables that reference the HTML for updated information
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");
var guessRemainder = document.getElementById("guess-remainder");
var userAttempts = document.getElementById("user-attempts");

// Computer chooses random letter from the alphabet variable
var computerChoice = letterChoice[Math.floor(Math.random()*letterChoice.length)];



function gameStart() {
  userGuesses = [];
  guessesLeft = 9;
  // Initializes the count of guesses remaining when the game starts
  guessRemainder.textContent = guessesLeft;
  userAttempts.textContent = "";
  winCount.textContent = wins;
  lossCount.textContent = losses;
  computerChoice = letterChoice[Math.floor(Math.random()*letterChoice.length)];
}

gameStart();
// This function runs on keypres
document.onkeyup = function(event) {

  // Logs the key that was pressed into the userGuess variable
  var userLetter = event.key;
  userGuesses.push(userLetter);

  guessesLeft--;

  // Puts the user attemps onto the screen!
  userAttempts.textContent = userGuesses.join(', ');

  // What happens if user guesses correctly
  if (userLetter === computerChoice) {
    wins++;
    gameStart();
  };

    // Losing condition
    if (userLetter !== computerChoice && guessesLeft === 0) {
    losses++;
    gameStart();
  };

};

  // Updates the guesses left after going through the above conditions
  guessRemainder.textContent = guessesLeft;
