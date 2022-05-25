<template>
  <div class="post-wysiwyg">
    <div ref="root" />
    <div class="post-foot">
      <el-button type="danger">Delete</el-button>
      <el-button type="primary" @click="save">Save</el-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'

import Card from '~/core/plugins/Card/Card'

const root = ref()
const emit = defineEmits(['change'])
const editor = { instance: null }
const tools = {
  card: Card,
  header: {
    class: Header,
    inlineToolbar: ['link'],
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
}

const onChange = (api, ev) => emit('change', { api, ev })
const save = () => {
  editor.instance?.save().then((data) => {
    console.log(data)
  })
}

onMounted(() => {
  editor.instance = new EditorJS({
    holder: root.value,
    tools,
    onChange,
  })
})
</script>

<style lang="scss" scoped>
.post-wysiwyg {
  padding: 1em;
  border: 2px dashed var(--el-border-color);
  border-radius: var(--el-border-radius-base);
  @include media($MQ_EDITOR_SM) {
    &::v-deep(.ce-block__content),
    &::v-deep(.ce-toolbar__content) {
      max-width: 100%;
      margin-left: 50px;
    }
    &::v-deep(.codex-editor__redactor) {
      padding-bottom: 0 !important;
    }
  }
}
.post-foot {
  margin-top: 1em;
  text-align: right;
}
</style>
