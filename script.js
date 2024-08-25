//date
import { format, addDays } from 'https://cdn.jsdelivr.net/npm/date-fns@2.28.0/esm/index.js';

const today = new Date();
const formattedDate = format(today, 'MMMM dd yyyy');

//app
let cityInput = document.querySelector('.cityInput');
let cityDisplay = document.querySelector('.cityDisplay');
let date = document.querySelector('.date');
let image = document.querySelector('.imgContainer');
let temp = document.querySelector('.temp');
let tempDes = document.querySelector('.tempDes');

let getBtn = document.querySelector('.getWeather')



const weatherApp = async() => {
    try{
        let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&appid=ce0f49fe8b262e2c2668df61be4a6a96`, {
            headers: {
                Accept: "application/json"
            }
        });
        let weatherData = await response.json();
        console.log(weatherData);
        
        cityDisplay.innerHTML = weatherData.city.name

        date.innerHTML = formattedDate;
  
        temp.innerHTML =`${Math.round(weatherData.list[0].main.temp)/10}°C `;

        tempDes.innerHTML = weatherData.list[0].weather[0].description;

        image.innerHTML = `<img src = 'http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png'>`
    }catch(error){
        console.log(error);
    }
} 

getBtn.addEventListener('click',()=>{
    weatherApp();
    cityInput.value='';
})