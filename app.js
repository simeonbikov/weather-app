window.addEventListener("load", () => {
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature-section");
  let temperatureSpan = document.querySelector(".temperature-span");
  let iconWeather = document.querySelector(".icon");
  //
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=f7e6a773f54270a84bd64f52b1e085f5`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { temp } = data.main;
      const { description, icon } = data.weather[0];
      const celsius = (temp - 272.15).toFixed(1);
      const fahrenheit = Math.round((1.8 * celsius + 32));
      temperatureDegree.textContent = celsius;
      temperatureDescription.textContent = description;
      locationTimezone.textContent = data.name;
      iconWeather.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      iconWeather.alt = description;

      temperatureSection.addEventListener("click", () => {
        if (temperatureSpan.textContent === "C") {
          temperatureSpan.textContent = "F";
          temperatureDegree.textContent = fahrenheit;
        } else {
          temperatureSpan.textContent = "C";
          temperatureDegree.textContent = celsius;
        }
      });
    });
//
});






//1
  //   let lon;
  //   let lat;
  //   if(navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(position => {
  //           lon = position.coords.longitude;
  //           lat = position.coords.latitude;

  // const api = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=f7e6a773f54270a84bd64f52b1e085f5`;
  //   const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f7e6a773f54270a84bd64f52b1e085f5`;

//2
  //   });
  //   }