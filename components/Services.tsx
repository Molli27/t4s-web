import Link from 'next/link';
import React from 'react';

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
        <h2 className="text-xl font-bold">Im dynamischen Umfeld der Fertigungsindustrie liefert das 
          t4s‑System klare Antworten in Echtzeit.</h2>
        <p className="text-justify max-sm: text-2xl md:text-xl">
          
        </p>
        <ul className="list-disc list-inside text-justify space-y-1">
          <li>welche Prozesse sofortige Aufmerksamkeit erfordern,</li>
          <li>den Deckungsbeitrag Ihrer Produkte - aktuell, rückblickend und in der Prognose,</li>
          <li>die Trendanalyse: Welche Artikel im Zeitverlauf an Margenstärke gewinn oder verlieren,</li>
          <li>welche Investitionen unmittelbar die EBIT‑Marge stärken,</li>
          <li>strategische Optionen für ein Portfolio-Management mit Fokus auf rentable Produkte.</li>
        </ul>
        <p>
        So behalten Sie jederzeit den Überblick – und sichern die Zukunftsfähigkeit Ihrer Produktion.
        </p>
      </div>
      

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Komplexität bremst Prozesse</h2>
          <p className="text-justify max-sm: text-2xl md:text-xl">
            Je mehr Teilprozesse eine Produktion durchläuft, desto höher die Wahrscheinlichkeit für Verzögerungen.
          </p>
          <p className="text-justify">
            Schon bei 12 Prozessschritte (siehe Abbildung unten) mit je 10 % Abweichungsrisiko liegt die
            Gesamtwahrscheinlichkeit für eine Störung bei rund{" "} <strong>72 %</strong>. Das bedeutet im Durchschnitt 
            <strong>1,5 Stunden</strong> Verzögerung pro Auftrag - bei 1'000 Aufträgen pro Jahr sind das{" "}
            <strong>1'500 Stunden</strong> – also fast ein Vollzeitpensum.
          </p>
          
        </div>
            

        <div className="w-full aspect-video max-w-3xl mx-auto border border-gray-300 rounded-md shadow-md overflow-hidden">
          <iframe
            src="/html/netzplan_produktion_3.html"
            title="Production Flow Diagram"
            className="w-full h-full"
          />
        </div>
          
        <p className="text-justify">
          Wer mehr wissen möchte, wie sich Wahrscheinlichkeiten für Planungsabweichungen und die
          resultierenden Verzögerungen bestimmen lassen, findet den Bericht hier.
        </p>

        <div className="text-center">
          <Link href="/use-cases/Services_PlanningCase">
            <span 
            className="inline-block px-6 py-2 font-semibold rounded-md shadow-md hover:bg-blue-dark hover:text-white transition"
              style={{ backgroundColor: "#00249C", // deep blue
                        color: "#FFFFFF" }}
            >
              Link zum Bericht
            </span>
          </Link>
        </div>

        <p className="text-justify">
          Mit dem <strong>t4s-System</strong> wird das Potenzial für Verbesserungen sichtbar, woraus
          Durchlaufzeiten verkürzt werden und eine verlässliche Planung entsteht – ohne aufwendige IT.
        </p>


        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold">Ihre Vorteile mit t4s</h2>
            <ul className="list-disc list-inside text-justify space-y-1">
              <li>Massnahmen mit nachhaltiger Produktivitätssteigerung</li>
              <li>Skalierbare Lösung mit flexibler Nutzungsdauer</li>
              <li>Verständliche Fakten und Ergebnisse</li>
              <li>Einfache Implementierung</li>
              <li>Keine aufwendige IT-Umstellung</li>
            </ul>
          </div>

          <p>
            Wir helfen Unternehmen, digitale Strategien zu entwickeln und erfolgreich umzusetzen.
          </p>

          <div>
            <h2 className="text-xl font-bold">Leistung</h2>
            <p className="text-justify">
              Unsere Leistungen sind modular aufgebaut – von der Analyse über die Implementierung bis
              hin zur laufenden Nutzung. Sie bezahlen nur das, was Sie tatsächlich brauchen –
              einmalige Projektkosten werden transparent ausgewiesen und die Systemnutzung erfolgt im
              monatlichen Pay-as-you-Go-Modell.
            </p>
            <ul className="list-disc list-inside text-justify space-y-1">
              <li>
                <strong>Schneller ROI</strong> – Dank niedriger Einstiegskosten amortisiert sich Ihre
                Investition deutlich schneller als bei klassischen Kaufmodellen.
              </li>
              <li>
                <strong>Flexibel</strong> – Sie entscheiden, wie lange Sie die Geräte nutzen möchten.
              </li>
              <li>
                <strong>Risikominimierung</strong> – Veraltete oder defekte Hardware? Kein Problem –
                wir übernehmen den Austausch und sorgen für einen reibungslosen Betrieb.
              </li>
              <li>
                <strong>Skalierbarkeit leicht gemacht</strong> – Ihr Unternehmen wächst? Unsere
                Systeme wachsen mit – neue Standorte oder Anlagen lassen sich nahtlos integrieren.
              </li>
            </ul>
          </div>

          <p className="text-justify font-bold">
            t4s ist die Lösung für Unternehmen, die ihre Produktionsprozesse optimieren und
            gleichzeitig ihre Kosten im Griff behalten möchten. <br />
            Für Ihre Anforderungen erstellen wir ein massgeschneidertes Angebot.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
