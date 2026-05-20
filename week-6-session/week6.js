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
