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
        {question.answers.map((answer) => (
          <button
            key={answer.id}
            onClick={() => handleOptionClick(answer.answer, answer.isCorrect)}
            disabled={answerState.selectedOption !== null}
            className={`w-full p-4 rounded-xl text-left font-semibold transition-all duration-200 border-2 transform
              ${
                answerState.selectedOption === answer.answer
                  ? answer.isCorrect
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-red-500 text-white shadow-lg"
                  : "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 text-white hover:scale-105 transition-transform"
              }
            `}
          >
            {answer.answer}
          </button>
        ))}
      </div>

      <div className="text-center text-2xl animate-bounce min-h-[32px]">
        {answerState.selectedOption && (
          <span
            className={
              answerState.isCorrect ? "text-green-500" : "text-red-500"
            }
          >
            {selectedEmoji}
          </span>
        )}
      </div>
    </div>
  );
};

export default Question;
