<template>
  <div id="app">
        <div class="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
        <h1>Modern JS WeatherJS App</h1>
        <h1 id="w-location"></h1>
        <h3 id="w-desc" class="text-dark"></h3>
        <h3 id="w-string"></h3>
        <img id="w-icon" alt="Icon representing current weather">
        <ul id="w-details" class="list-group mt-3">
            <li id="w-humidity" class="list-group-item"></li>
            <li id="w-dewpoint" class="list-group-item"></li>
            <li id="w-feels-like" class="list-group-item"></li>
            <li id="w-wind" class="list-group-item"></li>
        </ul>
        <hr>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#locModal">
            Change Location
          </button>
        <app-modal />
    </div>
  </div>
</template>

<script>
// https://medium.com/dzangolab/vue-js-environment-variables-799fc080d736
import Modal from "@/components/Modal"
import Weather from "@/weather.js"

export default {
  name: 'App',
  components: {
    appModal: Modal
  },
  methods: {
    getWeather: function() {
      const weather = new Weather("98029");
      weather.getWeather()
      .then(results => {
        console.log(results);
      })
      .catch(err => console.log(err));
    }
  },
  mounted() {
    // this.getWeather()
    console.log(process.env.VUE_APP_WEATHER_API_KEY);
  },
}
</script>

<style>
</style>
