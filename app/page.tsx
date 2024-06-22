import data from './sample.json';
import Quiz from '../components/quiz';
import { Quiz as QuizType } from './types';

export default function Home() {
  return (
    <div className="home-container flex items-center justify-center min-h-screen bg-black">
      <Quiz title="Quiz Test" questions={data.quizz.débutant} />
    </div>
  );
}
