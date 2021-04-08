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
import cssPosition from '../view/test/cssPosition'
import test from '../view/test/test'
import positionSticky from '../view/cssTest/positionSticky'
import cssSticky from '../view/test/cssSticky'
import orderImport from '../view/orderImport/index'
import returnChange from '../view/returnChange/index'
import rcModify from '../view/returnChange/components/modify'

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
      },
      {
        path: '/cssPosition',
        name: 'cssPosition',
        component: cssPosition
      },
      {
        path: '/test',
        name: 'test',
        component: test
      },
      {
        path: '/positionSticky',
        name: 'positionSticky',
        component: positionSticky
      },
      {
        path: '/cssSticky',
        name: 'cssSticky',
        component: cssSticky
      },
      {
        path: '/orderImport',
        name: 'orderImport',
        component: orderImport
      },
      {
        path: '/returnChange',
        name: 'returnChange',
        component: returnChange,
        meta:{
          title:'退回更址打印'
        }
      },
      {
        path: '/rcModify',
        name: 'rcModify',
        component: rcModify,
        meta:{
          title:'退更打印'
        }
      },
      {
        path:'/customStopSend',
        name:'customStopSend',
        component: () => import('@/view/customStopSend/index'),
        meta:{
          title:'自定义停发区域'
        }
      }

    ]
})

export default router;