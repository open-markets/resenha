<template>
  <div class="responsive-row">
    <EnumField :schema="field.enum('Tipo', 'plugin_alias', {
      options: [
        { id: 1, alias: 'Eventos' },
        { id: 2, alias: 'Artistas' },
      ]
    })"/>
    <TextField :schema="field.text('Pesquisar', 'search', {
      type: 'search'
    })"/>
  </div>
</template>

<script setup lang="ts">
import EnumField from '@/modules/form/components/EnumField.vue';
import TextField from '@/modules/form/components/TextField.vue';
import { field } from '@/modules/form/lib/field.schema';
</script>