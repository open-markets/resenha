<template>
  <img
    src="https://i.pinimg.com/1200x/58/1d/00/581d00c802540fcb5e5ab0b61508eea0.jpg"
    class="header"
  />
  <div class="info responsive-row ga-1">
    <div>
      <h2 class="">SHOW DA BANDA FALSA</h2>
      <div class="chip-black mb-1">Evento > Show</div>
      <div>
        <a class="text-sm pi pi-map-marker"/>
        <a class="text-sm">SESC Pindamonhangaba</a>
      </div>
    </div>
    <div class="grow"></div>
    <div class="info-people">
      <div class="grid-3rem">
        <Avatar />
        <Avatar />
      </div>
    </div>
  </div>
  <div class="info row">
    <span>
      Um show super especial passando por todo o repertório da banda, com participação especial de Juca Maraneira e Bete Bobete. E mais um monte de coisa poética que a banda queira escrever, sei lá.
    </span>
  </div>
  <div class="contents">
    
  </div>
</template>

<script setup lang="ts">
import EventCard from './EventCard.vue';
import Avatar from '@/modules/content/info/Avatar.vue';
import FeedWidget from '@/modules/core/widgets/FeedWidget.vue';
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}
.event-card {
  flex-shrink: 0;
  margin-top: -4rem;
}
.info {
  margin: 0.5rem 2rem 0 2rem;
}
.info-people {
  min-width: 6.5rem;
  max-width: 6.5rem;
}
.contents {
  margin: 2rem 1rem 0 1rem;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
