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
      
      <h3 className="text-m font-semibold mb-2">{!!activeOption ? ( <span> {isCorrect ? ("Bravo !") : "Raté ! La bonne réponse était \"" + question.answer+"\"."}</span>) : question.question}</h3>
      <div className="text-xs mb-2">{!!activeOption ? ( question.anecdote) : <div>&nbsp;</div>}</div>
      <div className="options grid grid-cols-1 gap-2">
        {question.answers.map((option, index) => (
          <button
            key={index}
            className={`option p-2 rounded transition ease-out delay-50 bg-blue-500 duration-30 ${
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