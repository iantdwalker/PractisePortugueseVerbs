<template>
  <v-layout>
    <v-container class="container">
      <header class="header">
        <slot name="header"></slot>
      </header>
      <v-main class="main">
        <slot></slot>
      </v-main>
      <v-bottom-navigation class="nav">
        <slot name="nav"></slot>
      </v-bottom-navigation>
    </v-container>
  </v-layout>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  min-height: 100vh;
}

.main {
  margin-top: 25px;
}

.nav {
  background-color: var(--color-background-nav);
}

@media (min-width: 1024px) {
  .header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
