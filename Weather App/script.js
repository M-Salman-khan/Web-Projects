
const apiKey = "d2a470a60cf3c4fb76c39311cbdaaf32"
// console.log(apiKey);

// const city = 'Saharanpur';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();

const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
(async () => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Saharanpur&units=metric&appid=${apiKey}`)
    const data = await response.json()
    console.log(data);

    const formatTime = (timestamp) => {
      return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    let { temp, temp_min, temp_max, humidity, feels_like } = data.main;
    let { deg, speed } = data.wind;
    let { sunrise, sunset } = data.sys;

    let tempBody = document.querySelector(".temp-card")
    let humidityBody = document.querySelector(".humidity-card")
    let windBody = document.querySelector(".wind-card")


    tempBody.innerHTML = ` <h5 class="card-title">Temperature</h5>
            <h3>${temp}°C</h3>
            <p>Temperature is ${temp}°C</p>
            <p>Feels like ${feels_like}</p>
            <p>Max. Temperature is ${temp_max}</p>
            <button class="btn btn-primary disabled">More Info (Sorry, We are currently working on this feature)</button>`
    humidityBody.innerHTML = ` <h5 class="card-title">Humidity Info</h5>
            <h3>${humidity}%</h3>
            <p>Humidity is ${humidity}%</p>
            <p>Wind Degrees is ${deg}°</p>
            <p>Feels Like is ${feels_like}°C</p>
            <button class="btn btn-primary disabled">More Info (Sorry, We are currently working on this feature)</button>`

    windBody.innerHTML = `<h5 class="card-title">Wind Info</h5>
            <h3>${speed} km/h</h3>
            <p>Wind Speed is ${speed} km/h</p>
           <p>Sunrise: ${formatTime(sunrise)}</p>
            <p>Sunset: ${formatTime(sunset)}</p>
            <button class="btn btn-primary disabled">More Info (Sorry, We are currently working on this feature)</button>`
  } catch (error) {
    console.error("The error is " + error);

  }
})()

async function RoorkeeData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Roorkee&units=metric&appid=${apiKey}`)
    const data = await response.json()
    // console.log(data);

    const formatTime = (timestamp) => {
      return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    let { temp, temp_min, temp_max, humidity, feels_like } = data.main;
    let { deg, speed } = data.wind;
    let { sunrise, sunset } = data.sys;

    let tr = document.querySelector(".Roorkee")
    tr.innerHTML = `<td><strong>Roorkee</strong></td>
          <td>${data.weather[0]["main"]}</td>
          <td>${feels_like}°C</td>
          <td>${humidity}%</td>
          <td>${temp_max}°C</td>
          <td>${formatTime(sunrise)}</td>
          <td>${formatTime(sunset)}</td>
          <td>${temp}°C</td>
          <td>${deg}°</td>
          <td>${speed} km/h</td>`
  } catch (error) {
    console.error("The error is " + error);

  }
}

async function DehradunData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dehradun&units=metric&appid=${apiKey}`)
    const data = await response.json()

    const formatTime = (timestamp) => {
      return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    let { temp, temp_min, temp_max, humidity, feels_like } = data.main;
    let { deg, speed } = data.wind;
    let { sunrise, sunset } = data.sys;

    let tr = document.querySelector(".Dehradun")
    tr.innerHTML = `<td><strong>Dehradun</strong></td>
          <td>${data.weather[0]["main"]}</td>
          <td>${feels_like}°C</td>
          <td>${humidity}%</td>
          <td>${temp_max}°C</td>
          <td>${formatTime(sunrise)}</td>
          <td>${formatTime(sunset)}</td>
          <td>${temp}°C</td>
          <td>${deg}°</td>
          <td>${speed} km/h</td>`
  } catch (error) {
    console.error("The error is " + error);

  }
}

async function LudhianaData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ludhiana&units=metric&appid=${apiKey}`)
    const data = await response.json()
    // console.log(data);

    const formatTime = (timestamp) => {
      return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    let { temp, temp_min, temp_max, humidity, feels_like } = data.main;
    let { deg, speed } = data.wind;
    let { sunrise, sunset } = data.sys;

    let tr = document.querySelector(".Ludhiana")
    tr.innerHTML = `<td><strong>Ludhiana</strong></td>
          <td>${data.weather[0]["main"]}</td>
          <td>${feels_like}°C</td>
          <td>${humidity}%</td>
          <td>${temp_max}°C</td>
          <td>${formatTime(sunrise)}</td>
          <td>${formatTime(sunset)}</td>
          <td>${temp}°C</td>
          <td>${deg}°</td>
          <td>${speed} km/h</td>`
  } catch (error) {
    console.error("The error is " + error);

  }
}
async function DelhiData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=${apiKey}`)
    const data = await response.json()
    // console.log(data);

    const formatTime = (timestamp) => {
      return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    let { temp, temp_min, temp_max, humidity, feels_like } = data.main;
    let { deg, speed } = data.wind;
    let { sunrise, sunset } = data.sys;

    let tr = document.querySelector(".Delhi")
    tr.innerHTML = `<td><strong>Delhi</strong></td>
          <td>${data.weather[0]["main"]}</td>
          <td>${feels_like}°C</td>
          <td>${humidity}%</td>
          <td>${temp_max}°C</td>
          <td>${formatTime(sunrise)}</td>
          <td>${formatTime(sunset)}</td>
          <td>${temp}°C</td>
          <td>${deg}°</td>
          <td>${speed} km/h</td>`
  } catch (error) {
    console.error("The error is " + error);

  }
}
async function SearchData() {
  try {

    let search = document.querySelector('.search')
    const city = search.value;
    console.log(city);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    const data = await response.json()
    // // console.log(data);

    const formatTime = (timestamp) => {
      return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    let { temp, temp_min, temp_max, humidity, feels_like } = data.main;
    let { deg, speed } = data.wind;
    let { sunrise, sunset } = data.sys;


    let tempBody = document.querySelector(".temp-card")
    let humidityBody = document.querySelector(".humidity-card")
    let windBody = document.querySelector(".wind-card")

    let head = document.querySelector('.head')
    head.innerText=`Weather in ${city}`

    let otherCities = document.querySelector('.other-cities')
    otherCities.style.display = 'none'

    tempBody.innerHTML = ` <h5 class="card-title">Temperature</h5>
            <h3>${temp}°C</h3>
            <p>Temperature is ${temp}°C</p>
            <p>Feels like ${feels_like}</p>
            <p>Max. Temperature is ${temp_max}</p>
            <button class="btn btn-primary">More Info</button>`
    humidityBody.innerHTML = ` <h5 class="card-title">Humidity Info</h5>
            <h3>${humidity}%</h3>
            <p>Humidity is ${humidity}%</p>
            <p>Wind Degrees is ${deg}°</p>
            <p>Feels Like is ${feels_like}°C</p>
            <button class="btn btn-primary">More Info</button>`

    windBody.innerHTML = `<h5 class="card-title">Wind Info</h5>
            <h3>${speed} km/h</h3>
            <p>Wind Speed is ${speed} km/h</p>
           <p>Sunrise: ${formatTime(sunrise)}</p>
            <p>Sunset: ${formatTime(sunset)}</p>
            <button class="btn btn-primary">More Info</button>`
  } catch (error) {
    console.error("The error is " + error);

  }
}

document.querySelector('.search').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      SearchData();
  }
});
RoorkeeData()
DehradunData()
DelhiData()
LudhianaData()