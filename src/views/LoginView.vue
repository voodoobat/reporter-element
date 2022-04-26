<template>
  <root-component type="login">
    <h1>Login view</h1>
    <el-button>
      {{ $t('log_in') }}
    </el-button>
  </root-component>
</template>

<script setup>
import RootComponent from '~/components/RootComponent.vue'
</script>
