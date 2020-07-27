<template>
  <div class="add">
    <h1 class="recipe-add-title" v-if="$route.params">Edit recipe</h1>
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
            <li
              v-for="(ingredient, index) in newRecipe.ingredients"
              :key="index"
              contenteditable="true"
              v-on:blur="editIngredient(index, $event)"
            >
              {{ ingredient }}
            </li>
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
            <li v-for="(step, index) in newRecipe.steps" :key="index">
              {{ step }}
            </li>
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

          <div v-if="!newRecipe.image" class="choose-file">
            <img src="../assets/placeholder.png" class="img-preview" />

            <input
              class="file-input"
              type="file"
              @change="onFileChange(newRecipe, $event)"
            />
          </div>
          <div v-else>
            <img :src="newRecipe.image" class="img-preview" />
            <button @click="removeImage(newRecipe)">Remove image</button>
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
        id: Date.now(),
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
  created: function() {
    if (this.$route.params.recipe) {
      console.log(this.$route.params.recipe);
      this.newRecipe = this.$route.params.recipe;
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

    submitList: function() {
      if (this.validated) {
        this.$emit("add", this.newRecipe);
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
      item.image = false;
    },
    editIngredient: function(index, event) {
      this.newRecipe.ingredients[index] = event.target.innerHTML;
    },
  },
};
</script>

<style>
.recipe-add-title {
  margin: 1em auto;
}
.recipe-add-name {
  max-width: 100%;
}
.add .submit {
  align-self: center;
  font-size: 1.2em;
  background: rgb(49, 110, 49);
  outline: none;
  cursor: pointer;
  border-radius: 0;
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
  width: 100%;
  display: block;
}
.add-item {
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
}

.add-item-input {
  height: 2em;
  flex: 1 0 auto;
  font-size: 1em;
  outline: none;
  border-radius: 0;
  border: 1px solid gray;
  padding: 0.5em;
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
  margin-left: 1em;
  align-self: center;
}

.add-text {
  display: flex;
  flex-direction: column;
  width: 20em;
  flex: 0 0 47%;
}

.input-btn-container {
  flex: 1 0 auto;
  display: flex;
  margin-top: 1em;
  align-items: center;
  /* margin-bottom: 2em; */
  flex-wrap: wrap;
}

.add-image {
  flex: 0 0 47%;
}

label {
  /* margin-right: 1em; */
}

textarea {
  height: 100px;
  flex: 1 0 auto;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  outline: none;
  padding: 0.5em;
}

.ingredients-list {
  background: rgb(233, 249, 255);
  display: flex;
  padding: 2em;
  list-style-position: inside;
  flex-direction: column;
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
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

.validation-failed {
  color: red;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}

.add button {
  border: none;
  color: white;
  padding: 0.5em;
  border-radius: 0.4em;
  background: gray;
  cursor: pointer;
}

.edit-title-btn {
  align-self: center;
}

.ingredients-list li {
  margin-bottom: 1em;
}

[contenteditable]:focus {
  background: white;
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
