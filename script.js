const apiKey = "YOUR API KEY"; // Paste OpenWeatherMap API key here

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city name.");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found. Please check the name and try again.");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("temperature").textContent = Math.round(data.main.temp) + "°";
      document.getElementById("feelsLike").textContent = Math.round(data.main.feels_like);
      document.getElementById("weatherMain").textContent = data.weather[0].main;
      document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
      
      document.getElementById("weatherResult").classList.remove("d-none");
    })
    .catch(error => {
      alert(error.message);
      document.getElementById("weatherResult").classList.add("d-none");
    });
}
