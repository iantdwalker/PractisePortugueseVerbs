<template>
  <PageLayout>
    <template #header>
      <HeaderView />
    </template>
    <QuestionTypesView />
    <template #nav>
      <QuestionTypesNav />
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "../components/PageLayout.vue";
import HeaderView from "../views/headers/HeaderView.vue";
import QuestionTypesView from "../views/QuestionTypesView.vue";
import QuestionTypesNav from "../views/navs/QuestionTypesNav.vue";
</script>

<style scoped></style>
