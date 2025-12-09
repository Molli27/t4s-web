import Link from "next/link";

const Stories: React.FC = () => {
  return (
    <section
      id="stories"
      className="w-full pt-20 pb-16 px-4 sm:px-6 lg:px-8 mt-[100px]"
      style={{ background: "linear-gradient(to bottom, #FFFFFF, #D7D2CB)" }}
    >
      <div className="max-w-4xl mx-auto space-y-8 text-black">
        {/* Titel */}
        <h1
          className="text-3xl sm:text-4xl font-bold"
          style={{ color: "#00249C" }}
        >
          Geschichten aus der Praxis
        </h1>

        {/* Einleitung */}
        <div className="space-y-4 text-justify text-base md:text-xl">
          <p className="hyphens-auto break-words">
            Zahlen und Fakten zeigen Effizienzpotenziale – Geschichten machen sie greifbar.
            Die Stories sind fiktiv, aber realitätsnah: Sie schildern typische Herausforderungen
            in der Fertigung und wie t4s darauf Antworten gibt.
          </p>
     
        </div>

        {/* Stories-Grid */}
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
          {/* Story 1: Industrie */}
          <div className="p-6 bg-white rounded-md shadow-md space-y-4 text-justify text-base md:text-xl">
            <h2 className="text-lg font-semibold leading-snug hyphens-auto break-words">
              Kostenfalle in der Produktion – Kunststoffverarbeitung
            </h2>
            <p className="hyphens-auto break-words">
              Hohe Auslastung, viele Artikel, trotzdem sinkende EBIT-Marge: Die Story zeigt,
              wo Zeitverluste entstehen – und wie t4s Transparenz schafft, um Gegensteuer zu geben.
            </p>
            <Link href="/use-cases/ProduktionsCase">
              <span
                className="inline-block px-6 py-2 font-semibold rounded-md shadow-md hover:bg-blue-900 hover:text-white transition"
                style={{ backgroundColor: "#00249C", color: "#FFFFFF" }}
              >
                Zur Story
              </span>
            </Link>
          </div>

          {/* Story 2: Technologie-Demo */}
          <div className="p-6 bg-white rounded-md shadow-md space-y-4 text-justify text-base md:text-xl">
            <h2 className="text-lg font-semibold leading-snug hyphens-auto break-words">
              Technologie im Alltag – Monitoring einer Heizungsanlage
            </h2>
            <p className="hyphens-auto break-words">
              Ein Nebenprojekt zur Erprobung der Computer-Vision: Wie das optische Messsystem
              Muster sichtbar macht und Entscheidungen unterstützt – ausserhalb der Industrie.
            </p>
            <Link href="/use-cases/HeizungsCase">
              <span
                className="inline-block px-6 py-2 font-semibold rounded-md shadow-md hover:bg-blue-900 hover:text-white transition"
                style={{ backgroundColor: "#00249C", color: "#FFFFFF" }}
              >
                Zur Story
              </span>
            </Link>
          </div>

          {/* CTA: Fragebogen */}
          <div className="p-6 rounded-md shadow-md space-y-4 text-justify text-base md:text-xl"
               style={{ backgroundColor: "#F5F7FA", border: "1px solid #B1B3B3" }}>
            <h2 className="text-lg font-semibold leading-snug hyphens-auto break-words">
              Wie sieht Ihre Story aus?
            </h2>
            <p className="hyphens-auto break-words">
              In weniger als 5&nbsp;Minuten einschätzen, ob sich eine automatisierte Produktionsüberwachung
              für Ihren Betrieb lohnt. Starten Sie jetzt.
            </p>
            <Link href="/fragebogen_start">
              <span
                className="inline-block px-6 py-2 font-semibold rounded-md shadow-md hover:bg-blue-900 hover:text-white transition"
                style={{ backgroundColor: "#00249C", color: "#FFFFFF" }}
              >
                Zum Fragebogen
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
