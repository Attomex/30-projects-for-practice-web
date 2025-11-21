"use strict";

let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.querySelector("#originalImg");
let line = document.querySelector("#line");

originalImg.style.width = imgBox.offsetWidth + "px";
line.style

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = (e) => {
    let boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}