<template>
  <div :class="$style.card">
    <h2 :class="$style.title">
      <input
        v-model="blockData.title"
        placeholder="Enter title"
        @change="onChange"
      />
    </h2>
    <div :class="$style.input">
      <input
        v-model="blockData.note"
        placeholder="Enter note"
        @change="onChange"
      />
    </div>
    <div :class="[$style.input]">
      <input
        v-model="blockData.price"
        placeholder="Enter price"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { state2object } from '~/core/lib/state2object'

const props = defineProps({
  blockData: {
    type: Object,
    default: () => ({}),
  },
  handler: {
    type: Function,
    default: () => {},
  },
})

const blockData = reactive(props.blockData)
const onChange = () => props.handler(state2object(blockData))
</script>

<style lang="scss" module>
.card {
  padding: 1em;
  margin: 1em 0;
  border: 1px dashed var(--el-border-color);
  border-radius: var(--el-border-radius-base);

  input {
    width: 100%;
    border-bottom: 1px dashed var(--el-border-color);
    transition: border-color 0.25s ease;
    &:focus {
      border-color: var(--el-color-primary);
    }
  }
}

.input {
  margin-top: 1em;
}
</style>
