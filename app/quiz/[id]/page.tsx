import { prisma } from "@/lib/prisma";
import Quiz from "../../components/quiz/quiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz",
};

async function getQuizData(id: number) {
  return await prisma.quiz.findUnique({
    where: { id },
    include: {
      questions: {
        include: {
          answers: true,
        },
      },
    },
  });
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = parseInt((await params).id);

  if (isNaN(id)) {
    throw new Error("Invalid quiz ID");
  }

  const quizData = await getQuizData(id);

  if (!quizData) {
    throw new Error("Quiz not found");
  }

  // TEMP - Limit questions to 3 items
  const limitedQuestions = quizData.questions.slice(0, 3);

  return (
    <Quiz
      title={quizData.theme}
      logo={quizData.logo}
      questions={limitedQuestions}
    />
  );
}
