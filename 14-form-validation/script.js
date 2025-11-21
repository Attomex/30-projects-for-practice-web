let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("msg-error");
let submitError = document.getElementById("submit-error");

let nameField = document.getElementById("name-field");
let phoneField = document.getElementById("phone-filed");
let emailField = document.getElementById("email-field");
let msgField = document.getElementById("msg-filed");

function validateName() {
    let value = nameField.value;

    if (value.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validatePhone() {
    let value = phoneField.value;

    if (value.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if (value.length !== 10) {
        phoneError.innerHTML = "Enter no should be 10 digits";
        return false;
    }
    if (!value.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits allowed";
        return false;
    }
    phoneError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateEmail() {
    let value = emailField.value;

    if (value.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Enter valid email";
        return false;
    }

    emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateMessage() {
    let value = msgField.value;
    let required = 30;
    let left = required - value.length;

    if (left > 0) {
        msgError.innerHTML = left + " more characters required";
        return false;
    }
    msgError.innerHTML = "<i class='fas fa-check-circle'></i>";
    return true;
}

function validateForm(e) {
    e.preventDefault();

    if (
        !validateName() ||
        !validatePhone() ||
        !validateEmail() ||
        !validateMessage()
    ) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000)
        return false;
    }
}

nameField.addEventListener("keyup", validateName);
phoneField.addEventListener("keyup", validatePhone);
emailField.addEventListener("keyup", validateEmail);

