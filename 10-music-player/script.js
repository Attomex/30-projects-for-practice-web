let progressBar = document.querySelector("#progress");
let song = document.querySelector("#song");
let controlIcon = document.querySelector("#controlIcon");
let playPauseBtn = document.querySelector("#playPauseBtn");

song.onloadedmetadata = () => {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
};

function playPause() {
    if (controlIcon.classList.contains("fa-pause")) {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    } else {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    }
}

if (song.play()) {
    setInterval(() => {
        progressBar.value = song.currentTime;
    }, 500);
}

progressBar.onchange = () => {
    song.play();
    song.currentTime = progressBar.value;
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
};

playPauseBtn.addEventListener("click", playPause);
