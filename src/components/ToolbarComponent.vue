<template>
  <v-layout>
    <v-toolbar class="toolbar" :elevation="8" density="compact">
      <v-spacer></v-spacer>
      <v-btn icon class="icon" @click.stop="dislaySettings = !dislaySettings">
        <font-awesome-icon icon="cog" />
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="dislaySettings" location="right" temporary>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="About"
          value="about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
var dislaySettings = ref();
</script>

<style scoped>
.toolbar {
  background-color: darkolivegreen;
}

.icon {
  font-size: 2em;
}
</style>
