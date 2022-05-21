// export const fetchUserData = userName => {
//     return fetch(`https://api.github.com/users/${userName}`) // fetch(url, options) -2й параметр не обо"вязковий, якщо пропускаємо то GET
//         .then(response => {
//             if (response.ok) {
//                return response.json();
//             }
//             throw new Error('Failed to load data');
//         }) // promise
//         // .then(result => console.log(result));
// };
// export const fetchRepositories = url =>
//     fetch(url)
//         .then(response => {
//             if(response.ok) {
//                return response.json();
//             }
//             throw new Error('Failed to load data');
//         });

export const fetchUserData = async userName => {
    const response = await fetch(`https://api.github.com/users/${userName}`); //
    if (response.ok) {
        const result = await response.json();
        return result;
    }
    throw new Error('Failed to load data'); // буде виконуватись як reject promise
};

export const fetchRepositories = async url => {
    const response = await fetch(url);
    if (response.ok) {
        const result = await response.json();
        return result;
    }
    throw new Error('Failed to load data');
};
