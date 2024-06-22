import React from 'react';

interface ResultProps {
  score: number;
  total: number;
}

const Result: React.FC<ResultProps> = ({ score, total }) => {
  return (
    <div>
      <h2 className="text-xl text-white font-bold">Quiz Completed!</h2>
      <p className="mt-2">
        Your Score: {score} / {total}
      </p>
    </div>
  );
};

export default Result;
