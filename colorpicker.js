
var colors = [
];

var squares = document.querySelectorAll(".squares");
var r;
var g;
var b;
var rgb;
var buttons = document.getElementsByTagName("button");


//Button functionality
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
    buttons[i].style.backgroundColor = "steelblue"
    }
  )
}


//Random colors that are generated to the squares.
   for(let i = 0; i < squares.length; i++){
     var r = Math.floor(Math.random()*256);
     var g = Math.floor(Math.random()*256);
     var b = Math.floor(Math.random()*256);
     var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  let color = squares[i].style.backgroundColor = rgb
  colors.push(color)
    }
