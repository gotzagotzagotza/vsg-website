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
    country: "USA",
    work: "Surface Tension",
    type: "Installation",
    materials: "Black sand, amber, LED light, wool, epoxy clay, acrylic paint",
    quote: "",
    statement: [
      "River Reishi is a mixed media artist whose work explores the intersection of ecology, mythology, and cultural memory. Through sculpture, installation, and ephemeral materials such as sand and amber, she creates contemporary myths that invite viewers to reconsider their relationship with the natural world.",
      "Surface Tension is a site-responsive installation that reflects on the shifting boundary between land and sea. Inspired by traditions of ephemeral sand art and coastal folklore, the work embraces impermanence as an essential part of its meaning. At the close of each exhibition, visitors are invited to help dismantle the installation and return the sand to the sea from which it was gathered, transforming the work from a static object into a shared ritual of release and renewal.",
      "Across her practice, River creates works that evolve with each landscape they inhabit, exploring how natural materials carry memory, identity, and stories across time while reminding us that some forms of art are meant to be experienced, transformed, and ultimately returned to the living world."
    ],
    note: "Previously shown at the Baton Rouge Gallery Dec 27 – Jan 25, and Coos Art Museum May 2 – July 18.",
    website: "https://riverreishi.com/work",
    instagram: "",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/river-reishi-1.jpg", caption: "Surface Tension — full installation view" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/river-reishi-2.jpg", caption: "Detail — masked face, amber and black sand mandala" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/river-reishi-3.jpg", caption: "Detail — sculptural core with turquoise light, sand hands" }
    ]
  },

  ,{
    name: "Radina Kordova",
    country: "Bulgaria / Netherlands",
    work: "From the source to the mouth and everything in between",
    type: "Performance & Film",
    materials: "Embodied research, field recordings, sound, video documentation",
    quote: "For me, the Danube is more than a geographical line; she is a transcendental entity, a living archive with agency, memory, and voice.",
    statement: [
      "Radina Kordova is a performance and visual artist from Bulgaria, currently living and working in Groningen, the Netherlands. Her artistic practice combines research, performance, sound, sculpture, and costume to explore how narrative, folklore, and identity transform through embodiment. Kordova works with narrative, score-based movements, and field recordings, addressing ecological and cultural themes to create multilayered performances.",
      "She tells watery stories about our relationships with each other and the more-than-human world, and invites audiences to slow down, co-listen, and connect. Radina loves to collaborate and, next to being an autonomous artist, she works in the cultural field as a facilitator, producer, and curator. Her practice is currently supported by the Groningen Visual Arts Fund and the cultural network Noordenaars.",
      "From the source to the mouth and everything in between is an embodied research performance and film that will trace the length of the Danube River from the source in the Black Forest to the delta in the Black Sea. Moving with the river's currents, Radina returns to a river tied to her own history and cultural belonging — gathering sound and video documentation to explore human influence over more-than-human entities, fluid ethnicity, and what it means to become a waterbody.",
      "By positioning the Danube as the narrator, the work moves beyond human-centered perspectives on landscape, time, and relationality, exploring how bodies of water shape identity and belonging through embodied research and connections with others along the river."
    ],
    note: "",
    website: "https://radinakordova.com",
    instagram: "https://www.instagram.com/radina_kordova/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/radina-kordova-1.jpg", caption: "From the source to the mouth and everything in between" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/radina-kordova-2.jpg", caption: "From the source to the mouth and everything in between" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/radina-kordova-3.jpg", caption: "From the source to the mouth and everything in between" }
    ]
  }

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
