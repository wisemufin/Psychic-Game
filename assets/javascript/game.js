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

// Initializes the count of guesses remaining when the game starts
guessRemainder.textContent = guessesLeft;
winCount.textContent = wins;
lossCount.textContent = losses;

// This function runs on keypres
document.onkeyup = function(event) {

  // Logs the key that was pressed into the userGuess variable
  var userLetter = event.key;
  userGuesses.push(userLetter);

  // Puts the user attemps onto the screen!
  userAttempts.textContent = userGuesses.join(', ');

  // What happens if user guesses correctly
  if (userLetter === computerChoice && guessesLeft > 0) {
    userGuesses = [];
    wins++;
    guessesLeft = 9;
    computerChoice = letterChoice[Math.floor(Math.random()*letterChoice.length)];
    winCount.textContent = wins;


    // What happens when user does not guess correctly but game isn't over
  } else if (userLetter !== computerChoice && guessesLeft > 0) {
    guessesLeft--;

    // Game reset condition
  } else if (userLetter !== computerChoice && guessesLeft === 0) {
    userGuesses = [];
    losses++;
    guessesLeft = 9;
    computerChoice = letterChoice[Math.floor(Math.random()*letterChoice.length)];
    lossCount.textContent = losses;
  };


  // Updates the guesses left after going through the above conditions
  guessRemainder.textContent = guessesLeft;

  // guessRemainder.textContent = guessesLeft;
  console.log("computer" + computerChoice);

}
