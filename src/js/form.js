// form.js — form validation + Supabase + EmailJS submission

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setFieldError(inputId, errId, hasError) {
  const input = document.getElementById(inputId);
  const err   = document.getElementById(errId);
  if (!input || !err) return !hasError;
  input.classList.toggle('error', hasError);
  err.classList.toggle('visible', hasError);
  return !hasError;
}

function validateForm() {
  const firstName = document.getElementById('firstName')?.value.trim();
  const lastName  = document.getElementById('lastName')?.value.trim();
  const email     = document.getElementById('email')?.value.trim();
  const company   = document.getElementById('company')?.value.trim();

  let valid = true;
  valid = setFieldError('firstName', 'firstNameErr', !firstName)  && valid;
  valid = setFieldError('lastName',  'lastNameErr',  !lastName)   && valid;
  valid = setFieldError('email',     'emailErr',     !validateEmail(email)) && valid;
  valid = setFieldError('company',   'companyErr',   !company)    && valid;
  return valid;
}

function clearErrorOnInput(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => el.classList.remove('error'));
  });
}

async function handleSubmit(e) {
  e.preventDefault();
  if (!validateForm()) return;

  const btn         = document.getElementById('submitBtn');
  const errorBanner = document.getElementById('errorBanner');
  errorBanner.classList.remove('visible');

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span>Sending...';

  const data = {
    first_name: document.getElementById('firstName').value.trim(),
    last_name:  document.getElementById('lastName').value.trim(),
    email:      document.getElementById('email').value.trim(),
    company:    document.getElementById('company').value.trim(),
    service:    document.getElementById('service').value,
    message:    document.getElementById('message').value.trim(),
  };

  try {
    // 1. Save lead to Supabase
    const { error: dbError } = await window.db.from('leads').insert([data]);
    if (dbError) throw new Error('DB error: ' + dbError.message);

    // 2. Send email notification via EmailJS
    await emailjs.send(
      window.APP_CONFIG.emailjsService,
      window.APP_CONFIG.emailjsTemplate,
      {
        first_name: data.first_name,
        last_name:  data.last_name,
        from_email: data.email,
        company:    data.company,
        service:    data.service,
        message:    data.message || 'No message provided.',
      }
    );

    // 3. Show success state
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMsg').classList.add('visible');

  } catch (err) {
    console.error('Submission failed:', err);
    errorBanner.classList.add('visible');
    btn.disabled = false;
    btn.innerHTML = "Send it — we'll respond within 24hrs →";
  }
}

// Called by main.js after contact page renders
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', handleSubmit);
  clearErrorOnInput(['firstName', 'lastName', 'email', 'company']);
}
