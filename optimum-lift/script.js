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
  let currValue = 1;
  let prodPrice = 29.9;

  const minusHero = document.querySelector(".prod-counter .minus");
  const plusHero = document.querySelector(".prod-counter .plus");
  const valueProdHero = document.querySelector(".prod-counter .counter-value");
  const disPriceHero = document.querySelector(".price .discounted-price");

  const minusCart = document.querySelector("#cartMinus");
  const plusCart = document.querySelector("#cartPlus");
  const valueProdCart = document.querySelector("#cart-counter .counter-value");
  const disPriceCart = document.querySelector("#cmimi");

  // Function to update both the hero and cart counters
  function updateAllCounters() {
    valueProdHero.textContent = currValue;
    valueProdCart.textContent = currValue;

    const newValue = prodPrice * currValue;
    disPriceHero.textContent = newValue.toFixed(2) + "$";
    disPriceCart.textContent = newValue.toFixed(2) + "$";
  }

  // Event listener for the hero section buttons
  minusHero.addEventListener("click", () => {
    if (currValue > 1) {
      currValue--;
      updateAllCounters();
    }
  });

  plusHero.addEventListener("click", () => {
    currValue++;
    updateAllCounters();
  });

  // Event listener for the cart buttons
  minusCart.addEventListener("click", () => {
    if (currValue > 1) {
      currValue--;
      updateAllCounters();
    }
  });

  plusCart.addEventListener("click", () => {
    currValue++;
    updateAllCounters();
  });
  // Cart Open
  const cart = document.querySelector(".shop-now");
  const cartMobileBtn = document.querySelector(".shop-now-mobile");
  const cartMenu = document.querySelector(".cart-w");
  cart.addEventListener("click", () => {
    cartMenu.classList.toggle("cartOpen");
  });
  cartMobileBtn.addEventListener("click", () => {
    cartMenu.classList.toggle("cartOpen");
  });
  // ACCORDION
  let accordions = document.querySelectorAll(".accordion-wrapper .accordion");

  accordions.forEach((acco) => {
    acco.onclick = () => {
      // Check if the clicked accordion is already active
      if (acco.classList.contains("aktiv")) {
        acco.classList.remove("aktiv"); // Close the current accordion
      } else {
        // Remove "aktiv" from all other accordions
        accordions.forEach((subcontent) => {
          subcontent.classList.remove("aktiv");
        });
        acco.classList.add("aktiv"); // Open the clicked accordion
      }
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
