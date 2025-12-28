import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full pt-20 pb-16 px-4 sm:px-6 lg:px-8 mt-[100px]"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #D7D2CB)",
      }}
    >
      <div className="max-w-4xl mx-auto space-y-8 text-black">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-dark"
          style={{ color: "#00249C" }}
        >
          Vorausschauend handeln – für eine starke Produktion von morgen.
        </h1>

        {/* Abschnitt 1 — Vorlage */}
        <div className="space-y-4 text-justify text-base md:text-xl">
          <p className="hyphens-auto break-words">
            <strong>t4s (technology for solutions)</strong> transformiert KI-Technologien für die fertigende Industrie in
            wertgenerierende Systeme. Langfristig verfolgt t4s die Vision, als Engineering-Partner KI-Lösungen in
            unterschiedlichste industrielle Anwendungen zu übertragen.
          </p>
          <p className="hyphens-auto break-words">
            Der Fokus liegt auf intelligentem Monitoring der Fertigungsprozesse: Die Performance Ihrer Produktion in
            Echtzeit sichtbar machen – für kürzere Durchlaufzeiten, präzisere Planung und höhere Profitabilität.
          </p>
        </div>

        {/* Abschnitt 2 — Nutzenpunkte */}
        <div className="space-y-4 text-justify text-base md:text-xl">
          <h2 className="text-xl font-bold hyphens-auto break-words">
            Im dynamischen Umfeld der Fertigungsindustrie liefert das t4s‑System klare Antworten in Echtzeit:
          </h2>

          <ul className="list-disc list-outside pl-6 space-y-1">
            <li>welche Prozesse sofortige Aufmerksamkeit erfordern,</li>
            <li>den Deckungsbeitrag Ihrer Produkte – aktuell, rückblickend und in der Prognose,</li>
            <li>die Trendanalyse: Welche Artikel im Zeitverlauf an Margenstärke gewinnen oder verlieren,</li>
            <li>welche Investitionen unmittelbar die EBIT‑Marge stärken,</li>
            <li>strategische Optionen für ein Portfolio-Management mit Fokus auf rentable Produkte.</li>
          </ul>

          <p className="hyphens-auto break-words">
            So behalten Sie jederzeit den Überblick – und sichern die Zukunftsfähigkeit Ihrer Produktion.
          </p>
        </div>

        {/* Abschnitt 3 — Komplexität */}
        <div className="space-y-4 text-justify text-base md:text-xl">
          <h2 className="text-xl font-bold">Komplexität bremst Prozesse</h2>
          <p className="hyphens-auto break-words">
            Je mehr Teilprozesse eine Produktion durchläuft, desto höher die Wahrscheinlichkeit für Verzögerungen.
          </p>
          <p className="hyphens-auto break-words">
            Das Prozessdiagramm zeigt eine typische Verkettung aus 12 Schritten – teils parallel, teils seriell.
            Schon bei moderater Variabilität pro Schritt ist die Chance hoch, dass ein Auftrag mindestens eine Verzögerung erfährt (≈ 70 %).
            Genau deshalb ist Real-Time-Monitoring entscheidend: Abweichungen werden sichtbar, bevor sie sich entlang der Kette fortpflanzen.
          
          </p>

        </div>

        {/* Prozessdiagramm */}
        <div className="w-full max-w-3xl mx-auto text-base md:text-xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Prozessdiagramm</h2>

          <div className="w-full aspect-video max-w-3xl mx-auto border border-gray-300 rounded-md shadow-md overflow-hidden">
            <iframe src="/html/netzplan_produktion_3.html" title="Production Flow Diagram" className="w-full h-full" />
          </div>
        </div>

        {/* Hinweis + Link auf Bericht */}
        <div className="text-justify text-base md:text-xl flex flex-col items-center gap-2">
          <p className="hyphens-auto break-words m-0 text-center">
            Weiterführende Infos zu Wahrscheinlichkeiten und Verzögerungen finden Sie im Bericht.
          </p>
          <Link href="/use-cases/AboutStatistics">
            <span
              className="px-2 py-2 text-sm font-normal rounded hover:bg-blue-400 hover:text-white transition"
              style={{ backgroundColor: "#00249C", color: "#FFFFFF" }}
            >
              Link
            </span>
          </Link>
        </div>


        {/* Einbettender Text unterhalb */}
        <div className="space-y-4 text-justify text-base md:text-xl">
          <p className="hyphens-auto break-words">
            Mit dem <strong>t4s-System</strong> wird das Potenzial für Verbesserungen greifbar, woraus Durchlaufzeiten verkürzt
            werden und eine verlässliche Planung entsteht – ohne aufwendige IT und Schnittstellen.
          </p>
        </div>

        {/* Vorteile mit Bild */}
        <div className="mt-6 flex flex-col md:flex-row md:items-start gap-12">
          {/* Bild links */}
          <div className="w-full md:w-1/4 max-w-sm">
            <Image
              src="/images/t4s_concept_pictogram.png"
              alt="t4s Konzept"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              sizes="(min-width: 768px) 33vw, 100vw"
              priority={false}
            />
          </div>

          <div className="space-y-6 w-full md:w-2/3 text-justify text-base md:text-xl">
            <h2 className="text-xl font-bold">Ihre Vorteile mit t4s</h2>

            <ul className="list-disc list-outside pl-6 space-y-1 marker:text-[#00249C] marker:font-semibold">
              <li>Skalierbare Lösung mit flexibler Nutzungsdauer</li>
              <li>Verständliche Fakten und Ergebnisse</li>
              <li>Einfache Implementierung</li>
              <li>Transparente Kostenstruktur</li>
            </ul>
          </div>
        </div>

        {/* Video */}
        <div className="my-8 px-4 text-center space-y-4">
          <h2 className="text-xl font-bold mb-4">Die Umsetzung in der Produktion</h2>
          <div className="w-full max-w-3xl">
            <div className="relative w-full overflow-hidden rounded-lg shadow-md">
              <div className="aspect-video">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full rounded-lg shadow-md"
                  aria-label="t4s Animation"
                  poster="/images/t4s_animation4web_poster.jpg"
                  controlsList="nodownload nofullscreen"
                >
                  <source src="/videos/t4s_animation4web_mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
                  <source src="/videos/t4s_animation4web_720p.mp4" type="video/mp4" media="(min-width: 769px)" />
                  Dein Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Leistung */}
        <div className="space-y-4 text-justify text-base md:text-xl">
          <h2 className="text-xl font-bold">Leistung</h2>
          <p className="hyphens-auto break-words">
            Die Leistungen sind modular aufgebaut – von der Analyse über die Implementierung bis hin zur laufenden Nutzung. Sie
            bezahlen nur, was Sie tatsächlich nutzen – die Systemnutzung erfolgt im monatlichen "Pay‑per‑Use"‑Modell.
          </p>
          <ul className="list-disc list-outside pl-6 space-y-1">
            <li>
              <strong>Schneller ROI</strong> – Dank niedriger Einstiegskosten schnelle Amortisation
            </li>
            <li>
              <strong>Flexibel</strong> – Sie entscheiden, wie lange Sie das System nutzen möchten.
            </li>
            <li>
              <strong>Risikominimierung</strong> – Durch kostengünstige Pilotprojekte Erfahrung sammeln und schrittweise ausbauen.
            </li>
            <li>
              <strong>Skalierbarkeit</strong> – Ihr Unternehmen wächst? Das t4s-System wächst mit – neue Prozesse, Standorte oder
              Anlagen lassen sich einfach integrieren.
            </li>
          </ul>
        </div>

        {/* Schluss-Statement */}
        <div className="space-y-4 text-justify text-base md:text-xl">
          <p className="hyphens-auto break-words font-bold">
            t4s ist die Lösung für Unternehmen, die ihre Produktionsprozesse optimieren und die Kosten im Griff behalten möchten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
