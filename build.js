const { marked } = require('marked');
const fm = require('front-matter');
const fs = require('fs');
const path = require('path');

// ---- Helpers ----

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function formatMonthYear(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

function readMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = readFile(path.join(dir, f));
      const parsed = fm(raw);
      const slug = f.replace('.md', '');
      return { slug, ...parsed.attributes, body: marked(parsed.body) };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// ---- Base template ----

function baseTemplate({ title, description = '', body, activePage = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}${title !== 'Virtual Studio Groups' ? ' — Virtual Studio Groups' : ''}</title>
  <meta name="description" content="${description || 'Virtual Studio Groups — an international online community of artists.'}">
  <link rel="icon" type="image/png" href="/assets/images/vsg_logo_black-1.png">
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>

<header class="site-header">
  <div class="header-inner">
    <a href="/" class="site-logo">
      <img src="/assets/images/vsg_logo_black-1.png" alt="VSG logo">
      <span class="site-logo-text">Virtual Studio Groups</span>
    </a>
    <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav class="main-nav">
      <a href="/"${activePage === 'home' ? ' class="active"' : ''}>Home</a>
      <a href="/community/"${activePage === 'community' ? ' class="active"' : ''}>Community</a>
      <a href="/artists/"${activePage === 'artists' ? ' class="active"' : ''}>Artists</a>
      <a href="/magazine/"${activePage === 'magazine' ? ' class="active"' : ''}>Magazine</a>
      <a href="/projects/"${activePage === 'projects' ? ' class="active"' : ''}>Projects</a>
      <a href="/events/"${activePage === 'events' ? ' class="active"' : ''}>Events</a>
      <a href="/network/"${activePage === 'network' ? ' class="active"' : ''}>Network</a>
      <a href="/resources/"${activePage === 'resources' ? ' class="active"' : ''}>Resources</a>
    </nav>
  </div>
</header>

<main>
${body}
</main>

<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-about">
      <img src="/assets/images/vsg_logo_black-1.png" alt="VSG" style="height:28px;width:auto;margin-bottom:0.5rem">
      <p>Virtual Studio Groups is an international online community of artists — meeting every Sunday, making work, thinking together.</p>
    </div>
    <nav class="footer-nav">
      <h4>Navigate</h4>
      <ul>
        <li><a href="/community/">Community</a></li>
        <li><a href="/meetings/">Meeting Notes</a></li>
        <li><a href="/artists/">Artists</a></li>
        <li><a href="/magazine/">Magazine</a></li>
        <li><a href="/projects/">Projects</a></li>
        <li><a href="/events/">Events</a></li>
        <li><a href="/network/">Network</a></li>
        <li><a href="/resources/">Resources</a></li>
      </ul>
    </nav>
    <div class="footer-contact">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:virtualstudiogroups@gmail.com">virtualstudiogroups@gmail.com</a></li>
        <li><a href="https://www.instagram.com/virtual_studio_groups/" target="_blank" rel="noopener">@virtual_studio_groups</a></li>
        <li><a href="https://www.youtube.com/@virtualstudiogroups/videos" target="_blank" rel="noopener">YouTube</a></li>
        <li><a href="https://forms.gle/usHJPEGHajfUXFjh8" target="_blank" rel="noopener">Submit to Magazine</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© Virtual Studio Groups ${new Date().getFullYear()}</p>
    <p>Founded during the pandemic — active since 2021 — 10+ countries</p>
  </div>
</footer>

<script src="/assets/js/main.js"></script>
<script src="/assets/js/gallery.js"></script>
</body>
</html>`;
}

// ---- Article card component ----

function articleCard({ title, date, section, excerpt, cover, url }) {
  const imgHtml = cover
    ? `<img src="${cover}" alt="${title}" loading="lazy">`
    : '';
  return `<article class="article-card">
  <div class="article-card-image">
    ${imgHtml}
  </div>
  <div class="article-card-section">${section}</div>
  <h3 class="article-card-title"><a href="${url}">${title}</a></h3>
  <p class="article-card-excerpt">${excerpt || ''}</p>
  <time class="article-card-date" datetime="${date}">${formatDate(date)}</time>
</article>`;
}

// ---- HOME PAGE ----

function buildHome(exhibitions, projects, events, presentations) {
  const allArticles = [
    ...exhibitions.map(a => ({ ...a, _sectionSlug: 'exhibitions-and-encounters' })),
    ...projects.map(a => ({ ...a, _sectionSlug: 'projects-and-research' })),
    ...presentations.map(a => ({ ...a, _sectionSlug: 'artist-presentations' })),
  ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  const latestEvent = events[0];

  const articleCards = allArticles.map(a => articleCard({
    title: a.title,
    date: a.date,
    section: a.section,
    excerpt: a.excerpt,
    cover: a.cover || null,
    url: `/magazine/${a._sectionSlug}/${a.slug}/`
  })).join('\n');

  const eventHtml = latestEvent ? `
<div class="section-block" style="background:var(--gray-light)">
  <div class="container">
    <p class="section-label">Recent Exhibition</p>
    <h2 class="section-title">${latestEvent.title}</h2>
    <p class="section-intro">${latestEvent.description}</p>
    <p style="font-family:var(--font-mono);font-size:0.8rem;color:var(--gray-text)">${latestEvent.location} &nbsp;·&nbsp; ${formatMonthYear(latestEvent.date_start)}</p>
    ${latestEvent.article_link ? `<a href="${latestEvent.article_link}" class="btn btn-outline" style="margin-top:1.5rem">Read exhibition review</a>` : ''}
  </div>
</div>` : '';

  const body = `
<section class="home-hero">
  <div class="home-hero-inner">
    <div class="home-hero-text">
      <h1>An international community of <em>artists</em>, meeting online</h1>
      <p>Virtual Studio Groups is a space for artistic growth, peer feedback, and collective knowledge-sharing — without the constraints of physical location. We meet every Sunday. We are artists from 10+ countries.</p>
      <div class="home-hero-meta">
        <div class="stat">
          <span class="stat-number">10+</span>
          <span class="stat-label">Countries</span>
        </div>
        <div class="stat">
          <span class="stat-number">2021</span>
          <span class="stat-label">Founded</span>
        </div>
        <div class="stat">
          <span class="stat-number">3</span>
          <span class="stat-label">Exhibitions</span>
        </div>
      </div>
    </div>
    <div class="home-hero-image">
      <img src="/assets/images/vsg-poster.jpg" alt="Virtual Studio Groups" loading="eager">
    </div>
  </div>
</section>

<div class="section-block">
  <div class="container">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2rem">
      <div>
        <p class="section-label">VSG Digital Art Magazine</p>
        <h2 class="section-title">Latest Articles</h2>
      </div>
      <a href="/magazine/" style="font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--black)">All articles →</a>
    </div>
    <div class="grid-3">
      ${articleCards}
    </div>
  </div>
</div>

${eventHtml}

<div class="section-block">
  <div class="container">
    <div class="grid-2" style="align-items:center;gap:4rem">
      <div>
        <p class="section-label">About VSG</p>
        <h2 class="section-title">Peer support for artists, everywhere</h2>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.75;color:var(--gray-text);margin:1rem 0 1.5rem">The Virtual Studio Groups project evolved from our virtual residency program, initiated during the pandemic. With a decade-long history of art residency in Belgrade and a vast artist network, the project grew organically.</p>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.75;color:var(--gray-text);margin-bottom:1.75rem">We meet every Sunday evening. No hierarchy, no predetermined outcomes. Just artists, talking honestly about their work.</p>
        <a href="/community/" class="btn btn-primary">Learn more</a>
      </div>
      <div>
        <img src="/assets/images/exhibitions/5fd09b71-e321-4777-9c86-2eae2b467920.jpg" alt="El agua nos llama, Valencia 2026" loading="lazy" style="width:100%;height:auto">
      </div>
    </div>
  </div>
</div>
`;

  return baseTemplate({
    title: 'Virtual Studio Groups',
    description: 'Virtual Studio Groups — an international online community of artists meeting every Sunday.',
    body,
    activePage: 'home'
  });
}

// ---- COMMUNITY PAGE ----

function buildCommunity(aboutContent, meetings) {
  const values = [
    { n: '01', title: 'Artists Lead', text: 'We believe in artist-led spaces. Everyone creates, suggests, and shapes what happens here.' },
    { n: '02', title: 'Trust and Care First', text: 'Trust, kindness, and genuine support are at the heart of everything we do. They must be offered first if they are to be received.' },
    { n: '03', title: 'Share Generously', text: 'We grow by sharing ideas, feedback, knowledge, and encouragement — without holding back.' },
    { n: '04', title: 'Communicate Openly and Honestly', text: 'Open, honest communication is the foundation of strong relationships. We listen deeply and speak with integrity and compassion.' },
    { n: '05', title: 'Embrace Process and Change', text: 'We value exploration over polished results, and we welcome change with energy and creativity. Growth comes through experimentation, mistakes, and new paths.' },
    { n: '06', title: 'Stay Open, Curious, and Celebrate Diversity', text: 'We celebrate individuality. Every artist\'s background, style, and perspective adds strength to our community.' },
    { n: '07', title: 'Support Each Other\'s Journeys', text: 'We believe in each other\'s potential and well-being, personally and professionally. We watch out for one another and celebrate each unique path.' }
  ];

  const valuesHtml = values.map(v => `
<div class="culture-value">
  <div class="culture-value-number">${v.n}</div>
  <h3>${v.title}</h3>
  <p>${v.text}</p>
</div>`).join('');

  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">Community</p>
    <h1>Open, peer-to-peer, international</h1>
    <p class="intro">Virtual Studio Groups is built by artists, for artists — a space for honest dialogue, peer feedback, and collective knowledge-sharing, without the constraints of physical location.</p>
  </div>
</div>

<div class="section-block">
  <div class="container">
    <div class="grid-2" style="gap:5rem">
      <div>
        <p class="section-label">About VSG</p>
        <h2 class="section-title" style="font-size:1.5rem">How it works</h2>
        <div class="article-text" style="margin-top:1.5rem">
          ${aboutContent}
        </div>
      </div>
      <div>
        <img src="/assets/images/vsg-poster.jpg" alt="Virtual Studio Groups" loading="lazy" style="width:100%;height:auto;margin-bottom:1.5rem">
        <div style="border:1px solid var(--gray-mid);padding:1.5rem">
          <h3 style="font-size:1rem;font-weight:700;margin-bottom:0.75rem">Meeting details</h3>
          <p style="font-size:0.875rem;color:var(--gray-text);line-height:1.6">Every <strong>Sunday evening, 8 PM</strong> (European time). Online via video call. Open to artists, curators, cultural professionals, and art writers.</p>
          <p style="font-size:0.875rem;color:var(--gray-text);line-height:1.6;margin-top:0.75rem">Sessions are peer-to-peer — no hierarchy, no predetermined agenda. Everything adapts to the needs of participants.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section-block" style="background:var(--gray-light)">
  <div class="container">
    <p class="section-label">Culture Code</p>
    <h2 class="section-title">Our values</h2>
    <p class="section-intro">Our community is built by artists, for artists. How we act, how we grow, and how we make each other feel — that's our true culture.</p>
    <div class="culture-values">
      ${valuesHtml}
    </div>
  </div>
</div>

<div class="section-block">
  <div class="container">
    <div class="join-block">
      <h2>Join the community</h2>
      <p>VSG is open to artists, curators, cultural professionals, and art writers. To join the Sunday meetings or get on the waiting list, write to us directly.</p>
      <a href="mailto:virtualstudiogroups@gmail.com" class="btn btn-primary">virtualstudiogroups@gmail.com</a>
    </div>
  </div>
</div>

<div class="section-block" style="background:var(--gray-light)">
  <div class="container">
    <p class="section-label">Sister Network</p>
    <h2 class="section-title">AIR Exchange Network</h2>
    <p class="section-intro" style="max-width:640px;margin:0 auto 3rem">A parallel initiative — same principle of peer dialogue and sustained online community, but for a different circle: people who run, organize, or are building artist residencies and artist-run spaces.</p>

    <div class="air-exchange-block">
      <div class="air-exchange-poster">
        <img src="/assets/images/air-exchange-poster.jpg" alt="AIR Exchange Network" loading="lazy" style="width:100%;height:auto;display:block">
      </div>
      <div>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.8;color:var(--gray-text);margin-bottom:1rem">AIR Exchange Network is an international peer circle for residency organizers and artist-run space directors — and for those who are thinking about starting one and want support along the way.</p>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.8;color:var(--gray-text);margin-bottom:1rem">We meet online once a month to exchange experiences, share working methods, and discuss the questions many of us are facing: from sustainability and funding to artist care, programming, and the long-term impact of what we build.</p>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.8;color:var(--gray-text);margin-bottom:1.5rem">This is different from directories, mailing lists, and institutional networks. It is a live, ongoing conversation — not a database, not a conference, not a broadcast channel. The value is in the dialogue itself.</p>
        <div class="air-exchange-meta">
          <span class="air-exchange-meta-item">Monthly meetings — first Wednesday of each month, 18:00 CET</span>
          <span class="air-exchange-meta-item">Online via Zoom &nbsp;·&nbsp; Open to residency organizers and artist-run space directors</span>
          <span class="air-exchange-meta-item">Contact: virtualstudiogroups@gmail.com</span>
        </div>
        <a href="https://airexchangenetwork.wordpress.com" class="btn btn-primary" style="margin-top:1.75rem;display:inline-block" target="_blank" rel="noopener">Visit AIR Exchange Network →</a>
      </div>
      <div>
        <div style="border:1px solid var(--gray-mid);padding:2rem;background:white">
          <p class="section-label" style="margin-bottom:1rem">Who is it for?</p>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem">
            <li style="font-family:var(--font-serif);font-size:0.95rem;line-height:1.65;color:var(--gray-text);padding-left:1rem;border-left:2px solid var(--accent)">Residency organizers and artist-run space directors who want to share what they know and learn from others in similar contexts</li>
            <li style="font-family:var(--font-serif);font-size:0.95rem;line-height:1.65;color:var(--gray-text);padding-left:1rem;border-left:2px solid var(--accent)">Hybrid and experimental programs that mix production, exchange, education, and community in their own way</li>
            <li style="font-family:var(--font-serif);font-size:0.95rem;line-height:1.65;color:var(--gray-text);padding-left:1rem;border-left:2px solid var(--accent)">Emerging organizers in the early stages of developing a residency or artist-run space who need peer support and honest conversation</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section-block">
  <div class="container">
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2rem">
      <div>
        <p class="section-label">Meeting Notes</p>
        <h2 class="section-title">What we talked about</h2>
      </div>
      <a href="/meetings/" style="font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--black)">All meetings →</a>
    </div>
    ${meetings.length > 0
      ? '<div class="meeting-list">' + meetings.slice(0, 5).map(m => `<a href="/meetings/${m.slug}/" class="meeting-item">
  <time class="meeting-date">${formatDate(m.date)}</time>
  <div class="meeting-title">${m.title}</div>
  ${m.excerpt ? '<p class="meeting-excerpt">' + m.excerpt + '</p>' : ''}
</a>`).join('') + '</div>'
      : '<p style="font-family:var(--font-mono);font-size:0.8rem;color:var(--gray-text)">Meeting notes coming soon. VSG meets every Sunday evening.</p>'
    }
  </div>
</div>
`;

  return baseTemplate({
    title: 'Community',
    description: 'About Virtual Studio Groups — an international online artist community meeting every Sunday.',
    body,
    activePage: 'community'
  });
}

// ---- ARTISTS PAGE ----

function buildArtists(artists) {
  const cards = artists.map(a => {
    const photoHtml = a.photo
      ? `<img src="${a.photo}" alt="${a.name}" loading="lazy">`
      : `<div class="artist-photo-placeholder">${a.name.split(' ')[0][0]}${a.name.split(' ').slice(-1)[0][0]}</div>`;

    const instagramLink = a.instagram
      ? `<a href="https://www.instagram.com/${a.instagram}/" target="_blank" rel="noopener">@${a.instagram}</a>`
      : '';

    const websiteLink = a.website
      ? `<a href="https://${a.website}" target="_blank" rel="noopener">Website</a>`
      : '';

    const countryHtml = a.country && !a.country.startsWith('[MISSING')
      ? `<div class="artist-country">${a.country}</div>`
      : '';

    return `<div class="artist-card">
  <div class="artist-photo">${photoHtml}</div>
  <div class="artist-name">${a.name}</div>
  ${countryHtml}
  <div class="artist-links">
    ${instagramLink}
    ${websiteLink}
  </div>
</div>`;
  }).join('\n');

  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">Artists</p>
    <h1>The VSG Community</h1>
    <p class="intro">Artists, curators, and cultural professionals from 10+ countries. Each bringing their own practice, their own questions, their own way of seeing.</p>
    <p style="margin-top:0.75rem;font-family:var(--font-mono);font-size:0.75rem;color:var(--gray-text)">
      YouTube artist interviews: <a href="https://www.youtube.com/@virtualstudiogroups/videos" target="_blank" rel="noopener">youtube.com/@virtualstudiogroups</a>
    </p>
  </div>
</div>

<div class="section-block">
  <div class="container">
    <div class="artists-grid">
      ${cards}
    </div>
  </div>
</div>
`;

  return baseTemplate({
    title: 'Artists',
    description: 'Meet the artists of Virtual Studio Groups — an international community from 10+ countries.',
    body,
    activePage: 'artists'
  });
}

// ---- MAGAZINE INDEX ----

function buildMagazineIndex(exhibitions, booksAndIdeas, projectsResearch, reflections, presentations) {
  const sectionUrl = s => {
    const map = {
      'Exhibitions and Encounters': 'exhibitions-and-encounters',
      'Books & Ideas': 'books-and-ideas',
      'Projects & Research': 'projects-and-research',
      'Reflections': 'reflections',
      'Artist Presentations': 'artist-presentations'
    };
    return map[s] || slugify(s);
  };

  const allArticles = [
    ...exhibitions.map(a => ({ ...a, _sectionSlug: 'exhibitions-and-encounters' })),
    ...projectsResearch.map(a => ({ ...a, _sectionSlug: 'projects-and-research' })),
    ...reflections.map(a => ({ ...a, _sectionSlug: 'reflections' })),
    ...presentations.map(a => ({ ...a, _sectionSlug: 'artist-presentations' })),
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  const allCards = allArticles.map(a => articleCard({
    title: a.title,
    date: a.date,
    section: a.section,
    excerpt: a.excerpt,
    cover: a.cover || null,
    url: `/magazine/${a._sectionSlug}/${a.slug}/`
  })).join('\n');

  const booksHtml = booksAndIdeas.slice(0, 3).map(b => `
<div class="book-card">
  <div class="book-title">${b.title}</div>
  <div class="book-author">${b.author}</div>
  <p class="book-desc">${b.excerpt}</p>
</div>`).join('');

  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">VSG Digital Art Magazine</p>
    <h1>Art, process, and ideas — by artists, for artists</h1>
    <p class="intro">An evolving platform for exhibition reviews, artistic research, book recommendations, and reflections on practice. Contributions welcome from all artists.</p>
  </div>
</div>

<div class="magazine-section">
  <div class="container">
    <div class="section-tabs">
      <a href="/magazine/" class="section-tab active">All</a>
      <a href="/magazine/exhibitions-and-encounters/" class="section-tab">Exhibitions & Encounters</a>
      <a href="/magazine/books-and-ideas/" class="section-tab">Books & Ideas</a>
      <a href="/magazine/projects-and-research/" class="section-tab">Projects & Research</a>
      <a href="/magazine/reflections/" class="section-tab">Reflections</a>
      <a href="/magazine/artist-presentations/" class="section-tab">Artist Presentations</a>
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem">
      <p style="font-size:0.875rem;color:var(--gray-text)">${allArticles.length + booksAndIdeas.length} articles</p>
      <a href="https://forms.gle/usHJPEGHajfUXFjh8" class="submit-cta" target="_blank" rel="noopener">Submit / Contribute</a>
    </div>

    <div class="grid-3">
      ${allCards}
    </div>

    <hr class="divider-bold" style="margin-top:3rem">

    <div class="magazine-header" style="margin-top:3rem">
      <h2>Books & Ideas</h2>
      <a href="/magazine/books-and-ideas/">All books →</a>
    </div>
    <div style="max-width:720px">
      ${booksHtml}
    </div>
  </div>
</div>

<div class="section-block" style="background:var(--gray-light)">
  <div class="container">
    <div class="magazine-contribute-block">
      <div class="magazine-contribute-poster">
        <img src="/assets/images/magazine-cover.jpg" alt="VSG Digital Art Magazine — Submit your reflections" loading="lazy">
      </div>
      <div class="magazine-contribute-text">
        <p class="section-label">Contribute</p>
        <h2 class="section-title">Share your work or research</h2>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.8;color:var(--gray-text);margin:1rem 0 1.5rem">We are opening a space for reflection and collective thinking. This is an invitation to all artists to share their thoughts in writing — on exhibitions, books, projects, or practice. Any length. Any language.</p>
        <a href="https://forms.gle/usHJPEGHajfUXFjh8" class="btn btn-primary" target="_blank" rel="noopener">Submit your reflections</a>
      </div>
    </div>
  </div>
</div>
`;

  return baseTemplate({
    title: 'Magazine',
    description: 'VSG Digital Art Magazine — exhibition reviews, books, projects and reflections by artists.',
    body,
    activePage: 'magazine'
  });
}

// ---- MAGAZINE SECTION PAGES ----

function buildMagazineSection({ sectionTitle, sectionSlug, articles, intro }) {
  const articleCards = articles.map(a => articleCard({
    title: a.title,
    date: a.date,
    section: a.section,
    excerpt: a.excerpt,
    cover: a.cover || null,
    url: `/magazine/${sectionSlug}/${a.slug}/`
  })).join('\n');

  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">VSG Magazine</p>
    <h1>${sectionTitle}</h1>
    ${intro ? `<p class="intro">${intro}</p>` : ''}
  </div>
</div>

<div class="magazine-section">
  <div class="container">
    <div class="section-tabs">
      <a href="/magazine/" class="section-tab">All</a>
      <a href="/magazine/exhibitions-and-encounters/" class="section-tab${sectionSlug === 'exhibitions-and-encounters' ? ' active' : ''}">Exhibitions & Encounters</a>
      <a href="/magazine/books-and-ideas/" class="section-tab${sectionSlug === 'books-and-ideas' ? ' active' : ''}">Books & Ideas</a>
      <a href="/magazine/projects-and-research/" class="section-tab${sectionSlug === 'projects-and-research' ? ' active' : ''}">Projects & Research</a>
      <a href="/magazine/reflections/" class="section-tab${sectionSlug === 'reflections' ? ' active' : ''}">Reflections</a>
      <a href="/magazine/artist-presentations/" class="section-tab${sectionSlug === 'artist-presentations' ? ' active' : ''}">Artist Presentations</a>
    </div>

    <div style="margin-top:1rem;margin-bottom:2rem;text-align:right">
      <a href="https://forms.gle/usHJPEGHajfUXFjh8" class="submit-cta" target="_blank" rel="noopener">Submit / Contribute</a>
    </div>

    ${articles.length > 0 ? `<div class="grid-3">${articleCards}</div>` : '<p style="color:var(--gray-text);font-family:var(--font-mono);font-size:0.8rem">No articles yet in this section.</p>'}
  </div>
</div>
`;

  return baseTemplate({
    title: sectionTitle,
    description: `${sectionTitle} — VSG Digital Art Magazine`,
    body,
    activePage: 'magazine'
  });
}

// ---- BOOKS & IDEAS SECTION ----

function buildBooksAndIdeas(books) {
  const booksHtml = books.map(b => `
<div class="book-card">
  <div class="book-title">${b.title}</div>
  <div class="book-author">${b.author}</div>
  <p class="book-desc">${b.body.replace(/<[^>]+>/g, '')}</p>
</div>`).join('');

  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">VSG Magazine</p>
    <h1>Books & Ideas</h1>
    <p class="intro">This section invites recommendations and reflections on books, texts, or ideas that have influenced artistic thinking. By sharing what we read and think about, we connect our individual practices to wider worlds of knowledge and imagination.</p>
  </div>
</div>

<div class="magazine-section">
  <div class="container">
    <div class="section-tabs">
      <a href="/magazine/" class="section-tab">All</a>
      <a href="/magazine/exhibitions-and-encounters/" class="section-tab">Exhibitions & Encounters</a>
      <a href="/magazine/books-and-ideas/" class="section-tab active">Books & Ideas</a>
      <a href="/magazine/projects-and-research/" class="section-tab">Projects & Research</a>
      <a href="/magazine/reflections/" class="section-tab">Reflections</a>
      <a href="/magazine/artist-presentations/" class="section-tab">Artist Presentations</a>
    </div>

    <div style="margin-top:1rem;margin-bottom:2.5rem;text-align:right">
      <a href="https://forms.gle/usHJPEGHajfUXFjh8" class="submit-cta" target="_blank" rel="noopener">Submit a book recommendation</a>
    </div>

    <div style="max-width:760px">
      <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.75;color:var(--gray-text);margin-bottom:2.5rem">Books shape how we see. Here we share what we're reading — not reviews, but honest encounters with books that have changed how we think about making, being, and existing as artists in the world.</p>
      ${booksHtml}
    </div>
  </div>
</div>
`;

  return baseTemplate({
    title: 'Books & Ideas',
    description: 'Book recommendations from the VSG artist community — what we\'re reading and why.',
    body,
    activePage: 'magazine'
  });
}

// ---- REFLECTIONS SECTION ----

function buildReflections(reflections) {
  const articleCards = reflections.map(a => articleCard({
    title: a.title,
    date: a.date,
    section: a.section,
    excerpt: a.excerpt,
    cover: a.cover || null,
    url: `/magazine/reflections/${a.slug}/`
  })).join('\n');

  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">VSG Magazine — Reflections</p>
    <h1>How do contemporary artists think?</h1>
    <p class="intro">A living archive — built in real time, one artist at a time. Every response is a timestamp: what artists think now, how they work now, what they are making now.</p>
  </div>
</div>

<div class="section-block" style="background:var(--gray-light)">
  <div class="container">
    <div class="reflections-intro-grid">
      <div class="reflections-intro-image">
        <img src="/assets/images/reflections-poster.jpg" alt="How do contemporary artists think? A living archive built in real time." loading="lazy">
      </div>
      <div class="reflections-intro-text">
        <p class="section-label">The Archive</p>
        <h2 class="section-title">Three questions. Every artist. No deadline.</h2>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.8;color:var(--gray-text);margin-bottom:1.5rem">
          This section exists because no one is systematically recording how working artists actually think — not critics, not institutions, not algorithms. We are. Each contribution is a document: a single artist's perspective, at a specific moment in time, answering the same three questions every contributor answers.
        </p>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.8;color:var(--gray-text);margin-bottom:2rem">
          In ten years, this will be a genuine archive of contemporary artistic thought. The first responses matter most. They are the foundation.
        </p>

        <div class="reflections-questions">
          <div class="reflection-question">
            <span class="reflection-q-number">01</span>
            <p class="reflection-q-text">What is good artwork?</p>
          </div>
          <div class="reflection-question">
            <span class="reflection-q-number">02</span>
            <p class="reflection-q-text">What does it mean to be a successful artist today?</p>
          </div>
          <div class="reflection-question">
            <span class="reflection-q-number">03</span>
            <p class="reflection-q-text">What is the project you are working on right now?</p>
          </div>
        </div>

        <div style="margin-top:2.5rem;padding:1.5rem;border:1px solid var(--gray-mid);background:white">
          <p style="font-family:var(--font-mono);font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:0.75rem">Contribute your reflection</p>
          <p style="font-family:var(--font-serif);font-size:0.9rem;color:var(--gray-text);line-height:1.6;margin-bottom:1.25rem">Open to any working artist. Answer in your own language. Any length. No image required — though you are welcome to include one. Your response will be published here with your name and the date.</p>
          <a href="https://forms.gle/usHJPEGHajfUXFjh8" class="btn btn-primary" target="_blank" rel="noopener">Submit your reflection</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="magazine-section">
  <div class="container">
    <div class="section-tabs">
      <a href="/magazine/" class="section-tab">All</a>
      <a href="/magazine/exhibitions-and-encounters/" class="section-tab">Exhibitions & Encounters</a>
      <a href="/magazine/books-and-ideas/" class="section-tab">Books & Ideas</a>
      <a href="/magazine/projects-and-research/" class="section-tab">Projects & Research</a>
      <a href="/magazine/reflections/" class="section-tab active">Reflections</a>
      <a href="/magazine/artist-presentations/" class="section-tab">Artist Presentations</a>
    </div>

    ${reflections.length > 0
      ? `<div class="grid-3">${articleCards}</div>`
      : `<div style="padding:3rem 0;text-align:center">
          <p style="font-family:var(--font-mono);font-size:0.8rem;letter-spacing:0.06em;text-transform:uppercase;color:var(--gray-text);margin-bottom:0.75rem">No responses yet</p>
          <p style="font-family:var(--font-serif);font-size:1rem;color:var(--gray-text)">Be among the first artists in this archive.</p>
          <a href="https://forms.gle/usHJPEGHajfUXFjh8" class="btn btn-primary" style="margin-top:1.25rem;display:inline-block" target="_blank" rel="noopener">Submit your reflection</a>
        </div>`
    }
  </div>
</div>
`;

  return baseTemplate({
    title: 'Reflections',
    description: 'A living archive of how contemporary artists think — three questions, answered by artists from around the world.',
    body,
    activePage: 'magazine'
  });
}

// ---- ARTICLE PAGE ----

function buildArticle(article, sectionSlug) {
  const coverHtml = article.cover
    ? `<div class="article-cover"><img src="${article.cover}" alt="${article.title}"></div>`
    : '';

  // Auto-gallery: scan for main gallery and named sub-galleries
  // Main: assets/images/gallery/[slug]/  → label "Exhibition Photos"
  // Sub:  assets/images/gallery/[slug]-[name]/ → label derived from [name]
  const galleryBase = path.join('assets', 'images', 'gallery');
  let galleryHtml = '';
  if (fs.existsSync(galleryBase)) {
    const allDirs = fs.readdirSync(galleryBase)
      .filter(d => d === article.slug || d.startsWith(article.slug + '-'))
      .sort();
    let offset = 0;
    const grids = allDirs.map(dir => {
      const dirPath = path.join(galleryBase, dir);
      const images = fs.readdirSync(dirPath)
        .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
        .sort();
      if (images.length === 0) return '';
      const suffix = dir === article.slug ? '' : dir.slice(article.slug.length + 1);
      const label = suffix === ''
        ? 'Exhibition Photos'
        : suffix.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const imgs = images.map((f, i) => {
        const caption = f.replace(/^\d+-/, '').replace(/\.[^.]+$/, '')
          .split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return `<figure class="gallery-thumb" data-index="${offset + i}" data-caption="${caption}" aria-label="View ${caption}">
  <img src="/assets/images/gallery/${dir}/${f}" alt="${caption}" loading="lazy">
  <figcaption class="gallery-caption">${caption}</figcaption>
</figure>`;
      }).join('\n');
      offset += images.length;
      return `<div class="article-gallery">
  <p class="section-label" style="margin-bottom:1.5rem">${label}</p>
  <div class="gallery-grid">${imgs}</div>
</div>`;
    }).filter(Boolean).join('\n\n');

    if (grids) {
      galleryHtml = grids + `
<div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-hidden="true">
  <button class="lightbox-close" aria-label="Close">&times;</button>
  <button class="lightbox-prev" aria-label="Previous">&#8592;</button>
  <button class="lightbox-next" aria-label="Next">&#8594;</button>
  <div class="lightbox-img-wrap"><img id="lightbox-img" src="" alt=""></div>
  <div class="lightbox-counter"></div>
</div>`;
    }
  }

  const videoHtml = article.video
    ? `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:2em 0">
        <iframe src="https://www.youtube.com/embed/${article.video.split('/').pop().split('?')[0]}"
          style="position:absolute;top:0;left:0;width:100%;height:100%;border:none"
          allowfullscreen loading="lazy" title="${article.title}"></iframe>
      </div>`
    : '';

  const instagramHtml = article.instagram
    ? `<div class="instagram-embed">
        <blockquote class="instagram-media" data-instgrm-captioned
          data-instgrm-permalink="${article.instagram}"
          data-instgrm-version="14">
        </blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      </div>`
    : '';

  const body = `
<div class="article-body">
  <div class="article-header">
    <p class="section-label"><a href="/magazine/${sectionSlug}/" style="color:inherit">${article.section}</a></p>
    <h1>${article.title}</h1>
    <div class="article-meta">
      ${article.author ? `<span class="article-meta-item">By ${article.author}</span>` : ''}
      <time class="article-meta-item" datetime="${article.date}">${formatDate(article.date)}</time>
    </div>
  </div>

  ${coverHtml}
  ${videoHtml}

  <div class="article-text">
    ${article.body}
  </div>

  ${instagramHtml}
</div>

${galleryHtml}
`;

  return baseTemplate({
    title: article.title,
    description: article.excerpt || '',
    body,
    activePage: 'magazine'
  });
}

// ---- MEETINGS LIST PAGE ----

function buildMeetings(meetings) {
  const items = meetings.map(m => `<a href="/meetings/${m.slug}/" class="meeting-item">
  <time class="meeting-date">${formatDate(m.date)}</time>
  <div class="meeting-title">${m.title}</div>
  ${m.excerpt ? '<p class="meeting-excerpt">' + m.excerpt + '</p>' : ''}
</a>`).join('');

  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">Community</p>
    <h1>Meeting Notes</h1>
    <p class="intro">VSG meets every Sunday evening. These are summaries of what we talked about — for members who missed a session, and for anyone curious about how the community works.</p>
  </div>
</div>

<div class="section-block">
  <div class="container" style="max-width:760px">
    ${meetings.length > 0
      ? '<div class="meeting-list">' + items + '</div>'
      : '<p style="font-family:var(--font-mono);font-size:0.8rem;color:var(--gray-text)">Meeting notes coming soon.</p>'
    }
  </div>
</div>
`;

  return baseTemplate({
    title: 'Meeting Notes',
    description: 'VSG meeting summaries — what we talked about each Sunday.',
    body,
    activePage: 'community'
  });
}

function buildMeetingPage(meeting) {
  const body = `
<div class="article-body">
  <div class="article-header">
    <p class="section-label"><a href="/meetings/" style="color:inherit">Meeting Notes</a></p>
    <h1>${meeting.title}</h1>
    <div class="article-meta">
      <time class="article-meta-item" datetime="${meeting.date}">${formatDate(meeting.date)}</time>
    </div>
  </div>
  <div class="article-text">
    ${meeting.body}
  </div>
</div>
`;

  return baseTemplate({
    title: meeting.title,
    description: meeting.excerpt || 'VSG meeting notes',
    body,
    activePage: 'community'
  });
}

// ---- PROJECTS PAGE ----

function buildProjects(reflections) {
  const dreamImages = [
    '635c6c47-85ba-4bdf-8be9-b057a20dfe49_1_102_o.jpeg',
    '6d42ff9d-de87-4f2d-88ed-dea288cf8751_1_201_a.jpeg',
    '59d2247f-c08d-4d91-9073-af018a9c40ad_1_201_a.jpeg',
    '4db3371a-0dd4-4d85-b6c2-98413a5a72e1_1_102_o.jpeg',
    'f19a01dc-d7fa-4f77-92cc-97a04258fade.jpeg',
    'd5407804-cceb-4627-a48a-80d38cfad056.jpeg',
    '35c03956-6a12-4b66-a432-cf1560820de1.jpeg',
    '46eb8a1a-ebac-40e6-978d-af75b55d493f.jpeg',
    '9667d997-be52-4b2a-ae34-d06f9ba580ce.jpeg',
    '08bd1034-f7bc-41f0-bbc7-46e544ee5e8a.jpeg',
    '27ae890f-5916-41f7-a484-f97e47b8f850.jpeg',
    '8611317f-29e6-4912-9136-bb75e8a54747.jpeg',
    '89e179ce-d384-4f5b-aff3-6f26b7bc13b4_1_102_o.jpeg',
    '4e061fc0-a265-4163-b0c4-4bbccb85b2c0_1_201_a.jpeg',
    '33afc3ab-a200-4deb-a640-fddb9a00b193.jpeg',
    '5d65206e-14f6-409a-909e-7f1c7896e51b_1_102_o.jpeg',
    'ab6254b1-1137-4834-a95c-86b76d4b7ff1.jpeg',
    '868c658e-88b6-4c33-8ae8-0ba4321df2eb_1_201_a.jpeg',
    'eef98f48-fc68-4616-ad22-53a89602672f_1_102_o.jpeg',
    '15f9bdb8-b172-4869-a24e-1228af3ccc14.jpg',
    'b9f2caf1-b116-4bc8-9eb8-34d4181a0404.jpg',
    'b3ffd139-99b2-4cc6-9ea9-4b954f57e13a.jpg',
  ];

  const dreamArtists = [
    'Gordana Žikić','Bosko Begovic','Theresa Wilshusen','Ilija Dincic',
    'Raymond Watson','Cassandra Stubbington','Ylva Eklöf','Paula Elion',
    'Predrag Damjanovic','Elena Greta Falcini','Kai Rennes','Juan David Gallindo',
    'Juan Antonio Cerezuela','Juan Pablo Meneses','Katarina Rasic','Zey Öztaşdelen',
    'Genevieve Leavold','Åsa Ekman','Seb Bradshaw','River Reishi','Rosie Hearne'
  ];

  const dreamGrid = dreamImages.map((img, i) => {
    const artist = dreamArtists[i] || '';
    return `<div class="dream-item" title="${artist}">
  <img src="/assets/images/dreams/${img}" alt="${artist ? 'Dream image by ' + artist : 'Dream archive image'}" loading="lazy">
</div>`;
  }).join('\n');

  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">Projects</p>
    <h1>Ongoing projects of Virtual Studio Groups</h1>
    <p class="intro">Collaborative projects that grow from our community — archives, exhibitions, and open invitations to participate.</p>
  </div>
</div>

<div class="section-block">
  <div class="container">
    <div class="grid-2" style="gap:4rem;align-items:start">
      <div>
        <p class="section-label">Open Archive</p>
        <h2 class="section-title">DREAMS</h2>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.75;color:var(--gray-text);margin-bottom:1rem">This project began with the exhibition <em>Dreams</em>, Juxtapose Art Fair, Aarhus, Denmark, June 2025 — a collective wall of dream images.</p>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.75;color:var(--gray-text);margin-bottom:1rem">Now it continues as an open, ongoing archive. We invite artists to send us their dream images: at least one, or a series. The only requirement is a <strong>square format</strong> (so it can be printed on Instax photo paper and added to the collective wall in future exhibitions).</p>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.75;color:var(--gray-text);margin-bottom:1.5rem">Each image can stand alone as a glimpse into one artist's interior landscape — yet together they form a collective dream. This is a living project, always expanding, like dreams themselves: unfinished, open-ended, and constantly transforming.</p>

        <div style="border:1px solid var(--gray-mid);padding:1.5rem;margin-bottom:1.5rem">
          <h3 style="font-size:0.875rem;font-weight:700;margin-bottom:0.75rem;font-family:var(--font-mono);letter-spacing:0.06em;text-transform:uppercase">How to participate</h3>
          <ul style="font-size:0.875rem;color:var(--gray-text);padding-left:1.25em;line-height:1.75">
            <li>Send at least one square-format image (or more, as a series).</li>
            <li>The image can be anything you consider a dream: a photo of an artwork, a spontaneous photo shot, a digital collage, an object, something symbolic, abstract, or deeply personal.</li>
            <li>Please include a link to your website or Instagram.</li>
          </ul>
        </div>

        <a href="mailto:virtualstudiogroups@gmail.com" class="btn btn-primary">Send your dream image</a>

        <p style="margin-top:1.5rem;font-family:var(--font-serif);font-style:italic;font-size:0.875rem;color:var(--gray-text)">In time, this growing collection may evolve into new exhibitions, seasonal themes (Nightmare, Recurring Dream, Forgotten Dream, Collective Dream), or even a printed book — a tactile dream object. A wall of dreams, slowly unfolding.</p>
      </div>
      <div>
        <div class="dreams-grid">
          ${dreamGrid}
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section-block" style="background:var(--gray-light)">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start;margin-bottom:3rem">
      <div>
        <a href="/magazine/reflections/" style="display:block">
          <img src="/assets/images/reflections-poster.jpg" alt="Reflections Archive — How do contemporary artists think?" loading="lazy" style="width:100%;display:block">
        </a>
      </div>
      <div>
        <p class="section-label">Ongoing Project</p>
        <h2 class="section-title" style="margin-bottom:1.25rem">Reflections Archive</h2>
        <p style="font-family:var(--font-serif);font-size:1rem;line-height:1.75;color:var(--gray-text);margin-bottom:1.5rem">Three questions. Every artist answers the same three questions. Together, the responses form a living archive of how contemporary artists actually think — built in real time, one artist at a time.</p>
        <div style="margin-bottom:2rem">
          <p style="font-family:var(--font-mono);font-size:0.8rem;color:var(--gray-text);margin-bottom:0.5rem">01 &nbsp; What is good artwork?</p>
          <p style="font-family:var(--font-mono);font-size:0.8rem;color:var(--gray-text);margin-bottom:0.5rem">02 &nbsp; What does it mean to be a successful artist today?</p>
          <p style="font-family:var(--font-mono);font-size:0.8rem;color:var(--gray-text)">03 &nbsp; What project are you working on right now?</p>
        </div>
        <div style="display:flex;gap:1rem;flex-wrap:wrap">
          <a href="/magazine/reflections/" class="btn btn-primary">Read the archive</a>
          <a href="https://forms.gle/usHJPEGHajfUXFjh8" class="btn btn-secondary" target="_blank" rel="noopener">Contribute your reflection</a>
        </div>
      </div>
    </div>
    ${reflections.length > 0
      ? '<div class="grid-3">' + reflections.slice(0, 3).map(a => articleCard({
          title: a.title,
          date: a.date,
          section: a.section,
          excerpt: a.excerpt,
          cover: a.cover || null,
          url: '/magazine/reflections/' + a.slug + '/'
        })).join('') + '</div>'
      : ''
    }
  </div>
</div>
`;

  return baseTemplate({
    title: 'Projects',
    description: 'Ongoing projects of Virtual Studio Groups — the DREAMS archive and future collaborations.',
    body,
    activePage: 'projects'
  });
}

// ---- EVENTS PAGE ----

function buildEvents(events) {
  const upcoming = events.filter(e => e.status === 'upcoming');
  const past = events.filter(e => e.status === 'past');

  function eventCard(e) {
    const d = new Date(e.date_start);
    const month = d.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase();
    const year = d.getFullYear();
    const dateRange = e.date_end
      ? `${d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })} – ${new Date(e.date_end).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`
      : formatDate(e.date_start);

    const imageHtml = e.image
      ? `<div class="event-card-image"><img src="${e.image}" alt="${e.title}" loading="lazy"></div>`
      : '';

    const inner = `
  ${imageHtml}
  <div class="event-card-body">
    <div class="event-date-block">
      <span class="month">${month}</span>
      <span class="year">${year}</span>
    </div>
    <div>
      <div class="event-title">${e.title}</div>
      <div class="event-location">${e.venue} &nbsp;·&nbsp; ${e.location}</div>
      <p class="event-desc">${e.description}</p>
      <p style="font-family:var(--font-mono);font-size:0.72rem;color:var(--gray-text);margin-top:0.4rem">${dateRange}${e.artists_count ? ` &nbsp;·&nbsp; ${e.artists_count} artists` : ''}</p>
      <span class="event-status ${e.status}">${e.status}</span>
      ${e.article_link ? `<br><span style="font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.06em;text-transform:uppercase;color:var(--accent);margin-top:0.5rem;display:inline-block">Read review →</span>` : ''}
    </div>
  </div>`;

    return e.article_link
      ? `<a href="${e.article_link}" class="event-card event-card-link">${inner}</a>`
      : `<div class="event-card">${inner}</div>`;
  }

  const upcomingHtml = upcoming.length > 0
    ? upcoming.map(eventCard).join('')
    : '<p style="font-family:var(--font-mono);font-size:0.8rem;color:var(--gray-text)">No upcoming events currently scheduled. Check back soon or follow us on Instagram.</p>';

  const pastHtml = past.map(eventCard).join('');

  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">Events</p>
    <h1>Exhibitions & Events</h1>
    <p class="intro">From Denmark to Spain, from Stockholm to Valencia — VSG artists meet online but exhibit worldwide.</p>
  </div>
</div>

<div class="section-block">
  <div class="container">
    <h2 class="section-title" style="font-size:1.25rem;margin-bottom:1.5rem">Upcoming</h2>
    ${upcomingHtml}

    <hr class="divider" style="margin:3rem 0">

    <h2 class="section-title" style="font-size:1.25rem;margin-bottom:1.5rem">Archive</h2>
    ${pastHtml}
  </div>
</div>
`;

  return baseTemplate({
    title: 'Events',
    description: 'VSG exhibitions and events — from Denmark to Spain, online and worldwide.',
    body,
    activePage: 'events'
  });
}

