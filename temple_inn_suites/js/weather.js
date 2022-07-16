// HTML elements to edit
const currentTemp = document.querySelector('#tempeture');
const currentTemp1 = document.querySelector('#tempeture1');
const currentTemp2 = document.querySelector('#tempeture2');
const currentTemp3 = document.querySelector('#tempeture3');
const weatherIcon = document.querySelector('#weather-icon');
const weatherIcon1 = document.querySelector('#weather-icon1');
const weatherIcon2 = document.querySelector('#weather-icon2');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc = document.querySelector('#desc');
const humidity = document.querySelector('#humidity');

// URL for fairbanks
const apiURL = "//api.openweathermap.org/data/2.5/onecall?lat=42.880363&lon=-112.452911&exclude=minutely,hourly&appid=9afe136e49088b5b87c8d223d0de020c&units=imperial"


fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    currentTemp.innerHTML = `<strong>${data.current.temp.toFixed(0)}</strong>`;
    currentTemp1.innerHTML = `<strong>${data.daily[1].temp.max.toFixed(0)}</strong>`;
    currentTemp2.innerHTML = `<strong>${data.daily[2].temp.max.toFixed(0)}</strong>`;
    currentTemp3.innerHTML = `<strong>${data.daily[3].temp.max.toFixed(0)}</strong>`;
    humidity.innerHTML = `${data.current.humidity.toFixed(0)}`

    const iconsrc = `//openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
    const iconsrc1 = `//openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`;
    const iconsrc2 = `//openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png`;
    const iconsrc3 = `//openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png`;
    const desc = data.current.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    weatherIcon1.setAttribute('src', iconsrc1);weatherIcon1.setAttribute('alt', desc);
    weatherIcon2.setAttribute('src', iconsrc2);weatherIcon2.setAttribute('alt', desc);
    weatherIcon3.setAttribute('src', iconsrc3);weatherIcon3.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();

  });