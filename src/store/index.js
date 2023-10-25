import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    controlOne: 0,
    controlTwo: 0,
    controlTree: 0,
    controlSum: 0,
  },

  mutations: {
    updateStateControlOne(state, value) {
      state.controlOne = value;
    },
    updateStateControlOther(state, value) {
      state.controlTwo = value;
      state.controlTree = value;
    },
    controlSum(state) {
      state.controlSum = state.controlTwo + state.controlTree;
    },
  },
});
