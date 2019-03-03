// Creates a global variable containing the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Breaks the alphabet variable into an array of strings
var letterChoice = alphabet.split("");

// This function runs on keypres
document.onkeyup = function(event) {

  // Logs the key that was pressed into the userGuess variable
  var userGuess = event.key;

  // Computer randomly chooses a letter of the alphabet array
  var computerChoice = letterChoice[Math.floor(Math.random()*letterChoice.length)];


}
