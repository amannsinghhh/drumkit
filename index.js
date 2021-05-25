var numberOfButton=document.querySelectorAll(".drum").length;
for (var i=0;i<numberOfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var buttonInnerHTML=this.innerHTML;
    makeSounf(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    })
}
document.addEventListener("keydown",function(event) {
    makeSounf(event.key);
    buttonAnimation(event.key);
});

function makeSounf(key) {
    switch (key) {
        case 'w':
            var audio1=new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case 'a':
            var audio1=new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case 's':
            var audio1=new Audio("sounds/tom-3.mp3");
            audio1.play();
            break;
        case 'd':
            var audio1=new Audio("sounds/tom-4.mp3");
            audio1.play();
            break;
        case 'j':
            var audio1=new Audio("sounds/snare.mp3");
            audio1.play();
            break;
        case 'k':
            var audio1=new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case 'l':
            var audio1=new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
    
}

function buttonAnimation(currentKey) {
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    },100)
}











