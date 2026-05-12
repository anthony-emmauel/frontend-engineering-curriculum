const products = [
  { name: "Notebook", price: 5000, status: "available" },
  { name: "Desk Lamp", price: 35000, status: "out of stock" },
  { name: "Mouse", price: 12000, status: "available" },
  { name: "Monitor", price: 200000, status: "out of stock" },
  { name: "Keyboard", price: 15000, status: "available" },
  { name: "Webcam", price: 25000, status: "out of stock" },
  { name: "Headphones", price: 18000, status: "available" },
  { name: "USB Hub", price: 8000, status: "available" },
  { name: "Mousepad", price: 3000, status: "out of stock" },
  { name: "Monitor Stand", price: 22000, status: "available" },
];

const container = document.getElementById("productList");

const createCard = (products) => {
  const card = document.createElement("div");
  card.classList.add(".card");

  const cardName = document.createElement("h4");
  cardName.classList.add("name");
  cardName.textContent = products.name;

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("price");
  cardPrice.textContent = products.price;

  const badge = document.createElement("span");
  badge.classList.add("badge");

  if (products.status === "available") {
    badge.classList.add("available");
    badge.textContent = "Available";
  } else {
    badge.classList.add("out-of-stock");
    badge.textContent = "Out of Stock";
  }
  card.append(cardName);
  card.append(cardPrice);
  card.append(badge);

  return card;
};

const renderProducts = (list) => {
  container.innerHTML = "";

  list.forEach((product) => {
    const card = createCard(product);
    container.appendChild(card);
  });
};

renderProducts(products);

let currentStatus = "all";

const getFiltered = () => {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();

  return products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchValue);
    const matchesStatus =
      currentStatus === "all" || product.status === currentStatus;
    return matchesSearch && matchesStatus;
  });
};

document.getElementById("searchInput").addEventListener("input", () => {
  renderProducts(getFiltered());
});

document.getElementById("btnAll").addEventListener("click", () => {
  currentStatus = "all";
  renderProducts(getFiltered());
});

document.getElementById("btnAvailable").addEventListener("click", () => {
  currentStatus = "available";
  renderProducts(getFiltered());
});

document.getElementById("btnOutOfStock").addEventListener("click", () => {
  currentStatus = "out of stock";
  renderProducts(getFiltered());
});
