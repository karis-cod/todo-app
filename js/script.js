const inpEle = document.querySelector('#inp');
const todoInpEle = document.querySelector('.todo-ul');
const addTodoEle = document.querySelector('.addtodo');
const formTodoEle = document.querySelector('.todo-form');
const dateTodoEle = document.querySelector('#date');
const timeTodoEle = document.querySelector('#time');
const liTodoEle = document.querySelector('.todo-li');
 
todolist = JSON.parse(localStorage.getItem("todolist")) || [];

function dateTimestamp() {
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const todayStr = `${yyyy}-${mm}-${dd}`;

if (dateTodoEle) {
  dateTodoEle.min = todayStr; 
}
}
dateTimestamp()

renderTodo()
function renderTodo() {
  let todolistHTML = '';
  for (let i = 0; i < todolist.length; i++) {
    const todoObj = todolist[i];
    const {name, duedate, time} = todoObj
    const html = `
      <li class="todo-li"><span class="elilipsis-link">${name} </span><span class="rap">
       <span class="datt">
        ${duedate} 
        </span>
         ${time}
         <button onclick="
           todolist.splice(${i},1); renderTodo(); saveTodo();"
                class="del">Delete 
         </button>
        </span>
      </li>
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

  }

});

 formTodoEle.addEventListener('submit', (event) => {
  event.preventDefault()
});


















/*  formTodoEle.addEventListener('submit', (e) => {
  e.preventDefault()

  liTodoEle.textContent = '';
  const vall = dateTodoEle.vall;
  if (!vall) {
    liTodoEle.textContent = 'you cannot pick a past date.';
    return;
  }

  liTodoEle.style.color = 'green';
  liTodoEle.textContent = 'good - date accepted:' + vall;
});  */

/* dateTodoEle.addEventListener('input', () => {
  liTodoEle.style.color = 'red';
  const vv = dateTodoEle.value;
  if (!vv) {
    liTodoEle.textContent = '';
    return;
  }
  if (new Date(vv).setHours(0,0,0,0) < new Date().setHours(0,0,0,0)) {
    liTodoEle.textContent = 'that is a past date';
  } else {
    liTodoEle.textContent = '';
  }
});

 */
