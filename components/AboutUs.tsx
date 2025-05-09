const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="about-us-content">
        <h1>Über t4s</h1>

        <div className="deming">
          <p><strong>W. Edward Deming:</strong></p>
          <ul>
            <li>Change is inevitable</li>
            <li>Everybody resists change</li>
          </ul>
        </div>

          <h2>Vision</h2>
          <p>
            <strong>Innovative Technologien - Effiziente Produktion - Starker Mittelstand.</strong><br />
            Wir glauben an eine Zukunft, in der mittelständische Fertigungsunternehmen durch den gezielten
            Einsatz von Computer-Vision- und KI-Technologie ihre Wettbewerbsfähigkeit nachhaltig stärken.
          </p>

          <h2>Mission</h2>
          <p>
            <strong>Technologie nutzbar machen – einfach, skalierbar, wirkungsvoll.</strong><br />
            t4s erleichtert produzierenden Unternehmen den Zugang zu modernster KI-gestützter
            Bildverarbeitung.
          </p>
        <div className = "about-us-principles">
          <p><strong>Dabei gelten folgende Prinzipien:</strong></p>
          <ul>
            <li>Planbares finanzielles Engagement</li>
            <li>Modulares Konzept: Klein starten und aus Erfahrung wachsen</li>
            <li>Minimale personelle Ressourcenbindung</li>
            <li>Schnelle und verständliche Ergebnisse</li>
          </ul>
        </div>
        <p>
          Manche mögen hier Widersprüche vermuten – doch genau hier setzt Kompetenz und Kreativität an.
          <br />
          t4s verbindet technologische Exzellenz mit pragmatischen Lösungen...
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
