import { navbar } from "../components/navbar";
import { footer } from "../components/footer";
import { clientScript } from "../components/scripts";
import { globalStyles } from "../components/styles";
import { footerData, socialData } from "../data/landing";
import {
  portfolioProjects,
  categories,
  portfolioStats,
} from "../data/portfolio";
import type { Project, ProjectCategory } from "../data/portfolio";

// ── Portfolio-specific styles ──
const portfolioStyles: string = `

  /* ── PORTFOLIO HERO ── */
  .porto-hero {
    position: relative;
    padding: 10rem 4rem 5rem;
    background: var(--bg);
    overflow: hidden;
    border-bottom: 1px solid var(--border);
    text-align: center;
  }
  .porto-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(248,123,27,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(248,123,27,.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  }
  .porto-orb {
    position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none;
    width: 420px; height: 420px;
    top: -80px; left: 50%; transform: translateX(-50%);
    background: radial-gradient(circle, rgba(248,123,27,.12) 0%, transparent 70%);
  }
  .porto-hero-inner {
    position: relative; z-index: 1;
    max-width: 720px; margin: 0 auto;
  }
  .porto-eyebrow {
    font-family: 'Orbitron', monospace; font-size: .65rem;
    letter-spacing: .3em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 1.25rem;
    animation: fadeUp .7s ease both;
  }
  .porto-hero h1 {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1.1; color: var(--text); margin-bottom: 1.25rem;
    animation: fadeUp .8s .05s ease both;
  }
  .porto-hero h1 span { color: var(--accent); }
  .porto-hero-sub {
    font-size: 1rem; line-height: 1.8; color: var(--muted);
    margin-bottom: 3rem;
    animation: fadeUp .9s .1s ease both;
  }
  .porto-hero-stats {
    display: flex; gap: 3rem; justify-content: center; flex-wrap: wrap;
    animation: fadeUp 1s .15s ease both;
  }
  .porto-stat { text-align: center; }
  .porto-stat-num {
    font-family: 'Orbitron', monospace; font-size: 2rem;
    font-weight: 900; color: var(--accent); display: block; line-height: 1;
  }
  .porto-stat-label {
    font-size: .7rem; letter-spacing: .12em; text-transform: uppercase;
    color: var(--muted); margin-top: .3rem;
  }

  /* ── FILTER TABS ── */
  .porto-filters {
    background: var(--bg2);
    border-bottom: 1px solid var(--border);
    padding: 1.5rem 4rem;
    display: flex; align-items: center; gap: .75rem;
    flex-wrap: wrap; position: sticky; top: 72px; z-index: 10;
    backdrop-filter: blur(12px);
  }
  .filter-label {
    font-family: 'Orbitron', monospace; font-size: .6rem;
    letter-spacing: .2em; text-transform: uppercase;
    color: var(--muted); margin-right: .5rem;
  }
  .filter-btn {
    font-family: 'Orbitron', monospace; font-size: .62rem;
    font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    padding: .45rem 1.1rem;
    border: 1px solid var(--border);
    border-radius: 50px; background: transparent;
    color: var(--muted); cursor: pointer;
    transition: all .2s;
  }
  .filter-btn:hover {
    border-color: var(--accent); color: var(--text);
  }
  .filter-btn.active {
    background: var(--accent); border-color: var(--accent);
    color: var(--bg);
    box-shadow: 0 4px 16px rgba(248,123,27,.3);
  }

  /* ── PROJECT GRID ── */
  .porto-grid-section {
    background: var(--bg);
    padding: 4rem;
  }
  .porto-grid {
    max-width: 1200px; margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  /* Featured card spans 2 cols */
  .project-card.featured {
    grid-column: span 2;
  }

  .project-card {
    background: var(--bg2);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    display: flex; flex-direction: column;
    transition: border-color .3s, transform .3s, box-shadow .3s;
    cursor: pointer;
  }
  .project-card:hover {
    border-color: rgba(248,123,27,.45);
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0,0,0,.35);
  }
  .project-card[data-hidden="true"] {
    display: none;
  }

  /* Card visual area */
  .project-visual {
    position: relative;
    height: 180px;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .project-card.featured .project-visual { height: 240px; }
  .project-visual-bg {
    position: absolute; inset: 0;
    opacity: .08;
    background-size: 40px 40px;
    background-image:
      linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px);
  }
  .project-emoji {
    font-size: 3.5rem; position: relative; z-index: 1;
    filter: drop-shadow(0 8px 24px rgba(0,0,0,.4));
    transition: transform .3s;
  }
  .project-card:hover .project-emoji { transform: scale(1.1); }
  .project-featured-badge {
    position: absolute; top: 1rem; left: 1rem;
    font-family: 'Orbitron', monospace; font-size: .55rem;
    font-weight: 700; letter-spacing: .15em;
    background: var(--accent); color: var(--bg);
    padding: .3rem .75rem; border-radius: 50px;
  }
  .project-year-badge {
    position: absolute; top: 1rem; right: 1rem;
    font-family: 'Orbitron', monospace; font-size: .55rem;
    font-weight: 700; letter-spacing: .1em;
    background: rgba(0,0,0,.4); color: var(--muted);
    border: 1px solid var(--border);
    padding: .3rem .75rem; border-radius: 50px;
  }

  /* Card body */
  .project-body { padding: 1.75rem; flex: 1; display: flex; flex-direction: column; }
  .project-client {
    font-family: 'Orbitron', monospace; font-size: .6rem;
    letter-spacing: .15em; text-transform: uppercase;
    color: var(--accent); margin-bottom: .4rem;
  }
  .project-title {
    font-family: 'Syne', sans-serif; font-weight: 700;
    font-size: 1.05rem; color: var(--text); margin-bottom: .75rem;
    line-height: 1.3;
  }
  .project-desc {
    font-size: .84rem; line-height: 1.7;
    color: var(--muted); margin-bottom: 1.25rem; flex: 1;
  }
  .project-tags {
    display: flex; gap: .4rem; flex-wrap: wrap; margin-bottom: 1.25rem;
  }
  .project-tag {
    font-size: .68rem; font-family: 'Syne', sans-serif; font-weight: 600;
    padding: .25rem .65rem; border-radius: 50px;
    background: rgba(255,255,255,.05);
    border: 1px solid var(--border); color: var(--muted);
  }
  .project-results {
    display: flex; flex-direction: column; gap: .4rem;
    padding-top: 1rem; border-top: 1px solid var(--border);
  }
  .project-result {
    display: flex; align-items: center; gap: .6rem;
    font-size: .82rem; color: var(--text); font-weight: 600;
  }
  .project-result::before {
    content: '↑'; color: var(--green);
    font-family: 'Orbitron', monospace; font-size: .7rem; flex-shrink: 0;
  }

  /* ── EMPTY STATE ── */
  .porto-empty {
    display: none; text-align: center;
    padding: 5rem 2rem; max-width: 1200px; margin: 0 auto;
  }
  .porto-empty.show { display: block; }
  .porto-empty-icon { font-size: 3rem; margin-bottom: 1rem; opacity: .4; }
  .porto-empty-text {
    font-family: 'Orbitron', monospace; font-size: .8rem;
    letter-spacing: .1em; color: var(--muted);
  }

  /* ── CTA STRIP ── */
  .porto-cta {
    background: linear-gradient(135deg, var(--bg2) 0%, var(--bg) 100%);
    border-top: 1px solid var(--border);
    padding: 5rem 4rem; text-align: center;
    position: relative; overflow: hidden;
  }
  .porto-cta::before {
    content: ''; position: absolute;
    width: 400px; height: 400px; border-radius: 50%;
    background: radial-gradient(circle, rgba(248,123,27,.08) 0%, transparent 70%);
    top: 50%; left: 50%; transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .porto-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
  .porto-cta h2 {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    color: var(--text); margin-bottom: 1rem; line-height: 1.2;
  }
  .porto-cta h2 span { color: var(--accent); }
  .porto-cta p { color: var(--muted); font-size: .97rem; line-height: 1.7; margin-bottom: 2rem; }
  .porto-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .porto-hero { padding: 8rem 2rem 4rem; }
    .porto-filters { padding: 1.25rem 2rem; top: 64px; }
    .porto-grid-section { padding: 3rem 2rem; }
    .porto-grid { grid-template-columns: repeat(2, 1fr); }
    .project-card.featured { grid-column: span 2; }
    .porto-cta { padding: 4rem 2rem; }
  }
  @media (max-width: 640px) {
    .porto-grid { grid-template-columns: 1fr; }
    .project-card.featured { grid-column: span 1; }
    .porto-hero-stats { gap: 1.5rem; }
    .porto-filters { gap: .5rem; }
  }
`;

