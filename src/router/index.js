import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('~/views/LoginView.vue'),
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('~/views/RegisterView.vue'),
    },
    {
      path: '/restore',
      name: 'restore',
      component: () => import('~/views/RestoreView.vue'),
    },
  ],
})
