import "../styles/globals.css";
import SessionProviderWrapper from "app/components/SessionProviderWrapper";
import Link from "next/link";
import AuthButtons from "app/components/AuthButtons";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <SessionProviderWrapper session={session}>
          <header className="w-full py-2 bg-black shadow-lg border-b border-black z-20">
            <div className="container mx-auto flex justify-between items-center px-6 h-12">
              <Link
                href="/"
                className="text-2xl font-extrabold text-white tracking-wide drop-shadow"
              >
                Family Quiz
              </Link>
              <div className="flex gap-2 items-center h-full">
                <AuthButtons />
              </div>
            </div>
          </header>
          <main className="flex-1 flex flex-col">{children}</main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
