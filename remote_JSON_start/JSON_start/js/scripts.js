//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604045&appid=9afe136e49088b5b87c8d223d0de020c&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weather) => {
    //Once it comes back, display it to the console.
    console.log(weather);
    
    document.querySelector('#place').innerHTML=weather.name;
    document.querySelector('#currentTemp').innerHTML=weather.main.temp;
    document.querySelector('#windSpeed').innerHTML=weather.wind.speed;

    const inconcode = weather.weather[0].icon
    console.log(inconcode);
    const icon_path ="//openweathermap.org/img/w/"+inconcode+".png";
    console.log(icon_path)

    document.querySelector('#weather_icon').src = icon_path;

 }); //end of "then" fat arrow function


 //api.openweathermap.org/data/2.5/weather?id=5604045&appid=9afe136e49088b5b87c8d223d0de020c&units=imperial
