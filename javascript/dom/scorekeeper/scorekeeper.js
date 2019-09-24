var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1display = document.getElementById("p1score");
var p2display = document.getElementById("p2score");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("#winningScore");

var winningScore = 5;
var gameOver = false;
var player1 = { score: 0, display: p1display };
var player2 = { score: 0, display: p2display };

function addToScore(player) {
    if(!gameOver) {
        ++player.score;
        if(player.score === winningScore) {
            gameOver = true;
            player.display.classList.add("winner");
        }  
    }
    player.display.textContent = player.score; 
}

function reset() {
    player1.score = 0;
    player2.score = 0;
    gameOver = false;
    player1.display.textContent = 0;
    player2.display.textContent = 0;
    player1.display.classList.remove("winner");
    player2.display.classList.remove("winner");
}

p1button.addEventListener("click", function(){
    addToScore(player1);
});

// if(!gameOver) {
//     ++p1score;
//     if(p1score === winningScore) {
//         gameOver = true;
//         p1display.classList.add("winner");
//     }  
// }
//p1display.textContent = p1score;

p2button.addEventListener("click", function(){
    addToScore(player2);
});

resetButton.addEventListener("click", reset);

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});