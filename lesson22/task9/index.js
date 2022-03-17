const taskElem = document.querySelector('.task-status');
const taskLog = event => console.log(event.target.checked);
taskElem.addEventListener('change', taskLog);

