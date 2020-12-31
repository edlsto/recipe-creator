<template>
  <div id="app">
    <Nav />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      searchInput: "",
      filter: "",
    };
  },
  async created() {
    this.$store.dispatch("getRecipes");
  },

  // computed: {
  //   filteredRecipes() {
  //     let filteredList = this.recipes.filter((recipe) => {
  //       return recipe.title
  //         .toLowerCase()
  //         .includes(this.searchInput.toLowerCase());
  //     });
  //     if (this.filter === "Name-Asc") {
  //       filteredList = filteredList.sort((a, b) =>
  //         a.title.toLowerCase() < b.title.toLowerCase()
  //           ? -1
  //           : a.title.toLowerCase() > b.title.toLowerCase()
  //           ? 1
  //           : 0
  //       );
  //     }
  //     if (this.filter === "Name-Dsc") {
  //       filteredList = filteredList.sort((a, b) => {
  //         return a.title.toLowerCase() > b.title.toLowerCase()
  //           ? -1
  //           : a.title.toLowerCase() < b.title.toLowerCase()
  //           ? 1
  //           : 0;
  //       });
  //     }
  //     if (this.filter === "Time-Asc") {
  //       filteredList = filteredList.sort((a, b) => {
  //         let aTime = parseInt(a.cookTime) + parseInt(a.prepTime);
  //         let bTime = parseInt(b.cookTime) + parseInt(b.prepTime);
  //         return aTime < bTime ? -1 : aTime > bTime ? 1 : 0;
  //       });
  //     }
  //     if (this.filter === "Time-Dsc") {
  //       filteredList = filteredList.sort((a, b) => {
  //         let aTime = parseInt(a.cookTime) + parseInt(a.prepTime);
  //         let bTime = parseInt(b.cookTime) + parseInt(b.prepTime);
  //         return aTime > bTime ? -1 : aTime < bTime ? 1 : 0;
  //       });
  //     }
  //     return filteredList;
  //   },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  margin: 0;
  padding: 0;
  /* color: #555; */
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.4;
  height: 100%;
  width: 100%;
}

main {
  margin: 2rem auto 4rem;
  max-width: 90vw;
  width: 900px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
}

h1 {
  font-family: "Domine", serif;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
