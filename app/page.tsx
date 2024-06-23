import data from './sample.json';
import data2 from './sample2.json';

import Quiz from '../components/quiz';
import { Question } from './types';

export default function Home() {
  const quiz = (Math.random()>=0.5)? data : data2
  const shuffle = (array: Question[]) => { 
    return array.sort(() => Math.random() - 0.5); 
};
  return (
    <div className="home-container flex items-center justify-center min-h-screen bg-black">
      <Quiz title={quiz.thème} questions={shuffle(quiz.quizz.débutant) } />
    </div>
  );
}
