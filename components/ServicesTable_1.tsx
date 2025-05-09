import React from "react";

const servicesData = [
  {
    step: "1",
    beschaffung: "Definition der Produkte, deren Herstellung durch die neue Maschine effizienter erfolgen soll.",
    t4sSystem: "Definition der Produkte, für die eine Effizienzsteigerung erforderlich ist.",
  },
  {
    step: "2",
    beschaffung: "Wirtschaftlichkeitsprüfung durchführen.",
    t4sSystem: `Erwartete Einsparungen den Kosten für das t4s-Systems gegenüberstellen.`,
  },

  {
    step: "3",
    beschaffung: "Maschinentyp und Konfiguration (Grösse, Leistung, Funktionen) festlegen.",
    t4sSystem: `Ein System für den Einsatz. Konfiguration auf die Produkte abgestimmt. 
                System und Komponenten sind standardisiert, was hohe Betriebssicherheit gewährleistet.`
    
  },
  {
    step: "4",
    beschaffung: "Peripherie und Optionen für spezifische Anforderungen bestimmen.",
    t4sSystem: `Peripherie: Befestigungshilfen, Beleuchtung, Abdeckungen.
                Optionen:   Daten-Schnittstellen, Reportings, etc..`,
    
  },
  {
    step: "5",
    beschaffung: "Leistungsumfang überprüfen und final abstimmen",

  },
  
];

const ServicesTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="services-table">
        <thead>
          <tr>
            <th>Schritt</th>
            <th>Beschaffung einer Maschine</th>
            <th>Projekt mit t4s-System</th>
            
          </tr>
        </thead>
        <tbody>
          {servicesData.slice(0, -1).map((row, index) => (
            <tr key={index}>
              <td>{row.step}</td>
              <td>{row.beschaffung}</td>
              <td>{row.t4sSystem}</td>
              
            </tr>
          ))}

          {/* Last row: Merge "Beschaffung einer Maschine" & "t4s-System" */}
          <tr className="border">
            <td className="border px-4 py-2 text-center">{servicesData[servicesData.length - 1].step}</td>
            <td className="border px-4 py-2 text-center" colSpan={2}> {/* Merging the two columns */}
              {servicesData[servicesData.length - 1].beschaffung} {servicesData[servicesData.length - 1].t4sSystem}
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
