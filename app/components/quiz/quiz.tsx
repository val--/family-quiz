"use client";

import React, { useState, useCallback } from 'react';
import Link from "next/link";
import Question from './question';
import Result from './result';
import { QuizProps } from '../../types/custom-types';

const Quiz: React.FC<QuizProps> = ({ title, logo, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = useCallback(
    (isCorrect: boolean) => {
      if (isCorrect) setScore((prev) => prev + 1);

      const nextQuestionIndex = currentQuestionIndex + 1;

      const handleNext = () => {
        if (nextQuestionIndex < questions.length) {
          setCurrentQuestionIndex(nextQuestionIndex);
        } else {
          setShowResult(true);
        }
      };
      setTimeout(handleNext, 5000);
    },
    [currentQuestionIndex, questions.length]
  );

  if (!questions.length) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      {questions[currentQuestionIndex] && (
        <div className="w-full flex items-center justify-start p-4 bg-white bg-opacity-80 shadow-lg">
          <img
            src={`/images/${logo}`}
            alt={`Photo pour le quiz ${title}`}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-purple-800">{title}</h2>
            <p className="text-lg text-gray-600">Score { showResult ? 'final' : 'actuel' } : {score} point{score !== 1 ? 's' : ''}</p>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center flex-grow">
        <div className="quiz-container lg:min-w-[675px] lg:min-h-[500px] sm:min-w-[475px] sm:min-h-[500px] max-w-2xl bg-white bg-opacity-80 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-800">{title}</h2>
          {!showResult ? (
            <div>
              <Question
                question={questions[currentQuestionIndex]}
                handleAnswer={handleAnswer}
              />
              <div className="flex justify-between mt-6 text-lg text-gray-700">
                <p>Votre score: <strong>{score} point{score !== 1 ? 's' : ''}</strong></p>
                <p>Question {currentQuestionIndex + 1} / {questions.length}</p>
              </div>
            </div>
          ) : (
            <Result score={score} total={questions.length} />
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {!showResult && <Link href="/" className="inline-block text-white font-semibold py-2 px-6">J'abandonne ! (retour à l'accueil)</Link>}
      </div>
    </div>
  );
};

export default Quiz;
