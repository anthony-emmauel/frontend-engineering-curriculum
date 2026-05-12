const btn = document.getElementById("btn");
const title = document.getElementById("title");
btn.addEventListener("click", () => {
  title.textContent = "You clicked the button!";
  title.style.color = "red";
});

btn.addEventListener("click", (event) => {
  console.log(event.target);
});

const toggleBtn = document.getElementById("toggleBtn");
const description = document.getElementById("description");
toggleBtn.addEventListener("click", () => {
  description.classList.toggle("hidden");
});
