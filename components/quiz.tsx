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
      <h1 className="text-3xl text-white font-bold mb-4">Quiz "{title}"</h1>
      {!showResult ? (
        <div>
        <div className="mb-6">
          <p className="text-white">Votre score: {score} point(s)</p>
          <p className="text-white">Question {currentQuestionIndex} / {questions.length}</p>
        </div>
        <Question
          question={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
        </div>
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </div>
  );
};

export default Quiz;
