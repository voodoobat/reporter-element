<template>
  <el-menu :collapse="!expanded" class="menu" :router="true">
    <li class="el-menu-item expand" @click.prevent="expanded = !expanded">
      <el-icon>
        <circle-close v-if="expanded" />
        <circle-plus v-else />
      </el-icon>
      <span>{{ $t('collapse') }}</span>
    </li>
    <el-sub-menu :index="2">
      <template #title>
        <el-icon>
          <document />
        </el-icon>
        <span>{{ $t('posts') }}</span>
      </template>
      <el-menu-item-group class="group">
        <template #title>
          <span>{{ $t('posts') }}</span>
        </template>
        <el-menu-item :route="{ name: 'posts-new' }">
          <el-icon>
            <edit-pen />
          </el-icon>
          <span>{{ $t('create') }}</span>
        </el-menu-item>
        <el-menu-item :route="{ name: 'posts-list' }">
          <el-icon>
            <edit />
          </el-icon>
          <span>{{ $t('my_posts') }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { reactive, ref } from 'vue'
import {
  Document,
  EditPen,
  Edit,
  CirclePlus,
  CircleClose,
} from '@element-plus/icons-vue'

import { usePostsStore } from '~/core/store/posts'
import router from '~/core/router'

const expanded = ref(true)
const posts = reactive(usePostsStore())
</script>

<style lang="scss" scoped>
.menu {
  &:not(.el-menu--collapse) {
    width: 20em;
    .group {
      &::v-deep(.el-menu-item-group__title) {
        display: none;
      }
    }
  }
}

.expand {
  color: var(--el-text-color-primary) !important;
  &::v-deep(.el-sub-menu__icon-arrow) {
    display: none;
  }
}
</style>
