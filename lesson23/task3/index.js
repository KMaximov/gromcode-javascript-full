const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done}, id) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', `${id}`)
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here
// 1. cтворити data-id для чекбоксу
// 2. створити ф-ю яка при кліку створює лішку з вказаним текстом та очистити поле ввода
// 3. створити ф-ю яка при кліку змінює статус чекбокса на true/false 
const inputElem = document.querySelector('.task-input');
const newListElem = document.querySelector('.btn');
const createTasksListElem = () => { 
  if (inputElem.value === '') {
    return;
  }
  const task = {
    text: inputElem.value,
    done: false,
  };
    tasks.push(task);
    inputElem.value = '';
    listElem.innerHTML = '';
    renderTasks(tasks);
};
newListElem.addEventListener('click', createTasksListElem);

const checkboxElem = event => {
  tasks[event.target.dataset.id].done = event.target.checked;
    listElem.innerHTML = '';
    renderTasks(tasks);
};

listElem.addEventListener('click', checkboxElem);
