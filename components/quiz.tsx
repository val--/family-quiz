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
    <div className="quiz-container w-screen m-6 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {!showResult ? (
        <div>
          <Question
            question={questions[currentQuestionIndex]}
            handleAnswer={handleAnswer}
          />
          <div className="flex flex-row mt-4">
            <div className="basis-1/2"><p>Votre score: <strong>{score} point(s)</strong></p></div>
            <div className="basis-1/2"><p>Question {currentQuestionIndex+1} / {questions.length}</p></div>
          </div>
        </div>
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </div>
  );
};

export default Quiz;
