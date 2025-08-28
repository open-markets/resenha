<template>
    <div>
        <v-card>
            <div style="display: grid">
                <div style="grid-area: 1/1; z-index: -99">
                    <v-img :src="bgImg" tile style="filter: blur(32px); opacity: 0.4"/>
                </div>
                <div style="grid-area: 1/1">
                    <v-container>
                        <v-row class="justify-center pt-6">
                            <v-img style="max-width: min(80%, 400px)" :src="bgImg" @click="fullscreen = true"/>
                        </v-row>
                        <v-row class="justify-center text-h4 text-primary pt-6">
                            {{ event.title }}
                        </v-row>
                        <v-row class="justify-center text-subtitle pa-6">
                            {{ event.description }}
                        </v-row>
                        <v-row>
                            <v-divider/>
                        </v-row>
                        <v-row>
                            <v-tabs v-model="tab" color="primary" class="bg-surface" grow>
                                <v-tab value="services">Serviços</v-tab>
                                <v-tab value="structure">Estrutura</v-tab>
                                <v-tab value="condition">Condições</v-tab>
                            </v-tabs>
                        </v-row>
                        <v-row v-if="tab === 'services'">
                            <EventServiceProperties
                                v-model="event"
                                class="w-100"/>
                        </v-row>
                        <v-row v-else-if="tab === 'structure'">
                            <EventStructureProperties
                                v-model="event"
                                class="w-100"/>
                        </v-row>
                        <v-row v-else-if="tab === 'condition'">
                            <EventConditionProperties
                                v-model="event"
                                class="w-100"/>
                        </v-row>

                    </v-container>
                </div>
            </div>
        </v-card>
        <ImageDialog v-model="fullscreen" :url="bgImg" />
    </div>
</template>

<script lang="ts" setup>
import type { OSF_Event } from '@open-markets/osf/types';
import ImageDialog from './ImageDialog.vue';

const event = defineModel({
    type: Object as PropType<OSF_Event>,
    required: true
});

const fullscreen = ref(false);

const tab = ref();
const bgImg = ref('https://imgs.search.brave.com/Q2YBpUsL-T5YeGp6cnVNOW-NTCBJ5iUqmPoSFO1Ip2c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9naWxz/b25hemV2ZWRvLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8wNC9QU0Qt/bmlnaHQtY2x1Yi1k/ai1wYXJ0eS1mbHll/ci1mZWVkLWRlc2ln/bi5qcGc');

function close() {
    console.log('close');
}

</script>