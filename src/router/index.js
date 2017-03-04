import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../views/Hello.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],

})
