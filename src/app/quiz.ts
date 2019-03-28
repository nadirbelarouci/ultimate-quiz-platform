export class Question {
  id: number;
  question: string;
  choices: string[];
  answer: number;
}

export enum Difficulty {
  EASY, MEDIUM, HARD
}

export class Quiz {
  id: number;
  name: string;
  questions: Question[];
  duration: number;
  difficulty: Difficulty;
}
