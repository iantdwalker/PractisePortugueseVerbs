<template>
  <div class="hand-written">
    <v-responsive class="mx-auto" max-width="300">
      <v-text-field
        class="centered-input"
        variant="underlined"
        color="secondary"
        :hint="hintText"
        clearable
        autofocus
        active
        :prefix="exampleQuestionPrefix"
        :suffix="exampleQuestionSuffix"
        :rules="[rules.required]"
        validate-on="input"
      >
      </v-text-field>
      <v-text-field
        class="centered-input"
        variant="underlined"
        color="secondary"
        :hint="hintText"
        clearable
        autofocus
        active
        :prefix="exampleQuestionPrefix"
        :suffix="exampleQuestionSuffix"
        :rules="[rules.required]"
        validate-on="input"
      >
      </v-text-field>
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
const hintText = "Gerundio...";
const exampleQuestionPrefix = "Eu estou";
const exampleQuestionSuffix = "meu jantar";
const correctAnswer = "comendo";

const rules = {
  required: (value: string) =>
    correctAnswer.startsWith(value) || value === correctAnswer || "Incorrecto!",
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");

.hand-written {
  font-family: "Caveat", cursive;
}
.centered-input :deep(input) {
  text-align: center;
}
</style>
