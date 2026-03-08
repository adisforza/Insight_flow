export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface FeaturesProps {
  items: Feature[];
  quote?: string;
  quoteAuthor?: string;
}

export const features = (props: FeaturesProps): string => `
  <section id="features">
    <div class="features-wrap">

      <!-- Left: Identity -->
      <div class="features-left reveal">
        <p class="section-tag">// Who We Are</p>
        <h2 class="features-headline">
          We are <span>InsightFlow</span>
        </h2>
        <p class="features-desc">
          A data-driven creative agency obsessed with turning numbers into
          narratives. We believe that behind every dataset lies a story waiting
          to be told — and a strategy waiting to be executed.
        </p>
        ${props.quote ? `
        <blockquote class="features-quote">
          <p>"${props.quote}"</p>
          ${props.quoteAuthor ? `<cite>— ${props.quoteAuthor}</cite>` : ""}
        </blockquote>
        ` : ""}
      </div>

      <!-- Right: Feature cards -->
      <div class="features-right">
        ${props.items.map((f: Feature, i: number) => `
          <div class="feat-card reveal" style="transition-delay:${i * 80}ms">
            <div class="feat-icon">${f.icon}</div>
            <div class="feat-body">
              <h3 class="feat-title">${f.title}</h3>
              <p class="feat-text">${f.text}</p>
            </div>
          </div>
        `).join("")}
      </div>

    </div>
  </section>
`;