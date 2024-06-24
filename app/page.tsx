import data from './sample3.json';

import Quiz from '../components/quiz';
import { Question } from './types';

export default function Home() {
  const shuffle = (array: Question[]) => { 
    return array.sort(() => Math.random() - 0.5); 
};
  return (
    <div className="home-container flex items-center justify-center min-h-screen min-w-screen">
      <Quiz title={data.thème} questions={shuffle(data.quizz.fr.débutant.concat(data.quizz.fr.confirmé.concat(data.quizz.fr.expert))) } />
    </div>
  );
}
