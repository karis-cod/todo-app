const inpEle = document.querySelector('#inp');
const todoInpEle = document.querySelector('.todo-ul');
const addTodoEle = document.querySelector('.addtodo');
const formTodoEle = document.querySelector('.todo-form');
const dateTodoEle = document.querySelector('#date');
const timeTodoEle = document.querySelector('#time');
const liTodoEle = document.querySelector('.todo-li');


todolist = JSON.parse(localStorage.getItem("todolist")) || [];

renderTodo()

function renderTodo() {
  let todolistHTML = '';
  for (let i = 0; i < todolist.length; i++) {
    const todoObj = todolist[i];
    const {name, duedate, time} = todoObj
    const html = `
      <li class="todo-li"> ${name}<span class="rap"><span class="datt">${duedate} </span> ${time}
      <button onclick="
      todolist.splice(${i},1); renderTodo(); saveTodo();"
      class="del">Delete</button></span></li>
    `;

    todolistHTML += html
  }

todoInpEle.innerHTML = todolistHTML;

};
function saveTodo() {
  localStorage.setItem("todolist", JSON.stringify(todolist));
}

addTodoEle.addEventListener('click', () =>{
  if (inpEle.value && timeTodoEle.value && dateTodoEle.value) {
    const name = inpEle.value;
    const duedate = dateTodoEle.value;
    const time = timeTodoEle.value;
    todolist.push({name,duedate,time});
    inpEle.value = '';
    saveTodo();
    renderTodo();    
  }
  else{
    const name = 'description ERROR!!!';
    const duedate = '';
    const time = '';
    todolist.push({name,duedate,time});
    inpEle.value = '';
    saveTodo();
    renderTodo(); 
  }

});

 formTodoEle.addEventListener('submit', (event) => {
  event.preventDefault()
});