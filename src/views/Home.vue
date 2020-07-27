<template>
  <div class="cards-container-wrapper" v-if="recipes.length > 0">
    <Select v-on="$listeners" />
    <CardsContainer :recipes="recipes" />
  </div>
  <div v-else class="no-recipes">No recipes</div>
</template>

<script>
import CardsContainer from "../components/CardsContainer";
import Select from "../components/Select";
export default {
  components: {
    Select,
    CardsContainer,
  },
  name: "Home",
  props: ["recipes"],
};
</script>

<style>
.no-recipes {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  flex: 1 0 auto;
  margin-bottom: 5em;
}
</style>
