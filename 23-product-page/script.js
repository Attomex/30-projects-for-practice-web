const productImg = document.getElementById("productImg");
let btns = document.querySelectorAll(".btn");

function removeActive() {
    for(bt of btns) {
        bt.classList.remove("active");
    }
}

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        productImg.src = `assets/image${index + 1}.png`;
        removeActive();
        btn.classList.add("active");
    })
})