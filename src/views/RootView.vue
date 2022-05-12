<script setup>
import { useRouter } from 'vue-router'

const { push } = useRouter()
push({
  name: 'posts-list',
})
</script>

<style lang="scss">
.page-title {
  margin-bottom: 1em;
}
</style>
