<template>
  <root-component type="login">
    <el-form
      ref="formRef"
      class="form"
      :model="model"
      size="large"
      :rules="{
        name: [{ required: true, message: $t('required_error_msg') }],
        email: [
          { required: true, message: $t('email_error_msg') },
          { type: 'email', message: $t('email_error_msg') },
        ],
      }"
    >
      <el-form-item>
        <h2>{{ $t('sign_up_title') }}</h2>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="model.name"
          size="large"
          :prefix-icon="User"
          :placeholder="$t('name_label')"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="model.email"
          :prefix-icon="User"
          size="large"
          type="email"
          :placeholder="$t('email_label')"
        />
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary" @click="onsubmit(formRef)">
          {{ $t('sign_up_button') }}
        </el-button>
      </el-form-item>
    </el-form>
  </root-component>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { User } from '@element-plus/icons-vue'

import RootComponent from '~/components/RootComponent.vue'

const formRef = ref()
const model = reactive({
  name: '',
  email: '',
})
const onsubmit = async (form) => {
  await form.validate((isValid) => {
    if (isValid) {
      console.log('is ok')
    } else {
      console.log('is`nt ok')
    }
  })
}
</script>

<style lang="scss" scoped>
@import '~/scss/global/login-form';
</style>
