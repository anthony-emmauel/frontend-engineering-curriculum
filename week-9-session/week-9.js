// destructing

const student = {
  studentName: "Ngozi Obi",
  amountPaid: 30000,
  amountOwe: 15000,
  class: "SSS2",
  owing: true,
};

const { studentName, amountPaid, owing } = student;
console.log(studentName, amountPaid, owing);

// spread
const jssStudents = ["Adaeze", "Emeka", "Chukwudi", "Aisha"];
const sssStudents = ["Fatima", "Ngozi", "Tunde", "Obinna"];

const studentNew = {
  studentName: "Aisha Musa",
  amountPaid: 15000,
  amountOwe: 30000,
};

const allStudent = [...jssStudents, ...sssStudents];
console.log(allStudent);

const updatedStudent = { ...studentNew, amountPaid: 45000, amountOwe: 0 };
console.log(updatedStudent);

//---data---
const dashboardStats = {
  totalStudents: 847,
  totalRevenue: 4235000,
  averagePayment: 12000,
  pendingPayments: 134,
};

const transactions = [
  {
    studentName: "Adaeze Okonkwo",
    amountPaid: 45000,
    amountOwe: 0,
    class: "JSS1",
    owing: false,
  },
  {
    studentName: "Emeka Nwosu",
    amountPaid: 20000,
    amountOwe: 25000,
    class: "JSS2",
    owing: true,
  },
  {
    studentName: "Fatima Aliyu",
    amountPaid: 45000,
    amountOwe: 0,
    class: "SSS1",
    owing: false,
  },
  {
    studentName: "Chukwudi Eze",
    amountPaid: 10000,
    amountOwe: 35000,
    class: "JSS3",
    owing: true,
  },
  {
    studentName: "Ngozi Obi",
    amountPaid: 30000,
    amountOwe: 15000,
    class: "SSS2",
    owing: true,
  },
  {
    studentName: "Tunde Bakare",
    amountPaid: 45000,
    amountOwe: 0,
    class: "SSS3",
    owing: false,
  },
  {
    studentName: "Aisha Musa",
    amountPaid: 15000,
    amountOwe: 30000,
    class: "JSS1",
    owing: true,
  },
  {
    studentName: "Obinna Igwe",
    amountPaid: 45000,
    amountOwe: 0,
    class: "SSS1",
    owing: false,
  },
];

const archivedTransactions = [
  {
    studentName: "Kemi Adeyemi",
    amountPaid: 35000,
    amountOwe: 0,
    class: "SSS1",
    owing: false,
  },
  {
    studentName: "Biodun Lawson",
    amountPaid: 12000,
    amountOwe: 33000,
    class: "JSS2",
    owing: true,
  },
];

//--- helper function ---
const createKpiCardElement = (label, value) => {
  const card = document.createElement("div");
  card.classList.add("kpi-card");

  const cardLabel = document.createElement("h3");
  cardLabel.classList.add("kpi-label");
  cardLabel.textContent = `${label}`;

  const cardValue = document.createElement("p");
  cardValue.classList.add("kpi-value");
  cardValue.textContent = `${value}`;

  card.appendChild(cardLabel);
  card.appendChild(cardValue);

  return card;
};

const createTransactionElement = (
  studentName,
  amountOwe,
  amountPaid,
  classLabel,
) => {
  const transactionCard = document.createElement("div");
  transactionCard.classList.add("transaction-card");

  const nameOfStudent = document.createElement("h4");
  nameOfStudent.textContent = `${studentName}`;

  const oweAmount = document.createElement("p");
  oweAmount.textContent = `${amountOwe}`;

  const paidAmount = document.createElement("p");
  paidAmount.textContent = `${amountPaid}`;

  const studentClass = document.createElement("p");
  studentClass.textContent = `${classLabel}`;

  transactionCard.appendChild(nameOfStudent);
  transactionCard.appendChild(oweAmount);
  transactionCard.appendChild(paidAmount);
  transactionCard.appendChild(studentClass);

  return transactionCard;
};

//--- Render function ----

const renderKPICards = () => {
  const kpiContainer = document.getElementById("kpi-container");
  kpiContainer.innerHTML = "";

  kpiContainer.appendChild(
    createKpiCardElement("Total students", dashboardStats.totalStudents),
  );
  kpiContainer.appendChild(
    createKpiCardElement("Total revenue", dashboardStats.totalRevenue),
  );
  kpiContainer.appendChild(
    createKpiCardElement("Average payment", dashboardStats.averagePayment),
  );
  kpiContainer.appendChild(
    createKpiCardElement("Pending payment", dashboardStats.pendingPayments),
  );
};

const renderTotalcard = () => {
  const totalContainer = document.getElementById("total-container");
  totalContainer.innerHTML = "";

  const totalLabel = document.createElement("h3");
  totalLabel.textContent = "Total number of fees paid";

  const combineTransaction = [...transactions, ...archivedTransactions];
  const totalValue = document.createElement("p");
  totalValue.textContent = combineTransaction.reduce((acc, current) => {
    return acc + current.amountPaid;
  }, 0);
  totalContainer.appendChild(totalLabel);
  totalContainer.appendChild(totalValue);
};

const renderTransactions = (data) => {
  const transactionContainer = document.getElementById("transaction-container");
  transactionContainer.innerHTML = "";
  data.forEach((transaction) => {
    const {
      studentName,
      amountPaid,
      amountOwe,
      class: studentClass,
    } = transaction;
    transactionContainer.appendChild(
      createTransactionElement(
        studentName,
        amountPaid,
        amountOwe,
        studentClass,
      ),
    );
  });
};
//----add event listeners----
const handleFilterOwing = () => {
  const filteredData = transactions.filter(
    (transaction) => transaction.owing === true,
  );
  renderTransactions(filteredData);
};

document
  .getElementById("filter-btn")
  .addEventListener("click", handleFilterOwing);

document.getElementById("show-all").addEventListener("click", () => {
  renderTransactions(transactions);
});
//--init---
renderKPICards();
renderTotalcard();
renderTransactions(transactions);
