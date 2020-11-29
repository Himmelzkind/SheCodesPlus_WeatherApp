//feature #1
//Display the current date and time
function formatDate(date) {
  let weekDays = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = weekDays[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }
  let time = `${hour}:${minutes}`;
  console.log("day: " + day);
  console.log("hour:" + hour);
  console.log("minutes: " + minutes);
  console.log("time: " + time);
  
  let formattedDate = `${day} ${time}`;
  return formattedDate;

}

let currentTime = new Date();
let spanDate = document.querySelector("span");
let formattedDate = formatDate(currentTime);
console.log(formattedDate);
console.log(spanDate);
spanDate.innerHTML = `${formattedDate}`;

//Feature #3
//Display temperature
function showWeathercondition(response) {
  console.log("showweathercondition response: ",response);
  let h1 = document.querySelector("h1").innerHTML = response.data.name;
  let temperatureMax = Math.round(response.data.main.temp_max);
  let temperatureMin = Math.round(response.data.main.temp_min);

  let h2 = document.querySelector("h2");
  h2.innerHTML = `<strong>${temperatureMax}°C</strong>|${temperatureMin}°C`;

  let h3 = document.querySelector("h3").innerHTML = response.data.weather[0].description;
}

//Feature #2
//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
function search(city){
  let apiKey = "361119f7d767ce895ccf917d2e91cc83";
  let weatherUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(weatherUrl).then(showWeathercondition);
}

function handleSubmit(event) {
  debugger;
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  search(city);
}


let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

search("Sydney");

// 
//Display temperature for current location
function getCurrentLocation(position) {
  console.log("position is: ", position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "361119f7d767ce895ccf917d2e91cc83";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(weatherUrl).then(showWeathercondition);
}

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", navigator.geolocation.getCurrentPosition(getCurrentLocation));

//Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.




