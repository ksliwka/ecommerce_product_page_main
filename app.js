const button = document.getElementById("toggleButton");
const buttonClose = document.getElementById("toggleButtonClose");
const width = document.getElementById("offCanvas");
const quantity = document.getElementById("quantity");
const add = document.getElementById("addBtn");
const remove = document.getElementById("removeBtn");
const shoppingCart = document.getElementById("shoppingCart");
const addToCartBtn = document.getElementById("addToCartBtn");
const deleteBtn = document.getElementById("delete");

button.addEventListener("click", function (e) {
  width.style.width = "200px";
});

buttonClose.addEventListener("click", function (e) {
  width.style.width = "0";
});

let a = 1;

add.addEventListener("click", () => {
  if (a < 20) {
    a++;
    quantity.value = a;
  }
});

remove.addEventListener("click", () => {
  if (a > 1) {
    a--;
    quantity.value = a;
  }
});

addToCartBtn.addEventListener("click", () => {
  const result = 125 * parseInt(quantity.value, 10);
  const multiplication = `$125.00 x ${quantity.value}`;
  document.getElementById("multiplication").innerText = multiplication;
  document.getElementById("result").innerText = `$${result}.00`;
  document.getElementById("emptyCart").style.display = "none";
  document.getElementById("fullCart").style.display = "block";
  document.getElementById("itemQuantity").style.display = "block";
  document.getElementById("itemQuantity").innerText = `${quantity.value}`;
});

deleteBtn.addEventListener("click", () => {
  deleteBtn.parentElement.parentElement.remove();
  document.getElementById("emptyCart").style.display = "block";
  document.getElementById("itemQuantity").style.display = "none";
});
