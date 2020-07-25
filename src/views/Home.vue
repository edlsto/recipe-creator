<template>
  <div id="home">
    <main>
      <CardsContainer :recipes="recipes" />
    </main>
  </div>
</template>

<script>
import CardsContainer from "../components/CardsContainer";
export default {
  components: {
    CardsContainer,
  },
  name: "Home",
  props: ["recipes"],
};
</script>

<style></style>
