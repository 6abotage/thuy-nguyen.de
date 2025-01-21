// File: app/datenschutz/page.tsx (Next.js App Router)

import React from "react";

export default function DatenschutzPage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Datenschutzerklärung</h1>

      {/* I. Verantwortliche Stelle */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          I. Name und Kontaktdaten der Verantwortlichen
        </h2>
        <p>
          Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten im
          Sinne der Datenschutz-Grundverordnung (DS-GVO) ist:
        </p>
        <p className="mt-2">
          <strong>Thu Thuy Nguyen</strong>
          <br />
          Graeffstr. 3, Wnr. 029
          <br />
          50823 Köln
          <br />
          Telefon: 015228726434
          <br />
          E-Mail:{" "}
          <a href="mailto:bythuyngy@gmail.com" className="underline">
            bythuyngy@gmail.com
          </a>
          <br />
          Website:{" "}
          <a href="https://thuynguyen.art" className="underline">
            thuynguyen.art
          </a>
        </p>
      </section>

      {/* II. Datenverarbeitung bei Besuch der Website */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          II. Beschreibung und Umfang der Datenverarbeitung
        </h2>
        <h3 className="font-semibold mt-4">1. Server-Log-Dateien</h3>
        <p>
          Bei jedem Aufruf dieser Website erfasst unser Hosting-Anbieter
          automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr
          Browser automatisch übermittelt. Dies sind:
        </p>
        <ul className="list-disc list-inside mt-2 mb-4">
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Ihre IP-Adresse</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>
            Die Seite, von der aus unsere Seite aufgerufen wurde (Referrer-URL)
          </li>
          <li>Besuchte Seite auf unserer Website</li>
          <li>Übertragene Datenmenge</li>
          <li>Meldung, ob der Abruf erfolgreich war</li>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
        </ul>
        <p>
          Die vorübergehende Speicherung dieser Daten ist notwendig, um die
          Auslieferung der Website zu gewährleisten und die Systemsicherheit zu
          erhöhen. Eine Auswertung zu Marketingzwecken findet nicht statt.
        </p>
        <p className="mt-2">
          <strong>Rechtsgrundlage</strong> für diese Datenverarbeitung ist Art.
          6 Abs. 1 Buchstabe f DS-GVO (berechtigtes Interesse). Das berechtigte
          Interesse liegt in der sicheren und störungsfreien Bereitstellung
          unserer Website.
        </p>
        <p className="mt-2">
          <strong>Speicherdauer:</strong> Die Log-Dateien werden in der Regel
          automatisch nach spätestens sieben Tagen gelöscht, sofern keine
          weitergehende Aufbewahrung zu Beweiszwecken erforderlich ist (z. B.
          zur Aufklärung von Missbrauchs- oder Betrugshandlungen).
        </p>

        <h3 className="font-semibold mt-6">
          2. Keine Cookies / Keine Tracking-Tools
        </h3>
        <p>
          Wir setzen auf unserer Website weder Cookies noch sonstige Tracking-
          oder Analysetools ein.
        </p>
      </section>

      {/* III. Rechte der betroffenen Personen */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          III. Rechte der betroffenen Personen
        </h2>
        <p>
          Als betroffene Person haben Sie nach der DS-GVO verschiedene Rechte,
          die sich insbesondere aus Art. 15 bis 21 DS-GVO ergeben:
        </p>
        <ul className="list-disc list-inside mt-2 mb-4">
          <li>
            <strong>Recht auf Auskunft (Art. 15 DS-GVO):</strong> Sie haben das
            Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen
            Daten zu erhalten.
          </li>
          <li>
            <strong>Recht auf Berichtigung (Art. 16 DS-GVO):</strong> Sollten
            Ihre personenbezogenen Daten unrichtig oder unvollständig sein,
            können Sie deren Berichtigung oder Vervollständigung verlangen.
          </li>
          <li>
            <strong>Recht auf Löschung (Art. 17 DS-GVO):</strong> Unter
            bestimmten Voraussetzungen haben Sie das Recht auf Löschung Ihrer
            Daten, z. B. wenn diese für die Zwecke, für die sie erhoben wurden,
            nicht mehr benötigt werden.
          </li>
          <li>
            <strong>
              Recht auf Einschränkung der Verarbeitung (Art. 18 DS-GVO):
            </strong>{" "}
            Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen,
            sofern die gesetzlichen Voraussetzungen vorliegen.
          </li>
          <li>
            <strong>Recht auf Datenübertragbarkeit (Art. 20 DS-GVO):</strong>{" "}
            Sofern die Verarbeitung auf Ihrer Einwilligung oder einem Vertrag
            beruht und mithilfe automatisierter Verfahren erfolgt, haben Sie das
            Recht, die Sie betreffenden Daten in einem gängigen,
            maschinenlesbaren Format zu erhalten oder direkt an einen Dritten
            übermitteln zu lassen.
          </li>
          <li>
            <strong>Widerspruchsrecht (Art. 21 DS-GVO):</strong> Sie haben das
            Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
            jederzeit gegen die Verarbeitung Sie betreffender personenbezogener
            Daten, die auf Grundlage eines berechtigten Interesses (Art. 6 Abs.
            1 Buchstabe f DS-GVO) erfolgt, Widerspruch einzulegen.
            <br />
            Bitte beachten Sie, dass im Falle eines Widerspruchs die
            Verarbeitung Ihrer Daten nur dann eingestellt wird, wenn keine
            zwingenden schutzwürdigen Gründe für die Verarbeitung nachweisbar
            sind, die Ihre Interessen, Rechte und Freiheiten überwiegen.
          </li>
        </ul>
        <p>
          Möchten Sie eines Ihrer Rechte geltend machen, genügt eine formlose
          Mitteilung an die oben angegebene E-Mail-Adresse.
        </p>
      </section>

      {/* IV. Beschwerderecht */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          IV. Beschwerderecht bei einer Aufsichtsbehörde
        </h2>
        <p>
          Sie haben gemäß Art. 77 DS-GVO das Recht, sich bei einer
          Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind,
          dass die Verarbeitung Ihrer personenbezogenen Daten gegen geltendes
          Datenschutzrecht verstößt. In NRW ist dies beispielsweise:
        </p>
        <p className="mt-2">
          Landesbeauftragte für Datenschutz und Informationsfreiheit
          Nordrhein-Westfalen
          <br />
          Kavalleriestraße 2–4
          <br />
          40213 Düsseldorf
          <br />
          <a
            href="https://www.ldi.nrw.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            www.ldi.nrw.de
          </a>
        </p>
      </section>

      {/* V. Aktualität und Änderungen */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          V. Aktualität und Änderungen dieser Datenschutzerklärung
        </h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung gelegentlich
          anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
          entspricht. Für Ihren erneuten Besuch gilt dann die jeweils aktuelle
          Datenschutzerklärung.
        </p>
      </section>

      <p className="text-sm text-gray-600">Stand: Januar 2025</p>
    </div>
  );
}
