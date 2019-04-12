import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      language: "en"
    },
    mutations: {
      setLanguage(state, newLanguage) {
        state.language = newLanguage;
      }
    },
    getters: {
      language(state) {
        return state.language;
      }
    }
  });
};

export default createStore;