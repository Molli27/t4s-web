import React from "react";

const costData = [
  { Position: "Projektkosten", Total: "1'440" },
  { Position: "Erfassung der Artikel (Foto & Daten)", Total: "285" },
  { Position: "KI-Modell (Labeling, Training, Deployment)", Total: "6'000" },
  { Position: "Kamera-Installation inkl. Inbetriebnahme", Total: "1'120" },
  { Position: "Reporting (Excel-Daten)", Total: "150" },
  { Position: "Subscription Kamera & Edge-Computer (3 Monate)", Total: "1'800" },
  { Position: "Gesamtbetrag", Total: "10'795" },
  
];

const CostTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="cost-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Total (CHF)</th>
          </tr>
        </thead>
        <tbody>
          {costData.slice(0, -1).map((row, index) => (
            <tr key={index}>
              <td>{row.Position}</td>
              <td className="text-right">{row.Total}</td>
            </tr>
          ))}

          {/* Last row: Total */}
          <tr className="font-semibold">
            <td className="text-center">{costData[costData.length - 1].Position}</td>
            <td className="text-right">{costData[costData.length - 1].Total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CostTable;
