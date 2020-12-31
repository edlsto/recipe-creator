import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recipes: [],
  },
  mutations: {
    addRecipe(state, recipe) {
      state.recipes.push(recipe);
    },
    setRecipes(state, initialState) {
      state.recipes = initialState;
    },
  },
  actions: {
    init({ commit }, data) {
      commit("setRecipes", data);
    },
  },
});

export default store;
