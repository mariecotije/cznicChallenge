<script setup>
import UniSideBar from "../components/UniSideBar.vue";
//import UniDomainDetail from "../components/UniDomainDetail.vue";
import UniUserMenu from "../components/UniUserMenu.vue";

</script>

<template>
  <main>
    <div class="main-container">
      <UniSideBar />
      <!-- <UniDomainDetail /> -->
      <UniUserMenu />
    </div>
  </main>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');

* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.main-container {
  max-width: 1100px;
  //margin: 0;

  display: flex;

}
</style>