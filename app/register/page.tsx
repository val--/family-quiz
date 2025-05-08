"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    if (password !== confirmation) {
      setError("Passwords don't match");
      return;
    }

    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      router.push("/login");
    } else {
      setError("Failed to register. Please try again.");
    }
  }

  return (
    <main className="flex flex-col bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4 min-h-0 flex-1">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-4xl font-bold text-purple-700 text-center mb-8">
            Créer mon compte
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Nom
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="Entrez votre nom"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Adresse Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="Entrez votre email"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="Créez un mot de passe"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="confirm-password"
              >
                Confirmer le mot de passe
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="Confirmez votre mot de passe"
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Créer mon compte
            </button>
          </form>

          <p className="text-center text-gray-700 mt-6">
            Vous avez déjà un compte ?{" "}
            <Link
              href="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Connectez-vous
            </Link>
          </p>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-purple-600 font-medium hover:underline"
            >
              Retour à la page d'accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
