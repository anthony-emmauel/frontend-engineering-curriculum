const state = { items: [] };

// const render = () => {
//   const container = document.getElementById("itemList");
//   container.innerHTML = "";
//   const list = document.createElement("div");
//   list.classList.add("item");
//   const itemName = document.createElement("p");
//   itemName.textContent = state.items = [...state.items, itemName];
//   const deleteBtn = document.createElement("button");
//   deleteBtn.addEventListener("click", () => {
//     state.items = state.items.pop(itemName);
//   });
//   list.append(itemName);
//   list.append(deleteBtn);
//   const renderList = (list) => {
//     state.forEach((items) => {
//       const card = container.append(list);
//     });
//   };
// };

const render = () => {
  const container = document.getElementById("itemList");
  container.innerHTML = "";

  state.items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";

    const name = document.createElement("p");
    name.textContent = item;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      state.items = state.items.filter((i) => i !== item);
      render();
    });

    div.appendChild(name);
    div.appendChild(deleteBtn);
    container.appendChild(div);
  });
};

document.getElementById("addBtn").addEventListener("click", () => {
  const value = document.getElementById("itemInput").value;
  state.items = [...state.items, value];
  document.getElementById("itemInput").value = "";
  render();
});
