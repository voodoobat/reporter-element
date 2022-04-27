<template>
  <el-menu :collapse="!expanded" class="menu">
    <el-menu-item class="expand" @click="expanded = !expanded">
      <el-icon>
        <circle-close v-if="expanded" />
        <circle-plus v-else />
      </el-icon>
      <span>Свернуть</span>
    </el-menu-item>
    <el-sub-menu :index="2">
      <template #title>
        <el-icon>
          <document />
        </el-icon>
        <span>Статьи</span>
      </template>
      <el-menu-item-group class="posts">
        <el-menu-item :index="20">
          <el-icon>
            <edit-pen />
          </el-icon>
          <span>Создать новую</span>
        </el-menu-item>
        <el-menu-item :index="21">
          <el-icon>
            <edit />
          </el-icon>
          <span>Мои статьи</span>
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

const expanded = ref(true)
const posts = reactive(usePostsStore())
</script>

<style lang="scss" scoped>
.menu {
  &:not(.el-menu--collapse) {
    width: 20em;
  }
}

.expand {
  color: var(--el-text-color-primary) !important;
  &::v-deep(.el-sub-menu__icon-arrow) {
    display: none;
  }
}

.posts {
  &::v-deep(.el-menu-item-group__title) {
    display: none;
  }
}
</style>
