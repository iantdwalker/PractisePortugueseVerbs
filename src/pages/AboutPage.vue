<template>
  <PageLayout>
    <template #header>
      <HeaderView />
    </template>
    <AboutView />
    <template #nav>
      <AboutNav />
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../components/PageLayout.vue";
import HeaderView from "../views/headers/HeaderView.vue";
import AboutView from "../views/AboutView.vue";
import AboutNav from "../views/navs/AboutNav.vue";
</script>

<style scoped></style>
