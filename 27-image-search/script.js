// For API using unsplash.com
const CLIENT_KEY = "YOUR_API_KEY";

const seacrhForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchBtn = document.getElementById("search-btn");

const showMoreBtn = document.getElementById("show-more-btn");

let page = 1;
let query = "";
let allImages = [];

const searchImages = async (e) => {
    page = 1;
    query = searchBox.value.trim();

    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${CLIENT_KEY}&per_page=12`);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    const result = data.results;

    result.map((res) => {
        const image = document.createElement("img");
        image.src = res.urls.small;
        image.alt = "";
        const imageLink = document.createElement("a");
        imageLink.href = res.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block"
}

seacrhForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})