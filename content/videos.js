// VSG Videos — YouTube archive
// ─────────────────────────────────────────────────────────────
// HOW TO ADD A VIDEO
//   1. Find the right category below (or add a new category object).
//   2. Copy one video entry template and fill in the fields.
//   3. embed: the YouTube embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID
//   4. poster: optional. If left blank, we auto-use the YouTube thumbnail.
//      To set a custom poster, drop an image into assets/images/videos/
//      and reference it as /assets/images/videos/FILENAME.jpg
//   5. Run `node build.js` and push — the page updates automatically.
// ─────────────────────────────────────────────────────────────

module.exports = [

  {
    category: "Artist Interviews",
    videos: [
      { title: "Genevieve Leavold Interview", person: "Genevieve Leavold", embed: "https://www.youtube.com/embed/5lvE7klftRo", poster: "", description: "" },
      { title: "Juan Pablo Meneses Interview", person: "Juan Pablo Meneses", embed: "https://www.youtube.com/embed/SZuAwco8jDY", poster: "", description: "May 2025" },
      { title: "Raymond Watson Interview", person: "Raymond Watson", embed: "https://www.youtube.com/embed/I4GAIfzLoUM", poster: "", description: "" },
      { title: "Katarina Rasic Interview", person: "Katarina Rasic", embed: "https://www.youtube.com/embed/tZRCONMHw4s", poster: "", description: "" },
      { title: "Theresa Wilshusen Interview", person: "Theresa Wilshusen", embed: "https://www.youtube.com/embed/YF6t6NsH0zo", poster: "", description: "" },
      { title: "Joshua Goode Interview", person: "Joshua Goode", embed: "https://www.youtube.com/embed/l10LGvAOnU0", poster: "", description: "" }
    ]
  },

  {
    category: "Sunday Meeting Presentations",
    videos: [
      { title: "Kübra Köprülüoğlu Aşanlı — VSG Session", person: "Kübra Köprülüoğlu Aşanlı", embed: "https://www.youtube.com/embed/XfrqaBt9HrA", poster: "", description: "26 April 2026" },
      { title: "Maren Götzmann — VSG Presentation", person: "Maren Götzmann", embed: "https://www.youtube.com/embed/JEoQaXw-_Aw", poster: "", description: "19 April 2026" },
      { title: "Seb Bradshaw — Presentation and Feedback Session", person: "Seb Bradshaw", embed: "https://www.youtube.com/embed/nVaCquQTgzQ", poster: "", description: "" },
      { title: "Ylva Eklöf — Presentation and Feedback Session", person: "Ylva Eklöf", embed: "https://www.youtube.com/embed/Z5RkH-4_zOs", poster: "", description: "" },
      { title: "Theresa Wilshusen — Dream Project Presentation", person: "Theresa Wilshusen", embed: "https://www.youtube.com/embed/GfpXtNgMtc0", poster: "", description: "" },
      { title: "Paula Elion — VSG Presentation", person: "Paula Elion", embed: "https://www.youtube.com/embed/XX0IADAfcOg", poster: "", description: "11 May 2025" },
      { title: "Rosie Hearne — Presentation and Feedback Session", person: "Rosie Hearne", embed: "https://www.youtube.com/embed/oV924zYB1Ng", poster: "", description: "March 2025" },
      { title: "Ilija Dincic — Presentation and Feedback Session", person: "Ilija Dincic", embed: "https://www.youtube.com/embed/9g0Tvu55JLE", poster: "", description: "March 2025" },
      { title: "Theresa Wilshusen — Feedback Session and Presentation", person: "Theresa Wilshusen", embed: "https://www.youtube.com/embed/IhhZbIfFK94", poster: "", description: "March 2025" },
      { title: "Åsa Ekman — Presentation of Works", person: "Åsa Ekman", embed: "https://www.youtube.com/embed/r2VmwtPU9_Y", poster: "", description: "16 March 2025" },
      { title: "Gordana Žikić — Presentation of the Project La Sombra", person: "Gordana Žikić", embed: "https://www.youtube.com/embed/LREU-z4ZhlU", poster: "", description: "23 March 2025" }
    ]
  },

  {
    category: "Belgrade AIR — Resident Artist Interviews",
    videos: [
      { title: "Juan Antonio Cerezuela Interview", person: "Juan Antonio Cerezuela", embed: "https://www.youtube.com/embed/oxDtQ2lcYzE", poster: "", description: "May 2022" },
      { title: "Vesuhely Americaan Interview", person: "Vesuhely Americaan", embed: "https://www.youtube.com/embed/trbI7878iCo", poster: "", description: "May 2022" },
      { title: "Kayla Griffin Interview", person: "Kayla Griffin", embed: "https://www.youtube.com/embed/P7LCo_RI1tE", poster: "", description: "April 2022" },
      { title: "Abigail Smithson Interview — Center424", person: "Abigail Smithson", embed: "https://www.youtube.com/embed/ra5-IlJ0QOY", poster: "", description: "April 2022" },
      { title: "Natalia Carminati Interview", person: "Natalia Carminati", embed: "https://www.youtube.com/embed/Yv7KH_N7uko", poster: "", description: "February 2022" }
    ]
  },

  {
    category: "Art Fairs & Exhibitions",
    videos: [
      { title: "Juxtapose 2025 — Tour", person: "", embed: "https://www.youtube.com/embed/rC6wwFSLNY0", poster: "", description: "Juxtapose Art Fair, Aarhus, Denmark, 2025" },
      { title: "Supermarket Art Fair — Meetings", person: "", embed: "https://www.youtube.com/embed/Acue6ZtJwXI", poster: "", description: "Stockholm, 5 April 2025" }
    ]
  }

];
