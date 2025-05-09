import React, { useState } from "react";
import { QuestionType } from "../../types/custom-types";

interface QuestionProps {
  question: QuestionType;
  handleAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, handleAnswer }) => {
  const [answerState, setAnswerState] = useState<{
    selectedOption: string | null;
    isCorrect: boolean | null;
  }>({ selectedOption: null, isCorrect: null });

  const handleOptionClick = (selectedAnswer: string, isCorrect: boolean) => {
    setAnswerState({ selectedOption: selectedAnswer, isCorrect });
    handleAnswer(isCorrect);
    setTimeout(() => {
      setAnswerState({ selectedOption: null, isCorrect: null });
    }, 5000);
  };

  const emojis = ["🎉", "👏", "💪", "✨", "😎", "😀"];
  const failureEmojis = ["😔", "😢", "💔", "🙁", "💩", "😤"];
  const selectedEmoji = answerState.isCorrect
    ? emojis[Math.floor(Math.random() * emojis.length)]
    : failureEmojis[Math.floor(Math.random() * failureEmojis.length)];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {question.question}
        </h3>
        <div className="mb-4 min-h-[40px] flex items-center justify-center">
          {question.anecdote && answerState.selectedOption ? (
            <p className="text-sm text-gray-600 italic">{question.anecdote}</p>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {question.answers.map((answer) => {
          const isSelected = answerState.selectedOption === answer.answer;
          const isAnswered = answerState.selectedOption !== null;
          let buttonColor = "bg-purple-500 text-white";
          if (isAnswered && isSelected) {
            buttonColor = answerState.isCorrect
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white";
          } else if (isAnswered) {
            buttonColor = "bg-purple-500 text-white opacity-70";
          }
          return (
            <div key={answer.id} className="relative">
              <button
                onClick={() =>
                  handleOptionClick(answer.answer, answer.isCorrect)
                }
                disabled={isAnswered}
                className={`w-full p-4 rounded-xl text-left font-semibold transition-all duration-200 border-2 ${buttonColor} ${
                  !isAnswered ? "hover:bg-purple-600" : ""
                } ${isAnswered ? "cursor-not-allowed" : ""}`}
              >
                {answer.answer}
              </button>
              {/* Loading bar under selected answer */}
              {isSelected && isAnswered && (
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-transparent overflow-hidden rounded-b-xl">
                  <div
                    className="h-full bg-white animate-loading-bar"
                    style={{ animationDuration: "5s" }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center text-2xl animate-bounce min-h-[32px]">
        {answerState.selectedOption && (
          <span className="text-purple-700">{selectedEmoji}</span>
        )}
      </div>
    </div>
  );
};

export default Question;
