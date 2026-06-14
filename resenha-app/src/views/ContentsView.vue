<template>
  <div class="full-page">
    <DataTable
      v-model:filters="filters"
      filterDisplay="row"
      :value="contents"
      paginator
      :rows="10"
      scrollable
      scrollHeight="flex"
      selectionMode="single"
    >
      <template #header>
          <div class="row v-center ga-2">
              <h3>Conteúdos</h3>
              <Button severity="primary" icon="pi pi-plus" rounded raised @click="create"/>
              <div class="grow"/>
              <Button severity="secondary" icon="pi pi-refresh" rounded raised />
              <div style="width:2.5rem"/>
          </div>
      </template>
      <Column field="plugin_alias" header="Tipo">
        <template #filter="{ filterModel, filterCallback }">
          <EnumField :schema="field.enum('Tipo', 'plugin_alias', {
            options: [
                { id: 1, alias: 'Evento' }
            ]
          })"/>
        </template>
      </Column>
      <Column field="alias" header="Nome">
        <template #filter="{ filterModel, filterCallback }">
          <TextField :schema="field.text('Nome', 'alias')"/>
        </template>
      </Column>
      <Column v-for="col of plugin_columns" :key="col.field" :field="col.field" :header="col.header"></Column>
  </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { ref } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import EnumField from '@/modules/form/components/EnumField.vue';
import TextField from '@/modules/form/components/TextField.vue';
import { useDialog } from 'primevue/usedialog';
import ContentForm from '@/modules/core/components/ContentForm.vue';
import { field } from '@/modules/form/lib/field.schema';

const dialog = useDialog();

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    plugin: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const plugin_columns = ref([
  {
    field: 'location',
    header: 'Local'
  },
  {
    field: 'datetime',
    header: 'Horário'
  },
])
const contents = ref([
  {
    plugin: 'event',
    plugin_alias: 'Evento',
    alias: 'Show da Banda Falsa'
  },
  {
    plugin: 'event',
    plugin_alias: 'Evento',
    alias: 'Show da Banda Falsa'
  },
  {
    plugin: 'event',
    plugin_alias: 'Evento',
    alias: 'Show da Banda Falsa'
  },
])

function create() {
  dialog.open(ContentForm, {
    props: {
      header: 'Criar Conteúdo',
      modal: true,
      dismissableMask: true
    }
  })
}
</script>
