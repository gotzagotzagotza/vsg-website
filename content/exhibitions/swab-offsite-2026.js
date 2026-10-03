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

  // River's bio and materials are hers as supplied. Still to come: the work's
  // TITLE, the text about the work, and the year — `work` is a placeholder and
  // the statement holds only her bio. Image captions are descriptive only;
  // replace them once the title is known.
  ,{
    name: "River Reishi",
    country: "USA",
    work: "Title to come",
    type: "Sculpture & Installation",
    materials: "Raku-fired ceramic, sand from the beach near Coos Bay, copper seaweed aged with Coos Bay seawater",
    quote: "",
    statement: [
      "River Reishi is a mixed media artist whose work explores the intersection of ecology, mythology, and cultural memory. Through sculpture, installation, and ephemeral materials such as sand and amber, she creates contemporary myths that invite viewers to reconsider their relationship with the natural world."
    ],
    note: "",
    website: "https://riverreishi.com/work",
    instagram: "https://www.instagram.com/riverreishi/",
    kind: "images",
    images: [
      { src: "/assets/images/exhibitions/swab-offsite-2026/river-reishi-1.jpg", caption: "Installation view" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/river-reishi-2.jpg", caption: "Installation view from above" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/river-reishi-3.jpg", caption: "Detail \u2014 figure on driftwood, shell, sand" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/river-reishi-4.jpg", caption: "Detail \u2014 raked sand and copper seaweed" },
      { src: "/assets/images/exhibitions/swab-offsite-2026/river-reishi-5.jpg", caption: "Detail \u2014 reverse view" }
    ]
  }

  // Ylva's work text and materials are theirs as supplied; the opening bio
  // paragraph is their own artist text, the second is condensed from their CV.
  // Ylva uses they/them. Still to come: the YEAR of the work.
  // Image captions are descriptive only.
  ,{
    name: "Ylva Ekl\u00f6f",
    country: "Sweden",
    work: "Comfort / In my own skin",
    type: "Screen print & Installation",
    materials: "Cotton sateen, water-based textile ink, down duvet and pillow, mattress, outgrown child\u2019s bed",
    quote: "By replicating my skin I keep myself safe and sound.",
    statement: [
      "Ylva Ekl\u00f6f (b. 1986, Stockholm) is a multidisciplinary artist based in Stockholm who works in various rural places across Sweden. Nature and human\u2013nature relationships, longing, a sense of loss, childhood memories, and a quest to orient themselves in time and space are recurring themes; materiality, and the origins and connotations of materials, is equally central to their practice. Ekl\u00f6f creates works that open the doors to conversations while also offering a moment of rest and comfort.",
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

  // Joint work with Heera Gul (@ammipesca). Statement is Seb's as supplied.
  // Still to come: bios/CVs for both.
  ,{
    name: "Seb Bradshaw & Heera Gul",
    country: "UK",
    work: "Stone Compass",
    type: "Textile collage",
    materials: "Card, recycled fabric, oil pastels and paints on recycled fabric, 2023",
    quote: "Stone circles are sites of enduring connection to the natural world, both ancient and modern.",
    statement: [
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

  // Radina's statement and bio are verbatim from her PDF. IMAGES TO COME — the
  // photo in the PDF is a grant-announcement snapshot, deliberately not used.
  // To add images: fill `images` and delete `placeholder`.
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
    images: [],
    placeholder: "Images to follow"
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

  // CONFIRM THE BILLING: the video is titled "WISDOM KEEPERS Igorot and Romani
  // Video Art Installation — Melih Aşanlı & Kübra Köprülüoğlu Aşanlı", so it is
  // credited to BOTH artists, not to Kübra alone. Entered as a joint work.
  // Still to come: the text about the work, both bios, materials, year.
  ,{
    name: "K\u00fcbra K\u00f6pr\u00fcl\u00fco\u011flu A\u015fanl\u0131 & Melih A\u015fanl\u0131",
    country: "T\u00fcrkiye",
    work: "Wisdom Keepers",
    type: "Video art installation",
    materials: "",
    quote: "",
    statement: [],
    note: "Igorot and Romani.",
    website: "https://kubrakopruluogluasanli.myportfolio.com",
    instagram: "https://www.instagram.com/noooneelsebutme/",
    kind: "video",
    video: {
      embed: "https://www.youtube.com/embed/Km-gqHSswVI",
      poster: "/assets/images/exhibitions/swab-offsite-2026/wisdom-keepers-poster.jpg"
    }
  }

  // CHECK THE VIDEO: the work text describes "Discovery of the Ancient Texas
  // Civilization", Hilmsen, GERMANY, 2013 — but the linked YouTube video
  // (5oYbJn2_H4w) is titled "Ancient Texas Pyramids in BELGIUM". Either the
  // link is for a different piece in the series, or the YouTube title is loose.
  // Confirm with Joshua. Bio and statement below are his as supplied.
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
      embed: "https://www.youtube.com/embed/5oYbJn2_H4w",
      poster: "/assets/images/exhibitions/swab-offsite-2026/joshua-goode-poster.jpg"
    }
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
