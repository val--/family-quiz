import { PrismaClient, Quiz as QuizModel, Question as QuestionModel, Answer as AnswerModel } from "@prisma/client";
import Quiz from "../../components/quiz/quiz";

const prisma = new PrismaClient();

async function getQuizData(id: string) {
  const quiz = await prisma.quiz.findUnique({
    where: { id: parseInt(id) },
    include: {
      questions: {
        include: {
          answers: true,
        },
      },
    },
  });
  return quiz;
}

export default async function QuizPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const quizData = await getQuizData(id);

  if (!quizData) {
    throw new Error("Quiz not found");
  }

  return (
    <Quiz
      title={quizData.theme}
      logo={quizData.logo}
      questions={quizData.questions}
    />
  );
}
