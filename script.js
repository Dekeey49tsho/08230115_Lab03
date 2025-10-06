// ---------- 1. JavaScript Basics ----------
console.log("Welcome to Deki Tshomo's Interactive Portfolio!");

// ---------- 2. DOM Manipulation ----------
const heroHeading = document.querySelector(".hero h1");
heroHeading.style.color = "#fff8dc";

const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Deki Tshomo | All Rights Reserved`;

// ---------- 3. Event Handling ----------

// Change hero background when clicked
const heroSection = document.querySelector(".hero");
heroSection.addEventListener("click", () => {
  heroSection.style.background = "linear-gradient(135deg, #ffb6c1, #ffd1dc)";
  alert("You clicked the hero section! 🌸");
});

// Handle contact form submission
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you for your message! I'll get back to you soon 😊");
  form.reset();
});

// Hover color for navigation links
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => (link.style.color = "#ff69b4"));
  link.addEventListener("mouseout", () => (link.style.color = "#fff"));
});

// ---------- 4. Dark / Light Mode Toggle (repositioned & styled) ----------
const toggleButton = document.createElement("button");
toggleButton.textContent = "🌙 Dark Mode";
toggleButton.classList.add("toggle-mode");

// Inline style so no CSS edits are needed
Object.assign(toggleButton.style, {
  position: "fixed",
  top: "70px",        // moved slightly below nav bar
  right: "20px",
  padding: "8px 14px",
  border: "none",
  borderRadius: "10px",
  background: "#ff6f91",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  zIndex: "9999",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  transition: "all 0.3s ease"
});

document.body.appendChild(toggleButton);

let darkMode = false;
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkMode = !darkMode;
  toggleButton.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// ---------- 5. Fade-in Animation for Education Section ----------
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
      el.style.opacity = "1";
      el.style.transform = "none";
    }
  });
});

// ---------- 6. Hover Glow for Skill Boxes ----------
const skillBoxes = document.querySelectorAll('.glow');
skillBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.05)';
    box.style.boxShadow = '0 0 20px #ff6f91';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
    box.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  });
});

// ---------- 7. Toggle Project Descriptions ----------
const projects = document.querySelectorAll('.project-card');
projects.forEach(project => {
  const desc = project.querySelector('.project-desc');
  if (desc) {
    desc.style.display = 'none';
    project.addEventListener('click', () => {
      const isVisible = desc.style.display === 'block';
      desc.style.display = isVisible ? 'none' : 'block';
    });
  }
});

// ---------- 8. Make sure key sections’ text stays visible ----------
["#education", "#skills", "#projects"].forEach(sel => {
  const section = document.querySelector(sel);
  if (section) {
    section.querySelectorAll("*").forEach(el => {
      el.style.visibility = "visible";
      el.style.opacity = "1";
      el.style.display = getComputedStyle(el).display === "none" ? "block" : getComputedStyle(el).display;
    });
  }
});

console.log("Script loaded successfully — all interactive features active!");
