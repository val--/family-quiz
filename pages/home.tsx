import React from 'react';
import Quiz from '../components/quiz';
import { Quiz as QuizType } from '../app/types';

const sampleQuiz: QuizType = {
  title: "Sample Quiz",
  questions: [
    {
      questionText: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      questionText: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
  ],
};

const Home: React.FC = () => {
  return (
    <div className="home-container flex items-center justify-center min-h-screen bg-gray-100">
      <Quiz title={sampleQuiz.title} questions={sampleQuiz.questions} />
    </div>
  );
};

export default Home;
