import React, { useState } from 'react';

import { QuestionType } from '../../types/custom-types';

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

    handleAnswer(correct);

    setTimeout(() => {
      setActiveOption(null);
      setIsCorrect(null);
    }, 5000);
  };

  // Random emoji for success or failure
  const emojis = ["🎉", "👏", "💪", "✨"];
  const failureEmojis = ["😔", "😢", "💔", "🙁"];
  const successEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const failureEmoji = failureEmojis[Math.floor(Math.random() * failureEmojis.length)];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">
        {!!activeOption ? (
          <span>
            {isCorrect ? `${successEmoji} Bravo !` : `${failureEmoji} Raté ! La bonne réponse était "${question.answer}".`}
          </span>
        ) : (
          question.question
        )}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {!!activeOption ? question.anecdote : <span>&nbsp;</span>}
      </p>
      <div className="grid grid-cols-1 gap-3">
        {question.answers.map((option, index) => (
          <div key={index} className="relative">
            <button
              className={`w-full p-3 rounded-lg text-white font-medium text-center transition-all duration-300 relative overflow-hidden ${
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
              {/* Progress Bar */}
              {option === activeOption && (
                <div className="absolute inset-0">
                  <div className="progress-bar absolute bottom-0 left-0 h-1 bg-white animate-progress"></div>
                </div>
              )}
            </button>
          </div>
        ))}
      </div>
      {/* Shake animation for wrong answers and progress bar animation */}
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

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-progress {
          animation: progress 5s linear forwards;
        }

      `}</style>
    </div>
  );
};

export default Question;
