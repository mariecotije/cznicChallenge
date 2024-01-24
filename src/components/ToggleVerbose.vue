<template>
    <div class="toggle-switch">
        <div class="toggle-switch__icon" v-if="verbose">
            <Icon icon="line-md:switch-off-to-switch-transition" color="4586f6" width="32" height="32" />
        </div>
        <div class="toggle-switch__icon" v-else>
            <Icon icon="line-md:switch-to-switch-off-transition" color="gray" width="32" height="32" />
        </div>
        <div class="toggle-switch__label" @click="verbose = !verbose">Verbose view</div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const verbose = ref(false);

</script>

<style lang="scss" scoped>
.toggle-switch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 160px;
    color: #7d7b7b;
    padding: 10px;
    cursor: pointer;

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__label {
        font-weight: 100;
        text-align: center;
    }

}
</style>