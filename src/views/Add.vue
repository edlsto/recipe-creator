<template>
  <div class="add">
    <h1 class="recipe-add-title" v-if="_id">
      Edit recipe
    </h1>
    <h1 class="recipe-add-title" v-else>Add new recipe</h1>

    <div class="two-col">
      <div class="add-text">
        <div class="add-item">
          <h4 class="section-title">Recipe name</h4>
          <input
            class="add-item-input"
            v-model="newRecipe.title"
            type="text"
            id="title"
            placeholder="Add name"
          />
        </div>

        <div class="add-item">
          <h4 class="section-title">Ingredients</h4>
          <ul class="ingredients-list">
            <p class="no-ingredients" v-if="!newRecipe.ingredients.length">
              No ingredients added
            </p>
            <div
              v-for="(ingredient, index) in newRecipe.ingredients"
              :key="index"
              class="ingredient-container"
            >
              <li
                contenteditable="true"
                v-on:blur="editIngredient(index, $event)"
              >
                {{ ingredient }}
              </li>
              <img
                v-on:click="deleteItem(index)"
                class="delete-btn"
                src="../assets/delete.png"
              />
            </div>
            <div class="input-btn-container">
              <input
                placeholder="Add ingredient"
                v-model="newIngredient"
                class="add-item-input"
                type="text"
                v-on:keyup.enter="onSubmitIngredient"
                id="ingredient"
              />
              <button
                v-on:click="onSubmitIngredient"
                class="add-item-button"
                :disabled="!newIngredient"
              >
                Add
              </button>
            </div>
          </ul>
        </div>
        <div class="add-item ">
          <h4 class="section-title">Steps</h4>
          <ol class="ingredients-list">
            <p class="no-ingredients" v-if="!newRecipe.steps.length">
              No steps added
            </p>
            <div
              v-for="(step, index) in newRecipe.steps"
              :key="index"
              class="steps-container"
            >
              <li contenteditable="true" v-on:blur="editStep(index, $event)">
                {{ step }}
              </li>
              <div class="move-delete-button-row">
                <img
                  v-if="index > 0"
                  v-on:click="moveUp(index, $event)"
                  src="../assets/up.png"
                  class="delete-btn"
                />

                <img
                  v-if="index < newRecipe.steps.length - 1"
                  v-on:click="moveDown(index, $event)"
                  src="../assets/down.png"
                  class="delete-btn up-down-btn"
                />

                <img
                  v-on:click="deleteStep(index)"
                  class="delete-btn up-down-btn"
                  src="../assets/delete.png"
                />
              </div>
            </div>

            <textarea
              placeholder="Add step"
              v-model="newStep"
              type="text"
              v-on:keyup.enter="onSubmitStep"
              id="step"
            />
            <button
              v-on:click="onSubmitStep"
              class="add-item-button add-button-below"
              :disabled="!newStep"
            >
              Add
            </button>
          </ol>
        </div>
      </div>
      <div class="add-image">
        <div class="add-item">
          <h4 class="section-title">Select an image</h4>
          <div v-if="newRecipe.cardImage">
            <img
              :src="
                `https://recipe-app-edlsto.herokuapp.com/recipe/${newRecipe._id}/cardimage`
              "
              class="img-preview"
            />
            <button @click="removeImage(newRecipe)">Remove image</button>
          </div>
          <div v-else-if="newRecipe.image">
            <img :src="newRecipe.image" class="img-preview" />
            <button @click="removeImage(newRecipe)">Remove image</button>
          </div>
          <div v-else class="choose-file">
            <img src="../assets/placeholder.png" class="img-preview" />

            <input
              class="file-input"
              type="file"
              @change="onFileChange(newRecipe, $event)"
            />
          </div>
        </div>
        <h4 class="section-title">Details</h4>
        <div class="times">
          <div class="times-container">
            <div class="times-item">
              <label for="prep-time">Prep time</label>
              <input
                v-model="newRecipe.prepTime"
                type="number"
                class="add-item-input times-input"
                id="prep-time"
                placeholder="0"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = '0'"
              />
              <div class="details-unit">minutes</div>
            </div>
            <div class="times-item">
              <label for="cook-time">Cook time</label>
              <input
                class="add-item-input times-input"
                v-model="newRecipe.cookTime"
                type="number"
                id="cook-time"
                placeholder="0"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = '0'"
              />
              <div class="details-unit">minutes</div>
            </div>
            <div class="times-item">
              <label for="serves">Serves</label>
              <input
                v-model="newRecipe.serves"
                type="number"
                class="add-item-input times-input"
                id="serves"
                placeholder="0"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = '0'"
              />
              <div class="details-unit">people</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="validationFailed" class="validation-failed">
      <ul>
        <li v-if="!newRecipe.title">Add a recipe name</li>
        <li v-if="!newRecipe.ingredients.length">
          Add at least one ingredient
        </li>
        <li v-if="!newRecipe.steps.length">
          Add at least one step
        </li>
        <li v-if="!newRecipe.cookTime">
          Add the cooking time
        </li>
        <li v-if="!newRecipe.prepTime">
          Add the prep time
        </li>
        <li v-if="!newRecipe.serves">
          Add the serving amount
        </li>
      </ul>
    </div>
    <button v-on:click="submitList" class="submit">
      Submit
    </button>
  </div>
</template>

<script>
// import Placeholder from "../assets/placeholder.png";
import axios from "axios";

