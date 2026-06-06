const year = document.getElementById("year");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

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

year.textContent = new Date().getFullYear();
window.addEventListener("scroll", setActiveNav, { passive: true });
setActiveNav();
