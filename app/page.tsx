import Image from "next/image";
import Quiz from '../components/quiz';
import { Quiz as QuizType } from './types';

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

export default function Home() {
  return (
    <div className="home-container flex items-center justify-center min-h-screen bg-black">
      <Quiz title={sampleQuiz.title} questions={sampleQuiz.questions} />
    </div>
  );
}
