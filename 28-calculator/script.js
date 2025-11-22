const display = document.querySelector("input[name=display]");
const buttons = document.querySelectorAll(".btn");
const error = document.querySelector(".error");

const OPERATIONS = ["+", "-", "*", "/"];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("click");
        setTimeout(() => {
            button.classList.remove("click");
        }, 200);

        if (button.value === "C") {
            display.value = display.value.slice(0, -1);
            return;
        }

        if (button.value === "AC") {
            display.value = "";
            return;
        }

        if (button.value === "=") {
            try {
                const res = display.value ? eval(display.value) : "";

                if (res === Infinity) {
                    error.innerHTML = "Error: division by zero";
                    display.value = "";
                    return;
                }

                display.value = res;
            } catch (e) {
                error.innerHTML = "Error";
            }
            return;
        }

        if (
            (button.value === "0" && display.value === "")
            ||
            (button.value === "." && display.value === "")
        ) {
            display.value = "";
            return;
        }

        if (OPERATIONS.includes(button.value) && display.value === "") {
            return;
        }

        display.value += button.value;
        error.innerHTML = "";
    });
});