// ── Client-side filter script ──
const portfolioScript: string = `
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  const emptyState = document.getElementById('porto-empty');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-cat');

      let visible = 0;
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const show = cat === 'All' || cardCat === cat;
        card.setAttribute('data-hidden', show ? 'false' : 'true');
        if (show) visible++;
      });

      if (emptyState) {
        emptyState.classList.toggle('show', visible === 0);
      }
    });
  });
`;

// ── Page shell ──
const pageShell = (content: string): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="InsightFlow Portfolio — Real results for real local businesses in Surabaya and across East Java." />
  <meta property="og:title" content="Portfolio — InsightFlow" />
  <meta property="og:type" content="website" />
  <title>Portfolio — InsightFlow</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Syne:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>${globalStyles}${portfolioStyles}</style>
</head>
<body>
  ${navbar("/portfolio")}
  ${content}
  ${footer(footerData, socialData)}
  <script>${clientScript}${portfolioScript}</script>
</body>
</html>
`;

// ── Hero ──
const portoHero = (): string => `
  <div class="porto-hero">
    <div class="porto-hero-grid"></div>
    <div class="porto-orb"></div>
    <div class="porto-hero-inner">
      <p class="porto-eyebrow">// Our Work</p>
      <h1>Real results for <span>real businesses</span></h1>
      <p class="porto-hero-sub">
        Every project here is a local business in Indonesia that trusted us
        with their growth. Here's what happened next.
      </p>
      <div class="porto-hero-stats">
        ${portfolioStats.map(s => `
          <div class="porto-stat">
            <span class="porto-stat-num">${s.num}</span>
            <span class="porto-stat-label">${s.label}</span>
          </div>
        `).join("")}
      </div>
    </div>
  </div>
