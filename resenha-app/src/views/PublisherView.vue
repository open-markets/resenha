<template>
  <img
    src="https://i.pinimg.com/1200x/58/1d/00/581d00c802540fcb5e5ab0b61508eea0.jpg"
    class="header"
  />
  <div class="info responsive-row ga-3">
    <PublisherCard class="publisher-card"/>
    <div>
      <div class="chip-primary mb-1">Música > Banda</div>
      <span>
        <b>Banda Falsa</b> é uma banda super alternativa da cena do Vale do Paraíba. Mistura elementos de forró com pós-gótico russo e uma pitadinha de carimbó.
      </span>
    </div>
    <div class="info-people">
      <div class="grid-3rem">
        <Avatar />
        <Avatar />
      </div>
    </div>
  </div>
  <div class="contents">
    <FeedWidget />
  </div>
</template>

<script setup lang="ts">
import PublisherCard from '@/modules/core/components/PublisherCard.vue';
import Avatar from '@/modules/content/info/Avatar.vue';
import FeedWidget from '@/modules/core/widgets/FeedWidget.vue';
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}
.publisher-card {
  flex-shrink: 0;
  margin: -4rem auto auto auto;
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
