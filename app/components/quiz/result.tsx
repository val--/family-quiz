import React from 'react';

interface ResultProps {
  score: number;
  total: number;
}

const Result: React.FC<ResultProps> = ({ score, total }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Fini !</h2>
      <p className="mt-2">
        Votre score: {score} / {total}
      </p>
    </div>
  );
};

export default Result;