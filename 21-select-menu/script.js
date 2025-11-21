"use strict";

let selectField = document.querySelector("#selectField");
let selectText = document.querySelector("#selectText");
let options = document.querySelectorAll(".options");

let list = document.querySelector("#list");

options.forEach((option) => {
    option.onclick = () => {
        selectText.innerHTML = option.querySelector("p").textContent;
        list.classList.remove("show");
    }
})

selectField.addEventListener("click", () => {
    list.classList.toggle("show");
})