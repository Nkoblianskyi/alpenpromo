import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von AlpenPromo - Informationen zum Umgang mit Ihren Daten.",
}

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Informationen zum Umgang mit Ihren Daten und zu Ihren Rechten gemäß der DSGVO.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              AlpenPromo
              <br />
              Getreidegasse 15
              <br />
              5020 Salzburg, Austria
              <br />
              Tel: +43 662 153 429
              <br />
              E-Mail: info@alpenpromo.com
            </p>

            <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Bestellung, bei einer
              Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) oder bei Eröffnung eines Kundenkontos
              freiwillig mitteilen. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich.
              Wir verwenden die von Ihnen mitgeteilten Daten zur Vertragsabwicklung und Bearbeitung Ihrer Anfragen.
            </p>

            <h2>3. Verwendung von Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw.
              vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Cookies können keine Programme
              ausführen oder Viren auf Ihren Computer übertragen.
            </p>
            <p>
              Sie können Ihre Browser-Einstellung entsprechend Ihren Wünschen konfigurieren und z.B. die Annahme von
              Third-Party-Cookies oder allen Cookies ablehnen. Wir weisen Sie darauf hin, dass Sie eventuell nicht alle
              Funktionen dieser Website nutzen können.
            </p>

            <h2>4. Datensicherheit</h2>
            <p>
              Wir sichern unsere Website und sonstigen Systeme durch technische und organisatorische Maßnahmen gegen
              Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch unbefugte Personen. Der
              Zugang zu Ihrem Kundenkonto ist nur nach Eingabe Ihres persönlichen Passwortes möglich.
            </p>

            <h2>5. Ihre Rechte</h2>
            <p>Sie haben das Recht:</p>
            <ul>
              <li>
                gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;
              </li>
              <li>
                gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns
                gespeicherten personenbezogenen Daten zu verlangen;
              </li>
              <li>
                gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;
              </li>
              <li>
                gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;
              </li>
              <li>
                gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem
                strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen
                anderen Verantwortlichen zu verlangen;
              </li>
              <li>gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen;</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
            </ul>

            <h2>6. Kontakt</h2>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an
              unseren Datenschutzbeauftragten:
            </p>
            <p>E-Mail: datenschutz@alpenpromo.com</p>

            <h2>7. Änderungen der Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
              Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
              z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>

            <p className="text-sm text-muted-foreground mt-8">Stand: Mai 2025</p>
          </div>
        </div>
      </section>
    </>
  )
}
