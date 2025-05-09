"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Question from "./question";
import Result from "./result";
import { QuizProps } from "../../types/custom-types";

const Quiz: React.FC<QuizProps> = ({ title, logo, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [incorrectIds, setIncorrectIds] = useState<number[]>([]);
  const params = useParams();

  const saveQuizSession = async (
    finalScore: number,
    finalIncorrectIds: number[]
  ) => {
    try {
      const response = await fetch("/api/quiz/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quizId: params.id,
          score: finalScore,
          incorrectIds: finalIncorrectIds,
        }),
      });

      if (!response.ok) {
        console.error("Failed to save quiz session");
      }
    } catch (error) {
      console.error("Error saving quiz session:", error);
    }
  };

  const handleAnswer = useCallback(
    (isCorrect: boolean, questionId: number) => {
      const newScore = isCorrect ? score + 1 : score;
      const newIncorrectIds = isCorrect
        ? incorrectIds
        : [...incorrectIds, questionId];

      if (isCorrect) {
        setScore(newScore);
      } else {
        setIncorrectIds(newIncorrectIds);
      }

      const nextQuestionIndex = currentQuestionIndex + 1;

      const handleNext = async () => {
        if (nextQuestionIndex < questions.length) {
          setCurrentQuestionIndex(nextQuestionIndex);
        } else {
          setShowResult(true);
          await saveQuizSession(newScore, newIncorrectIds);
        }
      };
      setTimeout(handleNext, 5000);
    },
    [currentQuestionIndex, questions.length, score, incorrectIds, params.id]
  );

  if (!questions.length) {
    return null;
  }

  return (
    <div className="relative flex-1 flex flex-col bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="flex-1 flex flex-col items-center justify-center">
        {showResult ? (
          <Result
            score={score}
            total={questions.length}
            title={title}
            logo={logo}
            questions={questions}
            incorrectIds={incorrectIds}
          />
        ) : (
          <>
            <div className="quiz-container max-w-4xl w-full bg-white/90 shadow-2xl rounded-2xl p-8 flex flex-col items-center">
              <img
                src={`/images/${logo}`}
                alt={title}
                className="w-20 h-20 rounded-full object-cover mb-4 shadow"
              />
              <h2 className="text-2xl font-bold mb-4 text-center text-purple-800">
                {title}
              </h2>
              <div className="w-full">
                <Question
                  question={questions[currentQuestionIndex]}
                  handleAnswer={(isCorrect) =>
                    handleAnswer(isCorrect, questions[currentQuestionIndex].id)
                  }
                />
                <div className="flex justify-between mt-6 text-lg text-gray-700">
                  <p>
                    Votre score:{" "}
                    <strong>
                      {score} point{score !== 1 ? "s" : ""}
                    </strong>
                  </p>
                  <p>
                    Question {currentQuestionIndex + 1} / {questions.length}
                  </p>
                </div>
              </div>
            </div>
            <Link href="/" className="mt-6 text-white font-semibold px-6 py-2">
              J'abandonne !
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
