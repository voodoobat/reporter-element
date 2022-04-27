<template>
  <root-component type="login">
    <login-form
      :title="$t('log_in_title')"
      :button="$t('log_in_button')"
      :model="state"
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

import AppRoute from '~/core/components/AppRoute.vue'
import RootComponent from '~/components/RootComponent.vue'
import LoginForm from '~/components/LoginForm.vue'

const state = reactive({
  email: '',
  password: '',
})
</script>
