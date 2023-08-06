export interface Question {
  id: string;
  prefix: string;
  answer: string;
  suffix: string;
  hints: string[];
  pronouns: string[];
  infinitive: string;
  type: string;
  verbEnding: string;
  icon: string;
  alternativeVerbs: string[];
  alternativeVerbAnswers: string[];
}
