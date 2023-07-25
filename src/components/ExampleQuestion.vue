<template>
  <div class="hand-written-font">
    <v-responsive class="mx-auto">
      <v-text-field
        v-model="userInputValue"
        @update:modelValue="onModelUpdated"
        :class="displayStyle"
        variant="underlined"
        color="hsla(160, 100%, 37%, 1)"
        :hint="hintText"
        persistent-hint
        autofocus
        active
        :prefix="exampleQuestionPrefix"
        :suffix="exampleQuestionSuffix"
        :rules="[rules.required]"
        validate-on="blur"
      >
        <template v-slot:append>
          <div :class="displayStyleIcon">
            <font-awesome-icon :icon="questionIcon" />
          </div>
        </template>
      </v-text-field>
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { computed, ref } from "vue";

const { name } = useDisplay();
const exampleQuestionPrefix = "Eu estou";
const exampleQuestionSuffix = "meu jantar";
const correctAnswer = "comendo";

const displayStyle = computed(() => {
  console.log("display style:" + name.value);
  switch (name.value) {
    case "xs":
      return "center-text-input question-font-size";
    case "sm":
      return "center-text-input question-font-size-sm";
    case "md":
      return "center-text-input question-font-size-md";
    case "lg":
    case "xl":
    case "xxl":
      return "center-text-input question-font-size-lgPlus";
  }
  return undefined;
});

const displayStyleIcon = computed(() => {
  console.log("display style:" + name.value);
  switch (name.value) {
    case "xs":
      return "question-icon";
    case "sm":
      return "question-icon-sm";
    case "md":
      return "question-icon-md";
    case "lg":
    case "xl":
    case "xxl":
      return "question-icon-lgPlus";
  }
  return undefined;
});

const rules = {
  required: (value: string) => value === correctAnswer || "Incorrect!",
};

var userInputValue = ref("");
var hintText = "Gerundio...";
var questionIcon = ref("utensils");

function onModelUpdated(value: string): void {
  if (value === correctAnswer) {
    hintText = "Correct!";
    questionIcon.value = "check";
  } else {
    hintText = "Gerundio...";
    questionIcon.value = "utensils";
  }
}
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

/* extra small - small to large phone */
.question-font-size :deep(input),
.question-font-size :deep(.v-text-field__prefix),
.question-font-size :deep(.v-text-field__suffix) {
  font-size: 1.2em;
}

.question-icon {
  font-size: 1.2em;
}

/* small - small to medium tablet */
.question-font-size-sm :deep(input),
.question-font-size-sm :deep(.v-text-field__prefix),
.question-font-size-sm :deep(.v-text-field__suffix) {
  font-size: 2em;
}

.question-icon-sm {
  font-size: 2em;
}

/* medium - large tablet to laptop */
.question-font-size-md :deep(input),
.question-font-size-md :deep(.v-text-field__prefix),
.question-font-size-md :deep(.v-text-field__suffix) {
  font-size: 2.5em;
}

.question-icon-md {
  font-size: 2.5em;
}

/* largePlus - Laptop to desktop, 1080p to 1440p desktop, 4k and ultra-wide */
.question-font-size-lgPlus :deep(input),
.question-font-size-lgPlus :deep(.v-text-field__prefix),
.question-font-size-lgPlus :deep(.v-text-field__suffix),
.question-font-size-lgPlus :deep(.v-input__details) {
  font-size: 3em;
}

.question-icon-lgPlus {
  font-size: 3em;
}

/* .question-font-size-lgPlus :deep(.v-input__details) {
  height: 80px;
    line-height: 80px;
    letter-spacing: normal;
    font-size: 2em;
} */

// not currently doing anything:
/* .additional-text :deep(.v-input__details) {
  font-size: 1.5em;
} */
</style>
