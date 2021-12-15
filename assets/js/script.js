var mmApiKey = "2e2ca0507dda47fa6f94fa93790f0ec0";
var zipcodeWeather;
var zipcodeUserSearchesFor;

//CODE FOR FIRST GO BUTTON TO MAKE SECTIONS VISIBLE AND CONSOLE LOG THE USER ZIPCODE
document.querySelector("#btnSearch").addEventListener("click", function () {
  var userZipcode = document.getElementById("searchBar").value;
  console.log(userZipcode);
  zipcodeUserSearchesFor = userZipcode;
  console.log(zipcodeUserSearchesFor);

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
  getSearchedZipcodeWeather();
});

//CODE FOR WEATHER ALERT
var getSearchedZipcodeWeather = function () {
  var zipcodeWeather = fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipcodeUserSearchesFor},us&appid=${mmApiKey}`
  )
    .then(function (zipcodeUserSearchesFor) {
      if (zipcodeUserSearchesFor.status !== 200) {
        console.log(
          "there was a problem, status code: " + zipcodeUserSearchesFor.status
        );
      }
      zipcodeUserSearchesFor.json().then(function (data) {
        console.log(data);
      });
    })
    .catch(function (err) {
      console.log("Fetch error :-S", err);
    });
  console.log(zipcodeWeather);
};

//Allows Gas stations to be called from the fuel prices api when a zipcode is searched
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
