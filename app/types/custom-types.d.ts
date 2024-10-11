export interface QuestionType {
    question: string;
    answers: string[];
    answer: string;
    anecdote: string;
}

export interface SampleQuiz { // From a json file, not final structure
    id: string;
    name: string;
    photo: string;
    lastScore?: number;
  }