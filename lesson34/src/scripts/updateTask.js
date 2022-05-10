import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updatedTask, deleteTask } from './tasksGetway.js';



export const updateTask = event => {
    if (event.target.className !== 'list__item-checkbox') {
      return;
  }
  const tasks = getItem('tasksList');  
  const taskId = event.target.dataset.id;
  const done = event.target.checked;
 
  // const { text, createDate} = tasks
  const { text } = tasks
    .find(task => task.id === taskId);

  const updatedTasks = {
    text,
    // createDate,
    done,
    // finishDate: done
    //   ? new Date().toISOString()
    //   : null
  }

  updatedTask(taskId, updatedTasks)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
  });


  // const updatedTasks = tasks.map(task => {
  //   if (task.id == event.target.dataset.id) {
  //      task.done = !task.done;
  // }
  //  return task;
  // });

  // setItem('tasksList', updatedTasks);

  // renderTasks()
};

export const deleteTasksItem = event => {
  if(event.target.className !== 'delete__btn') {
    return;
  }
  // const taskId = event.target.dataset.id;

  deleteTask(event.target.dataset.id)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
  });
}