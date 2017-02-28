/**
 * Created by nghia on 2/14/17.
 */
import * as types from '../mutation-types'
const namespaced = {
  namespaced: true
};

const state = {
  playerHeight: 0
};

const getters = {
  getPlayerHeight: (state) =>
  { // player height
    return {
      height: state.playerHeight + 'px'
    }
  }
};


const actions = {
  checkResizeMode({commit,}){

    let isMobile = document.documentElement.clientWidth < 768;
    let titleHeight = document.getElementById('video-title').offsetHeight;
    let wrapHeight = document.getElementById('main-content').offsetHeight;
    let buttonHeight = document.getElementById('video-button').offsetHeight;
    let playerHeight = wrapHeight - titleHeight - buttonHeight - 10 * 2 - 20 * 2;

    // kiem tra co phai mobile hay khong?

    if (isMobile) {
      playerHeight += 10;
      //commit change expand mode cho mobile
      commit(
        `${'expandMode'}/${types.SET_EXPAND_MODE}`,
        {
          isExpand: isMobile
        }, {
          root: true
        })
    }
  else {
        playerHeight -= 20;
      }

      //commit change player height

      commit({
        type: types.SET_PLAYER_HEIGHT,
        playerHeight: playerHeight
      })


    }
  };

  const mutations = {
    // thay doi kich thuoc cuar video player khi resize

    [types.SET_PLAYER_HEIGHT](state, payload){
      state.playerHeight = payload.playerHeight
    }

  };

  export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
  }


