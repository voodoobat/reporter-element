import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('~/views/RootView.vue'),
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
      component: () => import('~/views/posts/ListsView.vue'),
    },
    {
      path: '/posts/new',
      name: 'posts-new',
      component: () => import('~/views/RootView.vue'),
    },
  ],
})
