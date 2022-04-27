<template>
  <root-component type="login">
    <login-form
      :title="$t('sign_up_title')"
      :button="$t('sign_up_button')"
      :model="state"
    >
      <el-form-item>
        <el-input
          v-model="state.name"
          :prefix-icon="User"
          :placeholder="$t('name_label')"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="state.email"
          :prefix-icon="User"
          type="email"
          :placeholder="$t('email_label')"
        />
      </el-form-item>
    </login-form>
  </root-component>
</template>

<script setup>
import { reactive } from 'vue'
import { User, Edit } from '@element-plus/icons-vue'

import RootComponent from '~/components/RootComponent.vue'
import LoginForm from '~/components/LoginForm.vue'

const state = reactive({
  name: '',
  email: '',
})
</script>
