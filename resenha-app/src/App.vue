<template>
  <Button class="drawer-btn" icon="pi pi-bars" rounded @click="openDrawer"/>
  <Drawer v-model:visible="drawerOpen" position="right">
    <div class="drawer-contents">
      <img
        src="https://i.pinimg.com/1200x/58/1d/00/581d00c802540fcb5e5ab0b61508eea0.jpg"
        class="avatar"
      />
      <h2 class="">BANDA FALSA</h2>
      <Button
        v-for="item in menu"
        :key="item.alias"
        class="w-100 mt-1"
        severity="primary"
        :icon="`pi ${item.icon}`"
        :label="item.alias"
        @click="navTo(item.route)"
      />
      <div class="grow"/>
      <Button class="w-100"  severity="info" icon="pi pi-sign-out" label="Sair" @click="logout"/>
    </div>
  </Drawer>

  <RouterView />
  <DynamicDialog dismissable-mask/>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { Button, Drawer, DynamicDialog } from 'primevue';
import { ref } from 'vue';

const drawerOpen = ref(false);
const router = useRouter();

const menu = ref([
  {
    icon: 'pi-search',
    alias: 'Pesquisar',
    route: '/'
  },
  {
    icon: 'pi-user',
    alias: 'Perfil',
    route: '/publisher'
  },
  {
    icon: 'pi-table',
    alias: 'Conteúdos',
    route: '/contents'
  }
])

function openDrawer() {
  drawerOpen.value = true;
}

function navTo(route: string) {
  router.replace(route);
  drawerOpen.value = false;
}

function logout() {
  router.replace('/login')
  drawerOpen.value = false;
}
</script>

<style scoped lang="scss">
@use "@/assets/ui.scss";
.drawer-btn {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 100;
}
.drawer-contents {
  @extend .col;
  @extend .v-center;
  height: 100%;
}

.avatar {
  display: block;
  width: 12rem;
  height: 12rem;
  border-radius: 6rem;
}
</style>
