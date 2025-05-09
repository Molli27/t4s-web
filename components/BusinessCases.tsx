import Link from 'next/link';

const BusinessCases: React.FC = () => {
  return (
    <section id="business-cases" className="business-cases-section">
      <div className="business-cases-content">
        <h1>Anwendungen</h1>

        <div className="business-cases-intro">
          <h2>Effizienz steigern – Ressourcen schonen</h2>
          <p>
            Komplexe Systeme benötigen präzise Überwachung, um reibungslos zu funktionieren.
            Die KI-Technologie ermöglicht automatisierte Fehlererkennung, registriert Soll-Abweichungen
            und bleibt trotzdem einfach integrierbar.
          </p>
        </div>

        <div className="business-cases-grid">
          
          <div className="business-cases-item">
              <h2>Produktionsüberwachung:<br />Mittelständiges Fertigungsunternehmen in der Kostenfalle</h2>
              <p>
                Die EBIT-Marge eines Kunststoffverarbeiters sinkt stetig. Trotz hoher Produktion
                und 230 Artikeln zeigt sich erst durch die t4s-Systeme das volle Optimierungspotenzial.
              </p>
              <Link href="/use-cases/ProduktionsCase" className="use-case-button">
                Link zum Bericht
              </Link>
            </div>

          <div className="business-cases-item">
            <h2>Monitoring einer Heizungsanlage in einem Mehrfamilienhaus</h2>
            <p>
              In einem Mehrfamilienhaus kämpften die Bewohnerinnen und Bewohner über Monate hinweg
              mit unzureichendem Warmwasser. Erst der Einsatz des optischen t4s-Messsystems brachte Klarheit.
            </p>
            <Link href="/use-cases/HeizungsCase" className="use-case-button">
              Link zum Bericht
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessCases;
