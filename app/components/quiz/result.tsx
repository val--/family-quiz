import React, { useState, useEffect } from "react";
import Link from "next/link";
import { QuestionType } from "../../types/custom-types";

interface ResultProps {
  score: number;
  total: number;
  title?: string;
  logo?: string;
  questions?: QuestionType[];
  incorrectIds?: number[];
}

const Result: React.FC<ResultProps> = ({
  score,
  total,
  title,
  logo,
  questions = [],
  incorrectIds = [],
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="max-w-xl w-full bg-white/90 shadow-2xl rounded-2xl p-8 px-8 flex flex-col items-center mx-auto transition-all duration-700 transform">
      {logo && (
        <img
          src={`/images/${logo}`}
          alt={title}
          className="w-20 h-20 rounded-full object-cover mb-4 shadow mx-auto"
        />
      )}
      {title && (
        <h2 className="text-2xl font-bold mb-2 text-center text-purple-800">
          {title}
        </h2>
      )}
      <p className="text-4xl font-extrabold text-purple-700 mb-6">
        Votre score: {score} / {total}
      </p>
      {questions.length > 0 && (
        <div className="w-full mt-4">
          <ul className="space-y-2">
            {questions.map((q) => {
              const isWrong = incorrectIds.includes(q.id);
              const correctAnswer = q.answers.find((a) => a.isCorrect)?.answer;
              return (
                <li
                  key={q.id}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                    isWrong ? "bg-red-100" : "bg-green-100"
                  }`}
                >
                  <span className="text-xl">{isWrong ? "❌" : "✅"}</span>
                  <span className="flex-1 text-sm">{q.question}</span>
                  <span className="font-bold text-purple-700">
                    {correctAnswer}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <Link
        className="mt-6 inline-block bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300"
        href={`/`}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default Result;
