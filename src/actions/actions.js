import axios from '../axios/axios';

const _additem = (item) => ({
    type: 'ADD',
    payload: item
});


export const add = (item = {
    title: '',

}) => {
    return (dispatch) => {
        const book = {
            title: item.title,
        };

        return axios.post('books/create', book).then(result => {
            dispatch(_additem(result.data));

        })    // dispatch({type: 'ADD', payload: item});

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