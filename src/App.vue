<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HeadingMessages from "./components/HeadingMessages.vue";
import ToolbarComponent from "./components/ToolbarComponent.vue";
import SettingsView from "./views/SettingsView.vue";
</script>

<template>
  <header>
    <ToolbarComponent>
      <SettingsView />
    </ToolbarComponent>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/Flags_of_Brazil_and_Portugal.svg"
      width="175"
      height="125"
    />
    <div class="wrapper">
      <HeadingMessages msg="Practise Portuguese Verbs" />
    </div>
  </header>
  <RouterView />
  <nav>
    <v-btn>
      <RouterLink to="/">Home</RouterLink>
    </v-btn>
    <v-btn>
      <RouterLink to="/about">About</RouterLink>
    </v-btn>
    <v-btn>
      <RouterLink to="/example">Example Question</RouterLink>
    </v-btn>
  </nav>
</template>

<style scoped>
header {
  line-height: 1.3;
  max-height: 100vh;
  background-color: aqua;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
  background-color: yellow;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
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
