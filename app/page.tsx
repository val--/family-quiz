import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-8">Bienvenue sur Family Quiz</h1>
        <p className="text-white text-lg mb-6">Teste tes connaissances sur différents sujets!</p>
        <Link className="bg-white text-purple-700 hover:bg-purple-700 hover:text-white transition-colors duration-300 font-semibold py-3 px-6 rounded-full text-xl" href="/quiz">
            Lancer le Quiz !
        </Link>
      </div>
    </div>
  );
}
