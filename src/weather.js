class Weather {
    constructor(zip) {
        this.apiKey = process.env.WEATHER_API_KEY;
        // this.city = city;
        // this.state = state;
        this.zip = zip;
    }

    // Fetch weather from the API
    async getWeather() {
        const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&units=metric&appid=${this.apiKey}`);
        return await response.json();
    }

    // Change weather location
    changeLocation(zip) {
        this.zip = zip;
    }
}

export default Weather;