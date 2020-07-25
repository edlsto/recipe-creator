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

      <router-link to="/add" class="nav-link">Add</router-link>

      <input type="text" class="search" />
    </div>
  </div>
</template>

<script>
export default { name: "Nav" };
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
  font-size: 1.3em;
  outline: none;
}
</style>
