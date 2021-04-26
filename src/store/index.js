import Vue from "vue";
import Vuex from "vuex";
import onresize from './modules/onresize'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    onresize
  },
});
