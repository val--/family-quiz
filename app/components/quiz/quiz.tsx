"use client";

import React, { useState, useEffect } from 'react';
import Question from './question';
import Result from './result';

import { QuestionType } from '../../types/custom-types';

interface QuizProps {
  title: string;
  questions: QuestionType[];
}

const Quiz: React.FC<QuizProps> = ({ title, questions }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [nextQuestionIndex, setNextQuestionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const shuffleArray = (array: QuestionType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setShuffledQuestions(shuffleArray([...questions]));
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);
  }, [questions]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestionIdx = currentQuestionIndex + 1;

    if (nextQuestionIdx < shuffledQuestions.length) {
      setNextQuestionIndex(nextQuestionIdx);
      setTimeout(() => {
        setCurrentQuestionIndex(nextQuestionIdx); // Update the actual question index after timeout
        setNextQuestionIndex(null); // Reset the nextQuestionIndex
      }, 5000);
    } else {
      setTimeout(() => {
        setShowResult(true);
        if (currentUser) {
          localStorage.setItem(`score_${currentUser.id}`, (score + (isCorrect ? 1 : 0)).toString());
        }
      }, 5000);
    }
  };

  if (!shuffledQuestions.length) {
    return <div>Loading...</div>; // Avoid rendering before the questions are loaded
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      {currentUser && (
        <div className="w-full flex items-center justify-start p-4 bg-white bg-opacity-80 shadow-lg">
          <img
            src={currentUser.photo}
            alt={`Photo de ${currentUser.name}`}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-purple-800">{currentUser.name}</h2>
            <p className="text-lg text-gray-600">Score actuel: {score}</p>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center flex-grow">
        <div className="container max-w-2xl bg-white bg-opacity-80 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-800">{title}</h2>
          {!showResult ? (
            <div>
              <Question
                question={shuffledQuestions[currentQuestionIndex]}
                handleAnswer={handleAnswer}
              />
              <div className="flex justify-between mt-6 text-lg text-gray-700">
                <p>Votre score: <strong>{score} point(s)</strong></p>
                <p>
                  Question {nextQuestionIndex !== null ? currentQuestionIndex + 1 : currentQuestionIndex + 1} / {shuffledQuestions.length}
                </p>
              </div>
            </div>
          ) : (
            <Result score={score} total={shuffledQuestions.length} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
