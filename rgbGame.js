var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",function(){
  //generate all new colors
  colors = generateRandomColors(6);

  //pick a new random color from array
  pickedColor = pickColor(); 
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    // var color = this.backgroundColor; missing style -> check node collection
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
    else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again.";
    }
  })
}


function changeColors(color){
  //loop through all squares
  //change each color ot match given color
  for(var i =0;i<squares.length;i++){
    squares[i].style.backgroundColor = pickedColor;
  }
 
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  //add num random colors to arr
  //return array
  var arr = [];
  for (var i =0;i<num;i++){
    //get random color and push into arr
    arr.push(randomColor());

  }
  
  return arr;

}

function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random()*256);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random()*256);

  //pick a "blue" from 0-255
  var b = Math.floor(Math.random()*256);

  return `rgb(${r}, ${g}, ${b})`;


}
