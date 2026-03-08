export const navbar = (activePage: string = "/"): string => {
  const link = (href: string, label: string) => {
    const isActive = href === activePage;
    return `<li><a href="${href}" ${isActive ? 'class="nav-active"' : ""}>${label}</a></li>`;
  };

  return `
  <nav>
    <a href="/" class="nav-logo">Insight<span>Flow</span></a>
    <ul class="nav-links">
      ${link("/#features", "Services")}
      ${link("/#workflow", "Process")}
      ${link("/#pricing", "Pricing")}
      ${link("/portfolio", "Portfolio")}
      ${link("/about", "About")}
    </ul>
    <a href="#contact" class="nav-cta">Get Started</a>
    <button class="nav-hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- Mobile Drawer -->
  <div class="nav-drawer" id="nav-drawer">
    <button class="nav-drawer-close" id="drawer-close" aria-label="Close menu">✕</button>
    <a href="/" onclick="closeDrawer()">Home</a>
    <a href="/#features" onclick="closeDrawer()">Services</a>
    <a href="/#workflow" onclick="closeDrawer()">Process</a>
    <a href="/#pricing" onclick="closeDrawer()">Pricing</a>
    <a href="/portfolio" onclick="closeDrawer()">Portfolio</a>
    <a href="/about" onclick="closeDrawer()">About</a>
    <a href="/#contact" onclick="closeDrawer()">Get Started</a>
  </div>
`;

};
