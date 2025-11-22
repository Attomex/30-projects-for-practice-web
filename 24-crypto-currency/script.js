const URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogecoin = document.getElementById("dogecoin");

const getCurrency = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
}

document.addEventListener("DOMContentLoaded", async () => {
    const data = await getCurrency();

    bitcoin.innerHTML = data.bitcoin.usd;
    ethereum.innerHTML = data.ethereum.usd;
    dogecoin.innerHTML = data.dogecoin.usd;
})
