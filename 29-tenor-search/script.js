import { API_KEY, CLIENT_KEY } from "./consts.mjs";

const results_field = document.querySelector(".results");
const limit = document.querySelector("#limit-select");
const search = document.querySelector("#search-input");
const search_btn = document.querySelector("#search-btn");

function httpGetAsync(theUrl, callback) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp.responseText);
    };

    xmlHttp.open("GET", theUrl, true);

    xmlHttp.send(null);

    return;
}

function gifCard(item) {
    return`<article class="tenor-item">
        <header class="header-item">
            <img class="gif" loading="lazy" src=${item.media_formats.gif.url} alt=${item.content_description} />
            <a class="url-item" target="_blank"  href=${item.url}>ПОСМОТРЕТЬ</a>
        </header>
        <footer class="content">
            <ul class="tags">
                ${item.tags.map((tag, index) => {
                    if (index >= 3) return;

                    return `<li class="tag">${tag}</li>`
                }).join("")}
            </ul>
            <p class="description">
                ${item.content_description}
            </p>
        </footer>
    </article>`;
}

function tenorCallback_search(data) {
    const response_objects = JSON.parse(data);

    const results = response_objects["results"];

    const allCards = results.map((item) => gifCard(item));

    results_field.innerHTML = allCards.join("");

    return;
}

function grabData(e) {
    e.preventDefault();

    const limit_search = limit.value;

    const search_term = search.value;
    // const search_term = 'explain'

    const searchUrl =
        "https://tenor.googleapis.com/v2/search?q=" + search_term + "&key=" + API_KEY + "&client_key=" + CLIENT_KEY + "&limit=" + limit_search;

    httpGetAsync(searchUrl, tenorCallback_search);

    return;
}

search_btn.addEventListener("submit", grabData);

// grabData();

// results.insertAdjacentHTML("beforeend", html);
