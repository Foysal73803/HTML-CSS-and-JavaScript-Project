var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;

upArrow.onclick = function(){
    if(x > "-700"){
        x = x - 250;
        slide.style.top = x + "px";
    }
}

downArrow.onclick = function(){
    if(x < +0){
        x = x + 250;
        slide.style.top = x + "px";
    }
}