const apiKey = "8813d72c5c5f0697297beeef20a69199";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function getWeatherData(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    // document.querySelector(".city").innerText = data.name;
    // document.querySelector(".temp").innerText = Math.round(data.main.temp);
    // document.querySelector(".humidity").innerText = data.main.humidity;
    // document.querySelector(".wind").innerText = data.wind.speed;
}

// searchBtn.addEventListener("click", ()=>{
//     const city = searchBox.value;
//     getWeatherData(city);
//     searchBox.value = "";
// })
getWeatherData();