import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';

export const createTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;

  if (!text) {
    return;
  }

  const newTask = { text: text, done: false, id: Math.random().toString() };

  const tasksList = getItem('tasksList');

  if (!tasksList) {
    setItem('tasksList', [newTask]);
  } else {
    setItem('tasksList', [...tasksList, newTask]);
  }

  inputElem.value = '';
  renderTasks();
};