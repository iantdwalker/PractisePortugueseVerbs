<template>
  <div class="hand-written-font" :class="questionColour">
    <v-responsive class="mx-auto">
      <v-text-field
        name="questionInputField"
        v-model="questionInputFieldValue"
        @update:modelValue="onQuestionInputFieldValueUpdated"
        class="center-text-input"
        :class="questionInputFieldDisplayStyle"
        variant="underlined"
        color="hsla(160, 100%, 37%, 1)"
        autofocus
        active
        :prefix="questionPrefix"
        :suffix="questionSuffix"
        :rules="[rules.validateAnswer]"
        validate-on="blur"
      >
        <template v-slot:append>
          <div :class="[displayStyleIcon, questionColour]">
            <font-awesome-icon :icon="questionIcon" />
          </div>
        </template>
        <template v-slot:details>
          <div>
            {{ hintText }}
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
const questionPrefix = "Eu estou";
const questionSuffix = "meu jantar";
const correctAnswer = "comendo";
const questionHint = "Gerundio...";
const correctAnswerHint = "Correcto!";
const incorrectAnswerHint = "Incorrecto!";
const questionIconText = "utensils";
const correctAnswerIconText = "check";
const incorrectAnswerIconText = "times";

var questionInputFieldValue = ref("");
var hintText = ref(questionHint);
var questionIcon = ref(questionIconText);

/* const questionInputFontColour = computed(() => {
  if (hintText.value === incorrectAnswerHint) {
    return "red";
  } else {
    return "hsla(160, 100%, 37%, 1)";
  }
}); */

const questionInputFieldDisplayStyle = computed(() => {
  console.log("display style:" + name.value);
  switch (name.value) {
    case "xs":
      return "question-font-size";
    case "sm":
      return "question-font-size-sm";
    case "md":
      return "question-font-size-md";
    case "lg":
    case "xl":
    case "xxl":
      return "question-font-size-lgPlus";
  }
  return undefined;
});

const displayStyleIcon = computed(() => {
  var style = "question-icon";
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
});

const questionColour = computed(() => {
  if (hintText.value === incorrectAnswerHint) {
    return "question-incorrect-colour";
  }
  return "question-edit-colour";
});

const rules = {
  validateAnswer: (value: string) => {
    if (value.toLowerCase() === correctAnswer) {
      hintText.value = correctAnswerHint;
      questionIcon.value = correctAnswerIconText;
      return true;
    } else {
      if (value === "") {
        hintText.value = questionHint;
        questionIcon.value = questionIconText;
        return false;
      } else {
        hintText.value = incorrectAnswerHint;
        questionIcon.value = incorrectAnswerIconText;
        return false;
      }
    }
  },
};

function onQuestionInputFieldValueUpdated(value: string): void {
  if (value !== correctAnswer) {
    hintText.value = questionHint;
    questionIcon.value = questionIconText;
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");

.hand-written-font {
  font-family: "Caveat", cursive;
  //color: hsla(160, 100%, 37%, 1);
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

.question-edit-colour {
  color: hsla(160, 100%, 37%, 1);
}

.question-incorrect-colour {
  color: #b80424;
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
