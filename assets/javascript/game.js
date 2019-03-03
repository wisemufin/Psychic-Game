// Creates a global variable containing the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Breaks the alphabet variable into an array of strings
var letterChoice = alphabet.split("");

// Computer randomly chooses a letter of the alphabet array
var computerChoice = letterChoice[Math.floor(Math.random()*letterChoice.length)];