export default {
  data() {
    return {
      newRecipe: {
        title: "",
        ingredients: [],
        steps: [],
        cookTime: null,
        prepTime: null,
        serves: null,
        image: null,
      },
      newIngredient: "",
      newStep: "",
      validationFailed: false,
    };
  },
  computed: {
    validated: function() {
      return (
        this.newRecipe.title &&
        this.newRecipe.ingredients.length &&
        this.newRecipe.steps.length &&
        this.newRecipe.prepTime &&
        this.newRecipe.cookTime &&
        this.newRecipe.serves
      );
    },
  },
  props: ["_id"],
  created: async function() {
    if (this._id) {
      const response = await axios(
        `https://recipe-app-edlsto.herokuapp.com/recipes/${this._id}`
      );
      this.newRecipe = { ...response.data, image: undefined };
    }
  },

  methods: {
    onSubmitIngredient: function() {
      this.newRecipe.ingredients.push(this.newIngredient);
      this.newIngredient = "";
    },
    onSubmitStep: function() {
      this.newRecipe.steps.push(this.newStep);
      this.newStep = "";
    },
    handleNewList: async function(recipe) {
      const index = this.$store.state.recipes.findIndex(
        (rec) => rec._id === this.newRecipe._id
      );
      if (index > -1) {
        await axios.patch(
          `https://recipe-app-edlsto.herokuapp.com/recipes/${this.newRecipe._id}`,
          {
            title: recipe.title,
            ingredients: recipe.ingredients,
            steps: recipe.steps,
            cookTime: recipe.cookTime,
            prepTime: recipe.prepTime,
            serves: recipe.serves,
            image: recipe.image,
          }
        );
      } else {
        // this.$store.commit("addRecipe", recipe);
        // this.recipes.push(recipe);
        try {
          await axios.post(
            "https://recipe-app-edlsto.herokuapp.com/recipes",
            this.newRecipe
          );
        } catch (error) {
          console.log(error);
        }
      }
    },
    submitList: async function() {
      if (this.validated) {
        await this.handleNewList(this.newRecipe);
        this.$store.dispatch("getRecipes");
        this.$router.push({ name: "Home" });
      } else {
        this.validationFailed = true;
      }
    },
    onFileChange(item, e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.createImage(item, files[0]);
    },
    createImage(item, file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(item) {
      item.cardImage = null;
    },
    editIngredient: function(index, event) {
      this.newRecipe.ingredients[index] = event.target.innerHTML;
    },
    editStep: function(index, event) {
      this.newRecipe.steps[index] = event.target.innerHTML;
    },
    deleteItem: function(index) {
      this.newRecipe.ingredients.splice(index, 1);
    },
    deleteStep: function(index) {
      this.newRecipe.steps.splice(index, 1);
    },
    moveUp: function(index, event) {
      this.newRecipe.steps.splice(index, 1);
      this.newRecipe.steps.splice(
        index - 1,
        0,
        event.target.parentElement.parentElement.firstChild.innerHTML
      );
    },
    moveDown: function(index, event) {
      this.newRecipe.steps.splice(index, 1);
      this.newRecipe.steps.splice(
        index + 1,
        0,
        event.target.parentElement.parentElement.firstChild.innerHTML
      );
    },
  },
};
</script>

<style scoped>
.recipe-add-title {
  margin: 1em auto;
}

.recipe-add-name {
  max-width: 100%;
}

.add .submit {
  align-self: center;
  border-radius: 0;
  outline: none;
  font-size: 1.2em;
  background: rgb(49, 110, 49);
  cursor: pointer;
}

.add {
  display: flex;
  flex-direction: column;
}

.stack {
  flex-direction: column;
}

.two-col {
  display: flex;
  justify-content: space-between;
}

.img-preview {
  display: block;
  width: 100%;
}

.add-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
}

.add-item-input {
  height: 2em;
  flex: 1 0 auto;
  outline: none;
  border-radius: 0;
  border: 1px solid gray;
  padding: 0.5em;
  font-size: 1em;
}

.add-item-title {
  flex-direction: row;
  justify-content: space-between;
}

.form-row {
  display: flex;
  justify-content: space-between;
  flex: 1 0 auto;
  flex-direction: column;
}

.add-item-button {
  align-self: center;
  margin-left: 1em;
}

.add-text {
  width: 20em;
  display: flex;
  flex-direction: column;
  flex: 0 0 47%;
}

.input-btn-container {
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1em;
}

.add-image {
  flex: 0 0 47%;
}

textarea {
  height: 100px;
  flex: 1 0 auto;
  outline: none;
  padding: 0.5em;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}

.ingredients-list {
  display: flex;
  flex-direction: column;
  padding: 2em;
  background: rgb(233, 249, 255);
  list-style-position: inside;
}

.ingredients-list li {
  margin-bottom: 0.3em;
}

.no-ingredients {
  margin: 2em auto;
}

.section-title {
  margin-bottom: 0.5em;
}

.choose-file {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.file-input {
  margin-top: 1em;
}

.add-button-below {
  margin: 1em 0 0 0;
}

.times {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
}

.times-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 30%;
}

.times-input {
  width: 3em;
  flex: 0 0 auto;
  text-align: center;
}
.details-unit {
  font-size: 0.8em;
}

.times-container {
  display: flex;
  justify-content: space-between;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

.validation-failed {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  color: red;
}

.add button {
  border: none;
  padding: 0.5em;
  border-radius: 0.4em;
  background: gray;
  cursor: pointer;
  color: white;
}

.edit-title-btn {
  align-self: center;
}

[contenteditable]:focus {
  background: white;
}

.delete-btn {
  height: 1em;
  display: block;
  cursor: pointer;
}

.ingredient-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
}

.move-delete-button-row {
  display: flex;
  justify-content: flex-end;
  margin: 0.5em 0;
}

.steps-container {
  display: flex;
  justify-content: space-between;
}

.up-down-btn {
  margin-left: 0.3em;
}

@media (max-width: 800px) {
  .two-col {
    flex-direction: column;
  }

  .add-text {
    width: auto;
  }
}
</style>
