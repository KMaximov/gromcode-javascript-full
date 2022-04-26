'use strict'

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`) // fetch(url, options) -2й параметр не обо"вязковий, якщо пропускаємо то GET
        .then(response => response.json()) // promise
        // .then(result => console.log(result));
};

const renderUserData = userData => {    
    const { avatar_url, name, location } = userData;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location
        ? `from ${location}` : null;
}

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
    const userName = userNameInputElem.value; // зчитуємо вказаний текст юзером в полі інпута
    fetchUserData(userName) // отримуємо данні з серверу з вказаним текстом
        .then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);