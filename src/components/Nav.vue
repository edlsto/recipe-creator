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
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
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
  height: 100%;
  display: flex;
  align-items: center;
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
    border-bottom: 0;
    margin-bottom: 0;
  }

  .nav-link:hover {
    border-bottom: 0;
    margin-bottom: 0;
  }
}
</style>
