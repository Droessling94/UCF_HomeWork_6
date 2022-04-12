//****** DAY JS STUFF TO SET 5 DAY FORCAST**********//
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
//**************************************************//


//****GLOBAL VARIABLES********//
const searchHistory = [];
const apiKey = "6b3eb49e525af78cdcfc150e2b6264bb";
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${apiKey}`;
var dynoLocStats;
var dynoChosenCity;
//****************************//



//****GLOBAL FUNCTIONS*******//
function chosenLocationStats(latLon){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latLon.lat}&lon=${latLon.lon}&units=imperial&appid=${apiKey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
    dynoLocStats = { "curTemp": data.current.temp, "curWin": data.current.wind_speed, "curHumidity": data.current.humidity, "curUV": data.current.uvi,"curName": data.name };
    console.log(dynoLocStats);
    $("#currentChosenLocationTemp").text("Current Temp:" + dynoLocStats.curTemp + "F");
    $("#currentChosenLocationWind").text(dynoLocStats.curWin);
    $("#currentChosenLocationHumidity").text(dynoLocStats.curHumidity);
    $("#currentChosenLocationUVindex").text(dynoLocStats.curUV);}
   );
};
function dynoLocation(chosenLocation){
    console.log(chosenLocation);
    var dynoLoc = `http://api.openweathermap.org/geo/1.0/direct?q=${chosenLocation},&limit=5&appid=${apiKey}`;
    fetch(dynoLoc)
    .then(function(response){
        return response.json();
    })
    .then (function(data) {
        console.log(data);
     let latLon= { "lat": data[0].lat, "lon": data[0].lon}
        console.log(latLon)
        chosenLocationStats(latLon);

    })
};
function getUserInput(){
   
    console.log(dynoChosenCity)

}
//****************************//
//************user input search functionality */


// //*********BELOW IS THE EVENT LISTENERS FOR THE PRESET CITYS**************//
$(document).on('click', ".city", function (){
   var listCity = $(this).text();
   console.log(listCity);
   dynoLocation(listCity);
   $("#currentChosenLocation").text(listCity);

});

$(document).on('click', "#searchBtn", function(){
    dynoChosenCity = document.querySelector("#citySearchInputBox").value;
    console.log (dynoChosenCity);
    dynoLocation(dynoChosenCity);
    $("#currentChosenLocation").text(dynoChosenCity);
});
