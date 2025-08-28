<template>
  <v-main>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>
