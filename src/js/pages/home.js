// pages/home.js — Home page HTML template
function home() {
  return `
  <section class="hero">
    <div class="hero-bg-lines"></div>
    <div class="speed-lines">
      <div class="speed-line"></div><div class="speed-line"></div>
      <div class="speed-line"></div><div class="speed-line"></div><div class="speed-line"></div>
    </div>
    <div class="hero-badge"><span class="badge-dot"></span>360° Digital Marketing Agency</div>
    <h1>
      <span class="outline glitch" data-text="FLOOR IT.">FLOOR IT.</span>
      <span class="accent">YOUR BRAND,</span>
      REDLINED.
    </h1>
    <p class="hero-sub">Most agencies cruise in the slow lane. We tune your marketing like a race-spec engine — <strong>every cylinder firing, zero drag, maximum output.</strong></p>
    <div class="hero-cta-row">
      <a class="btn-primary" onclick="showPage('contact')">Strap in — Let's go →</a>
      <a class="btn-ghost"   onclick="showPage('services')">Explore services</a>
    </div>
    <div class="hero-metrics">
      <div class="metric-item"><div class="metric-num">7+</div><div class="metric-label">Service Verticals</div></div>
      <div class="metric-item"><div class="metric-num">360°</div><div class="metric-label">Marketing Coverage</div></div>
      <div class="metric-item"><div class="metric-num">0</div><div class="metric-label">Excuses Made</div></div>
      <div class="metric-item"><div class="metric-num">∞</div><div class="metric-label">ROI Obsession</div></div>
    </div>
  </section>

  <div class="marquee-wrap">
    <div class="marquee-track">
      <span class="marquee-item"><span class="dot">◆</span> Brand Strategy</span>
      <span class="marquee-item"><span class="dot">◆</span> Performance Marketing</span>
      <span class="marquee-item"><span class="dot">◆</span> Social Media</span>
      <span class="marquee-item"><span class="dot">◆</span> SEO & SEM</span>
      <span class="marquee-item"><span class="dot">◆</span> Content & Creative</span>
      <span class="marquee-item"><span class="dot">◆</span> Web Development</span>
      <span class="marquee-item"><span class="dot">◆</span> Data Analytics</span>
      <span class="marquee-item"><span class="dot">◆</span> OOH Advertising</span>
      <span class="marquee-item"><span class="dot">◆</span> Brand Strategy</span>
      <span class="marquee-item"><span class="dot">◆</span> Performance Marketing</span>
      <span class="marquee-item"><span class="dot">◆</span> Social Media</span>
      <span class="marquee-item"><span class="dot">◆</span> SEO & SEM</span>
      <span class="marquee-item"><span class="dot">◆</span> Content & Creative</span>
      <span class="marquee-item"><span class="dot">◆</span> Web Development</span>
      <span class="marquee-item"><span class="dot">◆</span> Data Analytics</span>
      <span class="marquee-item"><span class="dot">◆</span> OOH Advertising</span>
    </div>
  </div>

  <section class="why-section">
    <div class="section-tag reveal">Why GT Apex</div>
    <h2 class="section-title reveal">WE DON'T JUST<br /><span class="accent">RUN ADS.</span><br /><span class="outline">WE BUILD MACHINES.</span></h2>
    <div class="why-grid">
      <div class="why-left reveal">
        <p class="why-desc">Every brand has potential energy sitting idle. We're the engineering team that converts it into kinetic growth — precision-tuned strategies, real-time optimization, and creative that actually hits.</p>
        <a class="btn-primary" onclick="showPage('services')">See our full arsenal →</a>
      </div>
      <div class="why-right stagger-children">
        <div class="why-card"><div class="why-card-head"><div class="why-card-icon">⚡</div><div class="why-card-title">Full Throttle Strategy</div></div><p class="why-card-desc">No half-measures. We go all-in on your brand with strategies built to dominate, not just participate.</p></div>
        <div class="why-card"><div class="why-card-head"><div class="why-card-icon">📡</div><div class="why-card-title">Real-Time Intelligence</div></div><p class="why-card-desc">Data dashboards, live attribution, and weekly reports so you always know what's working at 200mph.</p></div>
        <div class="why-card"><div class="why-card-head"><div class="why-card-icon">🎯</div><div class="why-card-title">Zero Wasted Spend</div></div><p class="why-card-desc">Every rupee is a lap time. We tune your budget allocation so nothing leaks and everything compounds.</p></div>
      </div>
    </div>
  </section>

  <section class="process-section">
    <div class="section-tag reveal">The Pit Stop Protocol</div>
    <h2 class="section-title reveal">HOW WE<br /><span class="accent">TAKE YOU</span> FROM<br /><span class="outline">0 TO APEX.</span></h2>
    <div class="process-steps stagger-children" style="margin-top:80px">
      <div class="process-step"><div class="step-circle">01</div><div class="step-title">Audit & Diagnose</div><p class="step-desc">Full brand teardown. We find every leak, every bottleneck, every missed gear shift in your current marketing.</p></div>
      <div class="process-step"><div class="step-circle">02</div><div class="step-title">Blueprint & Build</div><p class="step-desc">Custom strategy engineered to your market position, audience, and growth targets. No templates, no shortcuts.</p></div>
      <div class="process-step"><div class="step-circle">03</div><div class="step-title">Launch & Accelerate</div><p class="step-desc">Campaigns go live across every channel simultaneously. Full throttle from day one, not month six.</p></div>
      <div class="process-step"><div class="step-circle">04</div><div class="step-title">Optimize & Scale</div><p class="step-desc">Continuous data feedback loop. We adjust, amplify what works, and kill what doesn't — relentlessly.</p></div>
    </div>
  </section>

  <div class="tagline-strip reveal">
    <div class="tagline-text">Ready to hit your marketing redline?</div>
    <button class="tagline-action" onclick="showPage('contact')">Let's talk strategy</button>
  </div>
  `;
}
