<template>
  <v-layout>
    <v-container class="container">
      <header class="header">
        <ToolbarComponent>
          <SettingsView />
        </ToolbarComponent>
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

<script setup lang="ts">
import ToolbarComponent from "../components/ToolbarComponent.vue";
import SettingsView from "../views/SettingsView.vue";
</script>

<style scoped>
.container {
  background-color: brown;
  min-height: 100vh;
}

.header {
  line-height: 1.3;
  max-height: 100vh;
  background-color: aqua;
}

.main {
  background-color: gray;
  min-height: 100vh;
}

.nav {
  background-color: yellow;
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
