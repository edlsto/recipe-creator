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
          ingredients: [
            "6 tablespoons chopped onion",
            "4 tablespoons margarine",
            "6 cups peeled and cubed butternut squash",
            "3 cups water",
            "4 cubes chicken bouillon",
            "½ teaspoon dried marjoram",
            "¼ teaspoon ground black pepper",
            "⅛ teaspoon ground cayenne pepper",
            "2 (8 ounce) packages cream cheese",
          ],
          steps: [
            "In a large saucepan, saute onions in margarine until tender. Add squash, water, bouillon, marjoram, black pepper and cayenne pepper. Bring to boil; cook 20 minutes, or until squash is tender.",
            "Puree squash and cream cheese in a blender or food processor in batches until smooth. Return to saucepan, and heat through. Do not allow to boil.",
          ],
          prepTime: 25,
          cookTime: 35,
          serves: 6,
          image: SoupImg,
        },
        {
          id: 3,
          title: "Avocado Toast (Vegan)",
          ingredients: [
            "4 slices whole-grain bread",
            "1 avocado, halved and pitted",
            "2 tablespoons chopped fresh parsley",
            "1 ½ teaspoons extra-virgin olive oil",
            "½ lemon, juiced",
            "½ teaspoon salt",
            "½ teaspoon ground black pepper",
            "½ teaspoon onion powder",
            "½ teaspoon garlic powder",
          ],
          steps: [
            "Toast bread in a toaster or toaster oven.",
            "Scoop avocado into a bowl. Add parsley, olive oil, lemon juice, salt, pepper, onion powder, and garlic powder; mash together using a potato masher. Spread avocado mixture into each piece of toast.",
          ],
          prepTime: 10,
          cookTime: 10,
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
