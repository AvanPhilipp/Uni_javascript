let todos = [];

const list = document.getElementById("todo_container");
const form = document.getElementById("add");
list.hidden = false;
form.hidden = true;

const btnNew = document.getElementById("btn_new");
btnNew.addEventListener("click",()=>{
    list.hidden = !list.hidden;
    form.hidden = !form.hidden;
    btnNew.innerText = list.hidden ? "Show List" : "Add New";
})


const lblText = document.getElementById("lbl_add");
const btnAdd = document.getElementById("btn_add");
btnAdd.addEventListener("click",()=>{
    addTodo({
        label: lblText.value,
        isDone: false
    })
    renderTodos();
    lblText.value = null;
    list.hidden = !list.hidden;
    form.hidden = !form.hidden;
    btnNew.innerText = list.hidden ? "Show List" : "Add New";
});

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
function removeTodo(todo){
    todo = todo || {};
    var index = todos.indexOf(todo);
    if (index == -1) {
        throw new Error("No such Todo element in the list.")
    }
    todos.splice(index, 1);
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
    list.innerHTML = "";
    todos.forEach((todo)=>{
        const paragraph = document.createElement("p");
        const delbtn = document.createElement("button");
        paragraph.appendChild(document.createTextNode(todo.label));

        delbtn.appendChild(document.createTextNode("✖"));
        delbtn.classList.add("btn");
        delbtn.classList.add("btn-secondary");
        delbtn.style.float = "right";
        delbtn.addEventListener("click",()=>{
            removeTodo(todo);
            renderTodos();
        });

        paragraph.appendChild(delbtn);

        paragraph.classList.add("alert");

        if(todo.isDone){
            paragraph.classList.add("alert-success");
        }
        else{

            paragraph.classList.add("alert-danger");
        }

        paragraph.addEventListener("click", ()=>{
            todo.isDone = !todo.isDone;

            if(todo.isDone){
                paragraph.classList.add("alert-success");
                paragraph.classList.remove("alert-danger");
            }
            else{
                paragraph.classList.add("alert-danger");
                paragraph.classList.remove("alert-success");
            }

            saveTodos();
        });

        list.appendChild(paragraph);
    });
}

loadTodos();
printTodos()
renderTodos();
