import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { pageRouter } from './pageRouter'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      title: 'login'
    }
  },
  {
    path: '/',
    name: 'def',
    component: () => import('@/pages/Layout.vue'),
    redirect: '/home',
    children: [
      ...pageRouter
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next: any) => {
  // const token = localStorage.getItem('token')
  // if(!token && to.path !== '/login') {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})


export default router