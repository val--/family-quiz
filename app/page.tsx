"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { SampleQuiz as Quiz } from './types/custom-types';

const quizList: Quiz[] = [
  {
    id: "1",
    name: "Orthographe",
    photo: "/images/1.png",
  },
  {
    id: "2",
    name: "Les mamans",
    photo: "/images/2.png",
  },
  {
    id: "3",
    name: "Culture G",
    photo: "/images/3.png",
  },
  {
    id: "4",
    name: "Les chats",
    photo: "/images/4.png",
  }
];

const getLastScores = () => {
  return quizList.map((member) => {
    const lastScore = localStorage.getItem(`score_${member.id}`);
    return {
      ...member,
      lastScore: lastScore ? parseInt(lastScore, 10) : null,
    };
  });
};

export default function Home() {
  const [quizList, setQuiz] = useState<Quiz[]>([]);
  const [highestScorerId, setHighestScorerId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const membersWithScores = getLastScores();
    setQuiz(membersWithScores);

    const highestScorer = membersWithScores.reduce((max, member) => {
      return member.lastScore && member.lastScore > (max.lastScore || 0) ? member : max;
    }, membersWithScores[0]);

    setHighestScorerId(highestScorer.id);
    setLoading(false);
  }, []);

  const handleStartQuiz = (guest: Quiz) => {
    localStorage.setItem("currentUser", JSON.stringify(guest));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-2">
      <div className="text-center">

        <h1 className="text-white text-5xl font-bold mb-8">
          Bienvenue sur le {process.env.NEXT_PUBLIC_APP_NAME || "Family"} Quiz
        </h1>

        <div className="hidden">
          <p className="text-white text-xl mb-6">
            Tu dois te connecter pour jouer et sauvegarder ton score !
          </p>

          <div className="mb-16">
            <Link  className="text-white bg-purple-600 hover:bg-purple-700 font-semibold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg" href="/login">
                Connexion
            </Link>
            <Link className="text-white bg-pink-600 hover:bg-pink-700 font-semibold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg" href="/register">
                Inscription
            </Link>
          </div>
        </div>

        <p className="text-white text-xl mb-6">
          Choisis un thème pour tester ta culture :
        </p>

        <div className={`grid grid-cols-2 sm:grid-cols-2 gap-6 place-items-center ${quizList.length === 1 ? 'md:grid-cols-1' : quizList.length === 2 ? 'md:grid-cols-2' : quizList.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
          {quizList.map((quiz) => (
            <Link
              key={quiz.id}
              href={`/quiz/${quiz.id}`}
              onClick={() => handleStartQuiz(quiz)}
              className="relative flex flex-col items-center justify-center text-purple-900 transition-all duration-300 font-semibold w-48 h-48 hover:scale-110"
            >
              <img
                src={quiz.photo}
                alt={`Photo de ${quiz.name}`}
                className="w-28 h-28 rounded-full mb-2 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/default-avatar.png";
                }}
              />
              <span className="z-10 text-xl">
                {quiz.name}
                {(quiz.lastScore !== null && quiz.lastScore !== 0) && <span> 👑</span>}
              </span>
              <p className="text-white mt-2">
                {quiz.lastScore !== null ? `Dernier score: ${quiz.lastScore}` : "Pas de score"}
              </p>
              <div className="absolute inset-0 opacity-0 rounded-full hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
