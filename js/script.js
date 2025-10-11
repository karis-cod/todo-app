 const inpEle = document.querySelector('#inp');
const todoInpEle = document.querySelector('.todo-ul');
const addTodoEle = document.querySelector('.addtodo');
const formTodoEle = document.querySelector('.todo-form');
const dateTodoEle = document.querySelector('#date');
const liTodoEle = document.querySelector('.todo-li');

todolist = [{
  name: 'suger',
  duedate: '2-22-222 2'
}];

renderTodo()

function renderTodo() {
  let todolistHTML = '';
  for (let i = 0; i < todolist.length; i++) {
    const todoObj = todolist[i];
    const {name, duedate} = todoObj
    const html = `<li class="todo-li">${name} <span class="lispn">${duedate}</span><button onclick="
    todolist.splice(${i},1); renderTodo();"
    class="del">Delete</button></li>`;
    todolistHTML += html
  }
todoInpEle.innerHTML = todolistHTML;
};


addTodoEle.addEventListener('click', () =>{
    const name = inpEle.value;
    const duedate = dateTodoEle.value;
    todolist.push({name,duedate});
    inpEle.value = ''
    renderTodo()
});
 formTodoEle.addEventListener('submit', (event) => {
  event.preventDefault()
})