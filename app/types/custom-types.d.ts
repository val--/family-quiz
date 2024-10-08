export interface QuestionType {
    question: string;
    answers: string[];
    answer: string;
    anecdote: string;
}

export interface GuestMember {
    id: string;
    name: string;
    email: string;
    photo: string;
    lastScore?: number;
  }