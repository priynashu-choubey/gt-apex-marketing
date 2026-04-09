require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from src/
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'public')));

// Expose only the necessary env vars to the frontend (never expose secret keys)
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl:      process.env.SUPABASE_URL,
    supabaseKey:      process.env.SUPABASE_KEY,
    emailjsService:   process.env.EMAILJS_SERVICE,
    emailjsTemplate:  process.env.EMAILJS_TEMPLATE,
    emailjsKey:       process.env.EMAILJS_KEY,
  });
});

// All routes serve index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🏁 GT Apex Marketing running at http://localhost:${PORT}\n`);
});
