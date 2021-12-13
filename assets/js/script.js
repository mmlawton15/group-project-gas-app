
var mmApiKey = "2e2ca0507dda47fa6f94fa93790f0ec0";
var currentWeather;
var userZipcode = document.getElementById("searchBar").value;
var zipcodeUserSearchesFor;


//CODE FOR BUTTON TO LOG VALUE
document.querySelector("#btnSearch").addEventListener('click', function() {
    console.log(userZipcode);
    zipcodeUserSearchesFor = userZipcode;
    
    //SHOW/HIDE INITIAL SEARCH BAR
    const initialSearchBar = document.getElementById("initialSearchBar")
    if (initialSearchBar.style.display !=="none") {
        initialSearchBar.style.display = "none";
    } else {
        initialSearchBar.style.display = "block";
    }

    //MAKE THE OTHER SECTIONS VISIBLE
    const gasStationSection = document.getElementById("gasStationResultHeader")
    if (gasStationSection.style.display ==='none') {
        gasStationSection.style.display = 'block';
    } else {
        gasStationSection.style.display == 'none';
    }
    getSearchedZipcodeWeather();
})




//CODE FOR WEATHER ALERT
var getSearchedZipcodeWeather = function() {
    var currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zipcodeUserSearchesFor}&units=imperial&appid=${mmApiKey}`)
    console.log(currentWeather);
}

