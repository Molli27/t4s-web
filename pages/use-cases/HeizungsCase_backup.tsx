import Navbar_UseCases from "../../components/Navbar_UseCases";
import Footer from "../../components/Footer";

import Image from 'next/image';

export default function HeizungsCase() {
    return (
        <div className="wrapper">
            <div className="bg" />       
            {/* Navbar Section */}
            <Navbar_UseCases />
 
            <div className="page-container">
                <h1>Effizienzsteigerung durch smarte Heizungsüberwachung: Fallstudie eines Mehrfamilienhauses</h1>

                <h2>Ausgangslage</h2>
                <p>
                In einem Mehrfamilienhaus sorgt eine technisch anspruchsvolle Heizungsanlage für wohlige Wärme und warmes Wasser – zumindest in der Theorie.
                Das System besteht aus zwei Boilern, die in Serie geschaltet sind: Boiler 1 wird über Sonnenkollektoren beheizt und speist bei
                ausreichender Sonnenleistung vorgewärmtes Wasser in Boiler 2, der zusätzlich mit einer Gasheizung ausgestattet ist. So lässt sich 
                in sonnenreichen Zeiten kostbare Energie einsparen.
                <br/>
                Ein zweiter Warmwasserkreislauf sorgt dafür, dass jederzeit warmes Wasser aus den Hähnen fliesst – unabhängig von der Tageszeit. 
                Damit das funktioniert, zirkuliert kontinuierlich Wasser durch das Leitungssystem. Für die Warmwasserbereitstellung in Küche, 
                Bad und Dusche kommen integrierte Wärmetauscher zum Einsatz, die das frische Wasser auf die gewünschte Temperatur bringen. 
                Zwei getrennte Systeme – Heizkreislauf und Frischwasser – arbeiten dabei Hand in Hand.
                </p>

                <div className= "flex-container">
                    <div className="text-content">
                        
                        <h2>Problem</h2>
                        <p>
                            Was mit gelegentlichem Unmut begann, entwickelte sich über Monate hinweg zu einem ausgewachsenen Ärgernis: Immer mehr 
                            Bewohnerinnen und Bewohner beklagten sich über unzureichendes Warmwasser – vor allem über plötzliche Temperaturschwankungen 
                            beim Duschen oder Baden. Die Hausverwaltung reagierte und beauftragte ein Sanitärunternehmen mit der Fehlersuche.
                        <br/>
                            Doch statt einer strukturierten Analyse folgten Mutmaßungen: Vielleicht sei ein Gerät falsch angeschlossen, vielleicht seien 
                            einzelne Armaturen defekt. Es blieb beim Vielleicht – eine klare Ursache konnte nicht benannt werden. Trotz mehrerer Besuche 
                            vor Ort und unterschiedlichster Erklärungsversuche änderte sich am eigentlichen Problem nichts. Der Druck auf das Unternehmen 
                            wuchs – ebenso wie der Frust bei den Bewohnern und der Verwaltung.
                        <br/>
                            In der Hoffnung auf Besserung wurde schliesslich ein Mischventil ersetzt. Kurz darauf stiegen die Temperaturen draussen, 
                            die Sonnenkollektoren liefen auf Hochtouren – und tatsächlich: das Warmwasserproblem schien gelöst. Doch die scheinbare 
                            Verbesserung war trügerisch. Als die kalte Jahreszeit zurückkehrte, war auch das Problem wieder da – unverändert. 
                            Die Stimmung kippte endgültig, und erste Forderungen nach einem grösseren Boiler oder einer stärkeren Gasheizung machten die Runde.
                        </p>                    
                        
                        <h2>Innovative Ursachenabklärung</h2>
                        <p>
                            An diesem Punkt wurde das Unternehmen t4s, spezialisiert auf Computer Vision und KI-gestützte Datenerfassung, auf die Problematik 
                            aufmerksam. In Absprache mit der Verwaltung stellte t4s ein optisches Messsystem zur Verfügung, das ursprünglich für den industriellen
                            Einsatz entwickelt wurde – zur präzisen Erfassung von analogen Messinstrumenten wie Zeigeranzeigen.
                        <br/>
                            Der zweite Boiler, beheizt durch die Gasheizung, war mit einem analogen Temperaturmessgerät ausgestattet. Genau dort kam das System
                            zum Einsatz: Eine hochauflösende Kamera wurde auf einem Stativ vor dem Thermometer platziert, verbunden mit einem Edge-Computer, der
                            die Bilddaten in Echtzeit verarbeiten konnte. Nach wenigen Minuten Einrichtung und kurzer Initialisierung begann das System
                            automatisch alle zehn Minuten ein Bild mit Zeigerposition und Zeitstempel zu erfassen.
                        </p>
                        <p>
                            Nach 72 Stunden lagen belastbare Daten vor:
                        </p>
                        <ul>
                            <li>Alle zehn Minuten ein präzise aufgenommenes Bild des Thermometers mit Zeitstempel</li>
                            <li>Eine automatisierte Umwandlung der Zeigerpositionen in exakte Temperaturwerte</li>
                            <li>Eine strukturierte CSV-Datei mit Datum, Uhrzeit und Temperatur, bereit für die weitere Analyse</li>
                        </ul>
                        <p>
                        Das Ergebnis: eine lückenlose, objektive Dokumentation in Bild- und Tabellenform – eine solide Datenbasis, die endlich Transparenz
                        in die bisher spekulative Fehlersuche brachte.
                        </p>

                        <h2>Klare Fakten statt Vermutungen</h2>
                        <p>
                        Die Auswertung der erfassten Daten erfolgte in einem interaktiven Diagramm – und lieferte auf einen Blick wertvolle Erkenntnisse:
                        </p>
                        <ul>
                            <li>Die Gasheizung arbeitete effizient und erreichte zuverlässig die erforderliche Temperaturleistung</li>
                            <li>Die Temperatur im Boiler blieb über viele Stunden stabil, bevor in der Nacht automatisch nachgeheizt wurde.</li>
                            <li>Die Speicherkapazität der beiden Boiler reichte problemlos aus, um den Bedarf des gesamten Mehrfamilienhauses zu decken.</li>
                        </ul>
                        <p>
                        Damit war klar: Weder die Heizleistung noch das Boilervolumen waren die Ursache für die unzureichende Warmwasserversorgung.

                        Erst jetzt rückte ein anderer Aspekt in den Fokus. Eine Rückfrage bei der Verwaltung brachte den entscheidenden Hinweis: 
                        Die integrierten Wärmetauscher waren seit über einem Jahrzehnt nicht mehr gewartet worden. Nach der professionellen Reinigung 
                        durch ein spezialisiertes Unternehmen war das Problem schlagartig gelöst. Die Warmwasserversorgung funktionierte wieder 
                        einwandfrei – und ein neuer Wartungsvertrag sorgt künftig dafür, dass es auch so bleibt.
                        </p>

                        <h2>Fazit</h2>
                        <p>
                        Vermutungen kosten Zeit und Geld – Fakten schaffen Lösungen.
                        Dank der optischen Messtechnik von <strong>t4s</strong> konnte das Problem datenbasiert identifiziert und nachhaltig behoben werden. 
                        Verwaltungen und Sanitärunternehmen profitieren von klaren Analysen, vermeiden unnötige Kosten – und gewinnen das Vertrauen 
                        ihrer Kunden.
                        </p>
                        

                    </div>

                    {/* Image + Video Container */}
                    <div className= "media-container">
                        <figure className="image-caption-container">
                            {/* Boiler Setup Image */}
                            <div className="image-container fixed-width">
                                <Image 
                                    src="/images/250317_BoilerAnlage.jpg" 
                                    alt="Boiler Setup with Optical Monitoring System" 
                                    layout="intrinsic"
                                    width={500} 
                                    height={300} 
                                    priority 
                                />
                            </div>
                            <figcaption>Abb. 1: Heizung- und Warmwasseranlage</figcaption>
                        </figure>
                        
                        <figure className="image-caption-container">
                            {/* Boiler Setup Image */}
                            <div className="image-container fixed-width">
                                <Image 
                                    src="/images/250306_HeizungÜberwachung_Ausschnitt.jpg" 
                                    alt="Optical Monitoring System" 
                                    layout="intrinsic"
                                    width={500} 
                                    height={300} 
                                    priority 
                                />
                            </div>
                            <figcaption>Abb. 2: Überwachungseinheit</figcaption>
                        </figure>

                        <figure className="image-caption-container">
                            <div className="video-container">
                                <video id="loopingVideo" autoPlay loop muted playsInline >
                                    <source src="/videos/MeterTimeLapse_vp9.webm" type="video/webm"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <figcaption>Abb. 3: Boilertemperatur im Zeitraffer</figcaption>
                        </figure>

                        <figure className="image-caption-container">
                            {/* Dash Report Image */}
                            <div className="image-container fixed-width">
                                <Image 
                                    src="/images/250325_DashReport.png" 
                                    alt="Dash Report" 
                                    layout="intrinsic"
                                    width={500} 
                                    height={300} 
                                    priority 
                                />
                            </div>
                            <figcaption>Abb. 4: Interaktive Diagramme</figcaption>
                        </figure>
                    </div>                
                    
                </div>

            </div>
            {/* Footer Section */}
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}