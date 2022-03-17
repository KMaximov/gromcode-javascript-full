const inputElem = document.querySelector('.text-input');
const inputLog = () => console.log(inputElem.value);
inputElem.addEventListener('change', inputLog)