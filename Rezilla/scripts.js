document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scrolling-wrapper");

  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent default vertical scroll behavior
    scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally instead
  });
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar-mobile");
const rezilaIcon = document.querySelector("#mobile-icon-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  rezilaIcon.classList.toggle("active");
});

const formContainer = document.getElementById("form-container");
const forSaleRadio = document.getElementById("for-sale");
const forRentRadio = document.getElementById("for-rent");

forSaleRadio.addEventListener("change", function () {
  if (this.checked) {
    formContainer.innerHTML = `
            <label for="city"></label>
            <input
              id='city'
              name='city'
              type='text'
              placeholder='New York, San Francisco, etc'
            />
            <label for='property-type'></label>
            <select name='property-type' id='property-type' required>
              <option value='' disabled selected hidden>
                Select Property Type
              </option>
              <option value='residential'>Residential</option>
              <option value='commercial'>Commercial</option>
              <option value='industrial'>Industrial</option>
              <option value='raw-land'>Raw Land</option>
            </select>
            <label for='room-type'></label>
            <select name='room-type' id='room-type' required>
              <option value='' disabled selected hidden>
                Select Rooms
              </option>
              <option value='single'>Single</option>
              <option value='double'>Double</option>
              <option value='deluxe'>Deluxe</option>
              <option value='suite'>Residential Suite</option>
            </select>
            <p><i class='fa-solid fa-sliders'></i> Advance Search</p>
            <input type='submit' class='btn-primary' value='Search' />
          `;
  }
});

forRentRadio.addEventListener("change", function () {
  if (this.checked) {
    formContainer.innerHTML = `
            <label for='city'></label>
            <input
              id='city'
              name='city'
              type='text'
              placeholder='Los Angeles, Texas, etc'
            />
            <label for='lease-term'></label>
            <select name='lease-term' id='lease-term' required>
              <option value='' disabled selected hidden>
                Select Lease Term
              </option>
              <option value='short-term'>Short Term</option>
              <option value='long-term'>Long Term</option>
              <option value='month-to-month'>Month to Month</option>
            </select>
            <label for='furnishing'></label>
            <select name='furnishing' id='furnishing' required>
              <option value='' disabled selected hidden>
                Select Furnishing
              </option>
              <option value='furnished'>Furnished</option>
              <option value='unfurnished'>Unfurnished</option>
              <option value='partially-furnished'>Partially Furnished</option>
            </select>
            <p><i class='fa-solid fa-sliders'></i> Advance Search</p>
            <input type='submit' class='btn-primary' value='Search' />
          `;
  }
});
