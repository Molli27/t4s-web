import ServicesTable from "./ServicesTable_1";
import Link from 'next/link';
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <h1>Vorausschauend handeln – für eine starke Produktion von morgen.</h1>

        <div className="service-intro">
          <h2>Produktion sichern heisst, Effizienz neu denken.</h2>
          <p>
            <strong>
              t4s bietet standardisierte, sofort einsatzbereite Lösungen zur Optimierung von Produktionsprozessen.
            </strong>
          </p>
        </div>

          <h2> Komplexität bremst Prozesse</h2>
            <p>
              Je mehr Teilprozesse im Produktionsprozess involviert sind, desto höher ist die 
              Wahrscheinlichkeit für Planungsabweichungen, respektive Verzögerungen.
            </p>
            <p>
              Wird beispielsweise ein Auftrag durch 12 Prozessschritte (siehe Abbildung unten) geführt, von denen jeder eine Abweichungswahrscheinlichkeit
              von 10 % aufweist, liegt die Gesamtwahrscheinlichkeit für mindestens eine Abweichung bereits bei rund <strong>72 %</strong>.
              Die durchschnittliche Verzögerung in der Abwicklung eines Auftrags beträgt dann <strong>1,5 Stunden</strong>. Wenn dies auf 1000 Aufträge 
              pro Jahr hochgerechtnet wird resultiert ein Kapazitätsverlust von <strong>1'500 Arbeitsstunden, dies entspricht der Kapazität eines Mitarbeitenden
              mit einer 70% Anstellung</strong>. 
            </p>
            

        <div className="service-section-html">
          <iframe
            src="/html/netzplan_produktion_3.html" 
            title="Production Flow Diagram"
          />
        </div>
          
          <p>
            Wer mehr wissen möchte, wie sich Wahrscheinlichkeiten für Planungsabweichungen
            und die resultierenden Verzögerungen bestimmen lassen, findet den Bericht hier.
          </p>
        <div className="service-case-container">
          <Link href="/use-cases/Services_PlanningCase" className="service-case-button">
              Link zum Bericht
            </Link>
        </div>

          <p>
            Mit dem <strong>t4s-System</strong> wird das Potenzial für Verbesserungen sichtbar, 
            woraus Durchlaufzeiten verkürzt werden und eine verlässliche Planung entsteht – ohne 
            aufwendige IT.
          </p>

        <div className="service-item">
          <h2>Ihre Vorteile mit t4s</h2>
          <ul>
            <li>Massnahmen mit nachhaltiger Produktivitätssteigerung</li>
            <li>Skalierbare Lösung mit flexibler Nutzungsdauer</li>
            <li>Verständliche Fakten und Ergebnisse</li>
            <li>Einfache Implementierung</li>
            <li>Keine aufwendige IT-Umstellung</li>
          </ul>

          <p>
            Wir helfen Unternehmen, digitale Strategien zu entwickeln und erfolgreich umzusetzen.
          </p>

          <h2>Leistung</h2>
          <p>
          Unsere Leistungen sind modular aufgebaut – von der Analyse über die Implementierung bis hin zur laufenden 
          Nutzung. Sie bezahlen nur das, was Sie tatsächlich brauchen – einmalige Projektkosten werden transparent 
          ausgewiesen und die Systemnutzung erfolgt im monatlichen Pay-as-you-Go-Modell. 
          </p>
          <ul>
            <li><strong>Schneller ROI</strong> Dank niedriger Einstiegskosten amortisiert sich Ihre Investition deutlich 
            schneller als bei klassischen Kaufmodellen.</li>
            <li><strong>Flexibel</strong> Sie entscheiden, wie lange Sie die Geräte nutzen möchten.</li>
            <li><strong>Risikominimierung</strong> Veraltete oder defekte Hardware? Kein Problem – wir übernehmen den 
            Austausch und sorgen für einen reibungslosen Betrieb.</li>
            <li><strong>Skalierbarkeit leicht gemacht</strong> Ihr Unternehmen wächst? Unsere Systeme wachsen mit – neue Standorte
            oder Anlagen lassen sich nahtlos integrieren.</li>
          </ul>

          <p>
            <strong>t4s ist die Lösung für Unternehmen, die ihre Produktionsprozesse optimieren und 
            gleichzeitig ihre Kosten im Griff behalten möchten. <br></br>Für Ihre Anforderungen 
            erstellen wir ein massgeschneidertes Angebot.</strong>
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
