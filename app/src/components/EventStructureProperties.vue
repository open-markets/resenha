<template>
    <v-list>
        <v-list-item
            v-for="item in event.properties.structure"
            @click="">
            <v-row class="align-center">
                <v-col class="flex-grow-0">
                    <v-icon :icon="icon(item)" color="secondary"/>
                </v-col>
                <v-divider vertical/>
                <v-col>
                    <v-container>
                    <v-row>
                        <span class="text-primary">{{ item.title }}</span>
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
import type { OEF_Event, OEF_StructureProperty } from '@resenha/oef/types';

const event = defineModel({
    type: Object as PropType<OEF_Event>,
    required: true
});

function icon(item: OEF_StructureProperty) {
    switch (item.subtype) {
        case 'accessibility': return 'mdi-human';
        case 'bathroom': return 'mdi-toilet';
        case 'climate': return 'mdi-thermometer';
        case 'parking': return 'mdi-car';
        case 'seating': return 'mdi-seat';
        case 'other': return 'mdi-archive-outline';
    }
}
</script>