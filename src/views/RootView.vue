<script setup>
import { useUserStore } from '~/core/store/user'
import { useRouter } from 'vue-router'

const { push } = useRouter()
const user = useUserStore()

if (!user.id) {
  push({ name: 'sign-in' })
} else {
  push({ name: 'posts-list' })
}
</script>

<style lang="scss">
.page-title {
  margin-bottom: 1em;
}
</style>
