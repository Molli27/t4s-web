import { useState } from "react";
import Image from "next/image";


type ScaleLabels = Record<number, string>; // numerischer Index erlaubt

type Question = {
  // ...
  scaleMin?: number;
  scaleMax?: number;
  scaleLabels?: ScaleLabels;
};



const questions = [
  {
    id: 1,
    text: "Wie zuverlässig können Sie aktuell die tatsächliche Durchlaufzeit einzelner Produkte auf dem Shopfloor erfassen?",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      1: "gar nicht",
      5: "sehr zuverlässig",
    },
    optionalText: "Was ist dabei die grösste Herausforderung?",
  },
  {
    id: 2,
    type: "radio",
    text: "Wie gross ist Ihrer Einschätzung nach der Einfluss von nicht erkannten oder verspätet erkannten Prozessabweichungen auf Ihre Produktionskosten?",
    options: ["Gering", "Mittel", "Hoch", "Sehr hoch", "Kann ich nicht beurteilen"],
  },
  {
    id: 3,
    type: "radio",
    text: "Welche Methoden oder Systeme nutzen Sie heute, um Abweichungen in Durchlaufzeiten oder im Materialfluss zu erkennen?",
    options: ["ERP-Auswertungen", "Manuelle Erfassung", "Keine systematische Erfassung", "Andere"],
    optionalText: "Weitere Erläuterung (optional):",
  },
  {
    id: 4,
    type: "radio",
    text: "Wie schnell erkennen Sie aktuell, wenn sich ein Prozess systematisch verschlechtert (z. B. häufigere Verzögerungen bei einem bestimmten Artikel)?",
    options: [
      "Innerhalb von Stunden",
      "Innerhalb eines Tages",
      "Innerhalb mehrerer Tage",
      "Nur bei Beschwerden / Problemen",
      "Wird aktuell nicht erkannt",
    ],
  },
  {
    id: 5,
    type: "scale",
    text: "Wenn Sie heute ein System hätten, das automatisch Durchlaufzeiten misst, Abweichungen erkennt und Handlungsbedarf frühzeitig meldet – wie wahrscheinlich wäre es, dass Sie es in den nächsten 6–12 Monaten einsetzen würden?",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: {
      1: "sehr unwahrscheinlich",
      5: "sehr wahrscheinlich",
    },
  },
];

function downloadJSON(data: any, meta: any) {
  const exportData = {
    meta: {
      ...meta,
      exportDatum: new Date().toISOString(),
    },
    antworten: data,
  };

  const jsonStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const filename = `fragebogen_${meta.name}_${meta.vorname}_${meta.datum}.json`.replace(/[^a-zA-Z0-9_\-\.]/g, "_");

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}


