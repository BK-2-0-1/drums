// С помощью цикла добавляем ко всем элементам с классом drum eventlistener, который следит за кликом мышки. Если клик происходит - начинает выполняться функция testClick.

for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", testClick);
}

// Функция testClick которая срабатывает в случае нажатия мышкой по элементу drum.
function testClick() {
    var buttonInnerHTML = this.innerHTML; // создаем переменную и получаем значение HTML элементов с классом drum (т.е - w, a, s, d, j, k, l) 
    keyboardClick(buttonInnerHTML); // функция testClick вызовет функцию keyboardClick со значением this.innerHTML
    buttonAnimation(buttonInnerHTML);
    

    // создаем switch, который сработает при нажатии одного из элементов. в зависимости от значения воспроизводится разный звуковой файл. т.е. w - tom1, a - tom2, и так далее
    
}
// this.style.color = "white";
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

// Detecting keybord press
document.addEventListener("keydown", function (e) { // значение e может быть каким угодно. классические названия - event, e, evt. суть в том чтобы получить значение и использовать его.
    keyboardClick(e.key); // если написать console.log(e) - он будет показывать атрибуты нажатой кнопки. если console.log(e.key) - будет конкретное значение кнопки (w, j, b, a, и так далее).
    buttonAnimation(e.key);
});

function keyboardClick(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}

