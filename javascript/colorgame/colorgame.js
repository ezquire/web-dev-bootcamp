var numColors = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

init();

function init() {
    initModeButtons();
    initSquares();
    reset();
}

function initModeButtons() {
    for(var i = 0; i < modeButtons.length; ++i) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numColors = 3 : numColors = 6;
            reset();
        });
    }
}

function initSquares() {
    for(var i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#2f2f2f";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateColors(numColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    for(var i = 0; i < squares.length; ++i) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

}

resetButton.addEventListener("click", reset);

function changeColors(color) {
    for(var i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateColors(num) {
    var arr = [];
    for(var i = 0; i < num; ++i) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + b + ", " + g + ")";
}
