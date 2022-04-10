//TODO: SETUP WEBSITE LAYOUT TO MATCH//
//TODO: SET UP 5 DAY FORCAST//


//****GLOBAL VARIABLES********//
const searchHistory = [];
const apiKey = "6b3eb49e525af78cdcfc150e2b6264bb";
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${apiKey}`;
let dynoLocStats = {curTemp:"" , curWin:"",curHumidity:"", curUV:""};
function chosenLocationStats(lat , lon){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
    dynoLocStats = { curTemp: data.current.temp, curWin: data.current.wind_speed, curHumidity: data.current.humidity, curUV: data.current.uvi};
    console.log(dynoLocStats);});
};
// function chosenLocationStats(lat , lon){
//     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//     dynoLocStats = { curTemp: data.current.temp, curWin: data.current.wind_speed, curHumidity: data.current.humidity, curUV: data.current.uvi};
//     console.log(dynoLocStats);
// });

//****************************//

// const weatherApiUrl =`https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`;
//****** DAY JS STUFF TO SET 5 DAY FORCAST**********//
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
//**************************************************//
//fetch request to check if api is working//
//  function weatherData(weatherApi) {
//     fetch(weatherApi)
//     .then(function(response){
//        return response.json()
//     })
//     .then(function(data) {
//         console.log(data);
//     });
//  };
// weatherData(weatherApiUrl);
// explantion of above, calling a function named weather data, with the parameteres of 
// weatherapi. the function fetches the weatherapi (what we are putting into the function)
// and then returns the api's respons as a json text string. we then story that data as a variable "data"


//*********BELOW IS THE EVENT LISTENERS FOR THE PRESET CITYS**************//
document.getElementById("chicagoBtn").addEventListener('click',chosenLocationStats(41.875,-87.624)
.then(function(){

    document.getElementById("currentChosenLocation").innerText = "Chicago";
    document.ready.getElementById("currentChosenLocationTemp").innerText = dynoLocStats.curTemp;
    document.getElementById("currentChosenLocationWind").innerText = dynoLocStats.curWin;
    document.getElementById("currentChosenLocationHumidity").innerText = dynoLocStats.curHumidity;
    document.getElementById("currentChosenLocationUVindex").innerText = dynoLocStats.curUV;
}));
document.getElementById("newYorkBtn").addEventListener('click', function(){
    chosenLocationStats(40.7127281,-74.0060152);
    document.getElementById("currentChosenLocation").innerText = "NewYork"
    document.getElementById("currentChosenLocationTemp").innerText = dynoLocStats.curTemp;
    document.getElementById("currentChosenLocationWind").innerText = dynoLocStats.curWin;
    document.getElementById("currentChosenLocationHumidity").innerText = dynoLocStats.curHumidity;
    document.getElementById("currentChosenLocationUVindex").innerText = dynoLocStats.curUV;
});
document.getElementById("orlandoBtn").addEventListener('click', function(){
    chosenLocationStats(28.5421109,-81.3790304);
    document.getElementById("currentChosenLocation").innerText = "Orlando"
    document.getElementById("currentChosenLocationTemp").innerText = dynoLocStats.curTemp;
    document.getElementById("currentChosenLocationWind").innerText = dynoLocStats.curWin;
    document.getElementById("currentChosenLocationHumidity").innerText = dynoLocStats.curHumidity;
    document.getElementById("currentChosenLocationUVindex").innerText = dynoLocStats.curUV;
});
document.getElementById("sanFranBtn").addEventListener('click', function(){
    chosenLocationStats(37.7790262,-122.419906);
    document.getElementById("currentChosenLocation").innerText = "SanFrancisco"
    document.getElementById("currentChosenLocationTemp").innerText = dynoLocStats.curTemp;
    document.getElementById("currentChosenLocationWind").innerText = dynoLocStats.curWin;
    document.getElementById("currentChosenLocationHumidity").innerText = dynoLocStats.curHumidity;
    document.getElementById("currentChosenLocationUVindex").innerText = dynoLocStats.curUV;
});
document.getElementById("seattleBtn").addEventListener('click', function(){
    chosenLocationStats(47.6038321,-122.3300624);
    document.getElementById("currentChosenLocation").innerText = "Seattle"
    document.getElementById("currentChosenLocationTemp").innerText = dynoLocStats.curTemp;
    document.getElementById("currentChosenLocationWind").innerText = dynoLocStats.curWin;
    document.getElementById("currentChosenLocationHumidity").innerText = dynoLocStats.curHumidity;
    document.getElementById("currentChosenLocationUVindex").innerText = dynoLocStats.curUV;
});
document.getElementById("denverBtn").addEventListener('click', function(){
    chosenLocationStats(39.7392364,-104.9848623);
    document.getElementById("currentChosenLocation").innerText = "Denver"
    document.getElementById("currentChosenLocationTemp").innerText = dynoLocStats.curTemp;
    document.getElementById("currentChosenLocationWind").innerText = dynoLocStats.curWin;
    document.getElementById("currentChosenLocationHumidity").innerText = dynoLocStats.curHumidity;
    document.getElementById("currentChosenLocationUVindex").innerText = dynoLocStats.curUV;
});
document.getElementById("atlantaBtn").addEventListener('click', function(){
    chosenLocationStats(33.7489924,-84.3902644);
    document.getElementById("currentChosenLocation").innerText = "Atlanta"
    document.getElementById("currentChosenLocationTemp").innerText = dynoLocStats.curTemp;
    document.getElementById("currentChosenLocationWind").innerText = dynoLocStats.curWin;
    document.getElementById("currentChosenLocationHumidity").innerText = dynoLocStats.curHumidity;
    document.getElementById("currentChosenLocationUVindex").innerText = dynoLocStats.curUV;
});
document.getElementById("stGeorgeBtn").addEventListener('click', function(){
    chosenLocationStats(12.0535331,-61.751805);
    document.getElementById("currentChosenLocation").innerText = "Saint George"
    document.getElementById("currentChosenLocationTemp").innerText = dynoLocStats.curTemp;
    document.getElementById("currentChosenLocationWind").innerText = dynoLocStats.curWin;
    document.getElementById("currentChosenLocationHumidity").innerText = dynoLocStats.curHumidity;
    document.getElementById("currentChosenLocationUVindex").innerText = dynoLocStats.curUV;
});
//*********ABOVE IS THE EVENT LISTENERS FOR THE PRESET CITYS**************//

//BELOW IS MY FUNCTION THAT TAKES YOUR INPUT FOR THE CITY NAME AND SLAPS IT INTO THE URL FETCH
function dynoLocation(chosenLocation){
    var dynoLoc = `http://api.openweathermap.org/geo/1.0/direct?q=${chosenLocation},&limit=5&appid=${apiKey}`;
    fetch(dynoLoc)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);
    })
};


console.log(dynoLocStats);
