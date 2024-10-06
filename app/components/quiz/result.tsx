import React, { useState, useEffect } from 'react';
import Link from "next/link";

interface ResultProps {
  score: number;
  total: number;
}

const Result: React.FC<ResultProps> = ({ score, total }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} text-center`}>
        <h2 className="text-3xl font-bold text-purple-800 mb-6">Fini !</h2>

        <p className="text-4xl font-extrabold text-gray-900 mb-4">
          Votre score: {score} / {total}
        </p>

        <Link className="mt-6 inline-block bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300" href={`/`}>
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default Result;
