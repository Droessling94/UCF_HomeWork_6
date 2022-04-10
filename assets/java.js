//TODO: SETUP WEBSITE LAYOUT TO MATCH//
//TODO: SET UP 5 DAY FORCAST//


//****GLOBAL VARIABLES********//
const searchHistory = [];
//const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey = "6b3eb49e525af78cdcfc150e2b6264bb";

//****************************//

const weatherApiUrl =`https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`;
//****** DAY JS STUFF TO SET 5 DAY FORCAST**********//
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
//**************************************************//
//fetch request to check if api is working//
 function weatherData(weatherApi) {
    fetch(weatherApi)
    .then(function(response){
       return response.json()
    })
    .then(function(data) {
        console.log(data);
    });
 };
weatherData(weatherApiUrl);
// explantion of above, calling a function named weather data, with the parameteres of 
// weatherapi. the function fetches the weatherapi (what we are putting into the function)
// and then returns the api's respons as a json text string. we then story that data as a variable "data"

