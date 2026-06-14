<template>
  <IconField>
    <InputIcon
      v-if="icon"
      class="pi"
      :class="icon"
    ></InputIcon>
    <InputText 
      type="text"
      v-model="value"
      style="max-width: 100%"
      :placeholder="schema.alias"
    />
  </IconField>
</template>

<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { computed, ref, type PropType } from 'vue';
import type { $Field } from '../lib/field.schema';

const props = defineProps<{
  schema: $Field
}>();

const value = ref('');
const icon = computed(() => ({
  '': '',
  'search': 'pi-search'
}[props.schema.meta.text!.type ?? '']))
</script>