import { useEffect, useState } from "react";
import Navbar_UseCases from "../../components/Navbar_UseCases";
import Footer from "../../components/Footer";
import Image from "next/image";


/* 1) Wiederverwendbare Komponente definieren (OBEN in der Datei) */
type LightboxImageProps = {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  thumbWidth?: number;
  thumbHeight?: number;
  className?: string;
};

function LightboxImage({
  src,
  alt,
  caption,
  thumbWidth = 250,
  thumbHeight = 150,
  className = "",
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <figure className={`w-full ${className}`}>
      {/* Thumbnail */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00249C] rounded-md"
        aria-label="Bild vergrößern"
      >
        <Image
          src={src}
          alt={alt}
          width={thumbWidth}
          height={thumbHeight}
          className="w-full h-auto rounded-md shadow-md transition-transform group-hover:scale-[1.02]"
          sizes="(min-width: 768px) 250px, 100vw"
        />
      </button>

      {caption && <figcaption className="text-center text-sm mt-1">{caption}</figcaption>}

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-[1px] flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00249C]"
              aria-label="Schließen"
              title="Schließen (Esc)"
            >
              ✕
            </button>

            <div className="relative w-full h-[90vh]">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain rounded-md shadow-2xl"
                sizes="100vw"
              />
            </div>

            {caption && <div className="mt-2 text-center text-sm text-white/90">{caption}</div>}
          </div>
        </div>
      )}
    </figure>
  );
}




export default function AboutStatistics() {
  return (
    <div className="wrapper">
      <div className="bg" />

      {/* Navbar Section */}
      <Navbar_UseCases />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-10 text-black"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF, #D7D2CB)",
        }}>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-dark"
            style={{ color: "#00249C" }}>
          Mit Statistik komplexe Produktionsabläufe verstehen
        </h1>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold">
            Warum Statistik im Produktionsumfeld?
          </h2>
          <p className="text-justify hyphens-auto break-words">
              Produktionsprozesse sind von vielen Einflussfaktoren geprägt – von Maschinenzuständen über Materialverfügbarkeit 
              bis zu menschlichem Handeln. Mit belastbaren Messdaten aus dem KI‑unterstützten <strong>t4s‑System</strong> machen 
              etablierte statistische Methoden Abweichungen sichtbar, die sonst verborgen bleiben. 
              So wird Komplexität mess‑ und vergleichbar.
          </p>

        </section>

        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Wahrscheinlichkeit und Statistik – das Zusammenspiel
            </h2>

            <LightboxImage
              src="/images/250414_Erwart_KumuliertVerzögerung_1.png"
              alt="Kumulierte Erwartung der Verzögerung"
              caption={<>Kumulierte Erwartung<br/>der Verzögerung</>}
              className="md:float-right md:ml-6 md:mb-4 w-full md:w-[250px] md:self-start"
            />

            <p className="text-justify hyphens-auto break-words">
              Wahrscheinlichkeit beschreibt, wie wahrscheinlich ein Ereignis eintritt (z. B. Maschinenausfall, Verzögerung). 
              <strong>Statistik</strong> schätzt diese Wahrscheinlichkeiten aus Daten und überträgt sie auf reale Produktionssituationen. 
              Beides zusammen bildet die Grundlage für nachvollziehbare Prognosen und Entscheidungen.
            </p>
          </div>
        </section>


        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Komplexität greifbar machen
              </h2>
  
            <LightboxImage
              src="/images/Netzdiagramm_Komplexität.png"
              alt="Netzdiagramm"
              caption={<>Netzdiagramm<br/>Komplexität</>}
              className="md:float-right md:ml-6 md:mb-4 w-full md:w-[250px] md:self-start"
            />

            <p className="text-justify hyphens-auto break-words">
                Einzelne Prozessschritte wirken unscheinbar; in ihrer Verknüpfung entsteht ein hochkomplexes System. 
                Statistik reduziert diese Vielschichtigkeit auf gut interpretierbare Modelle. Über Verteilungen lassen 
                sich Abweichungen realitätsnah beschreiben.
            </p>

          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Planungsabweichungen erklären
              </h2>

            
            <LightboxImage
              src="/images/250414_WahrschAbwPlanungshorizont.png"
              alt="Planungsabweichungen begründen"
              caption={<>Der Einfluss<br/>des Planungshorizonts</>}
              className="md:float-right md:ml-6 md:mb-4 md:w-[250px] md:self-start"
            />
         

            <p className="text-justify hyphens-auto break-words">
                Warum weicht ein Produktionsplan von der Realität ab? Datenbasierte, statistische Analysen zeigen: 
                Abweichungen sind selten Zufall, sondern ergeben sich aus Wahrscheinlichkeiten und dem <strong>Planungshorizont</strong>. 
                Diese Transparenz stärkt die Priorisierung, stabilisiert Pläne und verbessert die Termintreue.
            </p>

          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Bewährte Verteilungen im Produktionskontext
              </h2>

            <LightboxImage
              src="/images/StatistikDiagramme_1.png"
              alt="Diagramme"
              caption={<>Verteilungen<br/>im Produktionskontext</>}
              className="md:float-right md:ml-6 md:mb-4 md:w-[250px] md:self-start"
            />
  
           
            <div className="sm:text-justify hyphens-auto break-words">
              <div className="mt-8 pl-6">
                <strong>Normalverteilung:</strong> – beschreibt natürliche Schwankungen, z. B. Toleranzen in der Fertigung.
              </div>

              <div className="mt-36 pl-6">
                <strong>Log-Normalverteilung:</strong> – für rechtsschiefe Prozesse, bei denen die meisten Werte nahe am 
                Median liegen, aber gelegentlich deutlich längere Bearbeitungs- oder Lieferzeiten auftreten.
              </div>

              <div className="mt-24 pl-6">
                <strong>Weibull-Verteilung:</strong> – flexibel für Lebensdauern und Ausfallzeiten; erfasst sowohl frühe 
                Fehler als auch Verschleissprozesse und ist ein Standard im Qualitäts- und Instandhaltungsmanagement.
              </div>
            </div>

          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Von Daten zur Prognose: Monte‑Carlo‑Simulation
          </h2>
          <p className="text-justify hyphens-auto break-words">
              Laufend erfasste t4s‑Daten speisen die <strong>Monte‑Carlo‑Simulationen</strong> über den gesamten Produktionsprozess. Zufallswerte 
              aus den ermittelten Verteilungen erzeugen viele mögliche Realisierungen. Dadurch werden Unsicherheiten quantifiziert 
              und Kennzahlen wie Durchlaufzeiten, Pufferbedarfe oder Liefertreue belastbar abgeschätzt.
          </p> 

          <LightboxImage
              src="/images/MontCarloSim_1.png"
              alt="Diagramme"
              caption={<>Methoden<br/>der Statistik</>}
              className="block mx-auto md:mb-4 md:w-[600px]"
          />

          <p className="text-justify hyphens-auto break-words">    
              <strong>Ergebnis:</strong> Ihre Produktion wird nicht nur datengetrieben, sondern auch statistisch fundiert – ein wichtiger 
              Schritt hin zur Smart Factory und zu weiterführenden Steuerungsmodellen (z. B. digitaler Zwilling).
            
          </p>
        </section>





      </main>

      {/* Footer Section */}
      <footer id="footer">
        <Footer />
      </footer>


    </div>
  );
}
