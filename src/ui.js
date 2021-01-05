export default class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.feelsLike = document.getElementById("w-feels-like");
        this.wind = document.getElementById("w-wind");
    }
    paint(w) {
        this.location.textContent = w.name;
        this.desc.textContent = w.weather[0].main;
        this.string.textContent = `${w.main.temp}℃`;
        this.icon.setAttribute("src", `http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${w.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${w.main.feels_like}℃`;
        this.wind.textContent = `Wind Speed: ${w.wind.speed} km/h`;
    }
}