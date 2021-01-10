<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#locModal"
    >
      Change Location
    </button>
    <div
      class="modal fade"
      id="locModal"
      tabindex="-1"
      aria-labelledby="locModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header justify-content-center">
            <h2 class="modal-title text-primary" id="locModalLabel">
              Choose Location
            </h2>
          </div>
          <div class="modal-body">
            <form id="w-form">
              <!-- <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" id="city" class="form-control">
                </div>
                <div class="form-group">
                    <label for="state">State</label>
                    <input type="text" id="state" class="form-control">
                </div> -->
              <div class="form-group">
                <label for="zip">ZIP Code</label>
                <input
                  v-model="zip"
                  placeholder="Enter a US ZIP code"
                  type="text"
                  id="zip"
                  class="form-control"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              id="w-change-btn"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="setLocationData"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style scoped>
</style>