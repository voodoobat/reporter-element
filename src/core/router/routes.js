export default [
  {
    path: '/',
    name: 'home',
    component: () => import('~/views/RootView.vue'),
  },
  {
    path: '/user/sign-in',
    name: 'sign-in',
    component: () => import('~/views/user/SignInView.vue'),
    meta: { guest: true },
  },
  {
    path: '/user/sign-up',
    name: 'sign-up',
    component: () => import('~/views/user/SignUpView.vue'),
    meta: { guest: true },
  },
  {
    path: '/user/restore',
    name: 'restore',
    component: () => import('~/views/user/RestoreView.vue'),
    meta: { guest: true },
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
]
