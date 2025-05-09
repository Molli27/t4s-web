const TechApproach: React.FC = () => {
  return (
    <section id="tech-approach" className="tech-approach-section">
      <div className="tech-approach-content">
        <h1>Technologie</h1>
        

        <div className="tech-approach-flex">
          <div className="tech-approach-textblock">
            <h2>Computer Vision – Maschinen lernen, zu sehen</h2>
            <p>
              Computer Vision ermöglicht Maschinen, Bilder zu analysieren und daraus Informationen zu gewinnen...
            </p>
          </div>

          <div className="tech-approach-img">
            <img src="/images/250212_CompVision_0.png" alt="Computer Vision" />
          </div>
        </div>

        <div className="tech-approach-details">
          <h2>KI-Modelle – Standardisiert, robust, einsatzbereit</h2>
          <p>
            Wir integrieren bewährte, vortrainierte KI-Algorithmen für die visuelle Objekterkennung. 
            Dies ermöglicht eine präzise optische Merkmalerkennung zur zuverlässigen Klassifizierung und 
            Identifikation von Artikeln. Die Artikelaufnahme erfolgt über eine geführte, standardisierte 
            Benutzeroberfläche – effizient, reproduzierbar und skalierbar.<br />
            Unsere Kunden lassen wir dabei nicht allein: Wir übernehmen auf Wunsch die komplette Artikelaufnahme 
            oder schulen Ihre Mitarbeitenden gezielt für den eigenständigen Einsatz.
          </p>
        </div>
        <div className="tech-approach-flex">
          <h2>Hardware & IT-Infrastruktur – Flexibel für jede Industrieumgebung</h2>
          
          <div className="tech-approach-details-textblock">
          <p>
            Unsere Lösung basiert auf einem Zusammenspiel aus Kamerasystemen und Edge-Computern, die den trainierten 
            Algorithmus lokal ausführen. Die erfassten Daten werden in eine zentrale Datenbank übertragen – je nach 
            Gegebenheit per WLAN, Ethernet oder industriellem Bussystem.<br />
            Wir setzen je nach Einsatzszenario unterschiedliche Kameratypen ein: Von kompakten, geschützten Systemen 
            für Pilotprojekte bis hin zu robusten Industrievarianten gemäss gängiger Normen. So schaffen wir eine 
            skalierbare Infrastruktur – passend zu Ihrer Produktionsumgebung.
          </p>
          </div>

          <div className="tech-approach-img2">
            <img src="/images/250509_MachVisionCam_1.jpg" alt="Industrial Camera" />
          </div>
        </div>

        <div className="tech-approach-details">
        <h2>Peripherie – Modular und einsatzbereit</h2>
          <div className="tech-approach-flex">
            <div className="tech-approach-details-textblock"> 
            <p>
              Ein durchdachtes Installationssystem ermöglicht die schnelle, flexible Montage der Kameras direkt vor Ort. 
              Für optimale Bildqualität werden bei Bedarf zusätzliche Beleuchtungseinrichtungen eingesetzt – ein oft 
              unterschätzter, aber entscheidender Faktor für zuverlässige Erkennungs-ergebnisse. So sichern wir den stabilen 
              Betrieb auch bei herausfordernden Lichtverhältnissen.
            </p>
            </div>
            <div className="tech-approach-img2">
              <img src="/images/250509_CameraInstall.jpg" alt="Camera Installation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechApproach;
