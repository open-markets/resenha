<template>
    <v-dialog fullscreen v-model="open" class="bg-surface">
        <div style="position: relative" class="h-100">
            <div class="h-100 overflow-hidden">
                <v-img
                    :ref="el => registerPanZoom(el)"
                    :src="url" class="h-100"
                />
            </div>
            <v-btn
                style="position: absolute; top: 16px; right: 16px; z-index: 99"
                icon="mdi-close"
                @click="open = false"
            />
        </div>
    </v-dialog>
</template>

<script lang="ts" setup>
import panzoom from 'panzoom';

const props = defineProps<{
    url: string
}>();
const open = defineModel<boolean>();

function registerPanZoom(el: any) {
  if (el?.$el) {
    panzoom(el.$el as HTMLElement, {
      minZoom: 1,
      zoomSpeed: 0.1
    })
  }
}
</script>