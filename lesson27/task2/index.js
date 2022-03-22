const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
    const isButton = e.target.classList.contains('counter__button') // чи був клік по кнопці(перевіряємо чи в таргет(цілевий елемент на якому був виповнений клік) чи є певний класс)
    if (!isButton) { // якщо клік був не по кнопці то виходимо
        return;
    } 
    const action = e.target.dataset.action; // беремо на таргет елементі свойство датасет та зчитуємо дата атрибут екшен

    const oldValue = Number(counterValueElem.textContent); // зчитали значення(textContent) та через Намбер піднесли до числа
    
    //Local Storage variable
    const newValue = action === 'decrease' // якщо був клік по decrease
    ? oldValue -1 // то відняли 1 
    : oldValue +1; // в іншому випадку додали 1

    localStorage.setItem('counter__value', newValue)
    
    counterValueElem.textContent = newValue;
}

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => { 
    counterValueElem.textContent = e.newValue; //якщо змінили щось в одній вкладці то івент буде отриманий по всім вкладкам на цьому джерелі
}
window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0; // синхронизація між сторінками (вкладками), коли клікаємо в одній вкладці - значення змінюється в інших також)
}
document.addEventListener('DOMContentLoaded', onDocumentLoaded);