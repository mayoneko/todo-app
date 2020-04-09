function addTodo() {
    const newTodoText = document.getElementById("todoInput").value;
    const todoList = document.getElementById("todoList");
    const todoNode = document.createElement("div");
    if (newTodoText.trim()) {
        todoNode.append(newTodoText);
        todoList.append(todoNode);
    }
}