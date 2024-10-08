"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { GuestMember } from './types/custom-types';

const guests: GuestMember[] = [
  {
    id: "guest",
    name: "Invité",
    email: "guest@mail.com",
    photo: "/images/guest.png",
  }
];

const getLastScores = () => {
  return guests.map((member) => {
    const lastScore = localStorage.getItem(`score_${member.id}`);
    return {
      ...member,
      lastScore: lastScore ? parseInt(lastScore, 10) : null,
    };
  });
};

export default function Home() {
  const [guests, setGuests] = useState<GuestMember[]>([]);
  const [highestScorerId, setHighestScorerId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const membersWithScores = getLastScores();
    setGuests(membersWithScores);

    const highestScorer = membersWithScores.reduce((max, member) => {
      return member.lastScore && member.lastScore > (max.lastScore || 0) ? member : max;
    }, membersWithScores[0]);

    setHighestScorerId(highestScorer.id);
    setLoading(false);
  }, []);

  const handleStartQuiz = (guest: GuestMember) => {
    localStorage.setItem("currentUser", JSON.stringify(guest));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-2">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-8">
          Bienvenue sur le {process.env.NEXT_PUBLIC_APP_NAME || "Family"} Quiz <span>🐱</span>
        </h1>
        <p className="text-white text-xl mb-6">
          Choisis un membre de la famille pour commencer le quiz ! Qui es-tu ?
        </p>

        <div className={`grid grid-cols-2 sm:grid-cols-2 gap-6 place-items-center ${guests.length === 1 ? 'md:grid-cols-1' : guests.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-4'}`}>
          {guests.map((guest) => (
            <Link
              key={guest.id}
              href={`/quiz/`}
              onClick={() => handleStartQuiz(guest)}
              className="relative flex flex-col items-center justify-center text-purple-900 transition-all duration-300 font-semibold w-48 h-48 hover:scale-110"
            >
              <img
                src={guest.photo}
                alt={`Photo de ${guest.name}`}
                className="w-28 h-28 rounded-full mb-2 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/default-avatar.png";
                }}
              />
              <span className="z-10 text-xl">
                {guest.name}
                {(highestScorerId === guest.id && guest.lastScore !== null) && <span> 👑</span>}
              </span>
              <p className="text-white mt-2">
                {guest.lastScore !== null ? `Dernier score: ${guest.lastScore}` : "Pas de score"}
              </p>
              <div className="absolute inset-0 opacity-0 rounded-full hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
