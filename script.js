// catch dom element
const button = document.getElementById("button");
const price = document.getElementById("price");
const total = document.getElementById("total");

// state or data
const prouctPrice = 5000;
let totalPrice = 0;

// set product price initially
price.innerText = `$ ${prouctPrice}`;
total.innerText = `Total: $ 0`;

button.addEventListener("click", () => {
  totalPrice += prouctPrice;

  // update ui
  total.innerText = `Total: $${totalPrice}`;
});
