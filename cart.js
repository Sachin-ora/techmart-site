let cart = JSON.parse(localStorage.getItem("cart")) || [];
const list = document.getElementById("cart-items");
let total = 0;

if (cart.length === 0) {
  list.innerHTML = "<li>Your cart is empty.</li>";
} else {
  cart.forEach(item => {
    const p = products.find(prod => prod.id === item.id);
    if (!p) return;

    total += p.price * item.qty;

    const li = document.createElement("li");
    li.innerHTML = `
      ${p.name} - ₹${p.price} × ${item.qty}
      <button onclick="removeItem(${item.id})">❌</button>
    `;
    list.appendChild(li);
  });
}

document.getElementById("total").textContent = total;

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
