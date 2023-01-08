let city = "Nairobi";

let currentTime = new Date();
let date = currentTime.getDate();
let hour = currentTime.getHours();
let minute = currentTime.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[currentTime.getDay()];
let h2 = document.querySelector("#date");
h2.innerHTML = `${days[0]}, ${date} , ${hour}:${minute} `;

function showTemperature(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let h3 = document.querySelector("h3");
  h3.innerHTML = Math.round(response.data.main.temp);
}

function searchCity(city) {
  let apiKey = "c2a66900f6ab30e16fa38ba225b61502";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
