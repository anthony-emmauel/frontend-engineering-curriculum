const dashboardStats = {
  numberOfStudent: 9000,
  weeklyReturn: 4500,
  averageReturn: 50,
  studentPaidFee: 6600,
};

const transactions = [
  {
    studentName: "Ojo",
    amountPaid: 5000,
    amountOwe: 7000,
    class: "Jss1",
    owing: true,
  },
  {
    studentName: "Precious",
    amountPaid: 12000,
    amountOwe: 0,
    class: "Jss1",
    owing: false,
  },
  {
    studentName: "King",
    amountPaid: 2000,
    amountOwe: 10000,
    class: "Jss1",
    owing: true,
  },
  {
    studentName: "Martha",
    amountPaid: 12000,
    amountOwe: 0,
    class: "Jss3",
    owing: false,
  },
  {
    studentName: "Bernard",
    amountPaid: 5000,
    amountOwe: 7000,
    class: "Jss1",
    owing: true,
  },
];

const createStatElement = (label, value) => {
  const el = document.createElement("div");
  el.textContent = `${label}: ${value}`;
  return el;
};

const renderKPICards = () => {
  const container = document.getElementById("kpi-container");
  container.innerHTML = "";

  const card = document.createElement("div");

  card.appendChild(
    createStatElement("Number of students", dashboardStats.numberOfStudent),
  );

  card.appendChild(
    createStatElement("Weekly return", dashboardStats.weeklyReturn),
  );

  card.appendChild(
    createStatElement("Average return", dashboardStats.averageReturn),
  );

  card.appendChild(
    createStatElement(
      "Number of students that have paid",
      dashboardStats.studentPaidFee,
    ),
  );
  container.appendChild(card);
};
renderKPICards();

const createTransactionElement = (label, value) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = `${label}: ${value}`;
  return paragraph;
};

const renderTransactions = (data) => {
  const transactionsContainer = document.getElementById(
    "transaction-container",
  );
  transactionsContainer.innerHTML = "";

  data.forEach((transaction) => {
    const transactionCard = document.createElement("div");

    transactionCard.appendChild(
      createTransactionElement("Name of student", transaction.studentName),
    );

    transactionCard.appendChild(
      createTransactionElement("Amount paid", transaction.amountPaid),
    );

    transactionCard.appendChild(
      createTransactionElement("Amount owe", transaction.amountOwe),
    );
    transactionCard.appendChild(
      createTransactionElement("Student class", transaction.class),
    );
    transactionsContainer.appendChild(transactionCard);
  });
};

document.getElementById("filter-btn").addEventListener("click", () => {
  const owing = transactions.filter(
    (transaction) => transaction.owing === true,
  );
  renderTransactions(owing);
});

renderTransactions(transactions);

const renderTotal = () => {
  const totalContainer = document.getElementById("total-container");
  totalContainer.innerHTML = "";

  const total = transactions.reduce((acc, current) => {
    return acc + current.amountPaid;
  }, 0);

  const totalAmountPaid = document.createElement("div");
  totalAmountPaid.textContent = `Total Amount: ${total}`;

  totalContainer.appendChild(totalAmountPaid);
};
renderTotal();
