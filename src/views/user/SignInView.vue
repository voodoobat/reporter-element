<template>
  <root-component type="login">
    <login-form
      :title="$t('log_in_title')"
      :button="$t('log_in_button')"
      :model="state"
      @submit="onsubmit"
    >
      <el-form-item>
        <el-input
          v-model="state.email"
          size="large"
          :prefix-icon="User"
          :placeholder="$t('email_label')"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="state.password"
          size="large"
          type="password"
          :prefix-icon="Edit"
          :placeholder="$t('password_label')"
        />
      </el-form-item>
      <template #note>
        <app-route type="primary" to="restore">
          {{ $t('restore_link_text') }}
        </app-route>
      </template>
    </login-form>
  </root-component>
</template>

<script setup>
import { reactive } from 'vue'
import { User, Edit } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

import AppRoute from '~/core/components/AppRoute.vue'
import RootComponent from '~/components/RootComponent.vue'
import LoginForm from '~/components/LoginForm.vue'

import { useUserStore } from '~/core/store/user'

const user = useUserStore()
const { push } = useRouter()
const state = reactive({
  email: '',
  password: '',
})

const onsubmit = () => {
  if (state.password) {
    user.id = 1
    user.name = 'Elon Musk'
    user.email = state.email
    state.email = ''
    state.password = ''
  }

  if (user.id) {
    push({ name: 'home' })
  }
}
</script>
