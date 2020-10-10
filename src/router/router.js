import Vue from 'vue'
import Router from 'vue-router'
import Shuttle from '../view/shuttle/shuttle'
import Button from '../view/button/button'
import Element from '../view/element/index'
import Task from '../view/test/task'
import TaskFrom from '../view/test/taskFrom'
import testIndex from '../view/test/index'
import VantIndex from '../view/vant/index'
import LyyTree from '../view/element/lyyTree'
import LyyDialog from '../view/element/lyyDialog'
import antDesign from '../view/antDesign/index'
import swordImmortal from '../view/swordImmortal/index'

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
        path: '/Task',
        name: 'Task',
        component: Task
      },
      {
        path: '/taskFrom',
        name: 'taskFrom',
        component: TaskFrom
      },
      {
        path: '/testIndex',
        name: 'testIndex',
        component: testIndex
      },
      {
        path: '/VantIndex',
        name: 'VantIndex',
        component: VantIndex
      },
      {
        path: '/LyyTree',
        name: 'LyyTree',
        component: LyyTree
      },
      {
        path: '/LyyDialog',
        name: 'LyyDialog',
        component: LyyDialog
      },
      {
        path: '/antDesign',
        name: 'antDesign',
        component: antDesign
      },
      {
        path: '/swordImmortal',
        name: 'swordImmortal',
        component: swordImmortal
      }
    ]
})

export default router;