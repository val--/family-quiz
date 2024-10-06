"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface FamilyMember {
  id: string;
  name: string;
  email: string;
  photo: string;
  lastScore?: number;
}

const familyMembers: FamilyMember[] = [
  {
    id: "1",
    name: "Ybba",
    email: "user@mail.com",
    photo: "/images/cardi.png",
  },
  {
    id: "2",
    name: "Adèle",
    email: "user@mail.com",
    photo: "/images/adele2.png",
  },
  {
    id: "3",
    name: "Julie",
    email: "user@mail.com",
    photo: "/images/julie.png",
  },
  {
    id: "4",
    name: "Valentin",
    email: "user@mail.com",
    photo: "/images/valentin.png",
  },
];

const getLastScores = () => {
  return familyMembers.map((member) => {
    const lastScore = localStorage.getItem(`score_${member.id}`);
    return {
      ...member,
      lastScore: lastScore ? parseInt(lastScore, 10) : null,
    };
  });
};

export default function Home() {
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [highestScorerId, setHighestScorerId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const membersWithScores = getLastScores();
    setMembers(membersWithScores);

    const highestScorer = membersWithScores.reduce((max, member) => {
      return member.lastScore && member.lastScore > (max.lastScore || 0) ? member : max;
    }, membersWithScores[0]);

    setHighestScorerId(highestScorer.id);
    setLoading(false); // Stop loading once data is fetched
  }, []);

  const handleStartQuiz = (member: FamilyMember) => {
    localStorage.setItem("currentUser", JSON.stringify(member)); // Store selected user in localStorage
  };

  if (loading) {
    return <div className="text-white text-2xl">Chargement...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-2">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-8">
          Bienvenue sur le {process.env.NEXT_PUBLIC_APP_NAME || "Family"} Quiz <span>🐱</span>
        </h1>
        <p className="text-white text-xl mb-6">
          Choisis un membre de la famille pour commencer le quiz ! Qui es-tu ?
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {members.map((member) => (
            <Link
              key={member.id}
              href={`/quiz/`}
              onClick={() => handleStartQuiz(member)}
              className="relative flex flex-col items-center justify-center text-purple-900 hover:text-white transition-all duration-300 font-semibold w-48 h-48 hover:scale-110"
            >
              <img
                src={member.photo}
                alt={`Photo de ${member.name}`}
                className="w-28 h-28 rounded-full mb-2 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/default-avatar.png";
                }}
              />
              <span className="z-10 text-xl">
                {member.name}
                {highestScorerId === member.id && <span> 👑</span>}
              </span>
              <p className="text-white mt-2">
                {member.lastScore !== null ? `Dernier score: ${member.lastScore}` : "Pas de score"}
              </p>
              <div className="absolute inset-0 bg-white opacity-0 rounded-full hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
