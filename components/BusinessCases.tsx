import Link from 'next/link';

const BusinessCases: React.FC = () => {
  return (
    <section
      id="business-cases"
      className="w-full bg-gradient-to-b from-warm-gray to-white pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(to bottom, #D7D2CB, #FFFFFF)" }}
    >
      <div className="max-w-4xl mx-auto space-y-8 text-black">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-dark">Anwendungen</h1>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Effizienz steigern – Ressourcen schonen</h2>
          <p className="text-justify">
            Komplexe Systeme benötigen präzise Überwachung, um reibungslos zu funktionieren.
            Die KI-Technologie ermöglicht automatisierte Fehlererkennung, registriert Soll-Abweichungen
            und bleibt trotzdem einfach integrierbar.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
          {/* Case 1 */}
          <div className="p-6 bg-white rounded-md shadow-md space-y-4">
            <h2 className="text-lg font-semibold leading-snug">
              Produktionsüberwachung:<br />Mittelständiges Fertigungsunternehmen in der Kostenfalle
            </h2>
            <p className="text-justify">
              Die EBIT-Marge eines Kunststoffverarbeiters sinkt stetig. Trotz hoher Produktion
              und 230 Artikeln zeigt sich erst durch die t4s-Systeme das volle Optimierungspotenzial.
            </p>
            <Link href="/use-cases/ProduktionsCase">
              <span className="inline-block text-blue-dark font-bold underline hover:text-blue-cyan transition">
                Link zum Bericht
              </span>
            </Link>
          </div>

          {/* Case 2 */}
          <div className="p-6 bg-white rounded-md shadow-md space-y-4">
            <h2 className="text-lg font-semibold leading-snug">
              Monitoring einer Heizungsanlage in einem Mehrfamilienhaus
            </h2>
            <p className="text-justify">
              In einem Mehrfamilienhaus kämpften die Bewohnerinnen und Bewohner über Monate hinweg
              mit unzureichendem Warmwasser. Erst der Einsatz des optischen t4s-Messsystems brachte Klarheit.
            </p>
            <Link href="/use-cases/HeizungsCase">
              <span className="inline-block text-blue-dark font-bold underline hover:text-blue-cyan transition">
                Link zum Bericht
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCases;
