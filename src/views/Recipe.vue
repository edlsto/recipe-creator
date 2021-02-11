<template>
  <div class="about">
    <div class="recipe-main" v-if="selectedRecipe">
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
        <img src="../assets/groceries.png" alt="" class="icon" />
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
          v-if="selectedRecipe.pageImage"
          class="recipe-img"
          :src="
            `https://recipe-app-edlsto.herokuapp.com/recipe/${_id}/pageimage`
          "
          alt=""
        />
        <img v-else class="recipe-img" src="../assets/placeholder.png" />
        <img src="../assets/steps.png" alt="" class="icon" />

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
    <div class="edit-delete">
      <button class="delete edit" v-on:click="editRecipe">Edit</button>
      <button class="delete" v-on:click="deleteRecipe">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["_id"],
  data() {
    return {
      recipes: [],
      selectedRecipe: null,
    };
  },
  async created() {
    const response = await axios(
      `https://recipe-app-edlsto.herokuapp.com/recipes/${this._id}`
    );
    this.selectedRecipe = response.data;
  },
  methods: {
    deleteRecipe: async function() {
      await this.$store.dispatch("deleteRecipe", { id: this._id });
      await this.$store.dispatch("getRecipes");
      this.$router.push({ name: "Home" });
    },
    editRecipe: function() {
      this.$router.push({
        name: "Edit",
      });
    },
  },
};
</script>

<style scoped>
.about {
  margin-bottom: 2rem;
}

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
  text-align: center;
}

.details .recipe-subtitle {
  font-weight: 400;
  text-align: left;
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
  background: white;
  color: rgb(187, 44, 44);
  border: 1px solid rgb(187, 44, 44);
  outline: none;
  cursor: pointer;
  border-radius: 0;
  padding: 0.5em;
}

.delete:hover {
  background: rgb(187, 44, 44);
  color: white;
  border: 1px solid white;
}

.edit {
  background: white;
  margin-right: 1em;
  color: rgb(178, 202, 39);
  border: 1px solid rgb(178, 202, 39);
}

.edit:hover {
  background: rgb(178, 202, 39);
  color: white;
  border: 1px solid white;
}

.edit-delete {
  display: flex;
  justify-content: center;
}

.icon {
  height: 2em;
  display: block;
  margin: 2em auto 0;
}

@media (max-width: 800px) {
  .recipe-main {
    flex-direction: column;
  }
}
</style>
