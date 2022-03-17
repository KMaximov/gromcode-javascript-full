const inputElem = document.querySelector('.text-input');
const inputLog = event => console.log(event.target.value);
inputElem.addEventListener('change', inputLog);