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

  let filtered = state.todos;
  if (state.filter === "active") {
    filtered = state.todos.filter((todo) => !todo.completed);
  }
  if (state.filter === "completed") {
    filtered = state.todos.filter((todo) => todo.completed);
  }

  filtered.forEach((todo) => {
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

document.getElementById("addBtn").addEventListener("click", () => {
  const value = document.getElementById("todoInput").value;
  if (value === "") return; // don't add empty todos
  state.todos = [...state.todos, { text: value, completed: false }];
  document.getElementById("todoInput").value = "";
  render();
});

render();

document.getElementById("btnAll").addEventListener("click", () => {
  state.filter = "all";
  render();
});

document.getElementById("btnActive").addEventListener("click", () => {
  state.filter = "active";
  render();
});

document.getElementById("btnCompleted").addEventListener("click", () => {
  state.filter = "completed";
  render();
});
