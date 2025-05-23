import Navbar_UseCases from "../../components/Navbar_UseCases";
import Footer from "../../components/Footer";
import Image from 'next/image';

export default function ProduktionsCase() {
    return (
        <div className="wrapper">
            <div className="bg" />       
            {/* Navbar Section */}
            <Navbar_UseCases />
 
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-10 text-black"
                style={{
                    background: "linear-gradient(to bottom, #FFFFFF, #D7D2CB)",
                }}
            >

                <h1 className="text-3xl sm:text-4xl font-bold text-blue-dark"
                    style={{ color: "#00249C" }}>
                Fallstudie: Mittelständiges Fertigungsunternehmen in der Kostenfalle
                </h1>

                {/* Ausgangslage */}
                <section className="space-y-4">
 
                    <h2 className="text-xl font-semibold">
                        Ausgangslage
                    </h2>

                    {/* Floating Image (Right) */}
                    <figure className="md:float-right md:ml-6 md:mb-4 w-full md:w-[250px]">
                        <Image
                        src="/images/250326_Production.png"
                        alt="Production"
                        width={250}
                        height={150}
                        className="rounded-md w-full h-auto"
                        />
                        <figcaption className="text-sm text-center mt-2">Produktion</figcaption>
                    </figure>

                    {/* Text Content */}
                    <p className="text-justify">
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
                </section>

                {/* t4s als Partnerin */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                        t4s als Partnerin für KI-gestützte Produktionsüberwachung
                    </h2>
                    <p className="text-justify">
                        Wenige Tage nach dem Erstkontakt steht das t4s-Team in der Produktion. Gemeinsam mit der Fertigungs- und 
                        QS-Leitung wird der Prozess analysiert, geeignete Kamerapunkte identifiziert und ein zielgerichtetes Monitoring-Setup
                        definiert.
                        <br/>
                        Die Zusammenarbeit verläuft partnerschaftlich, effizient und lösungsorientiert. Ziel ist es, aussagekräftige Daten über reale Abläufe zu gewinnen – nicht nur Momentaufnahmen.
                        t4s liefert rasch ein strukturiertes, transparentes Angebot. Die Projektverantwortlichen schätzen die klare 
                        Kommunikation und kompetente Beratung.
                        <br/>
                        Die Investition zahlt sich aus: Optimierte Abläufe, weniger Stillstände – meist ist der ROI nach sechs Monaten erreicht.
                    </p> 
                </section>
                    

                {/* Umsetzung und Ergebnisse */}
                <section className="space-y-4">
                
                    <h2 className="text-xl font-semibold">Umsetzung und Ergebnisse</h2>


                    {/* Image + Video Container */}
                    
                    <figure className="md:float-right md:ml-6 md:mb-4 w-full md:w-[250px]">
                        <Image
                            src="/images/250326_t4s_Process.png"
                            alt="t4s Process"
                            width={250}
                            height={150}
                            className="rounded-md w-full h-auto"
                        />
                        <figcaption className="text-sm mt-2">t4s Prozess für<br />Artikelidentifikation</figcaption>
                    </figure>
                 


                    <p className="text-justify">
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
                        
                        <ul className="list-disc list-inside space-y-2 text-justify">
                            <li>
                                <strong>Unregelmässige Zykluszeiten:</strong> Besonders auf einer älteren Maschine treten in der Spätschicht deutliche Abweichungen auf.
                            </li>
                            <li>
                                <strong>Häufige Unterbrüche im Prozess:</strong> Der Materialfluss stockt, Sollmengen werden oft nicht erreicht.
                            </li>
                        </ul>
                        <p className="text-justify">
                            Das Ergebnis: eine lückenlose, objektive Dokumentation in Bild- und Tabellenform – eine solide Datenbasis, die endlich Transparenz
                            in die bisher spekulative Fehlersuche brachte.
                            <br/>
                            Der Produktionsleiter lädt zur Besprechung – gemeinsam mit dem Schichtleiter, einem Technologen und den 
                            zuständigen Facharbeitenden. Die Analyse bringt folgende Schwachstellen ans Licht:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-justify">
                            <li><strong>Unzureichende Schulung:</strong> Das Spätschicht-Team ist neu und nicht ausreichend eingewiesen.</li>
                            <li><strong>Technische Probleme:</strong> Die betroffene Maschine zeigt vermehrt Störungen im Zusammenspiel mit einem bestimmten Kunststoffgranulat.</li>
                            <li><strong>Mangelhafte Schichtübergaben:</strong> Probleme werden nicht dokumentiert und bleiben dadurch unsichtbar.</li>
                        </ul>

                        <p className="text-justify">
                        Die Konsequenzen folgen sofort: Die Schulung des Schichtteams wird nachgeholt, die Maschine einer Totalrevision 
                        unterzogen. Zudem sensibilisiert man die Schichtführer auf die Bedeutung sauberer Übergaben – schriftlich dokumentiert 
                        und regelmässig überprüft.
                        </p>
                    

                    
                </section>      

                {/* Erweiterung und Erfolg */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Erweiterung und Erfolg</h2>
                    <p className="text-justify">
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
                </section>

                    {/* Fazit */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Fazit</h2>
                    <p className="text-justify">
                        Die Implementierung des t4s-Systems liefert wertvolle Erkenntnisse, um Produktionsverluste zu reduzieren, 
                        Schulungsdefizite aufzudecken und Prozess-probleme frühzeitig zu erkennen. Die durchgeführte Analyse zeigt, dass mit 
                        gezielter Überwachung und KI-gestützter Prozessoptimierung erhebliche Einsparpotenziale realisiert werden können. 
                        Dies stärkt nicht nur die EBIT-Marge, sondern schafft auch eine belastbare Grundlage für zukünftige Wachstumsprojekte.
                    </p>
                </section>
            </main>


            {/* Footer Section */}
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}