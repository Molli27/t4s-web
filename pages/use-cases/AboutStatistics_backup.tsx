import { useEffect, useState } from "react";
import Navbar_UseCases from "../../components/Navbar_UseCases";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function AboutStatistics() {
  // Lightbox-State
  const [openLightbox, setOpenLightbox] = useState(false);

  // ESC zum Schließen
  useEffect(() => {
    if (!openLightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenLightbox(false);
    };

    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openLightbox]);


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
          Mit Statistik komplexe Produtionsabläufe verstehen
        </h1>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold">
            Warum Statistik im Produktionsumfeld?
          </h2>
          <p className="text-justify hyphens-auto break-words">
              Produktionsprozesse sind komplex und von vielen Einflussfaktoren geprägt – von Maschinenlaufzeiten über 
              Materialverfügbarkeit bis hin zu menschlichem Handeln. Statistik liefert das Fundament, um diese Unsicherheiten 
              messbar und vergleichbar zu machen. Sie macht sichtbar, was auf den ersten Blick unsichtbar bleibt.
          </p>

          

        </section>

        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Wahrscheinlichkeit und Statistik – das Zusammenspiel
            </h2>

            <figure className="md:float-right md:ml-6 md:mb-4 w-full md:w-[250px] md:self-start">
              {/* Thumbnail klickbar */}
              <button
                type="button"
                onClick={() => setOpenLightbox(true)}
                className="group block w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00249C] rounded-md"
                aria-label="Bild vergrößern"
              >
                <Image
                  src="/images/250414_Erwart_KumuliertVerzögerung_1.png"
                  alt="Statistik in der Produktion"
                  width={250}
                  height={150}
                  className="w-full h-auto rounded-md shadow-2xl transition-transform group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 250px, 100vw"
                  priority={false}
                />
              </button>
              <figcaption className="text-center text-sm">
                Kumulierte Erwartung <br />der Verzögerung
              </figcaption>
            </figure>

            <p className="text-justify hyphens-auto break-words">
              Wahrscheinlichkeit beschreibt, wie wahrscheinlich ein bestimmtes Ereignis ist, zum Beispiel ein
              Maschinenausfall oder eine Verzögerung in einem Prozessschritt. Statistik ermöglicht es, diese
              Wahrscheinlichkeiten aus Daten zu ermitteln und auf reale Produktionssituationen anzuwenden. Zusammen
              bilden sie die Grundlage für belastbare Prognosen.
            </p>
          </div>
        </section>


        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Komplexe Systeme verstehen
              </h2>
  
            <figure className="md:float-right md:ml-6 md:mb-4 w-full md:w-[250px]">
              <Image
                src="/images/250326_t4s_Process.png"
                alt="t4s Process diagram"
                width={250}
                height={150}
                className="rounded-md"
              />
              <figcaption className="text-left text-sm">
                t4s Prozess für<br />XXX
              </figcaption>
            </figure>
         

            <p className="text-justify hyphens-auto break-words">
                Einzelne Prozessschritte wirken oft unscheinbar, doch in ihrer Gesamtheit entsteht ein hochkomplexes System. 
                Statistik bietet Methoden, diese Vielschichtigkeit zu reduzieren und zu modellieren. Mit Hilfe von 
                Verteilungen – wie Normal- oder Weibull-Verteilungen – können Abweichungen realitätsnah beschrieben werden.
            </p>

          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Planungsabweichungen begründen
              </h2>

            
            <figure className="md:float-right md:ml-6 md:mb-4 w-full md:w-[250px]">

              {/* Thumbnail klickbar */}
              <button
                type="button"
                onClick={() => setOpenLightbox(true)}
                className="group block w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00249C] rounded-md"
                aria-label="Bild vergrößern"
              >
                <Image
                  src="/images/250414_WahrschAbwPlanungshorizont.png"
                  alt="Planungsabweichungen"
                  width={250}
                  height={150}
                  className="rounded-md"
                  sizes="(min-width: 768px) 250px, 100vw"
                  priority={false}
                />
              </button>
              <figcaption className="text-center text-sm">
                Wahrscheinlichkeit für<br />Planungsabweichungen
              </figcaption>
            </figure>
         

            <p className="text-justify hyphens-auto break-words">
                Warum weicht ein Produktionsplan von der Realität ab? Mithilfe statistischer Methoden lassen sich Ursachen 
                klarer erkennen: Abweichungen sind keine Zufälle, sondern lassen sich durch Wahrscheinlichkeiten erklären. 
                So entsteht Transparenz, die es dem Management erlaubt, fundierte Entscheidungen zu treffen.
            </p>

          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Bewährte Methoden und Modelle
              </h2>

            
            <figure className="md:float-right md:ml-6 md:mb-4 w-full md:w-[250px]">
              <Image
                src="/images/250326_t4s_Process.png"
                alt="t4s Process diagram"
                width={250}
                height={150}
                className="rounded-md"
              />
              <figcaption className="text-left text-sm">
                t4s Prozess für<br />YYY
              </figcaption>
            </figure>
         

            <p className="text-justify hyphens-auto break-words">
                Im Produktionsumfeld haben sich verschiedene statistische Ansätze etabliert:
            </p>
            <ul className="list-none pl-0 space-y-2 leading-6 sm:list-disc sm:list-outside 
                  sm:pl-6 sm:space-y-1 sm:leading-7 sm:text-justify marker:text-[#00249C] 
                  marker:font-semibold">
                <li><strong>Normalverteilung:</strong> beschreibt viele natürliche Schwankungen, z. B. Bearbeitungszeiten.</li>
                <li><strong>Weibull-Verteilung:</strong> häufig genutzt für Lebensdauer- und Ausfallanalysen.</li>
                <li><strong>Monte-Carlo-Simulation:</strong> ermöglicht die Abbildung ganzer Prozessketten und deren Unsicherheiten.</li>
            </ul>

          </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer id="footer">
        <Footer />
      </footer>


      {/* Lightbox Overlay */}

      {openLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-[1px] flex items-center justify-center p-4"
          onClick={() => setOpenLightbox(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenLightbox(false)}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00249C]"
              aria-label="Schließen"
              title="Schließen (Esc)"
            >
              ✕
            </button>

            <Image
              src="/images/250414_Erwart_KumuliertVerzögerung_1.png"
              alt="Statistik groß"
              width={1920}
              height={1080}
              className="w-full h-auto max-h-[90vh] rounded-md shadow-2xl"
              sizes="100vw"
              priority={false}
            />
    </div>
  </div>
)}



    </div>
  );
}
