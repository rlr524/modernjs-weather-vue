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
        <app-modal :zip-value="92071" />
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "App",
  components: {
    appModal: Modal
  },

}
</script>

<style>
</style>
