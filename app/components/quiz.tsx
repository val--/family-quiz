"use client";

import React, { useState } from 'react';
import Question from './question';
import Result from './result';

import { QuestionType } from '../types/custom-types';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="container max-w-2xl bg-white bg-opacity-80 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">{title}</h2>
        {!showResult ? (
          <div>
            <Question
              question={questions[currentQuestionIndex]}
              handleAnswer={handleAnswer}
            />
            <div className="flex justify-between mt-8 text-lg text-gray-700">
              <p>Votre score: <strong>{score} point(s)</strong></p>
              <p>Question {currentQuestionIndex + 1} / {questions.length}</p>
            </div>
          </div>
        ) : (
          <Result score={score} total={questions.length} />
        )}
      </div>
    </div>
  );
};

export default Quiz;
