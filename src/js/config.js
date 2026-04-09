// config.js — fetches credentials from server so keys stay in .env
window.APP_CONFIG = {};

async function loadConfig() {
  try {
    const res = await fetch('/api/config');
    window.APP_CONFIG = await res.json();
  } catch (e) {
    console.error('Failed to load config:', e);
  }
}

// Load config before anything else runs
document.addEventListener('DOMContentLoaded', async () => {
  await loadConfig();

  // Init Supabase
  const { createClient } = supabase;
  window.db = createClient(window.APP_CONFIG.supabaseUrl, window.APP_CONFIG.supabaseKey);

  // Init EmailJS
  emailjs.init(window.APP_CONFIG.emailjsKey);

  // Boot the app
  initApp();
});
