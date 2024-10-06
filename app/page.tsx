"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface FamilyMember {
  id: string;
  name: string;
  email: string;
  photo: string;
  lastScore?: number; // Optional because it might not exist initially
}

const familyMembers: FamilyMember[] = [
  {
    id: "1",
    name: "Abby",
    email: "user@mail.com",
    photo: "/images/abby.png",
  },
  {
    id: "2",
    name: "Adèle",
    email: "user@mail.com",
    photo: "/images/adele.png",
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
      lastScore: lastScore ? parseInt(lastScore, 10) : 0,
    };
  });
};

export default function Home() {
  const [members, setMembers] = useState(familyMembers);

  // Load last scores from localStorage
  useEffect(() => {
    const membersWithScores = getLastScores();
    setMembers(membersWithScores);
  }, []);

  // Save the selected user in localStorage and navigate to the quiz page
  const handleStartQuiz = (member) => {
    localStorage.setItem("currentUser", JSON.stringify(member)); // Store the user info
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-8">Bienvenue sur Family Quiz</h1>
        <p className="text-white text-lg mb-6">Choisis un membre de la famille pour commencer un quiz !</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {members.map((member) => (
            <Link
              key={member.id}
              href={`/quiz/`}
              onClick={() => handleStartQuiz(member)}
              className="relative flex flex-col items-center justify-center text-purple-700 hover:text-white transition-all duration-300 font-semibold w-48 h-48 rounded-full hover:bg-purple-700 hover:scale-105"
            >
              <img
                src={member.photo}
                alt={`Photo de ${member.name}`}
                className="w-28 h-28 rounded-full mb-2 object-cover"
              />
              <span className="z-10 text-xl">{member.name}</span>
              <p className="text-white mt-2">{member.lastScore ? `Dernier score: ${member.lastScore}` : "Pas de score"}</p>
              <div className="absolute inset-0 bg-white opacity-0 rounded-full hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
