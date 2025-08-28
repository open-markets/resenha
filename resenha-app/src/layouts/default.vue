<template>
  <v-main>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-row class="justify-center py-6" no-gutters>
        <v-avatar size="120">
          <v-img src="https://imgs.search.brave.com/YtWz5Eipz8AzCSg3PLM1SdWvcf24XcdVMdqs53piX-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cXItY29kZS1nZW5l/cmF0b3IuY29tL3dw/LWNvbnRlbnQvdGhl/bWVzL3FyL25ld19z/dHJ1Y3R1cmUvYXNz/ZXRzL21lZGlhL2lt/YWdlcy9zb2x1dGlv/bnMvcGxhaW4tdGV4/dC9xcmNvZGUwMy5w/bmc"></v-img>
        </v-avatar>
      </v-row>
      <v-list>
        <template v-for="item in menu">
          <v-list-item v-if="'title' in item" :to="item.route">
            <v-row class="align-center">
                <v-col class="flex-grow-0">
                    <v-icon :icon="item.icon" color="primary"/>
                </v-col>
                <v-col>
                  <v-container>
                    <v-row>
                        <span>{{ item.title }}</span>
                    </v-row>
                  </v-container>
                </v-col>
            </v-row>
          </v-list-item>
          <div v-else>
            <span class="text-caption text-secondary ml-2"> {{item.section}} </span>
            <v-divider />
          </div>
        </template>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
const drawer = ref(false);

const menu = ref([
  {
    section: 'Pesquisar'
  },
  {
    icon: 'mdi-calendar',
    title: 'Agenda',
    route: '/calendar'
  },
  {
    icon: 'mdi-map-marker',
    title: 'Mapa',
    route: '/map'
  },
  {
    section: 'Dados'
  },
  {
    icon: 'mdi-link-box-variant-outline',
    title: 'Agendas',
    route: '/settings'
  },
  {
    section: 'Configurações'
  },
  {
    icon: 'mdi-cog',
    title: 'Preferências',
    route: '/settings'
  },
])

</script>
