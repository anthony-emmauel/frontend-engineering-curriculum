const dashboardStats = {
  numberOfStudent: 9000,
  weeklyReturn: 4500,
  averageReturn: 50,
  studentPaidFee: 6600,
};

const renderKPICards = () => {
  const container = document.getElementById("kpi-container");
  container.innerHTML = "";

  const card = document.createElement("div");

  const numberOfStudent = document.createElement("div");
  numberOfStudent.textContent = `Number of student: ${dashboardStats.numberOfStudent}`;

  const weeklyReturn = document.createElement("div");
  weeklyReturn.textContent = `Weekly return: ${dashboardStats.weeklyReturn}`;

  const averageReturn = document.createElement("div");
  averageReturn.textContent = `Average return: ${dashboardStats.averageReturn}`;

  const studentPaidFee = document.createElement("div");
  studentPaidFee.textContent = `Number of student that have paid fees: ${dashboardStats.studentPaidFee}`;

  card.appendChild(numberOfStudent);
  card.appendChild(weeklyReturn);
  card.appendChild(averageReturn);
  card.appendChild(studentPaidFee);
  container.appendChild(card);
};
renderKPICards();

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

const renderTransactions = () => {
  const transactionsContainer = document.getElementById(
    "transaction-container",
  );
  transactionsContainer.innerHTML = "";

  transactions.forEach((transaction) => {
    const transactionCard = document.createElement("div");

    const nameOfStudent = document.createElement("p");
    nameOfStudent.textContent = `Name of student: ${transaction.studentName}`;

    const amountPaid = document.createElement("p");
    amountPaid.textContent = `Amount paid: ${transaction.amountPaid}`;

    const amountOwe = document.createElement("p");
    amountOwe.textContent = `Amount owed: ${transaction.amountOwe}`;

    const studentClass = document.createElement("p");
    studentClass.textContent = `Class ${transaction.class}`;

    // const isOwing = document.createElement("p");
    // isOwing.textContent = transaction.owing;

    transactionCard.appendChild(nameOfStudent);
    transactionCard.appendChild(amountPaid);
    transactionCard.appendChild(amountOwe);
    transactionCard.appendChild(studentClass);
    // transactionCard.appendChild(isOwing);
    transactionsContainer.appendChild(transactionCard);
  });
};

renderTransactions();
