<template>
  <div id="home">
    <CardsContainer :recipes="recipes" v-on="$listeners" />
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
