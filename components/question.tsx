import React from 'react';
import { Question as QuestionType } from '../app/types';

interface QuestionProps {
  question: QuestionType;
  handleAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, handleAnswer }) => {
  const handleOptionClick = (option: string) => {
    handleAnswer(option === question.réponse);
  };

  return (
    <div>
      <h2 className="text-xl text-white font-semibold mb-4">{question.question}</h2>
      <div className="options grid grid-cols-1 gap-2">
        {question.propositions.map((option, index) => (
          <button
            key={index}
            className="option bg-blue-500 text-white p-2 rounded"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
