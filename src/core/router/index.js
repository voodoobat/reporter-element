import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '~/core/store/user'

const router = createRouter({
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
      meta: { guest: true },
      component: () => import('~/views/user/SignInView.vue'),
    },
    {
      path: '/user/sign-up',
      name: 'sign-up',
      meta: { guest: true },
      component: () => import('~/views/user/SignUpView.vue'),
    },
    {
      path: '/user/restore',
      name: 'restore',
      meta: { guest: true },
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

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  const { guest } = to.meta

  if (!guest && !user.id) {
    return next({
      name: 'sign-in',
    })
  }

  return next()
})

export default router
