import "../styles/globals.css";
import SessionProviderWrapper from "app/components/SessionProviderWrapper";
import Link from "next/link";
import AuthButtons from "app/components/AuthButtons";
import { getServerSession } from "next-auth";

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <SessionProviderWrapper session={session}>
          <header className="w-full py-2 bg-opacity-50 bg-black text-white text-center shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
              <Link href="/" className="text-white text-lg font-semibold hover:text-gray-300 transition">
                Family Quiz
              </Link>
              <AuthButtons />
            </div>
          </header>
          <main className="flex-grow">{children}</main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
