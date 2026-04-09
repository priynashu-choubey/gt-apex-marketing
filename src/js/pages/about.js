// pages/about.js — About page HTML template
function about() {
  return `
  <div class="about-hero">
    <div class="about-content">
      <div class="section-tag">The GT Apex Story</div>
      <h1 class="section-title" style="font-size:clamp(56px,8vw,100px)">
        BUILT BY<br /><span class="accent">OBSESSIVES,</span><br /><span class="outline">FOR WINNERS.</span>
      </h1>
      <p class="about-desc">GT Apex Marketing was born from a simple frustration: most agencies are comfortable. We're not. We're the team that loses sleep over your CAC, obsesses over your conversion funnel, and celebrates your wins like our own.</p>
    </div>
  </div>

  <div class="about-values">
    <div class="section-tag reveal">What drives us</div>
    <h2 class="section-title reveal">THE <span class="accent">APEX</span><br /><span class="outline">PRINCIPLES.</span></h2>
    <div class="values-grid stagger-children">
      <div class="value-card">
        <div class="value-icon">🚀</div>
        <div class="value-title">VELOCITY <span class="accent">FIRST</span></div>
        <p class="value-desc">Speed without direction is just spinning wheels. We move fast and precise — strategy locked, then full throttle execution.</p>
      </div>
      <div class="value-card">
        <div class="value-icon">🔬</div>
        <div class="value-title">DATA <span class="accent">OBSESSED</span></div>
        <p class="value-desc">Gut feel is for amateurs. Every decision we make is backed by numbers, tracked in real-time, and stress-tested against results.</p>
      </div>
      <div class="value-card">
        <div class="value-icon">🤝</div>
        <div class="value-title">SKIN IN THE <span class="accent">GAME</span></div>
        <p class="value-desc">We don't win unless you win. That's why we're built for long-term partnership, not short sprints that look good on a deck.</p>
      </div>
    </div>
  </div>

  <div class="tagline-strip reveal">
    <div class="tagline-text">Sound like your kind of team?</div>
    <button class="tagline-action" onclick="showPage('contact')">Let's connect</button>
  </div>
  `;
}
