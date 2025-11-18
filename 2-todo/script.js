const input = document.querySelector(".add-task input");
const buttonSubmit = document.querySelector(".add-task button");

const taskList = document.querySelector("#task-list");

const error = document.querySelector(".error");
const save = document.querySelector(".save-container");
// const state

function addTask (e) {
    e.preventDefault();

    if (input.value === "") {
        error.style.display = "block";
        error.textContent = "Please enter a task";
        input.focus();
        return;
    }

    let li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = input.value;
    li.innerHTML += `<span class="delete">&times</span>`;
    taskList.appendChild(li);

    input.value = "";
    error.style.display = "none";
}

function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadData() {
    const tasks = localStorage.getItem("tasks");

    if (tasks) {
        taskList.innerHTML = tasks;
    }
}

buttonSubmit.addEventListener("click", addTask);
taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})

save.addEventListener("click", saveData);

loadData();
