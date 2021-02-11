<template>
  <div class="card">
    <router-link :to="{ name: 'recipe', params: { _id } }">
      <img
        v-if="cardImage"
        class="card-img"
        :src="`https://recipe-app-edlsto.herokuapp.com/recipe/${_id}/cardimage`"
        alt=""
      />
      <img v-else class="card-img" src="../assets/placeholder.png" alt="" />

      <h4 class="card-title">
        {{ title }}
      </h4>
      <div class="row-2">
        <div class="serves">Serves: {{ serves }}</div>
        <div class="serves">
          Time: {{ parseInt(prepTime) + parseInt(cookTime) }} minutes
        </div>
      </div>
    </router-link>
  </div></template
>

<script>
export default {
  name: "Card",
  props: [
    "_id",
    "title",
    "ingredients",
    "cardImage",
    "serves",
    "prepTime",
    "cookTime",
  ],
};
</script>

<style scoped>
.card {
  display: flex;
  height: 12em;
}
.card:hover {
  transform: scale(1.01);
}
.card-img {
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 1em;
}

.card-title {
  margin-top: 0.5em;
}

.row-2 {
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 0.8em;
  margin-top: 0.5em;
}
</style>
