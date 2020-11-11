const searchForm = document.querySelector('.search-loaction');
const cityValue = document.querySelector('.search-loaction input');
const cityName = document.querySelector('.city-name h1');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');


const spitOutCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
}
//Atributes: ${spitOutCelcius(city.main.temp_max)}&deg;C, ${spitOutCelcius(city.main.temp_min)}, ${city.weather[0].description}
const isDayTime = (icon) => {
    if (icon.includes('d')) { return true }
    else { return false }
}
updateWeatherApp = (city) => {
    console.log(city);
    const imageName = city.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent = city.name;
    cardBody.innerHTML = `
            
            
            <div class="content">
              <h1>Max ${spitOutCelcius(city.main.temp_max)}&deg;C</h1>
              <p> Min ${spitOutCelcius(city.main.temp_min)}</p>
              <p class="condition"> Comments: ${city.weather[0].description}</p>
              <p class="high">Highest ${spitOutCelcius(city.main.temp_max)}&deg;C</p>
              <p class="low">Lowest ${spitOutCelcius(city.main.temp_min)}&deg;C</p>
              <p> Feels Like ${spitOutCelcius(city.main.feels_like)}&deg;C</p>
              <p> Humidity: ${city.main.humidity}%</p>
            </div>
            
          

           
            


    `;
    if (isDayTime(imageName)) {
        console.log('day');
        timeImage.setAttribute('src', 'styles/images/FlakyOptimisticHarrier-small.gif');
        if (cityName.classList.contains('text-white')) {
            cityName.classList.remove('text-white');
        } else {
            cityName.classList.add('text-black');
        }

    } else {
        console.log('night');
        timeImage.setAttribute('src', 'styles/images/tenor.gif');
        if (cityName.classList.contains('text-black')) {
            cityName.classList.remove('text-black');
        } else {
            cityName.classList.add('text-white');
        }

    }


}



//add an event listner to the form
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched);
    searchForm.reset();

    requestCity(citySearched)
        .then((data) => {
            updateWeatherApp(data);
        })
        .catch((error) => { console.log(error) })



})

window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
    
  }





















