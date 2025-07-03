const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const product = products.find(p => p.id === id);
const details = document.getElementById("details");

if (product) {
  details.innerHTML = `
    <img src="${product.img}" alt="${product.name}" />
    <h2>${product.name}</h2>
    <p>${product.desc}</p>
    <p>Price: ₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
} else {
  details.innerHTML = "Product not found!";
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(i => i.id === id);
  if (item) item.qty += 1;
  else cart.push({ id, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
