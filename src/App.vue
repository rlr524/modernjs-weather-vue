<template>
  <div id="app">
    <div class="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
      <h1>WeatherJS</h1>
      <h1 id="w-location"></h1>
      <h3 id="w-desc"></h3>
      <h3 id="w-string"></h3>
      <img id="w-icon" alt="Icon representing current weather" />
      <ul id="w-details" class="list-group text-secondary mt-3">
        <li id="w-humidity" class="list-group-item"></li>
        <li id="w-feels-like" class="list-group-item"></li>
        <li id="w-wind" class="list-group-item"></li>
      </ul>
      <hr />
      <app-modal @locationChange="onLocationEnter"></app-modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/Modal.vue";
import UI from "../src/ui";
const ui = new UI();
const appId = process.env.VUE_APP_WEATHER_API_KEY;

export default {
  name: "App",
  data() {
    return {
      zip: "98029",
    };
  },
  components: {
    appModal: Modal,
  },
  methods: {
    onLocationEnter() {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?zip=${this.zip}&units=metric&appid=${appId}`
        )
        // .then((data) => console.log(data))
        .then((data) => {
          ui.paint(data);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.onLocationEnter();
  },
};
</script>

<style>
</style>
