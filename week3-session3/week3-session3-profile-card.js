// const profiles = [
//   { name: "Amara", role: "Product Designer", location: "Lagos" },
//   { name: "Kofi", role: "Frontend Engineer", location: "Accra" },
//   { name: "Yemi", role: "Design Engineer", location: "Lisbon" },
// ];

// //select card elements
// const nameEl = document.getElementById("name");
// const roleEl = document.getElementById("role");
// const locationEl = document.getElementById("location");

// // selects buttons
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");

// //functions that updates the card
// const updateCard = (profilenames) => {
//   const profile = profiles.find((p) => p.name === profilenames);

//   nameEl.textContent = profile.name;
//   roleEl.textContent = profile.role;
//   locationEl.textContent = profile.location;
// };

// //event listeners
// btn1.addEventListener("click", () => updateCard("Amara"));
// btn2.addEventListener("click", () => updateCard("Kofi"));
// btn3.addEventListener("click", () => updateCard("Yemi"));

const orders = [
  { id: 1, customer: "Amara", amount: 12000, status: "completed" },
  { id: 2, customer: "Kofi", amount: 8000, status: "pending" },
  { id: 3, customer: "Yemi", amount: 5000, status: "completed" },
  { id: 4, customer: "Tunde", amount: 20000, status: "failed" },
  { id: 5, customer: "Sola", amount: 3000, status: "completed" },
];

const getCompletedTotal = (orders) => {
  const sort = orders.filter((complete) => {
    return complete.status === "completed";
  });

  const total = sort.reduce((acc, current) => {
    return acc + current.amount;
  }, 0);

  return total;
};
console.log(getCompletedTotal(orders));
