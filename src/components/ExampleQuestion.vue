<template>
  <!-- <div>
    <v-checkbox
      label="Checkbox"
    >
    </v-checkbox>
  </div> -->
  <div>
    <v-responsive
      class="mx-auto"
      max-width="300"
    >
      <v-text-field
        variant="underlined"
        color="secondary"
        :hint="hint"
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
import { ref } from "vue";

var hint = ref("");
const hintText = "Gerundio...";
const exampleQuestionPrefix = "Eu estou";
const exampleQuestionSuffix = "meu jantar";
const correctAnswer = "comendo";

const rules = {
  required: (value: string) => correctAnswer.startsWith(value) || value === correctAnswer || 'Incorrecto!',
}

function toggleHint() {
  hint.value = hintText;
}

</script>

<style scoped lang="sass">

</style>