import Quiz from '../components/quiz';
import data from '../sample.json';

export default function Page() {
    return <Quiz title={data.theme} questions={data.quizz} />
  }