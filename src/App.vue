<script setup>
import { ref, onMounted } from 'vue';

import axios from 'axios';
import UniHeader from './components/UniHeader.vue';
import UniDomainDetail from './components/UniDomainDetail.vue';
import UniSideBar from './components/UniSideBar.vue';


const jsonData = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('/domain-detail.json');
    jsonData.value = response.data;
    console.log('jsonData:', jsonData.value);
  } catch (error) {
    console.error('Error loading data:', error);
  }
});
</script>

<template>
  <div class="navigation-bar">
    <UniHeader />
  </div>
  <div class="main-container">
    <UniSideBar />
    <UniDomainDetail v-if="jsonData !== null" :data="jsonData" />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0 auto;
  max-width: 100%;
  background-color: #ecebeb;
}
</style>
