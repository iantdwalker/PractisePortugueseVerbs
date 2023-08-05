import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import type { Question } from "@/models/question";
import shuffle from "@/utilities/shuffle";

export const useQuestionStore = defineStore("question", () => {
  let gerundioData: Question[];
  const questions = ref<Question[]>();
  const questionIndex = ref(0);
  const currentQuestion: Question = reactive({
    id: "",
    prefix: "",
    answer: "",
    suffix: "",
    hints: [""],
    pronouns: [""],
    infinitive: "",
    type: "",
    verbEnding: "",
    icon: "signature",
    alternativeVerbs: [""],
    alternativeVerbAnswers: [""],
  });

  async function importGerundioData(): Promise<void> {
    const modules = import.meta.glob("@/assets/data/gerundio.json");
    for (const path in modules) {
      await modules[path]().then((mod: any) => {
        gerundioData = mod.default as Question[];
      });
    }
  }

  function initialiseQuestionData(): void {
    questions.value = shuffle(gerundioData) as Question[];
    next();
  }

  function next(): void {
    if (questions.value && questionIndex.value < questions.value.length) {
      updateQuestion(questions.value[questionIndex.value]);
      questionIndex.value++;
    }
  }

  function updateQuestion(newQuestion: Question): void {
    currentQuestion.id = newQuestion.id;
    currentQuestion.prefix = newQuestion.prefix;
    currentQuestion.answer = newQuestion.answer;
    currentQuestion.suffix = newQuestion.suffix;
    currentQuestion.hints = newQuestion.hints;
    currentQuestion.pronouns = newQuestion.pronouns;
    currentQuestion.infinitive = newQuestion.infinitive;
    currentQuestion.type = newQuestion.type;
    currentQuestion.verbEnding = newQuestion.verbEnding;
    currentQuestion.icon = newQuestion.icon;
    currentQuestion.alternativeVerbs = newQuestion.alternativeVerbs;
    currentQuestion.alternativeVerbAnswers = newQuestion.alternativeVerbAnswers;
  }

  return { importGerundioData, initialiseQuestionData, next, currentQuestion };
});
