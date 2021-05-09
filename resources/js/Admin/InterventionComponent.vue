<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8"></base-header>

    <div class="container-fluid mt--7">
      <div class="row mt-5">
        <div class="col">
          <interventions-table type="light" title="Interventions"></interventions-table>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col">
          <interventions-table title="Interventions"></interventions-table>
        </div>
      </div>-->
      <!-- <div class="row mt-5">
        <div class="col">
          <interventions-table type="dark" title="Dark Table"></interventions-table>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
import InterventionsTable from "./InterventionsTable";
export default {
  components: {
    InterventionsTable,
  },
};
</script>
<style></style>
