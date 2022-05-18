'use strict'

import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

// const onSearchUser = () => {
//     showSpinner();
//     cleanReposList();
//     const userName = userNameInputElem.value; // зчитуємо вказаний текст юзером в полі інпута
//     fetchUserData(userName) // отримуємо данні з серверу з вказаним текстом
//         .then(userData => {
//             renderUserData(userData);
//             return userData.repos_url;
//         })
//         .then(url => fetchRepositories(url))
//         .then(reposList => {
//             renderRepos(reposList);
//         })
//         .catch(err => {
//             alert(err.message);
//         })
//         .finally(() => {
//             hideSpinner();
//         })
// };

const onSearchUser = async () => {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value; // зчитуємо вказаний текст юзером в полі інпута
    try {
        const userData = await fetchUserData(userName);
        renderUserData(userData);
        const reposList = await fetchRepositories(userData.repos_url);
        renderRepos(reposList);
    } catch (err) {
        alert(err.message);
    } finally {
        hideSpinner();
    }
};

showUserBtnElem.addEventListener('click', onSearchUser);