`;

// ── Filter bar ──
const filterBar = (): string => `
  <div class="porto-filters">
    <span class="filter-label">Filter:</span>
    ${categories.map((cat: ProjectCategory, i: number) => `
      <button
        class="filter-btn ${i === 0 ? "active" : ""}"
        data-cat="${cat}"
      >${cat}</button>
    `).join("")}
  </div>
`;

// ── Project cards ──
const projectGrid = (): string => `
  <div class="porto-grid-section">
    <div class="porto-grid" id="porto-grid">
      ${portfolioProjects.map((p: Project) => `
        <div
          class="project-card ${p.featured ? "featured" : ""} reveal"
          data-category="${p.category}"
          data-hidden="false"
        >
          <!-- Visual -->
          <div class="project-visual" style="background: linear-gradient(135deg, ${p.color}18, ${p.color}05)">
            <div class="project-visual-bg"></div>
            ${p.featured ? `<span class="project-featured-badge">Featured</span>` : ""}
            <span class="project-year-badge">${p.year}</span>
            <span class="project-emoji">${p.emoji}</span>
          </div>

          <!-- Body -->
          <div class="project-body">
            <p class="project-client">${p.client}</p>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.desc}</p>
            <div class="project-tags">
              ${p.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
            </div>
            <div class="project-results">
              ${p.results.map(r => `
                <div class="project-result">${r}</div>
              `).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </div>

    <!-- Empty state -->
    <div class="porto-empty" id="porto-empty">
      <div class="porto-empty-icon">🔍</div>
      <p class="porto-empty-text">No projects in this category yet.</p>
    </div>
  </div>
`;

// ── CTA ──
const portoCta = (): string => `
  <div class="porto-cta">
    <div class="porto-cta-inner">
      <h2>Want results like <span>these?</span></h2>
      <p>
        Every project started with a single conversation. Tell us about
        your business and let's figure out what's possible together.
      </p>
      <div class="porto-cta-btns">
        <a href="/#contact" class="btn-primary">Start a Project</a>
        <a href="/about" class="btn-ghost">Meet the Team</a>
      </div>
    </div>
  </div>
`;

// ── Exported page ──
export const portfolioPage = (): string =>
  pageShell(`
    ${portoHero()}
    ${filterBar()}
    ${projectGrid()}
    ${portoCta()}
  `);