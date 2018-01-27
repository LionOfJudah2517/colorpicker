var colors = [

];

var squares = document.querySelectorAll(".squares");
var r;
var g;
var b;
var rgb;
var button = document.querySelectorAll(".button");

 button[0].addEventListener("click", () =>{
  this.style.backgroundColor = "steelblue"
}, false)

//Button functionality
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", () => {
//     buttons[i].style.backgroundColor = "steelblue"
//     }
//   )
// }


//Random colors that are generated to the squares.
   for(let i = 0; i < squares.length; i++){
     var r = Math.floor(Math.random()*256);
     var g = Math.floor(Math.random()*256);
     var b = Math.floor(Math.random()*256);
     var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  let color = squares[i].style.backgroundColor = rgb
  colors.push(color);
    }

var pickColor = colors[2];

var rgbSet = document.getElementById("RGBCO");
rgbSet.innerHTML = pickColor;
