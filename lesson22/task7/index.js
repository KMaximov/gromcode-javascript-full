const firstBtn = document.querySelector('.btn');
const secondBtn = document.querySelector('.btn:last-child');
const handleClick = event => console.log(event.target.textContent);
firstBtn.addEventListener('click', handleClick);
secondBtn.addEventListener('click', handleClick);