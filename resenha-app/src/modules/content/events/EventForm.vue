<template>
  <TextField :schema="field.text('Nome', 'alias')" />
  <EnumField :schema="field.enum('Categoria', 'type', {
    options: [
      { id: 1, alias: 'Música' }
    ]
  })" />
  <EnumField :schema="field.enum('Sub-Categoria', 'subtype', {
    options: [
      { id: 1, alias: 'Show' }
    ]
  })" />
  <DateField :schema="field.text('Data','datetime')" />
</template>

<script setup lang="ts">
import DateField from '@/modules/form/components/DateField.vue';
import EnumField from '@/modules/form/components/EnumField.vue';
import TextField from '@/modules/form/components/TextField.vue';
import { field } from '@/modules/form/lib/field.schema';
</script>