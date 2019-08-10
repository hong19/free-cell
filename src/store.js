import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initCascades = [];
for (let i = 0; i < 8; i += 1) {
  initCascades.push([]);
}

/**
 * card id:
 *  pip:
 *    0~12: spade
 *    13~25: heart
 *    26~38: diamond
 *    39~51: clover
 *  number:
 *    0: A,
 *    1: 2,
 *    ...
 *    10: J,
 *    11: Q,
 *    12: K
 */


export default new Vuex.Store({
  state: {
    cascades: initCascades,
    cells: [],
    foundations: [],
  },
  mutations: {
    insertCard(state, payload) {
      const { cardId, cascadeId } = payload;
      state.cascades[cascadeId].push(cardId);
    },
    removeCard(state, payload) {
      const { cascadeId } = payload;
      state.cascades[cascadeId].pop();
    },
  },
  actions: {

  },
});
