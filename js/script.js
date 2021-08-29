


const getWeather = () => {
    const inputCity = document.getElementById("input-city");
    const inputCityName = inputCity.value;
    inputCity.value = "";
    // console.log(inputCityName);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCityName}&APPID=5c8294d9de1412190c99b1eb76137e9c&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data=>showWeather(data))
}

const showWeather = (data) => {
    console.log(data);
    const parentDiv = document.getElementById("weather-result");
    parentDiv.innerText = "";
    const div = document.createElement("div");

    div.innerHTML = `<h3>Location: ${data.name} </h3>
                    <p>Long: ${data.coord.lon}, Lat: ${data.coord.lat}</P>
                    <h4>Current Temp: ${data.main.temp}, Max Temp: ${data.main.temp_max}</h4> 
                    <p>Description: ${data.weather[0].description}</p> 
                    <img src="${image = showImageDes(data.weather[0].description)}">
                    `;
    
    
    parentDiv.appendChild(div);

}

const showImageDes = (desc) => {
     if(desc == "overcast clouds"){
         const image1 = `images/partly_cloudy.png`  
         return image1;
    }
     else if (desc == "haze") {
        const image1 = `images/haze.png`  
        return image1;
    }
     else if (desc == "moderate rain") {
        const image1 = `images/rain_s_cloudy.png`  
        return image1;
    }
     else if (desc == "broken clouds") {
        const image1 = `images/partly_cloudy.png`  
        return image1;
    }
     else if (desc == "few clouds") {
        const image1 = `images/partly_cloudy.png`  
        return image1;
    }
     else if (desc == "scattered clouds") {
        const image1 = `images/partly_cloudy.png`  
        return image1;
    }
     else if (desc == "clear sky") {
        const image1 = `images/sunny.png`  
        return image1;
    }
     else if (desc == "light rain") {
        const image1 = `images/rain.png`  
        return image1;
    }
     else {
        const image1 = `images/thunderstorms.png`  
        return image1;
    }
}

