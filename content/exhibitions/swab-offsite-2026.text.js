// ─────────────────────────────────────────────────────────────
// PAGE TEXT for the Swab OFF-Site online exhibition
// This is the file to edit for all wording on the page.
// Artists live in the sibling file: swab-offsite-2026.js
// After editing, run `node build.js`.
// ─────────────────────────────────────────────────────────────

module.exports = {

  // Small line above the title
  kicker: 'Online Exhibition · 8–11 October 2026 · Barcelona · Stand OFF3',

  // Exhibition title.
  title: 'What a Place Holds',

  // Line under the title
  subtitle: 'Virtual Studio Groups at Swab Barcelona, OFF-Site \u00b7 within Porous Practices, CasCaDas (CCD) ArtSpace',

  // Optional fair / gallery logo shown top right of the dark header.
  // Drop the file into assets/images/exhibitions/swab-offsite-2026/ and
  // uncomment. Leave commented out and nothing is shown.
  // One shared white panel holding all three marks: Swab, CasCaDas, VSG.
  logos: [
    { src: '/assets/images/exhibitions/swab-offsite-2026/logos-combined.png', alt: 'Swab Barcelona · CasCaDas ArtSpace · Virtual Studio Groups', height: 62 }
  ],

  // Short opening text inside the dark header. One string per paragraph.
  // ← PLACEHOLDER: replace with your own short intro (2–4 sentences works best here)
  intro: [
    'Virtual Studio Groups takes part in Swab Barcelona 2026 within Porous Practices, the project that CasCaDas ArtSpace presents in OFF-Site, the fair\u2019s new programme for independent art spaces. CasCaDas is an independent feminist platform in El Raval that combines residency, studio, exhibition and public programme in one place. In the booth it shows Jimmy Paez, Jessica Angima, Agnieszka Bu\u0142acik and Pawel Matyszewski, together with one painting by Gordana Zikic from VSG. This online exhibition is the rest of our presentation.'
  ],


  // Small mono line closing the dark header
  credit: 'Online Exhibition · 8–11 October 2026 · Swab Barcelona, OFF-Site Program · CasCaDas ArtSpace, Stand OFF3',

  // Right-hand label in the thin bar under the header
  statusLabel: '● Opening 8 October',

  // ── LONGER CURATORIAL TEXT ──────────────────────────────────
  // Appears as its own section between the header and the artist grid.
  // One string per paragraph. Set `curatorial: []` to hide the section.
  // ← PLACEHOLDER: this is the space for the text you are still writing.
  curatorialLabel: 'About the exhibition',
  curatorial: [
    'OFF-Site looks at spaces that work outside the main circuits of the art world and asks what other ways of making, showing and validating art they propose. VSG has worked on that question since 2021. It started as an experimental virtual residency during the pandemic, when studios closed and artists still needed each other, and it grew into an artist-led network of artists, curators and cultural professionals from more than ten countries. Today VSG operates within Barcelona\u2019s independent art ecosystem while extending across physical and virtual spaces. It has no hierarchy. Every Sunday artists meet to talk about process, research, experiments, doubts, failures and possibilities, the parts of artistic practice that usually stay hidden. Meeting every week builds familiarity and trust, and many projects, collaborations and friendships have grown out of these conversations. They also continue as articles, interviews, publications and exhibitions, so what one artist learns stays available to all the others.',
    'CasCaDas describes Porous Practices as the networks through which artists, ideas and audiences connect, disperse and reconnect. VSG works in this way. Artists build trust and lasting working relationships without needing to share a room, they meet artists from all over the world, and they get new perspectives on their work. What starts online often continues in physical space as collaborations, residencies and exhibitions, at Supermarket Art Fair in Stockholm, Juxtapose in Aarhus, TRYST in Los Angeles and now Swab in Barcelona.',
    'The projects in this exhibition work with what a place already holds. Some artists take their material from the site itself. River Reishi works with raku ceramic, local beach sand and copper patinated in Oregon seawater, Theresa Wilshusen sets shells and sea glass in resin, and Amble Skuse and Bosko Begovic load a suit with stones gathered from a beach on the Isle of Lewis. Others stay with one place for years. Gordana Zikic has photographed the same few square metres of sea from a Barcelona pier since 2011, and Yann Court\u00e9 has followed one river to the sea since 2021. Others use space that nobody built for art. Patricia Chow hangs her canvases from a balcony, Ylva Ekl\u00f6f makes a bed in a snowfield, and Kai Rennes photographs walls that someone cut into for a use their builders never intended. In all of them sustained attention to one place replaces the need for more space, and this is what OFF-Site proposes for cultural spaces: to find new possibilities in what is already available.'
  ],


  // Grey note under the artist grid — context on Swab / OFF-Site.
  // Set to '' to hide it.
  footerNote: 'Artists: Sarah Horowitz, Kai Rennes, Patricia Chow, Melih A\u015fanl\u0131, River Reishi, Ylva Ekl\u00f6f, Seb Bradshaw and Heera Gul, Radina Kordova, Juan Pablo Meneses, Juan David Galindo, K\u00fcbra K\u00f6pr\u00fcl\u00fco\u011flu A\u015fanl\u0131 and Melih A\u015fanl\u0131, Joshua Goode, Amble Skuse and Bosko Begovic, Gordana Zikic, Yann Court\u00e9, Theresa Wilshusen, Louise Norstr\u00f6m, Sarah-Jane Mason.',

  // Search-engine / social description
  description: 'What a Place Holds \u2014 Virtual Studio Groups at Swab Barcelona 2026, within Porous Practices by CasCaDas ArtSpace, in the OFF-Site programme. Fifteen works that take their material from a site, stay with one place for years, or use space nobody built for art. 8\u201311 October 2026, Stand OFF3.'

};
