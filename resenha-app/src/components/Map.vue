<template>
    <v-row class="fill-height">
      <l-map
        @ready="onReady"
        @locationfound="onLocationFound"
        v-model:zoom="zoom"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker v-for="marker, index in markers" :lat-lng="marker" @click="navToEvent(marker)"></l-marker>
      </l-map>
    </v-row>
  </template>
  
<script lang="ts" setup>
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

const zoom = ref(14);
const markers = ref([
  L.latLng(47.412, -1.218),
  L.latLng(47.413220, -1.219482),
  L.latLng(47.414, -1.22),
  ])

const router = useRouter();

const map = ref<L.Map>();

function onReady(_map: L.Map) {
  map.value = _map;
  map.value.locate();
}
function onLocationFound(location: L.LocationEvent) {
  map.value?.panTo(location.latlng);
}

const navToEvent = (ev) => {
    router.push('/event')
}
</script>