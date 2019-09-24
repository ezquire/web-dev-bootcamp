var secretNumber = 100;

var stringGuess;
var guess;

while(guess != secretNumber) {
    stringGuess = prompt("Guess a number");
    guess = Number(stringGuess);
    if(guess === secretNumber) {
        alert("YOU GOT IT RIGHT!");
        break;
    } else if (guess > secretNumber) {
        alert("Too high. Guess again!");
    } else {
        alert("Too low. Guess again!");
    }
}