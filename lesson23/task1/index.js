const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault(); // івент відміняє дефолтне поведення браузера
    const formData = [...new FormData(formElem)]
        .reduce((acc, [field, value]) => ({ ... acc, [field] : value}), {})
        alert(JSON.stringify(formData)) // об"єкт в строкове уявлення
}

formElem.addEventListener('submit', onFormSubmit);

const emailInputElem = document.querySelector('#email'); // отримати доступ до поля Емеїл(форми)
const passwordInputElem = document.querySelector('#password'); // отримати доступ до поля пароля(форми)
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => value ? undefined : 'Required'; // ф-я вертає андефайнед якшо value вказано і 'Required' якщо не вказано

const isEmail = value => value.includes('@') ? undefined : 'Should be an email'; //ф-я на перевіру чи ввели емеіл

const onEmailChange = event => {
   const errorText = [isRequired, isEmail]
    .map(validator => validator(event.target.value))  // отримаємо доступ до с-а до елемента на якому спрацювала подія value = отримуємо значення 
    .filter(errorText => errorText)
    .join(', ');
    emailErrorElem.textContent = errorText;
}

emailInputElem.addEventListener('input', onEmailChange)

// на кожному зміненню в інпуті визивається ф-я яка приймає об"єкт івента його значення
// проганяємо значення по валідаторами і вставляємо генеруєму помилку

const onPasswordChange = event => {
    const errorText = [isRequired]
     .map(validator => validator(event.target.value))  // отримаємо доступ до с-а до елемента на якому спрацювала подія value = отримуємо значення 
     .filter(errorText => errorText)
     .join(', ');
     passwordErrorElem.textContent = errorText;
 }

 passwordInputElem.addEventListener('input', onPasswordChange);
