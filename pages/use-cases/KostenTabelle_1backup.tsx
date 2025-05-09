import React from "react";

const costData = [
  {
    Position: "Projektkosten",
    Einheit: "8 Std. à 180 CHF",
    Menge: "1",
    Total: "1'440"
  },
  {
    Position: "Erfassung der Artikel (Foto & Daten)",
    Einheit: "95 CHF / Artikel",
    Menge: "3",
    Total: "285"
  },

  {
    Position: "KI-Modell (Labeling, Training, Deployment)",
    Einheit: "8 Std. à 250 CHF",
    Menge: "3",
    Total: "6'000"
  },
  {
    Position: "Kamera-Installation inkl. Inbetriebnahme",
    Einheit: "8 Std. à 140 CHF",
    Menge: "1",
    Total: "1'120"
  },
  {
    Position: "Reporting (Excel-Daten)",
    Einheit: "50 CHF / Report",
    Menge: "3",
    Total: "150"
  },
  {
    Position: "Subscription Kamera & Edge-Computer (3 Monate)",
    Einheit: "50 CHF / Woche",
    Menge: "3",
    Total: "1'800"
  },
  {
    Position: "Gesamtbetrag",
    
    Total: "10'795"
  },
  
];

const CostTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="cost-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Einheit</th>
            <th>Menge</th>
            <th>Total (CHF)</th>
            
          </tr>
        </thead>
        <tbody>
          {costData.slice(0, -1).map((row, index) => (
            <tr key={index}>
              <td>{row.Position}</td>
              <td>{row.Einheit}</td>
              <td>{row.Menge}</td>
              <td>{row.Total}</td>
              
            </tr>
          ))}

          {/* Last row: Merge "Einheit" & "Menge" */}
          <tr className="border">
            <td className="border px-4 py-2 text-center">{costData[costData.length - 1].Position}</td>
            <td className="border px-4 py-2 text-center" colSpan={2}> {/* Merging the two columns */}
              {costData[costData.length - 1].Einheit} {costData[costData.length - 1].Menge}
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default CostTable;
