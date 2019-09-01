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
            console.log(book);
        })    // dispatch({type: 'ADD', payload: item});

    };
};