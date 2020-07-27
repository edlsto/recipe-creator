<template>
  <div class="home-container">
    <div class="filter-select-container">
      <input
        type="text"
        class="search"
        v-model="search"
        v-on:keyup="setSearch"
        placeholder="Search by recipe title"
      />
      <Select v-on="$listeners" />
    </div>
    <div class="cards-container-wrapper" v-if="recipes.length > 0">
      <CardsContainer :recipes="recipes" />
    </div>
    <div v-else class="no-recipes">No recipes</div>
  </div>
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
  methods: {
    setSearch: function() {
      this.$emit("search-input", this.search);
    },
  },
  data() {
    return {
      search: "",
    };
  },
  destroyed() {
    this.$emit("search-input", "");
  },
};
</script>

<style>
.no-recipes {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  flex: 1 0 auto;
  width: 100%;
}

.filter-select-container {
  display: flex;
  align-items: center;
  align-self: center;
}

.search {
  width: 15em;
  height: 2.5em;
  margin-right: 1em;
  border: none;
  border-radius: 0.7em;
  padding-left: 2.3em;
  outline: none;
  background: 4% / 8% no-repeat url("../assets/search.png");
  background-color: rgb(233, 233, 233);
  font-size: 1em;
}

.home-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 auto;
}

.cards-container-wrapper {
  width: 100%;
}

@media (max-width: 800px) {
  .filter-select-container {
    flex-direction: column;
  }
  .search {
    margin-bottom: 1em;
  }
}
</style>
