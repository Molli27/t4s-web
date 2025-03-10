import ServicesTable from "./ServicesTable_1";


const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h1>Produkte und Leistungen</h1>
        <p>
        Am Anfang steht die Erkenntnis und Notwendigkeit, das Potenzial der Effizienz 
        in Ihrem Herstellungsprozess auszuschöpfen.
        </p>
        <br />
        <p><strong>
        t4s bietet eine standardisierte, sofort einsatzbereite Lösung zur Optimierung von Produktionsprozessen. 
        Unsere Systeme sind darauf ausgelegt, Effizienzpotenziale schnell zu identifizieren und direkt nutzbar 
        zu machen – individuell an Ihre Produkte angepasst, ohne aufwendige Implementierung. 
        Das Beste daran: Sie zahlen nur für die Nutzung, ohne hohe Anfangsinvestitionen. Die Analyse und fachkundige 
        Begleitung sind dabei selbstverständlich inbegriffen.
        </strong></p>
        <br />
        <p>
        Analog zur Beschaffung einer Fertigungsmaschine begleiten wir Sie dabei, die beste Lösung 
        für die Analyse und Optimierung Ihrer Produkte und Fertigungsprozesse zu wählen. Statt 
        hoher Investitionen bieten wir Ihnen eine flexible, skalierbare Lösung mit messbarem 
        Return on Investment (ROI).
        </p>

        <p>
        Unsere standardisierten Systeme und Produkte gewährleisten eine hohe Betriebssicherheit 
        und lassen sich nahtlos in bestehende Produktionsabläufe integrieren – ohne aufwendige 
        IT-Umstellungen oder lange Implementierungszeiten.
        </p>

        <div className="service-item">
          <h2>Ihre Vorteile mit t4s</h2>
          <ul>
            <li>Effizienzsteigerung ohne hohe Investitionen</li>
            <li>Skalierbare Lösung mit flexibler Nutzungsdauer</li>
            <li>Keine langen Wartezeiten auf Ergebnisse</li>
            <li>Einfache Implementierung</li>
            <li>Keine aufwendigen IT-Umstellungen</li>
            <li>Beratung und Massnahmen zur nachhaltigen Produktivitätssteigerung</li>
          </ul>
        </div>  
      
        <h2>Beratung & Strategie</h2>
        <p>
          Wir helfen Unternehmen, digitale Strategien zu entwickeln und erfolgreich umzusetzen.
        </p>       
      </div>

      <div className="overflow-x-auto mx-auto"> {/* overflow-x-auto mx-auto; ensure table is left and aligned */}
        <h2 className= " text-2x1 font-bold mb-4">Der Prozess im Vergleich zur Maschinenbeschaffung</h2>
        <ServicesTable />
      </div>

      <div>
        <h2>Leistung</h2>
        <p>
        T4s-Systeme und -Produkte werden nicht gekauft, sondern für die Nutzungsdauer geleast 
        („Pay-As-You-Go“). Dadurch bleibt das finanzielle Risiko für den Kunden zeitlich begrenzt.
        </p>
        <br />
        <p>
          Die Kosten gliedern sich in folgende Phasen:
        </p>
        <ul>
          <li><strong>Projektstart: </strong>Analyse der produktspezifischen und prozessbezogenen Eigenheiten.</li>
          <li><strong>Implementierung: </strong>Installation und Inbetriebnahme des Systems.</li>
          <li><strong>Reporting: </strong>Fortlaufende Analyse und Berichterstattung der Systemleistung</li>
          <li><strong>Massnahmen (optional) :</strong> Beratung zur Umsetzung von Optimierungsmaßnahmen 
                                                     basierend auf den Ergebnissen.</li>
        </ul>

      </div>

    </section>
  );
};

export default Services;
