const TechApproach: React.FC = () => {
  return (
    <section id="tech-approach" className="tech-approach">
      <h1>Technologie</h1>
      <p>
        Welche Technologie wird eingesetzt? <br></br>
      </p>  

      <div className="container">

        {/* Flex container for text an image */}
        <div className= "tech-approach-content">
          <div className="tech-approach-textblock">
            <h2>Computer Vision - Maschinen lernen, zu sehen</h2>
            <p>
            Computer Vision ermöglicht Maschinen, Bilder zu analysieren und daraus Informationen zu gewinnen. 
            Die Technologie begann mit der digitalen Fotografie, die in den 1970er Jahren mit den ersten digitalen 
            Bildsensoren ihren Ursprung hatte. Heute nutzt Computer Vision künstliche Intelligenz zur automatischen Erkennung 
            von Objekten und Mustern. In der Industrie wird sie zur Produktionsüberwachung eingesetzt, 
            z. B. zur Qualitätskontrolle von Bauteilen. Ein Kamerasystem erfasst Bilder, die Software erkennt Fehler 
            oder Abweichungen - schnell und zuverlässig. 
            Dadurch verbessern KMU ihre Prozesse und reduzieren Kosten. 
            Ein anschauliches Beispiel zeigt das ergänzende Bild.
            </p>
          </div>
        
          <div className="tech-approach-img">
            <img src="/images/250212_CompVision_0.png" alt="Computer Vision" />
          </div>
        </div>
        
        <h2>KI-Modelle</h2>
        <p>
          In wenigen Minuten haben Sie die Messdaten mit der Anzeige des Thermometers kalibriert und 
          die erhaltenen Messdaten für die Excel Auswertung bereit
        </p>
       
        <h2>Hardware</h2>
        <p>
          Nebst der individuellen Auswertung mit Excel ist ein Standard Report verfügbar, der mit einem 
          Klick die relavante Daten in einem Diagramm veranschaulicht.
        </p>
       
        <h2>Peripherie</h2>
        <p>
          In wenigen Minuten ist die Kamera installiert und erlaubt unabhängig 
          vom laufenden Betrieb die Datenerfassung.
        </p>
       
      </div>
    </section>
  );
};

export default TechApproach;
