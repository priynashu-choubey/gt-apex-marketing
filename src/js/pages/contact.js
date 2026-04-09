// pages/contact.js — Contact page HTML template
function contact() {
  return `
  <section class="contact-section" style="padding-top:140px;">
    <div class="section-tag">Hit us up</div>
    <h1 class="section-title" style="font-size:clamp(52px,7vw,90px);">
      READY TO<br /><span class="accent">TAKE THE</span><br /><span class="outline">WHEEL?</span>
    </h1>

    <div class="contact-grid">
      <div class="contact-form reveal" id="formWrapper">

        <div class="error-banner" id="errorBanner">⚠ Something went wrong. Please try again or email us directly.</div>

        <form id="contactForm" novalidate>

          <!-- Honeypot — hidden from real users, catches bots -->
          <input type="text" id="honeypot" name="honeypot" style="display:none" tabindex="-1" autocomplete="off" />

          <div class="form-row">
            <div class="form-group">
              <label>First Name *</label>
              <input type="text" id="firstName" placeholder="Rajan" autocomplete="given-name" />
              <span class="field-error" id="firstNameErr">Please enter your first name</span>
            </div>
            <div class="form-group">
              <label>Last Name *</label>
              <input type="text" id="lastName" placeholder="Mehta" autocomplete="family-name" />
              <span class="field-error" id="lastNameErr">Please enter your last name</span>
            </div>
          </div>

          <div class="form-group">
            <label>Work Email *</label>
            <input type="email" id="email" placeholder="rajan@yourbrand.com" autocomplete="email" />
            <span class="field-error" id="emailErr">Please enter a valid email address</span>
          </div>

          <div class="form-group">
            <label>Company / Brand *</label>
            <input type="text" id="company" placeholder="Brand name" autocomplete="organization" />
            <span class="field-error" id="companyErr">Please enter your company name</span>
          </div>

          <div class="form-group">
            <label>What do you need?</label>
            <select id="service">
              <option value="360-full-service">360° Full-Service Marketing</option>
              <option value="brand-strategy">Brand Strategy &amp; Identity</option>
              <option value="performance-marketing">Performance Marketing (Paid Ads)</option>
              <option value="seo-content">SEO &amp; Content</option>
              <option value="social-media">Social Media Management</option>
              <option value="website-infrastructure">Website &amp; Digital Infrastructure</option>
              <option value="analytics-attribution">Analytics &amp; Attribution</option>
              <option value="not-sure">Not sure yet — let's talk</option>
            </select>
          </div>

          <div class="form-group">
            <label>Tell us about your challenge</label>
            <textarea id="message" placeholder="What's the current bottleneck? What does winning look like for you?"></textarea>
          </div>

          <button type="submit" class="form-submit" id="submitBtn">
            Send it — we'll respond within 24hrs →
          </button>

        </form>

        <div class="success-message" id="successMsg">
          <div class="success-icon">🏁</div>
          <div class="success-title">WE'VE GOT YOUR MESSAGE</div>
          <p class="success-desc">You're in the queue. Our team will respond within 24 hours on business days. Get ready to hit the redline.</p>
        </div>

      </div>

      <div class="contact-info reveal">
        <p class="contact-intro">Don't do forms? Reach out directly. We actually respond — no automated bots, no week-long silences.</p>
        <div class="info-blocks">
          <div class="info-block"><div class="info-label">Email</div><div class="info-value"><a href="mailto:hello@gtapex.in">hello@gtapex.in</a></div></div>
          <div class="info-block"><div class="info-label">Based In</div><div class="info-value">India — serving brands everywhere</div></div>
          <div class="info-block"><div class="info-label">Response Time</div><div class="info-value">Within 24 hours on business days</div></div>
          <div class="info-block"><div class="info-label">Turnaround for Proposals</div><div class="info-value">72 hours — we don't drag our feet</div></div>
        </div>
        <div class="audit-box">
          <div class="audit-label">Free Brand Audit</div>
          <p class="audit-desc">Not sure where to start? We'll audit your current marketing setup and tell you exactly where you're leaving speed on the table — on us.</p>
          <div class="audit-cta">→ Just mention "audit" in your message</div>
        </div>
      </div>
    </div>
  </section>
  `;
}
