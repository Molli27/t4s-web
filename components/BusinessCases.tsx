const BusinessCases: React.FC = () => {
  return (
    <section id="business-cases" className="business-cases">
      <div className="container">
        <h1>Anwendungen</h1>
        <p>
          Sie müssen bei einer Anlage die Temperatur über eine längere Zeit 5Tage /24h erfassen. Haben aber ein analoges Thermometer.
          Wie lösen Sie das Problem?
          </p>

        <div className="business-cases-grid">
          <div className="business-cases-item">
            <h2>Computer Vision ist die Lösung</h2>
            <p>
              Nach eingestellter Zeit, z.B. 10 Min. löst die Kamera ein Bild aus und gleichzeitig wird der Anzeigewert
                des Thermometers erfasst und gespeichert.
            </p>
          </div>

          <div className="business-cases-item">
            <h2>Auswertung</h2>
            <p>
              In wenigen Minuten haben Sie die Messdaten mit der Anzeige des Thermometers kalibriert und 
              die erhaltenen Messdaten für die Excel Auswertung bereit.
            </p>
          </div>

          <div className="business-cases-item">
            <h2>Bericht erstellen</h2>
            <p>
              Nebst der individuellen Auswertung mit Excel ist ein Standard Report verfügbar der mit einem 
              Klick die relavante Daten in einem Diagramm veranschaulicht.
            </p>
          </div>

          <div className="business-cases-item">
            <h2>Beratung </h2>
            <p>
              In wenigen Minuten ist die Kamera installiert und erlaubt unabhängig 
              vom gesamt Betireb die Datenerfassung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCases;
