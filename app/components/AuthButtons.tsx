"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import LogoutConfirmation from "./LogoutConfirmation";

export default function AuthButtons() {
  const { data: session } = useSession();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  return (
    <div className="space-x-2 text-sm">
      {session ? (
        <>
          <Link
            href="/profile"
            className="text-white hover:text-gray-300 transition"
          >
            Profile
          </Link>
          <button
            onClick={() => setShowLogoutConfirmation(true)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
          {showLogoutConfirmation && (
            <LogoutConfirmation
              onCancel={() => setShowLogoutConfirmation(false)}
            />
          )}
        </>
      ) : (
        <>
          <Link
            href="/register"
            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
}
