// NAVMOBILE
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar-mobile");
  const cartMobile = document.querySelector(".shop-now-mobile");
  const reviewsSlide = document.querySelector("#testimonials");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    cartMobile.classList.toggle("active");
    reviewsSlide.classList.toggle("active");
  });

  // ACCORDION
  let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
  accordions.forEach((acco) => {
    acco.onclick = () => {
      accordions.forEach((subcontent) => {
        subcontent.classList.remove("aktiv");
      });
      acco.classList.add("aktiv");
    };
  });

  // SPLIDEE
  new Splide("#testimonials", {
    drag: true,
    type: "loop",
    gap: "2rem",
    wheel: true,
    lazyLoad: "nearby",
    autoWidth: true,
    snap: true,
    // perPage: 3,
    focus: "center",
    trimSpace: false,
  }).mount();
});
