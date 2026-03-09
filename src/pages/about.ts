import { navbar } from "../components/navbar";
import { footer } from "../components/footer";
import { clientScript } from "../components/scripts";
import { globalStyles } from "../components/styles";
import { footerData, socialData } from "../data/landing";
import { teamData, milestonesData, valuesData } from "../data/about";
import type { TeamMember, Milestone, Value } from "../data/about";

// ── About page specific styles ──
const aboutStyles: string = `
  /* ── ABOUT HERO ── */
  .about-hero {
    position: relative;
    padding: 10rem 4rem 6rem;
    background: var(--bg);
    overflow: hidden;
    border-bottom: 1px solid var(--border);
  }
  .about-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(248,123,27,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(248,123,27,.03) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(ellipse 70% 100% at 30% 50%, black 30%, transparent 100%);
  }
  .about-hero-inner {
    max-width: 1200px; margin: 0 auto;
    display: grid; grid-template-columns: 1.2fr 1fr; gap: 5rem;
    align-items: center; position: relative; z-index: 1;
  }
  .about-eyebrow {
    font-family: 'Orbitron', monospace; font-size: .65rem;
    letter-spacing: .3em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 1.25rem;
    display: flex; align-items: center; gap: .75rem;
  }
  .about-eyebrow::before {
    content: ''; display: block;
    width: 32px; height: 2px; background: var(--accent);
  }
  .about-hero h1 {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.1; color: var(--text); margin-bottom: 1.5rem;
    animation: fadeUp .8s ease both;
  }
  .about-hero h1 em {
    font-style: normal; color: var(--accent);
  }
  .about-hero-desc {
    font-size: 1rem; line-height: 1.85; color: var(--muted);
    max-width: 480px; margin-bottom: 2.5rem;
    animation: fadeUp .9s .1s ease both;
  }
  .about-hero-stats {
    display: flex; gap: 2.5rem;
    animation: fadeUp 1s .2s ease both;
  }
  .about-stat { }
  .about-stat-num {
    font-family: 'Orbitron', monospace; font-size: 2rem;
    font-weight: 900; color: var(--accent); display: block; line-height: 1;
  }
  .about-stat-label {
    font-size: .72rem; letter-spacing: .12em; text-transform: uppercase;
    color: var(--muted); margin-top: .3rem;
  }

  /* Right: accent card */
  .about-hero-card {
    background: var(--bg2); border: 1px solid var(--border);
    border-radius: 16px; padding: 2.5rem;
    animation: fadeUp .9s .15s ease both;
    position: relative; overflow: hidden;
  }
  .about-hero-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--green));
  }
  .about-hero-card-label {
    font-family: 'Orbitron', monospace; font-size: .6rem;
    letter-spacing: .2em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 1.25rem;
  }
  .about-hero-card-quote {
    font-family: 'Syne', sans-serif; font-size: 1.1rem;
    font-style: italic; line-height: 1.7;
    color: var(--green); margin-bottom: 1.5rem;
  }
  .about-hero-card-items { list-style: none; }
  .about-hero-card-items li {
    display: flex; align-items: center; gap: .75rem;
    padding: .6rem 0; border-bottom: 1px solid var(--border);
    font-size: .88rem; color: var(--text);
  }
  .about-hero-card-items li:last-child { border-bottom: none; }
  .about-hero-card-items li::before {
    content: '▸'; color: var(--accent); font-size: .7rem; flex-shrink: 0;
  }

  /* ── VALUES ── */
  #about-values { background: var(--bg2); }
  .values-inner {
    max-width: 1200px; margin: 0 auto; padding: 6rem 4rem;
  }
  .values-header { text-align: center; margin-bottom: 3.5rem; }
  .values-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }
  .value-card {
    background: var(--bg); border: 1px solid var(--border);
    border-radius: 12px; padding: 2rem 1.75rem;
    transition: border-color .25s, transform .25s;
  }
  .value-card:hover {
    border-color: rgba(248,123,27,.4);
    transform: translateY(-4px);
  }
  .value-icon {
    font-size: 1.75rem; margin-bottom: 1.25rem; display: block;
  }
  .value-title {
    font-family: 'Syne', sans-serif; font-weight: 700;
    font-size: .95rem; color: var(--text); margin-bottom: .5rem;
  }
  .value-desc { font-size: .85rem; line-height: 1.7; color: var(--muted); }

  /* ── TIMELINE ── */
  #about-timeline { background: var(--bg); }
  .timeline-inner {
    max-width: 1200px; margin: 0 auto; padding: 6rem 4rem;
  }
  .timeline-header { margin-bottom: 4rem; }
  .timeline-track {
    position: relative;
    display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0;
  }
  .timeline-track::before {
    content: ''; position: absolute;
    top: 28px; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg,
      transparent 0%,
      var(--border) 5%,
      var(--accent) 50%,
      var(--border) 95%,
      transparent 100%
    );
  }
  .timeline-step {
    padding: 0 1.5rem 0 0; position: relative; padding-top: 4rem;
  }
  .timeline-dot {
    position: absolute; top: 20px; left: 0;
    width: 16px; height: 16px; border-radius: 50%;
    background: var(--bg2); border: 2px solid var(--accent);
    z-index: 1;
    transition: background .3s, box-shadow .3s;
  }
  .timeline-step:hover .timeline-dot {
    background: var(--accent);
    box-shadow: 0 0 16px rgba(248,123,27,.5);
  }
  .timeline-year {
    font-family: 'Orbitron', monospace; font-size: .7rem;
    font-weight: 700; letter-spacing: .15em;
    color: var(--accent); margin-bottom: .6rem;
  }
  .timeline-title {
    font-family: 'Syne', sans-serif; font-weight: 700;
    font-size: .95rem; color: var(--text); margin-bottom: .5rem;
  }
  .timeline-desc { font-size: .82rem; line-height: 1.65; color: var(--muted); }

  /* ── TEAM ── */
  #about-team { background: var(--bg2); }
  .team-inner {
    max-width: 1200px; margin: 0 auto; padding: 6rem 4rem;
  }
  .team-header { margin-bottom: 3.5rem; }
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }
  .team-card {
    background: var(--bg); border: 1px solid var(--border);
    border-radius: 16px; overflow: hidden;
    transition: border-color .25s, transform .25s, box-shadow .25s;
  }
  .team-card:hover {
    border-color: rgba(248,123,27,.4);
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,.3);
  }
  .team-card-top {
    background: var(--bg2);
    padding: 2.5rem 2rem 2rem;
    position: relative; text-align: center;
    border-bottom: 1px solid var(--border);
  }
  .team-card-top::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--green));
    transform: scaleX(0); transition: transform .3s;
  }
  .team-card:hover .team-card-top::before { transform: scaleX(1); }
  .team-avatar {
    width: 80px; height: 80px; border-radius: 50%;
    background: rgba(248,123,27,.1);
    border: 2px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 2.2rem; margin: 0 auto 1rem;
    transition: border-color .3s;
  }
  .team-card:hover .team-avatar { border-color: var(--accent); }
  .team-name {
    font-family: 'Syne', sans-serif; font-weight: 700;
    font-size: 1rem; color: var(--text); margin-bottom: .25rem;
  }
  .team-role {
    font-family: 'Orbitron', monospace; font-size: .6rem;
    letter-spacing: .12em; text-transform: uppercase; color: var(--accent);
  }
  .team-card-body { padding: 1.5rem 2rem 2rem; }
  .team-bio { font-size: .85rem; line-height: 1.7; color: var(--muted); margin-bottom: 1.25rem; }
  .team-socials { display: flex; gap: .5rem; }
  .team-social-link {
    display: flex; align-items: center; justify-content: center;
    width: 32px; height: 32px;
    border: 1px solid var(--border); border-radius: 50%;
    color: var(--muted); text-decoration: none;
    font-size: .75rem; transition: all .2s;
  }
  .team-social-link:hover {
    border-color: var(--accent); color: var(--accent);
    background: rgba(248,123,27,.08);
  }

  /* ── CTA STRIP ── */
  .about-cta {
    background: linear-gradient(135deg, var(--bg2) 0%, #0a1628 100%);
    border-top: 1px solid var(--border);
    padding: 5rem 4rem;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .about-cta::before {
    content: ''; position: absolute;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(248,123,27,.1) 0%, transparent 70%);
    top: 50%; left: 50%; transform: translate(-50%,-50%);
    pointer-events: none;
  }
  .about-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
  .about-cta h2 {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    color: var(--text); margin-bottom: 1rem; line-height: 1.2;
  }
  .about-cta h2 span { color: var(--accent); }
  .about-cta p { color: var(--muted); font-size: .97rem; line-height: 1.7; margin-bottom: 2rem; }
  .about-cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .about-hero { padding: 8rem 2rem 4rem; }
    .about-hero-inner { grid-template-columns: 1fr; gap: 3rem; }
    .values-inner, .timeline-inner, .team-inner { padding: 5rem 2rem; }
    .about-cta { padding: 4rem 2rem; }
    .timeline-track::before { display: none; }
    .timeline-step { padding-top: 1rem; padding-left: 2rem; }
    .timeline-dot { top: 4px; }
  }
  @media (max-width: 768px) {
    .about-hero-stats { gap: 1.5rem; flex-wrap: wrap; }
    .team-grid { grid-template-columns: 1fr; }
    .timeline-track { gap: 2rem; }
  }
`;

