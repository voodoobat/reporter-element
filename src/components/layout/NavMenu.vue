<template>
  <div class="nav" :class="[expanded && 'is-expanded']">
    <div class="box">
      <div class="head">
        <button class="button button-open" type="button" @click="toggle">
          <el-icon size="1.2em">
            <arrow-right />
          </el-icon>
        </button>
        <div class="posts-title">
          <b class="">Мои статьи:</b>
          <router-link class="plus-button" :to="{ path: '' }">
            <span>Добавить статью</span>
            <el-icon class="icon" size="1.2em">
              <circle-plus />
            </el-icon>
          </router-link>
        </div>
        <button class="button button-close" type="button" @click="toggle">
          <el-icon size="1.2em">
            <arrow-left />
          </el-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowLeft, ArrowRight, CirclePlus } from '@element-plus/icons-vue'

const expanded = ref(true)
const toggle = () => (expanded.value = !expanded.value)
</script>

<style lang="scss" scoped>
$root: '.nav';
$icon-sz: 1.5em;

#{$root} {
  flex-basis: 3.5em;
  transition: flex-basis 0.35s ease;
  &.is-expanded {
    flex-basis: 20em;
  }
}

.box {
  padding: 20px 1em; // vertical padding from .el-main
}

.head {
  position: relative;
  height: $icon-sz;
}

%-show-button {
  transform: none;
  pointer-events: all;
  opacity: 1;
}

%-hide-button {
  transform: scale(0.5);
  pointer-events: none;
  opacity: 0;
}

.button {
  transition: transform, opacity 0.35s ease;
  &-open {
    @extend %-show-button;
    @include position(absolute, 0.25em null null 0.2em);
    #{$root}.is-expanded & {
      @extend %-hide-button;
    }
  }
  &-close {
    @extend %-hide-button;
    @include position(absolute, 0.25em 0.2em);
    #{$root}.is-expanded & {
      @extend %-show-button;
    }
  }
}

.posts-title {
  @extend %-hide-button;
  @include position(absolute, 0.25em);
  display: flex;
  white-space: nowrap;
  transition: transform, opacity 0.35s ease;
  #{$root}.is-expanded & {
    @extend %-show-button;
  }
  > b {
    color: var(--el-link-hover-text-color);
    font-size: 0.9em;
  }
}

.plus-button {
  display: flex;
  align-items: center;
  margin-left: 2.5em;
  font-size: 0.9em;
  color: var(--el-color-primary);
  &:hover {
    color: var(--el-text-color-primary);
  }
  .icon {
    @include position(relative, 0.05em);
    margin-left: 0.25em;
  }
}
</style>
