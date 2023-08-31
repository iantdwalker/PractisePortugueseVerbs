<template>
  <v-toolbar class="toolbar" density="compact">
    <v-spacer></v-spacer>
    <v-btn icon class="icon" @click.stop="dislaySettings = !dislaySettings">
      <font-awesome-icon icon="cog" />
    </v-btn>
  </v-toolbar>
  <v-navigation-drawer
    v-model="dislaySettings"
    location="right"
    temporary
    class="navDrawer"
  >
    <slot></slot>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
var dislaySettings = ref();
</script>

<style scoped>
.toolbar {
  background-color: var(--color-background);
  margin: 2px;
}

.icon {
  font-size: 3em;
  color: var(--color-settings-icon);
}
</style>
