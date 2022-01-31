const todoList = document.getElementById('todo-list')
let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
for(let i = 0; i < tasks.length; i++) {
  const li = document.createElement('li')
  li.className='task'
  li.textContent = tasks[i]
  todoList.appendChild(li)
}