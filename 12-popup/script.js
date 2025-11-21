const popup = document.querySelector("#popup");
const close = document.querySelector("#close");
const open = document.querySelector("#open");

function closePopup() {
    popup.classList.remove("open-popup");
}

function openPopup() {
    popup.classList.add("open-popup");
}

open.addEventListener("click", openPopup);
close.addEventListener("click", closePopup);
