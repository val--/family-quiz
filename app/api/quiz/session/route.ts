import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { quizId, score, incorrectIds } = await request.json();

    const quizSession = await prisma.session.create({
      data: {
        userId: session.user.id,
        quizId: parseInt(quizId),
        score,
        incorrectIds,
        endTime: new Date(),
      },
    });

    return NextResponse.json(quizSession);
  } catch (error) {
    console.error("Error saving quiz session:", error);
    return NextResponse.json(
      { error: "Failed to save quiz session" },
      { status: 500 }
    );
  }
}
