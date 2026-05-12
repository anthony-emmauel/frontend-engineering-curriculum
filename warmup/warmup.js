// const teammates = [
//   { name: "Amara", role: "Designer", status: "active" },
//   { name: "Kofi", role: "Developer", status: "inactive" },
//   { name: "Yemi", role: "Manager", status: "active" },
//   { name: "Tunde", role: "Developer", status: "inactive" },
// ];

// teammates.forEach((teammate) => {
//   const container = document.getElementById("teamList");
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const teamName = document.createElement("h5");
//   teamName.classList.add("name");
//   teamName.textContent = teammate.name;

//   const teamRole = document.createElement("p");
//   teamRole.classList.add("role");
//   teamRole.textContent = teammate.role;

//   const teamStatusActive = document.createElement("p");
//   teamStatusActive.textContent = teammate.status;
//   if (teammate.status === "active") {
//     teamStatusActive.classList.add("active");
//   } else {
//     teamStatusActive.classList.add("inactive");
//   }

//   container.append(card);
//   card.append(teamName);
//   card.append(teamRole);
//   card.append(teamStatusActive);
// });

// const state = {
//   count: 0,
// };

// const render = () => {
//   document.getElementById("count").textContent = state.count;
// };
// const increment = document.getElementById("increment");
// increment.addEventListener("click", () => {
//   state.count = state.count + 1;
//   render();
// });

// const decrement = document.getElementById("decrement");
// decrement.addEventListener("click", () => {
//   if (state.count > 0) {
//     state.count = state.count - 1;
//     render();
//   }
// });
