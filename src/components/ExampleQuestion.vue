<template>
  <v-text-field
   variant="underlined"
   :prefix="exampleQuestionPrefix"
   :suffix="exampleQuestionSuffix"
  >

  </v-text-field>
</template>

<script setup lang="ts">
const exampleQuestionPrefix = "Eu estou";
const exampleQuestionSuffix = "meu jantar";
</script>

<style scoped>

</style>