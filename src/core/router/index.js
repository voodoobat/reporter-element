import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: () => import('~/views/login/LoginView.vue'),
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('~/views/login/RegisterView.vue'),
    },
    {
      path: '/restore',
      name: 'restore',
      component: () => import('~/views/login/RestoreView.vue'),
    },
  ],
})
