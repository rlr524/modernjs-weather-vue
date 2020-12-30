<template>
    <div>
    <div class="modal fade" id="locModal" tabindex="-1" aria-labelledby="locModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="locModalLabel">Choose Location</h5>
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
                    <input type="text" id="zip" class="form-control">
                </div>
            </form>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button id="w-change-btn" type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped>

</style>