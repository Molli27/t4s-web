const TechApproach: React.FC = () => {
  return (
    <section
      id="tech-approach"
      className="w-full pt-20 pb-16 px-4 sm:px-6 lg:px-8 mt-[100px]"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #D7D2CB)",
      }}
    >
      <div className="max-w-5xl mx-auto space-y-12 text-black">
        <h1 className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#00249C" }}>
          Technologie</h1>

        {/* Section 1: Computer Vision */}
        <div className="flex flex-col md:flex-row items-start gap-6"
             style={{ backgroundColor: "#B59E5F", }}>

          <div className="rounded-md p-6 shadow-md space-y-4 flex-1">
            <h2 className="text-xl font-semibold mb-2">
              Computer Vision – Maschinen lernen, zu sehen
            </h2>
            <p className="text-justify">
              Computer Vision ermöglicht Maschinen, Bilder zu analysieren und daraus Informationen zu
              gewinnen.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/250212_CompVision_0.png"
              alt="Computer Vision"
              className="w-full max-w-sm rounded-md object-contain"
            />
          </div>
        </div>

        {/* Section 2: KI Modelle */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">KI-Modelle – Standardisiert, robust, einsatzbereit</h2>
          <p className="text-justify">
            Wir integrieren bewährte, vortrainierte KI-Algorithmen für die visuelle Objekterkennung.
            Dies ermöglicht eine präzise optische Merkmalerkennung zur zuverlässigen Klassifizierung und
            Identifikation von Artikeln. Die Artikelaufnahme erfolgt über eine geführte, standardisierte
            Benutzeroberfläche – effizient, reproduzierbar und skalierbar.<br />
            Unsere Kunden lassen wir dabei nicht allein: Wir übernehmen auf Wunsch die komplette Artikelaufnahme
            oder schulen Ihre Mitarbeitenden gezielt für den eigenständigen Einsatz.
          </p>
        </div>

        {/* Section 3: Hardware */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Hardware & IT-Infrastruktur – Flexibel für jede Industrieumgebung
            </h2>
            <p className="text-justify">
              Unsere Lösung basiert auf einem Zusammenspiel aus Kamerasystemen und Edge-Computern, die den trainierten
              Algorithmus lokal ausführen. Die erfassten Daten werden in eine zentrale Datenbank übertragen – je nach
              Gegebenheit per WLAN, Ethernet oder industriellem Bussystem.<br />
              Wir setzen je nach Einsatzszenario unterschiedliche Kameratypen ein: Von kompakten, geschützten Systemen
              für Pilotprojekte bis hin zu robusten Industrievarianten gemäss gängiger Normen. So schaffen wir eine
              skalierbare Infrastruktur – passend zu Ihrer Produktionsumgebung.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <img
              src="/images/250509_MachVisionCam_1.jpg"
              alt="Industrial Camera"
              className="w-full max-w-xs rounded-md object-contain"
            />
          </div>
        </div>

        {/* Section 4: Peripherie */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Peripherie – Modular und einsatzbereit</h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <p className="text-justify">
                Ein durchdachtes Installationssystem ermöglicht die schnelle, flexible Montage der Kameras direkt vor Ort.
                Für optimale Bildqualität werden bei Bedarf zusätzliche Beleuchtungseinrichtungen eingesetzt – ein oft
                unterschätzter, aber entscheidender Faktor für zuverlässige Erkennungs-ergebnisse. So sichern wir den stabilen
                Betrieb auch bei herausfordernden Lichtverhältnissen.
              </p>
            </div>
            <div className="flex-1 flex justify-end">
              <img
                src="/images/250509_CameraInstall.jpg"
                alt="Camera Installation"
                className="w-full max-w-xs rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechApproach;
