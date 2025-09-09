// pages/index.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="wrapper">
      <div className="bg" />
      <main className="min-h-screen flex items-center justify-center px-4">
        {/* Nutze gern deine definierte Komponente .card-light aus globals.css */}
        <div className="card-light">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="mx-auto mb-6"
            priority
          />
          <h1 className="text-2xl font-semibold mb-4">Bienvenue / Willkommen</h1>
          <p className="text-gray-700 mb-6">
            Veuillez choisir votre langue / Bitte wählen Sie Ihre Sprache:
          </p>

          <div className="flex justify-center gap-6">
            <Link href="/fragebogen_de" className="btn-primary">
              Deutsch
            </Link>
            <Link href="/fragebogen_fr" className="btn-primary">
              Français
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
