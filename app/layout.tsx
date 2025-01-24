"use client";

import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import AuthButtons from "app/components/AuthButtons";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <SessionProvider>
          <header className="w-full py-2 bg-opacity-50 bg-black text-white text-center shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
              <Link href="/" className="text-white text-lg font-semibold hover:text-gray-300 transition">
                Family Quiz
              </Link>
              <AuthButtons />
            </div>
          </header>
          <main className="flex-grow">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
