// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const input = document.getElementById("input");
const button = document.querySelector("button");
const error = document.querySelector(".error");


const getQRCode = async () => {
    const img = document.createElement("img");
    img.loading = "lazy";
    img.className = "qr-code";
    img.alt = "QR Code";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    input.insertAdjacentElement("afterend", img);
}

button.addEventListener("click", async () => {
    if (input.value) {
        const img = document.querySelector(".qr-code");
        if(img !== null) {
            img.remove();
        }
        await getQRCode().then(() => {
            input.value = "";
            input.focus();
        });
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "Please enter text or URL";
    }
})

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
})