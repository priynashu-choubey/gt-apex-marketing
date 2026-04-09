require("dotenv").config();

console.log("=== ENV DEBUG ===");
console.log("EMAILJS_SERVICE:", process.env.EMAILJS_SERVICE);
console.log("EMAILJS_TEMPLATE:", process.env.EMAILJS_TEMPLATE);
console.log("EMAILJS_KEY:", process.env.EMAILJS_KEY);
console.log("=================");
require("dotenv").config();
const express = require("express");
const path = require("path");
const https = require("https");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(path.join(__dirname, "public")));

// ── CONFIG — only safe public keys sent to browser ──
// EmailJS key is intentionally excluded here (sent server-side only)
app.get("/api/config", (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    emailjsService: process.env.EMAILJS_SERVICE,
    emailjsTemplate: process.env.EMAILJS_TEMPLATE,
    // emailjsKey is NOT sent to the browser
  });
});

// ── SEND EMAIL — server-side so EmailJS key never reaches the browser ──
app.post("/api/send-email", async (req, res) => {
  const { first_name, last_name, email, company, service, message } = req.body;

  // ✅ Strong validation
  if (!first_name || !last_name || !email || !company) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const payload = JSON.stringify({
    service_id: process.env.EMAILJS_SERVICE,
    template_id: process.env.EMAILJS_TEMPLATE,
    public_key: process.env.EMAILJS_KEY, // ✅ FIXED
    template_params: {
      first_name,
      last_name,
      from_email: email,
      company,
      service: service || "Not specified",
      message: message || "No message provided.",
    },
  });

  const options = {
    hostname: "api.emailjs.com",
    path: "/api/v1.0/email/send",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(payload),
    },
  };

  const emailReq = https.request(options, (emailRes) => {
    let data = "";

    // ✅ capture full response
    emailRes.on("data", (chunk) => {
      data += chunk;
    });

    emailRes.on("end", () => {
      console.log("📩 EmailJS status:", emailRes.statusCode);
      console.log("📩 EmailJS response:", data);

      if (emailRes.statusCode === 200) {
        return res.json({ ok: true });
      } else {
        return res.status(emailRes.statusCode).json({
          error: "EmailJS failed",
          details: data, // ✅ now you see real error
        });
      }
    });
  });

  emailReq.on("error", (err) => {
    console.error("❌ EmailJS request failed:", err);
    return res.status(500).json({ error: "Email send failed" });
  });

  emailReq.write(payload);
  emailReq.end();
});
// ── SPA fallback ──
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n🏁 GT Apex Marketing running at http://localhost:${PORT}\n`);
});
