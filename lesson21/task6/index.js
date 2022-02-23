export const setButton = buttonText =>
  document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;

const setButtonText = buttonText =>
  document.querySelector('body').textContent = `<button>${buttonText}</button>`;
