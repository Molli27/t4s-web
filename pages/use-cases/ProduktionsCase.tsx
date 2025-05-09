import Navbar_UseCases from "../../components/Navbar_UseCases";
import Footer from "../../components/Footer";

import CostTable from "./KostenTabelle_1";

import Image from 'next/image';

export default function ProduktionsCase() {
    return (
        <div className="wrapper">
            <div className="bg" />       
            {/* Navbar Section */}
            <Navbar_UseCases />
 
            <div className="page-container">
                <h1>Fallstudie: Mittelständiges Fertigungsunternehmen in der Kostenfalle</h1>

                <h2>Ausgangslage</h2>
                <p>
                Im Management eines mittelständischen Kunststoffverarbeiters schrillen die Alarmglocken: Die EBIT-Marge sinkt
                seit Monaten – leise, aber stetig. Das Unternehmen beschäftigt 150 Mitarbeitende, erwirtschaftet 21 Mio. CHF
                Umsatz und produziert im Drei-Schicht-Modell an fünf Tagen die Woche. Das Portfolio umfasst 230 aktive Artikel.
                <br/>
                Eine erste Analyse zeigt: Die Rohstoffkosten steigen kontinuierlich, während der Umsatz stagniert.
                Währungsschwankungen und volatile Einkaufspreise werden geprüft – doch der analytische Finanzchef bleibt
                skeptisch. Sein Bauchgefühl – und seine Excel-Tabellen – sagen: Hier geht mehr verloren, als erklärbar ist.
                <br/>
                Ein monatlicher Verlust von 15.000 CHF bleibt rätselhaft. In der Geschäftsleitung wird diskutiert, gestritten,
                analysiert. Der Produktionsleiter verweist auf kleinere Losgrössen und häufige Werkzeugwechsel – ein valides
                Argument, denn Anfahrverluste steigen dadurch. Aber ist das die ganze Wahrheit?
                <br/>
                Eine interne Taskforce nimmt drei Artikel ins Visier. Da erinnert sich der Qualitätsmanager an einen 
                LinkedIn-Post über t4s: ein System zur optischen Produktidentifikation mittels Kameras – ohne Eingriff in 
                bestehende Abläufe. Einfach zu installieren, praxisnah und verständlich. Die Neugier ist geweckt.
                </p>

                <div className= "flex-container">
                    <div className="text-content">
                        
                        <h2>t4s als Partnerin für KI-gestützte Produktionsüberwachung</h2>
                        <p>
                        Wenige Tage nach dem Erstkontakt steht ein Expertenteam von t4s in der Fertigungshalle. Gemeinsam mit 
                        Produktionsleitung und Qualitätssicherung analysieren sie die verdächtigen Artikel und deren Prozesskette. 
                        Bei einem Rundgang werden relevante Maschinen identifiziert, der Materialfluss nachverfolgt und nachgelagerte 
                        Schritte wie manuelle Nachbearbeitung begutachtet.
                        <br/>
                        Schnell zeigt sich: An den Spritzgussmaschinen mit Förderband lässt sich ohne großen Aufwand eine Kamera 
                        installieren – die Teile laufen im 40-Sekunden-Takt einzeln aus, gut sichtbar, gut zugänglich. Auch am zentralen 
                        Arbeitsplatz, an dem alle drei Artikel ihren letzten Bearbeitungsschritt durchlaufen, bietet sich ein geeigneter 
                        Punkt zur Bildaufnahme.
                        <br/>
                        Nach Rücksprache mit den Fachabteilungen wird ein Monitoring-Setup definiert. Ziel ist es, belastbare Daten zu 
                        gewinnen – keine Momentaufnahmen, sondern ein kontinuierliches Bild der realen Abläufe. In enger Abstimmung mit 
                        dem Management fällt die Entscheidung, die Produktion dieser Artikel über drei Monate durchgängig zu überwachen.
                        <br/>
                        t4s reagiert prompt: Auf Basis der Anforderungen wird ein maßgeschneidertes Angebot erstellt – praxisnah, 
                        strukturiert und vor allem eines: transparent. Die Projektverantwortlichen sind positiv überrascht. Statt vager 
                        Angaben erhalten sie eine klar gegliederte Kostenstruktur, von der Einrichtung über die KI-Modellerstellung bis 
                        hin zur wöchentlichen Systemnutzung. Modular aufgebaut, nachvollziehbar kalkuliert – und frei von versteckten 
                        Nebenkosten. Eine solide Entscheidungsgrundlage, wie sie im Produktionsalltag selten ist.
                        </p> 
                    </div>
                    <div className= "media-container">
                        <figure className="image-caption-container">
                            {/* Boiler Setup Image */}
                            <div className="image-container fixed-width">
                                <Image 
                                    src="/images/250326_Production.png" 
                                    alt="Production" 
                                    layout="intrinsic"
                                    width={250} 
                                    height={150} 
                                    priority 
                                />
                            </div>
                            <figcaption>Produktion</figcaption>
                        </figure>
                    </div>

                </div>

                <h2>Die Kosten im Überblick</h2>
                <CostTable />

                <div className= "flex-container">
                    <div className="text-content">        
                        <h2>Umsetzung und Ergebnisse</h2>
                        <p>
                        Nach der Angebotsbesprechung gibt das Management grünes Licht. Die Entscheidung basiert auf einer klaren 
                        Erwartung: Die Ursache für den Rückgang der EBIT-Marge soll identifiziert und die monatlichen Verluste innerhalb 
                        von vier Monaten beseitigt werden.
                        <br/>
                        t4s startet rasch mit der Umsetzung. Die Mitarbeitenden werden über die eingesetzte Technologie und das geplante 
                        Vorgehen informiert. Nach wenigen Tagen sind die kleinen Kameras an den Maschinen kaum noch ein Thema – sie 
                        arbeiten unauffällig, stören den Ablauf nicht. Die Systeme werden über die Cloud überwacht, um den einwandfreien 
                        Betrieb jederzeit sicherzustellen.
                        <br/>
                        Bereits nach kurzer Zeit erfassen die Kameras erste Datensätze: Artikelnummer, Datum, Uhrzeit, 
                        Produktionsstation – ergänzt durch die Verweildauer im Sichtfeld und die Gesamtanzahl der erfassten Teile. 
                        Über zwölf Wochen hinweg entsteht ein umfassendes Bild des Produktionsalltags. Die Daten werden laufend mit der 
                        Produktionsplanung abgeglichen – und liefern bald erste Auffälligkeiten:
                        </p>
                        
                        <ul>
                            <li><strong>Unregelmäßige Zykluszeiten:</strong> Besonders auf einer älteren Maschine treten in der Spätschicht deutliche
                                 Abweichungen auf.</li>
                            <li><strong>Häufige Unterbrüche im Prozess:</strong> Der Materialfluss stockt, Sollmengen werden oft nicht erreicht.</li>
                        </ul>
                        <p>
                        Das Ergebnis: eine lückenlose, objektive Dokumentation in Bild- und Tabellenform – eine solide Datenbasis, die endlich Transparenz
                        in die bisher spekulative Fehlersuche brachte.
                        </p>
                        <p>
                        Der Produktionsleiter lädt zur Besprechung – gemeinsam mit dem Schichtleiter, einem Technologen und den 
                        zuständigen Facharbeitenden. Die Analyse bringt folgende Schwachstellen ans Licht:
                        </p>
                        <ul>
                            <li><strong>Unzureichende Schulung:</strong> Das Spätschicht-Team ist neu und nicht ausreichend eingewiesen.</li>
                            <li><strong>Technische Probleme:</strong> Die betroffene Maschine zeigt vermehrt Störungen im Zusammenspiel mit einem bestimmten Kunststoffgranulat.</li>
                            <li><strong>Mangelhafte Schichtübergaben:</strong> Probleme werden nicht dokumentiert und bleiben dadurch unsichtbar.</li>
                        </ul>
                        <p>
                        Die Konsequenzen folgen sofort: Die Schulung des Schichtteams wird nachgeholt, die Maschine einer Totalrevision 
                        unterzogen. Zudem sensibilisiert man die Schichtführer auf die Bedeutung sauberer Übergaben – schriftlich dokumentiert 
                        und regelmäßig überprüft.
                        </p>

                        
                    </div>

                    {/* Image + Video Container */}
                    <div className= "media-container">
                        
                        <figure className="image-caption-container">
                            {/* Boiler Setup Image */}
                            <div className="image-container fixed-width">
                                <Image 
                                    src="/images/250326_t4s_Process.png" 
                                    alt="t4s Process diagram" 
                                    layout="intrinsic"
                                    width={250} 
                                    height={150} 
                                    priority 
                                />
                            </div>
                            <figcaption>t4s Prozess für<br/>Artikelidentifikation</figcaption>
                        </figure>


                        <figure className="image-caption-container">
                            {/* Dash Report Image */}
                            <div className="image-container fixed-width">
                                <Image 
                                    src="/images/250326_DataSynthesis.png" 
                                    alt="Dash Report" 
                                    layout="intrinsic"
                                    width={250} 
                                    height={150} 
                                    priority 
                                />
                            </div>
                            <figcaption>Synthetisierung der <br/>Trainingsdaten</figcaption>
                        </figure>
                    </div>
                </div>                

                <h2>Erweiterung und Erfolg</h2>
                    <p>
                    Die Resultate sprechen für sich – und das Management reagiert prompt. Die Überwachung wird um einen weiteren Monat 
                    verlängert, um die Wirksamkeit der eingeleiteten Massnahmen zu überprüfen. Frühindikatoren zeigen bereits positive 
                    Entwicklungen: stabilere Zykluszeiten, weniger Unterbrüche und klar dokumentierte Schichtübergaben.
                    <br/>
                    Parallel steht ein neues Grossprojekt in den Startlöchern – vielversprechend, aber mit hohen Anforderungen: Der Kunde 
                    verlangt strikte Einhaltung von Lieferterminen, bei Verzögerung drohen Konventionalstrafen. Das Unternehmen will kein 
                    Risiko eingehen.
                    <br/>
                    Erneut fällt die Wahl auf t4s. Diesmal wird das System zur Echtzeitüberwachung eingesetzt. Ein Dashboard in der 
                    Produktionshalle visualisiert Abweichungen von definierten Sollzeiten. Bei kritischen Prozessabweichungen erhalten das 
                    Management und die Produktionsleitung automatische Push-Nachrichten direkt aufs Mobiltelefon. Probleme werden so 
                    erkannt, bevor sie eskalieren – und Massnahmen können sofort eingeleitet werden.
                    <br/>
                    Was als Pilotprojekt begann, entwickelt sich zur tragenden Säule einer digital unterstützten 
                    Produktionsüberwachung – mit klar messbarem Nutzen.
                    </p>

                    <h2>Fazit</h2>
                    <p>
                    Die Implementierung des t4s-Systems liefert wertvolle Erkenntnisse, um Produktionsverluste zu reduzieren, 
                    Schulungsdefizite aufzudecken und Prozess-probleme frühzeitig zu erkennen. Die durchgeführte Analyse zeigt, dass mit 
                    gezielter Überwachung und KI-gestützter Prozessoptimierung erhebliche Einsparpotenziale realisiert werden können. 
                    Dies stärkt nicht nur die EBIT-Marge, sondern schafft auch eine belastbare Grundlage für zukünftige Wachstumsprojekte.
                    </p>


            </div>
            {/* Footer Section */}
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}