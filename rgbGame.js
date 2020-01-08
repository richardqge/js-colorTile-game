var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //mode button listeners
  setupModeButtons();
  setupSquares();

  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      //   if (this.textContent == "Easy") {
      //     numSquares = 3;
      //   } else {
      //     numSquares = 6;
      //   }
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      // var color = this.backgroundColor; missing style -> check node collection
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "steelBlue";
        messageDisplay.textContent = "Try Again.";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";

  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function() {

//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;

//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       //colors only have 3 items
//       squares[i].style.background = colors[i];
//     }
//     else{
//       squares[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener("click", function() {
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");

//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;

//   for (var i = 0; i < squares.length; i++) {

//       //colors only have 3 items
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//     }

// });

resetButton.addEventListener("click", function() {
  // //generate all new colors
  // colors = generateRandomColors(numSquares);

  // //pick a new random color from array
  // pickedColor = pickColor();
  // //change colorDisplay to match picked color
  // colorDisplay.textContent = pickedColor;
  // this.textContent = "New Colors!";

  // messageDisplay.textContent = "";
  // //change colors of squares
  // for (var i = 0; i < squares.length; i++) {
  //   squares[i].style.backgroundColor = colors[i];
  // }
  // h1.style.backgroundColor = "steelBlue";
  reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color) {
  //loop through all squares
  //change each color ot match given color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = pickedColor;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  //add num random colors to arr
  //return array
  var arr = [];
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);

  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
