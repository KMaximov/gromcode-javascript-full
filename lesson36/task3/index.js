const baseUrl = 'https://api.github.com/users';
const getUsersBlogs = async users => {
    const getBlog = async user => {
        const response = await fetch(`${baseUrl}/${user}`)
            .then(response => {
        // console.log(response);
                return response.json();
            })
            .then(response => {
        // console.log(response.blog);
                return response.blog;
            });
        return response;
    };
    // console.log(getBlog);
    // console.log(users);
    return users.map(el => getBlog(el));
};
    // console.log(users);
    // console.log(Promise.all(getBlogs));
    // return Promise.all(getBlogs);
    // const result = users.reduce((acc, el) => acc.push(getBlog(el)), []);
    // console.log(result);

    // const userData = await fetch(`${baseUrl}/${users}`)
    //     .then(response => {
    //         console.log(response);
    //         return response.json();
    //     })
    //     .then(response => {
    //         console.log(response.blog);
    //         return response.blog;
    //     });
    // console.log(userData);
    // console.log(result);
    // console.log(await [result]);
// };

getUsersBlogs(['facebook', 'google']);

// export const fetchUserData = userName => {
//     return fetch(`https://api.github.com/users/${userName}`) // fetch(url, options) -2й параметр не обо"вязковий, якщо пропускаємо то GET
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error('Failed to load data');
//         }); // promise
//     // .then(result => console.log(result));
// };