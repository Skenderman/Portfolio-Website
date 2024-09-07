const cart = document.querySelector(".shop-now");
const cartMobileBtn = document.querySelector(".shop-now-mobile");
const cartMenu = document.querySelector(".cart-w");
cart.addEventListener("click", () => {
  cartMenu.classList.toggle("cartOpen");
});
cartMobileBtn.addEventListener("click", () => {
  cartMenu.classList.toggle("cartOpen");
});

const minusCart = document.querySelector("#cartMinus");
const plusCart = document.querySelector("#cartPlus");
const valueProdCart = document.querySelector("#counter-txt");
const disPriceCart = document.querySelector("#cmimi");
let currValue = 1;
let prodPrice = 29.9;
let newValue = prodPrice * currValue;
minusCart.addEventListener("click", () => {
  if (currValue > 1) {
    currValue--;
    valueProdCart.textContent = currValue;
    newValue = prodPrice * currValue;
    disPriceCart.textContent = newValue.toFixed(2) + "$";
  }
});

plusCart.addEventListener("click", () => {
  currValue++;
  valueProdCart.textContent = currValue;
  newValue = prodPrice * currValue;
  disPriceCart.textContent = newValue.toFixed(2) + "$";
});
