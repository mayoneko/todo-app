function addTodo() {
    const newTodoText = document.getElementById("todoInput").innerText;
    const todoList = document.getElementById("todoList");
    const todoNode = document.createElement("div");
    todoNode.append(newTodoText);
    todoList.append(todoNode);
}