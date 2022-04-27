<template>
  <root-component>
    <h1>Editor</h1>
  </root-component>
</template>

<script setup>
import { useUserStore } from '~/core/store/user'
import { useRouter } from 'vue-router'

const { push } = useRouter()
const user = useUserStore()
if (!user.id) {
  push({ name: 'sign-in' })
}
</script>
