<template>
  <div class="cards-container-wrapper">
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
    <div class="cards-container">
      <Card
        v-for="recipe in recipes"
        v-bind:key="recipe.id"
        v-bind:title="recipe.title"
        v-bind:ingredients="recipe.ingredients"
        v-bind:id="recipe.id"
        v-bind:serves="recipe.serves"
        v-bind:prepTime="recipe.prepTime"
        v-bind:cookTime="recipe.cookTime"
        v-bind:image="recipe.image"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      selected: "",
    };
  },
  name: "CardsContainer",
  props: ["recipes"],
};
</script>

<style>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  margin-top: 2em;
  width: 95%;
  column-gap: 4em;
  row-gap: 3em;
}

.no-recipes {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10em;
}

.select-filter {
  padding: 0.3em;
  border-radius: 0;
  outline: none;
  font-size: 1em;
  cursor: pointer;
}

.select-container {
  display: flex;
  flex-direction: column;
}

.cards-container-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter-label {
  font-size: 0.9em;
}
@media (max-width: 600px) {
  .cards-container-wrapper {
    align-self: stretch;
  }
}
</style>
