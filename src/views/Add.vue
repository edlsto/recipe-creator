<template>
  <div class="about">
    <div>Recipe name: <input v-model="newRecipe.title" type="text" /></div>
    <div>Cook time: <input v-model="newRecipe.cookTime" type="number" /></div>
    <ul>
      <li v-for="(ingredient, index) in newRecipe.ingredients" :key="index">
        {{ ingredient }}
      </li>
    </ul>
    <div>
      Ingredient:
      <input v-model="newIngredient" type="text" v-on:keyup.enter="onSubmit" />
    </div>
    <button v-on:click="onSubmit">Add</button>
    <div>Step: <input v-model="newStep" type="text" /></div>
    <button>Add</button>
    <div>Prep time: <input v-model="newRecipe.prepTime" type="number" /></div>
    <div>Serves: <input v-model="newRecipe.serves" type="number" /></div>

    <div v-if="!newRecipe.image">
      <h4>Select an image</h4>
      <input type="file" @change="onFileChange(newRecipe, $event)" />
    </div>
    <div v-else>
      <img :src="newRecipe.image" class="img-preview" />
      <button @click="removeImage(newRecipe)">Remove image</button>
    </div>
    <button v-on:click="submitList">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newRecipe: {
        title: "",
        ingredients: [],
        steps: ["step 1", "step 2", "step 3"],
        cookTime: null,
        prepTime: null,
        serves: null,
        image: null,
        id: Date.now(),
      },
      newIngredient: "",
      newStep: "",
    };
  },
  methods: {
    onSubmit: function() {
      this.newRecipe.ingredients.push(this.newIngredient);
      this.newIngredient = "";
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
.img-preview {
  width: 10em;
  display: block;
}
</style>
