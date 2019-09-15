console.log("connected!");

var colors=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)"
];

    var colorpick = colors[4];
    var headcolor = document.querySelector("#header");
    var squares = document.querySelectorAll(".colbox");
    var rgbdisplay = document.getElementById("heading");
    var x = squares.length;
    rgbdisplay.textContent = colorpick.toUpperCase();

    headcolor.style.background = colorpick;


    for(let i = 0; i < x; i++){
        squares[i].style.background = colors[i];

        squares[i].addEventListener("click",function(){
            
            if(this.style.background === colorpick){
                
                alert("correct");
                for(let i = 0; i < x; i++){
                    squares[i].style.background = colorpick;
                }
            }
            else{
                alert("wrong");
                this.style.background = document.body.style.background;
            } 
        });
    }