import { ref } from "vue";
import { defineStore } from "pinia";
import type { Question } from "@/models/question";

export const useQuestionStore = defineStore("question", () => {
  const gerundioData = ref();

  async function importGerundioData(): Promise<void> {
    const modules = import.meta.glob("@/assets/data/gerundio.json");
    for (const path in modules) {
      await modules[path]().then((mod: any) => {
        gerundioData.value = mod.default as Question[];
      });
    }
  }

  return { gerundioData, importGerundioData };
});
