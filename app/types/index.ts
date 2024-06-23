export interface Question {
    question: string;
    propositions: string[];
    réponse: string;
    anecdote: string;
  }
  
  export interface Quiz {
    title: string;
    questions: Question[];
  }
  