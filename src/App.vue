<template>
  <div id="app">
        <div class="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
        <h1>WeatherJS</h1>
        <h1 id="w-location"></h1>
        <h3 id="w-desc"></h3>
        <h3 id="w-string"></h3>
        <img id="w-icon" alt="Icon representing current weather">
        <ul id="w-details" class="list-group text-secondary mt-3">
            <li id="w-humidity" class="list-group-item"></li>
            <li id="w-feels-like" class="list-group-item"></li>
            <li id="w-wind" class="list-group-item"></li>
        </ul>
        <hr>
        <app-modal />
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal"
import Weather from "@/weather.js"
import UI from "@/ui.js"

export default {
  name: "App",
  data: function() {
    return {
      location,
    }
  },
  components: {
    appModal: Modal
  },
  methods: {
    getWeather: function() {
      const weather = new Weather("98101");
      const ui = new UI;
      weather.getWeather()
      .then(results => {
        ui.paint(results)
        console.log(results);
      })
      .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getWeather()
  },
}
</script>

<style>
</style>
