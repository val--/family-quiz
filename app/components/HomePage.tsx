"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { app } from "../../firebase";

import QuizList from './quiz/quizList';

interface HomePageProps {
  email?: string;
}

export default function HomePage({ email }: HomePageProps) {
  
  const router = useRouter();


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-2">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-8">Bienvenue sur le {process.env.NEXT_PUBLIC_APP_NAME || "Family"} Quiz</h1>

        <p className="text-white text-xl mb-6">Choisis un thème pour tester ta culture :</p>
        <QuizList />
      </div>
    </div>
  );
}
