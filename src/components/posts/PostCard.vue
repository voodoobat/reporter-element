<template>
  <div class="post">
    <div class="main">
      <div class="head">
        {{ props.post.title }}
      </div>
      <ul class="date">
        <li>
          <span>{{ $t('created') }}: </span>
          <time>{{ props.post.created }}</time>
        </li>
        <li>
          <span>{{ $t('edited') }}: </span>
          <time>{{ props.post.edited }}</time>
        </li>
      </ul>
    </div>
    <div class="actions">
      <el-tooltip :content="$t('edit_tooltip')">
        <el-button :icon="Edit" circle />
      </el-tooltip>
      <el-tooltip :content="$t('delete_tooltip')">
        <el-button :icon="Delete" circle />
      </el-tooltip>
    </div>
  </div>
</template>

<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

console.log(props.post.title)
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
  font-size: var(--el-font-size-small);
  @include media($MQ_SM, max) {
    align-items: flex-start;
    flex-direction: column;
  }
}

.head {
  display: inline-flex;
  font-size: var(--el-font-size-large);
  margin-bottom: 0.5em;
}

.date {
  span {
    color: var(--el-text-color-secondary);
  }
}

.actions {
  @include media($MQ_SM, max) {
    margin-top: 1em;
  }
}
</style>
