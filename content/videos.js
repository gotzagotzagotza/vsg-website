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
      // {
      //   title: "",
      //   person: "",         // who is interviewed
      //   embed: "https://www.youtube.com/embed/VIDEO_ID",
      //   poster: "",         // optional — leave "" to auto-use YouTube thumbnail
      //   description: ""     // optional one-line description
      // },
    ]
  },

  {
    category: "Sunday Meeting Presentations",
    videos: [
      // {
      //   title: "",
      //   person: "",
      //   embed: "https://www.youtube.com/embed/VIDEO_ID",
      //   poster: "",
      //   description: ""
      // },
    ]
  },

  {
    category: "Belgrade AIR — Resident Artist Interviews",
    videos: [
      // {
      //   title: "",
      //   person: "",
      //   embed: "https://www.youtube.com/embed/VIDEO_ID",
      //   poster: "",
      //   description: ""
      // },
    ]
  },

  {
    category: "Juxtapose Art Fair",
    videos: [
      // {
      //   title: "",
      //   person: "",
      //   embed: "https://www.youtube.com/embed/VIDEO_ID",
      //   poster: "",
      //   description: ""
      // },
    ]
  }

];
