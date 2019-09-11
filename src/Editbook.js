import {connect} from "react-redux";
import React from 'react';
import App from "./App";
import {editBook} from "./actions/actions";



const Editbook = (props) => (

            <div >
                <App
                    book={props.book}
                onEditBook={props.onEditBook}
                />
            </div>
);
const mapStateToProps = (state, props) => {
    return {
        book: state.getbook.find((book) =>
            book.id === props.match.params.id)
    };
};
const dispatchMapToProps = (dispatch)=> {
    return {
        onEditBook: (book) => {
            dispatch(editBook(book.id, book))
        }
    }
};

export default connect(
    mapStateToProps,
    dispatchMapToProps
) (Editbook);