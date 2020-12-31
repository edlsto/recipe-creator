import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recipes: [],
  },
  mutations: {
    setRecipes(state, initialState) {
      state.recipes = initialState;
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