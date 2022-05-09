function formatDate(timestamp) {
  let date = new Date(timestamp);

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function displayTemp(response) {
  let cityElement = document.querySelector("#city");
  let tempElement = document.querySelector("#temp");
  let humidityElement = document.querySelector("#humidity");
  let descriptionElement = document.querySelector("#description");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  cityElement.innerHTML = response.data.name;

  tempElement.innerHTML = Math.round(response.data.main.temp);

  descriptionElement.innerHTML = response.data.weather[0].description;

  humidityElement.innerHTML = response.data.main.humidity;

  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "6710d6c63712eab1c794b73fa7dd98bb";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ibadan,Nigeria&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);
