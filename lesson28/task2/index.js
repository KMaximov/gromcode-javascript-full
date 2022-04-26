// 2. рекурсия - використовується не дуже часто, використовується щоб проходити по ДОМ об"єкту, каталог в вигляді дерева(дерево складається з вузлів)
const favorites = ['id-6', 'id-17'];

const tree = {
    id: 'id-1',
    name: 'Products',
    nodes: [
        {
            id: 'id-2',
            name: 'Food',
            nodes: [
                {
                    id: 'id-6',
                    name: 'Drinks',
                    nodes: []
                }
            ]
        },
        {
            id: 'id-17',
            name: 'Vehicles',
            nodes: []
        }
    ],
};

const markFavorites = (tree, favorites) => { 
    const isFavorite = favorites.includes(tree.id) // (перевіряємо чи входить ID в массив Favorites)

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites))  // (створюємо нове піддерево), проходимо по вузлам початкового дерева, отримуємо новий вузл і на нього викликаємо ф-ю
    }
}

const result = markFavorites(tree, favorites); // по id знаходимо вузл і змінюємо значення isFavorite на true

console.log(result);
