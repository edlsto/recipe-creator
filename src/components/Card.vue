<template>
  <div class="card">
    <router-link :to="{ name: 'recipe', params: { id: id } }">
      <img class="card-img" :src="image" alt="" />

      <h4 class="card-title">
        {{ title }}
      </h4>
      <div class="row-2">
        <div class="serves">Serves: {{ serves }}</div>
        <div class="serves">Time: {{ prepTime + cookTime }} minutes</div>
      </div>
    </router-link>
  </div></template
>

<script>
export default {
  name: "Card",
  props: [
    "id",
    "title",
    "ingredients",
    "image",
    "serves",
    "prepTime",
    "cookTime",
  ],
};
</script>

<style>
.card {
  display: flex;
}
.card-img {
  width: 100%;
  border-radius: 1em;
  height: 70%;
}
.card-title {
  margin-top: 1em;
}
.row-2 {
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 0.8em;
  margin-top: 0.5em;
}
</style>
