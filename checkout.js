function placeOrder(e) {
  e.preventDefault();
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}
