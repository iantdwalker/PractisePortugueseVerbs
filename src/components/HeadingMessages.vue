<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.75rem;
}

.greetings {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings {
    text-align: left;
  }
}
</style>
