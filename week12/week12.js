let users = [];

const renderUsers = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const renderContainer = document.getElementById("user-list");
  renderContainer.innerHTML = "";
  users.forEach((user) => {
    const nameText = document.createElement("p");
    nameText.textContent = user.name;

    const emailText = document.createElement("p");
    emailText.textContent = user.email;

    renderContainer.appendChild(nameText);
    renderContainer.appendChild(emailText);
  });
};

document.getElementById("save-btn").addEventListener("click", () => {
  const nameInput = document.getElementById("name-input");
  localStorage.setItem("name", nameInput.value);
  localStorage.getItem("name");
  const emailInput = document.getElementById("email-input");
  localStorage.setItem("email", emailInput.value);
  localStorage.getItem("email");
  users.push({ name: nameInput.value, email: emailInput.value });
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
  nameInput.value = "";
  emailInput.value = "";
});

//local storage
// // Save
// localStorage.setItem("name", "Manny");

// // Read
// localStorage.getItem("name"); // "Manny"

// // Delete
// localStorage.removeItem("name");
