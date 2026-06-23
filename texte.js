/* ============================================================
   TEXTE.JS — Alle Texte der Seite an einem Ort.

   So änderst du Texte:
   • Nur den Text zwischen den `Anführungszeichen` ändern.
   • Danach speichern und die Seite im Browser neu laden (F5).

   Sonderzeichen (bitte stehen lassen):
   • &nbsp;  = geschütztes Leerzeichen (hält z. B. "599 €" zusammen)
   • &amp;   = das Zeichen "&"
   • <br>    = Zeilenumbruch
   • <strong>fett</strong>            = macht Text fett
   • <span class="text-blue">…</span> = färbt Text blau

   Tipp: Die Klammern { } [ ] , und die `Backticks` nicht löschen.
   ============================================================ */

window.TEXTE = {

  /* Blaue Leiste ganz oben */
  announcement: `Kostenloser Website-Check für Handwerksbetriebe · Analyse in 24&nbsp;Stunden per Mail`,

  /* Erster Abschnitt (Hero) */
  hero: {
    badge: `Website-Service für Handwerksbetriebe`,
    titel: `Mehr Anfragen.<br> Mehr Bewerber.<br>
        <span class="text-blue">Kein Zeitaufwand.</span>`,
    text: `Wir machen Ihre Website fit für die Zukunft, zum <strong class="font-semibold text-ink">fairen Festpreis</strong>. Und das Beste: <strong class="font-semibold text-ink">Sie müssen nichts vorbereiten.</strong> Wir arbeiten mit dem, was schon da ist. Vorab gibt es hier die kostenlose Analyse, ob sich Ihr Betrieb eignet.`,
    socialproof: `<span class="font-medium text-ink/80">Über 200 Betriebe</span> aus dem Baugewerbe vertrauen uns`,
  },

  /* Vorher / Nachher Vergleich */
  vergleich: {
    label: `Vorher / Nachher`,
    titel: `Aus „lange nichts gemacht" wird auftragsstark`,
    text: `Ziehen Sie den Regler: links die alte Website, rechts das, was wir daraus gemacht haben. Ein echtes Beispiel aus unserer Arbeit.`,
  },

  /* Vorteile */
  vorteile: {
    label: `Warum Meisterseite.ai`,
    titel: `Ihr Vorteil: Professionelle Website zum fairen Preis`,
    text: `Andere Agenturen verlangen mehrere tausend Euro für eine neue Website. Wir bauen Ihnen eine moderne, anfragestarke Website für 599&nbsp;€.`,
    karten: [
      { titel: `Mehr Anfragen aus der Region`, text: `Kunden aus Ihrer Umgebung finden Sie einfacher.` },
      { titel: `Kostenlose Analyse vorab`, text: `Sie sehen erst, was möglich ist, und entscheiden dann.` },
      { titel: `Änderungen per WhatsApp`, text: `Eine kurze WhatsApp genügt: kein Ticketsystem, keine langen Wartezeit.` },
      { titel: `Gefunden bei Google &amp; KI`, text: `Lokal sichtbar: in der Google-Suche und in modernen KI-Suchen wie ChatGPT &amp; Co.` },
      { titel: `Mitarbeiter &amp; Azubis finden`, text: `Ihre Seite arbeitet auch für die Personalsuche, durch erhöhte Sichtbarkeit.` },
      { titel: `Branchen-Partner`, text: `Wir kennen das Handwerk, keine Standard-Agentur, die Ihr Gewerk nicht versteht.` },
    ],
    dasWie: `KI- und Mobile-Optimierung gehören für uns selbstverständlich dazu. Das ist das <strong>Wie</strong>, nicht unser Verkaufsargument. Sie zählen nur das Ergebnis: mehr Anfragen.`,
  },

  /* Ablauf */
  ablauf: {
    label: `So läuft's ab`,
    titel: `Erst prüfen, dann entscheiden`,
    text: `Wir bauen erst, wenn Sie wirklich wollen. Der kostenlose Check zeigt vorab, ob sich eine neue Website für Sie lohnt.`,
    schritte: [
      { titel: `Adresse hinterlegen`, text: `Sie geben oben nur Ihre Website-Adresse und E-Mail ein. Dauert keine 30&nbsp;Sekunden.` },
      { titel: `Analyse per Mail`, text: `Sie erhalten in 24&nbsp;Stunden eine Ein-Seiten-Analyse: Ampel-Bewertung, Ihre 3 Schwachstellen und ein Angebot.` },
      { titel: `Wir bauen bei Interesse`, text: `Gefällt Ihnen das Angebot, übernehmen wir alles. Wenn nicht, behalten Sie Ihre Analyse, kostenlos.` },
    ],
  },

  /* Preise */
  preise: {
    label: `Preise`,
    titel: `Fairer Festpreis statt Agentur-Überraschungen`,
    text: `Ein klarer Preis für die komplette Website. Keine Stundensatz-Endlosschleife, keine versteckten Posten.`,
    paketTitel: `Ihre neue Website, schlüsselfertig`,
    aenderungenTitel: `Änderungen, fair gestaffelt`,
    aenderungenText: `Etwas anpassen? Eine kurze WhatsApp genügt. Drei klare Stufen, je nach Umfang:`,
    fussnote: `Alle Preise verstehen sich als Orientierung; den finalen Festpreis nennen wir Ihnen verbindlich mit Ihrer kostenlosen Analyse.`,
  },

  /* Zahlen-Band (dunkel) */
  stats: [
    `Betriebe betreut`,
    `bis zu Ihrer Analyse`,
    `fairer Festpreis`,
    `für Analyse &amp; Beratung`,
  ],

  /* Rezensionen */
  rezensionen: {
    label: `Rezensionen`,
    titel: `Das sagen Betriebe über uns`,
    eintraege: [
      { text: `„Festpreis genannt, alles übernommen. Ich musste keine Texte schreiben und keine Bilder suchen. Drei Wochen später kamen die ersten Anfragen über das Formular."`, name: `Thomas Berg · Inhaber`, firma: `Bedachungen Berg GmbH · Dachdeckermeister` },
      { text: `„Vorher hat uns online kaum jemand gefunden. Heute kommen regelmäßig Anfragen aus der Umgebung rein, ganz ohne dass ich mich darum kümmern muss."`, name: `Sandra Klein · Inhaberin`, firma: `Elektro Klein, Hannover` },
      { text: `„Über die neue Seite haben wir sogar zwei Azubis gefunden. Genau das, was wir am dringendsten gebraucht haben."`, name: `Markus Wendt · Geschäftsführer`, firma: `Wendt Heizung &amp; Sanitär` },
      { text: `„Wenn ich etwas ändern will, schreibe ich einfach eine WhatsApp und es ist erledigt. Kein Ticketsystem, kein Warten, kein Technik-Kauderwelsch."`, name: `Petra Hoffmann · Inhaberin`, firma: `Malerbetrieb Hoffmann` },
      { text: `„Endlich ein klarer Festpreis ohne böse Überraschungen. Ich wusste vorher genau, was es kostet, und das Ergebnis kann sich sehen lassen."`, name: `Jens Bauer · Inhaber`, firma: `Tischlerei Bauer` },
    ],
  },

  /* Häufige Fragen (FAQ) */
  faq: {
    label: `Häufige Fragen`,
    titel: `Gut zu wissen`,
    eintraege: [
      { frage: `Ist der Website-Check wirklich kostenlos?`, antwort: `Ja, komplett. Sie hinterlegen nur Ihre Website-Adresse und erhalten eine Ein-Seiten-Analyse per Mail, mit Ampel-Bewertung, Ihren 3 größten Schwachstellen und einem unverbindlichen Angebot. Ob Sie danach mit uns bauen, entscheiden allein Sie.` },
      { frage: `Was kostet eine neue Website am Ende?`, antwort: `Die komplette Erstellung kostet einmalig 599&nbsp;€, danach 10&nbsp;€ im Monat für Hosting und SSL. Das ist ein fairer Festpreis. Sie wissen vorher genau, woran Sie sind. Den verbindlichen Preis nennen wir Ihnen mit Ihrer kostenlosen Analyse.` },
      { frage: `Muss ich Texte oder Bilder liefern?`, antwort: `Nein. Wir übernehmen alles: Texte, Bilder und die Technik. Sie konzentrieren sich auf Ihr Handwerk, den Rest machen wir.` },
      { frage: `Wie laufen spätere Änderungen ab?`, antwort: `Mit einer kurzen WhatsApp. Kein Ticketsystem, kein Formular. Kleine Anpassungen liegen bei ca. 19&nbsp;€, mittlere bei ca. 79&nbsp;€, größere bei ca. 189&nbsp;€. Größere Vorhaben nach Aufwand, immer mit Preis vorab.` },
      { frage: `Hilft mir die Website auch bei der Personalsuche?`, antwort: `Ja. Wir richten Ihre Seite so ein, dass Sie nicht nur Kunden, sondern auch Mitarbeiter und Azubis aus der Region erreichen, und wir sorgen dafür, dass Sie bei Google und in KI-Suchen lokal gefunden werden.` },
    ],
  },

  /* Abschluss-Aufruf (CTA) */
  cta: {
    titel: `Sehen Sie kostenlos, was Ihre Website besser kann.`,
    text: `Adresse eintragen, Analyse in 24&nbsp;Stunden erhalten: Ampel-Bewertung, 3 Schwachstellen und ein faires Angebot. Ohne Risiko.`,
  },

  /* Footer */
  footer: {
    text: `Websites für Handwerksbetriebe: sichtbar, schnell und anfragestark. Zum fairen Festpreis, alles aus einer Hand.`,
  },
};
