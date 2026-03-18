const products = [
  { id: 1, name: "T-Shirt", price: 500 },
  { id: 2, name: "Jeans", price: 1200 },
  { id: 3, name: "Jacket", price: 2000 }
];

let cart = [];

function displayProducts() {
  const container = document.getElementById("products");

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = "Total: ₹" + total;
}

displayProducts();