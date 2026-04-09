// form.js — form validation, Supabase lead capture, email notification

function initForm() {
  const form = document.getElementById("contactForm");
  const errorBanner = document.getElementById("errorBanner");
  const successMsg = document.getElementById("successMsg");
  const btn = document.getElementById("submitBtn");

  if (!form) return; // guard: contact page not yet in DOM

  // ── FIELD REFS ──
  const fields = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    company: document.getElementById("company"),
    service: document.getElementById("service"),
    message: document.getElementById("message"),
  };

  const errors = {
    firstName: document.getElementById("firstNameErr"),
    lastName: document.getElementById("lastNameErr"),
    email: document.getElementById("emailErr"),
    company: document.getElementById("companyErr"),
  };

  // ── HELPERS ──
  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  }

  function setError(key, msg) {
    if (!errors[key]) return;
    fields[key].classList.add("error");
    errors[key].textContent = msg;
    errors[key].classList.add("visible");
  }

  function clearError(key) {
    if (!errors[key]) return;
    fields[key].classList.remove("error");
    errors[key].classList.remove("visible");
  }

  function clearAllErrors() {
    Object.keys(errors).forEach(clearError);
    errorBanner.classList.remove("visible");
  }

  // ── INLINE VALIDATION (on blur) ──
  fields.firstName.addEventListener("blur", () => {
    if (!fields.firstName.value.trim()) {
      setError("firstName", "Please enter your first name");
    } else {
      clearError("firstName");
    }
  });

  fields.lastName.addEventListener("blur", () => {
    if (!fields.lastName.value.trim()) {
      setError("lastName", "Please enter your last name");
    } else {
      clearError("lastName");
    }
  });

  fields.email.addEventListener("blur", () => {
    if (!isValidEmail(fields.email.value)) {
      setError("email", "Please enter a valid email address");
    } else {
      clearError("email");
    }
  });

  fields.company.addEventListener("blur", () => {
    if (!fields.company.value.trim()) {
      setError("company", "Please enter your company name");
    } else {
      clearError("company");
    }
  });

  // ── HONEYPOT (anti-spam hidden field) ──
  // The contact.js template must include:
  // <input type="text" id="honeypot" name="honeypot" style="display:none" tabindex="-1" autocomplete="off">
  const honeypot = document.getElementById("honeypot");

  // ── SUBMIT ──
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearAllErrors();

    // Bot check
    if (honeypot && honeypot.value) return;

    // Validate
    let valid = true;

    if (!fields.firstName.value.trim()) {
      setError("firstName", "Please enter your first name");
      valid = false;
    }
    if (!fields.lastName.value.trim()) {
      setError("lastName", "Please enter your last name");
      valid = false;
    }
    if (!isValidEmail(fields.email.value)) {
      setError("email", "Please enter a valid email address");
      valid = false;
    }
    if (!fields.company.value.trim()) {
      setError("company", "Please enter your company name");
      valid = false;
    }
    if (!fields.message.value.trim()) {
      fields.message.value = ""; // ensure empty string, never null
    }
    if (!valid) return;

    // Build data object
    const data = {
      first_name: fields.firstName.value.trim(),
      last_name: fields.lastName.value.trim(),
      email: fields.email.value.trim().toLowerCase(),
      company: fields.company.value.trim(),
      service: fields.service.value,
      message: fields.message.value.trim() || null,
    };

    // Loading state
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span>Sending…';

    try {
      // 1. Save lead to Supabase
      const { error: dbError } = await window.db.from("leads").insert([data]);

      if (dbError) throw new Error("DB error: " + dbError.message);

      // 2. Send email notification via server (keeps EmailJS key off the browser)
      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch (emailErr) {
        // Email failure is non-fatal — lead is already saved
        console.warn("Email notification failed:", emailErr);
      }

      // 3. Show success
      form.style.display = "none";
      successMsg.classList.add("visible");
    } catch (err) {
      console.error("Submission failed:", err);
      errorBanner.classList.add("visible");
      btn.disabled = false;
      btn.innerHTML = "Send it — we'll respond within 24hrs →";
    }
  });
}
