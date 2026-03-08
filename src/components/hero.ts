export interface HeroStat {
  num: string;
  label: string;
}

export interface HeroProps {
  tagline: string;
  heading1: string;
  heading2: string;
  subtext: string;
  stats: HeroStat[];
}

export const hero = (props: HeroProps): string => `
  <section id="hero">
    <div class="grid-bg"></div>
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>

    <div class="hero-tag">${props.tagline}</div>

    <h1>
      <span class="line1">${props.heading1}</span>
      <span class="line2">${props.heading2}</span>
    </h1>

    <p class="hero-sub">${props.subtext}</p>

    <div class="hero-buttons">
      <a href="#contact" class="btn-primary">Start Your Project</a>
      <a href="#features" class="btn-ghost">Explore Services</a>
    </div>

    <div class="hero-stats">
      ${props.stats
        .map(
          (s: HeroStat) => `
        <div class="stat">
          <span class="stat-num" data-target="${s.num}">${s.num}</span>
          <span class="stat-label">${s.label}</span>
        </div>
      `
        )
        .join("")}
    </div>
  </section>
`;