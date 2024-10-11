import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <header className="w-full py-4 bg-opacity-75 bg-black text-white text-center font-bold text-xl hidden">
          Family Quiz
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="w-full py-4 bg-opacity-75 bg-black text-white text-center hidden">
          © 2024 Family Quiz - All rights reserved.
        </footer>
      </body>
    </html>
  );
}
