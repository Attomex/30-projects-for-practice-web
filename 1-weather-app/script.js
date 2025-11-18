const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherBlock = document.querySelector(".weather");
const city = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather-icon");
const temp = document.querySelector(".temp");

const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const error = document.querySelector(".error");

const API_KEY = "8b91e67e934bb279949e3e3109914173";

const onError = (text) => {
    error.innerText = text;
    error.style.display = "block";
    weatherBlock.style.display = "none";
};

const fetchData = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )

        const data = await response.json();

        if (data.cod == 404) {
            onError(data.message);
            throw Error("City not found");
        }

        if (data.cod == 401) {
            onError(data.message);
            throw Error("API key not actived");
        }

        return data;
    } catch (error) {
        console.log(error.data);
    }
};

const updateUI = (data) => {
    const weather = data.weather[0].main.toLowerCase();

    city.innerText = data.name;
    weatherIcon.src = `assets/weather/${weather}.png`;
    temp.innerText = `${Math.round(data.main.temp - 273.15)}°C`;

    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${Math.floor(data.wind.speed * 1.6)} km/h`;

    weatherBlock.style.display = "flex";
};

const onClickSearch = (e) => {
    e.preventDefault();

    const city = searchInput.value;

    if (!city) {
        onError("Please enter a city name");
        return;
    }

    const data = fetchData(city);
    data.then((data) => {
        updateUI(data);
        error.style.display = "none";
    });
}

searchBtn.addEventListener("click", onClickSearch);