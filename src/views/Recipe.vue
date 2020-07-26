<template>
  <div class="about">
    <div class="recipe-main">
      <div class="text">
        <h1 class="recipe-title">{{ selectedRecipe.title }}</h1>
        <div class="details">
          <h4 class="recipe-subtitle">
            Prep time: {{ selectedRecipe.prepTime }} minutes
          </h4>
          <h4 class="recipe-subtitle">
            Cook time: {{ selectedRecipe.cookTime }} minutes
          </h4>
          <h4 class="recipe-subtitle">Serves: {{ selectedRecipe.serves }}</h4>
        </div>
        <h4 class="recipe-subtitle">Ingredients</h4>
        <ul class="recipe-list">
          <li
            v-for="(ingredient, index) in selectedRecipe.ingredients"
            :key="index"
            class="recipe-item"
          >
            {{ ingredient }}
          </li>
        </ul>
      </div>
      <div class="image">
        <img
          v-if="selectedRecipe.image"
          class="recipe-img"
          :src="selectedRecipe.image"
          alt=""
        />
        <img v-else class="recipe-img" src="../assets/placeholder.png" />
        <h4 class="recipe-subtitle">Steps</h4>
        <ol class="recipe-list">
          <li
            v-for="(step, index) in selectedRecipe.steps"
            :key="index"
            class="recipe-item"
          >
            {{ step }}
          </li>
        </ol>
      </div>
    </div>
    <button class="delete" v-on:click="deleteCard">Delete</button>
  </div>
</template>

<script>
export default {
  props: ["recipes", "id"],
  computed: {
    selectedRecipe: function() {
      return this.recipes.find((recipe) => recipe.id === parseInt(this.id));
    },
  },
  methods: {
    deleteCard: function() {
      this.$emit("delete-card", this.selectedRecipe.id);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
.recipe-img {
  width: 100%;
}
.recipe-main {
  display: flex;
  justify-content: space-between;
}

.text {
  flex: 0 0 40%;
}
.image {
  flex: 0 0 55%;
}
.recipe-title {
  margin-bottom: 0.5em;
}

.recipe-subtitle {
  margin: 1em 0;
}

.details .recipe-subtitle {
  font-weight: 400;
}

.details .recipe-subtitle:last-of-type {
  margin-bottom: 0;
}

.details .recipe-subtitle:first-of-type {
  margin-top: 0;
}

.recipe-list {
  margin-bottom: 1em;
}

.details {
  margin: 1em 0;
  background: rgb(233, 249, 255);
  padding: 1em;
}

.recipe-item {
  margin-bottom: 0.7em;
}

.about {
  display: flex;
  flex-direction: column;
}

.delete {
  align-self: center;
  font-size: 1.2em;
  background: rgb(187, 44, 44);
  outline: none;
  cursor: pointer;
  border-radius: 0;
  border: none;
  color: white;
  padding: 0.5em;
}
</style>
