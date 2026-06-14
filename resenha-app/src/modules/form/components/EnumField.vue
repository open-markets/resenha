<template>
  <IconField>
    <InputIcon
      v-if="schema.meta.enum!.icon"
      class="pi"
      :class="schema.meta.enum!.icon"
    ></InputIcon>
    <Select
      v-model="value"
      :options="schema.meta.enum!.options"
      placeholder="Tipo"
      optionLabel="alias"
    />
  </IconField>
</template>

<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Select from 'primevue/select';
import { ref } from 'vue';
import type { $Field } from '../lib/field.schema';

defineProps<{
  schema: $Field
}>();

const value = ref('');
</script>