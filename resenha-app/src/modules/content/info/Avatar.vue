<template>
  <img
    src="https://avatars.githubusercontent.com/u/2349393?v=4"
    class="avatar mt-1"
    @click="open"
  />
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
function open() {
  router.push('/publisher')
}
</script>

<style scoped lang="scss">
.avatar {
  display: block;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
}
</style>