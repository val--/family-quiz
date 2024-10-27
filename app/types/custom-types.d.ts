import { Quiz, Question, Answer } from "@prisma/client";

export interface Quiz {
  questions: Question[];
  theme: string;
  author: string;
}

export interface Question {
  question: string;
  answers: string[];
  anecdote: string;
}

export type QuestionType = Question & {
  answers: Answer[];
};

export interface QuizProps {
  title: string;
  logo: string;
  questions: QuestionType[];
}

export interface SampleQuiz { // From a json file, not final structure
  id: string;
  name: string;
  photo: string;
  lastScore?: number;
}
