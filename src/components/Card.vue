<template>
  <div class="card">
    <router-link :to="{ name: 'recipe', params: { id: id } }">
      {{ title }}
    </router-link>
  </div></template
>

<script>
export default {
  name: "Card",
  props: ["id", "title", "ingredients"],
};
</script>

<style>
.card {
  border: 1px solid black;
  margin: 1em;
  padding: 2em;
  border-radius: 1em;
}
</style>
