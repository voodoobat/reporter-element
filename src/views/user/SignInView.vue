<template>
  <root-component type="login">
    <el-form
      ref="formRef"
      class="form"
      size="large"
      :model="model"
      :rules="{
        password: [
          { required: true, message: $t('required_error_msg'), trigger },
        ],
        email: [
          { required: true, message: $t('email_error_msg'), trigger },
          { type: 'email', message: $t('email_error_msg'), trigger },
        ],
      }"
    >
      <el-form-item>
        <h2>{{ $t('log_in_title') }}</h2>
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          v-model="model.email"
          :prefix-icon="User"
          :placeholder="$t('email_label')"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="model.password"
          type="password"
          :prefix-icon="Edit"
          :placeholder="$t('password_label')"
        />
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary" @click="onsubmit(formRef)">
          {{ $t('log_in_button') }}
        </el-button>
        <app-route type="primary" to="restore">
          {{ $t('restore_link_text') }}
        </app-route>
      </el-form-item>
    </el-form>
  </root-component>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { User, Edit } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

import AppRoute from '~/core/components/AppRoute.vue'
import RootComponent from '~/components/RootComponent.vue'
import { useUserStore } from '~/core/store/user'

const formRef = ref()
const user = useUserStore()
const { push } = useRouter()

const trigger = 'blur'
const model = reactive({
  email: '',
  password: '',
})

const onsubmit = async (form) => {
  await form.validate((isValid) => {
    if (isValid) {
      user.id = 1
      user.name = 'John Doe'
      user.email = model.email
      user.image = '/mock/avatar.jpg'
      model.email = ''
      model.password = ''
      push({ name: 'posts-list' })
    }
  })
}
</script>

<style lang="scss" scoped>
@import '~/scss/global/login-form';
</style>
