const snackPrices = {
  "Idli": 30,
  "Chapathi": 30,
  "Bonda": 35,
  "Dosa": 50,
  "Upma": 25
};

let total = 0;

function addSnack() {
  const snack = document.getElementById("snack").value;
  const qty = parseInt(document.getElementById("qty").value);
  if (qty <= 0) return;

  const price = snackPrices[snack] * qty;
  total += price;

  const billBody = document.getElementById("bill-body");
  const row = document.createElement("tr");
  row.innerHTML = `<td>${snack}</td><td>${qty}</td><td>₹${price.toFixed(2)}</td>`;
  billBody.appendChild(row);

  document.getElementById("total").textContent = `Total: ₹${total.toFixed(2)}`;
}

function checkout() {
   const container = document.querySelector(".container");
   const cont = document.getElementById("cont");
   const cont_two = document.querySelector(".cont_two");
   container.style.display ="none";
   cont_two.style.display = "block";
cont.textContent = `Thank you! Your total is ₹${total.toFixed(2)}.\n visit us again.`;
}