// ---- NETWORK PAGE ----

function buildNetwork() {
  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">Network</p>
    <h1>Partners &amp; Collaborations</h1>
    <p class="intro">VSG exists within a wider ecosystem of artist-run spaces, residencies, and peer networks. These are the organisations we are most closely connected to — through shared founding, ongoing exchange, and a common belief in what art communities can be.</p>
  </div>
</div>

<div class="section-block">
  <div class="container">
    <div class="network-org">
      <div class="network-org-header">
        <div>
          <p class="section-label">Co-founded by VSG · Belgrade, Serbia · Est. 2012</p>
          <h2 class="section-title">Belgrade Artist in Residence (BAIR)</h2>
        </div>
        <a href="https://belgradeartistinresidence.wordpress.com" class="btn btn-outline" target="_blank" rel="noopener">Visit BAIR →</a>
      </div>

      <p style="font-family:var(--font-serif);font-size:1.05rem;line-height:1.8;color:var(--gray-text);margin-bottom:1.5rem">Belgrade Artist in Residence is a self-directed, tailor-made residency hosted by Center424 — an artist-run non-profit at the heart of Belgrade's independent art scene. Since 2012, BAIR has offered artists from around the world a residency that adapts to how artists actually work today.</p>

      <p style="font-family:var(--font-serif);font-size:1.05rem;line-height:1.8;color:var(--gray-text);margin-bottom:2rem">BAIR is hybrid: a physical base in Belgrade, extended by an active virtual community that keeps the exchange alive long after the residency ends. That virtual community is Virtual Studio Groups. VSG is not an add-on to the residency — it is built into its structure.</p>

      <div class="network-pillars">
        <div class="network-pillar">
          <div class="network-pillar-n">01</div>
          <h3>In-person residency in Belgrade</h3>
          <p>Studio time, city immersion, curatorial support, and on-ground community in Serbia's most active arts neighbourhood.</p>
        </div>
        <div class="network-pillar">
          <div class="network-pillar-n">02</div>
          <h3>Virtual Studio Groups (VSG)</h3>
          <p>Weekly two-hour sessions with approximately sixty curated international artists. Feedback, collaboration, and continuity — from anywhere in the world.</p>
        </div>
        <div class="network-pillar">
          <div class="network-pillar-n">03</div>
          <h3>Exchange with The Local AIR, Valencia</h3>
          <p>An ongoing partnership providing reciprocal opportunities for artists between Belgrade and Valencia, Spain.</p>
        </div>
      </div>

      <div class="network-meta">
        <p>BAIR is artist-run and self-supported. Artists cover program fees and living costs; the team provides conceptual guidance, project feedback, documentation support, and invitation letters for grant applications.</p>
        <p style="margin-top:0.75rem"><strong>Apply or enquire:</strong> <a href="mailto:belgradeair@gmail.com">belgradeair@gmail.com</a></p>
      </div>
    </div>
  </div>
</div>

<div class="section-block" style="background:var(--gray-light)">
  <div class="container">
    <div class="network-org">
      <div class="network-org-header">
        <div>
          <p class="section-label">Exhibition partner · Valencia, Spain</p>
          <h2 class="section-title">The Local AIR Valencia</h2>
        </div>
        <a href="https://thelocalairvalencia.weebly.com" class="btn btn-outline" target="_blank" rel="noopener">Visit The Local AIR →</a>
      </div>

      <p style="font-family:var(--font-serif);font-size:1.05rem;line-height:1.8;color:var(--gray-text);margin-bottom:1.5rem">The Local AIR Valencia is an artist-run workshop, gallery, and artist residency in Valencia, Spain. Founded and directed by Dr. Theresa Wilshusen — a multidisciplinary artist, curator, and VSG member — it promotes artistic and cultural exchange by connecting the local community in Valencia with international artists.</p>

      <p style="font-family:var(--font-serif);font-size:1.05rem;line-height:1.8;color:var(--gray-text);margin-bottom:1.5rem">In February 2026, The Local AIR Valencia hosted <em>El agua nos llama</em> — the first VSG group exhibition in Spain. Fifteen artists, fifteen relationships with water. The space has also shown solo work by individual VSG members, and the connection between our communities continues to grow.</p>

      <div class="network-meta">
        <p>The residency is self-directed and free to apply. Artists have access to a shared studio, accommodation, exhibition opportunities in the gallery, and connection to Valencia's emerging art scene.</p>
        <p style="margin-top:0.75rem"><strong>Director &amp; curator:</strong> Dr. Theresa Wilshusen</p>
      </div>
    </div>
  </div>
</div>

<div class="section-block">
  <div class="container">
    <div class="join-block">
      <h2>Interested in collaborating?</h2>
      <p>If you run an artist-run space, residency, or peer network and are interested in exchange — we would like to hear from you.</p>
      <a href="mailto:virtualstudiogroups@gmail.com" class="btn btn-primary">virtualstudiogroups@gmail.com</a>
    </div>
  </div>
</div>
`;

  return baseTemplate({
    title: 'Network',
    description: 'VSG partner organisations — Belgrade Artist in Residence (BAIR) and The Local AIR Valencia.',
    body,
    activePage: 'network'
  });
}

// ---- RESOURCES PAGE ----

function buildResources() {
  const sections = [
    {
      title: 'Artist Residencies',
      items: [
        { name: 'Resartis', url: 'https://resartis.org', desc: 'The global network of artist residencies. Search hundreds of open calls, programs, and opportunities worldwide.' },
        { name: 'TransArtists', url: 'https://www.transartists.org', desc: 'Information on artist residencies and exchanges — one of the most comprehensive databases available.' },
        { name: 'ArtConnect', url: 'https://www.artconnect.com', desc: 'Platform connecting artists with opportunities: residencies, open calls, exhibitions, and grants.' },
      ]
    },
    {
      title: 'Funding & Grants',
      items: [
        { name: 'Creative Europe', url: 'https://culture.ec.europa.eu/creative-europe', desc: 'EU funding programme for the cultural and creative sectors. Supports projects, mobility, and co-productions.' },
        { name: 'Artsy Open Calls', url: 'https://www.artsy.net/articles/artsy-editorial-open-calls', desc: 'Regularly updated list of open calls for artists — exhibitions, prizes, residencies, and publications.' },
      ]
    },
    {
      title: 'Artist Communities & Networks',
      items: [
        { name: 'Virtual Studio Groups', url: 'https://virtualstudiogroups.github.io', desc: 'Our own peer community — Sunday meetings, artist interviews, and collective projects. You are already here.' },
        { name: 'AIR Exchange Network', url: 'https://airexchangenetwork.wordpress.com', desc: 'Sister site to VSG. A network focused on artist residency exchanges and international artistic collaboration.' },
      ]
    }
  ];

  const sectionsHtml = sections.map(s => `
<div class="resources-section">
  <h2>${s.title}</h2>
  ${s.items.map(item => `
  <div class="resource-item">
    <div>
      <div class="resource-name"><a href="${item.url}" target="_blank" rel="noopener">${item.name}</a></div>
      <div class="resource-desc">${item.desc}</div>
    </div>
    <a href="${item.url}" class="resource-link" target="_blank" rel="noopener">Visit →</a>
  </div>`).join('')}
</div>`).join('');

  const body = `
<div class="page-hero">
  <div class="container">
    <p class="section-label">Resources</p>
    <h1>Useful links for artists</h1>
    <p class="intro">A curated list of tools, platforms, and organisations that VSG members find genuinely useful — residencies, funding, open calls, and communities.</p>
  </div>
</div>

<div class="section-block">
  <div class="container" style="max-width:800px">
    ${sectionsHtml}
  </div>
</div>
`;

  return baseTemplate({
    title: 'Resources',
    description: 'Curated links for artists — residencies, grants, open calls, and communities.',
    body,
    activePage: 'resources'
  });
}

// ---- MAIN BUILD ----

function build() {
  console.log('Building VSG website...');

  // Read content
  const aboutRaw = fm(readFile('content/about.md'));
  const aboutContent = marked(aboutRaw.body);

  const exhibitions = readMarkdownFiles('content/magazine/exhibitions');
  const booksAndIdeas = readMarkdownFiles('content/magazine/books-and-ideas');
  const projectsResearch = readMarkdownFiles('content/magazine/projects-and-research');
  const reflections = readMarkdownFiles('content/magazine/reflections');
  const presentations = readMarkdownFiles('content/magazine/artist-presentations');
  const meetings = readMarkdownFiles('content/meetings');
  const artists = JSON.parse(readFile('content/artists.json'));
  const events = JSON.parse(readFile('content/events.json'));

  // Copy assets
  copyDir('assets', 'dist/assets');

  // Home
  writeFile('dist/index.html', buildHome(exhibitions, projectsResearch, events, presentations));
  console.log('  ✓ index.html');

  // Community
  writeFile('dist/community/index.html', buildCommunity(aboutContent, meetings));
  console.log('  ✓ community/index.html');

  // Artists
  writeFile('dist/artists/index.html', buildArtists(artists));
  console.log('  ✓ artists/index.html');

  // Magazine index
  writeFile('dist/magazine/index.html', buildMagazineIndex(exhibitions, booksAndIdeas, projectsResearch, reflections, presentations));
  console.log('  ✓ magazine/index.html');

  // Magazine sections
  writeFile('dist/magazine/exhibitions-and-encounters/index.html', buildMagazineSection({
    sectionTitle: 'Exhibitions & Encounters',
    sectionSlug: 'exhibitions-and-encounters',
    articles: exhibitions,
    intro: 'Reviews, impressions, and photo essays from exhibitions that VSG artists visited or organised.'
  }));
  console.log('  ✓ magazine/exhibitions-and-encounters/index.html');

  writeFile('dist/magazine/books-and-ideas/index.html', buildBooksAndIdeas(booksAndIdeas));
  console.log('  ✓ magazine/books-and-ideas/index.html');

  writeFile('dist/magazine/projects-and-research/index.html', buildMagazineSection({
    sectionTitle: 'Projects & Research',
    sectionSlug: 'projects-and-research',
    articles: projectsResearch,
    intro: 'Artists sharing their ongoing projects, writings, and artistic research — process-based, in the open.'
  }));
  console.log('  ✓ magazine/projects-and-research/index.html');

  writeFile('dist/magazine/reflections/index.html', buildReflections(reflections));
  console.log('  ✓ magazine/reflections/index.html');

  writeFile('dist/magazine/artist-presentations/index.html', buildMagazineSection({
    sectionTitle: 'Artist Presentations',
    sectionSlug: 'artist-presentations',
    articles: presentations,
    intro: 'Detailed write-ups of artist presentations from VSG sessions — practice, process, and conversation.'
  }));
  console.log('  ✓ magazine/artist-presentations/index.html');

  // Individual article pages
  const sectionMap = {
    exhibitions: 'exhibitions-and-encounters',
    projectsResearch: 'projects-and-research',
    reflections: 'reflections',
  };

  for (const article of exhibitions) {
    writeFile(`dist/magazine/exhibitions-and-encounters/${article.slug}/index.html`, buildArticle(article, 'exhibitions-and-encounters'));
    console.log(`  ✓ magazine/exhibitions-and-encounters/${article.slug}/`);
  }

  for (const article of projectsResearch) {
    writeFile(`dist/magazine/projects-and-research/${article.slug}/index.html`, buildArticle(article, 'projects-and-research'));
    console.log(`  ✓ magazine/projects-and-research/${article.slug}/`);
  }

  for (const article of reflections) {
    writeFile(`dist/magazine/reflections/${article.slug}/index.html`, buildArticle(article, 'reflections'));
    console.log(`  ✓ magazine/reflections/${article.slug}/`);
  }

  for (const article of presentations) {
    writeFile(`dist/magazine/artist-presentations/${article.slug}/index.html`, buildArticle(article, 'artist-presentations'));
    console.log(`  ✓ magazine/artist-presentations/${article.slug}/`);
  }

  // Projects
  writeFile('dist/projects/index.html', buildProjects(reflections));
  console.log('  ✓ projects/index.html');

  // Meetings
  writeFile('dist/meetings/index.html', buildMeetings(meetings));
  console.log('  ✓ meetings/index.html');
  for (const meeting of meetings) {
    writeFile(`dist/meetings/${meeting.slug}/index.html`, buildMeetingPage(meeting));
    console.log(`  ✓ meetings/${meeting.slug}/`);
  }

  // Events
  writeFile('dist/events/index.html', buildEvents(events));
  console.log('  ✓ events/index.html');

  // Network
  writeFile('dist/network/index.html', buildNetwork());
  console.log('  ✓ network/index.html');

  // Resources
  writeFile('dist/resources/index.html', buildResources());
  console.log('  ✓ resources/index.html');

  // Copy admin CMS panel
  copyDir('public/admin', 'dist/admin');
  console.log('  ✓ admin/');

  console.log('\nBuild complete → dist/');
}

build();
