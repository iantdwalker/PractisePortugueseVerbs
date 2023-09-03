<template>
  <PageLayout>
    <template #header>
      <HeaderView />
    </template>
    <ExampleQuestion2 />
    <template #nav>
      <QuestionsNav />
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "@/components/PageLayout.vue";
import HeaderView from "@/views/headers/HeaderView.vue";
import ExampleQuestion2 from "@/components/ExampleQuestion2.vue";
import QuestionsNav from "@/views/navs/QuestionsNav.vue";
</script>

<style scoped></style>
