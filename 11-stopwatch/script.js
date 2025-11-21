const display = document.querySelector("#display");
const start = document.querySelector("#start");
const startIcon = document.querySelector("#start img");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let timer = null;
let [seconds, minutes, hours] = [0, 0, 0];

function startTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = `${h}:${m}:${s}`;
}

function resetDisplay() {
    if (timer !== null) {
        clearInterval(timer);
    }
    [seconds, minutes, hours] = [0, 0, 0];
    display.textContent = "00:00:00";
    start.removeAttribute("disabled");
    start.style.cursor = "pointer";
    startIcon.style.cursor = "pointer";
}

function stopDisplay() {
    clearInterval(timer);
    start.removeAttribute("disabled");
    start.style.cursor = "pointer";
    startIcon.style.cursor = "pointer";
}

function startDisplay() {
    timer = setInterval(startTimer, 1000);
    start.setAttribute("disabled", "true");
    start.style.cursor = "no-drop";
    startIcon.style.cursor = "no-drop";
}

start.addEventListener("click", startDisplay);
stop.addEventListener("click", stopDisplay);
reset.addEventListener("click", resetDisplay);
