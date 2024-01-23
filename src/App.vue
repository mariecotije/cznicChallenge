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
  width: 100vw;
  max-width: 1300px;
  margin: 0;

}
</style>
