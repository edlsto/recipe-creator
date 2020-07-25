<template>
  <div class="about">
    <h1>{{ selectedRecipe.title }}</h1>
    <h2>Ingredients</h2>
    <ul>
      <li
        v-for="ingredient in selectedRecipe.ingredients"
        :key="ingredient.key"
      >
        {{ ingredient }}
      </li>
    </ul>
    <ol>
      <li v-for="ingredient in selectedRecipe.steps" :key="ingredient.key">
        {{ ingredient }}
      </li>
    </ol>
    <p>Prep time: {{ selectedRecipe.prepTime }}</p>
    <p>Cook time: {{ selectedRecipe.cookTime }}</p>
    <p>Serves: {{ selectedRecipe.serves }}</p>
    <img class="recipe-img" :src="selectedRecipe.image" alt="" />
  </div>
</template>

<script>
export default {
  props: ["recipes", "id"],
  computed: {
    selectedRecipe: function() {
      console.log(this.id);
      return this.recipes.find((recipe) => recipe.id === parseInt(this.id));
    },
  },
};
</script>

<style>
.recipe-img {
  width: 100%;
}
</style>
