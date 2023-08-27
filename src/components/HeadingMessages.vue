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
  font-size: 2rem;
  position: relative;
  top: -10px;
}

.greetings h1,
.greetings .card {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings .card {
    text-align: left;
  }
}
</style>
