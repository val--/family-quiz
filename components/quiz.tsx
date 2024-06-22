"use client";

import React, { useState } from 'react';
import { Question as QuestionType } from '../app/types';
import Question from './question';
import Result from './result';

interface QuizProps {
  title: string;
  questions: QuestionType[];
}

const Quiz: React.FC<QuizProps> = ({ title, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container p-4 bg-grey rounded-lg shadow-lg">
      <h1 className="text-2xl text-white font-bold mb-4">{title}</h1>
      {!showResult ? (
        <Question
          question={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </div>
  );
};

export default Quiz;
