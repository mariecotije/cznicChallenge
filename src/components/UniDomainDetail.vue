<template>
    <h1>Domain detail: {{ props.data.fqdn }}</h1>
</template>

<script setup>
//props: ['data']
import { defineProps } from 'vue';
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});
console.log('props:', props.data);

</script>

<style lang="scss" scoped>
.domain-detail-container {
    background-color: #ebe8e8;

}
</style>