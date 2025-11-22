const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

let currTime;

let curr = [];

console.log(curr);

setInterval(() => {
    currTime = new Date()
    curr = [currTime.getHours(), currTime.getMinutes(), currTime.getSeconds()]

    hrs.innerHTML = curr[0];
    min.innerHTML = curr[1];
    sec.innerHTML = curr[2];
}, 1000)