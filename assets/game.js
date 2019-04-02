//define variables

var letters = ["a", "c", "d", "e", "g", "h", "i", "j", "k",  "n", "o",
"q",  "s", "u", "w", "x", "z"];
var guessesLeft = 17;
var wins = 0;
var losses = 0;



//click to begin
document.onkeyup = function (event) {
    console.log(event.key);


//computer chooses random letter
var computer = letters[Math.floor(Math.random() * letters.length)];
      console.log(computer);
//log player choice
var player = event.key;

//compare player choice and computer choice

if (player == computer) {
    console.log("win")
    wins++;
}
else {
    console.log("lose")
    losses++;
} 

//count down number of guesses







//update page html
var winDiv = document.getElementById("wins");
      winDiv.textContent = wins;
var lossesDiv = document.getElementById("losses");
    lossesDiv.textContent = losses;
var guessedDiv = document.getElementById("alreadyguessed");
    guessedDiv.textcontent = computer;

};