const AboutUs: React.FC = () => {
  return (
    <section
      id="about-us"
      className="w-full pt-20 pb-16 px-4 sm:px-6 lg:px-8 mt-[100px]"
      style={{
        background: "linear-gradient(to top, #FFFFFF, #D7D2CB)",
      }}
    >
      <div className="max-w-3xl mx-auto space-y-8 text-black">
        <h1 className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#00249C" }}>
            Über t4s
        </h1>

        <div className="rounded-md p-6 text-black shadow-md space-y-2"
             style={{ backgroundColor: "#B59E5F", }}>
          <p className="font-semibold">W. Edward Deming:</p>
          <ul className="list-disc list-inside">
            <li>Change is inevitable</li>
            <li>Everybody resists change</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Vision</h2>
          <p className="text-justify">
            <strong>Innovative Technologien – Effiziente Produktion – Starker Mittelstand.</strong><br />
            Wir glauben an eine Zukunft, in der mittelständische Fertigungsunternehmen durch den gezielten
            Einsatz von Computer-Vision- und KI-Technologie ihre Wettbewerbsfähigkeit nachhaltig stärken.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Mission</h2>
          <p className="text-justify">
            <strong>Technologie nutzbar machen – einfach, skalierbar, wirkungsvoll.</strong><br />
            t4s erleichtert produzierenden Unternehmen den Zugang zu modernster KI-gestützter
            Bildverarbeitung.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Dabei gelten folgende Prinzipien:</p>
          <ul className="list-disc list-inside space-y-1 text-justify">
            <li>Planbares finanzielles Engagement</li>
            <li>Modulares Konzept: Klein starten und aus Erfahrung wachsen</li>
            <li>Minimale personelle Ressourcenbindung</li>
            <li>Schnelle und verständliche Ergebnisse</li>
          </ul>
        </div>

        <p className="text-justify">
          Manche mögen hier Widersprüche vermuten – doch genau hier setzt Kompetenz und Kreativität an.<br />
          t4s verbindet technologische Exzellenz mit pragmatischen Lösungen...
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