// ── Shared page shell ──
const pageShell = (content: string, title: string): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="About InsightFlow — A data-driven creative agency in Surabaya helping local businesses grow." />
  <meta property="og:title" content="${title}" />
  <meta property="og:type" content="website" />
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Syne:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>${globalStyles}${aboutStyles}</style>
</head>
<body>
  ${navbar("/about")}
  ${content}
  ${footer(footerData, socialData)}
  <script>${clientScript}</script>
</body>
</html>
`;

// ── Sections ──
const aboutHero = (): string => `
  <div class="about-hero">
    <div class="about-hero-grid"></div>
    <div class="about-hero-inner">
      <div>
        <p class="about-eyebrow">About InsightFlow</p>
        <h1>We turn <em>data</em> into decisions that grow businesses</h1>
        <p class="about-hero-desc">
          Founded in Surabaya in 2021, InsightFlow is a data-driven creative agency
          obsessed with helping local businesses understand their customers, sharpen their
          strategy, and show up powerfully online.
        </p>
        <div class="about-hero-stats">
          <div class="about-stat">
            <span class="about-stat-num">120+</span>
            <span class="about-stat-label">Clients Served</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-num">98%</span>
            <span class="about-stat-label">Retention Rate</span>
          </div>
          <div class="about-stat">
            <span class="about-stat-num">4yrs</span>
            <span class="about-stat-label">In Business</span>
          </div>
        </div>
      </div>
      <div class="about-hero-card">
        <p class="about-hero-card-label">// Our Approach</p>
        <p class="about-hero-card-quote">
          "In God we trust. All others must bring data."
        </p>
        <ul class="about-hero-card-items">
          <li>Data-backed strategy, not guesswork</li>
          <li>Transparent reporting every month</li>
          <li>Local market expertise in East Java</li>
          <li>Full-service from brand to analytics</li>
        </ul>
      </div>
    </div>
  </div>
