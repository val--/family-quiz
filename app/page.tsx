import Link from "next/link";
import { SampleQuiz as Quiz } from './types/custom-types';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getQuizList() {
  return await prisma.quiz.findMany();
}

const quizList = await getQuizList();

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-2">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-8">
          Bienvenue sur le {process.env.NEXT_PUBLIC_APP_NAME || "Family"} Quiz
        </h1>

        <p className="text-white text-xl mb-6">Choisis un thème pour tester ta culture :</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {quizList && quizList.map((quiz) => (
            <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
              <div className="relative flex flex-col items-center justify-center text-purple-900 font-semibold w-48 h-48 transition-transform transform hover:scale-110">
                <img
                  src={`/images/${quiz.logo}`}
                  alt={quiz.theme}
                  className="w-28 h-28 rounded-full mb-2 object-cover"
                />
                <span className="text-xl z-10">
                  {quiz.theme}
                </span>
                <p className="text-white mt-2 hidden">{quiz.id ? `Dernier score: ${quiz.id}` : "Pas de score"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}