<template>
  <div class="nav">
    <router-link to="/">
      <div class="logo-text-container">
        <img class="logo" src="../assets/logo.png" />
        <h1 class="title">
          MealDeck
        </h1>
      </div>
    </router-link>
    <div class="nav-links">
      <router-link to="/" class="nav-link">All recipes</router-link>

      <router-link to="/add" class="nav-link">Add new recipe</router-link>

      <input
        type="text"
        class="search"
        v-model="search"
        v-on:keyup="setSearch"
        placeholder="Search by recipe title"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    setSearch: function() {
      console.log("fired");
      this.$emit("search-input", this.search);
    },
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2em 5em;
}
.logo-text-container {
  display: flex;
  align-items: center;
  height: 100%;
}
.logo {
  height: 3em;
}
.title {
  padding-left: 0.3em;
}

a {
  text-decoration: none;
  color: black;
}

.nav-link {
  margin: 0 1em;
}

.nav-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.search {
  height: 50%;
  width: 15em;
  margin-left: 1em;
  border: none;
  height: 2.5em;
  border-radius: 0.7em;
  background: 4% / 8% no-repeat url("../assets/search.png");
  background-color: rgb(233, 233, 233);
  padding-left: 2.3em;
  font-size: 1em;
  outline: none;
}
.nav-link.router-link-exact-active {
  border-bottom: 3px solid rgb(123, 216, 146);
  margin-bottom: -3px;
}

.nav-link:hover {
  border-bottom: 6px solid rgb(123, 216, 146);
  margin-bottom: -6px;
}

@media (max-width: 1000px) {
  .nav {
    justify-content: center;
  }

  .logo-text-container {
    margin-bottom: 1em;
  }
}

@media (max-width: 800px) {
  .nav-links {
    flex-direction: column;
  }
  .nav-link {
    padding: 0.5em;
  }

  .search {
    margin: 0.5em;
  }

  .nav {
    padding: 2em 5em 0;
  }

  .main {
    margin: 0 auto 4em;
  }
  .nav-link.router-link-exact-active {
    border-bottom: none;
    margin-bottom: none;
  }

  .nav-link:hover {
    border-bottom: none;
    margin-bottom: none;
  }
}
</style>
