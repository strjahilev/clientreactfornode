import axios from '../axios/axios';

const _additem = (book) => ({
    type: 'ADD',
    book
});


export const add = (item = {
    title: ''

}) => {
    return (dispatch) => {
        const book = {
            title: item.title,
        };

        return axios.post('books/create', book).then(result => {
            dispatch(_additem(result.data));

        })   // dispatch({type: 'ADD', payload: item});

    };
};

const _getBooks = (books) => ({
    type: 'GET',
    books
});

export const getBooks = () => {
    return (dispatch) => {
        return axios.get('books').then(result => {
            const books = [];

            result.data.forEach(item => {
                books.push(item);
            });
console.log(books);
            dispatch(_getBooks(books));

        });
    };
};
// const _editBook = (id, updates) => ({
//     type: 'EDIT_BOOK',
//     id,
//     updates
// });
//
// export const editBook = (id, updates) => {
//     return (dispatch) => {
//         return axios.put(`books/${id}`, updates).then(() => {
//             dispatch(_editBook(id, updates));
//         });
//     }
// };