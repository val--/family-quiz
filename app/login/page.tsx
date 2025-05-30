"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../components/loading/LoadingSpinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      setLoading(false);
      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/profile");
      }
    } catch (err) {
      setError("Une erreur est survenue lors de la connexion");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4 min-h-0 flex-1">
      <div className="flex-1 flex items-center justify-center">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
            <h2 className="text-4xl font-bold text-purple-700 text-center mb-8">
              Connexion
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Entrez votre mot de passe"
                />
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
                disabled={loading}
              >
                {loading ? "Connexion..." : "Se connecter"}
              </button>
            </form>

            <p className="text-center text-gray-700 mt-6">
              Vous n'avez pas encore de compte ?{" "}
              <Link
                href="/register"
                className="text-purple-600 font-medium hover:underline"
              >
                Inscrivez-vous
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
        )}
      </div>
    </div>
  );
}
