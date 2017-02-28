/**
 * Created by nghia on 2/13/17.
 */
import * as types from '../mutation-types'


// init state

const state = {
  statusLB: false,
  all: [
    {
      "id": 923,
      "display_name": "Thân Văn Nghĩa",
      "count": "51",
      "sum": "159",
      "class_id": 21,
      "user_image_url": "/img/users/923.png",
      "course_id": 25487,
      "user_id": "923",
      "total": "210"
    },
    {
      "id": 1384,
      "display_name": "Nguyễn Duy Kiên",
      "count": "53",
      "sum": "135",
      "class_id": 21,
      "user_image_url": "/avatar-gallery/E04.jpg",
      "course_id": 25487,
      "user_id": "1384",
      "total": "188"
    },
    {
      "id": 922,
      "display_name": "Nguyễn Viết Tuấn Anh",
      "count": "49",
      "sum": "122",
      "class_id": 21,
      "user_image_url": "/img/users/922.png",
      "course_id": 25487,
      "user_id": "922",
      "total": "171"
    }
  ],
};


const getters = {
  leaderBoardStatus: state => state.statusLB,
  allPlayers: state => state.all,
}


const actions = {
  //toggle LeaderBoard
  toggleLeaderBoard ({commit}) {
//    console.log(state.statusLB);
    commit(types.TOGGLE_LEADERBOARD);
  },
  getAllPlayer({commit}){
    commit(types.RECEIVE_PLAYER);
  }

}


const mutations = {
  [types.TOGGLE_LEADERBOARD] (state) {
    state.statusLB = !state.statusLB
  },
  [types.RECEIVE_PLAYER] (state, player ){
    if(player !== []){
      state.all = player
    }

  }

}

export default {
  state,
  getters,
  actions,
  mutations
}