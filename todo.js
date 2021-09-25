const toDoFrom = document.querySelector(".js-toDoForm")
const toDoInput = toDoFrom.querySelector("input")
const toDoList = document.querySelector(".js-toDoList")


const TODOS_LS = "toDos"

let toDos = [];

function filterFn(toDo) {
  
}

function deleteTodo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li)
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  })
  toDos = cleanToDos
  saveToDos()
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button")
  const span = document.createElement("span")
  const newId = toDos.length + 1
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo)
  span.innerText = text
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text : text,
    id : newId
  }
  toDos.push(toDoObj)
  saveToDos()
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue)
  toDoInput.value = "";
}


function loadToDos() {
  const loadeedToDos = localStorage.getItem(TODOS_LS)
  if(loadeedToDos !== null) {
    const parsedToDos = JSON.parse(loadeedToDos);
    parsedToDos.forEach(toDo => {
      paintToDo(toDo.text)
    });
  }
}

function init() {
  loadToDos();
  toDoFrom.addEventListener("submit", handleSubmit)
}

init()