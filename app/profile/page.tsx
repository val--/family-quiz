"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 rounded-lg text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Profile</h1>
      {session ? (
        <div className="text-center">
          <p className="text-lg font-medium">
            Welcome, <span className="font-bold">{session.user?.name || session.user?.email}</span> 🎉
          </p>
          <p className="text-sm text-gray-300 mt-2">Email: {session.user?.email}</p>

          <div className="mt-6 space-y-4">
            <Link
              href="/"
              className="block bg-blue-500 hover:bg-blue-600 transition text-white py-2 px-4 rounded-md text-center"
            >
              Go to Homepage
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="block bg-red-500 hover:bg-red-600 transition text-white py-2 px-4 rounded-md w-full"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg">You are not logged in.</p>
          <Link
            href="/login"
            className="mt-4 inline-block bg-green-500 hover:bg-green-600 transition text-white py-2 px-6 rounded-md"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
