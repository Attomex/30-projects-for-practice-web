const passwordInput = document.querySelector("#password");
const copyIcon = document.querySelector(".copy");
const eyeIcon = document.querySelector(".eye"); 
const generateBtn = document.querySelector(".generate-password");

async function copyElement() {
    if (passwordInput.value) {
        await navigator.clipboard.writeText(passwordInput.value);
    } else {
        alert("No password to copy!");
    }
}

function generatePassword() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = '#$&*-=_.';

    const length = 20;

    const charset = uppercaseChars + lowercaseChars + numberChars + specialChars;

    if (window.crypto && window.crypto.getRandomValues) {
        return Array(length)
            .fill(charset)
            .map((x) => x[Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) * (x.length + 1))])
            .join("");
    } else {
        let res = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            res += charset.charAt(Math.floor(Math.random() * n));
        }
        return res;
    }
}

function generate() {
    const pswd = generatePassword();

    passwordInput.value = pswd;
}
generateBtn.addEventListener("click", generate);
copyIcon.addEventListener("click", copyElement);

eyeIcon.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
})