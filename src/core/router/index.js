import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '~/views/HomeView.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user/sign-in',
      name: 'sign-in',
      component: () => import('~/views/user/SignInView.vue'),
    },
    {
      path: '/user/sign-up',
      name: 'sign-up',
      component: () => import('~/views/user/SignUpView.vue'),
    },
    {
      path: '/user/restore',
      name: 'restore',
      component: () => import('~/views/user/RestoreView.vue'),
    },
    {
      path: '/posts',
      name: 'posts-list',
      component: () => import('~/views/HomeView.vue'),
    },
    {
      path: '/posts/new',
      name: 'posts-new',
      component: () => import('~/views/HomeView.vue'),
    },
  ],
})
