// pages/fragebogen_de.tsx
import { useState } from "react";
import Image from "next/image";

/** ---------- Typen ---------- */
type ScaleLabels = Record<number, string>;

type AnswerValue = {
  scale?: number;
  selected?: string | string[];
  comment?: string;
};
type Answers = Record<number, AnswerValue>;

type Question = {
  id: number;
  text: string;
  type: "scale" | "radio" | "checkbox";
  scaleMin?: number;
  scaleMax?: number;
  scaleLabels?: ScaleLabels;
  options?: string[];
  optionalText?: string;
};

type Meta = {
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  date: string; // YYYY-MM-DD
};

/** ---------- Fragen ---------- */
const questions: Question[] = [
  {
    id: 1,
    text:
      "Wie zuverlässig können Sie aktuell die tatsächliche Durchlaufzeit einzelner Produkte auf dem Shopfloor erfassen?",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { 1: "gar nicht", 5: "sehr zuverlässig" } satisfies ScaleLabels,
    optionalText: "Was ist dabei die grösste Herausforderung?",
  },
  {
    id: 2,
    type: "radio",
    text:
      "Wie gross ist Ihrer Einschätzung nach der Einfluss von nicht erkannten oder verspätet erkannten Prozessabweichungen auf Ihre Produktionskosten?",
    options: [
      "Gering",
      "Mittel",
      "Hoch",
      "Sehr hoch",
      "Kann ich nicht beurteilen",
    ],
  },
  {
    id: 3,
    type: "radio",
    text:
      "Welche Methoden oder Systeme nutzen Sie heute, um Abweichungen in Durchlaufzeiten oder im Materialfluss zu erkennen?",
    options: [
      "ERP-Auswertungen",
      "Manuelle Erfassung",
      "Keine systematische Erfassung",
      "Andere",
    ],
    optionalText: "Weitere Erläuterung (optional):",
  },
  {
    id: 4,
    type: "radio",
    text:
      "Wie schnell erkennen Sie aktuell, wenn sich ein Prozess systematisch verschlechtert (z. B. häufigere Verzögerungen bei einem bestimmten Artikel)?",
    options: [
      "Innerhalb einer Stunde",
      "Innerhalb eines Tages",
      "In wenigen Tagen",
      "Nur bei Reklamationen",
      "Aktuell keine systematische Erkennung",
    ],
  },
  {
    id: 5,
    type: "scale",
    text:
      "Wenn Sie ein System hätten, das automatisch Durchlaufzeiten misst, Abweichungen erkennt und Handlungsbedarf frühzeitig meldet – wie wahrscheinlich wäre der Einsatz in den nächsten 6–12 Monaten?",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { 1: "sehr unwahrscheinlich", 5: "sehr wahrscheinlich" } satisfies ScaleLabels,
  },
];

/** ---------- UI-Texte ---------- */
const ui = {
  startTitle: "Fragebogen zur Prozessanalyse",
  startText:
    "Dieser Fragebogen hilft uns, typische Herausforderungen auf dem Shopfloor besser zu verstehen und passende Lösungen zu entwickeln. Ihre Antworten bleiben anonym.",
  fields: {
    firstName: "Vorname",
    lastName: "Name",
    company: "Firma",
    role: "Funktion",
    email: "E‑Mail",
    phone: "Telefonnummer",
  },
  startButton: "Starten",
  questionLabel: (step: number, total: number) => `Frage ${step} von ${total}`,
  scaleDescription: (minLabel: string, maxLabel: string, min: number, max: number) =>
    `(${min} = ${minLabel}, ${max} = ${maxLabel})`,
  nextButton: "Weiter",
  summaryTitle: "Vielen Dank für Ihre Teilnahme!",
  summaryText:
    "Ihre Antworten wurden lokal gespeichert und können jetzt angesehen oder heruntergeladen werden.",
  downloadButton: "Antworten herunterladen (JSON)",
  restartButton: "Neu starten",
  resetButton: "Fragebogen zurücksetzen",
  reviewTitle: "Übersicht Ihrer Antworten:",
  labels: {
    answer: "Antwort",
    answers: "Antworten",
    comment: "Kommentar",
  },
};

