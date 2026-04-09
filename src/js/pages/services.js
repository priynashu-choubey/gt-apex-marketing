// pages/services.js — Services page HTML template
function services() {
  return `
  <section style="padding-top:140px;background:var(--dark-green);padding-bottom:80px;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-30%;right:-5%;width:50vw;height:50vw;background:radial-gradient(ellipse,rgba(67,160,71,0.15) 0%,transparent 65%);pointer-events:none;"></div>
    <div class="section-tag">Full Stack Marketing</div>
    <h1 class="section-title" style="font-size:clamp(56px,8vw,100px)">
      EVERY SERVICE.<br /><span class="accent">ONE TEAM.</span><br /><span class="outline">ZERO SILOS.</span>
    </h1>
    <p style="font-size:18px;color:rgba(255,255,255,0.6);max-width:560px;margin-top:24px;line-height:1.75;">
      Seven complete service verticals under one roof. Your brand doesn't have to juggle five agencies when we run every cylinder of your marketing engine.
    </p>
  </section>

  <div class="marquee-wrap">
    <div class="marquee-track">
      <span class="marquee-item"><span class="dot">◆</span> Strategy</span>
      <span class="marquee-item"><span class="dot">◆</span> Performance</span>
      <span class="marquee-item"><span class="dot">◆</span> Social</span>
      <span class="marquee-item"><span class="dot">◆</span> Content</span>
      <span class="marquee-item"><span class="dot">◆</span> Digital Infrastructure</span>
      <span class="marquee-item"><span class="dot">◆</span> Offline & Traditional</span>
      <span class="marquee-item"><span class="dot">◆</span> Analytics</span>
      <span class="marquee-item"><span class="dot">◆</span> Strategy</span>
      <span class="marquee-item"><span class="dot">◆</span> Performance</span>
      <span class="marquee-item"><span class="dot">◆</span> Social</span>
      <span class="marquee-item"><span class="dot">◆</span> Content</span>
      <span class="marquee-item"><span class="dot">◆</span> Digital Infrastructure</span>
      <span class="marquee-item"><span class="dot">◆</span> Offline & Traditional</span>
      <span class="marquee-item"><span class="dot">◆</span> Analytics</span>
    </div>
  </div>

  <section style="background:var(--black);padding-top:80px;">
    <div class="services-grid stagger-children">
      <div class="service-card"><span class="service-num">01</span><span class="service-icon">🏁</span><div class="service-title">Strategy & Branding</div><ul class="service-items"><li>Brand Strategy & Positioning</li><li>Visual Identity & Graphic Design</li><li>Market Research & Persona Development</li><li>Competitive Analysis</li></ul></div>
      <div class="service-card"><span class="service-num">02</span><span class="service-icon">🔍</span><div class="service-title">Search & Performance</div><ul class="service-items"><li>Search Engine Optimization (SEO)</li><li>Pay-Per-Click / Google Ads (PPC)</li><li>Search Engine Marketing (SEM)</li><li>App Store Optimization (ASO)</li></ul></div>
      <div class="service-card"><span class="service-num">03</span><span class="service-icon">📲</span><div class="service-title">Social & Engagement</div><ul class="service-items"><li>Social Media Management (SMM)</li><li>Paid Social (Meta, LinkedIn, TikTok)</li><li>Influencer Marketing</li><li>Community Management</li></ul></div>
      <div class="service-card"><span class="service-num">04</span><span class="service-icon">🎬</span><div class="service-title">Content & Creative</div><ul class="service-items"><li>Content Marketing & Copywriting</li><li>Video Production & Motion Graphics</li><li>Email Marketing & Automation</li><li>Podcast & Audio Production</li></ul></div>
      <div class="service-card"><span class="service-num">05</span><span class="service-icon">⚙️</span><div class="service-title">Digital Infrastructure</div><ul class="service-items"><li>Website Development & UX/UI Design</li><li>Landing Page Optimization</li><li>E-commerce Management</li><li>CRM Implementation</li></ul></div>
      <div class="service-card"><span class="service-num">06</span><span class="service-icon">📺</span><div class="service-title">Offline & Traditional</div><ul class="service-items"><li>Public Relations (PR)</li><li>Out-of-Home (OOH) Advertising</li><li>Event & Experiential Marketing</li><li>Direct Mail Marketing</li></ul></div>
      <div class="service-card" style="grid-column:1/-1;display:grid;grid-template-columns:auto 1fr;gap:40px;align-items:center;">
        <div><span class="service-num" style="position:static;font-size:100px;color:rgba(67,160,71,0.15);">07</span></div>
        <div>
          <span class="service-icon">📊</span>
          <div class="service-title">Analytics & Reputation</div>
          <ul class="service-items" style="display:grid;grid-template-columns:1fr 1fr;gap:8px 32px;">
            <li>Data Analytics & Reporting</li>
            <li>Conversion Rate Optimization (CRO)</li>
            <li>Online Reputation Management (ORM)</li>
            <li>Marketing Attribution Modeling</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div class="tagline-strip reveal">
    <div class="tagline-text">Which verticals does your brand need?</div>
    <button class="tagline-action" onclick="showPage('contact')">Let's scope it out</button>
  </div>
  `;
}
