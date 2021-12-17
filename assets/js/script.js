var mmApiKey = "2e2ca0507dda47fa6f94fa93790f0ec0";
var cityWeather;
var cityUserSearchesFor;

//CODE FOR FIRST GO BUTTON TO MAKE SECTIONS VISIBLE AND CONSOLE LOG THE USER CITY
document.querySelector("#btnSearch1").addEventListener('click', function () {
  var userCity = document.getElementById("searchBar1").value;
  console.log(userCity);
  cityUserSearchesFor = userCity;
  console.log(cityUserSearchesFor);
  document.querySelector("#gasStationHeader").textContent = ("Gas Stations Around " + cityUserSearchesFor + ":");

  //SHOW/HIDE INITIAL SEARCH BAR
  const initialSearchBar = document.getElementById("initialSearchBar");
  if (initialSearchBar.style.display !== "none") {
    initialSearchBar.style.display = "none";
  } else {
    initialSearchBar.style.display = "block";
  }

  //MAKE THE OTHER SECTIONS VISIBLE
  const gasStationSection = document.getElementById("gasStationSection");
  if (gasStationSection.style.display === "block") {
    gasStationSection.style.display = "none";
  } else {
    gasStationSection.style.display = "block";
  }
  const resultsSection = document.getElementById("resultsSection");
  if (resultsSection.style.display === "block") {
    resultsSection.style.display = "none";
  } else {
    resultsSection.style.display = "block";
  }
  getSearchedcityWeather();
});


//CODE FOR THE 2ND GO BUTTON
document.querySelector("#btnSearch2").addEventListener('click', function() {
  var userCity = document.getElementById("searchBar2").value;
  console.log(userCity);
  cityUserSearchesFor = userCity;
  console.log(cityUserSearchesFor);
  document.querySelector("#gasStationHeader").textContent = ("Gas Stations Around " + cityUserSearchesFor + ":");
  getSearchedcityWeather();
})



//CODE FOR WEATHER ALERT
var getSearchedcityWeather = function() {
  var cityWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityUserSearchesFor},us&appid=${mmApiKey}`)
  .then(function(cityUserSearchesFor) {
      if (cityUserSearchesFor.status !==200) {
          console.log("there was a problem, status code: " + cityUserSearchesFor.status);
          return;
      }
      cityUserSearchesFor.json().then(function(data) {
          console.log(data)
          document.querySelector("#alertField").textContent = ("ALERT! The current weather is " +data.weather[0].main+ ". Drive safe!")
      });
  })
  .catch(function(err) {
      console.log("Fetch error :-S", err);
  })
  console.log(cityWeather);
}

// Fetches gas station prices for individual cities
fetch("https://gas-price.p.rapidapi.com/stateUsaPrice?state=NC", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": "gas-price.p.rapidapi.com",
    "x-rapidapi-key": "23e2f94d97msh2efbb7b46dfab64p16d9eejsnc8ff968635f1",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

var gasResultsDiv = document.getElementById("gasStationResults");
var resultsContent = document.createTextNode("res.json");

gasResultsDiv.appendChild(resultsContent);