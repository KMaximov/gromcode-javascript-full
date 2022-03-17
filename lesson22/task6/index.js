const buttonElem = document.querySelector('.single-use-btn');
const buttonLog = () => {
    console.log('clicked');
    buttonElem.removeEventListener('click', buttonLog);
}
buttonElem.addEventListener('click', buttonLog);

