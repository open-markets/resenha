<template>
  <v-app>
    <router-view v-if="daemonReady"/>
    <div v-else>
      <span>Loading...</span>
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import { useAppStore } from './stores/app';

const daemonReady = ref(false);
onBeforeMount(() => {
  useAppStore().boot().then(() => {
    daemonReady.value = true;
  })
})
</script>
