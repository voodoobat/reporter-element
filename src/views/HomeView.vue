<template>
  <root-component>
    <h3 class="page-title">
      Новая статья
      <el-tag>редактирование</el-tag>
    </h3>
    <el-form label-width="auto">
      <el-form-item label="Страна">
        <el-select filterable>
          <el-option value="Страна 1" />
          <el-option value="Страна 2" />
          <el-option value="Страна 3" />
          <el-option value="Страна 4" />
          <el-option value="Страна 5" />
        </el-select>
      </el-form-item>
      <el-form-item label="Город">
        <el-select filterable>
          <el-option value="Город 1" />
          <el-option value="Город 2" />
          <el-option value="Город 3" />
          <el-option value="Город 4" />
          <el-option value="Город 5" />
        </el-select>
      </el-form-item>
      <el-form-item label="Заголовок">
        <el-input type="text" />
      </el-form-item>
      <el-form-item label="Дата">
        <el-date-picker />
      </el-form-item>
      <el-form-item label="Рубрика">
        <el-select filterable>
          <el-option value="Рубрика 1" />
          <el-option value="Рубрика 2" />
          <el-option value="Рубрика 3" />
          <el-option value="Рубрика 4" />
          <el-option value="Рубрика 5" />
          <el-option value="Рубрика 6" />
          <el-option value="Рубрика 7" />
        </el-select>
      </el-form-item>
    </el-form>
  </root-component>
</template>

<script setup>
import { useUserStore } from '~/core/store/user'
import { useRouter } from 'vue-router'

const { push } = useRouter()
const user = useUserStore()

if (!user.id) {
  push({ name: 'sign-in' })
}
</script>

<style lang="scss">
.page-title {
  margin-bottom: 1em;
}
</style>
