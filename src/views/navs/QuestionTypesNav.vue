<template>
  <v-btn>
    <RouterLink to="/home">Home</RouterLink>
  </v-btn>
  <v-btn>
    <RouterLink to="/questions">Begin!</RouterLink>
  </v-btn>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
