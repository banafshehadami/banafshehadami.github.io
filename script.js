const year = document.getElementById("year");
const navLinks = document.querySelectorAll(".sidebar-nav a");
const sections = document.querySelectorAll(".section");

function setActiveNav() {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute("id") || "";
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

year.textContent = new Date().getFullYear();
window.addEventListener("scroll", setActiveNav, { passive: true });
setActiveNav();
