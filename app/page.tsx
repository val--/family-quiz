"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LoadingSpinner from './components/loading/LoadingSpinner';
import { SampleQuiz as Quiz } from './types/custom-types';

// Quiz data list - for now we use some json files.
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

export default function Home() {
  const [quizData, setQuizData] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scores = getLastScores();
    setQuizData(scores);
    setLoading(false);
  }, []);

  const handleStartQuiz = (quiz: Quiz) => localStorage.setItem("currentUser", JSON.stringify(quiz));

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-2">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-8">
          Bienvenue sur le {process.env.NEXT_PUBLIC_APP_NAME || "Family"} Quiz
        </h1>
        <p className="text-white text-xl mb-6">Choisis un thème pour tester ta culture :</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
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
      </div>
    </div>
  );
}
