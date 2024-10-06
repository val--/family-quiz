import React, { useState } from 'react';

import { QuestionType } from '../types/custom-types';

interface QuestionProps {
  question: QuestionType;
  handleAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, handleAnswer }) => {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionClick = (option: string) => {
    const correct = option === question.answer;
    setActiveOption(option);
    setIsCorrect(correct);

    setTimeout(() => {
      handleAnswer(correct);
      setActiveOption(null); // Reset active option after handling the answer
      setIsCorrect(null); // Reset correctness state after handling the answer
    }, 5000);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">
        {!!activeOption ? (
          <span>{isCorrect ? "Bravo !" : `Raté ! La bonne réponse était "${question.answer}".`}</span>
        ) : (
          question.question
        )}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {!!activeOption ? question.anecdote : <span>&nbsp;</span>}
      </p>
      <div className="grid grid-cols-1 gap-3">
        {question.answers.map((option, index) => (
          <button
            key={index}
            className={`p-3 rounded-lg text-white font-medium transition-all duration-300 ${
              option === activeOption
                ? isCorrect
                  ? 'bg-green-500'
                  : 'bg-red-500 animate-shake'
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={!!activeOption}
          >
            {option}
          </button>
        ))}
      </div>
      {/* Shake animation for wrong answers */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
        }

        .animate-shake {
          animation: shake 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default Question;
