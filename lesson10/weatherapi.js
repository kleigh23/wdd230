// HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// URL for fairbanks
const apiURL = "//api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=9afe136e49088b5b87c8d223d0de020c&units=imperial"


fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `//openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();

  });