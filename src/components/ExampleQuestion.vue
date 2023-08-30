<template>
  <div class="hand-written-font" :class="questionColour">
    <v-responsive class="mx-auto">
      <v-form ref="questionInputForm">
        <v-text-field
          name="questionInput"
          v-model="questionInputValue"
          @update:modelValue="onQuestionInputValueChanged"
          class="center-text-input themed-text-colour"
          :class="questionInputDisplayStyle"
          variant="underlined"
          :color="vueFontColor"
          autofocus
          active
          :prefix="questionPrefix"
          :suffix="questionSuffix"
          :rules="[rules.validateAnswer]"
          :messages="hintText"
          validate-on="blur"
          :onFocus="onFocus"
        >
          <template v-slot:append>
            <div :class="[displayStyleIcon, questionColour]">
              <font-awesome-icon :icon="questionIcon" />
            </div>
          </template>
        </v-text-field>
      </v-form>
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { computed, ref } from "vue";

const { name } = useDisplay();
const questionPrefix = "Eu estou";
const questionSuffix = "meu jantar";
const correctAnswer = "comendo";
const questionHint = "Gerundio...";
const correctAnswerHint = "Correcto!";
const incorrectAnswerHint = "Incorrecto!";
const questionIconText = "utensils";
const correctAnswerIconText = "check";
const incorrectAnswerIconText = "times";
const vueFontColor = "hsla(160, 100%, 37%, 1)";

var questionInputForm = ref();
var questionInputValue = ref("");
var hintText = ref(questionHint);
var questionIcon = ref(questionIconText);
var valid = ref();

const questionInputDisplayStyle = computed(() => {
  return createStyleForDisplay("question-font-size");
});

const displayStyleIcon = computed(() => {
  return createStyleForDisplay("question-icon");
});

const questionColour = computed(() => {
  if (valid.value === false) {
    return "question-incorrect-colour";
  }
  return "question-edit-colour";
});

const rules = {
  validateAnswer: (value: string) => {
    if (value.toLowerCase() === correctAnswer) {
      valid.value = true;
      setQuestionHintAndIconCorrect();
    } else {
      if (value === "") {
        //required for default state as rules execute on mounted
        valid.value = true;
        resetQuestionHintAndIcon();
      } else {
        valid.value = false;
        setQuestionHintAndIconIncorrect();
        return incorrectAnswerHint;
      }
    }
    return valid.value;
  },
};

function createStyleForDisplay(style: string): string {
  switch (name.value) {
    case "sm":
      return `${style}-sm`;
    case "md":
      return `${style}-md`;
    case "lg":
    case "xl":
    case "xxl":
      return `${style}-lgPlus`;
    default:
      return style;
  }
}

function onQuestionInputValueChanged(): void {
  resetQuestionHintAndIcon();
}

function resetQuestionHintAndIcon(): void {
  hintText.value = questionHint;
  questionIcon.value = questionIconText;
}

function setQuestionHintAndIconIncorrect(): void {
  hintText.value = incorrectAnswerHint;
  questionIcon.value = incorrectAnswerIconText;
}

function setQuestionHintAndIconCorrect(): void {
  hintText.value = correctAnswerHint;
  questionIcon.value = correctAnswerIconText;
}

function onFocus() {
  questionInputForm.value?.resetValidation();
  valid.value = undefined;
  resetQuestionHintAndIcon();
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");

.hand-written-font {
  font-family: "Caveat", cursive;
}

.center-text-input :deep(input) {
  text-align: center;
}

.themed-text-colour :deep(.v-text-field__prefix),
.themed-text-colour :deep(.v-text-field__suffix) {
  color: var(--color-text);
}

/* extra small - small to large phone */
.question-font-size :deep(input),
.question-font-size :deep(.v-text-field__prefix),
.question-font-size :deep(.v-text-field__suffix),
.question-font-size :deep(.v-messages__message) {
  font-size: 1.2em;
}

.question-font-size :deep(.v-messages__message) {
  padding-top: 0px;
  height: 20px;
}

.question-icon {
  font-size: 1.2em;
}

/* small - small to medium tablet */
.question-font-size-sm :deep(input),
.question-font-size-sm :deep(.v-text-field__prefix),
.question-font-size-sm :deep(.v-text-field__suffix),
.question-font-size-sm :deep(.v-messages__message) {
  font-size: 2em;
}

.question-font-size-sm :deep(.v-messages__message) {
  padding-top: 6px;
  height: 25px;
}

.question-icon-sm {
  font-size: 2em;
}

/* medium - large tablet to laptop */
.question-font-size-md :deep(input),
.question-font-size-md :deep(.v-text-field__prefix),
.question-font-size-md :deep(.v-text-field__suffix),
.question-font-size-md :deep(.v-messages__message) {
  font-size: 2.5em;
}

.question-font-size-md :deep(.v-messages__message) {
  padding-top: 8px;
  height: 30px;
}

.question-icon-md {
  font-size: 2.5em;
}

/* largePlus - Laptop to desktop, 1080p to 1440p desktop, 4k and ultra-wide */
.question-font-size-lgPlus :deep(input),
.question-font-size-lgPlus :deep(.v-text-field__prefix),
.question-font-size-lgPlus :deep(.v-text-field__suffix),
.question-font-size-lgPlus :deep(.v-messages__message) {
  font-size: 3em;
}

.question-font-size-lgPlus :deep(.v-messages__message) {
  padding-top: 10px;
  height: 35px;
}

.question-icon-lgPlus {
  font-size: 3em;
}

.question-edit-colour {
  color: var(--color-light-vue-green);
}

.question-incorrect-colour {
  color: #b80424;
}
</style>
