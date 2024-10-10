import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Quiz from '../components/quiz/quiz';

export default function QuizPage() {
  const router = useRouter();
  const { id } = router.query;
  const [quizData, setQuizData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      import(`../sample${id}.json`)
        .then((module) => {
          setQuizData(module.default);
        })
        .catch((error) => {
          console.error('Failed to load quiz data:', error);
        });
    }
  }, [id]);

  if (!quizData) {
    return <p>Loading...</p>;
  }

  return <Quiz title={quizData.theme} questions={quizData.quiz} />;
}