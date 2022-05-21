const baseUrl = 'https://api.github.com/users';
const getUsersBlogs = async users => {
    const getBlog = async user => {
        const response = await fetch(`${baseUrl}/${user}`)
            .then(response => {
                return response.json();
            })
            .then(response => {
                return response.blog;
            });
        return response;
    };
    return users.map(el => getBlog(el));
};
getUsersBlogs(['facebook', 'google']);
