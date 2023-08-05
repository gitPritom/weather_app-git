const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-key": "b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87",
    "X-RapidAPI-host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
  options
)
  .then((response) => response.json())
  .then((response) => {

    console.log(response);

    // cloud_pct.innerHTML = response.cloud_pct;
    feels_like.innerHTML = response.feels_like;
    feels_like3.innerHTML = response.feels_like;
    feels_like4.innerHTML = response.feels_like;
    feels_like5.innerHTML = response.feels_like;
    feels_like6.innerHTML = response.feels_like;
 

    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    humidity3.innerHTML = response.humidity;
    humidity4.innerHTML = response.humidity;
    humidity5.innerHTML = response.humidity;
    humidity6.innerHTML = response.humidity;
    
    max_temp.innerHTML = response.max_temp;
    max_temp3.innerHTML = response.max_temp;
    max_temp4.innerHTML = response.max_temp;
    max_temp5.innerHTML = response.max_temp;
    max_temp6.innerHTML = response.max_temp;

    min_temp.innerHTML= response.min_temp;
    min_temp3.innerHTML= response.min_temp;
    min_temp4.innerHTML= response.min_temp;
    min_temp5.innerHTML= response.min_temp;
    min_temp6.innerHTML= response.min_temp;

    // sunrise.innerHTML = response.sunrise;
    // sunrise3.innerHTML = response.sunrise;
    // sunset.innerHTML = response.sunset;
    // sunset3.innerHTML = response.sunset;


    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    temp3.innerHTML = response.temp;
    temp4.innerHTML = response.temp;
    temp5.innerHTML = response.temp;
    temp6.innerHTML = response.temp;



    wind_degrees.innerHTML = response.wind_degrees;
    wind_degrees3.innerHTML = response.wind_degrees;
    wind_degrees4.innerHTML = response.wind_degrees;
    wind_degrees5.innerHTML = response.wind_degrees;
    wind_degrees6.innerHTML = response.wind_degrees;

    // wind_degrees4.innerHTML = response.wind_degrees;

    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_speed3.innerHTML = response.wind_speed;
    wind_speed4.innerHTML = response.wind_speed;
    wind_speed5.innerHTML = response.wind_speed;
    wind_speed6.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Kolkata")
