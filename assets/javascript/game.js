'use strict';
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
const word= ["Paris", "London", "Amman"]
const blank = [];

let targetWord = word[Math.floor(Math.random() * word.length)];

for(let i = 0; i < targetWord.length; i++){
{
  blank.push('_')
}
document.getElementById("solution").innerHTML = blank.join(" ")
};

document.onkeyup = function(letter) {
    // inside here lives some
    // code that will run every time
    // a keyup event happens.
  };

