<template>
  <v-row no-gutters>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-col>
      <RouterLink to="/about">
        <v-btn density="comfortable" class="btn text-none">
          <template #prepend>
            <font-awesome-icon icon="info-circle" class="icon" />
          </template>
          About
        </v-btn>
      </RouterLink>
    </v-col>
    <v-spacer></v-spacer>
    <v-col>
      <RouterLink to="/select-questions">
        <v-btn density="comfortable" class="btn text-none">
          <template #prepend>
            <font-awesome-icon icon="play" class="icon" />
          </template>
          Start
        </v-btn>
      </RouterLink>
    </v-col>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
@import "@/assets/styles/main.css";

.icon {
  font-size: 2em;
  color: var(--color-nav-icon);
}
</style>
