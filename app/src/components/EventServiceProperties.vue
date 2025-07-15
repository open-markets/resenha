<template>
    <v-list>
        <v-list-item
            v-for="item in event.properties.service"
            @click="">
            <v-row class="align-center">
                <v-col class="flex-grow-0">
                    <v-icon :icon="serviceIcon(item)" color="secondary"/>
                </v-col>
                <v-divider vertical/>
                <v-col>
                    <v-container>
                    <v-row>
                        <span class="text-primary">{{ item.title }}</span>
                        <span class="ml-2 text-secondary">{{ item.value }}</span>
                    </v-row>
                    <v-row class="text-caption">
                        {{ item.description }}
                    </v-row>
                </v-container>
                </v-col>
            </v-row>
        </v-list-item>
    </v-list>
</template>

<script lang="ts" setup>
import type { OEF_Event, OEF_ServiceProperty } from '@resenha/oef/types';

const event = defineModel({
    type: Object as PropType<OEF_Event>,
    required: true
});

function serviceIcon(item: OEF_ServiceProperty) {
    switch (item.subtype) {
        case 'food': return 'mdi-food';
        case 'music': return 'mdi-music';
        case 'arts': return 'mdi-palette';
        case 'other': return 'mdi-auto-fix';
    }
}
</script>