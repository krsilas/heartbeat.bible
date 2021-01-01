import TopBar from '../src/components/TopBar'
import Head from 'next/head'

const Legal = () => {
  
return(
  <>
	<Head>
		<meta name="robots" content="noindex" />
	</Head>
  <TopBar back={true} />
  <div className="p-4 mt-3 mx-auto max-w-2xl prose dark:prose-dark leading-normal">
    <h1>Rechtliches</h1>
    <div>
			<h2>Impressum</h2>
			<p>
				Silas Krause <br/>
				Gutenbergstraße 90 <br/>
				70197 Stuttgart <br/>
				<a href="mailto:info@heartbeat.bible">info@heartbeat.bible</a>
			</p>
			<h2>Datenschutzerklärung</h2>
			<p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
			<p>
				Silas Krause <br/>
				Gutenbergstraße 90 <br/>
				70197 Stuttgart <br/>
			</p>
			<h2>Ihre Betroffenenrechte</h2>
			<p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
			<ul>
			<li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
			<li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
			<li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
			<li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
			<li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
			<li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
			</ul>
			<p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
			<p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
			<p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="nofollow noopener">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>
			
			<h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
			<h3>Art und Zweck der Verarbeitung:</h3>
			<p>Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches. </p>
			<p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
			<ul>
			<li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
			<li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
			<li>Auswertung der Systemsicherheit und -stabilität sowie</li>
			<li>zu weiteren administrativen Zwecken.</li>
			</ul>
			<p>Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.</p>
			<p><b>Rechtsgrundlage: </b>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.</p>
			<p><b>Empfänger: </b>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.</p>
			<p><b>Speicherdauer: </b>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Webseite dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.</p>
			<p><b>Bereitstellung vorgeschrieben oder erforderlich: </b>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen. </p>
			
			{/* <h2>Erbringung kostenpflichtiger Leistungen</h2>
			<p><b>Art und Zweck der Verarbeitung: </b>Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z.B. Zahlungsangaben, um Ihre Bestellung ausführen zu können.</p>
			<p><b>Rechtsgrundlage: </b>Die Verarbeitung der Daten, die für den Abschluss des Vertrages erforderlich ist, basiert auf Art. 6 Abs. 1 lit. b DSGVO.</p>
			<p><b>Empfänger: </b>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
			<p><b>Speicherdauer: </b>Wir speichern diese Daten in unseren Systemen bis die gesetzlichen Aufbewahrungsfristen abgelaufen sind. Diese betragen grundsätzlich 6 oder 10 Jahre aus Gründen der ordnungsmäßigen Buchführung und steuerrechtlichen Anforderungen.</p>
			<p><b>Bereitstellung vorgeschrieben oder erforderlich: </b>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Ohne die Bereitstellung Ihrer personenbezogenen Daten können wir Ihnen keinen Zugang auf unsere angebotenen Inhalte und Leistungen gewähren.</p>
			<h2>Newsletter</h2>
			<p><b>Art und Zweck der Verarbeitung: </b>Ihre Daten werden ausschließlich dazu verwendet, Ihnen den abonnierten Newsletter per E-Mail zuzustellen. Die Angabe Ihres Namens erfolgt, um Sie im Newsletter persönlich ansprechen zu können und ggf. zu identifizieren, falls Sie von Ihren Rechten als Betroffener Gebrauch machen wollen.</p>
			<p>Für den Empfang des Newsletters ist die Angabe Ihrer E-Mail-Adresse ausreichend. Bei der Anmeldung zum Bezug unseres Newsletters werden die von Ihnen angegebenen Daten ausschließlich für diesen Zweck verwendet. Abonnenten können auch über Umstände per E-Mail informiert werden, die für den Dienst oder die Registrierung relevant sind (bspw. Änderungen des Newsletterangebots oder technische Gegebenheiten).</p>
			<p>Für eine wirksame Registrierung benötigen wir eine valide E-Mail-Adresse. Um zu überprüfen, dass eine Anmeldung tatsächlich durch den Inhaber einer E-Mail-Adresse erfolgt, setzen wir das „Double-opt-in“-Verfahren ein. Hierzu protokollieren wir die Bestellung des Newsletters, den Versand einer Bestätigungsmail und den Eingang der hiermit angeforderten Antwort. Weitere Daten werden nicht erhoben. Die Daten werden ausschließlich für den Newsletterversand verwendet und nicht an Dritte weitergegeben.</p>
			<p><b>Rechtsgrundlage: </b>Auf Grundlage Ihrer ausdrücklich erteilten Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), übersenden wir Ihnen regelmäßig unseren Newsletter bzw. vergleichbare Informationen per E-Mail an Ihre angegebene E-Mail-Adresse. </p>
			<p>Die Einwilligung zur Speicherung Ihrer persönlichen Daten und ihrer Nutzung für den Newsletterversand können Sie jederzeit mit Wirkung für die Zukunft widerrufen. In jedem Newsletter findet sich dazu ein entsprechender Link. Außerdem können Sie sich jederzeit auch direkt auf dieser Website abmelden oder uns Ihren Widerruf über die am Ende dieser Datenschutzhinweise angegebene Kontaktmöglichkeit mitteilen.</p>
			<p><b>Empfänger: </b>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
			<p><b>Speicherdauer: </b>Die Daten werden in diesem Zusammenhang nur verarbeitet, solange die entsprechende Einwilligung vorliegt. Danach werden sie gelöscht.</p>
			<p><b>Bereitstellung vorgeschrieben oder erforderlich: </b>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Ohne bestehende Einwilligung können wir Ihnen unseren Newsletter leider nicht zusenden.</p>
			
			<h2>Kontaktformular</h2>
			<p><b>Art und Zweck der Verarbeitung: </b>Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.</p>
			<p><b>Rechtsgrundlage: </b>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).</p>
			<p>Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.</p>
			<p>Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).</p>
			<p><b>Empfänger: </b>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
			<p><b>Speicherdauer: </b>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht. Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen. </p>
			<p><b>Bereitstellung vorgeschrieben oder erforderlich: </b>Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.</p> */}
			
			<h2>Verwendung von Splitbee Analytics</h2>
			<p><b>Art und Zweck der Verarbeitung:</b> Diese Website benutzt Splitbee, einen Webanalysedienst von Tobias Lins e.U., Alserbachstraße 10, 1090 Wien (nachfolgend: „Splitbee“). Splitbee Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Splitbee übertragen und dort gespeichert. Im Auftrag des Betreibers dieser Website wird Splitbee diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Splitbee Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Splitbee zusammengeführt.</p>
			<p>Die Zwecke der Datenverarbeitung liegen in der Auswertung der Nutzung der Website und in der Zusammenstellung von Reports über Aktivitäten auf der Website. Auf Grundlage der Nutzung der Website und des Internets sollen dann weitere verbundene Dienstleistungen erbracht werden.</p>
			<p><b>Rechtsgrundlage:</b> <br /> Der Eigentümer kann personenbezogene Daten der Nutzer verarbeiten, wenn einer der folgenden Punkte zutrifft:</p>
			<ul>
				<li>Die Benutzer haben ihre Zustimmung für einen oder mehrere bestimmte Zwecke gegeben. Hinweis: Nach einigen Gesetzgebungen kann es dem Betreiber erlaubt sein, personenbezogene Daten zu verarbeiten, bis der Nutzer dieser Verarbeitung widerspricht ("Opt-out"), ohne sich auf eine Einwilligung oder eine andere der folgenden Rechtsgrundlagen stützen zu müssen. Dies gilt jedoch nicht, wenn die Verarbeitung der personenbezogenen Daten dem europäischen Datenschutzrecht unterliegt.</li>
				<li>Die Bereitstellung der Daten für die Erfüllung eines Vertrages mit dem Nutzer und/oder für dessen vorvertragliche Pflichten erforderlich ist.</li>
				<li>Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Eigentümer unterliegt.</li>
				<li>Die Verarbeitung ist mit einer Aufgabe verbunden, die im öffentlichen Interesse oder in Ausübung öffentlicher Gewalt erfolgt, die dem Eigentümer übertragen wurde.</li>
				<li>Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Inhabers oder eines Dritten erforderlich.</li>
			</ul>
			<p>Der Inhaber ist in jedem Fall bereit, bei der Klärung der konkreten Rechtsgrundlage, die für die Verarbeitung gilt, behilflich zu sein, insbesondere, ob die Bereitstellung der personenbezogenen Daten eine gesetzliche oder vertragliche Verpflichtung darstellt oder ob sie für den Abschluss eines Vertrags erforderlich ist.</p>
			{/* <p><b>Empfänger: </b>Empfänger der Daten ist Splitbee als Auftragsverarbeiter. Hierfür haben wir mit Splitbee den entsprechenden Auftragsverarbeitungsvertrag abgeschlossen.</p> */}
			<p><b>Speicherdauer: </b>Die Löschung der Daten erfolgt, sobald diese für unsere Aufzeichnungszwecke nicht mehr erforderlich sind.</p>
			<p><b>Widerruf der Einwilligung: </b>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.</p>
			<p><b>Profilierung: </b>Mit Hilfe des Tracking-Tools Splitbee Analytics kann das Verhalten der Besucher der Webseite bewertet und die Interessen analysiert werden. Hierzu erstellen wir ein pseudonymes Nutzerprofil.</p>
		
			<h2>SSL-Verschlüsselung</h2>
			<p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
			<h2>Eingesetzte Auftragsverarbeiter</h2>
			<p>Folgende Organisationen, Unternehmen bzw. Personen wurden vom Betreiber dieser Website mit der Verarbeitung von Daten beauftragt: <br/>
			Vercel, Splitbee, ImprovMX</p>
			<h2>Änderung unserer Datenschutzbestimmungen</h2>
			<p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
    </div>
  </div>
	<style jsx>{`
		a {
		 	word-wrap: break-word;
		  	color: midnightblue;
		}
	`}</style>
  </>
  )
}
export default Legal