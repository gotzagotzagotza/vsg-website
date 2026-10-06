// VSG at Swab OFF-Site — Cascadas Gallery booth, Swab Barcelona, 8–11 October 2026
// Online component of the presentation.
// ─────────────────────────────────────────────────────────────
// HOW TO ADD AN ARTIST
//   1. Copy one of the two templates at the bottom of this file.
//   2. Paste it into the `module.exports` array (add a comma after the previous entry).
//   3. Fill in all the fields. Fields that can be left blank: country, quote, note, website, instagram.
//   4. Drop image files into: assets/images/exhibitions/swab-offsite-2026/
//      Naming convention: firstname-lastname-1.jpg, firstname-lastname-2.jpg, etc.
//   5. Run `node build.js` — the page updates automatically.
// ─────────────────────────────────────────────────────────────

module.exports = [

  {
    name: "Sarah Horowitz",
    country: "USA",
    work: "82 Percent of a View of Sunset Dunes",
    type: "Painting",
    materials: "Acrylic on birch panel, 30 × 30 in., 2026",
    quote: "The unpainted void is a metaphor for what society loses — what remains unrealized — when any one group is chronically undervalued.",
    statement: [
      "Sarah K. Horowitz is a San Francisco–based painter working in acrylic, monoprinted tissue, and found paper. Born and raised in the Ozarks of the American Midwest, she holds an undergraduate degree in art from Evangel University and a master's degree in journalism from Northwestern University. Her work explores observation and privacy, the gender earnings gap, and the importance of solitude in creative practice. Her paintings have been shown in group and solo exhibitions throughout California and are held in private collections in San Francisco, La Jolla, Seattle, Mozambique, and Paris.",
      "\u201cI paint the hidden yards of San Francisco and other cities in acrylic; the scenes are based on photographs I take from the back of people's houses and apartments. I focus on vistas not available to the public \u2014 ones that can only be seen from private spaces.\u201d",
      "\u201cIn 82 Percent of a View of Sunset Dunes, however, I have left 18 percent of the birch substrate bare. Why? This year, among full-time workers in the United States, for every dollar a man makes, a woman makes 82 cents. Therefore I have declined to paint 18 percent of the image. The unpainted void is a metaphor for what society loses \u2014 what remains unrealized \u2014 when any one group is chronically undervalued.\u201d"
    ],
    note: "",
    website: "https://www.bentblue.com",
    instagram: "https://www.instagram.com/mrs.horowitz/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/sarah-horowitz-1.jpg", caption: "82 Percent of a View of Sunset Dunes — acrylic on birch panel, 30 × 30 in., 2026" }
    ]
  }

  // Both the bio and the work statement are Kai's own text. The Britannica entry
  // on Dasein is what HE uses to explain the work — do not paraphrase it.
  // Only obvious typos were corrected in the bio.
  ,{
    name: "Kai Rennes",
    country: "Sweden / Spain",
    work: "Dasein (Stockholm)",
    type: "Photography",
    materials: "C-print, 2022",
    quote: "",
    statement: [
      "Kai Rennes is an artist of Nordic origin living in Stockholm and Barcelona. He has studied art, architecture, history of art, philosophy, aesthetics and semantics. He works with several different media, from video to installations, objects, photo and painting. His works have been shown in many European countries, the USA, Mexico, Cuba and Japan.",
      "His works are phenomenological notes on human knowledge in different manifestations: what kind of knowledge is science, art or religion. Some years ago religions and spiritual life were regarded as part of the private sphere; now they are back in focus. Many religions are collections of practical knowledge, ethical principles, dogma, rites and deeper understanding of human nature \u2014 wisdom from thousands of years back. New beliefs and religious structures are created, for instance, in Europe and Japan.",
      "There is a connection between the different fields of human knowledge. Sometimes the scientific world connects with different beliefs or contemporary art practices. The world is shown to us with an endless network of meanings. Kai Rennes\u2019 aim is unveiling these networks.",
      "One of the photos from a series of Glory Holes, 34 images of holes that are a part of gay underworld.",
      "What is Dasein in philosophy?",
      "In the philosophy of Martin Heidegger, Dasein (literally, \u201cbeing-there\u201d) represents the unique existence of the human individual. Heidegger introduces Dasein in Being and Time (1927) to explore fundamental questions about Being.",
      "Key aspects of Dasein:",
      "Being-in-the-world \u2014 Heidegger rejects the Cartesian idea of humans as isolated thinking subjects. Instead, he posits that humans are fundamentally connected to and engaged with the world.",
      "Uncovering \u2014 Dasein is the \u201cthere\u201d where entities reveal themselves. It actively discloses other entities and itself.",
      "Temporality \u2014 Dasein is closely linked to temporality, always ahead of itself, differing from sequential world-time.",
      "Authenticity \u2014 Dasein emphasizes the importance of facing one\u2019s finitude and fulfilling one\u2019s potential for Being-a-self, rather than conforming to inauthentic modalities.",
      "Britannica"
    ],
    note: "",
    website: "https://www.32gray.com/paintings",
    instagram: "https://www.instagram.com/r_e_n_n_e_s/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/kai-rennes-1.jpg", caption: "Dasein (Stockholm) \u2014 c-print, 2022" }
    ]
  }

  // Patricia's bio is hers as supplied; the statement is drawn from her own text
  // "Pilgrimage to the 14th Gwangju Biennale" (May 2023). No website given.
  ,{
    name: "Patricia Chow",
    country: "USA",
    work: "Synaesthesia",
    type: "Painting & Installation",
    materials: "Acrylic on loose canvas, 2022 \u2014 installation and video, 2023",
    quote: "I used the balcony as a launch pad to let down the paintings like Rapunzel\u2019s hair.",
    statement: [
      "Patricia Chow is an international residency artist who has exhibited in the United States, the United Kingdom, France, Austria and Argentina, in addition to solo shows in Japan, Germany and Spain. She holds an MFA in Art (Painting) from Claremont Graduate University and master\u2019s degrees in International Education (NYU) and Linguistics (University of Pennsylvania). She is also an avid urban sketcher, and was editor of Drawing Attention, the official online magazine of the worldwide Urban Sketchers organization, from 2018 to 2021.",
      "In the Synaesthesia series, I distilled my experience of music into painting, following Kandinsky\u2019s lead in linking sight and sound. Each of the 18 paintings in the series is a visual profile (\u201cportrait\u201d if you prefer) of an opera character through their music. In some cases, they are even portraits of specific interpreters. Each loose canvas is painted in acrylic and measures 3\u20134 feet high and about 4\u00bd feet wide.",
      "The installation came out of a pilgrimage to the 14th Gwangju Biennale in May 2023. A solo exhibition of Argentine-Swiss artist Vivian Suter was being held inside the Horanggasy Art Polygon, a glass pavilion on the edge of a forest on Yangnim mountain. A flood in Suter\u2019s studio in 2005 had caked all of her work in mud, and after recovering from the initial shock, Suter began to incorporate the mud and rain and plants and insects and dog paw prints that are part of her lived environment into her paintings. What was most prominent when entering the pavilion was the smell of the paintings \u2014 the air in the enclosed space held the earth and rain that had seeped into them, hung in a densely concentrated overlapping fashion from the ceiling.",
      "I had never experienced paintings as an olfactory sensation before, and this addition of another one of the senses made me think of my Synaesthesia series in a new way.",
      "I had painted the series the previous year, but when I returned home from Gwangju, I decided to try hanging these unstretched canvases non-traditionally, as in the Suter exhibition. Lacking anything on the ceiling to hang them from, I attached them to each other, and since this started to create a rather long train of paintings, I used the balcony as a launch pad to let down the paintings like Rapunzel\u2019s hair.",
      "In homage to Kandinsky, who first experienced synaesthesia at a performance of Lohengrin, I chose Wagnerian opera characters to display, and hung them in groups of three or four for the final installation."
    ],
    note: "Tristan, Kundry, Isolde, Br\u00fcnnhilde, Erda, Fricka, Rhinemaidens, Tannh\u00e4user, Senta, Ortrud \u2014 all 2022, acrylic on canvas.",
    website: "",
    instagram: "https://www.instagram.com/p.chow.studio/",
    kind: "video",
    video: {
      file: "/assets/video/patricia-chow-synaesthesia.mp4",
      poster: "/assets/images/exhibitions/swab-offsite-2026/patricia-chow-poster.jpg",
      caption: "Synaesthesia \u2014 installation, unstretched canvases hung from the balcony, 2023"
    }
  }

  // Poster is YouTube's own still for the video, saved locally rather than
  // hotlinked. Keep the embed URL clean of query strings — the builder appends
  // ?autoplay=1 when the viewer presses play.
  ,{
    name: "Melih A\u015fanl\u0131",
    country: "T\u00fcrkiye",
    work: "Devr-i \u00c2lem (Quest)",
    type: "Immersive installation \u00b7 3D mapping",
    materials: "3D mapping for a mosque dome, light and sound, 02:47 min, 2026",
    quote: "Everything is in motion; only truth remains still.",
    statement: [
      "Melih A\u015fanl\u0131 (b. 1980) is a multidisciplinary artist based in T\u00fcrkiye whose practice explores digitalism, cultural identity, memory, and human\u2013machine relationships. Working across 3D modeling, video, sound, light, and spatial installation, he investigates the intersections of physical and virtual realities, urban layers, and contemporary existential experience.",
      "He studied at Marmara University Faculty of Fine Arts and has worked across sculpture, restoration, traditional building techniques, design, and digital media. He is the author of four books on ecological design, most recently Ecological Design Theory. His work has been exhibited internationally, including at BIEAF Busan International Environment Art Festival 2026 and Voice at CICA Museum in Korea, November 2026.",
      "Devr-i \u00c2lem is a 3D mapping work designed for a mosque dome, inviting the viewer into an existential cycle through light, movement, and sound. In this context, the dome is not merely an architectural surface; it is reimagined simultaneously as sky, heart, and consciousness.",
      "The visual flow begins with light emerging from darkness. Forms that concentrate at the center and dissolve only to be reformed evoke both the rhythm of the cosmos and the inner journey of the human being. The circular motion reflects the Sufi concept of devr (cycle): one is born, forgets, searches, falters, and ultimately remembers. While this continuous movement reveals the transience of worldly existence, the light gathered at the center points to an unchanging truth.",
      "Rooted in Islamic thought and Sufi philosophy, the work constructs a visual bridge between the human condition and the world. The dome, traditionally a symbol of divine order, transforms here into a living surface of consciousness. Everything is in motion; only truth remains still.",
      "The auditory layer deepens this conceptual framework. A low-frequency Sufi vocal resonates not as a hymn, but as a lament rising from the collective memory of humanity. Suppressed invocations embody human fragility and surrender \u2014 not as a demand, but as an inward act of devotion. In contrast, the distant sounds of children playing introduce the innocence and impermanence of worldly life. The presence of a heartbeat and breath draws the viewer back into their own body, grounding the cosmic narrative within human existence.",
      "Devr-i \u00c2lem dissolves the boundary between observer and experience. Positioned beneath the dome, the viewer becomes a witness \u2014 confronting their own presence through rhythm, sound, and light. This work is not merely a spectacle, but a collective space of contemplation and remembrance."
    ],
    note: "Awarded 3rd Prize and exhibited at the Necat Nas\u0131ro\u011flu Digital Art and Mapping Competition, Batman University, T\u00fcrkiye.",
    website: "https://melihasanliart.myportfolio.com/dev-i-alem",
    instagram: "https://www.instagram.com/melihasanli.art/",
    kind: "video",
    video: {
      embed: "https://www.youtube.com/embed/dE3-IzSh8jc",
      poster: "/assets/images/exhibitions/swab-offsite-2026/melih-asanli-poster.jpg"
    }
  }

  // Bio paragraph 1 and the two work paragraphs are hers as supplied; the
  // second bio paragraph is condensed from her CV (she asked for it short).
  ,{
    name: "River Reishi",
    country: "USA",
    work: "The Land Gives Way",
    type: "Sculpture & Installation",
    materials: "Raku-fired ceramic, copper patinated in Oregon seawater, local beach sand, 2026",
    quote: "Giving way is both an act of loss and transformation.",
    statement: [
      "River Reishi is a mixed media artist whose work explores the intersection of ecology, mythology, and cultural memory. Through sculpture, installation, and ephemeral materials such as sand and amber, she creates contemporary myths that invite viewers to reconsider their relationship with the natural world.",
      "Recent exhibitions include From Forest to Sea, a solo show at RAF Gallery in Reykjav\u00edk, and Best in Show at both the Surreal Salon at Baton Rouge Gallery \u2014 juried by Caledonia Curry (Swoon) \u2014 and the Surge Maritime Art Exhibition at the Coos Art Museum, Oregon. She has shown with Virtual Studio Groups at Juxtapose in Aarhus and Supermarket Art Fair in Stockholm. Her public work includes the sculptural mural Mother of Waters at the Foss Waterway Seaport Museum, Tacoma, and installations for the Tacoma Light Trail; her Destruction Ceremony has been performed at the Coos Art Museum and at Menningarn\u00f3tt Culture Night in Reykjav\u00edk.",
      "The Land Gives Way gives the coastline a body. Formed from materials of the Oregon coast, the work reflects a landscape continually reshaped by water, erosion, and time. Here, giving way is both an act of loss and transformation: the land yields to forces larger than itself, and in doing so, becomes something new.",
      "The sand will go back to the ocean after the conclusion of the exhibition, closing the circle of creation and destruction with intention."
    ],
    note: "Created in Coos Bay, Oregon for the Coos Art Museum Biennial.",
    website: "https://www.riverreishi.com",
    instagram: "https://www.instagram.com/riverreishi/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/river-reishi-1.jpg", caption: "The Land Gives Way \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/river-reishi-2.jpg", caption: "The Land Gives Way \u2014 view from above" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/river-reishi-3.jpg", caption: "Detail \u2014 figure on driftwood, shell, sand" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/river-reishi-4.jpg", caption: "Detail \u2014 raked sand and copper seaweed" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/river-reishi-5.jpg", caption: "Detail \u2014 reverse view" }
    ]
  }

  // Ylva's work text and materials are theirs as supplied; the opening bio
  // paragraph is their own artist text, the second is condensed from their CV.
  // Ylva uses they/them. Image captions are descriptive only.
  ,{
    name: "Ylva Ekl\u00f6f",
    country: "Sweden",
    work: "Comfort / In my own skin",
    type: "Screen print & Installation",
    materials: "Cotton sateen, water-based textile ink, down duvet and pillow, mattress, outgrown child\u2019s bed, 2022",
    quote: "By replicating my skin I keep myself safe and sound.",
    statement: [
      "Ylva Ekl\u00f6f (b. 1986, Stockholm) is a multidisciplinary artist based in Stockholm who works in various rural places across Sweden. Nature and human\u2013nature relationships, a sense of loss and longing, childhood memories and a quest to orient themselves in time and space are recurring themes; materiality, and the origins and connotations of materials, is equally central to their practice. Ekl\u00f6f creates works that open the doors to conversations while also offering a moment of rest and comfort.",
      "They studied visual communication at Konstfack, Stockholm, following training in graphic design at Run\u00f6 folkh\u00f6gskola, fine art at Kunsth\u00f8jskolen i Holb\u00e6k in Denmark, and at Kulturama, Stockholm. Solo exhibitions include Transfer at Pedvale Art Park, Sabile, Latvia (2023) and Saknade at Konstfack (2020). Recent group exhibitions include VSG at TRYST Art Fair, California (2026), Dreams \u2014 VSG at Juxtapose, Aarhus (2025), and the European Festival of the Night, Korpilombolo (2023). They are part of Tomma rum, the Swedish artist-run organisation that holds a residency each summer in a different town, and have taken part across V\u00e4sternorrland, V\u00e4sterbotten, Norrbotten, H\u00e4lsingland, Sm\u00e5land and V\u00e4rmland, alongside a residency at Pedvale Art Park in Latvia.",
      "As I adapted to a life with less physical contact, I explored how I could comfort myself. By replicating my skin I keep myself safe and sound."
    ],
    note: "V\u00e4sternorrland, Sweden.",
    website: "https://www.ylvaeklof-com7.webnode.se",
    instagram: "https://www.instagram.com/ylvaeklof/",
    youtube: "https://www.youtube.com/@ylvaeklof",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/ylva-eklof-1.jpg", caption: "Comfort / In my own skin \u2014 the bed in the snow" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/ylva-eklof-2.jpg", caption: "Detail \u2014 screen-printed cotton sateen" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/ylva-eklof-3.jpg", caption: "Comfort / In my own skin" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/ylva-eklof-4.jpg", caption: "Comfort / In my own skin" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/ylva-eklof-5.jpg", caption: "The bed, unoccupied" }
    ]
  }

  // Joint work with Heera Gul (@ammipesca). Both bios and the work statement
  // are theirs as supplied; bio order follows the billing in the entry name.
  ,{
    name: "Seb Bradshaw and Heera Gul",
    country: "UK",
    work: "Stone Compass",
    type: "Textile collage",
    materials: "Card, recycled fabric, oil pastels and paints on recycled fabric, 2023",
    quote: "Stone circles are sites of enduring connection to the natural world, both ancient and modern.",
    statement: [
      "Seb Bradshaw is a multidisciplinary artist and facilitator, exploring human occupation of land, and entangled relationships with nature. Drawing from English and Scottish folklore, she is fascinated by the way myths tell the stories of a place and its people, adapting and changing as society does.",
      "Heera Gul is a multidisciplinary artist and facilitator whose practice explores visual articulations of hybrid and dual identities. With an interest in DIY practices and the regenerative use of scrap materials, she experiments with the layering of imagery, mediums and processes, often drawn from familial history and childhood, to produce records of memory and myth \u2014 forming an imagined archive that is anti-chronological and refuses classification.",
      "Stone circles are sites of enduring connection to the natural world, both ancient and modern. Whilst many sites remain a mystery, they signify human connection and ritual in land; modern installations of stone circles are used to mark protected spaces of community value.",
      "But I think what\u2019s in this piece is not only the joy of collaboratively assembling a textile collage based on ancient to modern spirituality, but Heera\u2019s interest in migration and belonging \u2014 via Islamic decorative motifs \u2014 and my interest in land use and close observation of nature, as the colourful backgrounds of the compass reference aerial maps, wood grain, lichen and moss."
    ],
    note: "Seb Bradshaw @artbyseb138 \u00b7 Heera Gul @ammipesca",
    website: "",
    instagram: "https://www.instagram.com/artbyseb138/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/seb-bradshaw-1.jpg", caption: "Stone Compass \u2014 laid out in the dunes" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/seb-bradshaw-2.jpg", caption: "Stone Compass \u2014 suspended in woodland" }
    ]
  }

  // Radina's statement and bio are verbatim from her PDF. Image captions are
  // her own file titles, kept in her lower-case style; order follows the
  // journey downriver. (The photo in her PDF is a grant-announcement snapshot
  // and is deliberately not used.)
  ,{
    name: "Radina Kordova",
    country: "Bulgaria / Netherlands",
    work: "From the source to the mouth and everything in between",
    type: "Performance",
    materials: "Embodied research \u2014 walking, listening, sensory media and written documentation",
    quote: "The river is a unifying stream, a portal, and a home.",
    statement: [
      "Radina Kordova (1994) is a Bulgarian visual artist based in Groningen, the Netherlands. Working across performance, sound, sculpture, and text, her artistic practice explores the entanglement of human and ecological worlds. Through embodied research, folklore, cultural memory, and post-anthropocentric perspectives, she creates multilayered works that invite audiences to engage with questions of belonging, interdependence, and more-than-human relations. Kordova holds a BA in Fine Arts from Academie Minerva and an MA in Media, Art, Design and Technology from the Frank Mohr Institute, Groningen.",
      "\u201cFrom the source to the mouth and everything in between\u201d is an embodied research performance that traces the length of the Danube River from the source in the Black Forest to the delta in the Black Sea. By crossing 2,850 km, I want to return to a river tied to my own history and cultural belonging to encounter human entanglement with more-than-human entities, and what it means to become a water body. Through embodied methods for walking and listening, and gathering sensory media and written documentation, I want to search for new forms of empathy, ecological awareness, and psychogeography, allowing the river to guide my movement and research. Body and river become parallel archives, absorbing and processing encounters, and landscapes, while navigating shifting historical and ecological landscapes.",
      "My connection to the Danube began more than a decade ago when I lived by her banks in Ruse, Bulgaria. For me, the Danube is more than a geographical line; she is a transcendental entity, a porous, living source with agency, memory, and voice, echoing and connecting through her natural and man-made surroundings. I believe that by embodying more-than-human entities and finding ways to relate and listen to their voices, we can continue to challenge our personhood and deepen our understanding of the natural network we are part of. I think it\u2019s urgent to dare to question our identities, to attune and listen to the world around us, and challenge our sense of belonging.",
      "By positioning the Danube as a narrator, I want to move beyond human-centered perspectives on landscape, time, and relationality, to search for connections with others along the river, and discover how bodies of water shape interdependence. The river is a unifying stream, a portal, and a home. Her waters are filled with memory, porous, always in motion, and from her gutter sources she makes her way through, seeking the mouth of the sea."
    ],
    note: "",
    website: "https://radinakordova.com",
    instagram: "https://www.instagram.com/radina_kordova/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/radina-kordova-1.jpg", caption: "crossing the bridge at Pfohren, start of the journey" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/radina-kordova-2.jpg", caption: "score for standing still in moving water" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/radina-kordova-3.jpg", caption: "scores for standing still in moving water" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/radina-kordova-4.jpg", caption: "hiding in the shade" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/radina-kordova-5.jpg", caption: "danubian clay" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/radina-kordova-6.jpg", caption: "final resting place" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/radina-kordova-7.jpg", caption: "\u201cI am only but a shadow made of water\u201d" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/radina-kordova-8.jpg", caption: "flood of 1784 in vienna" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/radina-kordova-9.jpg", caption: "i cannot hold her even if i tried" }
    ]
  }

  // Statement and bio are his as supplied; "exhibition" replaced with "project"
  // throughout, per Gordana. No images yet, and no year given.
  ,{
    name: "Juan Pablo Meneses",
    country: "Mexico",
    work: "RGB + Dead Pixel",
    type: "Photography, video & installation",
    materials: "Intervention, installation, video and photography",
    quote: "",
    statement: [
      "Juan Pablo Meneses (Mexico, 1982) is a Level 1 member of the National System of Researchers. He is based in the city of San Luis Potos\u00ed, where he works as a full-time research professor at the Faculty of Habitat (UASLP). He holds a PhD in Art, Production, and Research from the Polytechnic University of Valencia, Spain.",
      "As an artist, he has participated in over 30 group exhibitions in Mexico, Spain, Argentina, Denmark, the United States, and England, and has held eight solo exhibitions in Mexico, Serbia, Croatia, and Spain. His work is featured on the Contemporary Image Platform (PICS) of the Centro de la Imagen.",
      "RGB + Dead Pixel is a project conceived from two concepts: RGB and Pixel. RGB is the most widely used color mode in digital photography, based on the addition of the primary colors of light, a process known as additive synthesis. A pixel, on the other hand, is the smallest element of a digitally reproduced image.",
      "From these concepts, this project is generated with pixelated images, videos with glitches and white noise, and photographic interventions using the red, green, and blue (RGB) colors. It employs various artistic strategies such as intervention, installation, video, and photography."
    ],
    note: "",
    website: "https://achegaleria.com/copia-de-lpdlp",
    instagram: "",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/juan-pablo-meneses-1.jpg", caption: "RGB + Dead Pixel \u2014 installation view, with the neon EL PIXEL HA MUERTO" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/juan-pablo-meneses-2.jpg", caption: "Pixelated intervention \u2014 sunlight on water" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/juan-pablo-meneses-3.jpg", caption: "RGB intervention over an archive photograph" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/juan-pablo-meneses-4.jpg", caption: "EL PIXEL HA MUERTO \u2014 neon" }
    ]
  }

  // Joint work, confirmed by Gordana. Roles per the artists' own PDF: Melih —
  // video art and interpretation; Kübra — paintings. Their document lists Melih
  // first; kept Kübra first here as Gordana presented it, with both roles named
  // in `note` so the credit is unambiguous either way.
  ,{
    name: "K\u00fcbra K\u00f6pr\u00fcl\u00fco\u011flu A\u015fanl\u0131 and Melih A\u015fanl\u0131",
    country: "T\u00fcrkiye",
    work: "Wisdom Keepers Igorot and Romani",
    type: "Video art installation",
    materials: "Video art installation, 04:26 min, 2026",
    quote: "Not a single narrative, but a layered wholeness \u2014 where the visible and invisible, stillness and transformation coexist.",
    statement: [
      "K\u00fcbra K\u00f6pr\u00fcl\u00fco\u011flu A\u015fanl\u0131 (b. 1984) is a contemporary artist based in T\u00fcrkiye whose research-driven practice explores ecological relationships, indigenous knowledge systems, cultural memory, and regenerative futures. Working across painting, installation, video, and sound, she investigates human\u2013nature connections and alternative models of coexistence through layered imagery, organic forms, and fluid visual narratives. She holds a BFA in Graphic Design from Marmara University and co-founded the ecological design studio HARMONIA in 2012. Her work has been exhibited internationally across South Korea, Japan, Greece, and North Macedonia, and she was named a Top 10 Artist at the BIEAF World Artist Award (2024). In 2026 she serves as a Steering Committee Member of the 23rd Busan International Environment Art Festival and participates as a selected artist in ICAD16 \u2014 Indonesia Contemporary Art & Design Festival.",
      "Melih A\u015fanl\u0131 (b. 1980) is a multidisciplinary artist based in T\u00fcrkiye whose practice explores digitalism, cultural identity, memory, and human\u2013machine relationships. Working across 3D modeling, video, sound, light, and spatial installation, he investigates the intersections of physical and virtual realities, urban layers, and contemporary existential experience. He studied at Marmara University Faculty of Fine Arts and has worked across sculpture, restoration, traditional building techniques, design, and digital media. He is the author of four books on ecological design, most recently Ecological Design Theory.",
      "Built around the idea of making the invisible visible, this work invites the viewer beyond surface imagery into a space shaped by memory, emotion, and collective presence. The portraits may appear individual, yet they carry traces of shared histories \u2014 silent witnesses to Indigenous wisdom that endures through both erasure and resistance.",
      "Through moving image, these forms dissolve into a shifting flow of color and texture, suggesting not disappearance but continuity. Fragments disperse and reassemble, revealing creation as an ongoing process rather than a fixed result \u2014 much like culture itself, shaped through repetition, labor, and time.",
      "Sound deepens this experience, connecting inner and collective memory through vibration and rhythm. What emerges is not a single narrative, but a layered wholeness \u2014 where the visible and invisible, stillness and transformation coexist, inviting the work to be not only seen, but felt.",
      "In creating this work, our motivation was to revisit an existing artwork that explores a shared theme, approaching it from a different perspective and through a different material language. Rather than reproducing the original, we sought to create a new work that enters into a dialogue with it.",
      "By placing the two works together within the exhibition space, we aimed to extend the experience of the original painting beyond its static form. Movement and sound become additional layers through which the emotions and atmosphere embedded in the image can be perceived differently. This spatial dialogue invites the viewer to encounter the painting from another perspective, allowing its emotional dimension to unfold through a more immersive and multisensory experience."
    ],
    note: "Melih A\u015fanl\u0131 \u2014 video art and interpretation \u00b7 K\u00fcbra K\u00f6pr\u00fcl\u00fco\u011flu A\u015fanl\u0131 \u2014 paintings.",
    website: "https://kubrakopruluogluasanli.myportfolio.com/wisdomkeepers",
    instagram: "https://www.instagram.com/noooneelsebutme/",
    kind: "video",
    video: {
      embed: "https://www.youtube.com/embed/Km-gqHSswVI",
      poster: "/assets/images/exhibitions/swab-offsite-2026/wisdom-keepers-poster.jpg"
    }
  }

  // Video confirmed: D-_9hvbMNQc "Discovery of Ancient Texas Civilization",
  // uploaded 2013, described as the Bronze Age Texas ruins found in Northern
  // Germany. (The earlier link, 5oYbJn2_H4w, is the 2014 BELGIUM piece —
  // Kortrijk, with BUDA — a different work in the same series.)
  // Bio and statement are his as supplied.
  ,{
    name: "Joshua Goode",
    country: "USA",
    work: "Discovery of the Ancient Texas Civilization",
    type: "Video",
    materials: "Hilmsen, Germany, 2013",
    quote: "",
    statement: [
      "Joshua Goode is an interdisciplinary artist based in the Dallas\u2013Fort Worth area whose work explores how history is constructed, mythologized, and remembered. Trained as both an archaeologist and artist, he holds an MFA from Boston University and stages performative excavations that blur fact and fiction, presenting pop culture and local myths as archaeological artifacts. His work has been exhibited internationally at museums and institutions across Europe, Asia, the Middle East, and the U.S., and is held in major public collections worldwide. Goode is a recipient of the Dallas Museum of Art\u2019s Dozier Award and has contributed to archaeological research with the University of T\u00fcbingen in Germany.",
      "This video documents an excavation conducted by the Aurora-Rhoman Institute of Archaeology and Cultural Relics at a site in Hilmsen, Germany. Among the institute\u2019s most significant discoveries are the remains of a Mammoth Cowboy, an unprecedented fusion of human and megafaunal iconography, and a remarkably preserved Unicorn Tyrannosaurus rex skull, evidence of a species long absent from the paleontological record.",
      "Presented through the conventions of archaeological documentary and museum scholarship, the work investigates the ways in which history is constructed, authenticated, and transmitted through cultural institutions, material evidence, and collective belief."
    ],
    note: "",
    website: "https://joshuagoode.com",
    instagram: "https://www.instagram.com/joshua_goode/",
    kind: "video",
    video: {
      embed: "https://www.youtube.com/embed/D-_9hvbMNQc",
      poster: "/assets/images/exhibitions/swab-offsite-2026/joshua-goode-poster.jpg"
    }
  }

  // Joint work with composer Amble Skuse. Credit line as given by the artists
  // puts Amble first ("Amble Skuse & Boško Begović, Aras Nam Fir Chlis,
  // 19-23 September 2024") — kept that order, and her bio leads to match.
  // Bosko signs his artistic practice Mark Fish, which the bio explains; the
  // entry uses his own name because the work is credited that way.
  // Source images are low-resolution (833×472) — not upscaled.
  ,{
    name: "Amble Skuse and Bosko Begovic",
    country: "UK / Spain",
    work: "All who are weary and heavy-laden, I will give you rest",
    type: "Performance & Film",
    materials: "Burden suit, stones, body sensors, sound and film \u2014 Mealasta beach, Isle of Lewis, 2024",
    quote: "Who is Mark Fish? Nobody. And it is precisely in that nothing \u2014 in giving form to what has no fixed identity \u2014 that the work locates itself.",
    statement: [
      "Amble Skuse is a composer and sound artist who uses disability theory, body sensor technology, spoken word interviews and electronics to create unique sound works. She is interested in the interface between the disabled body and the exterior world, and has explored this through numerous sound walks using her wheelchair. She is a Royal Philharmonic Society Composer 24/25, recently won a Special Commendation Daphne Oram Award for her work in electronic music, and was selected as Scotland\u2019s representative for the International Society for Contemporary Music Festival 2024.",
      "She recently wrote Divergent Sounds in collaboration with King\u2019s College London. The piece uses interviews with NeuroDivergent people, electronics, body sensors and a 13-piece orchestral ensemble, and was premiered at the Queen Elizabeth Hall at the Southbank. She was one of five Creative Scotland International Creative Entrepreneurship Fellows, a BBC Performing Arts Fellow and a BBC alumni fellow, has gained several large-scale grants from Creative Scotland to produce work, and was a MiMU Glove research resident in 2022.",
      "Bosko Begovic is a writer, conceptual artist, and curator based in Barcelona. His work moves between performance, movement, and text, and is anchored in a single idea he returns to across two decades: formalizing the nothing. His artistic practice is signed Mark Fish. Mark Fish is not a character he plays or a mask he puts on \u2014 it is the name the work carries. Who is Mark Fish? Nobody. And it is precisely in that nothing \u2014 in giving form to what has no fixed identity \u2014 that the work locates itself, triangulating between theory, movement, and writing to trace the many ways nothing can appear.",
      "Movement is the ground of the practice. For over twenty years Begovic trained and taught in Japanese movement disciplines \u2014 Aikido, Judo, and Tatami Ryu \u2014 approaching them not as sport or competition but as a long apprenticeship in attention: how weight, timing, contact, and intention organize a body in space. He no longer teaches. That accumulated bodily knowledge has instead become the material of his movement research and performance practice, where the body is treated as a site of inquiry rather than demonstration.",
      "Since 2020 this research has developed through an ongoing collaboration with composer Amble Skuse, culminating in Interdependent Intersections \u2014 a non-hierarchical work for movement, sound, and video built around MiMU sensor gloves. Rather than having sound accompany movement in the usual way, the collaboration inverts the relationship: sound and technology are used to impede movement, and from that friction a different theory of how movement is made and known begins to emerge. The work explores interdependence, power, and co-operation, and has been developed across residencies and shown in France, Sweden, and beyond, with further chapters realized in Northern Ireland and Scotland.",
      "Alongside his own practice, Begovic builds and sustains structures for other artists. In 2012 he co-founded and continues to direct Center424, a gallery and non-profit artist-run organization in Belgrade, and the Belgrade Artist in Residence program. He went on to co-found Virtual Studio Groups, an international online community of artists; the AIR Exchange Network, a monthly gathering of artist-run spaces; and Whatzart Lab, where he leads the technical architecture. His own writing appears in VSG Magazine, the publication of Virtual Studio Groups. As a curator his projects include 5 Years Collaboration \u2013 6 Spanish Artists (Center424, 2023) and Retrospective BAIR (Center424, 2021).",
      "He has performed and exhibited internationally, and has participated in residencies at Pervasive Media Studio (Bristol), Konstepidemin (Gothenburg), APO33 (Nantes), An Lanntair (Isle of Lewis), and others. He works in long-term collaboration with Gordana Zikic, most recently on Oracle Birds, a project bringing together artificial intelligence, generative image systems, and embedded hardware.",
      "Amble and Bosko visited the island of Lewis to develop their work All who are weary and heavy-laden, I will give you rest. The work explores the concept of burden as it relates to disabled people and uses stones as a metaphor. Bosko wears a suit loaded with stones, each representing a burden; as the burden suit becomes weighted his movement changes and his balance is unsettled. His movements are tracked by body sensors which trigger interviews from disabled people around the topic.",
      "During their stay, Amble and Bo\u0161ko presented their work at one of An Lanntair\u2019s monthly Artist Gatherings, as well as creating a film of the piece at Mealasta beach."
    ],
    note: "Aras Nam Fir Chlis, 19\u201323 September 2024 \u00b7 Artist Gathering, An Lanntair, 20 September 2024.",
    website: "",
    instagram: "https://www.instagram.com/mark_a_fish/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/bosko-begovic-1.jpg", caption: "All who are weary and heavy-laden, I will give you rest \u2014 Mealasta beach, Isle of Lewis" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/bosko-begovic-2.jpg", caption: "The burden suit, loaded with stones" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/bosko-begovic-3.jpg", caption: "All who are weary and heavy-laden, I will give you rest" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/bosko-begovic-4.jpg", caption: "Gathering stones from the beach" }
    ]
  }

  // Bio is Gordana's own. The four work paragraphs are drawn from her essay
  // "El Mar Hirviendo — 220 Surfaces" (second in her series on shamanism and
  // contemporary art) and angled toward OFF-Site: the overlooked everyday site,
  // the refusal of the landscape frame, the grid as adaptation rather than
  // expansion, reciprocity rather than extraction. EDIT FREELY — this is a
  // draft built from her words, not her final text.
  ,{
    name: "Gordana Zikic",
    country: "Spain",
    work: "El Mar Hirviendo",
    type: "Painting & Photography",
    materials: "Oil on canvas, 2024 and 2025; photographic grid, 220 surfaces, 2011\u20132026",
    quote: "A surface in constant movement, agitated from within by forces that never become visible.",
    statement: [
      "Gordana Zikic is an interdisciplinary artist, residency director, and community builder based in Barcelona. Over twenty years her practice has moved across painting, installation, performance, photography, and wearable technology \u2014 always at the threshold of embodied experience, shamanic research, and contemporary life.",
      "She co-directs Belgrade Artist in Residence (BAIR, est. 2012), which has hosted artists from over thirty countries, and Virtual Studio Groups (VSG, est. 2021), an international peer community of sixty-plus artists that publishes VSG Magazine. She is co-founder of the AIR Exchange Network, a peer structure for residency organizers, and Whatzart Lab. Her current research explores oracle systems, shamanic technology, and the archaeological memory of place. She holds a doctorate in fine arts from the Faculty of Fine Arts, Belgrade.",
      "For more than fifteen years I have gone to the same pier in Barcelona to photograph the surface of the sea, always straight down, never toward the horizon \u2014 no sky, no shore, no framing device except the water itself. Most people who live beside the sea walk past it. It is among the most looked-at surfaces in the city and among the least seen.",
      "Without horizon or scale, the water stops functioning as landscape. What remains is a surface in constant movement, agitated from within by forces that never become visible \u2014 the effect that gives the series its title, the boiling sea.",
      "The sea we see is not a fixed thing. It is a perception produced by culture, and different historical moments have produced fundamentally different seas. The fisherman\u2019s sea is a workplace and a danger. The Romantic\u2019s sea is an encounter with infinity. The Victorian\u2019s sea is a medicine. The tourist\u2019s sea is a paradise. The refugee\u2019s sea is a threshold between life and death. These are not different ways of seeing the same object. They are, in a meaningful sense, different objects. The physical water does not change; what changes is the entire framework of relations, fears, hopes, and purposes through which it is perceived.",
      "What kind of sea are we actually seeing, when we look? And are there ways of seeing it that we have forgotten?",
      "El Mar Hirviendo \u2014 220 Surfaces gathers the photographic archive the paintings come from: fifteen years of the same few square metres of water, 2011 to 2026, taken from the same pier. The work stays with one overlooked place rather than reaching for new ones, and holds a posture closer to reciprocity than to ownership \u2014 attentive to what the sea is doing rather than prescribing what it ought to look like."
    ],
    note: "",
    website: "https://gordanazikic.wordpress.com",
    instagram: "https://www.instagram.com/gotza_gotza/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/gordana-zikic-1.jpg", caption: "El Mar Hirviendo \u2014 220 Surfaces, photographs, 2011\u20132026" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/gordana-zikic-2.jpg", caption: "El Mar Hirviendo \u2014 oil on canvas, 2024" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/gordana-zikic-3.jpg", caption: "El Mar Hirviendo \u2014 oil on canvas, tondo, 2025" }
    ]
  }

  // Yann's text is his own, kept in first person as he wrote it. The 28 images
  // are his files YC_rivages_01-28, in his numbering — the order of the panels
  // in the installation. The final image is the layout of the full line, a very
  // wide strip (3600×379) that renders as a thin band.
  ,{
    name: "Yann Court\u00e9",
    country: "France",
    work: "Rivages",
    type: "Photography",
    materials: "28 panels printed on dibond, mounted unframed \u2014 photographs 2021\u20132026",
    quote: "The landscapes I once took for natural turn out to be just as man-made as anything urban. Nothing here is truly wild.",
    statement: [
      "Photographer and filmmaker based in France, my work grows out of places and the movement between them. In the field, I work with a candid eye and an openly subjective view.",
      "My work sits between a documentary attitude, rooted in the everyday and the unremarkable, and a pull toward more poetic, lyrical forms \u2014 an eye for what is delicate in the ordinary, without grandeur in subject or in form. This way of looking feeds my questions about human cultures, social structures, and how they change.",
      "Rivages follows the Orb river from B\u00e9ziers to the sea, through the ponds of la Malhaute \u2014 former sand quarries turned natural habitat \u2014 the Canal du Midi, the protected wetlands of Les Orpelli\u00e8res, all the way to the beaches of S\u00e9rignan and Valras.",
      "The series grew slowly, out of images gathered in a place I\u2019ve known my whole life: family fishing trips to la Malhaute as a kid, beach evenings in my first years of driving.",
      "The landscapes I once took for natural, once you strip away the everyday gloss and the nostalgia, turn out to be just as man-made as anything urban. This is a corner of the Anthropocene. Nothing here is truly wild.",
      "The exhibition project opens with a triptych of the Canal du Midi, the Orb river and the Mediterranean \u2014 the three bodies of water it moves through \u2014 then follows the water\u2019s course down to the sea. It takes the form of an installation of 28 panels, printed on dibond and mounted unframed, arranged in a continuous line whose density and rhythm shift along the way, echoing the uneven pace of a river."
    ],
    note: "",
    website: "https://yanncourte.fr",
    instagram: "https://www.instagram.com/memoire.courte/",
    pdf: { href: "/assets/docs/yann-courte-rivages.pdf", label: "Exhibition PDF" },
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-01.jpg", caption: "Rivages \u2014 1 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-02.jpg", caption: "Rivages \u2014 2 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-03.jpg", caption: "Rivages \u2014 3 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-04.jpg", caption: "Rivages \u2014 4 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-05.jpg", caption: "Rivages \u2014 5 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-06.jpg", caption: "Rivages \u2014 6 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-07.jpg", caption: "Rivages \u2014 7 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-08.jpg", caption: "Rivages \u2014 8 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-09.jpg", caption: "Rivages \u2014 9 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-10.jpg", caption: "Rivages \u2014 10 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-11.jpg", caption: "Rivages \u2014 11 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-12.jpg", caption: "Rivages \u2014 12 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-13.jpg", caption: "Rivages \u2014 13 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-14.jpg", caption: "Rivages \u2014 14 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-15.jpg", caption: "Rivages \u2014 15 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-16.jpg", caption: "Rivages \u2014 16 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-17.jpg", caption: "Rivages \u2014 17 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-18.jpg", caption: "Rivages \u2014 18 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-19.jpg", caption: "Rivages \u2014 19 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-20.jpg", caption: "Rivages \u2014 20 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-21.jpg", caption: "Rivages \u2014 21 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-22.jpg", caption: "Rivages \u2014 22 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-23.jpg", caption: "Rivages \u2014 23 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-24.jpg", caption: "Rivages \u2014 24 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-25.jpg", caption: "Rivages \u2014 25 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-26.jpg", caption: "Rivages \u2014 26 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-27.jpg", caption: "Rivages \u2014 27 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-28.jpg", caption: "Rivages \u2014 28 / 28" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/yann-courte-29-layout.jpg", caption: "Rivages \u2014 the installation, 28 panels in a continuous line" }
    ]
  }

  // Bio and statement are hers, ENGLISH ONLY as Gordana asked — the docx also
  // carries a Spanish version, deliberately not used. Images are in the order
  // she sent them. The two .MOV files in her folder are deliberately not used.
  // Captions are generic: individual works are untitled within the series.
  ,{
    name: "Theresa Wilshusen",
    country: "USA / Spain",
    work: "Extrinsic Observations",
    type: "Mixed media & Installation",
    materials: "Found objects in resin, collected materials and documentation, 2026",
    quote: "Identity emerges through accumulation rather than a single defining image.",
    statement: [
      "Theresa Wilshusen (b. 1984) is an American, multidisciplinary artist. She holds a PhD in Art Production from the Universidad Polit\u00e9cnica de Valencia (Valencia, 2025). She received a technical degree in Ceramic Decoration from L\u2019Escola d\u2019Art La Industrial (Barcelona, 2019). She achieved a Master of Contemporary Artistic Creation at the Universitat de Barcelona (2016). Theresa graduated with a Bachelor of Fine Arts in painting and a Bachelor of Arts in Spanish Communication from Northwest Missouri State University (Maryville, 2008).",
      "My practice investigates how identity is formed, perceived, and remembered through place, culture, and environment. Emerging from my doctoral research, which examined the expression of identity in death, my work has evolved toward a broader exploration of how individuals and locations leave traces that can be collected, interpreted, and translated into artistic form. I am interested in the fragments \u2014 material, visual, linguistic, and emotional \u2014 that together construct an authentic sense of identity.",
      "I work through a process of investigation and collection. Landscapes, local materials, documentation, and personal encounters become components of a growing archive that reflects the character of a place or community. These elements are not treated as isolated artifacts, but as interconnected parts of a larger narrative. By combining multiple media and methods of documentation, I build layered works that function like mixed-media collages, allowing identity to emerge through accumulation rather than a single defining image.",
      "Travel has been a crucial catalyst in my recent work. Having completed my PhD, I have become increasingly attentive to my immediate surroundings \u2014 particularly landscapes, entropic walking practices, language, and niche cultural traditions. As an immigrant living in Spain, I experience these environments through both familiarity and distance. This dual position allows me to observe how local communities express pride in their customs, while also questioning how these identities are perceived by outsiders.",
      "My current series focuses on lesser-known places with strong, distinctive cultures. Extrinsic Observations aims to document and interpret how environment shapes collective beliefs and self-perception, and how exposure to a place can gradually construct an understanding of its identity. The final works bring together collected materials and documentation to reflect the layered, evolving nature of place-based identity. Through this process, I seek to create works that honor local specificity while acknowledging the subjective lens through which identity is always formed."
    ],
    note: "",
    website: "https://twilshusen.com",
    instagram: "https://www.instagram.com/wilshusen.fine.arts/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-01.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-02.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-03.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-04.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-05.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-06.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-07.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-08.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-09.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-10.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-11.jpg", caption: "Extrinsic Observations \u2014 installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/theresa-wilshusen-12.jpg", caption: "Extrinsic Observations \u2014 installation view" }
    ]
  }

  // Vimeo 326782961, confirmed via their API: "Metroata", 379s = 6'19, 2019.
  // The share link Gordana sent carried a long turnstile query string; the
  // embed URL is kept clean so the builder can append ?autoplay=1 on play.
  // Poster is Vimeo's own still, saved locally rather than hotlinked.
  ,{
    name: "Juan David Galindo",
    country: "Spain",
    work: "Metroata",
    type: "Video performance",
    materials: "Video performance, 6\u201919 min, 2019",
    quote: "A bittersweet declaration of love to subway travelers.",
    statement: [
      "Juan David Galindo Guarin is an artist, educator, and cultural mediator based in Barcelona. His practice moves across performance, video, installation, and archive, exploring the processes of subjectivation within Western capitalist culture \u2014 using his own body as case study through autoethnography, performance, and fiction. His work examines identity consumption, hyperproductivity, and self-image in the digital age, seeking points of encounter and collective recognition.",
      "He holds a degree in Fine Arts and Design from Escola Massana, Barcelona, and completed the Independent Studies Programme at MACBA. He has participated in residencies at Hangar Barcelona and La Escocesa, and has exhibited internationally including at MACBA Barcelona, Blueproject Foundation, Fabra i Coats, and Centro Cultural Las Cigarreras Alicante, with solo shows in Barcelona, Belgrade, and L\u2019Hospitalet.",
      "Metroata is a performative talk piece that becomes a video performance that Juan David Galindo carries out in the subway cars of Barcelona. It is a bittersweet declaration of love to subway travelers. The speech is made up of singing appropriated songs along with a narration of a personal erotic experience in the subway.",
      "The act of producing a \u201cwe\u201d is explored from interrupting the \u201cnormal circulation\u201d flows in the public transport system and is intended to transform the discomfort towards the other into complicity. In Metroata lies a question about the forms of socialization while experiencing discomfort and eroticism."
    ],
    note: "",
    website: "https://unjuan.com",
    instagram: "",
    kind: "video",
    video: {
      embed: "https://player.vimeo.com/video/326782961",
      poster: "/assets/images/exhibitions/swab-offsite-2026/juan-david-galindo-poster.jpg"
    }
  }

  // YouTube WOnyA2YQOkw, 65s. NOTE: the upload is still auto-titled
  // "6 oktober 2026" on YouTube, not "Water Lily Women" — worth asking Louise
  // to rename it, since anyone clicking through sees the placeholder title.
  // The work is 2021; the YouTube upload is from 2026.
  ,{
    name: "Louise Norstr\u00f6m",
    country: "Sweden",
    work: "Water Lily Women",
    type: "Video",
    materials: "Video, 1\u201905 min, 2021",
    quote: "In the water a sense of weightlessness emerges, where the body becomes free.",
    statement: [
      "Ruth Louise Norstr\u00f6m is a Swedish visual artist, photographer, and filmmaker working across oil, acrylic, photography, and video. Her artistic background includes studies at Valand Academy and Fornby Folk High School, and she was awarded the Ludvika Municipality Cultural Scholarship in 2023.",
      "Her work draws on a neo-figurative tradition with expressionist elements, where the figurative meets the abstract. She explores atmospheric and emotionally charged motifs, from paintings of solitary figures to video works capturing human presence in nature, creating spaces for reflection on relationships and existence.",
      "The work was filmed in a warm forest lake during midsummer in Sweden, capturing women of different ages carried by the water. Their bodies are free, moving softly and rhythmically in a dance around the camera.",
      "My intention with the work is to explore water as a primal and life-giving place, an ancestral environment reminiscent of existence in the womb. In the water, a sense of weightlessness emerges where the body becomes free, allowing women of different ages to meet in a soft, shared flow. The piece is a tribute to the body, security, and the supportive element that connects us all."
    ],
    note: "",
    website: "",
    instagram: "https://www.instagram.com/_ruth.louise_/",
    kind: "video",
    video: {
      embed: "https://www.youtube.com/embed/WOnyA2YQOkw",
      poster: "/assets/images/exhibitions/swab-offsite-2026/louise-norstrom-poster.jpg"
    }
  }

  // Joint credit at Sarah-Jane's request: she and Kim-Ling Morris are both
  // named at the top, and NO bio/CV is to be added for Kim-Ling. The bio below
  // is Sarah-Jane's only, condensed from her five-paragraph PDF — kept the Fine
  // Art training, what the practice does, Lacuna, and Next Generation
  // Publications; dropped the yoga, mental health first aid and Carbon Literate
  // certifications. Full version is in SJMason Biography 2025 FAC.pdf.
  ,{
    name: "Sarah-Jane Mason and Kim-Ling Morris",
    country: "UK / Spain",
    work: "Landscapes of You and I",
    type: "Mixed media",
    materials: "Mixed media on canvas, 100 \u00d7 50 cm, 2021",
    quote: "The more this paper is exposed to heat and light, the faster the image fades until there is no trace of what was there before.",
    statement: [
      "Sarah-Jane Mason is a Creative Practitioner, Facilitator and Educator who specialises in using mixed media approaches to personal and participatory arts projects. She studied BA (Hons) Fine Art at Liverpool John Moores University and DipCipris in Fine Art at the Cyprus College of Art, then focused on creative education with a PGCE (Art & Design) at the University of Leeds. Her practice uses mixed media to encourage dialogue around uncomfortable but important topics, question societal norms, and compare people\u2019s experiences of a particular space or place. Her work often includes elements of mass media or found natural objects, questioning the impact these sources have on our worldviews and everyday lives; humour and colour bring warmth and openness to that dialogue.",
      "She is co-director, with land artist Simon Turner, of Lacuna Festivals and The Lacuna Studios, an artist studio and residence on an ecologically regenerative olive grove in southern Spain built around notions of care, creation, destruction, cultivation and experimentation. She also runs Next Generation Publications, publishing visual books created by and for their audience; past books are held in the British Library collection as well as in local libraries, schools and community centres.",
      "Landscapes of You and I is taken from a series of work that explores the development and overdevelopment of Lanzarote, a small Spanish island just off the coast of Morocco. Created during a period of five years when Sarah-Jane lived in a small fishing village in the north of the island, the works are an expression of her lived experiences at that time.",
      "\u201cThe explosion of package tourism on the southern coast followed by the popularisation of Air BnB exacerbated existing inequalities on the island and created unfathomable new ones. Like the full-time secondary school teacher living out of their car because their monthly salary is no longer enough to cover rent. Or the residents living far away from the tourist areas that have no water for days on end as the tourist accommodation squeezes every last drop available from the desalination plant.",
      "There is also the inherent sadness of the island that in less than 50 years has gone from quiet shores and desolate volcanic wasteland into mega hotels and long traffic jams of sightseers. The sadness of an unprepared government floundering with this unprecedented escalation. The sadness of long-time residents grieving for the unique environment, sentimental for the good old days and full of melancholy that nothing ever lasts.",
      "It is the melancholy of the transient nature of human life and the spaces and places we inhabit that I wanted to capture in this piece. It started with a small \u2018creative spark\u2019, a tiny abstract piece created on thermal paper with ink and alcohol, sent to me by Irish artist Kim-Ling Morris. The more this paper is exposed to heat and light, the faster the image fades until there is no trace of what was there before. This piece of paper was the catalyst and remains the most important part of the piece as it fades out of existence. It leaves behind a blank space for the audience to question, make sense of and ultimately choose to fill or leave as open as a gaping wound.\u201d"
    ],
    note: "",
    website: "https://www.sarahjanemason.com",
    instagram: "https://www.instagram.com/sarahjanemasonartist/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/sarah-jane-mason-1.jpg", caption: "Landscapes of You and I" }
    ]
  }

  // The work is the animated GIF (11.6 MB, 204 frames) — it only downloads when
  // her entry is opened. `thumb` points the grid card at the still JPG instead,
  // so the index page doesn't pull 11.6 MB. Statement and bio are hers verbatim.
  ,{
    name: "Ivana Ehrensv\u00e4rd",
    country: "Serbia",
    work: "My Marriage No. 1 \u2014 Whoosh!",
    type: "Animated GIF \u00b7 on-chain artwork",
    materials: "Digital reanimation of an acrylic painting on canvas, minted as a 1/1 NFT",
    quote: "Signal lost. We were free. Now, whoosh to the Earth! where absence holds me.",
    statement: [
      "Ivana Ehrensv\u00e4rd is a curator and artist based in Belgrade, Serbia, working across painting and the digital and blockchain space. Her work has been shown internationally in group exhibitions.",
      "My Marriage No. 1 \u2014 Whoosh! is a digital reanimation of an earlier work: My Marriage No. 1, an acrylic painting on canvas, begun toward the end of a brief marriage and completed in its aftermath. The original painting became a visual record of an inner process moving from turbulence toward stillness.",
      "Years later, responding to an open call on the theme of Absence, the artist returned to the painting rather than creating a new work. Through glitch and motion, a small sphere emerges from the line and drifts away \u2014 a new element introduced into the painting\u2019s static composition, breaking loose and disappearing. The animation transforms the painting\u2019s earlier state into a gesture of release \u2014 allowing something held within to finally leave it.",
      "My Marriage No. 1 \u2014 Whoosh! is an on-chain artwork, minted as a 1/1 NFT. It extends the life of the original painting into a new digital form, while the NFT provides a verifiable record of the artwork\u2019s originality and ownership on-chain.",
      "The work was created for the ACTZ Absence open call and was subsequently sold."
    ],
    note: "<a href=\"https://objkt.com/tokens/KT1Lt91vWTJeRRXQmot3LLY5JP2nZKAUfiMr/0\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;border-bottom:1px solid currentColor\">View the token on objkt \u2192</a>",
    website: "https://ivanaontheblock.art/",
    instagram: "",
    thumb: "/assets/images/exhibitions/swab-offsite-2026/ivana-ehrensvard-thumb.jpg",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/ivana-ehrensvard-whoosh.gif", caption: "My Marriage No. 1 \u2014 Whoosh!" }
    ]
  }

];

/* ─────────────────────────────────────────────────────────────
TEMPLATE A — artist with images

  {
    name: "",
    country: "",
    work: "",
    type: "",              // e.g. Installation, Painting, Performance, Video
    materials: "",
    quote: "",             // optional pull quote
    statement: [
      "",                  // one string per paragraph
    ],
    note: "",              // optional: previous venues, credits, links
    website: "",
    instagram: "",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/firstname-lastname-1.jpg", caption: "" }
    ]
  }

TEMPLATE B — artist with video

  {
    name: "",
    country: "",
    work: "",
    type: "Video",
    materials: "",
    quote: "",
    statement: [
      "",
    ],
    note: "",
    website: "",
    instagram: "",
    kind: "video",
    video: {
      embed: "https://player.vimeo.com/video/XXXXXXXXX",
      poster: "/assets/images/exhibitions/swab-offsite-2026/firstname-lastname-poster.jpg"
    }
  }
───────────────────────────────────────────────────────────── */
