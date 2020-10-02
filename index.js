function add() {
    var todoLists = document.getElementById('todoList');
    var todo = document.createElement("div");
    todo.id = "todo";
    var todoText = prompt('Todo');
    todo.innerHTML = "<input type=\"checkbox\"  id=\"checkBox\" > <h3 id=\"todoText\">" + todoText + "</h3> <button id=\"delete\"  onClick=\"this.parentNode.parentNode.removeChild(this.parentNode)\";>DELETE</button>";
    return todoLists.appendChild(todo);
}
function removeParents(e, root) {
    root = root ? root : document.body;
    var p = e.parentNode;
    while(root != p){
        e = p;
        p = e.parentNode;
    }
    root.removeChild(e);
}
