"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LogoutConfirmationProps {
  onCancel: () => void;
}

export default function LogoutConfirmation({
  onCancel,
}: LogoutConfirmationProps) {
  const router = useRouter();

  useEffect(() => {
    // Lock scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Etes-vous sûr de vouloir vous déconnecter ?
        </h2>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
          >
            Oui
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
}
