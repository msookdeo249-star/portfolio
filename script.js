// Smooth scrolling
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dynamic greeting based on time of day
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) greeting.textContent = "☀️ Good morning!";
else if (hour < 18) greeting.textContent = "🌤️ Good afternoon!";
else greeting.textContent = "🌙 Good evening!";

// Theme toggle (dark/light mode)
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode")
    ? "🌙 Light Mode"
    : "🌞 Dark Mode";
});

// Modal functionality for projects
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => {
    modalTitle.textContent = project.dataset.title;
    modalDesc.textContent = project.dataset.desc;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();
