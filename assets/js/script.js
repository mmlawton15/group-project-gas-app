
var mmApiKey = "2e2ca0507dda47fa6f94fa93790f0ec0";
var currentWeather;
var userZipcode = document.querySelector("#searchBar");
var zipcodeUserSearchesFor;


//CODE FOR BUTTON TO LOG VALUE
document.querySelector("#btnSearch").addEventListener('click', function() {
    console.log(userZipcode.value);
    zipcodeUserSearchesFor = userZipcode.value;
    getSearchedZipcodeWeather();
})

//CODE FOR WEATHER ALERT
var getSearchedZipcodeWeather = function() {
    var currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${myApiKey}`)
    console.log(currentWeather);
}

