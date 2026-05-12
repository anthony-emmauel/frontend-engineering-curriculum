const teammates = ["Tunde", "Chioma", "Bayo", "Amara"];
const teamListCard = document.getElementById("teamList");
const productContainer = document.getElementById("productCards");

teammates.forEach((teammate) => {
  const name = document.createElement("li");
  name.textContent = teammate;
  teamListCard.appendChild(name);
});

const products = [
  { name: "Notebook", price: 5000, status: "available" },
  { name: "Desk Lamp", price: 35000, status: "out of stock" },
  { name: "Mouse", price: 12000, status: "available" },
  { name: "Monitor", price: 200000, status: "out of stock" },
];

const createCard = (product) => {
  const card = document.createElement("div");
  card.className = "card";

  const productName = document.createElement("h5");
  productName.textContent = product.name;

  const productPrice = document.createElement("h6");
  productPrice.textContent = product.price;

  const productStatus = document.createElement("p");
  productStatus.textContent = product.status;

  card.appendChild(productName);
  card.appendChild(productPrice);
  card.appendChild(productStatus);

  return card;
};

products.forEach((product) => {
  const card = createCard(product);
  productCards.appendChild(card);
});
