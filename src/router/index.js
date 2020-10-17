import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import('../views/Home'),
    children: [
      {
        path: 'log',
        component: () =>
          import('../components/log')
      },
      {
        path: 'users',
        component: () =>
          import('../components/users')
      },
      {
        path: 'addUser',
        component: () =>
          import('../components/addUser')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
