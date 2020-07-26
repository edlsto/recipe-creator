<template>
  <div class="add">
    <h1 class="recipe-title">Add a new recipe</h1>

    <div class="two-col">
      <div class="add-text">
        <div v-if="!newRecipe.title" class="add-item">
          <label for="title">Recipe name:</label>
          <input
            class="add-item-input"
            v-model="newTitle"
            type="text"
            id="title"
            placeholder="Add name"
          />
          <button v-on:click="onSubmitTitle" class="add-item-button">
            Add
          </button>
        </div>
        <div v-else>
          <h1>
            {{ newRecipe.title }}
          </h1>
        </div>

        <div class="add-item stack">
          <h4 class="section-title">Ingredients</h4>
          <ul class="ingredients-list">
            <p class="no-ingredients" v-if="!newRecipe.ingredients.length">
              No ingredients added
            </p>
            <li
              v-for="(ingredient, index) in newRecipe.ingredients"
              :key="index"
            >
              {{ ingredient }}
            </li>
            <div class="form-row">
              <div class="input-btn-container">
                <input
                  placeholder="Add ingredient"
                  v-model="newIngredient"
                  class="add-item-input"
                  type="text"
                  v-on:keyup.enter="onSubmitIngredient"
                  id="ingredient"
                />
                <button v-on:click="onSubmitIngredient" class="add-item-button">
                  Add
                </button>
              </div>
            </div>
          </ul>
        </div>
        <div class="add-item stack">
          <h4 class="section-title">Steps</h4>
          <ol class="ingredients-list">
            <p class="no-ingredients" v-if="!newRecipe.steps.length">
              No steps added
            </p>
            <li v-for="(step, index) in newRecipe.steps" :key="index">
              {{ step }}
            </li>
            <div class="form-row">
              <div class="input-btn-container">
                <textarea
                  placeholder="Add step"
                  v-model="newStep"
                  type="text"
                  v-on:keyup.enter="onSubmitStep"
                  id="step"
                />
              </div>
            </div>
            <button v-on:click="onSubmitStep" class="add-item-button">
              Add
            </button>
          </ol>
        </div>
        <div class="add-item">
          <label for="prep-time|">Prep time:</label>
          <input
            v-model="newRecipe.prepTime"
            type="number"
            class="add-item-input"
            id="prep-time"
          />
        </div>
        <div class="add-item">
          <label for="cook-time">Cook time:</label>
          <input
            class="add-item-input"
            v-model="newRecipe.cookTime"
            type="number"
            id="cook-time"
          />
        </div>
        <div class="add-item">
          <label for="serves">Serves:</label>
          <input
            v-model="newRecipe.serves"
            type="number"
            class="add-item-input"
            id="serves"
          />
        </div>
      </div>
      <div class="add-image">
        <h4>Select an image</h4>

        <div v-if="!newRecipe.image">
          <img src="../assets/placeholder.png" class="img-preview" />

          <input type="file" @change="onFileChange(newRecipe, $event)" />
        </div>
        <div v-else>
          <img :src="newRecipe.image" class="img-preview" />
          <button @click="removeImage(newRecipe)">Remove image</button>
        </div>
      </div>
    </div>
    <button v-on:click="submitList" class="submit">Submit</button>
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
      newTitle: "",
    };
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
    onSubmitTitle: function() {
      this.newRecipe.title = this.newTitle;
      this.newTitle = "";
    },
    submitList: function() {
      this.$emit("add", this.newRecipe);
      this.$router.push({ name: "Home" });
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
  },
};
</script>

<style>
.recipe-title {
  margin: 1em auto;
}
.submit {
  align-self: center;
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
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
}

.add-item-input {
  height: 1.7em;
  flex: 1 0 auto;
  font-size: 1em;
  outline: none;
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
}

.input-btn-container {
  flex: 1 0 auto;
  display: flex;
  margin-top: 1em;
}

.add-image {
  flex: 0 0 50%;
}

label {
  margin-right: 1em;
}

textarea {
  height: 100px;
  flex: 1 0 auto;
}

.ingredients-list {
  background: rgb(233, 249, 255);
  display: flex;
  padding: 2em;
  list-style-position: inside;
  flex-direction: column;
}

.no-ingredients {
  margin: 0 auto;
}

.section-title {
  margin-bottom: 0.5em;
}
</style>
