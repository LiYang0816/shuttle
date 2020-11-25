import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import button from './modules/button';
Vue.use(Vuex);

let store = new Store({
  modules: {
    button
  },
})

export default store;