export default function Fragebogen() {
  const [step, setStep] = useState(0);  // 0 = Startseite, 1 = Frage 1 usw.
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});

  const [meta, setMeta] = useState({
    vorname: "",
    name: "",
    firma: "",
    funktion: "",
    email: "",
    telefon: "",
    datum: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
  });

  const currentQuestion = questions[step - 1];

  const handleScaleAnswer = (value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { ...prev[currentQuestion.id], scale: value },
    }));
  };

  const handleOptionalText = (text: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { ...prev[currentQuestion.id], comment: text },
    }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const isCompleted = step >= questions.length+1;

  // === Schritt 0 = STARTSEITE === 
  if (step === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
          <Image src="/logo.png" alt="Firmenlogo" width={150} height={150} className="mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Fragebogen zur Prozessanalyse</h1>
          <p className="text-gray-700 mb-6">
            Dieser Fragebogen hilft uns, typische Herausforderungen im Shopfloor besser zu verstehen und passende
            Lösungen zu entwickeln. Ihre Angaben bleiben anonym.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
            <input
              type="text"
              placeholder="Vorname"
              value={meta.vorname}
              onChange={(e) => setMeta({ ...meta, vorname: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Name"
              value={meta.name}
              onChange={(e) => setMeta({ ...meta, name: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Firma"
              value={meta.firma}
              onChange={(e) => setMeta({ ...meta, firma: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Funktion"
              value={meta.funktion}
              onChange={(e) => setMeta({ ...meta, funktion: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="E-Mail"
              value={meta.email}
              onChange={(e) => setMeta({ ...meta, email: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Telefonnummer"
              value={meta.telefon}
              onChange={(e) => setMeta({ ...meta, telefon: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            onClick={nextStep}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Jetzt starten
          </button>
        </div>
      </div>
    );
  }


  // === Schritt 6 = ABSCHLUSS ===
  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Vielen Dank für Ihre Teilnahme!</h2>
          <p className="text-gray-700 mb-6">
            Ihre Antworten wurden lokal gespeichert und können nun ausgewertet oder heruntergeladen werden.
          </p>
    
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => downloadJSON(answers, meta)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Antworten als JSON speichern
            </button>
            <button
              onClick={() => setStep(0)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Zurück zur Startseite
            </button>
            <button
              onClick={() => {
                setStep(0);
                setAnswers({});
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Fragebogen zurücksetzen
            </button>
          </div>
    
          {/* Zusammenfassung direkt hier */}
          <div className="mt-10 text-left">
            <h3 className="text-lg font-semibold mb-4">Ihre Antworten im Überblick:</h3>
            <ul className="space-y-6">
              {questions.map((q) => {
                const answer = answers[q.id];
                return (
                  <li key={q.id}>
                    <p className="font-medium text-gray-800">{q.text}</p>
    
                    {q.type === "scale" && answer?.scale && (
                      <p className="text-gray-700 mt-1">
                        Antwort: {answer.scale} / {q.scaleMax}
                      </p>
                    )}
                    {q.type === "radio" && answer?.selected && (
                      <p className="text-gray-700 mt-1">Antwort: {answer.selected}</p>
                    )}
                    {q.type === "checkbox" && Array.isArray(answer?.selected) && (
                      <p className="text-gray-700 mt-1">
                        Antworten: {answer.selected.join(", ")}
                      </p>
                    )}
                    {answer?.comment && (
                      <p className="text-sm text-gray-600 mt-1 italic">
                        Kommentar: {answer.comment}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }


  // === SCHRITT 1 - 5 FRAGEN ===
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        {/* Fortschrittsanzeige */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">
            Frage {step} von {questions.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all"
              style={{ width: `${(step / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Frage {currentQuestion.id}</h2>
        <p className="mb-6 text-gray-800">{currentQuestion.text}</p>

        {/* Skalenfrage */}
        {currentQuestion.scaleLabels !== undefined
          && typeof currentQuestion.scaleMin === "number"
          && typeof currentQuestion.scaleMax === "number" && (
          <p className="text-sm italic text-gray-500 mb-2">
            ({currentQuestion.scaleMin} = {currentQuestion.scaleLabels[currentQuestion.scaleMin]},
            {currentQuestion.scaleMax} = {currentQuestion.scaleLabels[currentQuestion.scaleMax]})
          </p>
        )}

            {Array.from({ length: currentQuestion.scaleMax }, (_, i) => {
              const value = i + 1;
              const selected = answers[currentQuestion.id]?.scale === value;
              return (
                <button
                  key={value}
                  onClick={() =>
                    setAnswers((prev) => ({
                      ...prev,
                      [currentQuestion.id]: { ...prev[currentQuestion.id], scale: value },
                    }))
                  }
                  className={`px-4 py-2 border rounded-full transition ${
                    selected
                      ? "bg-blue-700 text-white border-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {value}
                </button>
              );
            }
          )}
        </div> 
      

 

      )}

      {/* Radio-Buttons (Einfachauswahl) */}
      {currentQuestion.type === "radio" && (
        <div className="space-y-2 mb-6 pl-8">
          {currentQuestion.options.map((option: string) => (
            <label key={option} className="block">
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={option}
                className="mr-2"
                checked={answers[currentQuestion.id]?.selected === option}
                onChange={() =>
                  setAnswers((prev) => ({
                    ...prev,
                    [currentQuestion.id]: { selected: option },
                  }))
                }
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {/* Checkboxen (Mehrfachauswahl) */}
      {currentQuestion.type === "checkbox" && (
        <div className="space-y-2 mb-6">
          {currentQuestion.options.map((option: string) => {
            const selectedValues = answers[currentQuestion.id]?.selected || [];
            const isChecked = selectedValues.includes(option);
            return (
              <label key={option} className="block">
                <input
                  type="checkbox"
                  value={option}
                  className="mr-2"
                  checked={isChecked}
                  onChange={() => {
                    const updatedValues = isChecked
                      ? selectedValues.filter((val: string) => val !== option)
                      : [...selectedValues, option];
                    setAnswers((prev) => ({
                      ...prev,
                      [currentQuestion.id]: { ...prev[currentQuestion.id], selected: updatedValues },
                    }));
                  }}
                />
                {option}
              </label>
            );
          })}
        </div>
      )}

      {/* Optionales Textfeld */}
      {currentQuestion.optionalText && (
        <div className="mb-6">
          <label className="block mb-2 text-gray-600">{currentQuestion.optionalText}</label>
          <textarea
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md"
            value={answers[currentQuestion.id]?.comment || ""}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                [currentQuestion.id]: { ...prev[currentQuestion.id], comment: e.target.value },
              }))
            }
          />
        </div>
      )}

      {/* Weiter-Button */}
      <button
        onClick={nextStep}
        disabled={!answers[currentQuestion.id]}
        className={`px-6 py-2 rounded-lg transition ${
          answers[currentQuestion.id]
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Weiter
      </button>
    </div>
  </div>
  );
  // Ende der Fragen
}
