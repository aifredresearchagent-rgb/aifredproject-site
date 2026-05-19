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
  forest: {
    meta: 'Dark Forest Legend · 7 Min Lesezeit · Mara Elsing',
    title: 'Die Legende vom schwarzen Forstpfad',
    lead: 'Wenn Nebel und Mondlicht sich berühren, öffnet sich tief im Wald ein Pfad, den man tagsüber vergeblich sucht.',
    paragraphs: [
      'Im alten Forst spricht niemand laut über den schwarzen Pfad. Man findet ihn nicht, man wird von ihm gefunden.',
      'Wer den Weg bei Nacht betritt, hört zuerst das Rascheln hinter sich, dann das Schweigen vor sich.',
      'Am Ende des Pfades steht ein verwitterter Stein. Dort, so sagt man, begegnet man einer Frage, die man lange vermieden hat.'
    ]
  },
  village: {
    meta: 'Forgotten Village Tale · 6 Min Lesezeit · Lio Kramer',
    title: 'Das vergessene Dorf am Fluss',
    lead: 'Hinter einer Brücke aus dunklem Holz verschwindet ein Dorf aus jeder Karte, sobald die Sonne wieder scheint.',
    paragraphs: [
      'Nur bei Regen werden die Dächer sichtbar, als würden sie aus dem Nebel selbst gebaut.',
      'In den Fenstern brennen Lichter, doch wenn man klopft, antwortet nur der Wind vom Fluss.',
      'Wer dort eine Nacht verbringt, kehrt zurück mit einer Erinnerung, die nie die eigene war.'
    ]
  },
  mountain: {
    meta: 'Mysterious Mountain Story · 8 Min Lesezeit · Noa Berg',
    title: 'Der stille Berg ohne Echo',
    lead: 'Hoch über dem Tal liegt ein Gipfel, an dem jedes Geräusch endet, bevor es den Fels berührt.',
    paragraphs: [
      'Die Hirten nennen ihn den stillen Berg, weil selbst Glockenklang dort verschwindet.',
      'Manche hören in der Stille eine einzelne Stimme, die ihren Namen spricht, obwohl niemand in der Nähe ist.',
      'Wer dem Pfad bis zum Grat folgt, kommt verändert zurück – ruhiger, und mit einem Blick, der weiter reicht als zuvor.'
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const key = params.get('story');
if (key && stories[key]) {
  const data = stories[key];
  const meta = document.querySelector('#meta');
  const title = document.querySelector('#title');
  const lead = document.querySelector('#lead');
  const content = document.querySelector('#content');
  if (meta) meta.textContent = data.meta;
  if (title) title.textContent = data.title;
  if (lead) lead.textContent = data.lead;
  if (content) content.innerHTML = data.paragraphs.map((p) => `<p>${p}</p>`).join('');
}

for (const link of document.querySelectorAll('a.page-link, .menu-list a, .btn, .featured-card a')) {
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
