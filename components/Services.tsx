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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-dark"
            style={{ color: "#00249C" }}>
          Vorausschauend handeln – für eine starke Produktion von morgen.
        </h1>
      

        <div className="space-y-4">
          <p className="text-justify ">
          <strong>t4s (technology for solutions)</strong> transformiert KI-Technologien in wertgenerierende Systeme 
          für die fertigende Industrie. Langfristig verfolgt t4s die Vision, als Engineering-Partner KI-Lösungen in 
          unterschiedlichste industrielle Anwendungen zu übertragen. </p>
          <p>Der aktuelle Fokus liegt auf intelligentem Monitoring und Analysen: Wir machen die 
          Performance Ihrer Produktion in Echtzeit sichtbar – für kürzere Durchlaufzeiten, präzisere 
          Planung und höhere Profitabilität.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Im dynamischen Umfeld der Fertigungsindustrie liefert das 
            t4s‑System klare Antworten in Echtzeit.</h2>
          <p className="text-justify max-sm: text-2xl md:text-xl">
            
          </p>
          <ul className="list-disc list-inside text-justify space-y-1">
            <li>welche Prozesse sofortige Aufmerksamkeit erfordern,</li>
            <li>den Deckungsbeitrag Ihrer Produkte - aktuell, rückblickend und in der Prognose,</li>
            <li>die Trendanalyse: Welche Artikel im Zeitverlauf an Margenstärke gewinnen oder verlieren,</li>
            <li>welche Investitionen unmittelbar die EBIT‑Marge stärken,</li>
            <li>strategische Optionen für ein Portfolio-Management mit Fokus auf rentable Produkte.</li>
          </ul>
          <p>
          So behalten Sie jederzeit den Überblick – und sichern die Zukunftsfähigkeit Ihrer Produktion.
          </p>
        </div>
      

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Komplexität bremst Prozesse</h2>
          <p className="text-justify sm: text-l ">
            Je mehr Teilprozesse eine Produktion durchläuft, desto höher die Wahrscheinlichkeit für Verzögerungen.
          </p>
          <p className="text-justify">
            Schon bei 12 Prozessschritten (siehe Prozessdiagramm) mit je 10 % Abweichungsrisiko liegt die
            Gesamtwahrscheinlichkeit für eine Störung bei rund{" "} <strong>72 %</strong>. Das bedeutet im Durchschnitt{" "}
            <strong>1,5 Stunden</strong> Verzögerung pro Auftrag - bei 1'000 Aufträgen pro Jahr sind das{" "}
            <strong>1'500 Stunden</strong> – also fast ein Vollzeitpensum.
          </p>
          
        </div>
            
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Prozessdiagramm
          </h2>

          <div className="w-full aspect-video max-w-3xl mx-auto border border-gray-300 rounded-md shadow-md overflow-hidden">
            <iframe
              src="/html/netzplan_produktion_3.html"
              title="Production Flow Diagram"
              className="w-full h-full"
            />
          </div>
        </div>

        <p className="text-justify flex items-center gap-2">
          Weiterführende Infos zu Wahrscheinlichkeiten und Verzögerungen finden Sie im Bericht.
          <Link href="/use-cases/Services_PlanningCase">
            <span
              className="px-2 py-1 text-sm font-normal rounded hover:bg-blue-900 hover:text-white transition"
              style={{
                backgroundColor: "#00249C", // deep blue
                color: "#FFFFFF",
              }}
            >
              Link
            </span>
          </Link>
        </p>

        <p className="text-justify">
          Mit dem <strong>t4s-System</strong> wird das Potenzial für Verbesserungen greifbar, woraus
          Durchlaufzeiten verkürzt werden und eine verlässliche Planung entsteht – ohne aufwendige IT.
        </p>

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

          <div className="space-y-6 w-full md:w-2/3">
            <h2 className="text-xl font-bold">Ihre Vorteile mit t4s</h2>

            <ul className="list-none pl-0 space-y-2 text-[15px] leading-6 sm:list-disc sm:list-outside sm:pl-6 sm:space-y-1 sm:text-base sm:leading-7 sm:text-justify marker:text-[#00249C] marker:font-semibold">
              <li>Keine aufwendige IT – keine Schnittstellen erforderlich</li>
              <li>Skalierbare Lösung mit flexibler Nutzungsdauer</li>
              <li>Verständliche Fakten und Ergebnisse</li>
              <li>Einfache Implementierung</li>
              <li>Transparente Kostenstruktur</li>
            </ul>
          </div>
        </div>

        <div className="my-8 px-4 text-center space-y-4">
          <h2 className="text-xl font-bold mb-4">Die Umsetzung in der Produktion</h2>
          {/* Center: Video */}
          <div className="w-full max-w-3xl">
            <div className="relative w-full overflow-hidden rounded-lg shadow-md">
              {/* 16:9 Ratio */}
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
                  <source
                    src="/videos/t4s_animation4web_mobile.mp4"
                    type="video/mp4"
                    media="(max-width: 768px)"
                  />
                  <source
                    src="/videos/t4s_animation4web_720p.mp4"
                    type="video/mp4"
                    media="(min-width: 769px)"
                  />
                  Dein Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Leistung</h2>
          <p className="text-justify">
            Die Leistungen sind modular aufgebaut – von der Analyse über die Implementierung bis
            hin zur laufenden Nutzung. Sie bezahlen nur, was Sie tatsächlich nutzen –
            die Systemnutzung erfolgt im monatlichen "Pay-per-Use"-Modell.
          </p>
          <ul className="list-disc list-outside pl-6 text-justify space-y-1">
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
              <strong>Skalierbarkeit</strong> – Ihr Unternehmen wächst? Das t4s-System
              wächst mit – neue Prozesse, Standorte oder Anlagen lassen sich einfach integrieren.
            </li>
          </ul>
        </div>


        

        <div className="space-y-4">
          <p className="text-justify font-bold">
            t4s ist die Lösung für Unternehmen, die ihre Produktionsprozesse optimieren und
            die Kosten im Griff behalten möchten. <br />
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default Services;
