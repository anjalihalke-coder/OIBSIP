# Task 2 · Personal Portfolio
👩‍💻 About the Project

This portfolio site serves as a personal digital résumé, presenting an introduction, background, technical skills, project highlights, and ways to get in touch — all within a clean, responsive, single-page layout.

🎯Objective
Build a modern, animated one-page portfolio that:
- Introduces Anjali and her focus areas
- Lays out her academic history as a timeline
- Displays technical skills grouped by category
- Showcases selected projects with links to GitHub
- Gives visitors clear ways to get in touch

⚙️Steps Performed
1. **Page structure (`index.html`)** — Built a single-page layout with a fixed header/nav and six sections: Home (hero), About, Education, Skills, Projects, and Contact, plus a footer with sitemap and contact links.
2. **Visual design (`style.css`)** — Established a "technical blueprint" design language: a dotted-grid background, ink/blueprint/rust color tokens, and a mixed type system.
3. **Responsive layout** — Structured hero, about, education, skills, and project grids with CSS Grid/Flexbox and breakpoints for smaller screens; added a mobile hamburger nav.
4. **Interactivity (`script.js`)**:
   - Auto-updates the footer copyright year
   - Toggles the mobile nav menu open/closed, closing it on link click
   - Adds a header shadow and a scroll-progress rail as the user scrolls
   - Uses `IntersectionObserver` for scrollspy (highlighting the active nav link) and for scroll-triggered "reveal" animations on sections
   - Shows/hides a "back to top" button based on scroll position
5. **Content population** — Filled in Anjali's education history (SSC, Diploma, B.E. in progress), skill chips (languages, web, data & tools), and three GitHub projects with descriptions and links.

🛠️Tools & Technologies Used
- **HTML5** — semantic single-page structure
- **CSS3** — custom properties, Grid/Flexbox
- **Vanilla JavaScript** — no frameworks

🎥 Demo Video: https://anjalihalke-coder.github.io/OIBSIP/WebDev-L1-Portfolio/Portfolio/

<img width="1887" height="867" alt="image" src="https://github.com/user-attachments/assets/33320845-914f-401f-b92a-154d5067401e" />

✨ Features
- **Profile/Hero section** — name, role title, and avatar/photo placeholder
- **About Me section** — a short 2–3 sentence background and interest summary
- **Skills section** — a visual grid/list layout of technical skills
- **Projects section** — placeholder project cards with title, description, and GitHub link placeholders
- **Contact section** — name, email, and social/GitHub/LinkedIn icon links
- **Smooth scroll navigation** between all sections
- **Sticky header** with a scroll-based shadow effect for visual feedback
- **Scroll progress rail** showing reading progress down the page
- **Scrollspy navigation** — highlights the active section link as you scroll
- **Scroll-reveal animations** for sections entering the viewport (respects `prefers-reduced-motion`)
- **Typing effect** for rotating role titles (e.g., "Web Developer", "Problem Solver")
- **Back-to-top button** that appears after scrolling

📋Outcome

A fully static, dependency-free portfolio (`index.html`, `style.css`, `script.js`) that runs by opening `index.html` directly in a browser. It's responsive, respects reduced-motion preferences, and presents Anjali's education, skills, and projects with subtle scroll-driven animation.
- **Mobile-responsive navigation** with a toggleable menu.
- Consistent colour scheme and font family applied across the entire site.

