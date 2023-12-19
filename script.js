function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["Student 🧑", "Avid Reader 📖", "Hustler  🚵", "Adventurous Spirit 🗺️", ""],
  loop: true,
  typeSpeed: 40,
  backSpeed: 15,
  backDelay: 500,
});
// <!-- typed js effect ends --> 