document.getElementById("save-btn").addEventListener("click", () => {
  const nameInput = document.getElementById("name-input");
  localStorage.setItem("name", nameInput.value);
  console.log(localStorage.getItem("name"));
  const emailInput = document.getElementById("email-input");
  localStorage.setItem("email", emailInput.value);
  console.log(localStorage.getItem("email"));
});
