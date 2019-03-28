import {Difficulty, Quiz} from './quiz';

export const QUIZZES: Quiz[] = [
  {
    id: 1, name: 'angular', duration: 20, difficulty: Difficulty.EASY, questions: [
      {id: 1, question: 'What is angular', choices: ['a', 'b', 'c', 'd'], answer: 0},
      {id: 2, question: 'What is a component', choices: ['a', 'b', 'c', 'd'], answer: 3},
      {id: 3, question: 'What is a directive', choices: ['a', 'b', 'c', 'd'], answer: 1},
      {id: 4, question: 'What is a service', choices: ['a', 'b', 'c', 'd'], answer: 2}

    ]
  },
  {
    id: 1, name: 'java', duration: 20, difficulty: Difficulty.HARD, questions: [
      {id: 1, question: 'What is java', choices: ['a', 'b', 'c', 'd'], answer: 0},
      {id: 2, question: 'What is a class', choices: ['a', 'b', 'c', 'd'], answer: 3},
      {id: 3, question: 'What is an object', choices: ['a', 'b', 'c', 'd'], answer: 1},
      {id: 4, question: 'What is encapsulation', choices: ['a', 'b', 'c', 'd'], answer: 2}

    ]
  },
  {
    id: 1, name: 'python', duration: 20, difficulty: Difficulty.MEDIUM, questions: [
      {id: 1, question: 'What is python', choices: ['a', 'b', 'c', 'd'], answer: 0},
      {id: 2, question: 'What is a lambda', choices: ['a', 'b', 'c', 'd'], answer: 3},
      {id: 3, question: 'What is a tuple', choices: ['a', 'b', 'c', 'd'], answer: 1},
      {id: 4, question: 'What is a module', choices: ['a', 'b', 'c', 'd'], answer: 2}

    ]
  }, {
    id: 1, name: 'angular', duration: 20, difficulty: Difficulty.EASY, questions: [
      {id: 1, question: 'What is angular', choices: ['a', 'b', 'c', 'd'], answer: 0},
      {id: 2, question: 'What is a component', choices: ['a', 'b', 'c', 'd'], answer: 3},
      {id: 3, question: 'What is a directive', choices: ['a', 'b', 'c', 'd'], answer: 1},
      {id: 4, question: 'What is a service', choices: ['a', 'b', 'c', 'd'], answer: 2}

    ]
  },
  {
    id: 1, name: 'java', duration: 20, difficulty: Difficulty.HARD, questions: [
      {id: 1, question: 'What is java', choices: ['a', 'b', 'c', 'd'], answer: 0},
      {id: 2, question: 'What is a class', choices: ['a', 'b', 'c', 'd'], answer: 3},
      {id: 3, question: 'What is an object', choices: ['a', 'b', 'c', 'd'], answer: 1},
      {id: 4, question: 'What is encapsulation', choices: ['a', 'b', 'c', 'd'], answer: 2}

    ]
  },
  {
    id: 1, name: 'python', duration: 20, difficulty: Difficulty.MEDIUM, questions: [
      {id: 1, question: 'What is python', choices: ['a', 'b', 'c', 'd'], answer: 0},
      {id: 2, question: 'What is a lambda', choices: ['a', 'b', 'c', 'd'], answer: 3},
      {id: 3, question: 'What is a tuple', choices: ['a', 'b', 'c', 'd'], answer: 1},
      {id: 4, question: 'What is a module', choices: ['a', 'b', 'c', 'd'], answer: 2}

    ]
  }

];
