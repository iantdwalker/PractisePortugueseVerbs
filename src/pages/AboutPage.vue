<template>
  <AppStructure>
    <template #header>
      <HeaderView />
    </template>
    <AboutView />
    <template #nav>
      <AboutNavView />
    </template>
  </AppStructure>
</template>

<script setup lang="ts">
import AppStructure from "../components/AppStructure.vue";
import HeaderView from "../views/HeaderView.vue";
import AboutView from "../views/AboutView.vue";
import AboutNavView from "../views/AboutNavView.vue";
</script>

<style scoped></style>
