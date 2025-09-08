import React from "react";
import ReactMarkdown from "react-markdown";

const markdown = `
# Datenschutz­erklärung

Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten im Rahmen der Nutzung unserer Website gemäß der Datenschutz-Grundverordnung (DSGVO) und des Schweizer Datenschutzgesetzes (DSG).

---

## 1. Verantwortlicher

**t4s – technology for solutions**  
Hofstrasse 41  
4127 Birsfelden  
E-Mail: info@t4s.ch

---

## 2. Erhebung und Verarbeitung personenbezogener Daten

Wir erheben personenbezogene Daten nur, wenn Sie uns diese von sich aus mitteilen (z. B. über unser Kontaktformular oder per E-Mail). Dabei kann es sich um folgende Daten handeln:

- Name
- E-Mail-Adresse
- Telefonnummer
- Nachrichteninhalt

Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.

---

## 3. Server-Logfiles

Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten z. B.:

- IP-Adresse
- Browsertyp und -version
- Betriebssystem
- Referrer-URL
- Uhrzeit der Serveranfrage

Diese Daten dienen der Sicherstellung eines reibungslosen Verbindungsaufbaus und der Systemsicherheit.

---

## 4. Verwendung von Cookies

Unsere Website verwendet **Cookies**, um die Benutzerfreundlichkeit zu verbessern. Sie können in Ihrem Browser Einstellungen vornehmen, um die Verwendung von Cookies zu verhindern oder zu kontrollieren.

> Hinweis: Falls Sie Tracking- oder Analyse-Tools einsetzen (z. B. Google Analytics), bitte ergänzen Sie hier entsprechend mit Hinweis auf Einwilligung und Opt-Out.

---

## 5. Ihre Rechte

Sie haben jederzeit das Recht auf:

- Auskunft über Ihre gespeicherten personenbezogenen Daten
- Berichtigung unrichtiger Daten
- Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen
- Einschränkung der Verarbeitung
- Widerspruch gegen die Verarbeitung
- Datenübertragbarkeit (sofern zutreffend)

Bitte wenden Sie sich zur Ausübung Ihrer Rechte an: **info@t4s.ch**

---

## 6. Aufbewahrungsdauer

Ihre personenbezogenen Daten werden nur so lange gespeichert, wie dies zur Erfüllung der genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.

---

## 7. Änderungen dieser Datenschutz­erklärung

Wir behalten uns das Recht vor, diese Datenschutz­erklärung jederzeit anzupassen. Die aktuelle Version ist stets auf unserer Website abrufbar.

Letzte Aktualisierung: März 2025
`;

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="privacy-section">
      <div className="privacy-content">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
