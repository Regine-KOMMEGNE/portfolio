
// Animation d’apparition au scroll
const faders = document.querySelectorAll(".fade-in");
const options = {
  threshold: 0.2
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

faders.forEach(el => observer.observe(el));

// Animation au chargement de la photo
const photo = document.querySelector("header img");
window.addEventListener("load", () => {
  photo.classList.add("loaded");
});

// Détails des projets
document.querySelectorAll(".details-btn").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    details.classList.toggle("open");
    button.textContent = details.classList.contains("open") ? "Fermer détails" : "Voir détails";
  });
});
// Modal zoom pour les images
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
function toggleMenu() {
    const menu = document.getElementById("socialMenu");
    menu.classList.toggle("open");
}
