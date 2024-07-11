
var buttonDrumLength = document.querySelectorAll(".drum").length;


//button handling

for (var i = 0; i < buttonDrumLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var key = this.innerHTML;
        soundHandle(key);
        setAnnimation(key);

    })
}

//keys handling

document.addEventListener("keydown", function (event) {
    soundHandle(event.key);
    setAnnimation(event.key);
})


function soundHandle(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("Assets/Sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("Assets/Sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("Assets/Sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("Assets/Sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("Assets/Sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick_bass = new Audio("Assets/Sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "l":
            var snare = new Audio("Assets/Sounds/snare.mp3");
            snare.play();
            break;
        default: console.log(this.innerHTML);
            break;
    }
}

//setting annimation

function setAnnimation(key) {

    var annimationClass = document.querySelector("."+key);
    annimationClass.classList.add("pressed");
    setTimeout(function(){annimationClass.classList.remove("pressed"),100});

}


