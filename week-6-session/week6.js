// //----Data-----
// const dashboardStats = {
//   numberOfStudent: 9000,
//   weeklyReturn: 4500,
//   averageReturn: 50,
//   studentPaidFee: 6600,
// };

// const transactions = [
//   {
//     studentName: "Ojo",
//     amountPaid: 5000,
//     amountOwe: 7000,
//     class: "Jss1",
//     owing: true,
//   },
//   {
//     studentName: "Precious",
//     amountPaid: 12000,
//     amountOwe: 0,
//     class: "Jss1",
//     owing: false,
//   },
//   {
//     studentName: "King",
//     amountPaid: 2000,
//     amountOwe: 10000,
//     class: "Jss1",
//     owing: true,
//   },
//   {
//     studentName: "Martha",
//     amountPaid: 12000,
//     amountOwe: 0,
//     class: "Jss3",
//     owing: false,
//   },
//   {
//     studentName: "Bernard",
//     amountPaid: 5000,
//     amountOwe: 7000,
//     class: "Jss1",
//     owing: true,
//   },
// ];

// //---Helpers-----
// const createStatElement = (label, value) => {
//   const el = document.createElement("div");
//   el.textContent = `${label}: ${value}`;
//   return el;
// };

// const createTransactionElement = (label, value) => {
//   const paragraph = document.createElement("p");
//   paragraph.textContent = `${label}: ${value}`;
//   return paragraph;
// };

// //---renders functions---
// const renderKPICards = () => {
//   const container = document.getElementById("kpi-container");
//   container.innerHTML = "";

//   const card = document.createElement("div");

//   card.appendChild(
//     createStatElement("Number of students", dashboardStats.numberOfStudent),
//   );

//   card.appendChild(
//     createStatElement("Weekly return", dashboardStats.weeklyReturn),
//   );

//   card.appendChild(
//     createStatElement("Average return", dashboardStats.averageReturn),
//   );

//   card.appendChild(
//     createStatElement(
//       "Number of students that have paid",
//       dashboardStats.studentPaidFee,
//     ),
//   );
//   container.appendChild(card);
// };

// const renderTransactions = (data) => {
//   const transactionsContainer = document.getElementById(
//     "transaction-container",
//   );
//   transactionsContainer.innerHTML = "";

//   data.forEach((transaction) => {
//     const transactionCard = document.createElement("div");

//     transactionCard.appendChild(
//       createTransactionElement("Name of student", transaction.studentName),
//     );

//     transactionCard.appendChild(
//       createTransactionElement("Amount paid", transaction.amountPaid),
//     );

//     transactionCard.appendChild(
//       createTransactionElement("Amount owe", transaction.amountOwe),
//     );
//     transactionCard.appendChild(
//       createTransactionElement("Student class", transaction.class),
//     );
//     transactionsContainer.appendChild(transactionCard);
//   });
// };

// const renderTotal = () => {
//   const totalContainer = document.getElementById("total-container");
//   totalContainer.innerHTML = "";

//   const total = transactions.reduce((acc, current) => {
//     return acc + current.amountPaid;
//   }, 0);

//   const totalAmountPaid = document.createElement("div");
//   totalAmountPaid.textContent = `Total Amount: ${total}`;

//   totalContainer.appendChild(totalAmountPaid);
// };

// //---event listeners---

// const handleFilterOwing = () => {
//   const owing = transactions.filter(
//     (transaction) => transaction.owing === true,
//   );
//   renderTransactions(owing);
// };

// document
//   .getElementById("filter-btn")
//   .addEventListener("click", handleFilterOwing);

// const showAllButton = document.getElementById("show-all");
// showAllButton.addEventListener("click", () => {
//   renderTransactions(transactions);
// });

// //--- init ---
// renderKPICards();
// renderTotal();
// renderTransactions(transactions);

// const originalStudents = ["Ngozi", "Emeka", "Fatima"];
// const copiedStudents = [...originalStudents];
// copiedStudents.push("Tunde");
// console.log(originalStudents);
// console.log(copiedStudents);

// const phone = 0;
// const score = null;
// const nameLabel = "";

// console.log(phone || "Not provided");
// console.log(phone ?? "Not provided");

// console.log(score || "Not provided");
// console.log(score ?? "Not provided");

// console.log(nameLabel || "Not provided");
// console.log(nameLabel ?? "Not provided");

// let counter = 0;

// const timer = () => {
//   const intervalId = setInterval(() => {
//     console.log(counter++);
//     if (counter > 5) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// };
// timer();

const studentData = [
  {
    studentName: "amaka",
    amountPaid: 10000,
  },
  {
    studentName: "Fred",
    amountPaid: 1000,
  },
  {
    studentName: "Manny",
    amountPaid: 20000,
  },
];

const name = studentData.forEach((names) => {
  console.log(names.studentName);
});

const filteredData = studentData.filter((data) => {
  return data.amountPaid >= 10000;
});

console.log(filteredData);
