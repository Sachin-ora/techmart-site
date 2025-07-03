document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartCount = document.getElementById("cart-count");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartCount() {
    cartCount.textContent = cart.length;
  }

  function addToCart(name, price) {
    cart.push({ name, price: parseFloat(price) });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  if (products && productList) {
    productList.innerHTML = products.map(product => `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>₹${product.price}</strong></p>
        <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">
          Add to Cart
        </button>
      </div>
    `).join("");

    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = button.dataset.price;
        addToCart(name, price);
      });
    });
  }

  updateCartCount();
});



