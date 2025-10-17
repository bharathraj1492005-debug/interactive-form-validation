# Interactive Form Validation

A small demo project showcasing an interactive signup form with real-time client-side validation using plain HTML, CSS and JavaScript.

## Features
- Real-time validation while the user types
- Clear error styling and messages below each input
- Visual success (green) and error (red) input borders
- Prevents form submission until all fields are valid
- Responsive layout — works well on mobile and desktop
- Small, dependency-free codebase (vanilla JS)

## Technologies
- HTML5
- CSS3
- JavaScript (ES6)

## Files
- `index.html` — the signup form and structure
- `style.css` — styles, layout, responsive rules and states
- `script.js` — validation logic, helper functions and event handlers
- `app.js` — optional app initialization (basic stub)
  
## Validation rules
- Name
  - Required
  - Minimum 3 characters
- Email
  - Required
  - Must be a valid email format
- Password
  - Minimum 6 characters
- Confirm Password
  - Required
  - Must match the Password field

## How to run locally
1. Clone or download the repository to your machine.
2. Open `index.html` in your browser (double-click or serve with a static server).
   - Optional: use `npx http-server` or `python -m http.server` in the project directory for a local server.
3. Try entering values in the inputs — errors will show in real-time. Submit the form when all fields are valid.

## Extending
- Add stronger password rules (uppercase, digits, symbols).
- Integrate with backend registration endpoints (AJAX/fetch).
- Add role selection, privacy consent checkboxes, or captcha integration.
- Save preferences to localStorage or implement progressive enhancement.

## Accessibility notes
- Inputs use associated `<label>` elements.
- Error messages are placed in small elements below inputs and `aria-invalid` is toggled on invalid fields.
- The form uses `aria-live="polite"` on the success message container to announce submission success to assistive technologies.

Enjoy exploring and customizing the validation!