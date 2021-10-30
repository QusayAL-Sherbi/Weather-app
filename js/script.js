let dateDay = document.querySelector('.date-day');

let date = document.querySelector('.date');

let geoLocation = document.querySelector('.location');

let temperature = document.querySelector('.weather-temp');

let wind = document.querySelector('.wind .value');

let precipitation = document.querySelector('.precipitation .value');

let humidity = document.querySelector('.humidity .value');

let locationBtn = document.querySelector('.location-button');

let selectBox = document.querySelector('.selectBox');

let weatherDisc = document.querySelector('.weather-desc');

const myDate = new Date();

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

window.onlaod = function() {
  console.log(countryAPI(selectBox.value))
}

function countryAPI(country) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=4d8fb5b93d4af21d66a2948710284366`
    )
    .then(response => response.json())
    .then(data => {
      geoLocation.innerHTML = data.name;
      temperature.innerHTML = data.main.temp;
      wind.innerHTML = `${data.wind.speed} km/h`;
      humidity.innerHTML = `${data.main.humidity}%`;
      weatherDisc.innerHTML = data.weather[0].main;
      dateDay.innerHTML = new Date().toString().slice(4,15);
    });
}

selectBox.addEventListener('change', () => {
  countryAPI(selectBox.value);
})