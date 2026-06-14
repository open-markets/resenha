<template>
  <div class="publisher-card h-center">
    <h2 class="">SHOW DA BANDA FALSA</h2>
    <div class="mt-1">
      <a class="text-sm pi pi-map-marker"/>
      <a class="text-sm">Pindamonhangaba-SP</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/ui.scss";
.publisher-card {
  @extend .card;
  max-width: 30rem;
  height: 5rem;
}
.avatar {
  display: block;
  width: 9rem;
  height: 9rem;
  border-radius: 4.5rem;
}
</style>