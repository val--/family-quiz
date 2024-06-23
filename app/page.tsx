import data from './sample.json';
import data2 from './sample2.json';

import Quiz from '../components/quiz';
import { Quiz as QuizType } from './types';

export default function Home() {
  const quiz = (Math.random()>=0.5)? data : data2
  return (
    <div className="home-container flex items-center justify-center min-h-screen bg-black">
      <Quiz title={quiz.thème} questions={quiz.quizz.débutant } />
    </div>
  );
}
