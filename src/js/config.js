// config.js — fetches credentials from server so keys stay in .env
window.APP_CONFIG = {};

async function loadConfig() {
  try {
    const res = await fetch("/api/config");
    if (!res.ok) throw new Error("Config request failed: " + res.status);
    window.APP_CONFIG = await res.json();
  } catch (e) {
    console.error("Failed to load config:", e);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadConfig();

  // Guard — if config failed, don't silently boot a broken app
  if (!window.APP_CONFIG.supabaseUrl || !window.APP_CONFIG.supabaseKey) {
    console.error(
      "App config missing — check your .env and server /api/config endpoint",
    );
    document.getElementById("app").innerHTML =
      '<p style="color:#e53935;padding:120px 64px;font-family:sans-serif;">Failed to load app configuration. Please try again later.</p>';
    return;
  }

  // Init Supabase
  const { createClient } = supabase;
  window.db = createClient(
    window.APP_CONFIG.supabaseUrl,
    window.APP_CONFIG.supabaseKey,
  );

  // EmailJS is now initialized server-side — no client init needed

  // Boot the app
  initApp();
});
