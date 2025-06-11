const todos = [];

function addTodo() {
  const input = document.getElementById("todo-input");
  const todoText = input.value.trim();

  if (todoText !== "") {
    todos.push(todoText);
    input.value = "";
    renderTodos();
  }
}

function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo;
    list.appendChild(li);
  });
}

