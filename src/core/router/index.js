import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '~/core/store/user'

import routes from '~/core/router/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
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
