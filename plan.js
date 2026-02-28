const form = document.getElementById("registrationForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload
  popup.style.display = "flex";
  form.reset();
});

function closePopup() {
  popup.style.display = "none";
  
  // Redirect to home page
  window.location.href = "index.html";
}
