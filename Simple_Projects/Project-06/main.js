//find element
const todoForm = document.querySelector(".todo-form");
const inputTodo = document.querySelector("#inputTodo");
const addTodoButton = document.querySelector("#addTodoButton");
const lists = document.querySelector("#lists");
const message = document.querySelector("#message");

//showMessege
const showMessage = (text,status)=>{
  message.textContent = text;
  message.classList.add(status);

    setTimeout(()=>{
      message.textContent = "";
      message.classList.remove(status);
    },1000)
};

//getDataFromLocalStorage
const getDataFromLocalStorage = ()=>{
  return localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [];
}

//createTodo
const createTodo = (todoId,todoValue)=>{
  const todoElement = document.createElement("li");
  todoElement.classList.add("list-group-item");
  todoElement.id = todoId;
  todoElement.innerHTML = `<span>${todoValue}</span><span><button class="btn" id="deleteButton"><i class="fa fa-trash"> </i></button>`;
  lists.appendChild(todoElement);
  
  const deleteButton = todoElement.querySelector("#deleteButton");
  deleteButton.addEventListener('click',deleteTodo);

}
//deleteTodo
const deleteTodo = (event)=>{
  const selectedTodo = event.target.parentElement.parentElement.parentElement;
  lists.removeChild(selectedTodo);
  showMessage("todo is deleted","danger");

  //delete from localStorage
  let todos = getDataFromLocalStorage();
  todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
  localStorage.setItem("myTodos",JSON.stringify(todos));
  
}

//addTodo
const addTodo = (event)=>{
  event.preventDefault();

  let todoValue = inputTodo.value;
  //Generate uniqueId
  let todoId = Date.now().toString();

  createTodo(todoId,todoValue);
  showMessage("todo is added","success");
  //add localStorage
  const todos = getDataFromLocalStorage();
  todos.push({todoId,todoValue});
  localStorage.setItem("myTodos",JSON.stringify(todos));

  inputTodo.value = "";
}
//todoLoads
const todoLoads = ()=>{
  let todos = getDataFromLocalStorage();
  todos.map((todo)=>{
    createTodo(todo.todoId,todo.todoValue);
  })
}
//addEventListenner
todoForm.addEventListener('submit',addTodo);
window.addEventListener('DOMContentLoaded',todoLoads);
