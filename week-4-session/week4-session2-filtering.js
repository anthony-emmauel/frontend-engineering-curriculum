const products = [
  { name: "Notebook", status: "available" },
  { name: "Desk Lamp", status: "out of stock" },
  { name: "Mouse", status: "available" },
  { name: "Monitor", status: "out of stock" },
  { name: "Keyboard", status: "available" },
];

const container = document.getElementById("productList");

const createCard = (product) => {
  const card = document.createElement("div");
  card.className = "card";
  const cardName = document.createElement("h5");
  cardName.textContent = product.name;

  const cardStatus = document.createElement("p");
  cardStatus.textContent = product.status;

  card.appendChild(cardName);
  card.appendChild(cardStatus);
  return card;
};

const renderProducts = (products) => {
  container.innerHTML = "";

  products.forEach((product) => {
    const card = createCard(product);
    container.appendChild(card);
  });
};

renderProducts(products);

const search = document.getElementById("searchInput");
search.addEventListener("input", (event) => {
  const searchValue = event.target.value.toLowerCase();

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue),
  );

  renderProducts(filtered);
});
