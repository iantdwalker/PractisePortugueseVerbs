<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <v-card
      class="card"
      variant="tonal"
      text="Practise forming sentences in Portuguese using verbs with many different
      pronouns, tenses, forms and conjugations."
    >
    </v-card>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  position: relative;
  top: -10px;
}

.card {
  font-size: 1.2rem;
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
