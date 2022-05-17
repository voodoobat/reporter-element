<template>
  <root-component>
    <page-content :title="post.title" :label="$t('edit_label')">
      <el-form :label-position="media.MQ_SM ? 'top' : 'left'">
        <el-form-item :label="$t('post_title')">
          <el-input v-model="post.title" />
        </el-form-item>
        <el-form-item>
          <!---->
        </el-form-item>
      </el-form>
    </page-content>
  </root-component>
</template>

<script setup>
import { reactive, ref } from 'vue'
import PageContent from '~/components/PageContent.vue'
import { usePostsStore } from '~/core/store/posts'
import { useMediaStore } from '~/core/store/media'

const postsStore = usePostsStore()
const mediaStore = useMediaStore()

const media = reactive(mediaStore)
const post = reactive(postsStore.post)
</script>
