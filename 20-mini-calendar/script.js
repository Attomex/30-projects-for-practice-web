"use strict";

const dayNumber = document.getElementById("dayNumber");
const dayName = document.getElementById("dayName");
const month = document.getElementById("month");
const year = document.getElementById("year");

const listDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

const listMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const nowDate = new Date();

let dN = nowDate.getDate();
let d = listDays[nowDate.getDay()];
let m = listMonth[nowDate.getMonth()];
let y = nowDate.getFullYear();

console.log(d, dN, m, y)

document.addEventListener("DOMContentLoaded", () => {
    dayNumber.textContent = dN;
    dayName.textContent = d;
    month.textContent = m;
    year.textContent = y;
})