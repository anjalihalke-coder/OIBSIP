# Task 1 · Landing Page — The Lending Shed
🌿 About the Project
**The Lending Shed** is a neighbourhood tool-lending library concept — a community-run space where neighbours can borrow tools instead of buying and storing their own. This landing page introduces the idea, explains how borrowing works, showcases the tool catalog, and features member stories.

🎯Objective

Build a responsive, multilingual marketing site for a neighbourhood tool-sharing service that:
- Explains how borrowing works and what's available to borrow
- Collects and displays visitor feedback
- Helps visitors locate their nearest lending shed on a map

⚙️🪜Steps Performed
1. **Page structure (`index.html`)** — Built semantic sections for nav, hero, "How it works," catalog, testimonials, customer feedback, shed finder, and footer.
2. **Styling (`style.css`)** — Designed a warm, editorial look (serif headings, rust/olive/steel palette) with a CSS custom-property system for theming, plus responsive breakpoints for tablet and mobile.
3. **Dark mode** — Added a `data-theme` attribute toggle on `<html>`, swapping the CSS variable palette; preference is applied via `script.js`.
4. **Internationalization** — Built a `translations` object in `script.js` covering English, Hindi, and Marathi, with `data-i18n` / `data-i18n-html` / `data-i18n-placeholder` attributes on markup.
5. **Customer feedback** — Implemented a form that saves submissions (name, message, year) to `localStorage`, renders them as testimonial cards, and supports per-entry deletion.
6. **Shed finder** — Integrated the Google Maps JavaScript API: `initMap()` plots known shed locations with clickable markers; `findShed()` geocodes a user-entered address, calculates the closest shed, and recenters the map with a marker at the searched location.

🛠️Tools & Technologies Used
- **HTML5** — semantic markup
- **CSS3** — custom properties, Grid/Flexbox layout, responsive media queries
- **Vanilla JavaScript** — no frameworks
- **Google Maps JavaScript API** — Maps, Markers, Geocoding

<img width="1883" height="895" alt="image" src="https://github.com/user-attachments/assets/b1f6e66e-d77d-460c-8a39-e43dbb2f4193" />

✨ Features
- Sticky navigation bar with multiple links (How it Works, Catalog, Stories, Feedback)
- Hero section with a headline, subheadline, and clear call-to-action buttons
- Multiple distinct content sections:
  - **How It Works** — a 3-step borrowing process
  - **Catalog** — a grid of available tools with stock counts
  - **Stories/Testimonials** — real-style member quotes
  - **Customer Feedback** — a feedback submission section
  - **Find a Shed** — location search section
- Consistent colour palette (charcoal, cream, rust, olive, steel tones) applied throughout
- Dark mode toggle for an alternate colour theme
- Language switcher (EN / HI / MR) for future localisation support
- Fully responsive layout using CSS Grid and Flexbox — adapts cleanly to tablet and mobile widths
- Clean, readable typography with a serif heading font paired with a sans-serif body font
- Careful use of `box-sizing`, padding, and margin to avoid element overlap at any screen size

**Outcome**

A fully static, framework-free site (`index.html`, `style.css`, `script.js`) that runs by opening `index.html` in a browser. It supports light/dark themes, three languages, a persisted feedback wall, and an interactive map to find the nearest shed.
