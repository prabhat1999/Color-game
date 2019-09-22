console.log("connected!");

var num = 6;
var colors = generateRandom(num);

function pickcol(){
    var randcolor = Math.floor(Math.random() * colors.length);
    return colors[randcolor];
};

function generateRandom(numb){
    var arr = [];
    for(let i = 0; i < numb; i++){
       var rancolor = randomColorGenerator();
       arr.push(rancolor);
    }
    return arr;
};

function randomColorGenerator(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rcolor = "rgb("+ r + ", " + g + ", " + b + ")";

    return rcolor;
};
    
    var colorpick = pickcol();
    var headcolor = document.querySelector("#header");
    var squares = document.querySelectorAll(".colbox");
    var rgbdisplay = document.getElementById("heading");
    var messagedisplay = document.querySelector("#message");
    var resetbutt = document.querySelector("#reset");
    var x = squares.length;
    rgbdisplay.textContent = colorpick.toUpperCase();
    var defcolor = "rgb(50, 102, 173)";
    headcolor.style.background = defcolor;
    
    resetbutt.addEventListener("click", function(){
         //generate random colors
         colors = generateRandom(num);
         //pick a color
         colorpick = pickcol();
         //change display rgb for picked color
         rgbdisplay.textContent = colorpick.toUpperCase();
         //change color of squares
         for(let i = 0; i < x; i++){
            squares[i].style.background = colors[i];
         }
         messagedisplay.textContent = "";
         resetbutt.textContent = "New Colors";
         headcolor.style.background = defcolor;
    });

    for(let i = 0; i < x; i++){
        squares[i].style.background = colors[i];

        squares[i].addEventListener("click",function(){
            
            if(this.style.background === colorpick){
                
                alert("correct");
                messagedisplay.textContent = "Correct!";
                resetbutt.textContent = "Play Again";
                headcolor.style.background = this.style.background;
                for(let i = 0; i < x; i++){
                    squares[i].style.background = colorpick;
                }
            }
            else{
                alert("wrong");
                messagedisplay.textContent = "Try Again!";
                this.style.background = document.body.style.background;
            } 
        });
    }