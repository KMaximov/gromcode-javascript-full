const pageElem = Array.from(document.querySelectorAll('.pagination__page'));
const handleClick = event => console.log(event.target.dataset.pageNumber);
pageElem.map(el => el.addEventListener('click', handleClick));