/** ---------- Export-Helper ---------- */
function downloadJSON(data: Answers, meta: Meta) {
  const exportData = {
    meta: {
      ...meta,
      exportDate: new Date().toISOString(),
    },
    answers: data,
  };

  const jsonStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const filename = `fragebogen_${meta.lastName}_${meta.firstName}_${meta.date}.json`.replace(
    /[^a-zA-Z0-9_\-\.]/g,
    "_"
  );

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

/** ---------- Komponente ---------- */
export default function FragebogenDe() {
  // 0 = Startseite; ab 1: Fragen; Abschluss = questions.length + 1
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [meta, setMeta] = useState<Meta>({
    firstName: "",
    lastName: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const currentQuestion = questions[step - 1];
  const isCompleted = step >= questions.length + 1;

  const nextStep = () => setStep((s) => s + 1);

  // ---------- Startseite ----------
  if (step === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
          <Image src="/logo.png" alt="Logo" width={150} height={150} className="mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">{ui.startTitle}</h1>
          <p className="text-gray-700 mb-6">{ui.startText}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
            <input
              type="text"
              placeholder={ui.fields.firstName}
              value={meta.firstName}
              onChange={(e) => setMeta({ ...meta, firstName: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder={ui.fields.lastName}
              value={meta.lastName}
              onChange={(e) => setMeta({ ...meta, lastName: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder={ui.fields.company}
              value={meta.company}
              onChange={(e) => setMeta({ ...meta, company: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder={ui.fields.role}
              value={meta.role}
              onChange={(e) => setMeta({ ...meta, role: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder={ui.fields.email}
              value={meta.email}
              onChange={(e) => setMeta({ ...meta, email: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder={ui.fields.phone}
              value={meta.phone}
              onChange={(e) => setMeta({ ...meta, phone: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <button onClick={nextStep} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            {ui.startButton}
          </button>
        </div>
      </div>
    );
  }

  // ---------- Abschluss ----------
  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">{ui.summaryTitle}</h2>
          <p className="text-gray-700 mb-6">{ui.summaryText}</p>

          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => downloadJSON(answers, meta)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              {ui.downloadButton}
            </button>
            <button
              onClick={() => setStep(0)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {ui.restartButton}
            </button>
            <button
              onClick={() => {
                setStep(0);
                setAnswers({});
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              {ui.resetButton}
            </button>
          </div>

          <div className="mt-10 text-left">
            <h3 className="text-lg font-semibold mb-4">{ui.reviewTitle}</h3>
            <ul className="space-y-6">
              {questions.map((q) => {
                const answer = answers[q.id];
                return (
                  <li key={q.id}>
                    <p className="font-medium text-gray-800">{q.text}</p>

                    {q.type === "scale" && typeof answer?.scale === "number" && (
                      <p className="text-gray-700 mt-1">
                        {ui.labels.answer}: {answer.scale} / {q.scaleMax}
                      </p>
                    )}
                    {q.type === "radio" && typeof answer?.selected === "string" && (
                      <p className="text-gray-700 mt-1">
                        {ui.labels.answer}: {answer.selected}
                      </p>
                    )}
                    {q.type === "checkbox" && Array.isArray(answer?.selected) && (
                      <p className="text-gray-700 mt-1">
                        {ui.labels.answers}: {(answer.selected as string[]).join(", ")}
                      </p>
                    )}
                    {answer?.comment && (
                      <p className="text-sm text-gray-600 mt-1 italic">
                        {ui.labels.comment}: {answer.comment}
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

  // ---------- Fragen (Schritte 1..N) ----------
  const scaleMin =
    currentQuestion?.type === "scale" && typeof currentQuestion.scaleMin === "number"
      ? currentQuestion.scaleMin
      : 1;
  const scaleMax =
    currentQuestion?.type === "scale" && typeof currentQuestion.scaleMax === "number"
      ? currentQuestion.scaleMax
      : 5;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        {/* Fortschritt */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">{ui.questionLabel(step, questions.length)}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all"
              style={{ width: `${(step / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Frage {currentQuestion.id}</h2>
        <p className="mb-6 text-gray-800">{currentQuestion.text}</p>

        {/* Skalenfrage */}
        {currentQuestion.type === "scale" && (
          <>
            {currentQuestion.scaleLabels &&
              typeof currentQuestion.scaleMin === "number" &&
              typeof currentQuestion.scaleMax === "number" && (
                <p className="text-sm italic text-gray-500 mb-4">
                  ({currentQuestion.scaleMin} = {currentQuestion.scaleLabels[currentQuestion.scaleMin]}, {currentQuestion.scaleMax} = {currentQuestion.scaleLabels[currentQuestion.scaleMax]})
                </p>
              )}

            <div className="flex justify-center gap-2 mb-6">
              {Array.from({ length: scaleMax - scaleMin + 1 }, (_, i) => {
                const value = scaleMin + i;
                const selected = answers[currentQuestion.id]?.scale === value;
                return (
                  <button
                    key={value}
                    onClick={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [currentQuestion.id]: {
                          ...prev[currentQuestion.id],
                          scale: value,
                        },
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
              })}
            </div>
          </>
        )}

        {/* Radio-Buttons */}
        {currentQuestion.type === "radio" && (
          <div className="space-y-2 mb-6 pl-1">
            {currentQuestion.options?.map((option) => (
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

        {/* Checkboxen */}
        {currentQuestion.type === "checkbox" && (
          <div className="space-y-2 mb-6">
            {currentQuestion.options?.map((option) => {
              const selectedValues = (answers[currentQuestion.id]?.selected as string[]) || [];
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
                        ? selectedValues.filter((val) => val !== option)
                        : [...selectedValues, option];
                      setAnswers((prev) => ({
                        ...prev,
                        [currentQuestion.id]: {
                          ...prev[currentQuestion.id],
                          selected: updatedValues,
                        },
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
                  [currentQuestion.id]: {
                    ...prev[currentQuestion.id],
                    comment: e.target.value,
                  },
                }))
              }
            />
          </div>
        )}

        {/* Weiter */}
        <button
          onClick={nextStep}
          disabled={!answers[currentQuestion.id]}
          className={`px-6 py-2 rounded-lg transition ${
            answers[currentQuestion.id]
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {ui.nextButton}
        </button>
      </div>
    </div>
  );
}
