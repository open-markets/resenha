<template>
    <v-list>
        <v-list-item
            v-for="item in event.properties.condition"
            @click=""
            class="rounded-lg"
        >
            <v-row class="align-center">
                <v-col class="flex-grow-0">
                    <v-icon :icon="icon(item)" color="warning"/>
                </v-col>
                <v-divider vertical/>
                <v-col>
                    <v-container>
                        <v-row>
                            <span :class="item.required ? 'text-warning' : 'text-primary'">{{ item.title }}</span>
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
import type { OEF_Event, OEF_ConditionProperty } from '@resenha/oef/types';

const event = defineModel({
    type: Object as PropType<OEF_Event>,
    required: true
});

function icon(item: OEF_ConditionProperty) {
    return item.required ? 'mdi-alert' : '';
}
</script>