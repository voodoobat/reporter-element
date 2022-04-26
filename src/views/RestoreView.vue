<template>
  <root-component type="login">
    <login-form
      :title="$t('restore_title')"
      :button="$t('restore_button')"
      :model="state"
    >
      <el-form-item>
        <el-input
          v-model="state.email"
          :prefix-icon="User"
          :placeholder="$t('email_label')"
        />
      </el-form-item>
    </login-form>
  </root-component>
</template>

<script setup>
import { reactive } from 'vue'
import { User } from '@element-plus/icons-vue'

import RootComponent from '~/components/RootComponent.vue'
import LoginForm from '~/components/LoginForm.vue'

const state = reactive({
  email: '',
})
</script>
