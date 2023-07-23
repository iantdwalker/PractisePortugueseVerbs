<template>
  <div class="hand-written-font">
    <v-responsive class="mx-auto">
      <v-text-field
        :class="displayStyle"
        variant="underlined"
        color="hsla(160, 100%, 37%, 1)"
        :hint="hintText"
        clearable
        persistent-clear
        clear-icon="fas fa-times"
        autofocus
        active
        :prefix="exampleQuestionPrefix"
        :suffix="exampleQuestionSuffix"
        :rules="[rules.required]"
        validate-on="blur"
        :append-icon="questionIcon"
      >
      </v-text-field>
      <v-text-field
        :class="displayStyle"
        variant="underlined"
        color="hsla(160, 100%, 37%, 1)"
        :hint="hintText"
        clearable
        persistent-clear
        clear-icon="fas fa-times"
        active
        :prefix="exampleQuestionPrefix"
        :suffix="exampleQuestionSuffix"
        :rules="[rules.required]"
        validate-on="blur"
        :append-icon="questionIcon"
      >
      </v-text-field>
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { computed } from "vue";

const { name } = useDisplay();
const hintText = "Gerundio...";
const exampleQuestionPrefix = "Eu estou";
const exampleQuestionSuffix = "meu jantar";
const correctAnswer = "comendo";
const questionIcon = "fas fa-utensils";

const displayStyle = computed(() => {
  switch (name.value) {
    case "xs":
      return "center-text-input input-font-xs additional-text";
    case "sm":
      return "center-text-input input-font-sm additional-text";
    case "md":
      return "center-text-input input-font-md additional-text";
  }
  return "center-text-input input-font additional-text";
});

const rules = {
  required: (value: string) =>
    correctAnswer.startsWith(value) || value === correctAnswer || "Incorrecto!",
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");

.hand-written-font {
  font-family: "Caveat", cursive;
  color: hsla(160, 100%, 37%, 1);
}

.center-text-input :deep(input) {
  text-align: center;
}

.input-font-xs :deep(input) {
  font-size: 1.2em;
}

.input-font-sm :deep(input) {
  font-size: 1.5em;
}

.input-font-md :deep(input) {
  font-size: 2em;
}

.input-font :deep(input) {
  font-size: 2.5em;
}

.additional-text :deep(.v-text-field__prefix),
:deep(.v-text-field__suffix) {
  font-size: 1.2em;
}

.additional-text :deep(.v-icon) {
  padding-top: 15px;
}

// not currently doing anything:
/* .additional-text :deep(.v-input__details) {
  font-size: 1.5em;
} */
</style>
