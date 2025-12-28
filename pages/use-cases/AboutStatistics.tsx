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
            In verketteten Produktionsprozessen entstehen Abweichungen nicht isoliert.
            Sie resultieren aus dem Zusammenwirken vieler einzelner Einflüsse, die teils zufälliger, teils systematischer Natur sind.
            Statistische Methoden ermöglichen es, diese Variabilität auf Systemebene zu analysieren und zu bewerten – nicht im Sinne der 
            Erklärung einzelner Ereignisse, sondern zur Beschreibung robuster Zusammenhänge im Gesamtprozess.
          </p>

        </section>

        <section className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Wahrscheinlichkeit und Statistik – das Zusammenspiel
            </h2>

            <p className="text-justify hyphens-auto break-words">
              Einzelne Ereignisse wie Störungen, Nacharbeit oder Rüstabweichungen lassen sich oft nur begrenzt vorhersagen.
              Ihre Auswirkungen – insbesondere Verzögerungen in der Durchlaufzeit – folgen jedoch statistischen Mustern.
              Statistik betrachtet daher nicht das einzelne Ereignis, sondern die Häufigkeit, Streuung und Überlagerung 
              vieler solcher Effekte über den gesamten Prozess hinweg.
            </p>

          </div>

          <aside>
             <LightboxImage
              src="/images/250414_Erwart_KumuliertVerzögerung_1.png"
              alt="Kumulierte Erwartung der Verzögerung"
              caption={<>Kumulierte Erwartung<br/>der Verzögerung</>}
              className="w-full"
            />

          </aside>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Verkettung der Prozessschritte und Fortpflanzung von Abweichungen
            </h2>

            <p className="text-justify hyphens-auto break-words">
              In mehrstufigen Prozessketten wirken Abweichungen nicht isoliert.
              Mit jeder zusätzlichen Prozessstufe steigt die Wahrscheinlichkeit, dass mindestens eine Abweichung auftritt
              und sich auf nachgelagerte Schritte auswirkt.
              Diese Fortpflanzungseffekte führen dazu, dass selbst scheinbar stabile Einzelprozesse in der Gesamtsicht
              zu relevanten Verzögerungen beitragen können.
              Gerade diese Verkettung macht statistische Betrachtungen im Produktionsumfeld notwendig.
            </p>
          </div>

          <aside className="w-full">
            <figure className="w-full">
              <button
                type="button"
                className="group block w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00249C] rounded-lg"
                onClick={() =>
                  window.open("/html/netzplan_produktion_3.html", "_blank", "width=1200,height=900")
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    window.open("/html/netzplan_produktion_3.html", "_blank", "width=1200,height=900");
                  }
                }}
                aria-label="Prozessdiagramm vergrößern"
                title="Klicken zum Vergrößern"
              >
                <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:border-gray-400 transition-all relative">
                  <Image
                    src="/images/ProcessNetPlan_0.jpg"
                    alt="Prozessdiagramm einer verketteten Prozesskette"
                    width={280}
                    height={180}
                    className="w-full h-auto"
                    sizes="(min-width: 768px) 280px, 100vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-70 px-4 py-2 rounded-md text-sm font-medium">
                      Klicken zum Vergrößern
                    </span>
                  </div>
                </div>
              </button>

              <figcaption className="text-center text-sm mt-1">
                Prozessdiagramm (interaktive Ansicht)
              </figcaption>
            </figure>
          </aside>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Komplexität greifbar machen
              </h2>

            <p className="text-justify hyphens-auto break-words">
                Einzelne Prozessschritte erscheinen für sich genommen oft überschaubar.
                In ihrer Verknüpfung entsteht jedoch ein hochkomplexes System mit zahlreichen Wechselwirkungen.
                Statistische Modelle ermöglichen es, diese Komplexität zu strukturieren, indem sie die zugrunde 
                liegende Variabilität über Verteilungen abbilden und damit interpretierbar machen.
            </p>
          </div>

            <aside>
              <LightboxImage
              src="/images/Netzdiagramm_Komplexität.png"
              alt="Netzdiagramm"
              caption={<>Netzdiagramm<br/>Komplexität</>}
              className="w-full"
            />

          </aside>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Planungsabweichungen erklären
              </h2>

         
            <p className="text-justify hyphens-auto break-words">
                Warum weicht ein Produktionsplan von der Realität ab?
                Datenbasierte statistische Analysen zeigen, dass Abweichungen häufig nicht rein zufällig auftreten, 
                sondern aus Wahrscheinlichkeiten, Abhängigkeiten und dem gewählten Planungshorizont resultieren.
                Diese Transparenz unterstützt eine fundierte Priorisierung, stabilisiert Planungsentscheidungen 
                und verbessert die Termintreue.
            </p>

          </div>
          <aside>
            <LightboxImage
              src="/images/250414_WahrschAbwPlanungshorizont.png"
              alt="Planungsabweichungen begründen"
              caption={<>Der Einfluss<br/>des Planungshorizonts</>}
              className="w-full"
            />
        
          </aside>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Verteilungen im Produktionskontext</h2>

          <p className="text-justify hyphens-auto break-words">
            Typische Prozessgrößen zeigen Streuungen, die sich durch geeignete Verteilungen modellieren lassen.
            Die folgenden drei Formen sind in der industriellen Praxis besonders bewährt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="space-y-2">
              <LightboxImage
                src="/images/Normalverteilung.png"
                alt="Normalverteilung"
                caption={<>Abb.&nbsp;X(a): Normalverteilung</>}
                className="w-full"
                thumbWidth={360}
                thumbHeight={240}
              />
              <p className="text-sm text-justify hyphens-auto break-words">
                Beschreibt natürliche Schwankungen um einen Mittelwert, z.&nbsp;B. Fertigungs- oder Messstreuungen.
              </p>
            </div>

            <div className="space-y-2">
              <LightboxImage
                src="/images/Lognormverteilung.png"
                alt="Lognormalverteilung"
                caption={<>Abb.&nbsp;X(b): Lognormalverteilung</>}
                className="w-full"
                thumbWidth={360}
                thumbHeight={240}
              />
              <p className="text-sm text-justify hyphens-auto break-words">
                Geeignet für rechtsschiefe Zeiten: viele Fälle nahe am Median, selten deutlich längere Bearbeitungs- oder Lieferzeiten.
              </p>
            </div>

            <div className="space-y-2">
              <LightboxImage
                src="/images/Weibullverteilung.png"
                alt="Weibull-Verteilung"
                caption={<>Abb.&nbsp;X(c): Weibull-Verteilung</>}
                className="w-full"
                thumbWidth={360}
                thumbHeight={240}
              />
              <p className="text-sm text-justify hyphens-auto break-words">
                Standard für Lebensdauern und Ausfallzeiten; modelliert frühe Ausfälle ebenso wie Verschleißphasen.
              </p>
            </div>
          </div>
        </section>


        <section className="space-y-6">
          <h2 className="text-xl font-semibold">
            Von Daten zur Prognose: Monte-Carlo-Simulation
          </h2>

          <div className="space-y-4">
            <p className="text-justify hyphens-auto break-words">
              Monte-Carlo-Simulationen nutzen die zuvor beschriebenen Verteilungen, um die Auswirkungen von Variabilität entlang
              der gesamten Prozesskette quantitativ abzuschätzen. Dazu werden viele mögliche Prozessverläufe rechnerisch
              durchgespielt, indem Zufallswerte aus den geschätzten Verteilungen gezogen und zu vollständigen Realisierungen
              kombiniert werden.
            </p>

            <p className="text-justify hyphens-auto break-words">
              Das Ergebnis ist nicht eine einzelne Kennzahl, sondern eine Wahrscheinlichkeitsverteilung möglicher Resultate
              (z.&nbsp;B. Durchlaufzeit oder Termintreue). Dadurch lassen sich typische Verläufe ebenso wie pessimistische
              Szenarien und seltene Extremfälle transparent beschreiben.
            </p>
          </div>

          <LightboxImage
            src="/images/MontCarloSim_1.png"
            alt="Monte-Carlo-Simulation: Verteilungen, Stichproben und resultierende Bandbreiten"
            caption={<>Abb.&nbsp;X: Monte-Carlo-Simulation zur Quantifizierung von Unsicherheiten entlang einer Prozesskette</>}
            className="w-full"
            thumbWidth={960}
            thumbHeight={540}
          />

          <p className="text-justify hyphens-auto break-words">
            <strong>Ergebnis:</strong> Auf Basis laufend erfasster Prozessdaten wird die Produktion nicht nur datengetrieben,
            sondern statistisch fundiert bewertbar. Dies schafft eine robuste Grundlage für operative Entscheidungen
            (z.&nbsp;B. Pufferdimensionierung, Priorisierung) und für weiterführende Steuerungsmodelle, etwa im Kontext
            eines digitalen Zwillings.
          </p>
        </section>


        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
          <p className="font-semibold mb-2">Einordnung der Ergebnisse</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Die Modelle basieren auf gemessenen oder geschätzten Prozessdaten.</li>
            <li>Abhängigkeiten zwischen Prozessen werden vereinfacht abgebildet.</li>
            <li>Die Ergebnisse liefern Orientierung und Vergleichbarkeit – keine exakten Vorhersagen einzelner Aufträge.</li>
          </ul>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Erkenntnisse operativ nutzen
          </h2>
          <p className="text-justify hyphens-auto break-words">  
          Je früher Abweichungen erkannt werden, desto besser lassen sich ihre Auswirkungen begrenzen.
          Real-Time-Monitoring liefert die dafür notwendige Datengrundlage und macht statistische Zusammenhänge 
          operativ nutzbar.
          So wird aus abstrakter Variabilität eine steuerbare Größe im Produktionsalltag.

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
