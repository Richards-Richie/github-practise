var a=document.querySelectorAll(".drum").length;
for(var i=0;i<a;i++){
    document.querySelectorAll("button")[i].addEventListener("click",clickfun);
}
function clickfun(){
    var a=this.innerHTML;
    keyclick(a);
    buttonanimate(a);
}
document.querySelector(".set").addEventListener("keydown",function(){
    keyclick(event.key);
    buttonanimate(event.key);
});
function keyclick(key){
    switch(key){
        case "w":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
        case "s":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
        case "d":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
        case "j":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
        case "k":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
        case "l":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
        default:
            break;
        }
}
function buttonanimate(ckey){
    var ani=document.querySelector("."+ckey)
    ani.classList.add("pressed");
    setTimeout(function(){
        ani.classList.remove("pressed")
    },100);

}

//var 