"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Quiz = dynamic(() => import('../../components/quiz/quiz'));

export default function QuizPage() {
  const { id } = useParams();
  const [quizData, setQuizData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      import(`../../sample${id}.json`).then((jsonData) => {
        setQuizData(jsonData.default);
      }).catch((error) => {
        console.log(error);
        setError(true);
      });
    }
  }, [id]);

  if (error) {
    throw new Error("Failed to load quiz data");
  }

  if (!quizData) {
    return null; // Return loading state here if needed?
  }

  return <Quiz title={quizData.theme} questions={quizData.quiz} />
}
