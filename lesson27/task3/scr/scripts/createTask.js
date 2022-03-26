import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';

export const createTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;

  if (!text) {
    return;
  }

  const newTask = { text: text, done: false, id: Math.random().toString() };

  const newTaskList = getItem('tasksList');

  if (!newTaskList) {
    setItem('tasksList', [newTask]);
  } else {
    setItem('tasksList', [...newTaskList, newTask]);
  }

  inputElem.value = '';
  renderTasks();
};