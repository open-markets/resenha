<template>
  <div class="publisher-card h-center">
    <h2 class="">BANDA FALSA</h2>
    <img
      src="https://i.pinimg.com/1200x/58/1d/00/581d00c802540fcb5e5ab0b61508eea0.jpg"
      class="avatar mt-1"
    />
    <div class="mt-2">
      <a class="text-sm pi pi-map-marker"/>
      <a class="text-sm">Pindamonhangaba-SP</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/ui.scss";
.publisher-card {
  @extend .card;
  width: 12rem;
  height: 15rem;
}
.avatar {
  display: block;
  width: 9rem;
  height: 9rem;
  border-radius: 4.5rem;
}
</style>