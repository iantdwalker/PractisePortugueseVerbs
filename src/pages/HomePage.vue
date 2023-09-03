<template>
  <PageLayout>
    <template #header>
      <HeaderView />
    </template>
    <HomeView />
    <template #nav>
      <HomeNav />
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "@/components/PageLayout.vue";
import HeaderView from "@/views/headers/HeaderView.vue";
import HomeView from "@/views/HomeView.vue";
import HomeNav from "@/views/navs/HomeNav.vue";
</script>

<style scoped></style>
