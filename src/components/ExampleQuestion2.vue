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
          color="hsla(160, 100%, 37%, 1)"
          autofocus
          active
          :prefix="questionStore.currentQuestion.prefix"
          :suffix="questionStore.currentQuestion.suffix"
          :rules="[rules.validateAnswer]"
          :messages="hintText"
          validate-on="submit lazy"
          @submit.prevent="onCheckAnswerBtnClicked"
          :onFocus="onFocus"
        >
          <template v-slot:append>
            <div :class="[displayStyleIcon, questionColour]">
              <font-awesome-icon :icon="questionIcon" />
            </div>
          </template>
        </v-text-field>
        <v-btn
          name="checkAnswerBtn"
          class="button"
          rounded="lg"
          elevation="4"
          @click="onCheckAnswerBtnClicked"
        >
          Check
          <template v-slot:append>
            <div>
              <font-awesome-icon
                icon="check-circle"
                class="question-edit-colour"
              />
            </div>
          </template>
        </v-btn>
        <v-btn
          name="nextQuestionBtn"
          class="button"
          rounded="lg"
          elevation="4"
          @click="onNextQuestionBtnClicked"
        >
          Next
          <template v-slot:append>
            <div>
              <font-awesome-icon icon="forward" class="question-edit-colour" />
            </div>
          </template>
        </v-btn>
      </v-form>
      <!-- <p v-for="question in questionStore.gerundioData" :key="question.Id">
        {{ question.answer }}
      </p> -->
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { computed, ref, onBeforeMount, watch } from "vue";
import { useQuestionStore } from "@/stores/question";

const { name } = useDisplay();
const correctAnswerHint = "Correcto!";
const incorrectAnswerHint = "Incorrecto!";
const correctAnswerIconText = "check";
const incorrectAnswerIconText = "times";

var questionInputForm = ref();
var questionInputValue = ref("");
var hintText = ref("");
var questionIcon = ref("signature");
var valid = ref();
var questionStore = useQuestionStore();

onBeforeMount(async () => {
  await questionStore.importGerundioData();
  questionStore.initialiseQuestionData();
  hintText.value = questionStore.currentQuestion.hints.toString();
  questionIcon.value = questionStore.currentQuestion.icon;
});

watch(
  () => questionStore.currentQuestion.icon,
  () => {
    resetQuestionIcon();
  }
);

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
    if (value.toLowerCase() === questionStore.currentQuestion.answer) {
      valid.value = true;
      setQuestionHintAndIconCorrect();
    } else {
      if (value === "") {
        //required for default state as rules execute on mounted
        valid.value = true;
        resetQuestionHint();
        resetQuestionIcon();
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
  resetQuestionHint();
  resetQuestionIcon();
}

function resetQuestionHint(): void {
  hintText.value = questionStore.currentQuestion.hints.toString();
}

function resetQuestionIcon(): void {
  questionIcon.value = questionStore.currentQuestion.icon;
}

function resetInputValue(): void {
  questionInputValue.value = "";
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
  resetQuestionState();
}

function resetQuestionState() {
  questionInputForm.value?.resetValidation();
  valid.value = undefined;
  resetQuestionHint();
  resetQuestionIcon();
}

function onCheckAnswerBtnClicked() {
  questionInputForm.value?.validate();
}

function onNextQuestionBtnClicked() {
  resetQuestionState();
  resetInputValue();
  questionStore.next();
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
  color: hsla(160, 100%, 37%, 1);
}

.question-incorrect-colour {
  color: #b80424;
}

.button {
  margin: 10px;
}
</style>
