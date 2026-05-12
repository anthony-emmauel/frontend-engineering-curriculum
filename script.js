// document;
// const title = document.getElementById("main-title");
// console.log(title);

// const button = document.querySelector("#change-btn");

// const events = [
//   { name: "Outlawville", tickets: 1500, status: "completed" },
//   { name: "Neon Nights", tickets: 300, status: "cancelled" },
//   { name: "Afro Fusion", tickets: 800, status: "completed" },
//   { name: "Pulse", tickets: 150, status: "active" },
//   { name: "Block Party", tickets: 2000, status: "completed" },
// ];

// const eventsCompletd = events
//   .filter((eventprice) => {
//     return eventprice.tickets >= 500 && eventprice.status === "completed";
//   })
//   .map((eventname) => {
//     return `${eventname.name}`;
//   });

// console.log(eventsCompletd);

// const products = [
//   { name: "Notebook", price: 5000, inStock: true },
//   { name: "Pen", price: 800, inStock: false },
//   { name: "Desk Lamp", price: 35000, inStock: true },
//   { name: "Monitor", price: 200000, inStock: false },
//   { name: "Mouse", price: 12000, inStock: true },
// ];

// const getAvailableNames = (products) => {
//   return products
//     .filter((names) => {
//       return names.inStock === true;
//     })
//     .map((instock) => {
//       return instock.name;
//     });
// };

// console.log(getAvailableNames(products));

// const orders = [
//   { id: 1, customer: "Amara", amount: 8000, status: "completed" },
//   { id: 2, customer: "Kofi", amount: 15000, status: "pending" },
//   { id: 3, customer: "Yemi", amount: 3000, status: "completed" },
//   { id: 4, customer: "Tunde", amount: 22000, status: "completed" },
//   { id: 5, customer: "Sola", amount: 1500, status: "pending" },
// ];

// const getTotalCompleted = (orders) => {
//   const sorted = orders.filter((status) => {
//     return status.status === "completed";
//   });

//   const total = sorted.reduce((acc, current) => acc + current.amount, 0);
//   return total;
// };

// console.log(getTotalCompleted(orders));
// const teammates = [
//   { name: "Tunde", role: "Backend Engineer" },
//   { name: "Chioma", role: "UX Researcher" },
//   { name: "Bayo", role: "Product Manager" },
// ];

// const container = document.getElementById("productList");

// teammates.forEach((teammate) => {
//   const card = document.createElement("div");
//   card.className = "card";

//   const teamName = document.createElement("p");
//   teamName.textContent = teammate.name;

//   const teamRole = document.createElement("p");
//   teamRole.textContent = teammate.role;

//   container.appendChild(card);
//   card.appendChild(teamName);
//   card.appendChild(teamRole);
// });
const events = [
  { name: "Lagos Vibes", tickets: 5000, status: "active" },
  { name: "Abuja Nite", tickets: 1200, status: "cancelled" },
  { name: "PHC Connect", tickets: 8500, status: "active" },
  { name: "Accra Fest", tickets: 3000, status: "cancelled" },
  { name: "Nairobi Nite", tickets: 7000, status: "active" },
];

const activeEvents = events.filter((event) => event.status === "active");
const totalTicket = activeEvents.reduce(
  (acc, current) => acc + current.tickets,
  0,
);

const totalCard = document.createElement("div");
const totalText = document.createElement("h4");
totalText.textContent = "The Total number of tickets";

const totalNumber = document.createElement("p");
totalNumber.textContent = `${totalTicket}`;

const container = document.getElementById("productList");

container.appendChild(totalCard);
totalCard.appendChild(totalText);
totalCard.appendChild(totalNumber);

activeEvents.forEach((event) => {
  const card = document.createElement("div");
  card.className = "card";

  const name = document.createElement("p");
  name.textContent = event.name;

  const eventStatus = document.createElement("p");
  eventStatus.textContent = event.tickets;

  container.appendChild(card);
  card.appendChild(name);
  card.appendChild(eventStatus);
});
