const baseUrl = 'https://627a4e1373bad50685866f2c.mockapi.io/api/v1/users';

export function getUsersList() {
    return fetch(baseUrl).then(response => response.json());
}

export function getUserById(userId) {
    return fetch(`${baseUrl}/${userId}`).then(response => response.json());
}
export function createUser(userData) {
    return fetch(baseUrl, {// потрібно вернути проміс щоб могли підписатися
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData), //дані в мережі ходять в вигляді рядків а не в вигляді об"єктів(як в JS) - тому приводимо об"єкт до рядка
    });
}

export function updateUser(userId, userData) {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData),
    });
}

export function deleteUser(userId) {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    });
}

// examples

const newUserData = {
    email: 'cool@email.com',
    firstName: 'Iron',
    lastName: 'Man',
    age: 42,
};

createUser(newUserData).then(() => {
    console.log('User created');
});

getUserById('2').then(userData => {
    console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const updatedUserData = {
    email: 'new@email.com',
    firstName: 'John',
    lastName: 'Doe',
    age: 17,
};

updateUser('1', updatedUserData).then(() => {
    console.log('User updated');
});

deleteUser('2').then(() => {
    console.log('User updated');
});

getUsersList().then(users => {
    console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

//   updateUser().then(response => response.json())
//   createUser().then(response => response.json())

// class User {

// };

// const user = {
//     age: 100,
//     run: function () {
//         this.age;
//     },
// };