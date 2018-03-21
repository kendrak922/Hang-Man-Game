'use strict';
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
let word= ["Paris", "London", "Amman","Mexico City", "Berlin", "Ottawa", "Sanaa"]
const blank = [];
let guessesLeft = 10;
let wrongLetter = [];
let winCounter = 0;

function generate(){
 let randWord = word[Math.floor(Math.random() * word.length)];
 return randWord;
}
  const targetWord = generate();

  for (let i = 0; i < targetWord.length; i++){
blank.push('_')}
document.getElementById("solution").innerHTML = blank.join(" ")
document.onkeyup = function startGame (letter) {
let guess = event.key;
if(targetWord.indexOf(guess) > -1){
  for(let i = 0; i < targetWord.length; i++){
      if(targetWord[i] === guess){
        blank[i] = guess;
        blank.push(guess)
        winCounter++
        winLose()
      }
    }
  }
  else{
    wrongLetter.push(guess);
    guessesLeft --;
    document.getElementById("attempts").innerHTML = guessesLeft
    document.getElementById("guessedLetters").innerHTML = wrongLetter
    winLose()
  }
};

function winLose(){
  if(targetWord.length === winCounter){
  document.getElementById("wins").innerHTML = +1; 
  reset()
  }else if(guessesLeft<=0){
  reset()
  }}

  function reset(){
    guessesLeft = 10;
    wrongLetter = [];
    winCounter = 0;
    generate();
   }
