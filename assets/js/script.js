
var mmApiKey = "2e2ca0507dda47fa6f94fa93790f0ec0";
var currentWeather;
var userZipcode = document.getElementById("searchBar").value;
var zipcodeUserSearchesFor;


//CODE FOR FIRST GO BUTTON TO MAKE SECTIONS VISIBLE AND CONSOLE LOG THE USER ZIPCODE
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
    const gasStationSection = document.getElementById("gasStationSection")
    if (gasStationSection.style.display ==="block") {
        gasStationSection.style.display = "none";
    } else {
        gasStationSection.style.display = "block";
    }
    const resultsSection = document.getElementById("resultsSection")
    if (resultsSection.style.display ==="block") {
        resultsSection.style.display = "none";
    } else {
        resultsSection.style.display = "block";
    }
    getSearchedZipcodeWeather();
})




//CODE FOR WEATHER ALERT
var getSearchedZipcodeWeather = function() {
    var currentWeather = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${zipcodeUserSearchesFor}&units=imperial&appid=${myApiKey}`)
    console.log(currentWeather);
}

