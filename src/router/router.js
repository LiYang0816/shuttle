import Vue from 'vue'
import Router from 'vue-router'
import Shuttle from '../view/shuttle/shuttle'
import Button from '../view/button/button'
Vue.use(Router)

let router = new Router({
  routes:
    [
      {
        path: '/',
        name: 'shuttle',
        component: Shuttle
      },
      {
        path: '/button',
        name: 'button',
        component: Button
      }
    ]
})

export default router;