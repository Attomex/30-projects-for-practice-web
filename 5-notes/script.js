const notesContainer = document.querySelector(".notes-container");
const addNote = document.querySelector(".add-note");
let notes = document.querySelectorAll(".input-box");

const onAddNote = () => {
    let area = document.createElement("p");
    let deleteIcon = document.createElement("img");
    deleteIcon.className = "delete";
    deleteIcon.src = "assets/trash.svg";
    deleteIcon.alt = "";
    area.setAttribute("contenteditable", "true");
    area.className = "input-box";
    notesContainer.appendChild(area).appendChild(deleteIcon);
};

addNote.addEventListener("click", onAddNote);
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
})
