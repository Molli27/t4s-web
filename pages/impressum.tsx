import React from "react";
import ReactMarkdown from "react-markdown";

const markdown = `
# Impressum

## Anbieter dieser Website

**t4s – technology for solutions**  
Hofstrasse 41  
4127 Birsfelden  
Schweiz

E-Mail: info@t4s.ch  
Web: www.t4s.ch

---

## Vertretungsberechtigte Person

[Name der vertretungsberechtigten Person (z. B. Geschäftsführer oder Inhaber)]

---

## Handelsregister-Eintrag

UID-Nummer: [Ihre Unternehmens-Identifikationsnummer, falls vorhanden]  
Handelsregisteramt: [z. B. Basel-Stadt]

---

## Haftungsausschluss

Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.

Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.

---

## Urheberrecht

Alle auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Grafiken, etc.) unterliegen dem Urheberrecht. Jede Verwertung bedarf der vorherigen schriftlichen Zustimmung von t4s oder des jeweiligen Rechteinhabers.

---

*Letzte Aktualisierung: März 2025*
`;

const Impressum: React.FC = () => {
  return (
    <section className="privacy-section">
      <div className="privacy-content">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Impressum;
