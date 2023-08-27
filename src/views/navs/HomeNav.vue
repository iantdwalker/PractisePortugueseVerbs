<template>
  <v-btn>
    <RouterLink to="/about">About</RouterLink>
  </v-btn>
  <v-btn>
    <RouterLink to="/example">Start</RouterLink>
  </v-btn>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
