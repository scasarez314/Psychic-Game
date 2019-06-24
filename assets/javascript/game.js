// Variables
var Wins = 0;
var Losses = 0;

// " Guess What Letter I'm Thinking "
var aBc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var aBc = aBc[Math.floor(Math.random() * aBc.length)];
console.log(aBc)

// " Letters You've Guessed: "
document.onkeydown = function () {
    var playerGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(playerGuess)
}

// " if/else you dont guess correctly "
// let playerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
if (playerGuess === "aBc") {
    var playerGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    Wins++;
    console.log("Wins: " + Wins)
}
else {
    console.log("Losses: " + Losses)
}

var html = "<p> Choose any letter if you dare</p>" +
    "<p>Wins: " + Wins + "</p>" +
    "<p> Losses: " + Losses + "</p>" +
    "<p> Letters you've guessed: " + playerGuess + "</p";
document.querySelector('#thinking').innerHTML = html;
