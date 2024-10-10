"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold text-purple-700 text-center mb-8">
          Connexion
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
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
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
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

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-gray-700 mt-6">
          Vous n'avez pas encore de compte ?{" "}
          <Link href="/register" className="text-purple-600 font-medium hover:underline">
            Inscrivez-vous
          </Link>
        </p>

        <div className="mt-8 text-center">
          <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium hover:underline">
            Retour à la page d'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}