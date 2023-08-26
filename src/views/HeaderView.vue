<template>
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
</template>

<script setup lang="ts">
import HeadingMessages from "../components/HeadingMessages.vue";
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 1rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
