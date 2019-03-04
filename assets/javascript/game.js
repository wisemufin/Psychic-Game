// Creates a global variable containing the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Breaks the alphabet variable into an array of strings
var letterChoice = alphabet.split("");

// Variables for the game wins, losses, and guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];

var computerChoice = letterChoice[Math.floor(Math.random()*letterChoice.length)];
console.log("Computer chose " + computerChoice);

// This function runs on keypres
document.onkeyup = function(event) {

  // Logs the key that was pressed into the userGuess variable
  var userLetter = event.key;
  console.log("You chose " + userLetter);

  // Computer randomly chooses a letter of the alphabet array
  // var computerChoice = letterChoice[Math.floor(Math.random()*letterChoice.length)];
  // console.log("Computer chose " + computerChoice);

  // What happens if user guesses correctly
  if (userLetter === computerChoice && guessesLeft > 0) {
    wins++;
    guessesLeft = 9;
    computerChoice = letterChoice[Math.floor(Math.random()*letterChoice.length)];
    // console.log("New computer choice " + computerChoice)
    // What happens when user does not guess correctly but game isn't over
  } else if (userLetter !== computerChoice && guessesLeft > 0) {
    guessesLeft--;
    // Game reset condition
  } else if (userLetter !== computerChoice && guessesLeft === 0) {
    losses++;
    guessesLeft = 9;
    computerChoice = letterChoice[Math.floor(Math.random()*letterChoice.length)];
    // console.log("New computer choice " + computerChoice)
  };

  console.log(wins);
  console.log(losses);
  console.log(guessesLeft);

}
