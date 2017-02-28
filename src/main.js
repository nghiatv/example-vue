// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/index.js'

/* eslint-disable no-new */
import UserHeader from './components/UserHeader/index.vue'
import UserFooter from 'components/UserFooter/index.vue'
import MainContent from 'components/MainContent/index.vue'
import LeaderBoard from 'components/LeaderBoard/index.vue'

new Vue({
  el: '#app',
  router,
  store,
  components: {
    UserHeader: UserHeader,
    MainContent:MainContent,
    UserFooter:UserFooter,
    LeaderBoard: LeaderBoard
  }
})
