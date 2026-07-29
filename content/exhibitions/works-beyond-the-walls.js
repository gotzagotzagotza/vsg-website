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

  {
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

  ,{
    name: "Juan Antonio Cerezuela",
    country: "Spain",
    work: "El instante de peligro",
    type: "Installation",
    materials: "Mixed media installation",
    quote: "La meta es el origen — the goal is the origin.",
    statement: [
      "Juan Antonio Cerezuela (Cartagena, 1982) is a visual artist, researcher and lecturer based in Barcelona, Spain. He holds a PhD in Visual Arts and Intermedia from the Universitat Politècnica de València. His practice encompasses installation, performance and site-specific intervention.",
      "His work has been presented at institutions including Arts Santa Mònica, Born Centre de Cultura i Memòria, Fabra i Coats and Espronceda Institute of Art & Culture (Barcelona), Centro Párraga and Fundación Gabarrón (Murcia), and Centro de Arte Tomás y Valiente (Madrid). His projects have also been included in the Biennal del Pensament (Barcelona) and the Biennal de Mislata (Valencia).",
      "El instante de peligro is a group of works that explores moments of social and political conflict through the ideas of Walter Benjamin, Roland Barthes, Edgar Morin and Karl Kraus. The exhibition highlights the importance of cultural actions and media manipulation as primary forces in the formation of both old and new authoritarian politics.",
      "La meta es el origen, the central work framing the project, takes us back to Kraus at his most devastating — when he sees the future as something disconcerting and threatening, proposing a return to the origin as a foothold from which it might once again be possible to decide almost everything. Curated by Nora Ancarola. Photography: Vacío Estudio."
    ],
    note: "Centro Párraga, Murcia, Spain, 2024. Exhibition video: https://www.youtube.com/watch?v=S4GN1BeSpac",
    website: "https://www.juanantoniocerezuela.com/",
    instagram: "https://www.instagram.com/juan_antonio_cerezuela/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/juan-antonio-4.jpg", caption: "El instante de peligro — installation detail" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/juan-antonio-1.jpg", caption: "El instante de peligro — installation view, Centro Párraga, Murcia, 2024" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/juan-antonio-2.jpg", caption: "El instante de peligro — installation detail" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/juan-antonio-3.jpg", caption: "El instante de peligro — installation detail" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/juan-antonio-5.jpg", caption: "El instante de peligro — exhibition view" }
    ]
  }

  ,{
    name: "Zeynep Öztaşdelen",
    country: "Türkiye",
    work: "Cherry Pie / Burnt Sugar / Raspberry Mist",
    type: "Painting",
    materials: "Oil on canvas",
    quote: "",
    statement: [
      "Zeynep Öztaşdelen is a contemporary artist whose practice explores emotion, memory, and the subconscious through atmospheric abstraction. Working primarily with oil on canvas, she creates immersive compositions where color, depth, and organic forms blur the boundary between the familiar and the unknown.",
      "Cherry Pie (100 × 120 cm, 2026) explores desire as something both seductive and consuming. Layers of crimson, burgundy, and luminous pink dissolve into one another, creating an atmospheric space suspended between intimacy, memory, and longing.",
      "Burnt Sugar (70 × 100 cm, 2026) explores the tension between warmth and decay, where sweetness transforms into something darker and more visceral. Layers of earthy browns, amber, and shadowy tones dissolve into one another, evoking a landscape shaped by memory, erosion, and time.",
      "Raspberry Mist (70 × 100 cm, 2026) explores the delicate space between presence and disappearance, where color seems to emerge and dissolve like a fading memory. Soft layers of raspberry, blush, and muted rose create a dreamlike atmosphere suspended between intimacy and distance."
    ],
    note: "",
    website: "",
    instagram: "https://www.instagram.com/zoztasdelenstudio/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/zey-oztasdelen-1.jpg", caption: "Cherry Pie — oil on canvas, 100 × 120 cm, 2026" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/zey-oztasdelen-2.jpg", caption: "Burnt Sugar — oil on canvas, 70 × 100 cm, 2026" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/zey-oztasdelen-3.jpg", caption: "Raspberry Mist — oil on canvas, 70 × 100 cm, 2026" }
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

  ,{
    name: "Juan David Galindo Guarin",
    country: "Spain",
    work: "Get into The Zone",
    type: "Video",
    materials: "Single channel video, 25'12min, 2022",
    quote: "",
    statement: [
      "Juan David Galindo Guarin is an artist, educator, and cultural mediator based in Barcelona. His practice moves across performance, video, installation, and archive, exploring the processes of subjectivation within Western capitalist culture — using his own body as case study through autoethnography, performance, and fiction. His work examines identity consumption, hyperproductivity, and self-image in the digital age, seeking points of encounter and collective recognition.",
      "He holds a degree in Fine Arts and Design from Escola Massana, Barcelona, and completed the Independent Studies Programme at MACBA. He has participated in residencies at Hangar Barcelona and La Escocesa, and has exhibited internationally including at MACBA Barcelona, Blueproject Foundation, Fabra i Coats, and Centro Cultural Las Cigarreras Alicante, with solo shows in Barcelona, Belgrade, and L'Hospitalet.",
      "Get into The Zone explores the neuro-morphogenesis derived from semiotic capitalism in which (in)attention is the center of the (im)productive capacity of the cognitariat. The work makes a narrative and conceptual journey through ADHD, its treatments derived from amphetamines, mild stimulants (coffee, tea, taurine, mate) and their colonial origin, video games, work in front of the screen, techno, anxiety and depression.",
      "Approaching from personal experience a broader social and historical process, the work examines the relationship of interconnected screens, overstimulation, immaterial overproduction, leisure, partying, anxiety, depression and addiction."
    ],
    note: "More on this work: unjuan.com/get-into-the-zone",
    website: "https://www.unjuan.com",
    instagram: "https://www.instagram.com/juandavidgalindoguarin/",
    kind: "video",
    video: {
      embed: "https://www.youtube.com/embed/x2m21N8tYZc",
      poster: "/assets/images/exhibitions/works-beyond-the-walls/juan-david-poster.jpg"
    }
  }

  ,{
    name: "Kübra Köprülüoğlu Aşanlı",
    country: "Türkiye",
    work: "Reveal",
    type: "Video",
    materials: "Single channel video",
    quote: "",
    statement: [
      "Kübra Köprülüoğlu Aşanlı (b. 1984) is a contemporary artist based in Türkiye whose research-driven practice explores ecological relationships, indigenous knowledge systems, and regenerative futures. Working across painting, installation, video, and sound, she investigates how cultural memory and human–nature connections can be reimagined through contemporary art.",
      "Through layered imagery, fragmented textures, organic forms, and bold colors, her work navigates the tension between visibility and erasure. Her visual language is defined by fluid transitions between forms, dissolving fixed boundaries and building compositions rooted in symbolic realism. By challenging extractive modes of representation, her practice repositions indigenous perspectives and non-human narratives as active agents rather than passive subjects.",
      "Her multidisciplinary practice brings together artistic research, ecological thinking, and visual storytelling to explore alternative models of coexistence. Rather than treating identity, nature, and culture as separate subjects, she approaches them as interconnected systems shaped by memory, reciprocity, and continuous transformation.",
      "This photograph by Yann Courté immediately awakened a profound sensation within Kübra Köprülüoğlu Aşanlı, bringing to light the invisible, silent bond that exists between the artwork, the artist, and the viewer. The fluidly shifting colors became a vivid metaphor for the transience of time and subject, reminding her that every gaze reveals a uniquely personal emotion. Captivated by this dynamic interplay, she felt an undeniable impulse to breathe life into the still image and transform it into a moving visual journey that captures the ever-changing nature of our perception."
    ],
    note: "Named Top 10 Artist at the BIEAF World Artist Award (2024). Steering Committee Member, 23rd Busan International Environment Art Festival (2026). Exhibited in South Korea, Japan, Greece, and North Macedonia.",
    website: "https://kubrakopruluogluasanli.myportfolio.com/",
    instagram: "https://www.instagram.com/noooneelsebutme/",
    kind: "video",
    video: {
      embed: "https://www.youtube.com/embed/ZhDxSBJxI9M",
      poster: "/assets/images/exhibitions/works-beyond-the-walls/kubra-poster.png"
    }
  }

  ,{
    name: "Ivana Ehrensvärd",
    country: "Serbia",
    work: "It's Difficult",
    type: "Digital / Blockchain",
    materials: "",
    quote: "",
    statement: [
      "Ivana Ehrensvärd is a curator and artist based in Belgrade, Serbia, working across painting and the digital and blockchain space. Her work has been shown internationally in group exhibitions, and she is the founder of Hartverse Gallery, a blockchain native gallery and community active on Tezos. Transformation is the recurring theme across her practice.",
      "It's Difficult captures a moment of stuckness, an unease with no clear way out, held together by the faith that it will pass. The work speaks to transformation not as a single shift, but as the slow, uncertain space in between. The piece has been included in several curations on Objkt."
    ],
    note: "View more of her work on Objkt: objkt.com/users/tz1X7e7KNmwihTDm2ZEBWN5AYYMpS8ikAQG4/created",
    website: "https://ivanaontheblock.art/",
    instagram: "",
    kind: "video",
    video: {
      embed: "https://www.youtube.com/embed/uoylpOJGQTU",
      poster: "/assets/images/exhibitions/works-beyond-the-walls/ivana-poster.png"
    }
  }

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
