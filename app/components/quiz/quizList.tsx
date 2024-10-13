"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SampleQuiz as Quiz } from '../../types/custom-types';
import LoadingSpinner from '../loading/LoadingSpinner';

const quizList: Quiz[] = [
  { id: "1", name: "Orthographe", photo: "/images/1.png" },
  { id: "2", name: "Les mamans", photo: "/images/2.png" },
  { id: "3", name: "Culture G", photo: "/images/3.png" },
  { id: "4", name: "Les chats", photo: "/images/4.png" },
  { id: "5", name: "Le rock gothique", photo: "/images/5.png" },
  { id: "6", name: "L'Histoire de France", photo: "/images/6.png" }
];

const getLastScores = () => 
  quizList.map((quiz) => ({
    ...quiz,
    lastScore: parseInt(localStorage.getItem(`score_${quiz.id}`) || '0', 10) || null
  }));

const QuizList = () => {
  const [quizData, setQuizData] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scores = getLastScores();
    setQuizData(scores);
    setLoading(false);
  }, []);

  const handleStartQuiz = (quiz: Quiz) => localStorage.setItem("currentUser", JSON.stringify(quiz));

  if (loading) return <div className="h-96"><LoadingSpinner /></div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center lg:h-96">
      {quizData.map((quiz) => (
        <Link key={quiz.id} href={`/quiz/${quiz.id}`} onClick={() => handleStartQuiz(quiz)}>
          <div className="relative flex flex-col items-center justify-center text-purple-900 font-semibold w-48 h-48 transition-transform transform hover:scale-110">
            <img
              src={quiz.photo}
              alt={quiz.name}
              className="w-28 h-28 rounded-full mb-2 object-cover"
              onError={(e) => (e.currentTarget.src = "/images/default-avatar.png")}
            />
            <span className="text-xl z-10">
              {quiz.name} {quiz.lastScore ? "👑" : ""}
            </span>
            <p className="text-white mt-2">{quiz.lastScore ? `Dernier score: ${quiz.lastScore}` : "Pas de score"}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuizList;
