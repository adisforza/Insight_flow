export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: PricingFeature[];
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export const pricing = (tiers: PricingTier[]): string => `
  <section id="pricing">
    <div class="section-inner">
      <p class="section-tag">// Investment Plans</p>
      <h2 class="section-title reveal">Transparent <span>Pricing</span></h2>
      <p class="section-sub reveal">
        No hidden fees. Simple packages designed for every stage.
        Scale up anytime as your business grows.
      </p>

      <div class="pricing-grid">
        ${tiers
          .map(
            (t: PricingTier) => `
          <div class="pricing-card ${t.featured ? "featured" : ""} reveal">

            <div class="price-header">
              <h3 class="price-tier">${t.name}</h3>
              <p class="price-desc">${t.desc}</p>
            </div>

            <div class="price-amount">
              <span class="price-currency">Rp</span>
              <span class="price-number">${t.price}</span>
              <span class="price-suffix">jt <span class="price-unit">/${t.unit}</span></span>
            </div>

            <div class="price-divider"></div>

            <ul class="price-features">
              ${t.features
                .map(
                  (f: PricingFeature) => `
                <li class="price-feature ${f.included ? "included" : "excluded"}">
                  <span class="price-feature-icon">${f.included ? "✓" : "✕"}</span>
                  <span class="price-feature-label">${f.label}</span>
                </li>
              `
                )
                .join("")}
            </ul>

            <a
              href="${t.ctaHref ?? "#contact"}"
              class="btn-plan ${t.featured ? "btn-plan-featured" : ""}"
            >
              ${t.ctaLabel ?? "Get Started"}
            </a>

          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </section>
`;