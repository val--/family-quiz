import Quiz from '../components/quiz/quiz';
import data from '../sample2.json';

export default function Page() {
    return <Quiz title={data.theme} questions={data.quiz.slice(0, 2)} />
  }