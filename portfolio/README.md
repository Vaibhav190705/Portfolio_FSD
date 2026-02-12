# Vaibhav Babasaheb Shinde - Portfolio

This is a simple, responsive portfolio website built using **HTML, CSS, and JavaScript**. It showcases personal details, skills, projects, and contact information for **Vaibhav Babasaheb Shinde**, an Electrical & Computer Engineering student at **MIT World Peace University**.

The site is designed to be clean, modern, and mobile-friendly, with support for dark/light mode and basic form validation.

## Features

- **Homepage / Hero**
  - Introduction with name, short professional summary, and role highlights.
  - Clear call-to-action buttons to view projects and contact.

- **About Section**
  - Career objective.
  - Key achievements and academic/extra-curricular highlights.

- **Skills Section**
  - Technical skills (renewable energy, embedded systems, EV systems, etc.).
  - Software/tools (C, Python, MATLAB/Simulink, Proteus, HTML/CSS/JS, MS Office).

- **Projects Section**
  - Solar–Wind Hybrid Power Generation System.
  - Smart Energy Monitoring with Microcontrollers.
  - EV Charging System with MPPT & basic ML-based load prediction.

- **Contact Section**
  - Contact details (email, phone).
  - Contact form with client-side validation (name, email, message).

- **Bonus / Extras**
  - Dark / light mode toggle (preference saved in `localStorage`).
  - Downloadable resume button (PDF placeholder).
  - Smooth, responsive layout using Flexbox and CSS Grid.
  - Simple scroll animations using `IntersectionObserver`.

## Technologies Used

- **HTML5** (semantic tags: `header`, `main`, `section`, `article`, `nav`, `footer`, etc.)
- **CSS3**
  - Flexbox and CSS Grid for layout.
  - Custom properties (CSS variables) for color system and theming.
  - Transitions, hover effects, and subtle animations.
  - Media queries for responsiveness.
- **JavaScript (ES6)**
  - Mobile navigation toggle.
  - Dark/light mode toggle with theme persistence.
  - Contact form validation.
  - Scroll-based fade-in animation for content cards.

## Project Structure

```text
portfolio/
  index.html          # Main HTML file
  css/
    style.css         # All styles for layout, theming, and responsiveness
  js/
    script.js         # Interactivity, toggles, validation, scroll effects
  assets/
    images/           # (Optional) Place any images here
    Vaibhav_Shinde_Resume.pdf  # (Optional) Resume file for download button
  README.md           # Project overview and instructions
```

## How to Run Locally

1. Download or clone the project into a folder (e.g., `portfolio`).
2. Ensure the structure above is preserved.
3. (Optional) Place your resume file as `assets/Vaibhav_Shinde_Resume.pdf` so that the download button works.
4. Open `index.html` in any modern web browser:
   - On Windows: right-click `index.html` → **Open with** → choose your browser (Chrome, Edge, Firefox, etc.).

No build tools or servers are required; it is a static site.

## Deployment (Optional)

You can deploy this site using any static hosting provider:

- **GitHub Pages**
  - Initialize a Git repository in the project folder.
  - Push to a GitHub repository.
  - Enable GitHub Pages from the repository settings (source: `main` / `docs` or root).

- **Netlify / Vercel**
  - Drag-and-drop the folder in the Netlify dashboard **or**
  - Connect your Git repository and deploy directly.

In all cases, the entry point should be `index.html`.

## Notes

- You can add real LinkedIn / GitHub profile URLs in the contact section of `index.html` when available.
- For assignment submission:
  - Take **screenshots** of the main sections (Home, About, Skills, Projects, Contact).
  - Zip the entire project folder (`index.html`, `css`, `js`, `assets`, `README.md`) and submit the `.zip` file or GitHub link as required.

