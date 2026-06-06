const themeToggle = document.getElementById("theme-toggle");
const year = document.getElementById("year");
const savedTheme = localStorage.getItem("theme");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeToggle.textContent = isDark ? "Light" : "Dark";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

applyTheme(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  applyTheme(isDark);
});

year.textContent = new Date().getFullYear();
