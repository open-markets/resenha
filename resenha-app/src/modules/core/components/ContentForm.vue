<template>
  <EnumField :schema="field.enum('Tipo', 'plugin_alias', {
    options: [
      { id: 1, alias: 'Evento' }
    ]
  })" />
  <EventForm />
</template>

<script setup lang="ts">
import EventForm from '@/modules/content/events/EventForm.vue';
import EnumField from '@/modules/form/components/EnumField.vue';
import { field } from '@/modules/form/lib/field.schema';
</script>