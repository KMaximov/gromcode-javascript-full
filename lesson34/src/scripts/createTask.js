import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';
import { onCreateTask, getTasksList } from './tasksGetway.js';

export const createTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;

  if (!text) {
    return;
  }

  const newTask = { 
    text, 
    done: false,
    // createDate: new Date().toISOString(), 
    // id: Math.random().toString(),
  };

  onCreateTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    })
  // const tasksList = getItem('tasksList');
  // if (!tasksList) {
  //   setItem('tasksList', [newTask]);
  // } else {
  //   setItem('tasksList', [...tasksList, newTask]);
  // }

  inputElem.value = '';
};

// 1. Підготували дані.
// 2. Записали дані в базу данних.
// 3. Зчитати данні з сервера. (нові, обновлені).
// 4. Зберігаємо нові данні.
// 5. Робимо щось з новими данними. 