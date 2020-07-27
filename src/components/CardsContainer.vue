<template>
  <div v-if="recipes.length > 0" class="cards-container">
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
  <div v-else class="no-recipes">
    <h2>
      You have no recipes
    </h2>
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
  margin-top: 4em;
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
</style>
