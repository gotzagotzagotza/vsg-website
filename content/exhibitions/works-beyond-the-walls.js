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

  ,{
    name: "Katarina Rasic",
    country: "Serbia / Ivory Coast",
    work: "Echoes of the Pineal",
    type: "Performance",
    materials: "Ritual performance, embodied research, symbolic materials",
    quote: "Echoes of the Pineal invites us to enter a space where intuition, memory, and symbolic action become pathways toward inner clarity.",
    statement: [
      "Katarina Rasic is a multidisciplinary Serbian artist and international art educator whose practice moves across performance, installation, painting, drawing, and participatory methodologies. Her work spans and reflects her experience of over a decade spent across Asia and Latin America. Currently working between Serbia and Ivory Coast, she explores memory, belonging, intuition, and transformation through embodied rituals that bridge personal experience with collective reflection. Her works emerge from cross-cultural dialogue and investigate how symbolic actions can reconnect us with sensory knowledge and the more-than-human world.",
      "Echoes of the Pineal is a ritual performance exploring the relationship between intuition, consciousness, and the symbolic resonance of the pinecone. Through a minimal vocabulary of gestures and materials — including pinecones, mirrors, sweets, and tape — the work reflects on the ways contemporary life fragments our connection to inner knowing while proposing ritual as a space for remembrance and renewal.",
      "Part of the ongoing Pineal Series, the performance investigates intuition as an embodied form of knowledge rather than a mystical abstraction. Moving between vulnerability and presence, Rasic invites audiences into a shared contemplation of perception, memory, and the quiet intelligence of the body, asking what it means to trust the inner landscapes that continue to echo beneath the noise of everyday life."
    ],
    note: "",
    website: "https://katarinarasic.com/",
    instagram: "https://www.instagram.com/katarinarasicart/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/katarina-rasic-1.jpg", caption: "Echoes of the Pineal — performance view" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/katarina-rasic-2.jpg", caption: "Echoes of the Pineal — performance view" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/katarina-rasic-3.jpg", caption: "Echoes of the Pineal — performance view" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/katarina-rasic-4.jpg", caption: "Echoes of the Pineal — performance view" }
    ]
  }

  ,{
    name: "Natalia Carminati",
    country: "Argentina / Spain",
    work: "Edible plant-powered skin",
    type: "Performance",
    materials: "Organic wheatgrass on textile design",
    quote: "",
    statement: [
      "Natalia Carminati (Buenos Aires–Barcelona) is an artist whose research and conceptual work focuses on the critical study of contemporary culture, postcolonial theory, biotechnology, and food sovereignty. Her projects materialize in the creation of multisensory devices that integrate video games, installation, painting, audiovisual languages, living organisms, food or performance.",
      "She has participated in solo and group exhibitions and performances in museums and art centers in Spain, Argentina, Australia, the United States and Germany.",
      "Edible plant-powered skin (2024) is a performance for one interpreter, 10 minutes, in organic wheatgrass on textile design. What's displaced by the hegemonic agri-food system? The colonized bodies of seeds reflect the movements of deterritorialization that destroy the knowledge and lives — human and non-human — linked to their cultivation. As a basic food, wheat encapsulates the issues related to the politics and management of life, as well as the resistance and resilience of life itself."
    ],
    note: "",
    website: "https://www.nataliacarminati.com",
    instagram: "https://www.instagram.com/nat_carminati/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/natalia-carminati-1.jpg", caption: "Edible plant-powered skin — performance, 2024" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/natalia-carminati-2.jpg", caption: "Edible plant-powered skin — performance, 2024" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/natalia-carminati-3.jpg", caption: "Edible plant-powered skin — performance, 2024" }
    ]
  }

  ,{
    name: "Fiona Fell",
    country: "Australia / Spain",
    work: "Regrets that keep growing in the fields of family con/fusions",
    type: "Sculpture / Ceramics",
    materials: "Stoneware glazed ceramic, childhood shoes, leather, growing potatoes",
    quote: "",
    statement: [
      "Dr Fiona Fell is an Australian-born artist, curator, and artistic researcher based in Barcelona. Through sculpture, unfired clay, found materials, moving image, installation, and performance, her practice investigates material agency, embodiment, care, and relationality. Her research explores how unstable materials challenge fixed ideas of permanence, vulnerability, and the boundaries between bodies and environments.",
      "Fell is the founder and director of CasCaDas ArtSpace, an independent hybrid contemporary art space that supports international artistic research, exhibitions, and residencies. Alongside her studio and curatorial practice, she mentors artists at different stages of their careers, with a particular focus on supporting practitioners returning to creative practice. Her work is grounded in collaboration, material enquiry, and the creation of conditions in which artistic research can flourish.",
      "Regrets that keep growing in the fields of family con/fusions uses childhood shoes, leather, and growing potatoes to trace the slow accumulation of inherited family tensions. Available as prints, 40 × 50 cm.",
      "The Patient is a 155 × 58 × 65 cm stoneware glazed ceramic figure made at a residency at ECWC, Netherlands. The Patient has performed and has become one of the main recurring characters in Fell's installations and moving image work."
    ],
    note: "",
    website: "https://www.fionafellart.com/",
    instagram: "https://www.instagram.com/fionafellart/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/fiona-fell-1.jpg", caption: "Regrets that keep growing in the fields of family con/fusions" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/fiona-fell-2.jpg", caption: "Regrets that keep growing in the fields of family con/fusions" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/fiona-fell-3.jpg", caption: "The Patient — stoneware glazed ceramic, 155 × 58 × 65 cm" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/fiona-fell-4.jpg", caption: "The Patient — stoneware glazed ceramic, 155 × 58 × 65 cm" }
    ]
  }

  ,{
    name: "Sally Burch",
    country: "UK",
    work: "Bloomin' Summer",
    type: "Painting",
    materials: "Colour pigment and polymers on wood panel, 80 × 100 cm",
    quote: "I have tried to create something beautiful and mood-evoking from colour and space configurations.",
    statement: [
      "Sally Burch graduated from Central St Martins, London with a BA (Hons) in Contemporary Fine Art after initially studying Graphic Design at Brighton School of Art. She combines the skills from her graphic roots stirring the paint pot with ever evolving ideas from her fine art education.",
      "An abstract painter and self-described 'Collector of Colour', Sally explores shifting geometric forms, drawing inspiration from an experience, or memory linked usually to a specific time or location. Her work balances colour, form and composition to create vibrant, evocative paintings triggering emotion in the viewer.",
      "Bloomin' Summer (2025) — colour pigment and polymers on wood panel, 80 × 100 cm.",
      "Summer Day Dream (2026) — pigment & polymers on wood panel, 82 × 82 cm.",
      "Falling (2026) — pigment & polymers on wood panel, 102 × 102 cm."
    ],
    note: "",
    website: "https://www.sallyburch.org",
    instagram: "https://www.instagram.com/sally.burch/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/sally-burch-1.jpg", caption: "Bloomin' Summer — colour pigment and polymers on wood panel, 80 × 100 cm, 2025" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/sally-burch-2.jpg", caption: "Summer Day Dream — pigment & polymers on wood panel, 82 × 82 cm, 2026" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/sally-burch-3.jpg", caption: "Falling — pigment & polymers on wood panel, 102 × 102 cm, 2026" }
    ]
  }

  ,{
    name: "Louise Norström",
    country: "Sweden",
    work: "Waiting Room",
    type: "Painting",
    materials: "Oil and acrylic",
    quote: "",
    statement: [
      "Ruth Louise Norström is a Swedish artist working primarily in oil and acrylic. Her artistic background includes studies at Valand Academy and Fornby Folk High School. She was awarded the Ludvika Municipality Cultural Scholarship in 2023.",
      "Her work draws on a neo-figurative tradition with expressionist elements, where the figurative meets the abstract. She explores atmospheric and emotionally charged motifs, often featuring empty chairs, solitary figures, animals and barren landscapes. Through these recurring symbols, she creates spaces for reflection on relationships and existence.",
      "Featured paintings: Waiting Room, Frans' Garden, Respite, Snowmelt."
    ],
    note: "",
    website: "https://www.ruthlouise.se/",
    instagram: "https://www.instagram.com/_ruth.louise_/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/louise-norstrom-1.jpg", caption: "Waiting Room — oil and acrylic" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/louise-norstrom-2.jpg", caption: "Frans' Garden — oil and acrylic" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/louise-norstrom-3.jpg", caption: "Respite — oil and acrylic" },
      { src: "/assets/images/exhibitions/works-beyond-the-walls/louise-norstrom-4.jpg", caption: "Snowmelt — oil and acrylic" }
    ]
  }

  ,{
    name: "Annie Mo Kjellberg",
    country: "Sweden",
    work: "Sensory Overload",
    type: "Multi-sensory installation",
    materials: "Multi-sensory installation, Gallery Möbius, Bergen, Norway, 2025",
    quote: "",
    statement: [
      "Annie Mo Kjellberg is a Swedish interdisciplinary artist based in Bergen, Norway. Her practice spans installation, text, performance, video, and social practice, exploring intimacy, waiting, labour, and emotional regulation through participatory and spatial works. She is currently completing her MFA in Fine Art at the Bergen Academy of Art and Design.",
      "Kjellberg's artistic practice explores how people navigate vulnerability, intimacy, labour, and belonging through everyday rituals and social encounters. Working across installation, text, performance, sculpture, and participatory methods, she creates situations that invite reflection on emotional and relational experiences. She is interested in waiting as both sculptural and emotional material, and in how softness, humour, and sensory experience can function as critical tools rather than forms of escape.",
      "Her work often draws from lived experience while remaining open-ended, allowing audiences to enter through their own memories, bodies, and relationships. Through interdisciplinary and socially engaged approaches, she investigates how private experiences can unfold within shared spaces."
    ],
    note: "",
    website: "https://www.anniemokjellberg.com",
    instagram: "https://www.instagram.com/anniemo.ppt/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/works-beyond-the-walls/annie-mo-kjellberg-1.jpg", caption: "Sensory Overload — multi-sensory installation, Gallery Möbius, Bergen, Norway, 2025" }
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
    name: "Juan Antonio Cerezuela",
    country: "Spain",
    work: "I'm Still an Artist",
    type: "Performance / Video",
    materials: "Video documentation of performance, Fabra i Coats, Barcelona, 2019",
    quote: "",
    statement: [
      "Juan Antonio Cerezuela (Cartagena, 1982) is a visual artist, researcher and lecturer based in Barcelona, Spain. He holds a PhD in Visual Arts and Intermedia from the Universitat Politècnica de València. His practice encompasses installation, performance and site-specific intervention. His work has been presented at institutions including Arts Santa Mónica, Born Centre de Cultura i Memòria, Fabra i Coats and Espronceda Institute of Art & Culture (Barcelona), Centro Párraga and Fundación Gabarrón (Murcia), and Centro de Arte Tomás y Valiente (Madrid).",
      "In 2022, he took part in the Homesession Exchange programme with BelgradeAIR and completed a residency at Center 424 (Belgrade, Serbia). He has also undertaken residencies at Casa Tres Patios (Medellín, Colombia) and OCAD University (Toronto, Canada). In 2024, he led the artistic training and research workshop Relámpagos y luminiscencias: Manifestaciones del contrarrelato at Centro de Bellas Artes de Maracaibo (Venezuela), with the support of a grant from the Spanish Agency for International Development Cooperation (AECID).",
      "His awards include the Alfonso X Culture Award in the New Media Art category (2025), First Prize at Encuentros de Arte Contemporáneo awarded by Fundación Juan Gil-Albert (2024), a Special Mention at the Ashurst Emerging Artist Prize (London, 2018), and First Prize at the 31st La Rioja Young Art Exhibition (2015).",
      "Over the course of a long journey through the streets of Barcelona, two performers dressed in suit jackets carry an enormous canvas bearing the words \"I'M STILL AN ARTIST\" in oversized lettering. The action evokes the transportation of an artwork from one place to another, perhaps from an artist's studio to a gallery or museum. At the same time, the message displayed on the canvas can be understood as a personal statement made publicly by the artist — an act of resistance, both within and through art, prompting reflection on the perseverance and determination required of artists in the face of the professional precarity that defines the cultural sector.",
      "As the performers make their way through the city, the statement enters into dialogue with Barcelona's streets and architecture, while engaging with passers-by and the people who inhabit these spaces. The performers embark on an ultimately unsuccessful attempt to find an art institution willing to house a work signed by an unknown artist. Through humour, this futile search raises questions about the boundaries of the art world and those who remain at its margins. In a world governed by capital and productivity, what place do art and artists occupy in contemporary society?"
    ],
    note: "",
    website: "https://www.juanantoniocerezuela.com/",
    instagram: "https://www.instagram.com/juan_antonio_cerezuela/",
    kind: "video",
    video: {
      embed: "https://www.youtube.com/embed/7I1r_yriBN0",
      poster: "/assets/images/exhibitions/works-beyond-the-walls/juan-antonio-video-poster.jpg"
    }
  }

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
    note: 'View more of her work on <a href="https://objkt.com/users/tz1X7e7KNmwihTDm2ZEBWN5AYYMpS8ikAQG4/created" target="_blank" rel="noopener">Objkt</a>.',
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
