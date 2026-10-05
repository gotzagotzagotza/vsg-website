// ─────────────────────────────────────────────────────────────
// PAGE TEXT for the Swab OFF-Site online exhibition
// This is the file to edit for all wording on the page.
// Artists live in the sibling file: swab-offsite-2026.js
// After editing, run `node build.js`.
// ─────────────────────────────────────────────────────────────

module.exports = {

  // Small line above the title
  kicker: 'Online Exhibition · 8–11 October 2026 · Barcelona · Stand OFF3',

  // Big page title. ← PLACEHOLDER: replace with the final exhibition title
  title: 'VSG at Swab OFF-Site',

  // Line under the title
  subtitle: 'Virtual Studio Groups · guests of CasCaDas ArtSpace',

  // Optional fair / gallery logo shown top right of the dark header.
  // Drop the file into assets/images/exhibitions/swab-offsite-2026/ and
  // uncomment. Leave commented out and nothing is shown.
  logos: [
    { src: '/assets/images/exhibitions/swab-offsite-2026/swab-logo.png', alt: 'Swab Barcelona', height: 44 },
    { src: '/assets/images/exhibitions/swab-offsite-2026/cascadas-logo.png', alt: 'CasCaDas ArtSpace', height: 56 }
  ],

  // Short opening text inside the dark header. One string per paragraph.
  // ← PLACEHOLDER: replace with your own short intro (2–4 sentences works best here)
  intro: [
    'Virtual Studio Groups joins CasCaDas ArtSpace in OFF-Site, Swab Barcelona’s programme for independent art spaces that emerge through reuse, adaptation, and necessity. The works gathered here respond to that starting point: unconventional, overlooked, or disused environments reactivated as places for making, showing, and meeting.',
    'The exhibition lives here, online. At the fair it is reached by QR code from the CasCaDas booth, Stand OFF3.'
  ],

  // Small mono line closing the dark header
  credit: 'Online Exhibition · 8–11 October 2026 · Swab Barcelona, OFF-Site Program · CasCaDas ArtSpace, Stand OFF3',

  // Right-hand label in the thin bar under the header
  statusLabel: '● Opening 8 October',

  // ── LONGER CURATORIAL TEXT ──────────────────────────────────
  // Appears as its own section between the header and the artist grid.
  // One string per paragraph. Set `curatorial: []` to hide the section.
  // ← PLACEHOLDER: this is the space for the text you are still writing.
  curatorialLabel: 'About the selection',
  // HIDDEN until the text is written: an empty list removes the whole section
  // from the page. To bring it back, put your paragraphs in the list below —
  // one string per paragraph, as many as you like. Example of the shape:
  //   curatorial: [
  //     'First paragraph.',
  //     'Second paragraph.'
  //   ],
  curatorial: [],

  // Grey note under the artist grid — context on Swab / OFF-Site.
  // Set to '' to hide it.
  footerNote: 'Swab Barcelona, founded in 2006, is an independent art fair conceived as a platform for exchange between artists, galleries, audiences, and cultural agents. OFF-Site is its programme dedicated to independent art spaces that reactivate unconventional environments — challenging the white cube and the logic of expansion in favour of adaptation, context-sensitivity, and community.',

  // Search-engine / social description
  description: 'VSG at Swab OFF-Site — a Virtual Studio Groups online exhibition with CasCaDas ArtSpace at Swab Barcelona, 8–11 October 2026. Works responding to reuse, adaptation, and the reactivation of unconventional spaces.'

};
