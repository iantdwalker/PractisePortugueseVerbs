<template>
  <v-layout>
    <v-container>
      <v-row>
        <v-col>
          <header>
            <ToolbarComponent>
              <SettingsView />
            </ToolbarComponent>
            <slot name="header"></slot>
          </header>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <main>
            <slot></slot>
          </main>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <nav>
            <slot name="nav"></slot>
          </nav>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script setup lang="ts">
import ToolbarComponent from "../components/ToolbarComponent.vue";
import SettingsView from "../views/SettingsView.vue";
</script>

<style scoped>
header {
  line-height: 1.3;
  max-height: 100vh;
  background-color: aqua;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
  background-color: yellow;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
