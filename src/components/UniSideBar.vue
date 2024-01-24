<template>
    <div class="sidebar">


        <h2>Applications</h2>
        <div class="menu-item">
            <Icon icon="mdi:globe" color="#424141" width="28" height="28" />
            <p>Registry</p>
        </div>


    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style lang="scss" scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 15%;
    background-color: #fff;
    color: #333;


    h2 {
        margin: 20px 10px;
        font-weight: 500;
        text-transform: uppercase;
        color: #a9a8a8;
        font-size: 1rem;
    }

    .menu-item {
        display: flex;
        align-items: center;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        //border-bottom: 1px solid #555;
        background-color: #feb732;

        p {
            padding: 0 30px 0 20px;
            font-weight: 500;
        }
    }
}


@media (min-width: 1024px) {}
</style>