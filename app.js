var numberToGuess = Math.floor(Math.random() * 30);
var numberOfTries = 0;

function checkGuess() {
    var guess = document.getElementById("guess").value;
    numberOfTries++;

    if (guess == numberToGuess) {
        document.getElementById("result").innerHTML = "You win!";
    } else if (guess < numberToGuess) {
        document.getElementById("result").innerHTML = "Your guess is too low";
    } else if (guess > numberToGuess) {
        document.getElementById("result").innerHTML = "Your guess is too high";
    }
}