<template>
  <div class="login-form col h-center">
    <img src="/logo.png" class="pa-2 mb-2"/>
    <TextField :schema="field.text('E-mail', 'email')"
    class="mb-2"/>
    <TextField :schema="field.text('Senha', 'password')"/>
    <Button class="mt-4" label="Entrar" @click="submit"/>
  </div>
</template>

<script setup>
import TextField from '@/modules/form/components/TextField.vue';
import { Button } from 'primevue';
import { field } from '@/modules/form/lib/field.schema';
import { useRouter } from 'vue-router';

const router = useRouter();

function submit() {
  router.replace('/');
}
</script>

<style scoped lang="scss">
@use "@/assets/ui.scss";
.login-form {
  @extend .card;
  padding: 1rem;
  max-width: 15rem;
}
</style>