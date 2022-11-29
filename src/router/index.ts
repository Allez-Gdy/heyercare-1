import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

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
    name: 'home',
    component: () => import('@/pages/Layout.vue'),
    redirect: '/pageA',
    children: [
      {
        path: '/pageA',
        name: 'pageA',
        component: () => import('@/pages/PageA.vue')
      },
      {
        path: '/pageB',
        name: 'pageB',
        component: () => import('@/pages/PageB.vue')
      }
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