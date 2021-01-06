import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

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
      const response = await axios("http://localhost:3001/recipes");
      commit("setRecipes", response.data);
    },
  },
});

export default store;
