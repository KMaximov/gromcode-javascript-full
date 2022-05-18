export const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`) // fetch(url, options) -2й параметр не обо"вязковий, якщо пропускаємо то GET
        .then(response => {
            if (response.ok) {
               return response.json();
            }
            throw new Error('Failed to load data');
        }) // promise
        // .then(result => console.log(result));
};

export const fetchRepositories = url => 
    fetch(url)
        .then(response => {
            if(response.ok) {
               return response.json();
            }
            throw new Error('Failed to load data');
        });