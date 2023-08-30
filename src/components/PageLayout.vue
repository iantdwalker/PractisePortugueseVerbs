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

.header {
  line-height: 1.3;
  max-height: 100vh;
}

.main {
  min-height: 100vh;
}

.nav {
  background-color: lightgray;
}

@media (min-width: 1024px) {
  .header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
