const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('#menu-list');
if (menuToggle && menuList) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuList.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const stories = {
  moorpfad: {
    category: 'Lokale Sage',
    meta: '7 Min Lesezeit · Mara Elsing',
    title: 'Die Legende vom schwarzen Forstpfad',
    paragraphs: [
      'Im alten Forst spricht niemand laut über den schwarzen Pfad. Man findet ihn nicht, man wird von ihm gefunden. Zwischen den Bäumen liegt ein Geruch nach Regen und Harz, und selbst der Wind scheint dort langsamer zu atmen.',
      'Wer den Weg bei Nacht betritt, hört zuerst das Rascheln hinter sich, dann das Schweigen vor sich. Jeder Schritt fühlt sich an wie eine Entscheidung, die schon viel früher getroffen wurde.',
      'Am Ende des Pfades steht ein verwitterter Stein. Dort, so sagt man, begegnet man einer Frage, die man lange vermieden hat. Manche kehren mit klaren Augen zurück, andere bleiben bis zum Morgen am Waldrand sitzen.',
      'Die Ältesten des Dorfs warnen nicht vor dem Pfad – sie warnen vor Hast. Denn der Forst zeigt sich nur denen, die still genug sind, um ihre eigenen Gedanken nicht zu überhören.',
      'Wenn der Morgen den Nebel hebt, ist der Pfad verschwunden. Zurück bleibt nur das Gefühl, dass der Wald nicht fremd war, sondern ein Spiegel für das, was man in sich trägt.'
    ]
  },
  uhrmacherin: {
    category: 'Märchen',
    meta: '8 Min Lesezeit · Noa Berg',
    title: 'Die Uhrmacherin im Berg',
    paragraphs: [
      'Hinter einer schmalen Felsspalte, tief unter dem Dorf, arbeitete eine Uhrmacherin, deren Werkstatt nur im Winterlicht sichtbar wurde. Ihre Fenster waren aus Bergkristall, ihre Uhren aus Messing und Mondstaub.',
      'Wer zu ihr kam, brachte keine kaputte Uhr, sondern verlorene Zeit: ein versäumtes Wort, ein zu spätes Wiedersehen, ein Abschied ohne Blick zurück. Die Uhrmacherin nahm jedes Bedauern in die Hand wie ein feines Zahnrad.',
      'Tagelang hörte man dann nur das gleichmäßige Ticken unter dem Berg. Wenn die Arbeit beendet war, gab sie den Menschen keine Uhr zurück, sondern einen Moment: genau den einen Augenblick, in dem ein Satz gesagt, ein Weg gewählt oder ein Fehler verstanden werden konnte.',
      'Viele nutzten diesen Moment, einige ließen ihn verstreichen. Doch jeder, der die Werkstatt verließ, ging langsamer und sah genauer hin, als hätte die Zeit plötzlich eine Stimme bekommen.',
      'Und wenn nachts der Berg leise vibrierte, sagten die Alten: Die Uhrmacherin ordnet wieder die Stunden derer, die glauben, sie hätten keine mehr übrig.'
    ]
  },
  lindenbaum: {
    category: 'Geschichte',
    meta: '6 Min Lesezeit · Lio Kramer',
    title: 'Der Brief im Lindenbaum',
    paragraphs: [
      'Am Rand des Dorfplatzes stand eine alte Linde, deren Stamm so breit war, dass drei Kinder ihn kaum umfassen konnten. Eines Sommers fand man in einer Spalte des Baumes einen versiegelten Brief ohne Namen.',
      'Niemand wusste, für wen er bestimmt war. Trotzdem sprach am Abend jeder darüber: die Bäckerin, der Postbote, der stille Mann vom Fluss. Als man das Siegel öffnete, standen nur drei Zeilen darin – schlicht und klar.',
      'Die Worte erinnerten das Dorf an ein Versprechen, das man einst gemeinsam gegeben und mit den Jahren vergessen hatte: niemanden allein zu lassen, der seine Stimme verliert. In derselben Nacht klopfte es wieder an Türen, an denen seit langem niemand mehr geklopft hatte.',
      'In den folgenden Wochen änderte sich der Ort leise. Gespräche wurden länger, Wege gemeinsamer, und selbst auf dem Markt sprach man weniger über Preise als über Erinnerungen.',
      'Der Brief blieb im Lindenbaum. Man legte ihn zurück, damit auch die Nächsten ihn finden konnten – wenn das Dorf wieder zu laut werden sollte, um einander zuzuhören.'
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const key = params.get('id');
if (key && stories[key]) {
  const data = stories[key];
  const category = document.querySelector('#category');
  const meta = document.querySelector('#meta');
  const title = document.querySelector('#title');
  const content = document.querySelector('#content');
  if (category) category.textContent = data.category;
  if (meta) meta.textContent = data.meta;
  if (title) title.textContent = data.title;
  if (content) content.innerHTML = data.paragraphs.map((p) => `<p>${p}</p>`).join('');
}

for (const link of document.querySelectorAll('a.page-link, .menu-list a, .btn, .featured-card a, .back-links a')) {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || link.target === '_blank') return;
    event.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(() => {
      window.location.href = href;
    }, 180);
  });
}
