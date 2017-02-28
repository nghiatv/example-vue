import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
//import modules
import leaderBoard from './modules/leaderboard'
import expandMode from './modules/expandMode'
import resize from './modules/resize'
import search from './modules/search'
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  actions,
  getters,
  strict: debug,
  modules: {
    leaderBoard,
    expandMode,
    resize,
    search
  }
});