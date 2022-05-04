interface Answer {
  id: number;
  label: string;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export enum PersonalityType {
  INTEROVER = "Introvert",
  EXTROVERT = "Extrovert",
}
