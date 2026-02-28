

// Mobile Menu Toggle
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Scroll Reveal Animation
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
});

// Contact Form Popup
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
  form.reset();
});

