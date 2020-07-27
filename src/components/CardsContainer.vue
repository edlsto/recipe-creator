<template>
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
  font-weight: 700;
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
