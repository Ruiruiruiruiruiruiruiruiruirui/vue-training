/**
 * Created by Rui on 15/12/17.
 */
import Vuex from 'vuex'
import Vue from 'vue';

import Modules from './modules'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: Modules
})
