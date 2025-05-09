import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description: "Cookie-Richtlinie von AlpenPromo - Informationen zur Verwendung von Cookies auf unserer Website.",
}

export default function CookiesPolicy() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Cookie-Richtlinie</h1>
          <p className="text-lg max-w-2xl mx-auto">Informationen zur Verwendung von Cookies auf unserer Website.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Was sind Cookies?</h2>
            <p>
              Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn Sie
              unsere Website besuchen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen und
              tragen dazu bei, die Benutzerfreundlichkeit unserer Website zu verbessern.
            </p>

            <h2>Welche Arten von Cookies verwenden wir?</h2>

            <h3>Notwendige Cookies</h3>
            <p>
              Diese Cookies sind für das Funktionieren unserer Website unerlässlich. Sie ermöglichen grundlegende
              Funktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche der Website. Die Website kann
              ohne diese Cookies nicht richtig funktionieren.
            </p>

            <h3>Funktionale Cookies</h3>
            <p>
              Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen.
              Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten
              eingebunden haben.
            </p>

            <h3>Analytische Cookies</h3>
            <p>
              Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie
              Informationen anonym sammeln und melden. Sie helfen uns, die Leistung unserer Website zu verbessern.
            </p>

            <h3>Marketing Cookies</h3>
            <p>
              Diese Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Die Absicht ist, Anzeigen zu
              schalten, die relevant und ansprechend für den einzelnen Benutzer sind und daher wertvoller für Publisher
              und werbetreibende Drittparteien sind.
            </p>

            <h2>Wie können Sie Cookies kontrollieren?</h2>
            <p>
              Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf den Link "Cookie-Einstellungen" am
              Seitenende klicken. Sie können auch Cookies über die Einstellungen Ihres Browsers kontrollieren oder
              löschen. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität unserer Website
              beeinträchtigen kann.
            </p>
            <p>Hier finden Sie Informationen zum Löschen oder Kontrollieren von Cookies in den gängigsten Browsern:</p>
            <ul>
              <li>
                Chrome:{" "}
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                  https://support.google.com/chrome/answer/95647
                </a>
              </li>
              <li>
                Firefox:{" "}
                <a
                  href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen
                </a>
              </li>
              <li>
                Safari:{" "}
                <a
                  href="https://support.apple.com/de-de/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.apple.com/de-de/guide/safari/sfri11471/mac
                </a>
              </li>
              <li>
                Edge:{" "}
                <a
                  href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-löschen-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-löschen-63947406-40ac-c3b8-57b9-2a946a29ae09
                </a>
              </li>
            </ul>

            <h2>Änderungen unserer Cookie-Richtlinie</h2>
            <p>
              Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu ändern. Änderungen werden auf dieser
              Seite veröffentlicht. Bitte überprüfen Sie diese Seite regelmäßig, um über Aktualisierungen informiert zu
              bleiben.
            </p>

            <h2>Kontakt</h2>
            <p>Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter:</p>
            <p>
              E-Mail: datenschutz@alpenpromo.com
              <br />
              Telefon: +43 662 153 429
            </p>

            <p className="text-sm text-muted-foreground mt-8">Stand: Mai 2025</p>
          </div>
        </div>
      </section>
    </>
  )
}
