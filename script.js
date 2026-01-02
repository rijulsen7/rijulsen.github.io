const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  menuOverlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
});

/* Close on background click */
menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.remove("active");
  }
});

/* Close on ESC */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menuOverlay.classList.remove("active");
  }
});
function closeMenuSmooth() {
  menuOverlay.classList.remove("active");
}

closeMenu.addEventListener("click", closeMenuSmooth);

menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) closeMenuSmooth();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenuSmooth();
});
