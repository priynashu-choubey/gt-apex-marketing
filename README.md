# GT Apex Marketing Website

Full-throttle 360° marketing agency website with Supabase + EmailJS backend.

## Project Structure

```
gt-apex-marketing/
├── server.js              ← Express server (serves site + exposes env vars)
├── package.json
├── .env                   ← API keys (never commit this)
├── .gitignore
└── src/
    ├── index.html         ← Main HTML shell
    ├── css/
    │   └── styles.css     ← All styles
    └── js/
        ├── config.js      ← Fetches credentials from /api/config
        ├── main.js        ← Cursor, routing, scroll reveal
        ├── form.js        ← Validation + Supabase + EmailJS
        └── pages/
            ├── home.js    ← Home page template
            ├── services.js← Services page template
            ├── about.js   ← About page template
            └── contact.js ← Contact page template
```

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Edit `.env` with your credentials:
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_publishable_key
EMAILJS_SERVICE=service_xxxxxxx
EMAILJS_TEMPLATE=template_xxxxxxx
EMAILJS_KEY=your_public_key
```

### 3. Create Supabase `leads` table
In Supabase → Table Editor → New Table called `leads` with columns:
| Column | Type | Default |
|---|---|---|
| id | int8 | auto |
| first_name | text | — |
| last_name | text | — |
| email | text | — |
| company | text | — |
| service | text | — |
| message | text | — |
| created_at | timestamptz | now() |

### 4. Configure EmailJS template
In EmailJS → Email Templates, use these variables:
```
{{first_name}} {{last_name}}
{{from_email}}
{{company}}
{{service}}
{{message}}
```

### 5. Run the server
```bash
# Development (auto-restart)
npm run dev

# Production
npm start
```

Site runs at: **http://localhost:3000**

## Deployment
Deploy to any Node.js host (Railway, Render, Heroku, DigitalOcean).
Set environment variables in your host's dashboard — never commit `.env`.
