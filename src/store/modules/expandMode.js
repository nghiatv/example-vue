/**
 * Created by nghia on 2/14/17.
 */
import * as types from '../mutation-types'
const namespaced = {
  namespaced: true
};
const state = {
  isExpand: false
};

const getters = {
    leftContentSize: state =>
    {
      if (state.isExpand) {
        return {
          width: '100%'
        }
      } else {
        return {
          width: '66.667%'
        }
      }
    },
    rightContentPosition: state =>
    {
      if (state.isExpand) {
        return {
          'right': 'auto',
          'left': '100%'
        }
      } else {
        return {
          'right': '0',
          'left': 'auto'
        }
      }
    },
    getIsExpand: state =>
    {
      return state.isExpand
    }
  }

  ;

const actions = {
  toggleExpandMode({commit}){
    commit(types.TOGGLE_EXPAND_MODE)
  }

};

const mutations = {
  [types.TOGGLE_EXPAND_MODE](state){
    state.isExpand = !state.isExpand
  },
  [types.SET_EXPAND_MODE](state, payload){
    state.isExpand = payload.isExpand
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}


