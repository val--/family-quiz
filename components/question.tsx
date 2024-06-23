import React, { useState } from 'react';
import { Question as QuestionType } from '../app/types';

interface QuestionProps {
  question: QuestionType;
  handleAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, handleAnswer }) => {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionClick = (option: string) => {
    const correct = option === question.réponse;
    setActiveOption(option);
    setIsCorrect(correct);
    
    setTimeout(() => {
      handleAnswer(correct);
      setActiveOption(null); // Reset active option after handling the answer
      setIsCorrect(null); // Reset correctness state after handling the answer
    }, 500);
  };

  return (
    <div>
      <h2 className="text-xl text-white font-semibold mb-4">{question.question}</h2>
      <div className="options grid grid-cols-1 gap-2">
        {question.propositions.map((option, index) => (
          <button
            key={index}
            className={`option p-2 rounded ${
              option === activeOption
                ? isCorrect
                  ? 'bg-green-500'
                  : 'bg-red-500'
                : 'bg-blue-500'
            } text-white`}
            onClick={() => handleOptionClick(option)}
            disabled={!!activeOption} // Disable all buttons if an option is selected
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
