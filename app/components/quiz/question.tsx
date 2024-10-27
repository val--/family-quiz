import React, { useState } from 'react';
import { QuestionType } from '../../types/custom-types';

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
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900" style={{ minHeight: '3rem' }}>
        {answerState.selectedOption ? (
          <span>
            {answerState.isCorrect
              ? `${selectedEmoji} Bravo !`
              : `${selectedEmoji} Raté ! La bonne réponse était "${question.answers.find(a => a.isCorrect)?.answer}".`}
          </span>
        ) : (
          question.question
        )}
      </h3>

      <p className={`text-sm text-gray-600 mb-4 ${answerState.selectedOption ? "line-clamp-2" : ""}`} style={{ height: '2.5rem' }}>
        {answerState.selectedOption ? question.anecdote : <span>&nbsp;</span>}
      </p>

      <div className="grid grid-cols-1 gap-3">
        {question.answers.map((option, index) => (
          <button
            key={index}
            className={`w-full p-3 rounded-lg text-white font-medium text-center transition-all duration-300 relative overflow-hidden ${
              option.answer === answerState.selectedOption
                ? answerState.isCorrect
                  ? 'bg-green-500'
                  : 'bg-red-500 animate-shake'
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
            onClick={() => handleOptionClick(option.answer, option.isCorrect)}
            disabled={!!answerState.selectedOption}
          >
            {option.answer}
            {option.answer === answerState.selectedOption && (
              <div className="absolute inset-0">
                <div className="progress-bar absolute bottom-0 left-0 h-1 bg-white animate-progress"></div>
              </div>
            )}
          </button>
        ))}
      </div>

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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Question;
