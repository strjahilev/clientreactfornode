import React from 'react';
import {connect} from "react-redux";
import {getBooks} from "./actions/actions";
import Book from "./Book";
// import Book from './Book'

const List = props => {

    console.log(props.books);


        return <div>
            Book List:

                <ul>{props.books.map(book => {
console.log(book.title);
return (<li key={book.id}>
        <Book {...book} /></li>
               )
                })}
                </ul>
        </div>

};
let mapStateToProps=(state) => {
    return {
        books: state.getbook
    }
};
let dispatchMapToProps=(dispatch)=>{
    return {

        onGetItem: () => {dispatch(getBooks())}

    }
};
export default connect(
    mapStateToProps,
dispatchMapToProps
) (List);

