<template>
  <div id="app">
    <Nav />
    <main>
      <router-view :recipes="recipes" v-on:add="handleNewList" />
    </main>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import TacosImg from "./assets/tacos.jpg";
import SoupImg from "./assets/butternut-squash-soup.jpg";
import ToastImg from "./assets/avocado-toast.jpg";
export default {
  components: {
    Nav,
  },
  methods: {
    handleNewList: function(recipe) {
      this.recipes.push(recipe);
    },
  },
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: "Tacos",
          ingredients: [
            "4 taco shell",
            "1 chicken breast",
            "1 cup salsa",
            "1 head lettuce",
          ],
          steps: [
            "Grill the chicken",
            "Heat up the shell",
            "Assemble the taco",
          ],
          prepTime: 15,
          cookTime: 15,
          serves: 4,
          image: TacosImg,
        },
        {
          id: 2,
          title: "Butternut Squash Soup",
          ingredients: ["4 squash", "1 cup milk", "Salt and pepper", "spices"],
          steps: [
            "Grill the chicken",
            "Heat up the shell",
            "Assemble the taco",
          ],
          prepTime: 15,
          cookTime: 15,
          serves: 4,
          image: SoupImg,
        },
        {
          id: 3,
          title: "Avocado Toast",
          ingredients: ["4 avocado", "1 toast", "1 tablespoon olive oil"],
          steps: [
            "Grill the chicken",
            "Heat up the shell",
            "Assemble the taco",
          ],
          prepTime: 15,
          cookTime: 15,
          serves: 4,
          image: ToastImg,
        },
      ],
    };
  },
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
}

main {
  margin: 2rem auto 4rem;
  max-width: 90vw;
  width: 900px;
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
</style>
