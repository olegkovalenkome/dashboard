import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Initial State
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  localStorage.setItem("isDarkMode", "true");
}

const userSelectedDarkMode = localStorage.getItem("isDarkMode") === "true";

const state = {
  isDarkMode: userSelectedDarkMode
};

// Getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  }
};

// Mutations
const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      document.body.style.background = "#f0f3f5";
      localStorage.setItem("isDarkMode", "false");
    } else {
      document.body.style.background = "#202B4F";
      localStorage.setItem("isDarkMode", "true");
    }
    state.isDarkMode = !state.isDarkMode;
  }
};

// Actions
const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