`;

const valuesSection = (): string => `
  <section id="about-values">
    <div class="values-inner">
      <div class="values-header">
        <p class="section-tag">// What Drives Us</p>
        <h2 class="section-title reveal">Our Core <span>Values</span></h2>
        <p class="section-sub reveal" style="margin: 0 auto">
          These aren't just words on a wall — they're the principles that guide every
          decision we make for our clients.
        </p>
      </div>
      <div class="values-grid">
        ${valuesData.map((v: Value) => `
          <div class="value-card reveal">
            <span class="value-icon">${v.icon}</span>
            <h3 class="value-title">${v.title}</h3>
            <p class="value-desc">${v.desc}</p>
          </div>
        `).join("")}
      </div>
    </div>
  </section>
`;

const timelineSection = (): string => `
  <section id="about-timeline">
    <div class="timeline-inner">
      <div class="timeline-header">
        <p class="section-tag">// Our Journey</p>
        <h2 class="section-title reveal">How We <span>Got Here</span></h2>
      </div>
      <div class="timeline-track">
        ${milestonesData.map((m: Milestone) => `
          <div class="timeline-step reveal">
            <div class="timeline-dot"></div>
            <p class="timeline-year">${m.year}</p>
            <h3 class="timeline-title">${m.title}</h3>
            <p class="timeline-desc">${m.desc}</p>
          </div>
        `).join("")}
      </div>
    </div>
  </section>
`;

const teamSection = (): string => `
  <section id="about-team">
    <div class="team-inner">
      <div class="team-header">
        <p class="section-tag">// The People</p>
        <h2 class="section-title reveal">Meet the <span>Team</span></h2>
        <p class="section-sub reveal">
          Small, focused, and obsessively good at what we do.
        </p>
      </div>
      <div class="team-grid">
        ${teamData.map((m: TeamMember) => `
          <div class="team-card reveal">
            <div class="team-card-top">
              <div class="team-avatar">${m.emoji}</div>
              <h3 class="team-name">${m.name}</h3>
              <p class="team-role">${m.role}</p>
            </div>
            <div class="team-card-body">
              <p class="team-bio">${m.bio}</p>
              <div class="team-socials">
                ${m.socials?.instagram ? `<a href="${m.socials.instagram}" target="_blank" class="team-social-link" title="Instagram">ig</a>` : ""}
                ${m.socials?.tiktok    ? `<a href="${m.socials.tiktok}"    target="_blank" class="team-social-link" title="TikTok">tt</a>` : ""}
                ${m.socials?.linkedin  ? `<a href="${m.socials.linkedin}"  target="_blank" class="team-social-link" title="LinkedIn">in</a>` : ""}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  </section>
`;

const ctaSection = (): string => `
  <div class="about-cta">
    <div class="about-cta-inner">
      <h2>Ready to grow with <span>InsightFlow?</span></h2>
      <p>
        Whether you're just starting or ready to scale, we'd love to learn
        about your business and see how we can help.
      </p>
      <div class="about-cta-btns">
        <a href="/#contact" class="btn-primary">Start a Conversation</a>
        <a href="/portfolio" class="btn-ghost">See Our Work</a>
      </div>
    </div>
  </div>
`;

// ── Exported page ──
export const aboutPage = (): string =>
  pageShell(
    `
    ${aboutHero()}
    ${valuesSection()}
    ${timelineSection()}
    ${teamSection()}
    ${ctaSection()}
    `,
    "About — InsightFlow"
  );