import { usePostsStore } from '~/core/store/posts'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('~/views/RootView.vue'),
  },
  {
    path: '/user/sign-in',
    name: 'sign-in',
    meta: {
      guest: true,
    },
    component: () => import('~/views/user/SignInView.vue'),
  },
  {
    path: '/user/sign-up',
    name: 'sign-up',
    meta: {
      guest: true,
    },
    component: () => import('~/views/user/SignUpView.vue'),
  },
  {
    path: '/user/restore',
    name: 'restore',
    meta: {
      guest: true,
    },
    component: () => import('~/views/user/RestoreView.vue'),
  },
  {
    path: '/posts',
    name: 'posts-list',
    component: () => import('~/views/posts/ListsView.vue'),
    beforeEnter: () => {
      const store = usePostsStore()
      store.fetchPostList()
    },
  },
  {
    path: '/posts/:id/edit',
    name: 'posts-edit',
    component: () => import('~/views/posts/EditView.vue'),
    beforeEnter: ({ params }) => {
      const store = usePostsStore()
      store.fetchPostById(params.id)
    },
  },
  {
    path: '/posts/new',
    name: 'posts-create',
    component: () => import('~/views/posts/EditView.vue'),
  },
]
