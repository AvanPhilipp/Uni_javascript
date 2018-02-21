# Uni_javascript

Házi feladatok beadására használt repo...

`index.html` hosted in github pages.

## lesson_1

Console applcation handeling todo list.

**fields**
* `todos[]:{label:string, isDone:boolean}[]` -> Array of todo objects.

**functions**
* `addTodo({label:string, isDone: boolean}):void` -> Adds a new element to the list of todos. Checks the validity of the input element. Also saves it to the localeStorage under key 'saved_todos'.
* `removeTodo({label:string, isDone: boolean}):void` -> Removes the element from the todos. Checks if is there any todos with the data. Removes only the first if there is multiple same is present.Also saves it to the localeStorage under key 'saved_todos'.
* `saveTodos():void` -> Saves the actual todo list to the localeStorage under key 'saved_todos'.
* `loadTodos():void` -> Restores the todos list from the localeStorage according to the 'saved_todos' key.
* `printTodos():void` -> prints the actual todos list to the console. First displayed the todo.label, then a "✓" if it is done or "Work in progress" if it is not.

## lesson_2

HTML rendered todo list. Extension of lesson_1.

**fields**
* `list:HTMLElement` -> The element that contains the todolist elements.
* `form:HTMLElement` -> Container of an input text and a button. Used to create new todo elements.
* `btnNew:HTMLElement` -> Switches between the list and the new todo views.
* `lblText:HTMLElement` -> Text input field in the new todo form. The new todo has this.value as label.
* `btnAdd:HTMLElement` -> Button calls the new todo methode. The new todo's isDone parameter will be false.

**functions**
* `renderTodos():void` -> Renders the list to the HTML DOM.