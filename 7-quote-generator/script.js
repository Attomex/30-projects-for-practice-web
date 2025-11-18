const URL = "https://api.quotable.io/random";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const newQuoteBtn = document.querySelector(".new-quote");
const copyBtn = document.querySelector(".copy");

let show = false;

const showFields = () => {
    if (show) {
        copyBtn.style.display = "block";
        quote.style.display = "block";
        author.style.display = "block";
    }
};

const getQuote = async () => {
    show = true;
    showFields();
    quote.innerText = "Loading...";
    author.innerText = "Loading...";

    await fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            quote.innerText = data.content;
            author.innerText = data.author;
        });
};

newQuoteBtn.addEventListener("click", getQuote);
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quote.innerText} --- by ${author.innerText}`);
});
