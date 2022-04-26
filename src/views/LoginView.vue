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
          :prefix-icon="User"
          :placeholder="$t('email_label')"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="state.password"
          type="password"
          :prefix-icon="Edit"
          :placeholder="$t('password_label')"
        />
      </el-form-item>
      <template #note>
        <router-link to="restore">
          {{ $t('restore_link_text') }}
        </router-link>
      </template>
    </login-form>
  </root-component>
</template>

<script setup>
import { reactive } from 'vue'
import { User, Edit } from '@element-plus/icons-vue'

import RootComponent from '~/components/RootComponent.vue'
import LoginForm from '~/components/LoginForm.vue'

const state = reactive({
  email: '',
  password: '',
})
</script>
