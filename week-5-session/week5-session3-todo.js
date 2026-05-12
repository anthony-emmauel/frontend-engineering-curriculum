const state = {
  todos: [],
  filter: "all",
};

// const container = document.getElementById("toDoList");
// container.innerHTML = "";
// const render = state.todos.forEach((todo) => {
//   const toDoItem = document.createElement("div");
//   toDoItem.classList.add("todo-item");

//   const toDoText = document.createElement("p");
//   toDoText.textContent = "todo.text";
//   if (toDoText === todo.text) {
//     toDoText.classList.add = "completed";
//   } else {
//     toDoText.classList.add = "";
//   }

//   const deleteBtn = document.createElement("button");
//   deleteBtn.classList.add = "delete";

//   const completeButton = document.createElement("button");
//   completeButton.textContent = "Marks as complete";

//   container.append(toDoItem);
//   toDoItem.append(toDoText);
//   toDoItem.append(deleteBtn);
//   toDoItem.append(completeButton);
// });

const render = () => {
  const container = document.getElementById("todoList");
  container.innerHTML = "";

  state.todos.forEach((todo) => {
    const item = document.createElement("div");
    item.className = "todo-item";
    if (todo.completed) {
      item.classList.add("completed");
    }

    const text = document.createElement("span");
    text.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      state.todos = state.todos.filter((t) => t !== todo);
      render();
    });

    item.addEventListener("click", (e) => {
      if (e.target !== deleteBtn) {
        todo.completed = !todo.completed;
        render();
      }
    });

    item.appendChild(text);
    item.appendChild(deleteBtn);
    container.appendChild(item);
  });
};
