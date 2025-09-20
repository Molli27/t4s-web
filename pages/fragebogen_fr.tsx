// pages/fragebogen_fr.tsx
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
      "Quelle est la fiabilité avec laquelle vous pouvez actuellement mesurer le temps de passage réel des produits sur le shopfloor ?",
    type: "scale",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { 1: "pas du tout", 5: "très fiable" } satisfies ScaleLabels,
    optionalText: "Quel est le principal défi à ce sujet ?",
  },
  {
    id: 2,
    type: "radio",
    text:
      "Quel est, selon vous, l'impact des écarts de processus non détectés ou détectés trop tard sur vos coûts de production ?",
    options: [
      "Faible",
      "Moyen",
      "Élevé",
      "Très élevé",
      "Je ne peux pas juger",
    ],
  },
  {
    id: 3,
    type: "radio",
    text:
      "Quelles méthodes ou systèmes utilisez-vous aujourd'hui pour détecter des écarts dans les temps de passage ou dans le flux de matériaux ?",
    options: [
      "Analyses ERP",
      "Saisie manuelle",
      "Aucune détection systématique",
      "Autre",
    ],
    optionalText: "Explication complémentaire (facultatif) :",
  },
  {
    id: 4,
    type: "radio",
    text:
      "À quelle vitesse détectez-vous actuellement qu'un processus se dégrade de manière systématique (p. ex. retards fréquents sur un article donné) ?",
    options: [
      "Dans l'heure",
      "Dans la journée",
      "En quelques jours",
      "Seulement en cas de réclamations",
      "Actuellement pas détecté",
    ],
  },
  {
    id: 5,
    type: "scale",
    text:
      "Si vous disposiez d'un système qui mesure automatiquement les temps de passage, détecte les écarts et signale les besoins d'action à un stade précoce – quelle serait la probabilité que vous l'utilisiez dans les 6 à 12 mois ?",
    scaleMin: 1,
    scaleMax: 5,
    scaleLabels: { 1: "très improbable", 5: "très probable" } satisfies ScaleLabels,
  },
];

/** ---------- UI-Texte ---------- */
const ui = {
  startTitle: "Questionnaire sur l'analyse des processus",
  startText:
    "Ce questionnaire nous aide à mieux comprendre les défis typiques sur le shopfloor et à développer des solutions adaptées. Vos réponses resteront anonymes.",
  fields: {
    firstName: "Prénom",
    lastName: "Nom",
    company: "Entreprise",
    role: "Fonction",
    email: "E-mail",
    phone: "Numéro de téléphone",
  },
  startButton: "Commencer",
  questionLabel: (step: number, total: number) => `Question ${step} sur ${total}`,
  scaleDescription: (minLabel: string, maxLabel: string, min: number, max: number) =>
    `(${min} = ${minLabel}, ${max} = ${maxLabel})`,
  nextButton: "Suivant",
  summaryTitle: "Merci pour votre participation !",
  summaryText:
    "Vos réponses ont été enregistrées localement et peuvent maintenant être consultées ou téléchargées.",
  downloadButton: "Télécharger les réponses (JSON)",
  restartButton: "Recommencer",
  resetButton: "Réinitialiser le questionnaire",
  reviewTitle: "Aperçu de vos réponses :",
  labels: {
    answer: "Réponse",
    answers: "Réponses",
    comment: "Commentaire",
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

  const filename = `fragebogen_${meta.lastName}_${meta.firstName}_${meta.date}.json`
    .replace(/[^a-zA-Z0-9_\-\.]/g, "_");

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

/** ---------- Komponente ---------- */
export default function FragebogenFr() {
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
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="mx-auto mb-4"
          />
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

          <button
            onClick={nextStep}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
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
                    {q.type === "checkbox" &&
                      Array.isArray(answer?.selected) && (
                        <p className="text-gray-700 mt-1">
                          {ui.labels.answers}: {answer.selected.join(", ")}
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
          <p className="text-sm text-gray-500 mb-1">
            {ui.questionLabel(step, questions.length)}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all"
              style={{ width: `${(step / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Question {currentQuestion.id}</h2>
        <p className="mb-6 text-gray-800">{currentQuestion.text}</p>

        {/* Skalenfrage */}
        {currentQuestion.type === "scale" && (
          <>
            {currentQuestion.scaleLabels &&
              typeof currentQuestion.scaleMin === "number" &&
              typeof currentQuestion.scaleMax === "number" && (
                <p className="text-sm italic text-gray-500 mb-4">
                  ({currentQuestion.scaleMin} = {currentQuestion.scaleLabels[currentQuestion.scaleMin]},{" "}
                  {currentQuestion.scaleMax} = {currentQuestion.scaleLabels[currentQuestion.scaleMax]})
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
            <label className="block mb-2 text-gray-600">
              {currentQuestion.optionalText}
            </label>
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
