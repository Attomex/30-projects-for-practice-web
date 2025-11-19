const toastBox = document.querySelector("#toastBox");
const buttons = document.querySelectorAll(".buttons button");

const icons = {
    success: `<i class="fa-solid fa-circle-check"></i>`,
    error: `<i class="fa-solid fa-circle-xmark"></i>`,
    invalid: `<i class="fa-solid fa-circle-exclamation"></i>`,
}

const maxNotification = 3;
let notificationCount = 0;

function deleteFirst() {
    if (notificationCount > maxNotification) {
        toastBox.firstElementChild.remove();
    }
}

function showToast(msg, status = "invalid", duration = 3000) {
    let toast = document.createElement("div");
    const icon = icons[status];

    toast.classList.add("toast");
    toast.classList.add(status);
    toast.style.setProperty("--toast-duration", `${duration}ms`);

    toast.innerHTML = `${icon} ${msg}`;
    toastBox.appendChild(toast);

    notificationCount++;
    deleteFirst();

    setTimeout(() => {
        toast.remove();
        notificationCount--;
    }, duration)
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const message = button.dataset.msg;
        const duration = Number(button.dataset.time);
        const status = button.dataset.status;
        
        showToast(message, status, duration);
    });
});