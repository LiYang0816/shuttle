import Vue from 'vue'
import Router from 'vue-router'
import Shuttle from '../view/shuttle/shuttle'
import Button from '../view/button/button'
import Element from '../view/element/index'
import Tesk from '../view/test/task'
import TaskFrom from '../view/test/taskFrom'

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
      },
      {
        path: '/element',
        name: 'element',
        component: Element
      },
      {
        path: '/tesk',
        name: 'tesk',
        component: Tesk
      },
      {
        path: '/taskFrom',
        name: 'taskFrom',
        component: TaskFrom
      }
    ]
})

export default router;