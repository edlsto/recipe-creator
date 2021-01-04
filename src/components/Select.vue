<template>
  <div class="select-container">
    <select
      name="filter"
      id="filter-select"
      :value="selected"
      v-on:change="updateFilter"
      class="select-filter"
    >
      <option value="">--Sort recipes--</option>
      <option value="Name-Asc">By name (A to Z)</option>
      <option value="Name-Dsc">By name (Z to A)</option>
      <option value="Time-Asc">By cooking time (shortest to longest)</option>
      <option value="Time-Dsc">By cooking time (longest to shortest)</option>
    </select>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Select",
  computed: {
    ...mapState({
      selected: (state) => state.selected,
    }),
  },
  methods: {
    updateFilter(e) {
      this.$store.commit("updateFilter", e.target.value);
    },
  },
};
</script>
