import Link from 'next/link';
import React from 'react';

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-gradient-to-b from-white to-warm-gray pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 text-black">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-dark">
          Vorausschauend handeln – für eine starke Produktion von morgen.
        </h1>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Produktion sichern heisst, Effizienz neu denken.</h2>
          <p className="text-justify">
            <strong>
              t4s bietet standardisierte, sofort einsatzbereite Lösungen zur Optimierung von
              Produktionsprozessen.
            </strong>
          </p>
        </div>


        <div className="space-y-4">
          <h2 className="text-xl font-bold">Komplexität bremst Prozesse</h2>
          <p className="text-justify">
            Je mehr Teilprozesse im Produktionsprozess involviert sind, desto höher ist die
            Wahrscheinlichkeit für Planungsabweichungen, respektive Verzögerungen.
          </p>
          <p className="text-justify">
            Wird beispielsweise ein Auftrag durch 12 Prozessschritte (siehe Abbildung unten) geführt,
            von denen jeder eine Abweichungswahrscheinlichkeit von 10 % aufweist, liegt die
            Gesamtwahrscheinlichkeit für mindestens eine Abweichung bereits bei rund{" "}
            <strong>72 %</strong>. Die durchschnittliche Verzögerung in der Abwicklung eines Auftrags
            beträgt dann <strong>1,5 Stunden</strong>. Wenn dies auf 1000 Aufträge pro Jahr
            hochgerechnet wird, resultiert ein Kapazitätsverlust von{" "}
            <strong>
              1'500 Arbeitsstunden – dies entspricht der Kapazität eines Mitarbeitenden mit einer
              70%-Anstellung.
            </strong>
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
            <span className="inline-block bg-blue-cyan text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-dark transition">
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
