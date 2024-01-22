<template>
  <div class="navigation-bar">
    <UniHeader />
  </div>
  <div class="main-container">
    <UniSideBar />
    <div v-if="jsonData">
      <UniDomainDetail :data="jsonData" />
    </div>
  </div>
</template>

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

<style scoped></style>
