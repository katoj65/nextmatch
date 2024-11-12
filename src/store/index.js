import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      isAuthenticated:true,

    }
  },
  //mutations
  mutations: {
    increment (state) {
      state.count++
    },
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    }
  },
//actions
  actions: {
    login({ commit }) {
      commit('setAuthentication', true);
    },
    logout({ commit }) {
      commit('setAuthentication', false);
    }
  }



});

export default store;