'use strict';
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
const word= ["Paris", "London", "Amman"]
const blank = [];
let guessesLeft = 10;
let wrongLetter = [];

const targetWord = word[Math.floor(Math.random() * word.length)];



for(let i = 0; i < targetWord.length; i++){
{
  blank.push('_')
}
document.getElementById("solution").innerHTML = blank.join(" ")
document.getElementById("attempts").innerhtml = guessesLeft;

document.onkeyup = function(letter) {

let guess = event.key;
  if(targetWord.indexOf(guess) > -1)
  {
    for(let i = 0; i < targetWord.length; i++){
      if(targetWord[i] === guess){
        blank[i] === guess;
        console.log(blank)
      }
    }
  }
  else{
    wrongLetter.push(guess);
    guessesLeft--;
    console.log(guessesLeft)
    console.log(wrongLetter)
    document.getElementById("guessedLetters").innerhtml = wrongLetter
  }
 } };
// startGame();
