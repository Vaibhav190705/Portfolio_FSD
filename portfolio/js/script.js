// ============================
// HELPER FUNCTIONS
// ============================
function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

// ============================
// NAVBAR TOGGLE (MOBILE)
// ============================
const navToggle = select(".nav-toggle");
const navLinks = select(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close mobile nav when clicking on a link
  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a" && navLinks.classList.contains("is-open")) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ============================
// DARK / LIGHT THEME TOGGLE
// ============================
const themeToggleBtn = select("#theme-toggle");
const THEME_KEY = "vaibhav-theme";

function applyStoredTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
}

applyStoredTheme();

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  });
}

// ============================
// CONTACT FORM VALIDATION
// ============================
const contactForm = select("#contact-form");
const statusEl = select("#form-status");

function showError(fieldId, message) {
  const group = select(`#${fieldId}`)?.closest(".form-group");
  const errorEl = select(`[data-error-for="${fieldId}"]`);
  if (!group || !errorEl) return;

  group.classList.add("invalid");
  errorEl.textContent = message;
}

function clearError(fieldId) {
  const group = select(`#${fieldId}`)?.closest(".form-group");
  const errorEl = select(`[data-error-for="${fieldId}"]`);
  if (!group || !errorEl) return;

  group.classList.remove("invalid");
  errorEl.textContent = "";
}

function validateEmail(value) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
}

if (contactForm && statusEl) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    statusEl.textContent = "";
    statusEl.classList.remove("success", "error");

    const name = select("#name").value.trim();
    const email = select("#email").value.trim();
    const message = select("#message").value.trim();

    let isValid = true;

    // Name validation
    if (!name) {
      showError("name", "Please enter your name.");
      isValid = false;
    } else {
      clearError("name");
    }

    // Email validation
    if (!email) {
      showError("email", "Please enter your email address.");
      isValid = false;
    } else if (!validateEmail(email)) {
      showError("email", "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError("email");
    }

    // Message validation
    if (!message) {
      showError("message", "Please enter a message.");
      isValid = false;
    } else if (message.length < 10) {
      showError("message", "Your message should be at least 10 characters long.");
      isValid = false;
    } else {
      clearError("message");
    }

    if (!isValid) {
      statusEl.textContent = "Please correct the highlighted fields and try again.";
      statusEl.classList.add("error");
      return;
    }

    // Simulated success (form is not actually sent anywhere yet)
    contactForm.reset();
    statusEl.textContent = "Thank you! Your message has been validated successfully.";
    statusEl.classList.add("success");
  });
}

// Clear individual field errors on input
selectAll("#contact-form input, #contact-form textarea").forEach((field) => {
  field.addEventListener("input", () => {
    clearError(field.id);
  });
});

// ============================
// SCROLL ANIMATIONS
// ============================
const animatedCards = selectAll(".card, .section-header");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedCards.forEach((el) => {
    el.classList.add("fade-in-up");
    observer.observe(el);
  });
}

// ============================
// FOOTER YEAR
// ============================
const yearEl = select("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

