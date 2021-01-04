class Weather {
    constructor(zip) {
        this.apiKey = process.env.VUE_APP_WEATHER_API_KEY;
        // this.city = city;
        // this.state = state;
        this.zip = zip;
    }

    // Fetch weather from the API
    async getWeather(loc) {
        loc = this.zip;
        const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?zip=${loc}&units=metric&appid=${this.apiKey}`);
        return await response.json();
    }
}

export default Weather;