// main.js — cursor, page routing, scroll reveal

// ── CURSOR ──
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animCursor() {
  dot.style.left  = mx - 4 + 'px';
  dot.style.top   = my - 4 + 'px';
  rx += (mx - rx - 16) * 0.12;
  ry += (my - ry - 16) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();

document.addEventListener('mouseover', e => {
  if (e.target.matches('a, button, .service-card, .why-card, .value-card')) {
    ring.style.width = '52px'; ring.style.height = '52px';
    ring.style.borderColor = 'rgba(67,160,71,0.8)';
    ring.style.marginLeft = '-10px'; ring.style.marginTop = '-10px';
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.matches('a, button, .service-card, .why-card, .value-card')) {
    ring.style.width = '32px'; ring.style.height = '32px';
    ring.style.borderColor = 'rgba(67,160,71,0.5)';
    ring.style.marginLeft = '0'; ring.style.marginTop = '0';
  }
});

// ── PAGE ROUTING ──
const pages = { home, services, about, contact };

window.showPage = function(id) {
  const app = document.getElementById('app');
  app.innerHTML = pages[id]();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(observeReveal, 100);

  // Re-bind form if contact page
  if (id === 'contact') initForm();
};

// ── SCROLL REVEAL ──
function observeReveal() {
  const els = document.querySelectorAll('.reveal, .stagger-children');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => { el.classList.remove('visible'); io.observe(el); });
}

// ── APP BOOT ──
function initApp() {
  showPage('home');
}
