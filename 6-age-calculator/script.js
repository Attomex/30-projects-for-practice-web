let userInput = document.querySelector("#date");
const calculateBtn = document.querySelector(".btn");
const result = document.querySelector(".result");
const error = document.querySelector(".error");

userInput.max = new Date().toISOString().split("T")[0];

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function calculateAge() {
    let birthDate = new Date(userInput.value);
    
    if (birthDate == "Invalid Date") {
        error.textContent = "Please enter a valid date.";
        error.style.display = "block";
        return;
    }

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;
    
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        de = getDaysInMonth(m1, y1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    error.style.display = "none";

    result.innerHTML = `You are <span class="highlight">${y3} years</span>, <span class="highlight">${m3} months</span> and <span class="highlight">${d3} days</span> old.`;
}

calculateBtn.addEventListener("click", calculateAge);
