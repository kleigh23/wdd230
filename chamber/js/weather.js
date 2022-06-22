// HTML elements to edit
const currentTemp = document.querySelector('#tempeture');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');
const windSpeed = document.querySelector('#speed');

// URL for fairbanks
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604045&appid=9afe136e49088b5b87c8d223d0de020c&units=imperial"


fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `${data.wind.speed.toFixed(0)}`

    const iconsrc = `//openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();

  });