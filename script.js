function addTodo() {
    const newTodoText = document.getElementById("todoInput").value;
    const todoList = document.getElementById("todoList");
    const todoNode = document.createElement("div");
    if (newTodoText.trim()) {
        todoNode.innerHTML
            = '<div class="todoBox">'
            + '<p>' + newTodoText + '</p>'
            + '<button onclick="doneTodo();">done</button>'
            + '<button onclick="deleteTodo();">delete</button>'
            + '</div>';
        todoList.append(todoNode);
    }
}