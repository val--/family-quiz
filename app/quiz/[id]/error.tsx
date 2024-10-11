'use client'

import Link from 'next/link';

export default function QuizError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4">
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold mb-4">Oups ! Quelque chose a mal tourné</h2>
          <p className="text-white text-lg mb-6">
            Une erreur est survenue. Veuillez réessayer ou contactez le support si le problème persiste.
          </p>
          <p className="text-white mb-6">
            Voici l'erreur technique : "{error?.message || 'Erreur inconnue'}"
          </p>
        <Link className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg" href="/">
        Retour à l'accueil
        </Link>
        </div>
      </body>
    </html>
  )
}
