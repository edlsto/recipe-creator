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
          title: "Chicken Tacos",
          ingredients: [
            "1 pound skinless, boneless chicken breast halves, cut into bite size pieces",
            "1 cup lemonade",
            "2 tablespoons olive oil",
            "1 tablespoon lime juice",
            "1 ½ teaspoons Worcestershire sauce",
            "½ teaspoon garlic powder",
            "½ teaspoon onion powder",
            "1 bay leaf",
            "1 (12 ounce) package corn tortillas",
            "1 head lettuce, shredded",
            "2 large tomatoes, chopped",
            "1 (8 ounce) package shredded sharp Cheddar cheese",
            "1 (8 ounce) jar salsa",
            "1 (8 ounce) container sour cream",
          ],
          steps: [
            "In a large skillet over medium heat, combine chicken, lemonade, olive oil, lime juice, and Worcestershire sauce. Season with garlic powder, onion powder, and bay leaf. Simmer until chicken is no longer pink, and juices run clear, 15 to 20 minutes.",
            "Meanwhile, warm the tortillas in the oven or microwave until soft. When chicken is fully cooked, transfer to serving bowl. Place lettuce, tomatoes, cheese, salsa, and sour cream in serving dishes. Each person can create their own wrap, using their preferred ingredients.",
          ],
          prepTime: 20,
          cookTime: 20,
          serves: 8,
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
