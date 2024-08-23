const menu = document.getElementById("hamburger");
const menuContent = document.getElementById("mobile-ul");
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuContent.classList.toggle("active");
});
