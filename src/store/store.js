import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// add comment to store

const store = new Vuex.Store({
  state: {
    recipes: [],
    filter: "",
    search: "",
  },
  mutations: {
    setRecipes(state, initialState) {
      state.recipes = initialState;
    },
    updateFilter(state, filter) {
      state.filter = filter;
    },
    setSearch(state, search) {
      state.search = search;
    },
  },
  actions: {
    async getRecipes({ commit }) {
      const response = await axios(
        "https://recipe-app-edlsto.herokuapp.com/recipes"
      );
      commit("setRecipes", response.data);
    },
    async deleteRecipe(_, payload) {
      await axios.delete(
        `https://recipe-app-edlsto.herokuapp.com/recipes/${payload.id}`
      );
    },
  },
});

export default store;
