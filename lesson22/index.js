
const elem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {  
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`
}
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');

const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');

spanElem.addEventListener('click', logGreenSpan);
pElem.addEventListener('click', logGreenP); 
elem.addEventListener('click', logGreenDiv);

spanElem.addEventListener('click', logGreySpan, true); 
pElem.addEventListener('click', logGreyP, true);
elem.addEventListener('click', logGreyDiv, true);

const clearElem = document.querySelector('.events-list').innerHTML = '';
const clearList = document.querySelector('.clear-button');
clearList.addEventListener('click', clearElem);

// document.querySelector('.search__input').value витягнути з інпута значення type <input type="text" class="search__input" /> 