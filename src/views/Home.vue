<template>
  <div class="cards-container-wrapper" v-if="recipes.length > 0">
    <div class="select-container">
      <label for="filter-select" class="filter-label">Filter</label>
      <select
        name="filter"
        id="filter-select"
        v-model="selected"
        v-on:change="$emit('filter', selected)"
        class="select-filter"
      >
        <option value="">--Sort recipes--</option>
        <option value="Name-Asc">By name (A to Z)</option>
        <option value="Name-Dsc">By name (Z to A)</option>
        <option value="Time-Asc">By cooking time (shortest to longest)</option>
        <option value="Time-Dsc">By cooking time (longest to shortest)</option>
      </select>
    </div>
    <CardsContainer :recipes="recipes" />
  </div>
  <div v-else class="no-recipes">No recipes</div>
</template>

<script>
import CardsContainer from "../components/CardsContainer";
export default {
  components: {
    CardsContainer,
  },
  name: "Home",
  props: ["recipes"],
  data() {
    return {
      selected: "",
    };
  },
};
</script>
