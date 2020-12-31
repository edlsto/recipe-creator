<template>
  <div class="cards-container">
    <Card v-for="recipe in recipes" v-bind:key="recipe._id" v-bind="recipe" />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  components: {
    Card,
  },
  name: "CardsContainer",
  props: ["recipes"],
};
</script>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  width: 95%;
  column-gap: 4em;
  row-gap: 3em;
  margin-top: 2em;
}

.select-filter {
  border-radius: 0;
  padding: 0.3em;
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
