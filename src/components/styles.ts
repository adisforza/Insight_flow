export const globalStyles: string = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #0a1628;
    --bg2:       #11224e;
    --panel:     #0d1c3d;
    --accent:    #f87b1b;
    --accent-dim:#d4640e;
    --green:     #cbd99b;
    --text:      #eeeeee;
    --muted:     #7a8faa;
    --border:    rgba(248,123,27,.15);
    --glow:      0 0 20px rgba(248,123,27,.4);
  }

  html { scroll-behavior: smooth; }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Syne', sans-serif;
    font-weight: 400;
    overflow-x: hidden;
    
  }

  /* cursor removed — using default browser cursor */

  /* ── Scanlines ── */
  body::after {
    content: ''; position: fixed; inset: 0; z-index: 2;
    background: repeating-linear-gradient(
      0deg, transparent, transparent 2px,
      rgba(0,0,0,.04) 2px, rgba(0,0,0,.04) 4px
    );
    pointer-events: none;
  }

  /* ── NAV ── */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.25rem 4rem;
    background: rgba(10,22,40,.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo {
    font-family: 'Orbitron', monospace; font-weight: 900;
    font-size: 1.3rem; letter-spacing: .15em;
    color: var(--text); text-decoration: none;
  }
  .nav-logo span { color: var(--accent); text-shadow: var(--glow); }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a {
    font-size: .8rem; letter-spacing: .15em; text-transform: uppercase;
    color: var(--muted); text-decoration: none; font-weight: 600;
    transition: color .2s;
  }
  .nav-links a:hover { color: var(--accent); }
  .nav-links a.nav-active { color: var(--accent); position: relative; }
  .nav-links a.nav-active::after {
    content: ''; position: absolute; bottom: -4px; left: 0; right: 0;
    height: 2px; background: var(--accent);
    border-radius: 2px;
  }
  .nav-hamburger {
    display: none; flex-direction: column; gap: 5px;
     background: none; border: none; padding: .25rem;
  }
  .nav-hamburger span {
    display: block; width: 24px; height: 2px;
    background: var(--accent); transition: all .3s;
  }
  .nav-cta {
    font-family: 'Orbitron', monospace; font-size: .7rem; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    padding: .55rem 1.4rem; border: 1px solid var(--accent);
    color: var(--accent); background: transparent; text-decoration: none;
     transition: background .2s, color .2s, box-shadow .2s;
  }
  .nav-cta:hover { background: var(--accent); color: var(--bg); box-shadow: var(--glow); }

  /* Mobile nav drawer */
  .nav-drawer {
    display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(3,5,8,.97); z-index: 99; flex-direction: column;
    align-items: center; justify-content: center; gap: 2.5rem;
  }
  .nav-drawer.open { display: flex; }
  .nav-drawer a {
    font-family: 'Orbitron', monospace; font-size: 1.5rem; font-weight: 700;
    letter-spacing: .15em; text-transform: uppercase;
    color: var(--text); text-decoration: none; transition: color .2s;
  }
  .nav-drawer a:hover { color: var(--accent); }
  .nav-drawer-close {
    position: absolute; top: 1.5rem; right: 2rem;
    background: none; border: none; color: var(--muted);
    font-size: 1.5rem; 
  }

  /* ── HERO ── */
  #hero {
    position: relative; min-height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 8rem 2rem 4rem; overflow: hidden;
  }
  .grid-bg {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(248,123,27,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(248,123,27,.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }
  .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
  .orb-1 {
    width: 500px; height: 500px; top: -100px; left: 50%; transform: translateX(-50%);
    background: radial-gradient(circle, rgba(248,123,27,.18) 0%, transparent 70%);
    animation: orbPulse1 6s ease-in-out infinite;
  }
  .orb-2 {
    width: 300px; height: 300px; bottom: 0; right: 10%;
    background: radial-gradient(circle, rgba(203,217,155,.1) 0%, transparent 70%);
    animation: orbPulse2 8s ease-in-out infinite;
  }
  @keyframes orbPulse1 {
    0%,100% { opacity:.6; transform:translateX(-50%) scale(1); }
    50%      { opacity:1;  transform:translateX(-50%) scale(1.1); }
  }
  @keyframes orbPulse2 {
    0%,100% { opacity:.5; transform:scale(1); }
    50%      { opacity:.9; transform:scale(1.15); }
  }
  .hero-tag {
    display: inline-flex; align-items: center; gap: .5rem;
    font-family: 'Orbitron', monospace; font-size: .65rem;
    letter-spacing: .25em; text-transform: uppercase;
    color: var(--accent); border: 1px solid var(--border);
    padding: .4rem 1rem; margin-bottom: 2rem;
    background: rgba(248,123,27,.05);
    animation: fadeUp .8s ease both;
  }
  .hero-tag::before {
    content: ''; width: 6px; height: 6px; background: var(--accent);
    border-radius: 50%; box-shadow: var(--glow);
    animation: blink 1.5s ease-in-out infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }
  h1 {
    font-family: 'Orbitron', monospace; font-weight: 900;
    font-size: clamp(2.8rem, 7vw, 6rem); line-height: 1.05;
    margin-bottom: 1.5rem; animation: fadeUp .9s .1s ease both;
  }
  h1 .line1 { display: block; color: #fff; }
  h1 .line2 {
    display: block;
    background: linear-gradient(90deg, var(--accent), var(--green));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .hero-sub {
    max-width: 560px; font-size: 1.05rem; line-height: 1.75;
    color: var(--muted); margin-bottom: 2.5rem;
    animation: fadeUp 1s .2s ease both;
  }
  .hero-buttons {
    display: flex; gap: 1rem; justify-content: center;
    flex-wrap: wrap; animation: fadeUp 1s .3s ease both;
  }
  .btn-primary {
    font-family: 'Orbitron', monospace; font-size: .75rem; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase; padding: .9rem 2.2rem;
    background: var(--accent); color: var(--bg); border: none;
    text-decoration: none;  position: relative; overflow: hidden;
    transition: box-shadow .2s;
  }
  .btn-primary::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.2), transparent);
    transform: translateX(-100%); transition: transform .4s;
  }
  .btn-primary:hover { box-shadow: 0 0 30px rgba(248,123,27,.6); }
  .btn-primary:hover::after { transform: translateX(100%); }
  .btn-ghost {
    font-family: 'Orbitron', monospace; font-size: .75rem; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase; padding: .9rem 2.2rem;
    background: transparent; color: var(--text);
    border: 1px solid rgba(255,255,255,.15); text-decoration: none;
     transition: border-color .2s, color .2s;
  }
  .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
  .hero-stats {
    display: flex; gap: 3rem; margin-top: 4rem;
    animation: fadeUp 1s .4s ease both;
  }
  .stat { text-align: center; }
  .stat-num {
    font-family: 'Orbitron', monospace; font-size: 1.8rem; font-weight: 700;
    color: var(--accent); display: block;
  }
  .stat-label { font-size: .7rem; letter-spacing: .15em; text-transform: uppercase; color: var(--muted); margin-top: .2rem; }

  /* ── SHARED SECTION ── */
  section { position: relative; z-index: 3; }
  .section-inner { max-width: 1200px; margin: 0 auto; padding: 7rem 2rem; }
  .section-tag {
    font-family: 'Orbitron', monospace; font-size: .65rem;
    letter-spacing: .3em; text-transform: uppercase; color: var(--accent); margin-bottom: .75rem;
  }
  .section-title {
    font-family: 'Orbitron', monospace; font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 1rem;
  }
  .section-title span {
    background: linear-gradient(90deg, var(--accent), var(--green));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .section-sub { max-width: 520px; color: var(--muted); line-height: 1.75; font-size: .95rem; margin-bottom: 3.5rem; }

  /* ── FEATURES ── */
  #features { background: var(--bg2); }

  .features-wrap {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 0;
    min-height: 600px;
  }

  /* Left column */
  .features-left {
    padding: 5rem 4rem 5rem 6rem;
    display: flex; flex-direction: column; justify-content: center;
    background: var(--bg);
    border-right: 1px solid var(--border);
  }
  .features-headline {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1.15;
    color: var(--text);
    margin-bottom: 1.25rem;
  }
  .features-headline span { color: var(--accent); }
  .features-desc {
    font-size: .97rem; line-height: 1.8;
    color: var(--muted); margin-bottom: 2.5rem;
    max-width: 420px;
  }
  .features-quote {
    border-left: 3px solid var(--accent);
    padding-left: 1.25rem;
    margin-top: auto;
  }
  .features-quote p {
    font-family: 'Syne', sans-serif;
    font-style: italic; font-size: 1rem;
    line-height: 1.7; color: var(--green);
    margin-bottom: .5rem;
  }
  .features-quote cite {
    font-family: 'Orbitron', monospace;
    font-size: .6rem; letter-spacing: .15em;
    color: var(--muted); font-style: normal;
  }

  /* Right column — stacked cards */
  .features-right {
    padding: 2.5rem 3rem 2.5rem 2.5rem;
    background: var(--bg2);
    display: flex; flex-direction: column; gap: 1rem;
    justify-content: center;
  }

  .feat-card {
    display: flex; align-items: flex-start; gap: 1.25rem;
    background: rgba(255,255,255,.03);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    transition: background .25s, border-color .25s, transform .25s;
    cursor: default;
  }
  .feat-card:hover {
    background: rgba(248,123,27,.06);
    border-color: rgba(248,123,27,.35);
    transform: translateX(4px);
  }

  .feat-icon {
    width: 52px; height: 52px; flex-shrink: 0;
    background: rgba(248,123,27,.12);
    border: 1px solid rgba(248,123,27,.25);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem;
    transition: background .25s;
  }
  .feat-card:hover .feat-icon {
    background: rgba(248,123,27,.22);
  }

  .feat-body { flex: 1; }
  .feat-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700; font-size: 1rem;
    color: var(--text); margin-bottom: .35rem;
  }
  .feat-text {
    font-size: .85rem; line-height: 1.65;
    color: var(--muted);
  }

  @media (max-width: 900px) {
    .features-wrap { grid-template-columns: 1fr; }
    .features-left {
      padding: 4rem 2rem;
      border-right: none;
      border-bottom: 1px solid var(--border);
    }
    .features-right { padding: 2.5rem 2rem; }
  }

  /* ── WORKFLOW ── */
  #workflow { background: var(--bg); }
  .workflow-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
    gap: 0; position: relative;
  }
  .workflow-grid::before {
    content: ''; position: absolute; top: 36px; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), var(--accent-dim), var(--border), transparent);
    z-index: 0;
  }
  .workflow-step {
    padding: 2rem 1.5rem; text-align: center; position: relative; z-index: 1;
  }
  .workflow-num {
    width: 72px; height: 72px; margin: 0 auto 1.5rem;
    border: 1px solid var(--border); background: var(--panel);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Orbitron', monospace; font-size: 1.1rem; font-weight: 900;
    color: var(--accent); position: relative;
    transition: border-color .3s, box-shadow .3s;
  }
  .workflow-step:hover .workflow-num {
    border-color: var(--accent); box-shadow: var(--glow);
  }
  .workflow-num::after {
    content: ''; position: absolute; inset: -4px;
    border: 1px solid rgba(248,123,27,.15);
  }
  .workflow-title {
    font-family: 'Orbitron', monospace; font-size: .8rem; font-weight: 700;
    color: #fff; margin-bottom: .75rem; letter-spacing: .05em;
  }
  .workflow-text { font-size: .83rem; line-height: 1.7; color: var(--muted); }

  /* ── PRICING ── */
  #pricing { background: var(--bg2); }
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    align-items: stretch;
  }
  .pricing-card {
    background: rgba(11,16,24,.9);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 2.25rem 2rem 2rem;
    position: relative;
    display: flex; flex-direction: column;
    transition: border-color .3s, transform .3s, box-shadow .3s;
  }
  .pricing-card:hover {
    border-color: rgba(248,123,27,.3);
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0,0,0,.4);
  }
  .pricing-card.featured {
    border-color: var(--accent);
    background: linear-gradient(160deg, #162a5a 0%, #11224e 100%);
    box-shadow: 0 0 40px rgba(248,123,27,.12), 0 24px 48px rgba(0,0,0,.4);
  }
  .pricing-card.featured::before {
    content: 'MOST POPULAR';
    position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
    font-family: 'Orbitron', monospace; font-size: .55rem; font-weight: 700;
    letter-spacing: .2em; background: var(--accent); color: var(--bg);
    padding: .3rem 1.1rem; border-radius: 0 0 8px 8px;
    white-space: nowrap;
  }

  /* Price header */
  .price-header { margin-bottom: 1.5rem; }
  .price-tier {
    font-family: 'Orbitron', monospace; font-size: 1rem; font-weight: 900;
    letter-spacing: .08em; color: #fff; text-transform: uppercase; margin-bottom: .5rem;
  }
  .price-desc { font-size: .83rem; color: var(--muted); line-height: 1.6; }

  /* Price amount */
  .price-amount {
    display: flex; align-items: baseline; gap: .2rem;
    margin-bottom: 1.5rem;
  }
  .price-currency {
    font-family: 'Orbitron', monospace; font-size: .9rem;
    font-weight: 700; color: var(--muted); margin-right: .15rem;
  }
  .price-number {
    font-family: 'Orbitron', monospace; font-size: 3.5rem;
    font-weight: 900; color: #fff; line-height: 1;
  }
  .price-suffix {
    font-family: 'Orbitron', monospace; font-size: 1.1rem;
    font-weight: 700; color: var(--green); margin-left: .2rem;
  }
  .price-unit { font-size: .7rem; color: var(--muted); font-weight: 400; }

  /* Custom price (Pro tier) */
  .price-number.is-custom {
    font-size: 2.5rem; color: #fff;
  }

  /* Divider */
  .price-divider { height: 1px; background: var(--border); margin-bottom: 1.5rem; }

  /* Features list */
  .price-features { list-style: none; margin-bottom: 2rem; flex: 1; }
  .price-feature {
    display: flex; align-items: center; gap: .75rem;
    padding: .55rem 0;
    border-bottom: 1px solid rgba(255,255,255,.04);
    font-size: .87rem;
  }
  .price-feature-icon {
    width: 20px; height: 20px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: .65rem; font-weight: 700; flex-shrink: 0;
  }
  .price-feature.included .price-feature-icon {
    background: rgba(248,123,27,.12);
    color: var(--accent);
    border: 1px solid rgba(248,123,27,.3);
  }
  .price-feature.excluded .price-feature-icon {
    background: rgba(255,255,255,.04);
    color: var(--muted);
    border: 1px solid rgba(255,255,255,.08);
  }
  .price-feature.included .price-feature-label { color: var(--text); font-weight: 500; }
  .price-feature.excluded .price-feature-label { color: var(--muted); }

  /* CTA buttons */
  .btn-plan {
    display: block; text-align: center;
    font-family: 'Orbitron', monospace; font-size: .72rem; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    border: 1px solid rgba(255,255,255,.2);
    color: var(--text);
    text-decoration: none; 
    transition: all .25s; margin-top: auto;
  }
  .btn-plan:hover {
    border-color: var(--accent); color: var(--accent);
    box-shadow: 0 0 20px rgba(248,123,27,.2);
  }
  .btn-plan-featured {
    background: var(--accent); border-color: var(--accent);
    color: var(--bg);
    box-shadow: 0 4px 24px rgba(248,123,27,.35);
  }
  .btn-plan-featured:hover {
    background: #ff8f35; border-color: #ff8f35; color: var(--bg);
    box-shadow: 0 8px 32px rgba(248,123,27,.5);
    transform: translateY(-1px);
  }

  /* ── CONTACT ── */
  #contact { background: var(--bg); }
  .contact-wrap { display: grid; grid-template-columns: 1fr 1.2fr; gap: 5rem; align-items: start; }
  .contact-info p { color: var(--muted); line-height: 1.75; margin-bottom: 2.5rem; font-size: .95rem; }
  .contact-item { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.5rem; }
  .contact-icon {
    width: 36px; height: 36px; border: 1px solid var(--border);
    background: rgba(248,123,27,.05); display: flex; align-items: center;
    justify-content: center; font-size: .9rem; flex-shrink: 0;
  }
  .contact-item-label {
    font-family: 'Orbitron', monospace; font-size: .6rem; letter-spacing: .15em;
    color: var(--accent); text-transform: uppercase; margin-bottom: .15rem;
  }
  .contact-item-text { font-size: .85rem; line-height: 1.5; }
  .form-group { margin-bottom: 1.25rem; }
  .form-label {
    display: block; font-family: 'Orbitron', monospace; font-size: .6rem;
    letter-spacing: .15em; text-transform: uppercase; color: var(--muted); margin-bottom: .5rem;
  }
  .form-input, .form-textarea {
    width: 100%; background: rgba(255,255,255,.03); border: 1px solid var(--border);
    color: var(--text); font-family: 'Syne', sans-serif; font-size: .9rem;
    padding: .85rem 1rem; outline: none; transition: border-color .2s, box-shadow .2s;
  }
  .form-input:focus, .form-textarea:focus {
    border-color: rgba(248,123,27,.5); box-shadow: 0 0 0 3px rgba(248,123,27,.07);
  }
  .form-input.error { border-color: #ff4d6d; }
  .form-error { font-size: .75rem; color: #ff4d6d; margin-top: .35rem; display: none; }
  .form-error.show { display: block; }
  .form-textarea { resize: vertical; min-height: 130px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .btn-submit {
    width: 100%; font-family: 'Orbitron', monospace; font-size: .75rem; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase; padding: 1rem;
    background: var(--accent); color: var(--bg); border: none; 
    position: relative; overflow: hidden; transition: box-shadow .2s;
  }
  .btn-submit:hover { box-shadow: 0 0 30px rgba(248,123,27,.6); }
  .btn-submit:disabled { opacity: .6; cursor: not-allowed; }
  .form-success {
    display: none; background: rgba(248,123,27,.08); border: 1px solid rgba(248,123,27,.3);
    padding: 1.25rem; text-align: center;
    font-family: 'Orbitron', monospace; font-size: .75rem; letter-spacing: .1em;
    color: var(--accent);
  }
  .form-success.show { display: block; }

  /* ── FOOTER ── */
  /* ── SOCIAL BAND ── */
  #social-band {
    background: var(--bg2);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 3rem 4rem;
    display: flex; align-items: center; justify-content: space-between;
    gap: 2rem;
  }
  .social-band-label {
    font-family: 'Orbitron', monospace; font-size: .6rem;
    letter-spacing: .3em; text-transform: uppercase;
    color: var(--accent); margin-bottom: .4rem;
  }
  .social-band-title {
    font-family: 'Syne', sans-serif; font-weight: 700;
    font-size: 1.1rem; color: var(--text);
  }
  .social-links { display: flex; gap: 1rem; align-items: center; }
  .social-link {
    display: flex; align-items: center; gap: .75rem;
    padding: .75rem 1.5rem;
    border: 1px solid var(--border); border-radius: 50px;
    text-decoration: none; color: var(--muted);
    font-family: 'Syne', sans-serif; font-size: .85rem; font-weight: 600;
    transition: all .25s; background: rgba(255,255,255,.02);
  }
  .social-link:hover {
    border-color: var(--accent); color: var(--text);
    background: rgba(248,123,27,.08);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(248,123,27,.15);
  }
  .social-link svg { width: 18px; height: 18px; flex-shrink: 0; fill: currentColor; }
  .social-link:hover svg { fill: var(--accent); }

  /* ── FOOTER ── */
  footer {
    background: var(--bg); border-top: 1px solid var(--border);
    padding: 2.5rem 4rem; display: flex; justify-content: space-between;
    align-items: center; z-index: 3; position: relative;
  }
  .footer-logo { font-family: 'Orbitron', monospace; font-weight: 900; font-size: 1rem; letter-spacing: .15em; color: var(--text); }
  .footer-logo span { color: var(--accent); }
  .footer-copy { font-size: .75rem; color: var(--muted); letter-spacing: .05em; }
  .footer-links { display: flex; gap: 2rem; }
  .footer-links a { font-size: .75rem; color: var(--muted); text-decoration: none; letter-spacing: .05em; transition: color .2s; }
  .footer-links a:hover { color: var(--accent); }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  .reveal { opacity: 0; transform: translateY(30px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    nav { padding: 1.25rem 2rem; }
    .section-inner { padding: 5rem 1.5rem; }
    .contact-wrap { grid-template-columns: 1fr; gap: 3rem; }
  }
  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links, .nav-cta { display: none; }
    .nav-hamburger { display: flex; }
    .hero-stats { gap: 1.5rem; flex-wrap: wrap; justify-content: center; }
    .workflow-grid::before { display: none; }
    .form-row { grid-template-columns: 1fr; }
    footer { flex-direction: column; gap: 1rem; text-align: center; padding: 2rem 1.5rem; }
    .footer-links { justify-content: center; }
    #social-band { flex-direction: column; text-align: center; padding: 2.5rem 1.5rem; gap: 1.5rem; }
    .social-links { justify-content: center; flex-wrap: wrap; }
  }
  @media (max-width: 480px) {
    h1 { font-size: 2.2rem; }
    .hero-buttons { flex-direction: column; align-items: center; }
    .pricing-grid { grid-template-columns: 1fr; }
  }
`;