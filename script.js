// script.js - form validation logic

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const passwordEl = document.getElementById('password');
  const password2El = document.getElementById('password2');
  const formSuccess = document.getElementById('form-success');

  // Real-time validation: validate each field on input
  nameEl.addEventListener('input', () => validateName(nameEl));
  emailEl.addEventListener('input', () => validateEmail(emailEl));
  passwordEl.addEventListener('input', () => {
    validatePassword(passwordEl);
    // also re-validate confirm password when password changes
    if (password2El.value.trim() !== '') validatePassword2(password2El, passwordEl);
  });
  password2El.addEventListener('input', () => validatePassword2(password2El, passwordEl));

  // On submit, validate everything and prevent submission if any invalid
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccess.textContent = '';

    const nameValid = validateName(nameEl);
    const emailValid = validateEmail(emailEl);
    const passwordValid = validatePassword(passwordEl);
    const password2Valid = validatePassword2(password2El, passwordEl);

    if (nameValid && emailValid && passwordValid && password2Valid) {
      // In a real app you'd send data to the server here
      formSuccess.textContent = 'Registration successful! (demo)';
      form.reset();
      // clear success states after reset to keep UI tidy
      const controls = form.querySelectorAll('.form-control');
      controls.forEach(c => c.classList.remove('success'));
    } else {
      // focus first invalid field
      const firstError = form.querySelector('.form-control.error input');
      if (firstError) firstError.focus();
    }
  });

  // Helper validation functions
  function validateName(input) {
    const value = input.value.trim();
    if (value === '') {
      setError(input, 'Name is required.');
      return false;
    } else if (value.length < 3) {
      setError(input, 'Name must be at least 3 characters.');
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  }

  function validateEmail(input) {
    const value = input.value.trim();
    if (value === '') {
      setError(input, 'Email is required.');
      return false;
    } else if (!isValidEmail(value)) {
      setError(input, 'Please enter a valid email address.');
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  }

  function validatePassword(input) {
    const value = input.value;
    if (value.length < 6) {
      setError(input, 'Password must be at least 6 characters.');
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  }

  function validatePassword2(input, originalPasswordInput) {
    const value = input.value;
    if (value === '') {
      setError(input, 'Please confirm your password.');
      return false;
    } else if (value !== originalPasswordInput.value) {
      setError(input, 'Passwords do not match.');
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  }

  // Exposed helper functions (can be used by other scripts if imported)
  window.formValidationHelpers = {
    setError,
    setSuccess,
    isValidEmail
  };

  // helper implementations
  function setError(input, message) {
    const control = input.closest('.form-control');
    if (!control) return;
    control.classList.remove('success');
    control.classList.add('error');
    const msg = control.querySelector('.message');
    if (msg) msg.textContent = message;
    input.setAttribute('aria-invalid', 'true');
  }

  function setSuccess(input) {
    const control = input.closest('.form-control');
    if (!control) return;
    control.classList.remove('error');
    control.classList.add('success');
    const msg = control.querySelector('.message');
    if (msg) msg.textContent = ''; // clear error text
    input.removeAttribute('aria-invalid');
  }

  function isValidEmail(email) {
    // Simple but practical email regex (not exhaustive RFC)
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});