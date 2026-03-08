export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export const contact = (info: ContactInfo[]): string => `
  <section id="contact">
    <div class="section-inner">
      <div class="contact-wrap">

        <!-- Left: Info -->
        <div class="contact-info">
          <p class="section-tag">// Get In Touch</p>
          <h2 class="section-title reveal">Ready to <span>Launch?</span></h2>
          <p class="reveal">
            Tell us about your business and goals. We'll put together a
            custom plan and get back to you within 24 hours.
          </p>
          ${info
            .map(
              (i: ContactInfo) => `
            <div class="contact-item reveal">
              <div class="contact-icon">${i.icon}</div>
              <div class="contact-item-text">
                <div class="contact-item-label">${i.label}</div>
                ${i.value}
              </div>
            </div>
          `
            )
            .join("")}
        </div>

        <!-- Right: Form -->
        <div class="reveal">
          <form id="contact-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="name">Your Name</label>
                <input id="name" name="name" type="text" class="form-input" placeholder="Budi Santoso" />
                <p class="form-error" id="name-error">Please enter your name.</p>
              </div>
              <div class="form-group">
                <label class="form-label" for="business">Business Name</label>
                <input id="business" name="business" type="text" class="form-input" placeholder="Warung Mas Budi" />
                <p class="form-error" id="business-error">Please enter your business name.</p>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Email Address</label>
              <input id="email" name="email" type="email" class="form-input" placeholder="budi@example.com" />
              <p class="form-error" id="email-error">Please enter a valid email.</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="category">Business Type</label>
              <input id="category" name="category" type="text" class="form-input" placeholder="e.g. Restaurant, Retail, Services..." />
            </div>
            <div class="form-group">
              <label class="form-label" for="message">Tell Us Your Goals</label>
              <textarea id="message" name="message" class="form-textarea" placeholder="More customers, better online presence, brand awareness..."></textarea>
              <p class="form-error" id="message-error">Please tell us your goals.</p>
            </div>
            <button type="submit" class="btn-submit" id="submit-btn">
              Send Message →
            </button>
          </form>
          <div class="form-success" id="form-success">
            ✓ &nbsp; MESSAGE RECEIVED — We'll contact you within 24 hours.
          </div>
        </div>

      </div>
    </div>
  </section>
`;