import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    controllOne: 0,
    controllTwo: 0,
    controllTree: 0,
    controllSum: 0,
  },

  mutations: {
    updateStateControllOne(state, value) {
      state.controllOne = value;
      console.log(this.state.controllOne);
    },
    updateStateControllOther(state, value) {
      state.controllTwo = value;
      state.controllTree = value;
    },
    controllSum(state) {
      state.controllSum = state.controllTwo + state.controllTree;
    },
  },
});
