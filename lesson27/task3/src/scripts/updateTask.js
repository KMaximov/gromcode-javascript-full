import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const updateTask = event => {
    if (event.target.className !== 'list__item-checkbox') {
      return;
}
const tasks = getItem('tasksList');

const updatedTasks = tasks.map(task => {
  if (task.id == event.target.dataset.id) {
      task.done = !task.done;
  }
  return task;
});

setItem('tasksList', updatedTasks);

renderTasks()
};