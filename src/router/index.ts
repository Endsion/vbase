import {
  createRouter,
  // createWebHistory, // history模式
  createWebHashHistory,
  type RouteRecordRaw, // hash模式
} from 'vue-router'
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: async () => await import('@/views/index/index.vue'),
  },
  {
    path: '/list',
    component: async () => await import('@/views/list/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

/** 权限控制，动态路由添加等 */
router.beforeEach((to, from, next) => {
  console.log(to, from, 111)
  next()
})
export default router
