const checkboxElem = document.querySelector('.task-status')
const checkboxLog = () => console.log(checkboxElem.checked = true);
checkboxElem.addEventListener('change', checkboxLog)