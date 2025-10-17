// app.js - basic initialization / future entry point
// This file is optional and demonstrates how other initialization could happen.
// Right now it simply logs startup and illustrates how to call helpers from script.js if needed.

document.addEventListener('DOMContentLoaded', () => {
  console.log('App initialized: Interactive Form Validation demo');

  // Example: use helper to validate an email programmatically (no-op demo)
  if (window.formValidationHelpers && typeof window.formValidationHelpers.isValidEmail === 'function') {
    // demo check (no UI effect)
    const demo = 'demo@example.com';
    console.log(`Demo email "${demo}" valid?`, window.formValidationHelpers.isValidEmail(demo));
  }
});