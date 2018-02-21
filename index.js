let todos = [];

const list = document.getElementById("todo_container");


function addTodo(todo){
    todo = todo || {};
    // console.log(todo);
    if(typeof todo.label !== "string"){
        throw new Error("Todo should have a label");
    }
    if(typeof todo.isDone !== "boolean"){
        throw new Error("Todo should have a boolean state (isDome)");
    }
    todos.push(todo);
    saveTodos();
}

function saveTodos(){
    localStorage.setItem("saved_todos",JSON.stringify(todos));
}

function loadTodos(){
    todos = JSON.parse(localStorage.getItem("saved_todos")) || [];
}

function printTodos(){
    todos.forEach((todo)=>{
        console.log(todo.label, todo.isDone ? "✓":"Work in progress");
    });
}

function renderTodos(){

    todos.forEach((todo)=>{

        const todoElem = document.createElement("div");
        todoElem.appendChild(document.createTextNode(todo.label));

        if(todo.isDone){
            todoElem.style.textDecoration = "line-through";
        }

        todoElem.addEventListener("click", ()=>{
            todo.isDone = !todo.isDone;

            if(todo.isDone){
                todoElem.style.textDecoration = "line-through";
            }
            else{
                todoElem.style.textDecoration = "";
            }
        });
        todo
        list.appendChild(todoElem);
    });
}

loadTodos();
printTodos()
renderTodos();
