const lists = document.querySelectorAll(".list");

const rightBox = document.querySelector("#right");
const leftBox = document.querySelector("#left");

// Thats so bad
for (const list of lists) {
    list.addEventListener("dragstart", (e) => {
        let selected = e.target;

        rightBox.addEventListener("dragover", (e) => {
            e.preventDefault();
        })

        rightBox.addEventListener("drop", (e) => {
            rightBox.appendChild(selected);
            selected = null;
        })

        leftBox.addEventListener("dragover", (e) => {
            e.preventDefault();
        })

        leftBox.addEventListener("drop", (e) => {
            leftBox.appendChild(selected);
            selected = null;
        })
    })
}