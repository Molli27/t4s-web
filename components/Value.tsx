import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full pt-20 pb-16 px-4 sm:px-6 lg:px-8 mt-[100px]"
      style={{
        background: "linear-gradient(to bottom, #D7D2CB, #FFFFFF)",
      }}
      >

      <div className="max-w-4xl mx-auto space-y-8 text-black">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-dark"
            style={{ color: "#00249C" }}>
          Der Nutzen
        </h1>

        <p className="text-justify hyphens-auto break-words">
          Die Produktkarten mit KPIs – wie im Beispiel gezeigt – geben dem Management sofort Klarheit: 
          Auf einen Blick wird sichtbar, ob ein Artikel profitabel oder problematisch ist. Ampelfarben und 
          Kennzahlen wie Lead Time, Non-Value-Added Time und Lagerdauer zeigen Handlungsbedarf eindeutig auf.
        </p>

        <div className="mt-6 flex flex-col md:flex-row md:items-start gap-12">
          {/* Bild links */}
          <div className="w-full md:w-1/4 max-w-sm">
            <Image
              src="/images/Dashboard_UX_Card_C_a.png"
              alt="t4s Dashboard Card"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              sizes="(min-width: 768px) 33vw, 100vw"
              priority={false}
            />
          </div>

          <div className="space-y-6 w-full md:w-2/3">
            <h2 className="text-xl font-bold">Ihre Vorteile mit t4s</h2>

            <ul className="list-none pl-0 space-y-2 text-[15px] leading-6 sm:list-disc sm:list-outside 
                          sm:pl-6 sm:space-y-1 sm:text-base sm:leading-7 sm:text-justify marker:text-[#00249C] 
                          marker:font-semibold">
              <li>Informationen in Echtzeit</li>
              <li>Transparenz über alle relevanten Kennzahlen</li>
              <li>Fundierte Entscheidungsgrundlage</li>
              <li>Frühzeitige Erkennung von Problemen</li>
              <li>Verbesserte Kommunikation im Team</li>
              
            </ul>
            <p className='text-justify hyphens-auto break-words'>
              Diese KPI-Karten sind der Startpunkt für Drill-down-Funktionen zur Ursachenanalyse 
              und bilden die Grundlage für fundierte Entscheidungen im Tagesgeschäft, wie auch in der strategischen Planung.
            </p>
          </div>
        </div>


        <p className="text-justify">
            Mit einem Klick öffnet sich das t4s-Dashboard und bietet eine umfassende Übersicht über alle relevanten Produktionskennzahlen. 
            Es ermöglicht die Identifikation des Handlungsfeldes und unterstützt die proaktive Massnahmenplanung.
        </p>


        <div className="mt-6 flex flex-col md:flex-row md:items-start">
          {/* Bild zentriert */}
          <div>
            <hr className="border-gray-300 my-8" />
            <div className="w-full max-w-4xl mx-auto">
              <Image
                src="/images/PriorityInsights_b.png"
                alt="t4s Business Insights"
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
                sizes="(min-width: 1024px) 768px, (min-width: 640px) 90vw, 100vw"
                priority={false}
              />
            </div>
            <hr className="border-gray-300 my-8" />
          </div>
        </div>


        <div className="space-y-4">
          <h2 className="text-xl font-bold">Das Dashboard</h2>
          <p className="text-justify sm: text-l ">
            
          </p>
          <p className="text-justify">
            
          </p>
        </div>
         

        <div className="my-8 px-4 text-center space-y-4">
          <h2 className="text-xl font-bold mb-4">Die Umsetzung in der Produktion</h2>
          {/* Center: Video */}
          <div className="w-full max-w-3xl">
            <div className="relative w-full overflow-hidden rounded-lg shadow-md">
              {/* 16:9 Ratio */}
              <div className="aspect-video">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full rounded-lg shadow-md"
                  aria-label="t4s Animation"
                  poster="/images/t4s_DashboardAnim_poster.jpg"
                  controlsList="nodownload nofullscreen"
                  >
                  <source
                    src="/videos/t4s_DashboardAnim4website_f2.mp4"
                    type="video/mp4"
                    media="(max-width: 768px)"
                  />
                  <source
                    src="/videos/t4s_DashboardAnim4website_f2.mp4"
                    type="video/mp4"
                    media="(min-width: 769px)"
                  />
                  Dein Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-justify font-bold">
            Ein Dashboard, das Rätselraten beendet und Managemententscheidungen klar unterstützt.
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default Services;
