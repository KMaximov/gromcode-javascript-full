// 1. записати змінні для всіх класів 
// 2. зробити вказаний функціонал для кнопки clear-btn та очистити поле вводу 
// 3. зробити вказаний функціонал для квадрату
// 4. зробити вказаний функціонал для кнопки attach-handlers-btn
// 5. зробити вказаний функціонал для кнопки remove-handlers-btn

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsList = document.querySelector('.events-list');
const clearElem = document.querySelector('.clear-btn');
const removeElem = document.querySelector('.remove-handlers-btn');
const attachElem = document.querySelector('.attach-handlers-btn');

const clear = () => eventsList.innerHTML='';
clear();

const logTarget = (text, color) => eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;

const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');

const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');
const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');

pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);
divElem.addEventListener('click', logGreenDiv);

spanElem.addEventListener('click', logGreySpan, true);
pElem.addEventListener('click', logGreyP, true);
divElem.addEventListener('click', logGreyDiv, true);

const attach = () => {
    pElem.addEventListener('click', logGreenP);
    spanElem.addEventListener('click', logGreenSpan);
    divElem.addEventListener('click', logGreenDiv);
    
    spanElem.addEventListener('click', logGreySpan, true);
    pElem.addEventListener('click', logGreyP, true);
    divElem.addEventListener('click', logGreyDiv, true);
}

const remove = () => {
    pElem.removeEventListener('click', logGreenP);
    spanElem.removeEventListener('click', logGreenSpan);
    divElem.removeEventListener('click', logGreenDiv);
    
    spanElem.removeEventListener('click', logGreySpan, true);
    pElem.removeEventListener('click', logGreyP, true);
    divElem.removeEventListener('click', logGreyDiv, true);
}

clearElem.addEventListener('click', clear);
attachElem.addEventListener('click', attach);
removeElem.addEventListener('click', remove);