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

  // PROD COUNTER
  const minus = document.querySelector(".minus");
  const plus = document.querySelector(".plus");
  const valueProd = document.querySelector(".counter-value");
  const disPrice = document.getElementById("discounted-price");
  let prodPrice = 29.9;
  let currValue = 1;
  minus.addEventListener("click", () => {
    if (currValue > 1) {
      currValue--;
      newValue = prodPrice * currValue;
      valueProd.textContent = currValue;
    }
    disPrice.textContent = newValue.toFixed(2) + "$";
  });
  plus.addEventListener("click", () => {
    currValue++;
    valueProd.textContent = currValue;
    newValue = prodPrice * currValue;
    disPrice.textContent = newValue.toFixed(2) + "$";
  });
  // ACCORDION
  let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
  accordions.forEach((acco) => {
    acco.onclick = () => {
      accordions.forEach((subcontent) => {
        subcontent.classList.remove("aktiv");
      });
      acco.classList.toggle("aktiv");
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
