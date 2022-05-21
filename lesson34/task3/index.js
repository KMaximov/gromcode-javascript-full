'use strict';

const userEmail = document.querySelector('#email');
const userName = document.querySelector('[name = name]');
const userPassword = document.querySelector('[name = password]');
const createUserForm = document.querySelector('.login-form');
const userRegisterBtn = document.querySelector('.submit-button');

// const checkValid = () => {
//     if (createUserForm.reportValidity()) {
//         userRegisterBtn.disabled = false;
//     }
// };

const checkValid = () => {
    const isValidForm = createUserForm.reportValidity();
    if (isValidForm) {
        userRegisterBtn.removeAttribute('disabled');
    } else {
        userRegisterBtn.setAttribute('disabled', true);
    }
};

createUserForm.addEventListener('input', checkValid); // можна через change подію, тільки кнопка буде активна після втрати фокуса

// createUserForm.addEventListener('input', () => {
//     if (createUserForm.reportValidity()) {
//         userRegisterBtn.disabled = false;
//     }
// });

const newUser = userData => {
    return fetch('https://627a4e1373bad50685866f2c.mockapi.io/api/v1/userForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData),
    });
};

const registerNewUser = event => {
    event.preventDefault();

    const newUserData = {
        name: userName.value,
        password: userPassword.value,
        email: userEmail.value,
    };

    newUser(newUserData)
        .then(response => response.json())
        .then(response => alert(JSON.stringify(response)))
        .then(() => {
            userName.value = '';
            userPassword.value = '';
            userEmail.value = '';
        })
        // .then(() => {
        //     userRegisterBtn.disabled = true;
        // });
};

userRegisterBtn.addEventListener('click', registerNewUser);
