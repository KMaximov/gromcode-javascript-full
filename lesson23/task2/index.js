// data - зарезервовані під користувацькі атрибути 
const generateNumbersRange = (from, to) => { // робимо новий масив значень from - to
    const result = [];
    for(let i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
}

const getLineSeats = () => generateNumbersRange(1, 10) // беремо потрібну к-сть ліній
    ////циклом меп ідемо від 1 до 10, генеруємо лінію та заповняємо сидіннями
    .map(seatNumber => ` 
    <div 
        class="sector__seat" 
        data-seat-number="${seatNumber}"
    ></div>
    `).join(''); // склеюємо сидіння

const getSectorLines = () => {
   const seatsString = getLineSeats();
   return generateNumbersRange(1, 10) // беремо потрібну к-сть ліній
   //циклом меп ідемо від 1 до 10, генеруємо лінію та заповняємо сидіннями
    .map(lineNumber => ` 
    <div
        class="sector__line" 
        data-line-number="${lineNumber}"
    >${seatsString}</div>
    `).join(''); // склеюємо сидіння
}

const arenaElem = document.querySelector('.arena');

const renderArena = () => {  
    const linesString = getSectorLines();
    const sectorsString = generateNumbersRange(1, 3)
    .map(sectorNumber => `
    <div 
        class="sector" 
        data-sector-number="${sectorNumber}"
    >${linesString()}</div>
    `).join('');

    arenaElem.innerHTML = sectorsString;
    // arenaElem.append = sectorsString;
};

const onSeatSelect = event => {
    const isSeat = event.target.classList.contains('sector__seat'); // перевіряємо чи є такий класс в сидінні

    if(!isSeat) {
        return;
    }

    const seatNumber = event.target.dataset.seatNumber;
    const lineNumber = event.target.closest('.sector__line').dataset.lineNumber; // знаходимо найближчу лінію
    const sectorNumber = event.target.closest('.sector').dataset.sectorNumber; // сектор  
    const selectedSeatElem = document.querySelector('.board__selected');
    selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);
