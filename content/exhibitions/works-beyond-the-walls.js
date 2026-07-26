// Works Beyond the Walls — hybrid exhibition, online component
// ─────────────────────────────────────────────────────────────
// HOW TO ADD AN ARTIST
//   1. Copy one of the two templates at the bottom of this file.
//   2. Paste it into the `module.exports` array (add a comma after the previous entry).
//   3. Fill in all the fields. Fields that can be left blank: country, quote, note, website, instagram.
//   4. Drop image files into: assets/images/exhibitions/works-beyond-the-walls/
//      Naming convention: firstname-lastname-1.jpg, firstname-lastname-2.jpg, etc.
//   5. Run `node build.js` and push — the page updates automatically.
// ─────────────────────────────────────────────────────────────

module.exports = [

  {
    name: "River Reishi",
    country: "Rooted along the Baltic, North, and Mediterranean coasts",
    work: "Surface Tension",
    type: "Installation",
    materials: "Black sand, amber, LED light, wool, epoxy clay, acrylic paint",
    quote: "Dreaming is a practice that taps into the shared language between nature and spirit.",
    statement: [
      "For River Reishi, dreaming is a practice that taps into the shared language between nature and spirit. Her art visually articulates this language, while also weaving in stories, mythologies, and symbols from the collective unconscious.",
      "River draws inspiration from the syncretism between Indigenous traditions and religions such as Buddhism and Christianity, seeing syncretism as a means of cultural survival and art as a conduit for stories and ways of knowing to be brought back into our collective consciousness.",
      "River is a mixed media artist, sculptor, digital painter, and installation artist. In addition to a mode of expression, art has always been her primary way of coping with the strain of being neurodivergent in neurotypical contexts. As a healing modality, she practices art as a way to transmute sadness and trauma into hope. A common theme in her work is imagining ancient worlds that recognize the sacredness of queer and sapphic connection, and the power of femme identities outside of their fertility. River then creates new myths, symbols, and artifacts from these imagined worlds.",
      "Just as rivers shape and are shaped by multiple topographies, she grounds these experiences through her own traditions and roots. All of this is most notable in her study of sand art — a Slavic blessing with similar iterations found in both Buddhist and Mexican traditions, such as mandalas and tapetes."
    ],
    note: "Previously shown at the Baton Rouge Gallery, Jan 2 – Jan 25, for the Surreal Salon.",
    website: "https://riverreishi.com/work",
    instagram: "",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/river-reishi-1.jpg", caption: "Surface Tension — full installation view" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/river-reishi-2.jpg", caption: "Detail — masked face, amber and black sand mandala" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/river-reishi-3.jpg", caption: "Detail — sculptural core with turquoise light, sand hands" }
    ]
  },

  // ─── PASTE NEW IMAGE-BASED ARTIST HERE ───────────────────────────────────
  // {
  //   name: "",
  //   country: "",
  //   work: "",
  //   type: "",           // e.g. "Painting", "Installation", "Sculpture", "Photography"
  //   materials: "",
  //   quote: "",          // one pulled sentence — leave "" to hide
  //   statement: [
  //     "Paragraph one.",
  //     "Paragraph two."
  //   ],
  //   note: "",           // exhibition history / credit — leave "" to hide
  //   website: "https://",
  //   instagram: "https://www.instagram.com/HANDLE/",
  //   kind: "images",
  //   images: [
  //     { src: "/assets/images/exhibitions/works-beyond-the-walls/NAME-1.jpg", caption: "" },
  //     { src: "/assets/images/exhibitions/works-beyond-the-walls/NAME-2.jpg", caption: "" },
  //     { src: "/assets/images/exhibitions/works-beyond-the-walls/NAME-3.jpg", caption: "" }
  //   ]
  // },

  // ─── PASTE NEW VIDEO ARTIST HERE ─────────────────────────────────────────
  // {
  //   name: "",
  //   country: "",
  //   work: "",
  //   type: "Video",
  //   materials: "",
  //   quote: "",
  //   statement: ["Paragraph one."],
  //   note: "",
  //   website: "https://",
  //   instagram: "https://www.instagram.com/HANDLE/",
  //   kind: "video",
  //   video: {
  //     embed: "https://player.vimeo.com/video/XXXXXXX",
  //     poster: "/assets/images/exhibitions/works-beyond-the-walls/NAME-poster.jpg"
  //   }
  // },

];
