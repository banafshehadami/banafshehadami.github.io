const themeToggle = document.getElementById("theme-toggle");
const year = document.getElementById("year");
const savedTheme = localStorage.getItem("theme");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeToggle.textContent = isDark ? "Light" : "Dark";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

function setActiveNav() {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute("id") || "";
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

applyTheme(savedTheme === "dark");
year.textContent = new Date().getFullYear();

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  applyTheme(isDark);
});

window.addEventListener("scroll", setActiveNav, { passive: true });
setActiveNav();
