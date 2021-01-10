import axios from "axios";

const state = {
	appid: process.env.VUE_APP_WEATHER_API_KEY,
	zip: "98029",
};

const getters = {
	currentLocation: (state) => state.zip,
};

const actions = {
	async getWeather({ commit }, zip, appid) {
		const response = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=metric&appid=${appid}`
		);
		commit("setWeather", response.data);
	},
};

const mutations = {
	setWeather: (state, zip) => (state.zip = zip),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
