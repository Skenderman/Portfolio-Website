const menu = document.getElementById("hamburger");
const menuContent = document.getElementById("mobile-ul");
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuContent.classList.toggle("active");
});

console.log(menu.getBoundingClientRect());
// SPLIDE

new Splide("#project-showcase", {
  type: "loop",
  drag: "snap",
  autoHeight: true,
  focus: "center",
  width: "325px",
  arrows: false,
  autoplay: "pause",
  intersection: {
    inView: {
      autoplay: true,
    },
  },
}).mount(window.splide.Extensions);
