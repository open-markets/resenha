<template>
  <DatePicker :placeholder="schema.alias"/>
</template>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker';

import { ref } from 'vue';
import type { $Field } from '../lib/field.schema';

defineProps<{
  schema: $Field
}>();

const value = ref('');
</script>