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
          Unser Technologie-Ansatz
        </h1>

        {/* Einleitung */}
        <div className="space-y-4 text-justify text-base md:text-xl">
          <p className="hyphens-auto break-words">
            Der Kern von t4s liegt in einem <strong>standardisierten Prozess</strong>,
            der es ermöglicht, Produkte in der Fertigung mit hoher Sicherheit zu identifizieren.
            Von der Datenerfassung bis zum robusten KI-Modell – unser Ansatz verbindet
            bewährte Technologien mit praxistauglicher Umsetzung.
          </p>
        </div>

        {/* Section 1: Datenerfassung */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="rounded-md p-6 shadow-md space-y-4 flex-1"
          style={{ backgroundColor: "#B59E5F" }}>
            <h2 className="text-xl font-semibold mb-2">
              Datenerfassung – Basis für jedes Modell
            </h2>
            <p className="text-justify hyphens-auto break-words">
              Ein strukturierter Aufbau für Foto- und Videoaufnahmen bildet die Grundlage.
              Standardisierte Aufnahmeszenarien stellen sicher, dass die Datenqualität stimmt
              und die Modelle reproduzierbar trainiert werden können.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/250212_CompVision_0.png"
              alt="Prototyp Datenerfassung"
              className="w-full max-w-sm rounded-md object-contain"
            />
          </div>
        </div>

        {/* Section 2: KI-Modelle */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">KI-Modelle – robust und einsatzbereit</h2>
          <p className="text-justify hyphens-auto break-words">
            Mit bewährten Architekturen setzen wir auf schnelle und präzise
            Objekterkennung. Der Trainingsprozess ist standardisiert und dokumentiert – so entsteht
            ein Modell, das zuverlässig Artikel klassifiziert und skalierbar eingesetzt werden kann.
          </p>
        </div>

        {/* Section 3: Hardware */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Hardware – flexibel und praxisnah
            </h2>
            <p className="text-justify hyphens-auto break-words">
              Kamerasysteme und Edge-Computer arbeiten Hand in Hand: Daten werden lokal erfasst
              und verarbeitet, ohne komplexe IT-Infrastruktur. Ob Pilotprojekte oder robuste
              Industrieumgebung – die Hardware passt sich an Ihre Produktionsbedingungen an.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <img
              src="/images/250509_MachVisionCam_1.jpg"
              alt="Kamerasystem"
              className="w-full max-w-xs rounded-md object-contain"
            />
          </div>
        </div>

        {/* Section 4: Peripherie */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Peripherie – Licht und Setup im Griff</h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <p className="text-justify hyphens-auto break-words">
                Ein durchdachtes Installationssystem erlaubt flexible Montage direkt vor Ort.
                Beleuchtung und Hintergrund sind entscheidend für Bildqualität – deshalb setzen wir
                auf standardisierte Module, die stabile Ergebnisse auch unter schwierigen Bedingungen sichern.
              </p>
            </div>
            <div className="flex-1 flex justify-end">
              <img
                src="/images/250509_CameraInstall.jpg"
                alt="Peripherie"
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
